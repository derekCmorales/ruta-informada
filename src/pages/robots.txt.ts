import type { APIRoute } from "astro";
import { url } from "../data/url";

// Buscadores (Google, Bing…) piden /robots.txt antes de leer el sitio; sin él, cada visita suya es un 404.
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL(url("sitemap.xml"), site)}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
