// @ts-check
import { defineConfig } from "astro/config";

// Dos destinos:
// - GitHub Pages: https://derekcmorales.github.io/ruta-informada/ (con `base`).
// - Cloudflare Workers: https://rutainformada.larasolutions.dev (en la raíz). Cloudflare define WORKERS_CI=1 al compilar.
//   Para otro dominio, ponga SITE_URL.
const cloudflare = process.env.WORKERS_CI === "1" || process.env.DEPLOY_TARGET === "cloudflare";

export default defineConfig({
  site: process.env.SITE_URL || (cloudflare ? "https://rutainformada.larasolutions.dev" : "https://derekcmorales.github.io"),
  base: cloudflare ? "/" : "/ruta-informada",
  trailingSlash: "ignore",
  build: { format: "directory" },
});
