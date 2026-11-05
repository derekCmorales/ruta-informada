import type { APIRoute } from "astro";
import { SECTIONS, SLUGS, PERSONAS } from "../data/content";
import { url } from "../data/url";

// Lista de páginas para los buscadores (la anuncia /robots.txt).
const PAGES = [
  "", "temas/", "ayuda/", "buscar/", "tarjeta/", "cifras/", "fuentes/", "acerca/", "privacidad/", "creditos/", "estado/",
  ...SECTIONS.map((s) => `${SLUGS[s.id]}/`),
  ...PERSONAS.map((p) => `para/${p.id}/`),
];

export const GET: APIRoute = ({ site }) =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
      PAGES.map((p) => `  <url><loc>${new URL(url(p), site)}</loc></url>`).join("\n") +
      `\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
