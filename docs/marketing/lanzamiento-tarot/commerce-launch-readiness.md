# Preparación para activar la venta del Tarot de Mitos Colombianos

Este documento separa el prototipo comercial ya construido de los datos y
servicios que todavía deben confirmarse antes de recibir dinero real. La tienda
permanece en `preview` y falla de forma cerrada mientras falte cualquiera de
estos requisitos.

## Datos comerciales que debe entregar el negocio

- Precio final en COP, con el envío incluido en ese precio.
- Estado de venta: `available` o `preorder`.
- Plazo de despacho que pueda prometerse de manera consistente.
- Cobertura geográfica exacta del envío incluido.
- Política aprobada de cambios y devoluciones.
- Contenido definitivo de la caja.
- Medidas, materiales y acabados del producto físico.
- Fotografías finales del producto para sustituir, más adelante, las
  visualizaciones actuales aprobadas expresamente para esta etapa.
- Razón social o nombre del vendedor, identificación, dirección y canales de
  atención que puedan mostrarse antes del pago.

## Variables para el producto

```dotenv
TAROT_COMMERCE_STATUS=available
TAROT_PRICE_COP=124900
TAROT_TAXES_INCLUDED=true
TAROT_DISPATCH_TEXT=
TAROT_SHIPPING_INCLUDED=true
TAROT_SHIPPING_TEXT=
TAROT_SHIPPING_REGIONS=Bogotá D.C.|Antioquia|Cundinamarca
TAROT_RETURNS_TEXT=
TAROT_PRODUCT_CONTENTS=
TAROT_PHYSICAL_SPECS=
TAROT_PRODUCT_IMAGE=/commerce/tarot-product-provisional.png
TAROT_PRODUCT_IMAGE_STATUS=provisional
TAROT_PRODUCT_IMAGE_APPROVED_FOR_SALE=true
TAROT_SELLER_LEGAL_NAME=
TAROT_SELLER_LEGAL_ID=
TAROT_SELLER_ADDRESS=
TAROT_SELLER_EMAIL=
TAROT_SELLER_PHONE=
```

`TAROT_PRODUCT_IMAGE_APPROVED_FOR_SALE=true` registra la decisión de usar las
imágenes generadas actuales durante esta etapa, sin confundirlas con arte final.
`TAROT_PRODUCT_IMAGE_STATUS=final` sólo se configura cuando exista y se revise
la fotografía final de catálogo.

`TAROT_SHIPPING_INCLUDED=true` es una confirmación deliberada: el texto de
cobertura por sí solo no habilita el carrito. El total mostrado al comprador no
puede recibir después un cobro adicional de transporte.

## Bold y órdenes

- Configurar por separado las llaves activa y secreta de prueba y producción.
- Crear y probar la tabla de órdenes en la base de datos de producción.
- Registrar el endpoint firmado `/api/tarot/bold/events` en Bold.
- El endpoint valida la firma sobre el cuerpo crudo, responde `200` de inmediato
  y ejecuta la conciliación después de la respuesta para respetar el límite de
  dos segundos documentado por Bold.
- Verificar que un evento `APPROVED` válido actualice exactamente una orden.
- Verificar que eventos repetidos no dupliquen la compra ni el evento analítico.
- Si Bold devuelve un error definitivo, la orden se cierra como error y puede
  reintentarse. Si la respuesta es ambigua por red o timeout, el comprador pasa
  a la página de verificación para evitar iniciar accidentalmente un segundo
  cobro mientras se consulta la misma referencia.
- Crear un secreto de Measurement Protocol para el mismo flujo GA4 que carga el
  sitio. El webhook envía `purchase` desde el servidor después de conciliar la
  transacción, incluso si el comprador no regresa a la página de confirmación.
- Marcar `purchase` como evento clave en GA4 e importarlo como acción de
  conversión principal en Google Ads. La campaña no debe optimizarse con una
  acción distinta o todavía “no verificada”.
- Confirmar en la cuenta real tarjeta, PSE, Nequi, Botón Bancolombia y QR Bre-B.
  El efectivo en corresponsal queda excluido porque la API documentada no lo
  ofrece.
- Confirmar `NEXT_PUBLIC_SITE_URL` con la URL HTTPS definitiva. El retorno de
  Bold nunca se construye desde el `Host` recibido en la petición.

```dotenv
BOLD_ENVIRONMENT=test
BOLD_API_KEY_TEST=
BOLD_SECRET_KEY_TEST=
BOLD_API_KEY_PRODUCTION=
BOLD_SECRET_KEY_PRODUCTION=
TAROT_BOLD_PAYMENT_METHODS=card,pse,nequi,bancolombia,qr
TAROT_ORDERS_READY=true
TAROT_BOLD_WEBHOOK_READY=true
GA_MEASUREMENT_API_SECRET=
TAROT_SERVER_PURCHASE_TRACKING_READY=true
```

Las llaves secretas nunca se exponen como variables `NEXT_PUBLIC_*` ni se
guardan en el repositorio. La orden conserva únicamente los identificadores
pseudónimos de sesión necesarios para atribución; nunca envía nombre, correo,
teléfono ni dirección a Google Analytics.

El código también acepta `GA4_MEASUREMENT_PROTOCOL_API_SECRET` como alias, pero
el proyecto de Vercel ya tiene `GA_MEASUREMENT_API_SECRET` en desarrollo,
preview y producción. No hace falta copiar ni volver a crear ese secreto.

La integración usa la API directa: los datos de tarjeta atraviesan el servidor
únicamente durante la solicitud cifrada hacia Bold y no se persisten ni se
registran. Antes de habilitar tarjeta en producción deben estar aprobadas la
activación del comercio y las obligaciones de seguridad/PCI que Bold determine
para esta modalidad. No se debe activar el checkout sólo por tener las llaves.

## Prueba obligatoria antes de publicar anuncios

Ejecutar primero el auditor sin exponer valores ni secretos:

```bash
npm run tarot:audit
npm run tarot:audit -- --strict
```

El modo normal explica qué falta. El modo `--strict` devuelve error mientras
el checkout no esté listo y debe usarse como puerta de despliegue o activación.
Un resultado `PASS` para las seis landings no sustituye la fotografía final,
las condiciones comerciales ni la prueba real de Bold.

1. Abrir cada una de las seis landings desde su URL final y verificar que no
   redirija a una página genérica.
2. Agregar una unidad al carrito, modificar la cantidad y continuar al checkout.
3. Completar en Bold una prueba por cada medio habilitado, incluida la ruta 3DS
   de tarjeta y la expiración del QR.
4. Confirmar que la página de resultado permanece pendiente hasta recibir el
   webhook firmado y sólo entonces muestra la compra aprobada.
5. Comprobar en DebugView/tiempo real de GA4 que `purchase` llega aunque se
   cierre la página de retorno, con el identificador de transacción, valor real
   y moneda `COP`; repetir el webhook y confirmar que la orden no reenvía el
   evento. El mismo `transaction_id` protege además el fallback del navegador.
6. Confirmar en Google Ads que esa compra aparece en la acción primaria
   importada, con atribución y valor, antes de reactivar la campaña.
7. Revisar el pedido persistido, el correo operativo y el flujo de despacho.
8. Repetir en escritorio y móvil, incluyendo error, rechazo y abandono.

La campaña `Lanzamiento Tarot` debe permanecer detenida hasta completar esta
prueba de extremo a extremo. Una compilación correcta o una landing visible no
demuestran que el cobro, la medición y el cumplimiento estén listos.
