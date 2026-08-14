import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import test from "node:test";
import {
  BOLD_API_BASE_URL,
  buildBoldPaymentMethod,
  fetchBoldPayment,
  fetchBoldPseBanks,
  getBoldConfiguration,
  normalizeBoldPaymentStatus,
  safeBoldNextAction,
  verifyBoldWebhookSignature,
} from "../../src/lib/bold.js";

const ENV_KEYS = [
  "BOLD_ENVIRONMENT",
  "BOLD_API_KEY_TEST",
  "BOLD_SECRET_KEY_TEST",
  "BOLD_API_KEY_PRODUCTION",
  "BOLD_SECRET_KEY_PRODUCTION",
];
const originalEnvironment = Object.fromEntries(
  ENV_KEYS.map((key) => [key, process.env[key]])
);

test.after(() => {
  ENV_KEYS.forEach((key) => {
    if (originalEnvironment[key] === undefined) delete process.env[key];
    else process.env[key] = originalEnvironment[key];
  });
});

test("selects only the keys for the active Bold environment", () => {
  Object.assign(process.env, {
    BOLD_ENVIRONMENT: "test",
    BOLD_API_KEY_TEST: "test-key",
    BOLD_SECRET_KEY_TEST: "test-secret",
    BOLD_API_KEY_PRODUCTION: "production-key",
    BOLD_SECRET_KEY_PRODUCTION: "production-secret",
  });
  assert.deepEqual(getBoldConfiguration(), {
    environment: "test",
    apiKey: "test-key",
    secretKey: "test-secret",
    ready: true,
  });
  assert.equal(getBoldConfiguration("production").apiKey, "production-key");
});

test("builds each payment method documented by Bold", () => {
  assert.deepEqual(buildBoldPaymentMethod("nequi"), { name: "NEQUI" });
  assert.deepEqual(buildBoldPaymentMethod("bancolombia"), {
    name: "BOTON_BANCOLOMBIA",
  });
  assert.deepEqual(buildBoldPaymentMethod("qr"), {
    name: "QR",
    qr_format: "BOLD_BASE64",
  });
  assert.deepEqual(
    buildBoldPaymentMethod("pse", { bankCode: "1234", bankName: "Banco" }),
    { name: "PSE", bank_code: "1234", bank_name: "Banco" }
  );
  const card = buildBoldPaymentMethod("card", {
    cardNumber: "4111 1111 1111 1111",
    cardholderName: "Persona Prueba",
    expirationMonth: "12",
    expirationYear: String(new Date().getUTCFullYear() + 2),
    installments: "1",
    cvc: "123",
  });
  assert.equal(card.name, "CREDIT_CARD");
  assert.equal(card.card_number, "4111111111111111");
  assert.throws(() => buildBoldPaymentMethod("cash"), /Unsupported/);
});

test("verifies Bold HMAC over the base64 raw body", () => {
  const rawBody = JSON.stringify({ type: "SALE_APPROVED", subject: "TXN1" });
  const secret = "webhook-secret";
  const signature = createHmac("sha256", secret)
    .update(Buffer.from(rawBody).toString("base64"))
    .digest("hex");
  assert.equal(verifyBoldWebhookSignature(rawBody, signature, secret), true);
  assert.equal(verifyBoldWebhookSignature(rawBody, "0".repeat(64), secret), false);
});

test("uses the fixed Bold API origin and x-api-key authorization", async () => {
  let request;
  const payment = await fetchBoldPayment("order-123", {
    apiKey: "identity-key",
    fetchImpl: async (url, options) => {
      request = { url, options };
      return {
        ok: true,
        json: async () => ({
          payload: {
            reference_id: "order-123",
            transaction_id: "txn-123",
            status: "APPROVED",
          },
          errors: [],
        }),
      };
    },
  });
  assert.equal(request.url, `${BOLD_API_BASE_URL}/v1/payment/order-123`);
  assert.equal(request.options.headers.Authorization, "x-api-key identity-key");
  assert.equal(payment.transaction_id, "txn-123");
});

test("normalizes PSE banks, payment states and safe next actions", async () => {
  const banks = await fetchBoldPseBanks({
    apiKey: "identity-key",
    fetchImpl: async () => ({
      ok: true,
      json: async () => ({ payload: { banks: [{ bank_code: "1", bank_name: "Banco Uno" }] } }),
    }),
  });
  assert.deepEqual(banks, [{ bankCode: "1", bankName: "Banco Uno" }]);
  assert.equal(normalizeBoldPaymentStatus("running"), "PENDING");
  assert.equal(normalizeBoldPaymentStatus("rejected"), "DECLINED");
  assert.deepEqual(
    safeBoldNextAction({ next_actions: { redirect_url: "https://bank.example/pay", redirect_method: "POST" } }),
    { redirectUrl: "https://bank.example/pay", redirectMethod: "POST" }
  );
  assert.deepEqual(
    safeBoldNextAction({ next_actions: { redirect_url: "http://unsafe.example/pay" } }),
    {}
  );
});
