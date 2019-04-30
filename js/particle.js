var particle = function(srcPos, destPos, permanent = false, tickState = 0) {
    this.moves = [];
    this.prevRadius = 0;
    this.curRadius;
    this.permanent = permanent;

    this.srcPos = srcPos;
    this.destPos = destPos;
    this.pos = srcPos;

    this.dr = null;
    this.tick = tickState;

    if(this.destPos && this.srcPos) {
        this.dx = (this.destPos.lat - this.srcPos.lat);
        this.dy = (this.destPos.lng - this.srcPos.lng);
    }

    this.getTick = function() {
        return this.tick;
    }

    this.getPos = function() {
        return this.pos;
    }

    this.setRadius = function(radius) {
        if(this.curRadius) {
            this.prevRadius = this.curRadius;
        }
        this.dr = Math.round(radius - this.prevRadius)/FRAMES_PER_TICK;
        this.curRadius = this.prevRadius;
    }

    this.setTick = function(tick = 0) {
        this.tick = tick;
    }

    this.getRadius = function() {
        return Math.round(this.curRadius);
    }

    this.getMoves = function() {
        return this.moves;
    }

    this.deactivate = function() {
        this.permanent = false;
    }

    this.isActive = function() {
        return this.tick < 1 || this.moves.length != 0 || this.permanent;
    }

    this.nextTick = function(path, frames_per_tick) {
        if(this.dr != 0 && this.tick > 0) {
            this.curRadius = this.prevRadius + this.dr * Math.min(this.tick, frames_per_tick)
        }

        if(this.dx && this.dy && this.tick >= 0) {
            if(this.tick < frames_per_tick - 1) {
                var sx = this.srcPos.lat + this.dx * path[this.tick];
                var sy = this.srcPos.lng + this.dy * path[this.tick];

                var ex = this.srcPos.lat + this.dx * path[this.tick + 1];
                var ey = this.srcPos.lng + this.dy * path[this.tick + 1];

                try {
                  var src = new L.LatLng(sx, sy);
                  this.moves.unshift({'src': src, 'dest': new L.LatLng(ex, ey)});
                  this.pos = src;
                }
                catch(err) {
                  var b = err;
                }
            }

            if(this.tick >= frames_per_tick/2) {
                this.moves.pop();
            }
        }

        this.tick += 1;
    }
}