"use strict";
import { regions, defaultRegion } from "../src/map";

const { v4: uuidv4 } = require("uuid");
let Terser = require("terser");
const swc = require("@swc/core");
const fs = require("fs");
const path = require("path");
let outputPaths: Array<string> = [];

let copyRecursiveSync = function(src: string, dest: string) {
  let exists = fs.existsSync(src);
  let stats = exists && fs.statSync(src);
  let isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    let destExists = fs.existsSync(dest);
    if (!destExists) {
      fs.mkdirSync(dest);
    }
    fs.readdirSync(src).forEach((childItemName: string) => {
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


function copyFile(src: string, dest: string) {
  let out = path.join(path.dirname(dest), path.basename(src));
  outputPaths.push(out);

  if (src.match(/[.]css$/)) {
    fs.readFile(src, (err: any, css: any) => {
      postcss([postcssPresetEnv()])
        .process(css, { from: src, to: out })
        .then((result: any) => {
          fs.writeFileSync(out, result.css, () => true)
          if (result.map) {
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

async function generatePagesForDirectory(dirName: string, props?: {[key: string]: any}) {
  let pageFileNames = await fs.promises.readdir(dirName);
  let pageDetails: {[key: string]: any} = {};
  for (let pageFileName of pageFileNames) {
    if (!pageFileName.match(/[.](js|ts)$/)) {
      continue;
    }
    let pageName = pageFileName.replace(".js", "").replace(".ts", "");
    let filePath = `${dirName}${pageFileName}`;
    let { render, details, init } = await import(`../${filePath}`);
    let instanceDetails = typeof details === "object" ? Object.assign({}, props) : details(props);
    instanceDetails = Object.assign({}, props, instanceDetails);
    let pathPrefix = path.join("/", dirName.replace("src/pages/", "").replace("__region__", props?.region.key));
    let canonical = path.join(pathPrefix, instanceDetails.canonical || `/${pageName}`).replace(/index$/, "").replace(/\/$/, "");
    instanceDetails.canonical = canonical;
  
    let header = renderHeader(instanceDetails);
    let page = render(instanceDetails);
    let footer = renderFooter(instanceDetails);
    let outputPath = `dist/${pathPrefix}${pageName}.html`;
    if (pathPrefix !== "") {
      fs.mkdirSync(`dist/${pathPrefix}`, {recursive: true});
    }

    // Stringify methods for JS routing
    pageDetails[canonical] = {
      filePath,
      outputPath
    };
    fs.writeFileSync(outputPath, `${header}${page}${footer}`.replace(/\s+/g, " "));
  }
  return pageDetails;
}

async function generatePages() {
  let pageFileNames = await fs.promises.readdir("src/pages");
  let pages = await generatePagesForDirectory("src/pages/", { region: defaultRegion });
  let paths = Object.assign({}, pages);
  for (let region of regions) {
    let regionPages = await generatePagesForDirectory("src/pages/__region__/", { region });
    paths = Object.assign(paths, regionPages);
  }

  let routesOutput = `export let routes: {[key: string]: any} = {`;

  for (let canonical in paths) {
    let pageDetails = paths[canonical];
    outputPaths.push(pageDetails.outputPath);
    routesOutput += `"${canonical}": require('../${pageDetails["filePath"]}'),`;
  }

  routesOutput += `};`;

  fs.writeFileSync("tmp/routes.ts", routesOutput);

  // Webpack builds:
  outputPaths.push("dist/bundle.js");
}

async function init() {
  await generatePages();

  // Do some munging of paths and ignore common files we don't care about in the SW
  outputPaths = outputPaths
    .map((dir) => {
      return dir.replace(/^dist\//, "/").replace(/\.html$/, "").replace(/index$/, "");
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
