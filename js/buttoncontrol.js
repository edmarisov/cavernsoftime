// http://www.coffeegnome.net/creating-contr…button-leaflet
var buttonControl = L.Control.extend({
  
  options: {
    position: 'topleft'
  },
  
  initialize: function(title, hint, clickCallback) {
        this.title = title;
        this.hint = hint;
        this.clickCallback = clickCallback;
  },
  
  onAdd: function (map) {
    var container = L.DomUtil.create('input');
    container.type="button";
    container.title = this.hint;
    container.value = this.title;

    container.style.backgroundColor = 'Transparent';     
    container.style.border = '2px solid #f7b10a';
    container.style.color = '#f7b10a';
    container.style.backgroundSize = "100px 30px";
    container.style.width = '100px';
    container.style.height = '30px';
    container.style.borderRadius = '50%/5%';
    container.style.fontWeight = 'bold';
    
    container.onmouseover = function(){
      container.style.backgroundColor = '#f7b10a'; 
      container.style.color = '#ffdc89';
    }
    container.onmouseout = function(){
      container.style.backgroundColor = 'Transparent';
      container.style.color = '#f7b10a';
    }

    container.onclick = this.clickCallback

    return container;
  }
});