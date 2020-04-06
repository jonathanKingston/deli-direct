import { nottingham, showFilter, placeCard } from "../utils";
import { places } from "../../tmp/places";
import type { PageProps } from "../types";

export const details = {
  "title": "Map listings"
};

export function render(props: PageProps) {
  return `
  <div id="map"></div>
  <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==" crossorigin=""></script>
  `;
}

export function init() {
  showFilter();
  window.addEventListener("load", () => {
    let customIcon = window.L.icon({
      iconUrl: 'icons/marker.svg',
  
      iconSize:     [24, 24], // size of the icon
      iconAnchor:   [16, 24], // point of the icon which will correspond to marker's location
      popupAnchor:  [-4, -23] // point from which the popup should open relative to the iconAnchor
    });

    let placePointers = window.L.layerGroup();
    for (let place of places) {
      if (place.location) {
        let popupContent = placeCard(place, false);
        window.L.marker([place.location.lat, place.location.lng], {icon: customIcon}).bindPopup(popupContent).addTo(placePointers);
      }
    }
  
    let mbAttr = `Map data &copy;
    <a rel="nofollow" href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,
    <a rel="nofollow" href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
    Imagery © <a rel="nofollow" href="https://www.mapbox.com/">Mapbox</a>
    `;
    let mbUrl = "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";
    
    let grayscale = window.L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
    
    let map = window.L.map('map', {
    	center: nottingham,
    	zoom: 16,
    	layers: [grayscale, placePointers]
    });
  });
}
