import type { APIRoute } from "astro";
import { url } from "../data/url";

// Permite instalar la página en el teléfono como una aplicación.
export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: "Ruta Informada",
      short_name: "Ruta Informada",
      description: "Información oficial y verificada para personas migrantes del occidente de Guatemala y sus familias.",
      lang: "es-GT",
      start_url: url(),
      scope: url(),
      display: "standalone",
      background_color: "#F5F4F0",
      theme_color: "#151A3D",
      icons: [
        { src: url("icon-192.png"), sizes: "192x192", type: "image/png" },
        { src: url("icon-512.png"), sizes: "512x512", type: "image/png" },
        { src: url("icon-maskable-512.png"), sizes: "512x512", type: "image/png", purpose: "maskable" },
      ],
    }),
    { headers: { "Content-Type": "application/manifest+json" } },
  );
