const CACHE_NAME="913c66dc-0e36-4f8a-9b99-5deb33e048d4";let urlsToCache=["/.check.js.swp","/check.js","/favicon.ico","/icons/arrow.svg","/icons/check-icon.svg","/icons/exit.svg","/icons/facebook.svg","/icons/filter-close.svg","/icons/instagram.svg","/icons/list.svg","/icons/map-icon.svg","/icons/map.svg","/icons/marker.svg","/icons/parent-facebook.svg","/icons/parent-instagram.svg","/icons/parent-twitter.svg","/icons/phone.svg","/icons/twitter.svg","/icons/vegetarian-mark.svg","/icons/website.svg","/images/home-image.png","/images/home-image.svg","/images/icons-192.png","/images/icons-512.png","/images/logo.svg","/manifest.webmanifest","/style.css","/about","/","/map","/places","/output.js"],additionalUrlsToCache=["https://unpkg.com/leaflet@1.6.0/dist/leaflet.js","https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"];urlsToCache=urlsToCache.concat(additionalUrlsToCache),self.addEventListener("install",(function(e){self.skipWaiting(),e.waitUntil(caches.open(CACHE_NAME).then((function(e){return e.addAll(urlsToCache)})))})),self.addEventListener("fetch",(function(e){e.respondWith(caches.match(e.request).then((function(s){return s||fetch(e.request).then((function(s){let t=s&&200===s.status&&"basic"===s.type,n=new URL(e.request.url);if(["fonts.googleapis.com","fonts.gstatic.com"].includes(n.hostname)&&(t=!0),!t)return s;let c=s.clone();return caches.open(CACHE_NAME).then((function(s){s.put(e.request,c)})),s}))})))})),self.addEventListener("activate",(function(e){let s=[CACHE_NAME];e.waitUntil(caches.keys().then((function(e){return Promise.all(e.map((function(e){if(-1===s.indexOf(e))return caches.delete(e)})))})))}));