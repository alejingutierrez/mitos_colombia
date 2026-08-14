# Reemplazo de visuales de intención

Las seis escenas actuales son **visualizaciones editoriales provisionales**. Sirven para diferenciar la intención de cada landing mientras se producen las fotografías finales; no prueban empaque, acabados, escala, contenido de caja ni accesorios incluidos.

## Invariantes de reemplazo

- Conservar un archivo distinto por ruta y el espacio negativo necesario para el titular y los CTA.
- Mantener el producto reconocible y el mismo encuadre editorial general: texto a la izquierda, producto a la derecha en escritorio.
- No mostrar accesorios como parte de la compra salvo confirmación expresa en la ficha comercial.
- No añadir precio, disponibilidad, tiempos, materiales, envío, devoluciones ni afirmaciones que no estén confirmadas.
- Exportar en 3:2, mínimo 1536 × 1024, y comprobar un recorte móvil centrado.
- Actualizar `alt`, Open Graph y esta tabla en el mismo cambio.

| Ruta | Archivo provisional | Función visual | Fotografía final esperada |
| --- | --- | --- | --- |
| `/tarot/comprar` | `intent-purchase-v1.png` | Decisión informada | Producto completo, escala verificable y muestra de cartas; empaque sólo si es definitivo. |
| `/tarot/regalo-colombiano` | `intent-gift-v1.png` | Regalo con significado | Producto final en una escena de obsequio; evitar sugerir empaque de regalo no incluido. |
| `/tarot/souvenir-colombiano` | `intent-souvenir-v1.png` | Memoria de viaje | Producto final en contexto de viaje sobrio, sin clichés ni representación cultural genérica. |
| `/tarot/autoconocimiento` | `intent-reflection-v1.png` | Observación y escritura | Uso responsable junto a un cuaderno; sin promesas terapéuticas, predictivas o rituales. |
| `/tarot/arte-y-coleccion` | `intent-art-v1.png` | Detalle y colección | Macrofotografía real de impresión, bordes y material cuando estén confirmados. |
| `/tarot/mitos-y-leyendas` | `intent-culture-v1.png` | Archivo cultural | Producto final en relación con el archivo editorial, sin presentar la selección como exhaustiva. |

## Superficies que no cambian con este reemplazo

El carrito, el resumen de pedido y el checkout usan la visualización neutra de producto. Deben reemplazarse por una fotografía de catálogo final independiente, consistente y sin utilería.

Ese reemplazo se configura con `TAROT_PRODUCT_IMAGE`. Las imágenes actuales se
autorizan temporalmente con `TAROT_PRODUCT_IMAGE_APPROVED_FOR_SALE=true`, pero
sólo se declaran finales con `TAROT_PRODUCT_IMAGE_STATUS=final`. Mientras ese paso
falte, la compuerta comercial conserva el checkout cerrado.
