import { SLUGS } from "./content";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Une la ruta con el `base` del sitio (GitHub Pages). */
export const url = (path = "") => `${BASE}/${path.replace(/^\//, "")}`;

/** Enlace a una sección (S1…S8) y, opcionalmente, a un bloque dentro de ella. */
export const secUrl = (id: string, block?: string) => url(`${SLUGS[id]}/`) + (block ? `#b-${block}` : "");
