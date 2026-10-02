import test from "node:test";
import assert from "node:assert/strict";
import {
  captureTarotAttribution,
  cleanTarotCampaign,
  readTarotAttribution,
  TAROT_ATTRIBUTION_MAX_AGE_MS,
  TAROT_CAMPAIGN_KEY,
} from "../../src/lib/tarot-attribution.js";
import {
  claimTarotPurchaseTracking,
  getConfirmedTarotPurchase,
} from "../../src/lib/tarot-purchase.js";

function memoryStorage() {
  const values = new Map();
  return {
    getItem(key) {
      return values.has(key) ? values.get(key) : null;
    },
    setItem(key, value) {
      values.set(key, String(value));
    },
    removeItem(key) {
      values.delete(key);
    },
  };
}

test("persists Google Ads attribution and the originating landing intent", () => {
  const local = memoryStorage();
  const session = memoryStorage();
  const campaign = captureTarotAttribution({
    search: "?utm_source=google&utm_medium=cpc&utm_campaign=lanzamiento&gclid=click-123",
    context: { campaign: "lanzamiento_tarot", landing_intent: "regalo" },
    storages: [local, session],
    now: 1_000,
  });

  assert.deepEqual(campaign, {
    utm_source: "google",
    utm_medium: "cpc",
    utm_campaign: "lanzamiento",
    gclid: "click-123",
    campaign: "lanzamiento_tarot",
    landing_intent: "regalo",
  });
  assert.deepEqual(readTarotAttribution({ storages: [local], now: 2_000 }), campaign);
  assert.deepEqual(readTarotAttribution({ storages: [session], now: 2_000 }), campaign);
});

test("retains the last attributed click until a new attributed visit replaces it", () => {
  const storage = memoryStorage();
  captureTarotAttribution({
    search: "?gclid=first",
    context: { landing_intent: "compra" },
    storages: [storage],
    now: 1_000,
  });
  assert.equal(
    captureTarotAttribution({
      search: "",
      context: { landing_intent: "arte" },
      storages: [storage],
      now: 2_000,
    }).gclid,
    "first"
  );
  assert.deepEqual(
    captureTarotAttribution({
      search: "?wbraid=second",
      context: { landing_intent: "arte" },
      storages: [storage],
      now: 3_000,
    }),
    { wbraid: "second", landing_intent: "arte" }
  );
});

test("expires old attribution and strips unsupported or oversized fields", () => {
  const storage = memoryStorage();
  storage.setItem(
    TAROT_CAMPAIGN_KEY,
    JSON.stringify({
      campaign: { gclid: "old", email: "never-store@example.com" },
      capturedAt: 10,
    })
  );
  assert.deepEqual(
    readTarotAttribution({
      storages: [storage],
      now: 10 + TAROT_ATTRIBUTION_MAX_AGE_MS + 1,
    }),
    {}
  );
  assert.deepEqual(cleanTarotCampaign({ email: "private", utm_source: " google  ads " }), {
    utm_source: "google ads",
  });
});

test("creates a purchase payload only from a fully confirmed Bold order", () => {
  const base = {
    status: "APPROVED",
    paymentConfirmed: true,
    transactionId: "tx-verified-1",
    approvedAt: "2026-08-13T12:00:00.000Z",
    amountInCents: 12000000,
    unitPriceCop: 120000,
    quantity: 1,
    currency: "COP",
    attribution: { gclid: "click-123", landing_intent: "compra" },
  };

  assert.deepEqual(getConfirmedTarotPurchase(base), {
    transactionId: "tx-verified-1",
    value: 120000,
    currency: "COP",
    attribution: { gclid: "click-123", landing_intent: "compra" },
  });
  assert.equal(getConfirmedTarotPurchase({ ...base, transactionId: null }), null);
  assert.equal(getConfirmedTarotPurchase({ ...base, paymentConfirmed: false }), null);
  assert.equal(getConfirmedTarotPurchase({ ...base, status: "PENDING" }), null);
  assert.equal(getConfirmedTarotPurchase({ ...base, approvedAt: null }), null);
});

test("deduplicates purchase tracking across tabs when durable storage is available", () => {
  const storage = memoryStorage();
  assert.equal(claimTarotPurchaseTracking(storage, "tx-verified-1"), true);
  assert.equal(claimTarotPurchaseTracking(storage, "tx-verified-1"), false);
  assert.equal(claimTarotPurchaseTracking(storage, "tx-verified-2"), true);
  assert.equal(claimTarotPurchaseTracking(storage, ""), false);
});
