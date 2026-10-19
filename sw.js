/* Offline-Speicher der Unterschriftenmappe.
   Bei jeder Änderung an den App-Dateien VERSION hochzählen (v1 -> v2 ...),
   damit die iPads die neue Fassung abholen. */
const VERSION = 'v25';
const CACHE = 'unterschriftenmappe-' + VERSION;

const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-64.png',
  './lib/pdf.min.js',
  './lib/pdf.worker.min.js',
  './lib/pdf-lib.min.js'
];
// Seltener gebrauchte Dateien in lib/ (Schriftdaten, Bilddecoder) werden beim ersten Gebrauch abgelegt.

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(CORE);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k.startsWith('unterschriftenmappe-') && k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

function cacheable(url) {
  return url.origin === self.location.origin;
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (!cacheable(url)) return;

  // App-Seite: mit Netz die neueste Fassung, ohne Netz (oder bei Funkloch nach 3 s) aus dem Speicher.
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const fromCache = async () => (await cache.match(req, { ignoreSearch: true })) || (await cache.match('./index.html')) || (await cache.match('./'));
      try {
        const net = fetch(req).then(async (res) => {
          if (res.ok && !res.redirected) await cache.put('./index.html', res.clone());
          return res;
        });
        const timeout = new Promise((resolve) => setTimeout(resolve, 3000, null));
        const res = await Promise.race([net, timeout]);
        return res || (await fromCache()) || (await net);
      } catch (e) {
        return (await fromCache()) || Response.error();
      }
    })());
    return;
  }

  // Alles andere: zuerst aus dem Speicher, sonst holen und ablegen.
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const hit = await cache.match(req, { ignoreSearch: true });
    if (hit) return hit;
    try {
      const res = await fetch(req);
      if (res.ok && (res.type === 'basic' || res.type === 'cors')) await cache.put(req, res.clone());
      return res;
    } catch (e) {
      return Response.error();
    }
  })());
});
