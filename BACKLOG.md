# Backlog

## SEO / Indexación — estado del plan (rev. 2026-06-26)

Diagnóstico: la causa de las ~400 páginas "Rastreada/Detectada, no indexada" NO es
técnica (verificado: 681/681 URLs del sitemap de prod responden 200, canonical-self,
sin noindex). Es **demanda de rastreo / autoridad baja + percepción de contenido a
escala con IA + prioridad de enlazado**. Las palancas de código ya se agotaron; lo
que queda mueve la aguja pero es editorial / externo.

### Hecho (código, desplegado)
- SEO-01 | done | índice completo server-side de mitos en páginas de taxonomía (cada mito recibe enlaces de sus hubs región+comunidad+categoría, no solo de la paginación). PR #2.
- SEO-02 | done | páginas índice (/regiones, /comunidades, /categorias) enlazan mitos representativos. PR #3.
- SEO-03 | done | sitemaps path-based (/sitemap-mitos/N) en vez de query-param; viejo 301→nuevo. PR #2.
- SEO-04 | done | procedencia por mito + enlace contextual a /metodologia en cada artículo (E-E-A-T). PR #4.
- SEO-05 | done | lastmod estable en sitemaps (MAX(updated_at) en vez de hora de regeneración). PR #5.

### Falta — NO es código (tuyo)
- SEO-06 | now | P1 | GSC | Reenviar sitemap.xml en Search Console; confirmar que cada sitemap hijo aparezca como "Correcto". Solicitar indexación en ~20 páginas fuertes (mitos top + hubs).
- SEO-07 | now | P1 | Editorial | Añadir fuentes citadas por mito (requiere nuevo campo en DB; hoy solo existe source_row). Es la señal que destraba la "sospecha de contenido IA a escala".
- SEO-08 | next | P2 | Editorial | Autoría con nombre/credenciales reales (Person schema) si se decide exponer; enriquecer /sobre-el-proyecto y /metodologia.
- SEO-09 | next | P1 | Marketing | Conseguir backlinks relevantes (cultura/folclor/educación). Authority Score ~14 es el techo de fondo del crawl-demand.
- SEO-10 | next | P2 | Medición | A las 2–4 semanas del deploy, revisar en GSC cuántas de las ~400 pasaron a "Indexada"; comparar con baseline SEMrush.

### Opcionales de código (no hechos — bajo ROI / trade-off de diseño)
- SEO-11 | later | P3 | Más enlaces de mitos a un clic desde la home (hoy ~7). Descartado: el mosaico V3 tiene layout fijo y el objetivo de rastreo ya está cubierto por /mitos + paginación + taxonomía.
- SEO-12 | later | P3 | Reducir peso de página (~360KB, casi todo payload RSC) para crawl-budget/CWV. Cambio grande y con riesgo.

## Now

## Next

## Later

## Done (2026-01)
- MC-001 | done | P1 | Rutas: actualizar 3 existentes y crear 6 nuevas graficas + home | Template dinamico, galeria con imagenes y enlaces en home.
- MC-002 | done | P1 | Fix rutas 500 + home con previews graficos | Fallback sin vertical_images y cards con imagen.
- MC-003 | done | P1 | Fix SQL rutas Postgres + previews con imagen | LATERAL + subquery para evitar DISTINCT/ORDER BY error.
- MC-004 | done | P1 | Curaduria rutas + cards 1:1 con texto visible | Seleccion editorial de mitos/imagenes, copy refinada y cards cuadradas.
- MC-005 | done | P1 | Curaduria distinta por ruta | Slugs unicos por ruta con keywords mas precisas.
- MC-006 | done | P1 | Curaduria por titulo solicitada | Rutas alineadas a la lista de mitos definida por el usuario.
