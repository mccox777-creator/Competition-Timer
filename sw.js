// Service worker: stores the app on the device so it opens with no wifi or cell service.
// Strategy: serve from the device cache first, then refresh the cache in the background
// whenever a connection happens to be available.
// If you change the app and want every device to pick it up right away, bump the version below.
const CACHE = 'mock-trial-timer-v2';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS.map(u => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(req, { ignoreSearch: true }) ||
      (req.mode === 'navigate' ? await cache.match('./index.html') : undefined);

    const network = fetch(req)
      .then(resp => {
        if (resp && resp.ok) cache.put(req, resp.clone());
        return resp;
      })
      .catch(() => undefined);

    if (cached) {
      event.waitUntil(network); // refresh quietly in the background
      return cached;
    }
    const resp = await network;
    return resp || Response.error();
  })());
});
