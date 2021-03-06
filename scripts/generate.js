"use strict";
import { v4 as uuidv4 } from "uuid";
import Terser from "terser";
const swc = require("@swc/core");
const fs = require("fs");
const path = require("path");
let outputPaths = [];

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
  let out = path.join(path.dirname(dest), path.basename(src));
  outputPaths.push(out);

  if (src.match(/[.]css$/)) {
    fs.readFile(src, (err, css) => {
      postcss([postcssPresetEnv()])
        .process(css, { from: src, to: out })
        .then(result => {
          fs.writeFileSync(out, result.css, () => true)
          if ( result.map ) {
            fs.writeFile(out, result.map, () => true)
          }
        })
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}


import { render as renderHeader } from "../src/header.js";
import { render as renderFooter } from "../src/footer.js";

function outputShortFunction(fn) {
  return `${fn || ""}`.replace("function ", "");
}

async function generatePages() {
  let paths = {}; 
  let pageFileNames = await fs.promises.readdir("src/pages");
  for (let pageFileName of pageFileNames) {
    if (!pageFileName.match(/[.](js|ts)$/)) {
      continue;
    }
    let pageName = pageFileName.replace(".js", "").replace(".ts", "");
    let { render, details, init } = await import(`../src/pages/${pageFileName}`);
    details.page = pageName;
  
    let canonical = details.canonical || `/${pageName}`;
    // Stringify methods for JS routing
    paths[`${canonical}`] = pageFileName;
  
    let header = renderHeader(details);
    let page = render(details);
    let footer = renderFooter(details);
    let out = `dist/${pageName}.html`;
    outputPaths.push(out);
    fs.writeFileSync(out, `${header}${page}${footer}`.replace(/\s+/g, " "));
  }

  let interfaceOutput = `interface Routes {`;
  let routesOutput = `export let routes: any = {`;
  for (let path in paths) {
    routesOutput += `"${path}": require('../src/pages/${paths[path]}'),`;
    interfaceOutput += `"${path}": any;`;
  }
  routesOutput += `};`;
  interfaceOutput += `};`;

  fs.writeFileSync("tmp/routes.ts", routesOutput + interfaceOutput);

  // Webpack builds:
  outputPaths.push("dist/bundle.js");
}

async function init() {
  await generatePages();

  // Do some munging of paths and ignore common files we don't care about in the SW
  outputPaths = outputPaths
    .map((dir) => {
      return dir.replace(/^dist\//, "/").replace(/index\.html/, "").replace(/\.html$/, "");
    })
    .filter((dir) => {
      if (dir.match(/(CNAME|robots.txt)$/)) {
        return false;
      }
      return true;
    });
  let rawSw = fs.readFileSync("src/sw.js");
  let key = uuidv4();
  let swCode = `const CACHE_NAME = "${key}";
    let urlsToCache = ${JSON.stringify(outputPaths)};
    ${rawSw}`;
  fs.writeFileSync("dist/sw.js", Terser.minify(swCode).code);
}

init();
