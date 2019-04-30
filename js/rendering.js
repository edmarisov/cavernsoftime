var SPEED, TICK, TIME_PER_FRAME, PATH, FRAMES_PER_TICK, multiplier;

function updateSpeed(speed, updateSpeedTitle) {
    SPEED = speed;
    FRAMES_PER_TICK = 24/speed;
    TICK = 1000/SPEED;
    TIME_PER_FRAME = TICK/FRAMES_PER_TICK;
    PATH = [];
    multiplier = Math.pow(100, 1/FRAMES_PER_TICK);

    for(var i=0; i < FRAMES_PER_TICK; i++) {
        PATH.push((Math.pow(multiplier, i) / 100).toPrecision(2));
    }
    PATH.push(1);
    PATH.reverse();

    updateSpeedTitle(speed);
}

var initRenderer = function(objectsToRender, consumeMoreDataCallback) {
    this.info;
    var ctx, circle, img, ne, neXY, sw, swXY;
    var alpha, p, xy, r, zoomR, moves, curTick, alpha;
    var i,j;
    var datetime, particles, posLatLng;
    var skyAlpha = 0,
    displayDate,
    curHour;

    function getRadius(count) {
        var zoom = map.getZoom() <= 0 ? 1: (map.getZoom() + 1);
        return Math.min(count, 50) * zoom;
    }

    function drawDate(ctx, swXY, dateInfo) {
        if(!dateInfo) return;
        
        displayDate = dateInfo['date'].format("MMM Do YYYY, h:mm:ss a, ddd");
        var weight = dateInfo['tick'];
        ctx.font = "30px Arial";
        ctx.fillStyle = rtools.color(weight*2);
        ctx.fillText(displayDate, swXY.x, swXY.y);
        dateInfo['tick'] = Math.max(0, dateInfo['tick'] - 1);
    }

    function shadeViewport(skyAlpha, ctx, neXY, swXY) {
        ctx.fillStyle = '#160A47';
        ctx.globalAlpha = skyAlpha;
        var t = L.DomUtil.get('map');
        ctx.fillRect(swXY.x, swXY.y, neXY.x - swXY.x, 0 - swXY.y);
        ctx.globalAlpha = 1.0;
    }

    function drawDayLight(ctx, neXY, swXY, dateInfo) {
        if(!dateInfo) return;
        
        curHour = dateInfo['date'].hour();
        if(curHour > 20 || curHour < 5) {
            skyAlpha = Math.min(skyAlpha + 0.02/FRAMES_PER_TICK, 0.5);
            shadeViewport(skyAlpha, ctx, neXY, swXY);
        } else if(curHour >= 5 && skyAlpha > 0) {
            skyAlpha = Math.max(skyAlpha - 0.02/FRAMES_PER_TICK, 0);
            shadeViewport(skyAlpha, ctx, neXY, swXY);
        }
    }

    function drawParticle(p) {
        posLatLng = p.getPos();

        if (posLatLng.lat > sw.lat 
                && posLatLng.lat < ne.lat 
                    && posLatLng.lng > sw.lng 
                        && posLatLng.lng < ne.lng) {

            xy = info.layer._map.latLngToContainerPoint(posLatLng);

            r = p.getRadius();
            if(r > 0) {
                img = rtools.colorize(res.particle_img, r);
                zoomR = getRadius(r);
                ctx.drawImage(img, xy.x - zoomR / 2, xy.y - zoomR / 2, zoomR, zoomR);
            }

            //ctx.lineCap="round";
            var strokeStyle = ctx.strokeStyle;
            ctx.lineJoin="round";
            ctx.lineWidth = Math.max(1, r);
            ctx.fillStyle = "none";
            ctx.strokeStyle = rtools.color(r*2);

            moves = p.getMoves();
            curTick = p.getTick();
            alpha = ctx.globalAlpha;
            j = moves.length;
            while ((j -= 1) > -1) {
                var mvXY = moves[j];

                lineFrom = info.layer._map.latLngToContainerPoint(mvXY.src);
                lineTo = info.layer._map.latLngToContainerPoint(mvXY.dest);

                ctx.beginPath();
                ctx.moveTo(lineFrom.x, lineFrom.y);

                ctx.lineTo(
                    Math.floor(lineTo.x),
                    Math.floor(lineTo.y)
                );

                ctx.globalAlpha = 0.8 * (moves.length - j)/curTick;
                ctx.stroke();
            }

            ctx.strokeStyle = strokeStyle;
            ctx.globalAlpha = alpha;

        }
    }

    function drawParticles(particles) {
        for (i = particles.length; i--;) {
            p = particles[i];
            if (!p.isActive()) {
                particles.splice(i, 1);
                continue;
            } 

            drawParticle(p);

            p.nextTick(PATH, FRAMES_PER_TICK);
        }
    }

    function draw() {
        dateInfo = objectsToRender['dateInfo'];
        
        ne = this.info.bounds.getNorthEast();
        neXY = this.info.layer._map.latLngToContainerPoint(ne);
        sw = this.info.bounds.getSouthWest();
        swXY = this.info.layer._map.latLngToContainerPoint(sw);

        ctx = this.info.canvas.getContext('2d');
        ctx.clearRect(swXY.x, swXY.y, neXY.x - swXY.x, 0 - swXY.y);
        
        drawDayLight(ctx, neXY, swXY, dateInfo);
        drawDate(ctx, swXY, dateInfo);
        
        drawParticles(objectsToRender['particles']);   
    }
    
    function render(currentFrame, lastupdate) {
        if(this.info) draw();
        
        currentFrame += 1;

        if(currentFrame < FRAMES_PER_TICK) {
            setTimeout(function() { 
                render(currentFrame, moment().valueOf());
            }, Math.max(0, TIME_PER_FRAME - (moment().valueOf() - lastupdate)) );
        }else {
            setTimeout(function() {
                if(consumeMoreDataCallback()) {
                    render(0, moment().valueOf());
                } else {
                    currentFrame -= 1;
                    render(currentFrame, moment().valueOf());
                }

            }, Math.max(0, TIME_PER_FRAME - (moment().valueOf() - lastupdate)) );
        }
    }
    
    this.start = function() {
        render(0, moment().valueOf());
    }
    
    this.setInfo = function(info) {
        this.info = info;
    }
    
    return this;
}