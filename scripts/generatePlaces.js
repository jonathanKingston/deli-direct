const fs = require("fs");

let rawdata = fs.readFileSync("data/src/places.json");
let places = JSON.parse(rawdata);
let outputPlaces = [];
for (let place of places) {
  if (place.offline || place.outofscope) {
    continue;
  }
  // ignore if we don't have functionality
  if (!(place.delivers || place.postage || place.collect)) {
    continue;
  }
  // TODO add functionality:
  delete place.order;
  delete place.address;
  delete place.deliveroo;
  delete place.ubereats;
  delete place.justeat;
  delete place.email;
  delete place.google_place_id;
  delete place.offline_until;
  if (!place.location || !("lat" in place.location)) {
    delete place.location;
  }
  outputPlaces.push(place);
}

// Now add the places list to the js files
let output = `import type { Place } from "../src/types";
  export let places: Array<Place> = ${JSON.stringify(outputPlaces, null, 2)};
`;
fs.writeFileSync("tmp/places.ts", output);
