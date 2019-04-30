rtools = {};

rtools.color = (function colorizator() { 
    var c = d3.scaleLinear()
       .domain([0,15,40,100,400])
       .range(["white", "yellow", "orange", "red", "brown"])
       .interpolate(d3.interpolateHcl);

    var cache = {};
    function impl(count) {
        if(cache[count]) return cache[count];

        cache[count] = c(count);
        return cache[count];
    }

    return impl;
})();

rtools.colorize = (function() {
    var imgData, imgCtx, i, c, tempFileCanvas;
    var cache = {};
    function impl(img, radius) {

        if(cache[radius])
            return cache[radius];

        if (!img)
            return img;

        c = d3.rgb(rtools.color(radius));

        tempFileCanvas = document.createElement("canvas");
        if (tempFileCanvas.width != img.width)
            tempFileCanvas.width = img.width;
        if (tempFileCanvas.height != img.height)
            tempFileCanvas.height = img.height;

        imgCtx = tempFileCanvas.getContext("2d");
        imgCtx.drawImage(img, 0, 0);
        imgData = imgCtx.getImageData(0, 0, img.width, img.height);
        i = imgData.data.length;

        while((i -= 4) > -1) {
            imgData.data[i + 3] = imgData.data[i];
            if (imgData.data[i + 3]) {
                imgData.data[i] = c.r;
                imgData.data[i + 1] = c.g;
                imgData.data[i + 2] = c.b;
            }
        }
        imgCtx.putImageData(imgData, 0, 0);
        cache[radius] = tempFileCanvas;
        return tempFileCanvas;
    }

    return impl;
} ());