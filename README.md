# Ruta Informada

Información oficial y verificada para personas migrantes del occidente de Guatemala y sus familias: documentos, derechos, estafas, riesgos, consulados, retorno y apoyo. Cada dato muestra su fuente y la fecha de consulta.

Proyecto de Responsabilidad Social Universitaria, curso de Ética Aplicada, Ingeniería en Sistemas, Universidad Rafael Landívar, Campus Quetzaltenango.

> Esto no es asesoría legal.

## Tecnología

- [Astro](https://astro.build) 7, sitio 100 % estático.
- Imágenes en `src/assets/img`, optimizadas por `astro:assets` (WebP en varios tamaños con `srcset`).
- Buscador local: el índice se genera en el build y funciona sin llamadas de red.
- Sin cookies ni analítica.

## Estructura

```
src/
  assets/img/        fotos (Wikimedia Commons, licencias libres; ver /creditos)
  data/content.ts    TODO el contenido: secciones, bloques, fuentes, situaciones
  data/icons.ts      íconos SVG (Phosphor)
  components/        bloques, contactos, gráfica, mosaicos…
  layouts/Base.astro encabezado, pie y scripts globales
  pages/             inicio, 7 secciones ([seccion].astro), buscar, fuentes, etc.
  styles/global.css  estilos y paleta
```

Para corregir o agregar un dato, edite `src/data/content.ts`. Cada bloque lleva `s: [...]` con las claves de sus fuentes en `SRC`.

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
