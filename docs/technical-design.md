# Diseno tecnico (fase 0)

## Objetivo
Construir una web editorial moderna para mitos de Colombia. La experiencia debe ser rapida, elegante y facil de navegar, con enfoque en SEO, lectura comoda y una identidad visual inspirada en naturaleza y territorio.

## Stack propuesto
- Next.js (App Router) + React 19, JavaScript puro.
- Tailwind CSS para el sistema de diseno (tokens y utilidades).
- Framer Motion para animaciones de carga y transiciones.
- Vercel como hosting con Vercel Postgres en produccion.
- SQLite local para desarrollo rapido.
- Node 20 + npm.

## Arquitectura frontend
- Rutas: `src/app/`.
  - `/` home editorial con acceso a categorias y destacados.
  - `/mitos` listado con filtros y busqueda.
  - `/mitos/[slug]` detalle con metadata, fuentes y relacionados.
  - `/categorias/[slug]` agregaciones por region o tema.
- Componentes: `src/components/` con bloques de layout, cards y navegacion.
- Utilidades y helpers: `src/lib/`.
- Datos iniciales: `src/data/` con JSON local hasta integrar Excel.

## Sistema de diseno
- Tipografia: Fraunces (display) + Sora (body).
- Paleta: verdes de selva, azules de rio, dorados tierra, neutros claros.
- UI: glass cards, sombras suaves, bordes redondeados, grillas editoriales.
- Tokens: variables CSS en `src/app/globals.css` y mapeo en Tailwind.

## SEO y contenido
- Metadata global con `metadata` de Next y titles dinamicos por pagina.
- Open Graph y Twitter Cards por mito.
- Sitemap y robots generados en `src/app/sitemap.js` y `src/app/robots.js`.
- JSON-LD para entradas editoriales en detalle.

## Animaciones y motion
- Animaciones de entrada con Framer Motion (stagger, reveal).
- Transiciones suaves en hover y focus.
- Respetar `prefers-reduced-motion`.

## Pipeline de datos
- `scripts/import-mitos.js` carga Excel a SQLite local.
- `scripts/import-mitos-postgres.js` carga Excel a Postgres (usa `POSTGRES_URL`).
- Validacion de campos y slugs estables.
- Esquema base: titulo, region, comunidad, tags, excerpt, contenido, SEO, prompt.

## Docker y desarrollo
- `docker-compose up --build` levanta el entorno local en `http://localhost:3000`.
- `Dockerfile` con target `dev` y `prod` para pruebas de build.

## Despliegue
- Vercel como destino principal con `POSTGRES_URL`.
- Variables sugeridas: `POSTGRES_URL`, `MITOS_DB_PATH`.
