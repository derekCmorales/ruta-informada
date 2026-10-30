import type { APIRoute } from "astro";
import { SECTIONS, SLUGS, PERSONAS } from "../data/content";
import { url } from "../data/url";

// Service worker: guarda las páginas para usarlas sin internet.
// La versión cambia en cada build, así los teléfonos descargan el contenido nuevo.
const VERSION = "ri-" + Date.now().toString(36);
const PAGES = [
  url(), url("temas/"), url("ayuda/"), url("buscar/"), url("tarjeta/"), url("cifras/"), url("fuentes/"),
  url("acerca/"), url("privacidad/"), url("creditos/"),
  ...SECTIONS.map((s) => url(`${SLUGS[s.id]}/`)),
  ...PERSONAS.map((p) => url(`para/${p.id}/`)),
  url("manifest.webmanifest"), url("favicon.svg"), url("icon-192.png"),
];

export const GET: APIRoute = () =>
  new Response(
    `const VERSION = ${JSON.stringify(VERSION)};
const PAGES = ${JSON.stringify(PAGES)};
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => Promise.allSettled(PAGES.map((p) => c.add(p)))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const u = new URL(req.url);
  if (u.origin !== location.origin) return;
  // Páginas: primero la red (lo más nuevo); sin internet, la copia guardada.
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then((r) => { const c = r.clone(); caches.open(VERSION).then((x) => x.put(req, c)); return r; })
      .catch(() => caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match(${JSON.stringify(url())}))));
    return;
  }
  // Estilos, scripts, letras e imágenes: primero lo guardado.
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((r) => { if (r.ok) { const c = r.clone(); caches.open(VERSION).then((x) => x.put(req, c)); } return r; })));
});
`,
    { headers: { "Content-Type": "text/javascript" } },
  );
