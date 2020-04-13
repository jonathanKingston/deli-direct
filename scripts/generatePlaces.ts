import type { Place, RegionPlaceMap } from "../src/types";
import { regions, calculateDistance } from "../src/map";
const fs = require("fs");

let rawdata = fs.readFileSync("data/src/places.json");
let places = JSON.parse(rawdata);
let outputPlaces: RegionPlaceMap = {
  "other": []
};

for (let region of regions) {
  outputPlaces[region.key] = [];
}

outer:
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
  if (!place.location || !(typeof place.location === "object")) {
    delete place.location;
  }

  let inPlace = false;

  if ("named_region" in place) {
    inPlace = true;
    if (!("locaton" in place) || !place.location) {
      place.location = region.location;
    }
    outputPlaces[place.named_region].push(place);
  }
  if ("location" in place) {
    for (let region of regions) {
      if (calculateDistance(region.location, place.location) <= 15000) { // 15km
        inPlace = true;
        outputPlaces[region.key].push(place);
      }
    }
  }
  if (!inPlace) {
    outputPlaces["other"].push(place);
  }
}

for (let region in outputPlaces) {
  fs.writeFileSync(`dist/${region}.json`, JSON.stringify(outputPlaces[region]));
}

// Now add the places list to the js files
let output = `import type { RegionPlaceMap } from "../src/types";
  export let places: RegionPlaceMap = ${JSON.stringify(outputPlaces, null, 2)};
`;
fs.writeFileSync("tmp/places.ts", output);
