# Analítica, Tag Manager y Search Console

## Arquitectura

- `NEXT_PUBLIC_GA_ID` identifica el flujo web de GA4.
- `NEXT_PUBLIC_GTM_ID` es opcional. Cuando existe, Google Tag Manager carga la
  etiqueta de Google; cuando no existe, el sitio conserva GA4 directo como
  respaldo operativo.
- `/admin` no carga GA4 ni GTM y conserva `noindex, nofollow, noarchive`.
- GA4 mide la carga inicial y los cambios de ruta de Next.js mediante la
  medición mejorada de vistas de página. No debe añadirse un segundo pageview
  manual en GTM.
- Los comandos de eventos se encolan en `dataLayer` aunque la librería de Google
  todavía no haya terminado de cargar.

## Configuración esperada en Google

1. El flujo web de la propiedad GA4 `Mitos` debe usar el mismo ID que
   `NEXT_PUBLIC_GA_ID` y mantener activa la medición mejorada.
2. El contenedor web de GTM debe tener una única etiqueta de Google para ese
   flujo, activada en `All Pages`. La aplicación ya evita cargar el contenedor
   dentro de `/admin`.
3. La propiedad de Search Console `https://www.mitosdecolombia.com/` debe estar
   vinculada al flujo web de GA4.
4. Search Console debe recibir solamente
   `https://www.mitosdecolombia.com/sitemap.xml`; ese índice referencia los
   sitemaps estático, de rutas, de taxonomías y paginados de mitos.

## Eventos

- GA4 mejorado: `page_view`, `scroll`, `click`, `view_search_results`,
  interacciones con formularios, vídeos y descargas.
- Mapa editorial: `select_content` con categorías `map_pin`, `map_cluster` y
  `map_card`.
- Cualquier elemento futuro con `data-analytics-event` puede añadir
  `data-analytics-category`, `data-analytics-label` y `data-analytics-value` sin
  introducir otro script de medición.

No deben enviarse nombres, correos, mensajes ni otros datos personales en
eventos o parámetros.

## Verificación

```bash
node --test scripts/seo/*.test.mjs
npm run build
npm run seo:audit:indexability -- \
  --sitemap=https://www.mitosdecolombia.com/sitemap.xml \
  --concurrency=4
```

En navegador, comprobar una sola petición `page_view` al cargar una página y
otra al navegar por una ruta cliente. `/admin` no debe solicitar recursos de
`googletagmanager.com` ni emitir hits de Analytics.
