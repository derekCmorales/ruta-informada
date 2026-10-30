import type { ImageMetadata } from "astro";

// Fotos en src/assets/img. Astro las optimiza en el build (WebP en varios tamaños).
const files = import.meta.glob<{ default: ImageMetadata }>("../assets/img/*.webp", { eager: true });
export const IMG: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(files).map(([path, mod]) => [path.split("/").pop()!.replace(".webp", ""), mod.default]),
);

// Ilustraciones opcionales en src/assets/ilus. Si un archivo existe, aparece; si no, la página usa el ícono.
// Nombres esperados: ayuda-llamar, ayuda-escuchar, ayuda-whatsapp, ayuda-letra, ayuda-instalar, ayuda-tarjeta,
// bloque-pasaporte, bloque-cita-gratis, bloque-h2, bloque-detenido, bloque-alba, bloque-llegada, buscar-vacio.
const ilus = import.meta.glob<{ default: ImageMetadata }>("../assets/ilus/*.{webp,png}", { eager: true });
export const ILUS: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(ilus).map(([path, mod]) => [path.split("/").pop()!.replace(/\.(webp|png)$/, ""), mod.default]),
);

/** Ilustración que acompaña a algunos bloques. */
export const BLOCK_ILUS: Record<string, string> = {
  pasaporte: "bloque-pasaporte", "citas-gratis": "bloque-cita-gratis", h2: "bloque-h2",
  detenido: "bloque-detenido", alba: "bloque-alba", llegada: "bloque-llegada",
};
