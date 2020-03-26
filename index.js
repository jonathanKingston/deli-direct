const nottingham = [
  52.95448349999999,
  -1.1549223
];

async function getPlaces() {
  let request = new Request("places.json");
  request.mode = "no-cors";
  let response = await fetch(request);
  let data = await response.json();
  return data;
}

function createLink(text, link, className) {
  return `<a href="${link}" class="${className}" noopener target="_blank">${text}</a>`;
}

function placeCard(place, showMap) {
  let website = "";
  let blurb = "";
  let instagram = "";
  if (place.instagram) {
    instagram = createLink("Instagram", place.instagram, "instagram");
  }
  let facebook = "";
  if (place.facebook) {
    facebook = createLink("Facebook", place.facebook, "facebook");
  }
  let twitter = "";
  if (place.twitter) {
    twitter = createLink("Twitter", place.facebook, "twitter");
  }
  let phone = "";
  if (place.phone) {
    phone = createLink(place.phone, `tel:${place.phone}`, "phone");
  }
  if (place.blurb) {
    blurb = `<p class="blurb">${place.blurb}</p>`;
  }
  if (place.website) {
    website = createLink("Visit Website", place.website, "website");
  }
  let map = "";
  if (showMap && place.location) {
    let maplink = `https://www.google.com/maps/search/?api=1&query=${place.location.lat},${place.location.lng}`;
    map = createLink("Visit Map", maplink, "map");
  }
  return `<div class="cardcontents">
    <h2>${place.title}</h2>
    <dl>
      <div><dt>Delivery:</dt><dd>${place.delivers || place.postage ? "Yes" : "No"}</dd></div>
      <div><dt>Collect:</dt><dd>${place.collect ? "Yes" : "No"}</dd></div>
    </dl>
    ${blurb}
    ${website}
    ${phone}
    ${map}
    <div class="icons">
      ${facebook} ${twitter} ${instagram}
    </div>
  </div>`;
}

async function init() {
  let places = await getPlaces();
  let toggleElement = getToggleElement();
  toggleElement.addEventListener("click", toggleView);
  initListView(places);
}

function getListElement() {
  return document.getElementById("list");
}

function getMapElement() {
  return document.getElementById("map");
}

function getToggleElement() {
  return document.getElementById("toggleView");
}

let currentView = "list";

async function toggleView() {
  let places = await getPlaces();
  let mapElement = getMapElement();
  let listElement = getListElement();
  let toggleElement = getToggleElement();
  if (currentView == "list") {
    currentView = "map";
    toggleElement.innerText = "List view";
    mapElement.removeAttribute("hidden");
    listElement.setAttribute("hidden", "");
    initMap(places);
  } else {
    currentView = "list";
    toggleElement.innerText = "Map view";
    listElement.removeAttribute("hidden");
    mapElement.setAttribute("hidden", "");
    initListView(places);
  }
}

function initListView(places) {
  let listElement = getListElement();
  listElement.innerHTML = "";
  for (let place of places) {
    if (place.offline) {
      continue;
    }
    // Skip any that don't have offerings
    if (!(place.delivers || place.postage || place.collect)) {
      continue;
    }
    let placeContent = placeCard(place, true);
    let placeCardElement = document.createElement("div");
    placeCardElement.className = "card";
    placeCardElement.innerHTML = placeContent;
    listElement.appendChild(placeCardElement);
  }
}

function initMap(places) {
  let placePointers = L.layerGroup();
  for (let place of places) {
    if (place.offline) {
      continue;
    }
    // Skip any that don't have offerings
    if (!(place.delivers || place.postage || place.collect)) {
      continue;
    }
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
}
init();
