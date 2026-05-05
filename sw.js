// LUPUS service worker — enables offline play and PWA install
// Bump this version every time you ship a new index.html so users get the
// fresh build instead of the stale cache.
const CACHE_VERSION = 'lupus-v2';

// Files to pre-cache so the app boots offline on first visit.
// Use relative paths so this works under GitHub Pages subdirectories
// (e.g. https://you.github.io/lupus/).
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
];

// Install: pre-cache the core shell. If any one of these fails (e.g. you
// haven't added an icon yet), the SW still installs — we don't fail hard.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      return Promise.all(
        CORE_ASSETS.map((url) =>
          cache.add(url).catch((err) =>
            console.warn('[sw] could not cache', url, err)
          )
        )
      );
    }).then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: cache-first for same-origin GET. Network for everything else.
// This is what makes the PWA installable — Chrome requires a fetch handler.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  // Only handle same-origin requests; let the browser deal with cross-origin
  // (Google Fonts, etc.) so we don't break them.
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        // Cache successful responses for next time
        if (res && res.status === 200 && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(req, clone));
        }
        return res;
      }).catch(() => {
        // Offline fallback: serve the index for navigation requests
        if (req.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
