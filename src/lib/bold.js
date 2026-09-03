import { createHash, createHmac, timingSafeEqual } from "node:crypto";

/**
 * Cliente de Bold · Botón de Pagos (Embedded Checkout).
 *
 * Reemplaza la integración anterior contra `api.online.payments.bold.co`
 * ("Pagos en Línea"), que respondía 403 con cualquier llave —incluso una
 * falsa— porque ese producto no es el que corresponde a un checkout web.
 *
 * En Botón de Pagos el cobro no se inicia con una llamada nuestra: el servidor
 * sólo firma la orden y el navegador abre el modal de Bold con esa firma.
 * Por eso aquí quedan tres responsabilidades y ninguna más:
 *   1. resolver el par de llaves del ambiente activo,
 *   2. firmar la orden (SHA-256, en el servidor) y armar la configuración
 *      pública que recibe el botón,
 *   3. consultar y verificar el estado del pago (comprobante + webhook).
 */

/* La carga de la librería y la apertura del modal viven en
   `src/lib/bold-browser.js`: este módulo importa `node:crypto` y nunca puede
   entrar en el paquete del navegador. */

/** API de comprobantes. Distinta del host de la API vieja. */
export const BOLD_API_BASE_URL = "https://payments.api.bold.co";

/** Límites publicados por Bold para el monto de una transacción. */
export const BOLD_MIN_AMOUNT_COP = 1000;
export const BOLD_MAX_AMOUNT_COP = 10_000_000;

/** El identificador de la venta admite sólo estos caracteres y 60 de largo. */
export const BOLD_ORDER_ID_PATTERN = /^[A-Za-z0-9_-]{1,60}$/;

/** Equivalencias entre nuestros tipos de documento y los que acepta Bold. */
export const BOLD_DOCUMENT_TYPES = Object.freeze({
  CEDULA: "CC",
  CEDULA_EXTRANJERIA: "CE",
  PASAPORTE: "PA",
  TARJETA_IDENTIDAD: "TI",
  NIT: "NIT",
});

function clean(value, maximumLength = 500) {
  return String(value ?? "").trim().slice(0, maximumLength);
}

function collapse(value, maximumLength = 500) {
  return String(value ?? "").replace(/\s+/g, " ").trim().slice(0, maximumLength);
}

export function getBoldConfiguration(environment = process.env.BOLD_ENVIRONMENT) {
  const resolvedEnvironment =
    clean(environment).toLowerCase() === "production" ? "production" : "test";
  /* `apiKey` es la llave de IDENTIDAD (pública por diseño: viaja al navegador
     dentro de la configuración del botón). Conserva ese nombre porque es el
     que usa la propia configuración de Bold. La secreta jamás sale de aquí. */
  const apiKey = clean(
    resolvedEnvironment === "production"
      ? process.env.BOLD_BUTTON_IDENTITY_KEY_PRODUCTION
      : process.env.BOLD_BUTTON_IDENTITY_KEY_TEST
  );
  const secretKey = clean(
    resolvedEnvironment === "production"
      ? process.env.BOLD_BUTTON_SECRET_KEY_PRODUCTION
      : process.env.BOLD_BUTTON_SECRET_KEY_TEST
  );

  return {
    environment: resolvedEnvironment,
    apiKey,
    secretKey,
    ready: Boolean(apiKey && secretKey),
  };
}

/**
 * Firma de integridad del Botón de Pagos.
 *
 * NO es HMAC: es un SHA-256 plano sobre la concatenación sin separadores de
 * `{identificador}{monto}{divisa}{llaveSecreta}`, serializado en hexadecimal
 * minúsculo. El monto y la divisa deben ser EXACTAMENTE las mismas cadenas que
 * viajan en la configuración; un "30000" contra un 30000 formateado distinto
 * produce BTN-002 ("Integrity key doesn't match").
 *
 * Sólo tiene sentido calculada en el servidor: si la llave secreta llegara al
 * navegador, cualquiera podría firmar el monto que quisiera.
 */
export function createBoldIntegritySignature({
  orderId,
  amount,
  currency,
  secretKey,
}) {
  const id = clean(orderId, 60);
  const total = clean(amount, 20);
  const money = clean(currency, 3).toUpperCase();
  const secret = String(secretKey ?? "");
  if (!id || !total || !money || !secret) {
    throw new Error(
      "Bold integrity signature requires orderId, amount, currency and the secret key."
    );
  }
  return createHash("sha256")
    .update(`${id}${total}${money}${secret}`, "utf8")
    .digest("hex");
}

