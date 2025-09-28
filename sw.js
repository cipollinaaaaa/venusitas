const CACHE_NAME = 'venusian-gems-v1';
const urlsToCache = [
  '/venusitas/',
  '/venusitas/index.html',
  '/venusitas/venusian.png',
  '/venusitas/mano.gif',
  '/venusitas/venusci.mp3',
  '/venusitas/venusciously.mp3',
  '/venusitas/venusound.mp3',
  '/venusitas/venusliscious.mp3',
  '/venusitas/loser.mp3',
  '/venusitas/icon-192.png',
  '/venusitas/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});