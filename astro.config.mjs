// @ts-check
import { defineConfig } from "astro/config";

// Publicado en GitHub Pages: https://derekcmorales.github.io/ruta-informada/
// Si se usa un dominio propio, cambie `site` y quite `base`.
export default defineConfig({
  site: "https://derekcmorales.github.io",
  base: "/ruta-informada",
  trailingSlash: "ignore",
  build: { format: "directory" },
});
