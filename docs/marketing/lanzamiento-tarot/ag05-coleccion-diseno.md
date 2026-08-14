# Grupo 05 — Colección, diseño e ilustración

Fecha: 12 de agosto de 2026<br>
Campaña: `Lanzamiento Tarot`<br>
ID de grupo en Google Ads: `194450551610`<br>
Estado operativo: creado con 60 keywords, 26 negativas y 3 RSA; campaña detenida.<br>
URL: `https://www.mitosdecolombia.com/tarot/arte-y-coleccion`

## Trabajo de la landing

Convertir búsquedas de barajas ilustradas, cartas de autor, diseño colombiano y objetos coleccionables. La landing debe vender la calidad visual y el criterio editorial sin afirmar técnicas de impresión, materiales, acabados o edición limitada que todavía no estén confirmados.

## Hero

- H1: `Arte colombiano contado carta por carta`
- Subtítulo: `Una colección editorial de 78 cartas donde arcanos y mitos se encuentran en un universo visual propio.`
- Prueba: `78 ilustraciones · 22 arcanos mayores · 56 menores`
- CTA primario: `Explorar la colección`
- CTA comercial: `Agregar al carrito`
- Imagen: fotografía nítida del producto real y mosaico de cartas, con posibilidad de ampliar detalles.

## Arquitectura

1. Hero visual con producto y CTA.
2. Galería de la colección con zoom y carga optimizada.
3. Sistema visual: marco, símbolos, color y relación arcano–mito.
4. Proceso editorial documentado, sin atribuir autores o técnicas no confirmadas.
5. Selección de cartas mayores y menores.
6. Objeto físico: dimensiones, material, acabado, caja y contenido.
7. Para coleccionistas, lectores de tarot y personas interesadas en diseño colombiano.
8. Precio, inventario, envío, cambios y pagos.
9. FAQ y cierre de compra.

## Mensajes obligatorios

- Mostrar cartas reales, no mockups que puedan confundirse con el producto final.
- Explicar la diferencia entre colección artística y baraja utilizable.
- No prometer “edición limitada”, numeración, lujo, impresión premium o firma sin evidencia.
- Mantener tiempos de carga competitivos pese a la galería.

## Medición

- `view_item`: producto y precio visibles.
- `view_card_detail`: diagnóstico de apertura de una carta.
- `view_gallery_50`: diagnóstico de exploración de galería.
- `add_to_cart` y `begin_checkout`: secundarias.
- `purchase`: primaria con valor COP y transacción única.
- UTM por RSA: `ag05_arte`, `ag05_autor`, `ag05_diseno`.

## QA y activación

- LCP móvil no depende de descargar las 78 imágenes.
- Zoom y galería no desplazan ni ocultan el CTA.
- Las especificaciones físicas coinciden con el producto final.
- No activar hasta publicar las imágenes reales y la información comercial.

Los 60 términos, 26 negativas y 45 titulares están en `groups-02-06.json`.
