/* Service worker: guarda la app para que funcione sin conexión.
   Si cambias index.html o manifest.webmanifest, sube el número de CACHE
   para que los móviles descarguen la versión nueva. */
const CACHE = 'correr-v1';
const ARCHIVOS = ['./', './index.html', './manifest.webmanifest'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Primero la caché (rápido y sin conexión); en segundo plano se actualiza desde la red.
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  const clave = req.mode === 'navigate' ? './index.html' : req;
  e.respondWith(
    caches.open(CACHE).then(async cache => {
      const guardada = await cache.match(clave, { ignoreSearch: true });
      const red = fetch(req).then(res => {
        if (res && res.ok) cache.put(clave, res.clone());
        return res;
      }).catch(() => guardada);
      return guardada || red;
    })
  );
});
