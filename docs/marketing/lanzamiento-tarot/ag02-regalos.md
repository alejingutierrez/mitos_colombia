# Grupo 02 — Regalos Colombia y extranjeros

Fecha: 12 de agosto de 2026<br>
Campaña: `Lanzamiento Tarot`<br>
ID de grupo en Google Ads: `198705354626`<br>
Estado operativo: creado con 60 keywords, 26 negativas y 3 RSA; campaña detenida.<br>
URL: `https://www.mitosdecolombia.com/tarot/regalo-colombiano`

## Trabajo de la landing

Convertir búsquedas de regalo colombiano, regalo cultural y regalo para extranjeros en `add_to_cart`. La página debe explicar en el primer viewport que el producto es una **baraja editorial física de 78 cartas inspirada en mitos colombianos**; no puede parecer una lectura, un servicio esotérico ni una tarjeta de regalo.

## Hero

- H1: `Un regalo colombiano lleno de historias`
- Subtítulo: `78 cartas que convierten mitos, arquetipos y territorios de Colombia en una baraja editorial para recordar.`
- Prueba: `22 arcanos mayores · 56 arcanos menores · En español`
- CTA primario: `Elegir esta baraja`
- CTA secundario: `Descubrir qué incluye`
- Imagen: baraja, caja y selección de cartas reales presentadas como producto.
- Mostrar junto al CTA precio, disponibilidad y fecha de despacho cuando estén confirmados.

## Arquitectura

1. Hero orientado a regalo con producto, precio y CTA.
2. Para quién funciona: extranjero, anfitrión, pareja, hombre, mujer o persona que ama Colombia.
3. Qué recibe: 78 cartas, caja y cualquier componente adicional confirmado.
4. Por qué tiene significado: cada arcano se vincula con un mito colombiano.
5. Galería de cinco a ocho cartas con relato breve.
6. Ocasiones: visita, despedida, aniversario y celebración, sin inventar personalización.
7. Presentación y empaque real.
8. Envíos, cambios, pagos y tiempos.
9. Preguntas frecuentes y cierre con `Agregar al carrito`.

## Mensajes obligatorios

- Es un producto físico y editorial.
- La diferencia está en el vínculo entre arcanos y mitos colombianos.
- Sirve como regalo cultural incluso para quien no practica tarot.
- No prometer empaque de regalo, personalización, envío gratis ni edición limitada sin confirmación.

## Medición

- `view_item`: producto y precio visibles.
- `select_gift_recipient`: interacción opcional con selector de destinatario; diagnóstico.
- `add_to_cart`: secundaria en Google Ads.
- `begin_checkout`: secundaria.
- `purchase`: primaria, con `transaction_id`, `value`, `currency: COP` e `items`.
- UTM por RSA: `ag02_regalo_directo`, `ag02_destinatario`, `ag02_significado`.

## QA y activación

- El primer viewport repite la promesa del anuncio y muestra que es una baraja.
- La landing no redirige a `/tarot` ni mezcla la carta del día.
- El CTA conserva UTMs hasta carrito y compra.
- No activar hasta confirmar precio, inventario, despacho, envío y empaque.

Los 60 términos, 26 negativas y 45 titulares están en `groups-02-06.json`.
