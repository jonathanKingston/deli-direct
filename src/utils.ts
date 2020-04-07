import type { Place } from "./types";

function createLink(text: string, link: string, className: string) {
  return `<a href="${link}" class="${className}" rel="noopener noreferrer nofollow" target="_blank">${text}</a>`;
}

export function showFilter() {
  let filterElement = document.getElementById("filter");
  filterElement.removeAttribute("hidden");
}

export function getListFilterElement() {
  return document.getElementById("listFilter");
}

export function getMapElement() {
  return document.getElementById("map");
}

export function placeCard(place: Place, showMap: boolean) {
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
