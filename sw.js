const CACHE_NAME = "79ffb667-8cd6-4de8-b144-7b0250c397a9"; let urlsToCache = [
  "/",
  "/places",
  "/about",
  "/manifest.webmanifest",
  "/output.js",
  "/style.css",
  "/icons/website.svg",
  "/icons/phone.svg",
  "/icons/facebook.svg",
  "/icons/twitter.svg",
  "/icons/instagram.svg",
  "https://unpkg.com/leaflet@1.6.0/dist/leaflet.js",
  "https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
];

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
            if (!response || response.status !== 200 || response.type !== 'basic') {
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
