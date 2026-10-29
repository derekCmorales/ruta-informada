import type { ImageMetadata } from "astro";

// Todas las fotos viven en src/assets/img y Astro las optimiza en el build.
const files = import.meta.glob<{ default: ImageMetadata }>("../assets/img/*.webp", { eager: true });

export const IMG: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(files).map(([path, mod]) => [path.split("/").pop()!.replace(".webp", ""), mod.default]),
);
