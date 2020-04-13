import { showFilter, placeCard } from "../../utils";
import { places } from "../../../tmp/places";
import type { PageProps } from "../../types";
import { calculateDistance, loadIpLocation, getAproximateLocation } from "../../map";

export function details(props: PageProps) {
  return {
    "title": `Map listings for ${props.region.name}`
  };
};

export function render(props: PageProps) {
  return `
  <div id="map"></div>
  <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==" crossorigin=""></script>
  `;
}

async function load(props: PageProps) {
  let customIcon = window.L.icon({
    iconUrl: '/icons/marker.svg',
    iconSize:     [24, 24], // size of the icon
    iconAnchor:   [16, 24], // point of the icon which will correspond to marker's location
    popupAnchor:  [-4, -23] // point from which the popup should open relative to the iconAnchor
  });

  let placePointers = window.L.layerGroup();
  let data = await fetch(`/${props.region.key}.json`);
  let selectedPlaces = await data.json();
  for (let place of selectedPlaces) {
    if (place.location) {
      let popupContent = placeCard(place, false);
      window.L.marker([place.location[0], place.location[1]], {icon: customIcon}).bindPopup(popupContent).addTo(placePointers);
    }
  }

  let mbAttr = `Map data &copy;
  <a rel="nofollow" href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,
  <a rel="nofollow" href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
  Imagery © <a rel="nofollow" href="https://www.mapbox.com/">Mapbox</a>
  `;
  let mbUrl = "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";
  
  let grayscale = window.L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
  let center = props.region.location || getAproximateLocation();
  let map = window.L.map('map', {
    center,
    zoom: 14,
    layers: [grayscale, placePointers]
  });
}

function loadIfComplete(props: PageProps) {
  if (document.readyState === "complete") {
    load(props);
  }
}

export async function init(props: PageProps) {
  showFilter();
  loadIpLocation();
  loadIfComplete(props);
  document.addEventListener("readystatechange", (e) => {
    loadIfComplete(props);
  });
}
