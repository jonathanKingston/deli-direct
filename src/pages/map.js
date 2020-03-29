export const details = {
  "title": "Map listings"
};

export function render(props) {
  return `
  <div id="map"></div>
  <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==" crossorigin=""></script>
  `;
}

export function init() {
  showFilter();
  window.addEventListener("load", () => {
    let placePointers = L.layerGroup();
    for (let place of places) {
      if (place.location) {
        let popupContent = placeCard(place, false);
        L.marker([place.location.lat, place.location.lng]).bindPopup(popupContent).addTo(placePointers);
      }
    }
  
    let mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    	mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    
    let grayscale = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
    
    let map = L.map('map', {
    	center: nottingham,
    	zoom: 16,
    	layers: [grayscale, placePointers]
    });
  });
}
