import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import test from "node:test";
import {
  BOLD_API_BASE_URL,
  fetchBoldPayment,
  getBoldConfiguration,
  normalizeBoldPaymentStatus,
  verifyBoldWebhookSignature,
} from "../../src/lib/bold.js";

const ENV_KEYS = [
  "BOLD_ENVIRONMENT",
  "BOLD_BUTTON_IDENTITY_KEY_TEST",
  "BOLD_BUTTON_SECRET_KEY_TEST",
  "BOLD_BUTTON_IDENTITY_KEY_PRODUCTION",
  "BOLD_BUTTON_SECRET_KEY_PRODUCTION",
];
const originalEnvironment = Object.fromEntries(
  ENV_KEYS.map((key) => [key, process.env[key]])
);

function voucherResponse(voucher) {
  return {
    ok: true,
    json: async () => voucher,
  };
}

test.after(() => {
  ENV_KEYS.forEach((key) => {
    if (originalEnvironment[key] === undefined) delete process.env[key];
    else process.env[key] = originalEnvironment[key];
  });
});

test("selects only the Botón de Pagos keys for the active environment", () => {
  Object.assign(process.env, {
    BOLD_ENVIRONMENT: "test",
    BOLD_BUTTON_IDENTITY_KEY_TEST: "test-identity",
    BOLD_BUTTON_SECRET_KEY_TEST: "test-secret",
    BOLD_BUTTON_IDENTITY_KEY_PRODUCTION: "production-identity",
    BOLD_BUTTON_SECRET_KEY_PRODUCTION: "production-secret",
  });
  assert.deepEqual(getBoldConfiguration(), {
    environment: "test",
    apiKey: "test-identity",
    secretKey: "test-secret",
    ready: true,
  });
  assert.equal(getBoldConfiguration("production").apiKey, "production-identity");
});

test("the old API keys can no longer open the checkout", () => {
  ENV_KEYS.forEach((key) => delete process.env[key]);
  process.env.BOLD_API_KEY_TEST = "llave-de-la-api-vieja";
  process.env.BOLD_SECRET_KEY_TEST = "secreta-de-la-api-vieja";

  assert.equal(getBoldConfiguration().ready, false);
  delete process.env.BOLD_API_KEY_TEST;
  delete process.env.BOLD_SECRET_KEY_TEST;
});

test("the payment voucher is read from the Botón de Pagos host with the identity key", async () => {
  let request;
  const payment = await fetchBoldPayment("tarot-abc-123", {
    apiKey: "identity-key",
    fetchImpl: async (url, options) => {
      request = { url, options };
      return voucherResponse({
        reference_id: "tarot-abc-123",
        transaction_id: "txn-123",
        payment_status: "APPROVED",
        total: 124900,
        payment_method: "CARD_WEB",
        payer_email: "persona@example.com",
      });
    },
  });

  assert.equal(
    request.url,
    `${BOLD_API_BASE_URL}/v2/payment-voucher/tarot-abc-123`
  );
  assert.equal(BOLD_API_BASE_URL, "https://payments.api.bold.co");
  assert.equal(request.options.headers.Authorization, "x-api-key identity-key");
  assert.equal(payment.transaction_id, "txn-123");
  assert.equal(payment.status, "APPROVED");
  assert.equal(payment.payment_method, "CARD_WEB");
  assert.deepEqual(payment.amount, { total_amount: 124900, currency: "COP" });
});

test("a transaction that has not appeared yet is not a rejection", async () => {
  const payment = await fetchBoldPayment("tarot-abc-123", {
    apiKey: "identity-key",
    fetchImpl: async () =>
      voucherResponse({ payment_status: "NO_TRANSACTION_FOUND" }),
  });

  assert.equal(payment.status, "NO_TRANSACTION_FOUND");
  assert.equal(normalizeBoldPaymentStatus(payment.status), null);
  assert.equal(normalizeBoldPaymentStatus("failed"), "ERROR");
  assert.equal(normalizeBoldPaymentStatus("rejected"), "DECLINED");
  assert.equal(normalizeBoldPaymentStatus("pending"), "PENDING");
  assert.equal(normalizeBoldPaymentStatus("void_approved"), "VOIDED");
});

test("verifies the webhook HMAC over the base64 raw body, also with the empty test secret", () => {
  const rawBody = JSON.stringify({ type: "SALE_APPROVED", subject: "TXN1" });
  const encoded = Buffer.from(rawBody).toString("base64");
  const secret = "webhook-secret";
  const signature = createHmac("sha256", secret).update(encoded).digest("hex");
  assert.equal(verifyBoldWebhookSignature(rawBody, signature, secret), true);
  assert.equal(verifyBoldWebhookSignature(rawBody, "0".repeat(64), secret), false);

  const testSignature = createHmac("sha256", "").update(encoded).digest("hex");
  assert.equal(verifyBoldWebhookSignature(rawBody, testSignature, ""), true);
  assert.equal(verifyBoldWebhookSignature(rawBody, testSignature, secret), false);
});
