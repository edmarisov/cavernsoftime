var item, moveTo, l, t, animations, locName, startingTick, moves, movingP, content;
var particlesCanvasDraw = function(objectsToRender){
    this.objectsToRender = objectsToRender;
    this.particlesCache = {};
    this.specialParticlesCache = {};
    this.ignoreZones = {};
    this.tooltipCache = {};

    this.resetAllCache = function() {
        for (var key in this.particlesCache) {
            this.ignoreZone(key);
        }
        this.particlesCache = {};
        this.specialParticlesCache = {};
        this.ignoreZones = {};
        this.tooltipCache = {};
        this.objectsToRender['particles'] = [];
        this.objectsToRender['special_particles'] = [];
    }

    this.ignoreZone = function(key) {
        this.ignoreZones[key] = true;
        p = this.particlesCache[key];
        if(p) p.deactivate();
        t = this.tooltipCache[key];
        if(t) t.remove();

        this.tooltipCache[key] = null;
        this.particlesCache[key] = null;
    }

    this.addMovingParticles = function(movingParticles, moveFrom, animations) {
        for (var locName in movingParticles) {
           if(locName == moveFrom || locName == 'nan') continue;
           moveTo = this.particlesCache[locName];
           if(!moveTo) continue;

           startingTick = Math.round(-Math.random() * FRAMES_PER_TICK);
           movingP = new particle(p.getPos(), moveTo.getPos(), false, startingTick);
           movingP.setRadius(Math.floor(movingParticles[locName]));

           animations.push(movingP);
        }
    }

    this.updateTooltip = function(key, count, meta) {
        if(!this.tooltipCache[key]) {
            var latlng = res.zones_latlng[key];
            l = L.marker(latlng, {'opacity':0}).addTo(map);
            t = l.bindTooltip("");
            this.tooltipCache[key] = t;
        }

        t = this.tooltipCache[key];

        content = "<dt><b>" + key + ": </b></dt>"
                               + "Players: " + count;

        if(meta && meta['tooltip']) {
            for(var key in meta['tooltip'])
                content += "<br>" + key + ": " + meta['tooltip'][key];

            t.openTooltip();
        }

        if(count == 0) {
            t.closeTooltip();
        }

        t.setTooltipContent(content);
    }

    this.addOrUpdatePermanentParticle = function(cache, key, char_count, meta, animations) {
        if(!char_count || char_count == 0) return;

        if(!cache[key] && !this.ignoreZones[key]) {
          var latlng = res.zones_latlng[key];
          var latlngObj = new L.LatLng(latlng[0], latlng[1]);
          p = new particle(latlngObj, null, true); 
          cache[key] = p;
          animations.push(p);
        }

        p = cache[key];
        if(!p) return;

        if(meta && meta['radius'])
            p.setRadius(meta['radius']);
        else
            p.setRadius(char_count);

        p.setTick(0);
    }

    this.setData = function (data, dateInfo){
        animations = this.objectsToRender['particles'];

        for (var key in data) {
            if(!res.zones_latlng[key]) {
              //console.debug(key);
              continue;
            }

            this.updateTooltip(key, data[key]['char_count'], data[key]['meta']);  

            this.addOrUpdatePermanentParticle(
                this.particlesCache, 
                key, 
                data[key]['char_count'],
                data[key]['meta'],
                this.objectsToRender['particles']
            );

            this.addOrUpdatePermanentParticle(
                this.specialParticlesCache, 
                key, 
                data[key]['special_char_count'],
                null,
                this.objectsToRender['special_particles']
            );

            moves = data[key]['moves'];
            this.addMovingParticles(moves, key, this.objectsToRender['particles']);

            moves = data[key]['special_moves'];
            this.addMovingParticles(moves, key, this.objectsToRender['special_particles']);
        }

        for (var key in this.particlesCache) {
            if(!data[key]) {
               p = this.particlesCache[key];
               p.setRadius(1);
               this.updateTooltip(key, 0);  
            }
        }

        for (var key in this.specialParticlesCache) {
            if(!data[key]) {
               p = this.specialParticlesCache[key];
               p.setRadius(1);
               this.updateTooltip(key, 0);  
            }
        }

        this.objectsToRender['dateInfo'] = {'tick': dateInfo['first_call'] ? 24: 0, 'date': dateInfo['date']};
        this.needRedraw(); // -- call to drawLayer
    };

    this.onDrawLayer = function (canvasInfo){
        renderer.setInfo(canvasInfo);
    }
}
particlesCanvasDraw.prototype = new L.CanvasLayer(); // -- setup prototype 