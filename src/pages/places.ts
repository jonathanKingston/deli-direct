import { showFilter, getListFilterElement, placeCard } from "../utils";
import { places } from "../../dist/places";
import type { PageProps } from "../types";

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
  let listFilterElement = getListFilterElement();
  listFilterElement.removeAttribute("hidden");
  listFilterElement.addEventListener("change", () => {
    renderPlaces();
  });

  renderPlaces();
}
