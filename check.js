if (!("fetchs" in window)) {
  let unsupportedElement = document.createElement("div");
  unsupportedElement.innerText = "Unfortunately your browser isn't supported yet";
  document.body.appendChild(unsupportedElement);
}
