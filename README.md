# Ruta Informada

Información oficial y verificada para personas migrantes del occidente de Guatemala y sus familias: documentos, derechos, estafas, riesgos, consulados, retorno y apoyo. Cada dato muestra su fuente y la fecha de consulta.

Proyecto de trabajo social de [Lara Solutions](https://larasolutions.dev), agencia de software, dentro de su programa “Código con causa”: herramientas digitales gratuitas para comunidades del occidente de Guatemala.

> Esto no es asesoría legal.

## Tecnología

- [Astro](https://astro.build) 7, sitio 100 % estático.
- Letras autoalojadas (funcionan sin internet): Poppins para títulos y cifras, DM Sans para el texto.
- Imágenes en `src/assets/img`, optimizadas por `astro:assets` (WebP en varios tamaños con `srcset`).
- Buscador local: el índice se genera en el build, funciona sin internet y entiende palabras de uso común (“papeles”, “la migra”).
- Funciona sin internet una vez visitado (`/sw.js`) y se puede instalar en el teléfono (`/manifest.webmanifest`).
- Sin cookies ni analítica.

## Estructura

```
src/
  data/content.ts      TODO el contenido: secciones, bloques, fuentes, situaciones, “gratis”,
                       glosario, palabras del buscador y qué foto va en cada espacio (FOTOS)
  data/icons.ts        íconos SVG (Phosphor)
  data/images.ts       carga de fotos e ilustraciones
  data/url.ts          enlaces con el `base` de GitHub Pages
  assets/img/          fotos WebP en 2K (familias generadas con IA)
  assets/ilus/         ilustraciones opcionales: si el archivo existe, aparece (ver LEAME.md)
  components/          BlockCard, NeedCard, Contact, Photo, Pick, PlainPage, ReturnsChart…
  layouts/Base.astro   encabezado, pie, barra inferior del teléfono
  scripts/global.ts    letra grande, copiar, escuchar, sin conexión
  styles/global.css    estilos, colores y escala tipográfica (bloque :root)
  pages/
    index.astro        inicio
    [seccion].astro    las 7 secciones (/documentos/, /emergencias/…)
    para/[situacion]   una página por situación (/para/retorno/…)
    temas, ayuda, tarjeta, buscar, cifras, fuentes, acerca, privacidad, creditos, estado, 404
    sw.js.ts, manifest.webmanifest.ts
public/                favicon, íconos de la app, imagen para compartir (og-image.jpg)
```

## Cómo cambiar cosas

| Qué | Dónde |
| --- | --- |
| Un dato, un teléfono, una fuente | `src/data/content.ts` (`SECTIONS`, `SRC`) |
| Las 3 respuestas de cada situación | `NEEDS` en `content.ts` |
| Lo que es gratis | `FREE` en `content.ts` |
| Qué foto va en cada lugar y su encuadre | `FOTOS` en `content.ts` |
| Palabras del buscador | `SYN` en `content.ts` |
| Colores, letras, tamaños | `:root` en `src/styles/global.css` |
| Encabezado, pie, menú | `src/layouts/Base.astro` |

Cada bloque lleva `s: [...]` con las claves de sus fuentes en `SRC`. Las direcciones de los bloques son `/seccion/#b-id-del-bloque`.

## Desarrollo

Requiere Node 22.23.4 o superior.

```sh
npm install
npm run dev      # http://localhost:4321/ruta-informada/
npm run build    # genera dist/
npm run preview
```

## Publicación

Cada push a `main` publica en GitHub Pages con `.github/workflows/deploy.yml`.
Primera vez: en el repositorio, **Settings → Pages → Source: GitHub Actions**.

Si se usa un dominio propio, cambie `site` y quite `base` en `astro.config.mjs`.
