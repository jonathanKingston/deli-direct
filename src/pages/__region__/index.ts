import { showFilter, getListFilterElement, placeCard } from "../../utils";
import { places } from "../../../tmp/places";
import type { PageProps, Place } from "../../types";
import { calculateDistance, getAproximateLocation, loadIpLocation } from "../../map";

export function details(props: any) {
  return {
    "description": `Listing local independent businesses in ${props.region.name} available or collection or delivery.`,
    "title": `Listing ${props.region.name} food & drink independents`
  };
};

export function render(props: PageProps) {
  return `
    <div id="list"></div>
  `;
}

async function renderPlaces(props: PageProps) {
  let deliversFilter = document.getElementById("deliversFilter") as HTMLInputElement;
  let collectFilter = document.getElementById("collectFilter") as HTMLInputElement;
  let plantBasedFilter = document.getElementById("plantBasedFilter") as HTMLInputElement;
  let listElement = document.getElementById("list");

  listElement.innerHTML = "";
  let aproxLocation = getAproximateLocation();
  let data = await fetch(`/${props.region.key}.json`);
  let selectedPlaces: Array<Place> = await data.json();

  selectedPlaces.sort((a, b) => {
    let distanceA = calculateDistance(aproxLocation, a.location || [0,0]);
    let distanceB = calculateDistance(aproxLocation, b.location || [0,0]);

    if (distanceA < distanceB) {
      return -1;
    }
    if (distanceA > distanceB) {
      return 1;
    }
    return 0;
  });

  for (let place of selectedPlaces) {
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

export function init(props: PageProps) {
  showFilter();
  loadIpLocation();
  let listFilterElement = getListFilterElement();
  listFilterElement.removeAttribute("hidden");
  listFilterElement.addEventListener("change", () => {
    renderPlaces(props);
  });

  renderPlaces(props);
}
