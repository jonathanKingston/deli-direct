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
    copyFile(src, dest);
  }
};
copyRecursiveSync("static", "dist/");

const postcss = require('postcss');
const postcssPresetEnv = require('postcss-preset-env');
const CSS_PATH = "./static/style.css";

function copyFile(src, dest) {
  if (src.match(/[.]css$/)) {
    let out = path.join(path.dirname(dest), path.basename(src));
    fs.readFile(src, (err, css) => {
      postcss([postcssPresetEnv()])
        .process(css, { from: src, to: out })
        .then(result => {
          fs.writeFile(out, result.css, () => true)
          if ( result.map ) {
            fs.writeFile(out, result.map, () => true)
          }
        })
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

let rawdata = fs.readFileSync("data/src/places.json");
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

let rawSw = fs.readFileSync("src/sw.js");
let key = uuidv4();
fs.writeFileSync("dist/sw.js", `const CACHE_NAME = "${key}"; ${rawSw}`);

import { render as renderHeader } from "../src/header.js";
import { render as renderFooter } from "../src/footer.js";

function outputShortFunction(fn) {
  return `${fn || ""}`.replace("function ", "");
}

async function generatePages() {
  let paths = {}; 
  let pageFileNames = await fs.promises.readdir("src/pages");
  for (let pageFileName of pageFileNames) {
    if (!pageFileName.match(/[.]js$/)) {
      continue;
    }
    let { render, details, init } = await import(`../src/pages/${pageFileName}`);
    let pageName = pageFileName.replace(".js", "");
    details.page = pageName;
  
    let canonical = details.canonical || `/${pageName}`;
    // Stringify methods for JS routing
    paths[`${canonical}`] = `{
      ${outputShortFunction(render)},
      details: ${JSON.stringify(details)},
      ${outputShortFunction(init)}
    }`;
  
    let header = renderHeader(details);
    let page = render(details);
    let footer = renderFooter(details);
    fs.writeFileSync(`dist/${pageName}.html`, `${header}${page}${footer}`.replace(/\s+/g, " "));
  }
  
  let output = `let places = ${JSON.stringify(outputItems)};`;
  output += `let paths = {`;
  for (let path in paths) {
    output += `"${path}": ${paths[path]},`;
  }
  output += `};`;

  let mainJs = fs.readFileSync("src/main.js");
  fs.writeFileSync("dist/output.js", output + mainJs);
}
generatePages();
