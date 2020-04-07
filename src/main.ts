import { routes } from "../tmp/routes";

if (!("fetch" in window)) {
   document.getElementById("unsupported").removeAttribute("hidden");
}

export {}
declare global {
  interface Window {
    dataLayer: Array<object>;
  }
}


async function init() {
  let currentPath: string = document.location.pathname;
  if (currentPath in routes) {
    let page: any = await routes[currentPath];
    if ("init" in page) {
      page.init();
    }
  }
}

window.onload = () => {
  changePreloadStyles();

  if ("serviceWorker" in navigator) {
    try {
      navigator.serviceWorker.register("/sw.js");
    } catch (e) {
      console.error(e); // Not much we can do here, just ignore and console it.
    }
  }
}

function changePreloadStyles() {
  let metas = [...document.querySelectorAll("link")];
  for (let meta of metas) {
    if (meta.rel == "preload" && meta.as == "style") {
      meta.rel = "stylesheet";
    }
  }
}

init();

// Google analytics crap
window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function (){window.dataLayer.push(arguments);};
gtag('js', new Date());
gtag('config', 'UA-161955128-1');
