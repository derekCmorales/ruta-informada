import type { APIRoute } from "astro";

// robots.txt con la dirección del mapa del sitio.
export const GET: APIRoute = ({ site }) => {
  const map = new URL(`${import.meta.env.BASE_URL.replace(/\/$/, "")}/sitemap-index.xml`, site);
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${map.href}\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
