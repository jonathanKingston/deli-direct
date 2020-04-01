const CACHE_NAME = "3902f07d-c631-431f-8285-b62ec0452ca5";
    let urlsToCache = ["/favicon.ico","/icons/arrow.svg","/icons/check-icon.svg","/icons/exit.svg","/icons/facebook.svg","/icons/filter-close.svg","/icons/instagram.svg","/icons/list.svg","/icons/map-icon.svg","/icons/map.svg","/icons/marker.svg","/icons/parent-facebook.svg","/icons/parent-instagram.svg","/icons/parent-twitter.svg","/icons/phone.svg","/icons/twitter.svg","/icons/vegetarian-mark.svg","/icons/website.svg","/images/home-image.png","/images/home-image.svg","/images/icons-192.png","/images/icons-512.png","/images/logo.svg","/manifest.webmanifest","/style.css","/about","/","/map","/places","/output.js"];
    let additionalUrlsToCache = [
  "https://unpkg.com/leaflet@1.6.0/dist/leaflet.js",
  "https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
];
urlsToCache = urlsToCache.concat(additionalUrlsToCache);


self.addEventListener("install", function (event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            let shouldCache = response && response.status === 200 && response.type === 'basic';
            let url = new URL(event.request.url);
            if (["fonts.googleapis.com", "fonts.gstatic.com"].includes(url.hostname)) {
              shouldCache = true;
            }
            if (!shouldCache) {
              return response;
            }
            let responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

self.addEventListener('activate', function(event) {
  let cacheAllowlist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
