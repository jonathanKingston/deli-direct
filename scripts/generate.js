"use strict";
import { v4 as uuidv4 } from "uuid";
const fs = require("fs");
const path = require("path");

let copyRecursiveSync = function(src, dest) {
  let exists = fs.existsSync(src);
  let stats = exists && fs.statSync(src);
  let isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    let destExists = fs.existsSync(dest);
    if (!destExists) {
      fs.mkdirSync(dest);
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName),
                        path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
};
copyRecursiveSync("static", "dist/");

let rawdata = fs.readFileSync("src/places.json");
let places = JSON.parse(rawdata);
let outputItems = [];
for (let place of places) {
  if (place.offline) {
    continue;
  }
  // ignore if we don't have functionality
  if (!(place.delivers || place.postage || place.collect)) {
    continue;
  }
  outputItems.push(place);
}

let output = `let places = ${JSON.stringify(outputItems)};`;

let rawIndex = fs.readFileSync("src/index.js");
fs.writeFileSync("dist/output.js", output + rawIndex);

let rawSw = fs.readFileSync("src/sw.js");
let key = uuidv4();
fs.writeFileSync("dist/sw.js", `const CACHE_NAME = "${key}"; ${rawSw}`);
