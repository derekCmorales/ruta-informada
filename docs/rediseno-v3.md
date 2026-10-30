# Rediseño v3 (prototipo)

El rediseño vive en `public/v3/` como una sola página HTML con su CSS y JS dentro. Astro copia `public/` tal cual al build, así que al publicarse queda en:

https://derekcmorales.github.io/ruta-informada/v3/

No toca las páginas de Astro. La idea es iterar aquí y, cuando el diseño esté cerrado, pasar los estilos y componentes a `src/`.

## Qué incluye

- Inicio con hero, franja de emergencias, "¿Qué está viviendo?" (5 situaciones con sus 3 respuestas principales), "Esto es gratis", lista de temas y compromisos.
- Páginas: 7 secciones, situación (`#para-retorno`, etc.), temas, cómo usar, tarjeta para imprimir, buscar, cifras, fuentes, acerca, privacidad, créditos y estado del proyecto.
- Letra: Poppins (títulos, cifras, logo) y DM Sans (texto).
- Botón Atrás del teléfono, escuchar en voz alta, enviar por WhatsApp, tamaño de letra y buscador con palabras de uso común ("papeles", "la migra", "deportado").
- Bloques nuevos para personas retornadas: becas del INTECAP y búsqueda de empleo (Mintrab, OportuGuate).
- Funciona sin internet una vez visitada (`sw.js`) y se puede instalar (`manifest.webmanifest`).

## Dónde cambiar las cosas (en `public/v3/index.html`)

| Qué | Busque |
| --- | --- |
| Colores, letra, tamaños | el bloque `:root` al inicio del `<style>` |
| Fotos de cada espacio | `const FOTOS` |
| Aviso de imágenes hechas con IA | `const IMAGENES_IA` |
| Ilustraciones opcionales | `const ILUS_LISTAS` y `img/ilus/LEAME.txt` |
| Contenido, fuentes y bloques | `const SRC` y `const SECTIONS` |
| Las 3 respuestas de cada situación | `const NEEDS` |
| Lo que es gratis | `const FREE` |
| Palabras del buscador | `const SYN` |

Cada vez que cambie algo, suba el número de `VERSION` en `sw.js` para que los teléfonos que ya guardaron la página descarguen lo nuevo.

## Imágenes

- Las 6 imágenes `img/familia-*.webp` fueron generadas con IA. No son personas reales. La página lo dice en Acerca y Créditos.
- Los paisajes y tejidos vienen de Wikimedia Commons (créditos en la página).
