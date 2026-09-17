import { NextResponse } from "next/server";
import {
  buildBoldCheckoutConfig,
  getBoldConfiguration,
} from "../../../../lib/bold";
import {
  createTarotOrder,
  markTarotOrderPaymentFailed,
} from "../../../../lib/tarot-orders";
import {
  getTarotProduct,
  isTarotShippingRegionAllowed,
} from "../../../../lib/tarot-commerce";
import { cleanTarotCampaign } from "../../../../lib/tarot-attribution";
import { cleanGa4AnalyticsContext } from "../../../../lib/ga4-measurement";
import { getTarotAccountFromRequest } from "../../../../lib/tarot-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NO_STORE = { "Cache-Control": "no-store" };
const DOCUMENT_TYPES = new Set([
  "CEDULA",
  "CEDULA_EXTRANJERIA",
  "TARJETA_IDENTIDAD",
  "PASAPORTE",
  "NIT",
]);

function cleanText(value, maximumLength) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, maximumLength);
}

function validationError(message) {
  return NextResponse.json(
    { error: "invalid_checkout", message },
    { status: 400, headers: NO_STORE }
  );
}

/**
 * Prepara el pago con Botón de Pagos.
 *
 * Aquí NO se cobra ni se contacta a Bold: se crea la orden, se firma con la
 * llave secreta —que nunca sale de este proceso— y se devuelve únicamente la
 * configuración pública que el navegador necesita para abrir el modal.
 *
 * El cobro lo confirma después el webhook firmado, y la interfaz consulta el
 * estado real de la orden. Una respuesta de esta ruta no significa que se haya
 * pagado nada.
 */
export async function POST(request) {
  const product = getTarotProduct();
  if (!product.checkoutReady) {
    return NextResponse.json(
      {
        error: "checkout_not_ready",
        message:
          "El pago se habilitará cuando el producto, las órdenes y la confirmación de Bold estén listos.",
        missing: [...product.missingCommercialFields, ...product.missingCheckoutFields],
      },
      { status: 409, headers: NO_STORE }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return validationError("La información del checkout no es válida.");
  }

  const quantity = Number.parseInt(body?.quantity, 10);
  const email = cleanText(body?.email, 160).toLowerCase();
  const fullName = cleanText(body?.fullName, 120);
  const phone = String(body?.phone || "").replace(/\D/g, "").slice(0, 10);
  const documentType = cleanText(body?.documentType, 40).toUpperCase();
  const documentNumber = cleanText(body?.documentNumber, 30).replace(/[^A-Za-z0-9-]/g, "");
  const region = cleanText(body?.region, 100);
  const city = cleanText(body?.city, 100);
  const postalCode = cleanText(body?.postalCode, 12).replace(/[^A-Za-z0-9-]/g, "");
  const addressLine1 = cleanText(body?.addressLine1, 180);
  const addressLine2 = cleanText(body?.addressLine2, 180);
  const campaign = cleanTarotCampaign(body?.campaign);
  const analytics = cleanGa4AnalyticsContext(body?.analytics);
  const privacyAccepted = body?.privacyAccepted === true;
  const account = await getTarotAccountFromRequest(request);

  if (body?.sku !== product.sku || !Number.isInteger(quantity) || quantity < 1 || quantity > 8) {
    return validationError("El producto o la cantidad no son válidos.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return validationError("Ingresa un correo electrónico válido.");
  }
  if (account && email !== account.email) {
    return validationError(`Usa el correo de tu cuenta: ${account.email}.`);
  }
  if (fullName.length < 3 || phone.length !== 10) {
    return validationError("Completa un nombre y teléfono colombiano válidos.");
  }
  if (!DOCUMENT_TYPES.has(documentType) || documentNumber.length < 5) {
    return validationError("Completa el tipo y número de documento del pagador.");
  }
  if (!isTarotShippingRegionAllowed(product, region)) {
    return validationError("Selecciona un departamento incluido en la cobertura de entrega.");
  }
  if (!city || !postalCode || addressLine1.length < 5) {
    return validationError("Completa ciudad, código postal y dirección de entrega.");
  }
  if (!privacyAccepted) {
    return validationError("Debes aceptar el tratamiento de datos para crear el pedido.");
  }

  /* Las llaves se comprueban ANTES de crear la orden: una orden que nace sin
     poder firmarse sería un pedido fantasma en la base. */
  const configuration = getBoldConfiguration();
  if (!configuration.ready) {
    return NextResponse.json(
      {
        error: "bold_not_ready",
        message: "Las llaves de Botón de Pagos aún no están configuradas.",
      },
      { status: 503, headers: NO_STORE }
    );
  }

  const unitPriceCop = product.priceCop;
  const totalCop = unitPriceCop * quantity;
  const siteUrl = String(process.env.NEXT_PUBLIC_SITE_URL || "").trim().replace(/\/+$/, "");
  const order = await createTarotOrder({
    sku: product.sku,
    quantity,
    unitPriceCop,
    amountInCents: totalCop * 100,
    currency: product.currency,
    email,
    fullName,
    phone,
    region,
    city,
    addressLine1,
    addressLine2,
    campaign,
    analytics,
    userId: account?.id || null,
  });

  const callbackUrl = new URL("/tarot/checkout/resultado", siteUrl);
  callbackUrl.searchParams.set("order", order.status_token);

  try {
    const checkout = buildBoldCheckoutConfig({
      orderId: order.reference,
      /* El monto que se firma va en PESOS, no en centavos, y debe ser la misma
         cadena que recibe el modal: Bold rechaza la firma si difieren. */
      amountCop: totalCop,
      currency: product.currency,
      apiKey: configuration.apiKey,
      secretKey: configuration.secretKey,
      redirectionUrl: callbackUrl.toString(),
      originUrl: new URL("/tarot/checkout", siteUrl).toString(),
      description: `${product.name} · ${quantity} unidad${quantity === 1 ? "" : "es"}`,
      customer: {
        email,
        fullName,
        phone,
        dialCode: "+57",
        documentNumber,
        documentType,
      },
      billingAddress: {
        address: [addressLine1, addressLine2].filter(Boolean).join(", "),
        city,
        zipCode: postalCode,
        state: region,
        country: "CO",
      },
    });

    return NextResponse.json(
      {
        orderToken: order.status_token,
        statusUrl: `/api/tarot/orders/${order.status_token}`,
        resultUrl: callbackUrl.toString(),
        /* Sólo datos públicos: la llave de identidad viaja al navegador por
           diseño; la secreta se quedó en la firma y jamás se serializa. */
        checkout,
      },
      { status: 201, headers: NO_STORE }
    );
  } catch (error) {
    await markTarotOrderPaymentFailed(order.reference).catch(() => undefined);
    console.error("Bold checkout preparation failed", {
      code: error?.code || "bold_checkout_failed",
      reference: order.reference,
    });
    return NextResponse.json(
      {
        error: "bold_checkout_failed",
        message: "No pudimos preparar el pago. No se confirmó ningún cobro.",
        orderToken: order.status_token,
        resultUrl: callbackUrl.toString(),
      },
      { status: 422, headers: NO_STORE }
    );
  }
}
