# Grupo 06 — Mitología, cultura y leyendas

Fecha: 12 de agosto de 2026<br>
Campaña: `Lanzamiento Tarot`<br>
ID de grupo en Google Ads: `198528798865`<br>
Estado operativo: creado con 60 keywords, 26 negativas y 3 RSA; campaña detenida.<br>
URL: `https://www.mitosdecolombia.com/tarot/mitos-y-leyendas`

## Trabajo de la landing

Convertir búsquedas culturales e informativas en interés por el producto, filtrando tareas, resúmenes y descargas. La página debe satisfacer primero la curiosidad por los mitos y demostrar después por qué la baraja ofrece una forma distinta de explorarlos.

## Hero

- H1: `Mitos y leyendas de Colombia en 78 cartas`
- Subtítulo: `Una baraja editorial que conecta relatos del territorio con los arquetipos de los arcanos.`
- Prueba: `Historias de distintas regiones · 78 cartas · En español`
- CTA primario: `Explorar los mitos de la baraja`
- CTA comercial: `Agregar al carrito`
- Imagen: conjunto de cartas representativo de regiones, tradiciones y tipos de relato.

## Arquitectura

1. Hero cultural con explicación del producto.
2. Qué relatos aparecen: muestra curada de mitos reales del corpus.
3. Mapa o agrupación regional con alcance declarado, no exhaustivo.
4. Cómo se relaciona cada mito con un arcano.
5. Galería de ocho a doce pares carta–mito.
6. Tradición oral, fuentes y metodología editorial resumida.
7. Composición completa de la baraja.
8. Producto físico, precio, disponibilidad, envío y CTA.
9. Preguntas frecuentes culturales y comerciales.

## Mensajes obligatorios

- Mantener rigor: cada relato, comunidad y territorio debe coincidir con el corpus.
- No presentar todas las historias como “ancestrales” si la fuente no lo permite.
- No afirmar cobertura de todos los pueblos o regiones.
- Distinguir contenido editorial gratuito del producto físico comprado.

## Medición

- `view_item`: producto visible.
- `view_myth_card`: diagnóstico de exploración de un par mito–carta.
- `select_region`: diagnóstico del recorrido regional.
- `add_to_cart` y `begin_checkout`: secundarias.
- `purchase`: primaria con valor COP, `transaction_id` e `items`.
- UTM por RSA: `ag06_mitos`, `ag06_memoria`, `ag06_cultura`.

## QA y activación

- Los nombres de mitos y cartas coinciden con el corpus canónico.
- La página no parece una tarea escolar ni ofrece PDFs o descargas.
- El CTA comercial está separado de la exploración, pero siempre accesible.
- No activar hasta publicar la landing, probar UTMs y validar compra.

Los 60 términos, 26 negativas y 45 titulares están en `groups-02-06.json`.
