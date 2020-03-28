const nottingham = [
  52.95448349999999,
  -1.1549223
];

function createLink(text, link, className) {
  return `<a href="${link}" class="${className}" rel="noopener noreferrer" target="_blank">${text}</a>`;
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
    twitter = createLink("Twitter", place.twitter, "twitter");
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
    map = createLink("Open Map", maplink, "map");
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

function init() {
  let currentPath = document.location.pathname;
  if (currentPath in paths) {
    let page = paths[currentPath];
    if ("init" in page) {
      page.init();
    }
  }
}

window.onload = () => {
  changePreloadStyles();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js");
  }
}

function changePreloadStyles() {
  let metas = [...document.getElementsByTagName("link")];
  for (let meta of metas) {
    if (meta.rel == "preload" && meta.as == "style") {
      meta.rel = "stylesheet";
    }
  }
}

function getListElement() {
  return document.getElementById("list");
}

function getListFilterElement() {
  return document.getElementById("listFilter");
}

function getMapElement() {
  return document.getElementById("map");
}

init();

// Google analytics crap
window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function (){dataLayer.push(arguments);};
gtag('js', new Date());
gtag('config', 'UA-161955128-1');
