import { NextResponse } from "next/server";
import {
  createBoldPayment,
  createBoldPaymentIntent,
  buildBoldAddress,
  buildBoldPaymentMethod,
  getBoldConfiguration,
  safeBoldNextAction,
} from "../../../../lib/bold";
import {
  createTarotOrder,
  markTarotOrderPaymentFailed,
  markTarotOrderPaymentStarted,
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

function cleanDeviceFingerprint(value) {
  const number = (item, fallback) => {
    const parsed = Number.parseInt(item, 10);
    return Number.isFinite(parsed) ? parsed : fallback;
  };
  return {
    device_type: value?.deviceType === "MOBILE" ? "MOBILE" : "DESKTOP",
    os: cleanText(value?.os, 80) || "Unknown",
    model: cleanText(value?.model, 80),
    browser: cleanText(value?.browser, 120) || "Unknown",
    java_enabled: value?.javaEnabled === true,
    language: cleanText(value?.language, 20) || "es-CO",
    color_depth: number(value?.colorDepth, 24),
    screen_height: number(value?.screenHeight, 800),
    screen_width: number(value?.screenWidth, 1280),
    time_zone_offset: number(value?.timeZoneOffset, 300),
    platform: cleanText(value?.platform, 80),
  };
}

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
  const paymentMethodId = cleanText(body?.paymentMethod, 30).toLowerCase();
  const configuredMethod = product.paymentMethods.find(
    (method) => method.id === paymentMethodId && method.confirmed
  );
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
  if (!configuredMethod) {
    return validationError("Selecciona un medio de pago habilitado en Bold.");
  }
  if (!privacyAccepted) {
    return validationError("Debes aceptar el tratamiento de datos para crear el pedido.");
  }

  let paymentMethod;
  try {
    paymentMethod = buildBoldPaymentMethod(paymentMethodId, body?.paymentDetails);
  } catch {
    return validationError("Revisa los datos del medio de pago seleccionado.");
  }

  const configuration = getBoldConfiguration();
  if (!configuration.ready) {
    return NextResponse.json(
      { error: "bold_not_ready", message: "Las llaves de Bold aún no están configuradas." },
      { status: 503, headers: NO_STORE }
    );
  }

  const unitPriceCop = product.priceCop;
  const amountInCents = unitPriceCop * quantity * 100;
  const order = await createTarotOrder({
    sku: product.sku,
    quantity,
    unitPriceCop,
    amountInCents,
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

  const siteUrl = String(process.env.NEXT_PUBLIC_SITE_URL || "").trim().replace(/\/+$/, "");
  const callbackUrl = new URL("/tarot/checkout/resultado", siteUrl);
  callbackUrl.searchParams.set("order", order.status_token);
  const address = buildBoldAddress({
    addressLine1,
    addressLine2,
    city,
    region,
    phone,
    postalCode,
  });
  const payerAddress = {
    street1: address.street1,
    ...(address.street2 && { street2: address.street2 }),
    city: address.city,
    zip_code: postalCode,
    province: address.province,
    country: "CO",
    phone,
  };
  const deviceFingerprint = cleanDeviceFingerprint(body?.deviceFingerprint);

  try {
    await createBoldPaymentIntent(
      {
        reference_id: order.reference,
        amount: {
          currency: product.currency,
          total_amount: unitPriceCop * quantity,
          tip_amount: 0,
          taxes: [],
        },
        description: `${product.name} · ${quantity} unidad${quantity === 1 ? "" : "es"}`,
        metadata: {
          key: "reference",
          value: order.reference,
        },
        callback_url: callbackUrl.toString(),
        customer: {
          name: fullName,
          phone,
          email,
          billing_address: address,
          shipping_address: address,
        },
        device_fingerprint: deviceFingerprint,
      },
      { apiKey: configuration.apiKey }
    );

    const payment = await createBoldPayment(
      {
        reference_id: order.reference,
        metadata: {
          key: "reference",
          value: order.reference,
        },
        payer: {
          person_type: documentType === "NIT" ? "LEGAL_PERSON" : "NATURAL_PERSON",
          name: fullName,
          phone,
          email,
          document_type: documentType,
          document_number: documentNumber,
          billing_address: payerAddress,
        },
        payment_method: paymentMethod,
        device_fingerprint: deviceFingerprint,
      },
      { apiKey: configuration.apiKey }
    );

    const transactionId = cleanText(payment?.transaction_id, 180);
    if (!transactionId) throw new Error("Bold did not return a transaction id.");
    await markTarotOrderPaymentStarted(
      order.reference,
      transactionId,
      paymentMethod.name
    );

    return NextResponse.json(
      {
        orderToken: order.status_token,
        statusUrl: `/api/tarot/orders/${order.status_token}`,
        resultUrl: callbackUrl.toString(),
        transactionStatus: String(payment?.status || "RUNNING").toUpperCase(),
        nextAction: safeBoldNextAction(payment),
      },
      { status: 201, headers: NO_STORE }
    );
  } catch (error) {
    const providerStatus = Number(error?.status || 0);
    const definiteFailure = providerStatus >= 400 && providerStatus < 500;
    if (definiteFailure) {
      await markTarotOrderPaymentFailed(order.reference).catch(() => undefined);
    }
    console.error("Bold checkout preparation failed", {
      code: error?.code || "bold_checkout_failed",
      status: error?.status || 500,
      reference: order.reference,
    });
    return NextResponse.json(
      {
        error: "bold_checkout_failed",
        message: "Bold no pudo iniciar el pago. No se confirmó ningún cobro.",
        orderToken: order.status_token,
        resultUrl: callbackUrl.toString(),
        recoverable: !definiteFailure,
      },
      { status: definiteFailure ? 422 : 502, headers: NO_STORE }
    );
  }
}