/** Monto en pesos enteros, como cadena. Bold no acepta decimales. */
export function formatBoldAmount(value) {
  const amount = Number(value);
  if (!Number.isInteger(amount)) {
    throw new Error("Bold amounts must be an integer number of pesos.");
  }
  if (amount < BOLD_MIN_AMOUNT_COP || amount > BOLD_MAX_AMOUNT_COP) {
    throw new Error("Bold amount is outside the accepted range.");
  }
  return String(amount);
}

function secureUrl(value) {
  const url = new URL(clean(value, 500));
  if (url.protocol !== "https:") {
    throw new Error("Bold URLs must use https.");
  }
  return url.toString();
}

/**
 * La descripción se muestra al comprador dentro del modal. Bold la rechaza si
 * contiene una URL, así que se limpia antes de enviarla.
 */
function boldDescription(value) {
  const text = collapse(value, 100).replace(
    /\b(?:https?:\/\/|www\.)\S+|\b[\w-]+\.(?:com|co|net|org)\b/gi,
    ""
  );
  const trimmed = collapse(text, 100);
  return trimmed.length >= 2 ? trimmed : "";
}

function compactObject(values) {
  return Object.fromEntries(
    Object.entries(values).filter(([, value]) => Boolean(value))
  );
}

/**
 * Arma la configuración que recibe `new BoldCheckout(...)`.
 *
 * Se construye campo por campo a propósito: nada se copia por spread desde la
 * entrada, para que un descuido no arrastre la llave secreta hasta el
 * navegador. Todo valor sale como cadena, que es lo que la librería espera.
 *
 * Se omiten deliberadamente dos campos que la documentación de Bold se
 * contradice a sí misma:
 *  · `tax`: el precio ya incluye impuestos y las tres fuentes de la doc listan
 *    juegos distintos de valores admitidos.
 *  · `expirationDate`: una sección la define en nanosegundos y otra en
 *    milisegundos. El vencimiento por defecto (24 h) nos sirve.
 */
export function buildBoldCheckoutConfig({
  orderId,
  amountCop,
  currency = "COP",
  apiKey,
  secretKey,
  redirectionUrl,
  originUrl,
  description,
  customer,
  billingAddress,
}) {
  const identityKey = clean(apiKey, 200);
  if (!identityKey) throw new Error("Bold identity key is not configured.");
  if (!BOLD_ORDER_ID_PATTERN.test(clean(orderId, 61))) {
    throw new Error("Bold orderId accepts only letters, digits, _ and - (max 60).");
  }
  const id = clean(orderId, 60);
  const money = clean(currency, 3).toUpperCase();
  if (money !== "COP" && money !== "USD") {
    throw new Error("Bold only accepts COP or USD.");
  }
  const amount = formatBoldAmount(amountCop);

  const config = {
    apiKey: identityKey,
    orderId: id,
    amount,
    currency: money,
    integritySignature: createBoldIntegritySignature({
      orderId: id,
      amount,
      currency: money,
      secretKey,
    }),
    redirectionUrl: secureUrl(redirectionUrl),
    /* El único interruptor entre el modal sobre la página y una redirección
       de página completa. Sin esto, Bold se lleva a la persona del sitio. */
    renderMode: "embedded",
  };

  const summary = boldDescription(description);
  if (summary) config.description = summary;

  if (originUrl) config.originUrl = secureUrl(originUrl);

  const customerData = compactObject({
    email: clean(customer?.email, 160).toLowerCase(),
    fullName: collapse(customer?.fullName, 120),
    phone: clean(customer?.phone, 20).replace(/\D/g, ""),
    dialCode: clean(customer?.dialCode, 6),
    documentNumber: clean(customer?.documentNumber, 30),
    documentType: BOLD_DOCUMENT_TYPES[clean(customer?.documentType, 40).toUpperCase()] || "",
  });
  if (Object.keys(customerData).length) {
    config.customerData = JSON.stringify(customerData);
  }

  const address = compactObject({
    address: collapse(billingAddress?.address, 180),
    city: collapse(billingAddress?.city, 100),
    zipCode: clean(billingAddress?.zipCode, 12),
    state: collapse(billingAddress?.state, 100),
    country: clean(billingAddress?.country, 2).toUpperCase(),
  });
  if (Object.keys(address).length) {
    config.billingAddress = JSON.stringify(address);
  }

  return config;
}

