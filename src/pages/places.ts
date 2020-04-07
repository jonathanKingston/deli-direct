import { showFilter, getListFilterElement, placeCard } from "../utils";
import { places } from "../../tmp/places";
import type { PageProps } from "../types";
import { calculateDistance, getAproximateLocation, loadIpLocation } from "../map";

export const details = {
  "description": "Listing local independent businesses in Nottingham available or collection or delivery.",
  "title": "Listing Nottingham food & drink independents"
};

export function render(props: PageProps) {
  return `
    <div id="list"></div>
  `;
}

function renderPlaces() {
  let deliversFilter = document.getElementById("deliversFilter") as HTMLInputElement;
  let collectFilter = document.getElementById("collectFilter") as HTMLInputElement;
  let plantBasedFilter = document.getElementById("plantBasedFilter") as HTMLInputElement;
  let listElement = document.getElementById("list");

  listElement.innerHTML = "";
  let aproxLocation = getAproximateLocation();

  places.sort((a, b) => {
    let distanceA = calculateDistance(aproxLocation, [a.location?.lat || 0, a.location?.lng || 0]);
    let distanceB = calculateDistance(aproxLocation, [b.location?.lat || 0, b.location?.lng || 0]);

    if (distanceA < distanceB) {
      return -1;
    }
    if (distanceA > distanceB) {
      return 1;
    }
    return 0;
  });

  for (let place of places) {
    let delivers = place.delivers || place.postage;
    let collect = place.collect;
    let plantBased = place.types &&
                     (place.types.includes("vegan") || place.types.includes("plant-based"));
    let hasFilter = deliversFilter.checked ||
                    collectFilter.checked ||
                    plantBasedFilter.checked;
    if (hasFilter) {
      if (deliversFilter.checked && !delivers) {
        continue;
      }
      if (collectFilter.checked && !collect) {
        continue;
      }
      if (plantBasedFilter.checked && !plantBased) {
        continue;
      }
    }
    let placeContent = placeCard(place, true);
    let placeCardElement = document.createElement("div");
    placeCardElement.className = "card";
    placeCardElement.innerHTML = placeContent;
    listElement.appendChild(placeCardElement);
  }
}

export function init() {
  showFilter();
  loadIpLocation();
  let listFilterElement = getListFilterElement();
  listFilterElement.removeAttribute("hidden");
  listFilterElement.addEventListener("change", () => {
    renderPlaces();
  });

  renderPlaces();
}
