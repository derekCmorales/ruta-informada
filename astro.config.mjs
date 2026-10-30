// @ts-check
import { defineConfig } from "astro/config";

// Dos destinos:
// - GitHub Pages: https://derekcmorales.github.io/ruta-informada/ (con `base`).
// - Cloudflare Workers: el sitio vive en la raíz. Cloudflare define WORKERS_CI=1 al compilar.
//   Para un dominio propio, ponga SITE_URL (por ejemplo https://rutainformada.org).
const cloudflare = process.env.WORKERS_CI === "1" || process.env.DEPLOY_TARGET === "cloudflare";

export default defineConfig({
  site: process.env.SITE_URL || (cloudflare ? "https://ruta-informada.workers.dev" : "https://derekcmorales.github.io"),
  base: cloudflare ? "/" : "/ruta-informada",
  trailingSlash: "ignore",
  build: { format: "directory" },
});
