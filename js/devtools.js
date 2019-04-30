function registerLabelsCollector() {
    var labels = {}
    var label = "";
    
    var i = 0;
    var keys = Object.keys( res.zones_latlng );
    
    function onMapClick(e) {
        var location = prompt("Location", label);
        if(location != null && location != "")
            labels[location] = [e.latlng.lat, e.latlng.lng];
    }

    function onKeyPress(e) {
        if(e.originalEvent.key == 'k')
            console.debug(labels);
        
        if(e.originalEvent.key == 'b') {
            label = keys[i];
            i++;
            console.warn(label);
        }
    }

    map.on('click', onMapClick);
    map.on('keypress', onKeyPress); 
}