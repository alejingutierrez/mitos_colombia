import test from "node:test";
import assert from "node:assert/strict";
import {
  buildGa4PurchasePayload,
  cleanGa4AnalyticsContext,
  sendGa4Purchase,
} from "../../src/lib/ga4-measurement.js";
import { getAnalyticsSessionContext } from "../../src/lib/analytics.js";

function approvedOrder(overrides = {}) {
  return {
    reference: "tarot-order-1",
    status: "APPROVED",
    sku: "tarot-mitos-colombia-78",
    quantity: 2,
    unit_price_cop: 120000,
    amount_in_cents: 24000000,
    currency: "COP",
    payment_provider: "BOLD",
    payment_transaction_id: "tx-approved-1",
    approved_at: "2026-08-13T12:00:00.000Z",
    analytics_json: JSON.stringify({
      clientId: "123456789.987654321",
      sessionId: "1786622400",
    }),
    campaign_json: JSON.stringify({
      utm_source: "google",
      utm_medium: "cpc",
      utm_campaign: "lanzamiento_tarot",
      landing_intent: "regalo",
      gclid: "click-123",
    }),
    email: "buyer@example.com",
    full_name: "Comprador privado",
    phone: "3001234567",
    address_line_1: "Dirección privada",
    ...overrides,
  };
}

test("accepts only pseudonymous GA session identifiers", () => {
  assert.deepEqual(
    cleanGa4AnalyticsContext({
      clientId: "123456789.987654321",
      sessionId: "1786622400",
      email: "never-send@example.com",
    }),
    { clientId: "123456789.987654321", sessionId: "1786622400" }
  );
  assert.deepEqual(
    cleanGa4AnalyticsContext({ clientId: "bad id", sessionId: "not-a-number" }),
    {}
  );
});

test("reads the browser client and session identifiers without blocking checkout", async () => {
  const previousWindow = global.window;
  global.window = {
    dataLayer: [],
    setTimeout,
    clearTimeout,
    gtag(command, _measurementId, field, callback) {
      assert.equal(command, "get");
      callback(field === "client_id" ? "123456789.987654321" : "1786622400");
    },
  };

  try {
    assert.deepEqual(await getAnalyticsSessionContext({ timeoutMs: 200 }), {
      clientId: "123456789.987654321",
      sessionId: "1786622400",
    });
  } finally {
    if (previousWindow === undefined) delete global.window;
    else global.window = previousWindow;
  }
});

test("builds an approved purchase with real value, currency and item data", () => {
  const payload = buildGa4PurchasePayload(approvedOrder());
  assert.equal(payload.client_id, "123456789.987654321");
  assert.equal(payload.events[0].name, "purchase");
  assert.deepEqual(payload.events[0].params.items, [
    {
      item_id: "tarot-mitos-colombia-78",
      item_name: "Tarot de Mitos Colombianos",
      item_brand: "Mitos de Colombia",
      item_category: "Baraja editorial ilustrada",
      price: 120000,
      quantity: 2,
    },
  ]);
  assert.equal(payload.events[0].params.transaction_id, "tx-approved-1");
  assert.equal(payload.events[0].params.value, 240000);
  assert.equal(payload.events[0].params.currency, "COP");
  assert.equal(payload.events[0].params.session_id, 1786622400);
});

test("never includes checkout PII and refuses unapproved orders", () => {
  const serialized = JSON.stringify(buildGa4PurchasePayload(approvedOrder()));
  for (const privateValue of [
    "buyer@example.com",
    "Comprador privado",
    "3001234567",
    "Dirección privada",
  ]) {
    assert.equal(serialized.includes(privateValue), false);
  }
  assert.equal(buildGa4PurchasePayload(approvedOrder({ status: "PENDING" })), null);
  assert.equal(
    buildGa4PurchasePayload(approvedOrder({ payment_transaction_id: null })),
    null
  );
});

test("sends the purchase only to the GA4 Measurement Protocol endpoint", async () => {
  let request;
  const result = await sendGa4Purchase(approvedOrder(), {
    measurementId: "G-TEST123",
    apiSecret: "private-test-secret",
    fetchImpl: async (url, options) => {
      request = { url, options };
      return { ok: true, status: 204 };
    },
  });

  assert.deepEqual(result, {
    sent: true,
    transactionId: "tx-approved-1",
  });
  assert.equal(request.url.origin, "https://www.google-analytics.com");
  assert.equal(request.url.pathname, "/mp/collect");
  assert.equal(request.url.searchParams.get("measurement_id"), "G-TEST123");
  assert.equal(request.url.searchParams.get("api_secret"), "private-test-secret");
  assert.equal(JSON.parse(request.options.body).events[0].name, "purchase");
});
