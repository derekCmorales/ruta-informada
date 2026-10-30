/* Ruta Informada: guarda la página para usarla sin internet.
   Cuando cambie el contenido, suba el número de VERSION para que los teléfonos descarguen lo nuevo. */
const VERSION = "ri-3.3";
const FILES = [
 "./",
 "index.html",
 "manifest.webmanifest",
 "favicon.svg",
 "icon-192.png",
 "icon-512.png",
 "apple-touch-icon.png",
 "img/cuchumatanes.webp",
 "img/familia-considera.webp",
 "img/familia-familia.webp",
 "img/familia-hero.webp",
 "img/familia-retorno.webp",
 "img/familia-transito.webp",
 "img/familia-viaje.webp",
 "img/huipil-atitlan.webp",
 "img/huipil-patzun.webp",
 "img/santa-maria.webp",
 "img/siete-orejas.webp",
 "img/tajumulco.webp",
 "img/tejido.webp",
 "img/xela.webp"
];
self.addEventListener("install", e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const req = e.request;
  if(req.method !== "GET") return;
  const url = new URL(req.url);
  /* Página: primero la red (para tener lo más nuevo), si no hay internet, la copia guardada */
  if(req.mode === "navigate"){ e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(VERSION).then(x => x.put("index.html", c)); return r; }).catch(() => caches.match("index.html"))); return; }
  /* Fuentes de Google, imágenes y lo demás: primero lo guardado */
  if(url.origin === location.origin || /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)){
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { if(r.ok || r.type === "opaque"){ const c = r.clone(); caches.open(VERSION).then(x => x.put(req, c)); } return r; })));
  }
});
