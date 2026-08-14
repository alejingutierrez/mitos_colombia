# Grupo 03 — Souvenir y objeto cultural

Fecha: 12 de agosto de 2026<br>
Campaña: `Lanzamiento Tarot`<br>
ID de grupo en Google Ads: `198705339746`<br>
Estado operativo: creado con 60 keywords, 26 negativas y 3 RSA; campaña detenida.<br>
URL: `https://www.mitosdecolombia.com/tarot/souvenir-colombiano`

## Trabajo de la landing

Convertir búsquedas de souvenir, recuerdo de viaje y objeto cultural colombiano. Debe presentar la baraja como un recuerdo editorial transportable y coleccionable, sin afirmar que es artesanal, liviana o apta para equipaje hasta conocer sus especificaciones reales.

## Hero

- H1: `Un recuerdo de Colombia contado en 78 cartas`
- Subtítulo: `Lleva mitos, personajes y territorios del país en una baraja editorial ilustrada.`
- Prueba: `Relatos de distintas regiones · 78 cartas · En español`
- CTA primario: `Agregar al carrito`
- CTA secundario: `Explorar los relatos`
- Imagen: producto real completo acompañado por cartas que representen varias regiones.

## Arquitectura

1. Hero de souvenir con producto, precio, disponibilidad y CTA.
2. Mapa o recorrido editorial de las regiones representadas, sin inventar cobertura nacional exhaustiva.
3. Qué hace diferente el recuerdo: no es un objeto genérico, cada carta conserva una historia.
4. Galería carta–mito–territorio.
5. Composición física y dimensiones confirmadas.
6. Para viajeros, visitantes, colombianos fuera del país y coleccionistas.
7. Cómo se puede explorar o compartir la baraja.
8. Envíos, cambios, medios de pago y tiempos.
9. FAQ y cierre de compra.

## Mensajes obligatorios

- Mostrar primero “recuerdo de Colombia”; explicar tarot después.
- Reforzar memoria cultural, relatos e ilustración.
- No usar clichés turísticos ni afirmar fabricación artesanal sin evidencia.
- No prometer disponibilidad en Bogotá, Medellín o Cartagena; las ciudades son rutas de búsqueda, no puntos de venta confirmados.

## Medición

- `view_item`: producto visible.
- `view_region_story`: interacción diagnóstica con mapa o galería.
- `add_to_cart` y `begin_checkout`: secundarias.
- `purchase`: primaria con valor COP y transacción única.
- UTM por RSA: `ag03_souvenir_directo`, `ag03_viaje`, `ag03_objeto_cultural`.

## QA y activación

- La URL permanece en `/tarot/souvenir-colombiano`.
- Precio y CTA están visibles sin confundir el producto con contenido editorial gratuito.
- Las ciudades no aparecen como disponibilidad local si no existe.
- No activar hasta publicar dimensiones, peso, empaque, disponibilidad y condiciones de envío.

Los 60 términos, 26 negativas y 45 titulares están en `groups-02-06.json`.
