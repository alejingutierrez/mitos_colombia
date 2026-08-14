# Sistema de landings — Lanzamiento Tarot

Fecha: 12 de agosto de 2026

## Dirección aceptada

Las seis landings comparten un sistema editorial-comercial, pero no el mismo
argumento de venta. La idea rectora es **un objeto oscuro que abre un archivo
vivo de Colombia**: la superficie comercial usa tinta, verde selva y oro
envejecido; las explicaciones respiran sobre blanco puro y papel crema.

Referencias visuales:

- `concepts/01-hero-commerce.png`: primer viewport y transición inicial.
- `concepts/02-editorial-middle.png`: anatomía carta–mito–pregunta, galería y
  reflexión.
- `concepts/03-cart-checkout.png`: cierre comercial, carrito y checkout.

La imagen provisional de producto vive en
`public/commerce/tarot-product-provisional.png`. Debe mostrarse siempre como
**visualización provisional** y sustituirse cuando exista fotografía aprobada
de caja, cartas y contenido real.

## Tokens

| Rol | Valor |
| --- | --- |
| Tinta | `#0a0f0c` |
| Verde selva | `#143f2c` |
| Oro envejecido | `#bd8642` |
| Papel crema | `#f6e9cf` |
| Blanco editorial | `#ffffff` |
| Texto sobre blanco | `#161611` |
| Texto tenue | `#75746d` |
| Línea clara | `#e8e5de` |

- Títulos: Asimovian, la familia `--font-display` existente.
- Texto y controles: Noto Sans Display, `--font-body`.
- Esquinas: 2–8 px; no usar cápsulas ni tarjetas SaaS redondeadas.
- Contenedores: bandas abiertas y carriles; una sola caja cuando protege una
  transacción o un formulario.
- Movimiento: salida editorial `cubic-bezier(0.16, 1, 0.3, 1)`, entre 240 y
  650 ms. Todo debe respetar `prefers-reduced-motion`.

## Componentes permitidos

- `CommerceHeader`: marca, cuatro anclas y carrito.
- `HeroCommerce`: mensaje específico de intención, estado comercial y producto.
- `StoryAnatomy`: relación entre arcano, mito y experiencia del comprador.
- `CardStoryRail`: galería horizontal de cartas reales del corpus.
- `IntentReasons`: argumentos específicos por grupo de anuncios.
- `FloatingPurchaseCompanion`: CTA contextual que aparece después del hero,
  cambia su línea breve según la sección y nunca tapa contenido.
- `CommerceFacts`: información comercial confirmada; los faltantes se muestran
  como pendientes, nunca como promesas.
- `TrustFaq`: preguntas comerciales y culturales.
- `CartDrawer`, `CartPage`, `CheckoutPage`, `PaymentResult`.

## Copia autorizada sobre el primer viewport

Cada landing sólo puede usar su eyebrow, H1, subtítulo, prueba y CTA definidos
en el brief correspondiente. Son compartidos la marca `Mitos de Colombia`, las
anclas `La baraja`, `Historia`, `Arcanos`, `Preguntas` y el aviso
`Visualización provisional del producto`.

No se permite agregar precio, disponibilidad, despacho, envío gratis,
materiales, acabados, guía, edición limitada ni personalización hasta que cada
dato exista en la configuración comercial.

## Diferenciación por intención

1. Compra directa: claridad de producto, composición y decisión rápida.
2. Regalo: significado para quien recibe, no práctica esotérica.
3. Souvenir: memoria transportable y relato territorial, no cliché turístico.
4. Autoconocimiento: observación y conversación con límites de salud claros.
5. Arte y colección: sistema visual, ilustración y objeto editorial.
6. Mitos y cultura: rigor del corpus, regiones y vínculo mito–arcano.

## Comercio y medición

- `view_item` se emite cuando el producto y su estado comercial son visibles.
- `add_to_cart` sólo se emite después de una respuesta exitosa del servidor.
- `begin_checkout` sólo se emite al crear una sesión de checkout válida.
- `purchase` sólo se emite después de que el servidor confirme una transacción
  Bold `APPROVED`, con `transaction_id` único, valor real y moneda `COP`.
- Aperturas en modo de previsualización usan eventos diagnósticos distintos y
  nunca simulan conversiones.
- Los eventos diagnósticos de destinatario, territorio, carta, mito o ejemplo
  sólo se emiten ante una interacción explícita; llegar a la sección por scroll
  no cuenta como selección.
- Los selectores de regalo y souvenir exponen estado `aria-pressed` y una
  respuesta editorial visible para que la interacción sea comprobable y
  accesible.

## Proveedor de pagos

La arquitectura usa la API de Pagos en Línea de Bold: tarjeta, PSE, Nequi,
Botón Bancolombia y QR Bre-B. El efectivo en corresponsal no se anuncia porque
no figura entre los métodos de esta API. La redirección no confirma una venta:
el cierre depende del webhook firmado y de la consulta autoritativa del pago.
