export const details = {
  "description": "Listing local independent businesses in Nottingham available or collection or delivery.",
  "title": "Listing Nottingham food & drink independents"
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
      let hasFilter = deliversFilter.checked || collectFilter.checked;
      if (hasFilter) {
        if (deliversFilter.checked && !delivers) {
          continue;
        }
        if (collectFilter.checked && !collect) {
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
  renderPlaces();
}
