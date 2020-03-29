export const details = {
  "canonical": "/",
  "description": "deli direct finds local companies offering supplies to those in need",
  "title": "Find local Nottingham food & drink independent places"
};

export function render(props) {
  return `
    <div id="list"></div>
  `;
}

export function init() {
  showFilter();
  let listElement = document.getElementById("list");
  let listFilterElement = getListFilterElement();
  listFilterElement.removeAttribute("hidden");
  listFilterElement.addEventListener("change", () => {
    renderPlaces();
  });

  function renderPlaces() {
    listElement.innerHTML = "";
    for (let place of places) {
      let delivers = place.delivers || place.postage;
      let collect = place.collect;
      if (!deliversFilter.checked && !collect) {
        continue;
      }
      if (!collectFilter.checked && !delivers) {
        continue;
      }
      let placeContent = placeCard(place, true);
      let placeCardElement = document.createElement("div");
      placeCardElement.className = "card";
      placeCardElement.innerHTML = placeContent;
      listElement.appendChild(placeCardElement);
    }
  }
  renderPlaces();
}
