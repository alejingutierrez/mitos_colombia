import { createHmac, timingSafeEqual } from "node:crypto";

export const BOLD_API_BASE_URL = "https://api.online.payments.bold.co";
export const BOLD_PAYMENT_METHOD_NAMES = Object.freeze({
  card: "CREDIT_CARD",
  pse: "PSE",
  nequi: "NEQUI",
  bancolombia: "BOTON_BANCOLOMBIA",
  qr: "QR",
});

function clean(value, maximumLength = 500) {
  return String(value || "").trim().slice(0, maximumLength);
}

export function getBoldConfiguration(environment = process.env.BOLD_ENVIRONMENT) {
  const resolvedEnvironment =
    clean(environment).toLowerCase() === "production" ? "production" : "test";
  const apiKey = clean(
    resolvedEnvironment === "production"
      ? process.env.BOLD_API_KEY_PRODUCTION
      : process.env.BOLD_API_KEY_TEST
  );
  const secretKey = clean(
    resolvedEnvironment === "production"
      ? process.env.BOLD_SECRET_KEY_PRODUCTION
      : process.env.BOLD_SECRET_KEY_TEST
  );

  return {
    environment: resolvedEnvironment,
    apiKey,
    secretKey,
    ready: Boolean(apiKey && secretKey),
  };
}

function responsePayload(body) {
  return body?.payload && typeof body.payload === "object" ? body.payload : body;
}

async function boldRequest(path, {
  method = "GET",
  body,
  apiKey,
  fetchImpl = fetch,
  timeoutMs = 10_000,
} = {}) {
  const key = clean(apiKey);
  if (!key) throw new Error("Bold API key is not configured.");
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetchImpl(`${BOLD_API_BASE_URL}${path}`, {
      method,
      headers: {
        Authorization: `x-api-key ${key}`,
        ...(body && { "content-type": "application/json" }),
      },
      ...(body && { body: JSON.stringify(body) }),
      cache: "no-store",
      signal: controller.signal,
    });
    const responseBody = await response.json().catch(() => ({}));
    if (!response.ok) {
      const error = new Error(`Bold request failed with status ${response.status}.`);
      error.status = response.status;
      error.code = "bold_api_error";
      error.details = Array.isArray(responseBody?.errors)
        ? responseBody.errors.slice(0, 5)
        : [];
      throw error;
    }
    return responsePayload(responseBody);
  } finally {
    clearTimeout(timeout);
  }
}

export function buildBoldAddress({
  addressLine1,
  addressLine2,
  city,
  region,
  phone,
  postalCode,
}) {
  return {
    street1: clean(addressLine1, 180),
    ...(clean(addressLine2, 180) && { street2: clean(addressLine2, 180) }),
    city: clean(city, 100),
    ...(clean(postalCode, 12) && { postal_code: clean(postalCode, 12) }),
    province: clean(region, 100),
    country_code: "CO",
    phone: clean(phone, 10),
  };
}

export function buildBoldPaymentMethod(method, values = {}) {
  const name = BOLD_PAYMENT_METHOD_NAMES[method];
  if (!name) throw new Error("Unsupported Bold payment method.");

  if (method === "card") {
    const cardNumber = String(values.cardNumber || "").replace(/\D/g, "").slice(0, 19);
    const cvc = clean(values.cvc, 4).replace(/\D/g, "");
    const expirationMonth = Number.parseInt(values.expirationMonth, 10);
    const expirationYear = Number.parseInt(values.expirationYear, 10);
    const installments = Number.parseInt(values.installments || 1, 10);
    if (
      cardNumber.length < 13 ||
      cardNumber.length > 19 ||
      cvc.length < 3 ||
      cvc.length > 4 ||
      expirationMonth < 1 ||
      expirationMonth > 12 ||
      expirationYear < new Date().getUTCFullYear() ||
      expirationYear > new Date().getUTCFullYear() + 20 ||
      installments < 1 ||
      installments > 36 ||
      clean(values.cardholderName, 120).length < 3
    ) {
      throw new Error("Invalid card payment data.");
    }
    return {
      name,
      card_number: cardNumber,
      cardholder_name: clean(values.cardholderName, 120),
      expiration_month: expirationMonth,
      expiration_year: expirationYear,
      installments,
      cvc,
    };
  }

  if (method === "pse") {
    const bankCode = clean(values.bankCode, 20);
    const bankName = clean(values.bankName, 120);
    if (!bankCode || !bankName) throw new Error("Invalid PSE bank.");
    return { name, bank_code: bankCode, bank_name: bankName };
  }

  if (method === "qr") return { name, qr_format: "BOLD_BASE64" };
  return { name };
}

export async function createBoldPaymentIntent(values, options = {}) {
  return boldRequest("/v1/payment-intent", {
    ...options,
    method: "POST",
    body: values,
  });
}

export async function createBoldPayment(values, options = {}) {
  return boldRequest("/v1/payment", {
    ...options,
    method: "POST",
    body: values,
  });
}

export async function fetchBoldPayment(reference, options = {}) {
  const value = clean(reference, 180);
  if (!value) throw new Error("Invalid Bold payment reference.");
  return boldRequest(`/v1/payment/${encodeURIComponent(value)}`, options);
}

export async function fetchBoldPseBanks(options = {}) {
  const payload = await boldRequest("/v1/payment/pse/banks", options);
  return Array.isArray(payload?.banks)
    ? payload.banks
        .map((bank) => ({
          bankCode: clean(bank?.bank_code, 20),
          bankName: clean(bank?.bank_name, 120),
        }))
        .filter((bank) => bank.bankCode && bank.bankName)
    : [];
}

export function verifyBoldWebhookSignature(rawBody, signature, secretKey) {
  const received = clean(signature, 128).toLowerCase();
  if (!/^[a-f0-9]{64}$/.test(received)) return false;
  const encoded = Buffer.from(String(rawBody || ""), "utf8").toString("base64");
  const expected = createHmac("sha256", String(secretKey ?? ""))
    .update(encoded)
    .digest("hex");
  return timingSafeEqual(Buffer.from(expected, "hex"), Buffer.from(received, "hex"));
}

export function normalizeBoldPaymentStatus(value) {
  return {
    APPROVED: "APPROVED",
    REJECTED: "DECLINED",
    DECLINED: "DECLINED",
    PROCESSING: "PENDING",
    PENDING: "PENDING",
    RUNNING: "PENDING",
    VOIDED: "VOIDED",
    VOID_APPROVED: "VOIDED",
  }[clean(value, 40).toUpperCase()] || null;
}

export function safeBoldNextAction(payment) {
  const action = payment?.next_actions;
  const result = {};
  if (action?.redirect_url) {
    try {
      const url = new URL(action.redirect_url);
      if (url.protocol === "https:") {
        result.redirectUrl = url.toString();
        result.redirectMethod =
          clean(action.redirect_method, 8).toUpperCase() === "POST" ? "POST" : "GET";
      }
    } catch {
      // Invalid processor redirects are never returned to the browser.
    }
  }
  if (/^[A-Za-z0-9+/=]+$/.test(clean(action?.qr_payload, 200_000))) {
    result.qrPayload = clean(action.qr_payload, 200_000);
    result.qrExpiresAt = clean(action?.expires_at, 40) || null;
  }
  return result;
}