function responsePayload(body) {
  return body?.payload && typeof body.payload === "object" ? body.payload : body;
}

/**
 * Consulta el comprobante de una venta por NUESTRA referencia.
 *
 * Va contra `payments.api.bold.co` —no contra el host de la API vieja— y se
 * autentica con la llave de IDENTIDAD.
 *
 * Comprobado contra el endpoint real (2026-09-03): sin cabecera responde 401
 * "Unauthorized"; con una llave que no reconoce responde 403 "explicit deny in
 * an identity-based policy", el MISMO mensaje que daba la API vieja. Es decir
 * que un 403 aquí no distingue "llave equivocada" de "producto equivocado":
 * mientras no lleguen las llaves reales de Botón de Pagos, esta consulta va a
 * fallar igual que antes y eso no prueba nada sobre la integración.
 *
 * La transacción puede tardar hasta 10 minutos en aparecer: mientras tanto el
 * estado es `NO_TRANSACTION_FOUND`, que significa "todavía no", nunca un
 * fallo. Se devuelve tal cual y `normalizeBoldPaymentStatus` lo descarta, para
 * que quien consulta no lo confunda con un rechazo.
 *
 * El resultado se adapta a la forma que ya consumen las órdenes
 * (`applyBoldPayment`), sin inventar datos: si el comprobante no trae divisa,
 * se asume la única en la que vendemos y la verificación real sigue siendo la
 * del monto.
 */
export async function fetchBoldPayment(reference, {
  apiKey,
  fetchImpl = fetch,
  timeoutMs = 10_000,
} = {}) {
  const value = clean(reference, 60);
  if (!value) throw new Error("Invalid Bold payment reference.");
  const key = clean(apiKey, 200);
  if (!key) throw new Error("Bold API key is not configured.");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetchImpl(
      `${BOLD_API_BASE_URL}/v2/payment-voucher/${encodeURIComponent(value)}`,
      {
        method: "GET",
        headers: { Authorization: `x-api-key ${key}` },
        cache: "no-store",
        signal: controller.signal,
      }
    );
    const body = await response.json().catch(() => ({}));
    if (!response.ok) {
      const error = new Error(`Bold request failed with status ${response.status}.`);
      error.status = response.status;
      error.code = "bold_api_error";
      throw error;
    }
    const voucher = responsePayload(body) || {};
    return {
      reference_id: clean(voucher.reference_id, 60) || value,
      transaction_id: clean(voucher.transaction_id, 180),
      status: clean(voucher.payment_status, 40).toUpperCase(),
      amount: {
        total_amount: Number(voucher.total),
        currency: clean(voucher.currency, 3).toUpperCase() || "COP",
      },
      payment_method: clean(voucher.payment_method, 40).toUpperCase() || null,
      payer_email: clean(voucher.payer_email, 160) || null,
      transaction_date: clean(voucher.transaction_date, 40) || null,
    };
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Firma del WEBHOOK. Es otro algoritmo, con la misma llave secreta:
 * HMAC-SHA256 sobre el cuerpo crudo codificado en base64.
 *
 * En el ambiente de pruebas Bold firma con cadena vacía, así que el llamador
 * decide qué secreto pasa según el ambiente.
 */
export function verifyBoldWebhookSignature(rawBody, signature, secretKey) {
  const received = clean(signature, 128).toLowerCase();
  if (!/^[a-f0-9]{64}$/.test(received)) return false;
  const encoded = Buffer.from(String(rawBody || ""), "utf8").toString("base64");
  const expected = createHmac("sha256", String(secretKey ?? ""))
    .update(encoded)
    .digest("hex");
  return timingSafeEqual(Buffer.from(expected, "hex"), Buffer.from(received, "hex"));
}

/**
 * Traduce el estado de Bold al de nuestras órdenes.
 *
 * `FAILED` es el estado de una de las tarjetas de prueba: sin esta línea el
 * evento se descartaba en silencio y la orden se quedaba en verificación para
 * siempre. `NO_TRANSACTION_FOUND` devuelve null a propósito: es "todavía no".
 */
export function normalizeBoldPaymentStatus(value) {
  return {
    APPROVED: "APPROVED",
    REJECTED: "DECLINED",
    DECLINED: "DECLINED",
    FAILED: "ERROR",
    PROCESSING: "PENDING",
    PENDING: "PENDING",
    RUNNING: "PENDING",
    VOIDED: "VOIDED",
    VOID_APPROVED: "VOIDED",
  }[clean(value, 40).toUpperCase()] || null;
}
