// http://www.coffeegnome.net/creating-contr…button-leaflet
var sliderControl = L.Control.extend({
  
  options: {
    position: 'topleft'
  },
  
  initialize: function(onInputCallback) {
      this.slideContainer = L.DomUtil.create('div', 'slidecontainer');
      this.slider = L.DomUtil.create('input', 'slider', this.slideContainer);
      this.span = L.DomUtil.create('span', null, this.slideContainer);
      this.span.innerHTML = "1";
      var span = this.span;
      var slider = this.slider;
      this.updateSpeedTitle = function(speed) {
        span.innerHTML = speed;
        slider.value = speed;
      };
      this.onInputCallback = onInputCallback;
  },
  
  onAdd: function (map) {  
    this.slider.type="range";
    this.slider.value = "1";
    this.slider.min = "1";
    this.slider.max = "10";

    this.slider.style.width = '100px';
    
    _this = this;
    this.slider.oninput = function() {
        _this.onInputCallback(this.value);
    }
    
    return this.slideContainer;
  }
});