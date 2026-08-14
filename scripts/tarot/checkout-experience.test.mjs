import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { TAROT_CHECKOUT_INTENTS } from "../../src/lib/tarot-commerce.js";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const checkoutSource = readFileSync(
  path.join(projectRoot, "src/components/tarot-commerce/TarotCheckoutPages.js"),
  "utf8"
);
const ordersSource = readFileSync(
  path.join(projectRoot, "src/lib/tarot-orders.js"),
  "utf8"
);

test("the transactional journey preserves all six purchase motivations", () => {
  const intents = Object.values(TAROT_CHECKOUT_INTENTS);

  assert.equal(intents.length, 6);
  assert.equal(new Set(intents.map((intent) => intent.resultPromise)).size, 6);
  for (const intent of intents) {
    assert.ok(intent.resultPromise.length >= 70, `${intent.id} necesita continuidad poscompra`);
  }

  assert.match(checkoutSource, /landing_intent: intent\.id/);
  assert.match(checkoutSource, /href=\{intent\.path\}/);
  assert.match(checkoutSource, /order\?\.attribution\?\.landing_intent/);
});

test("checkout proves fulfillment and payment readiness before collecting data", () => {
  assert.match(checkoutSource, /function FulfillmentProof/);
  assert.match(checkoutSource, /function PaymentPreview/);
  assert.match(checkoutSource, /No abriremos el pago hasta poder demostrar el envío incluido/);
  assert.match(checkoutSource, /aria-busy=\{submitting \? "true" : "false"\}/);
  assert.match(checkoutSource, /aria-current="step"/);
  assert.match(checkoutSource, /ref=\{errorRef\}/);
});

test("the public order supports recovery without exposing customer PII", () => {
  const publicMapper = ordersSource.slice(
    ordersSource.indexOf("export function toPublicTarotOrder"),
    ordersSource.indexOf("export function toPublicTarotOrder") + 1400
  );

  assert.match(publicMapper, /reference: order\.reference/);
  assert.match(publicMapper, /attribution: cleanTarotCampaign/);
  assert.doesNotMatch(publicMapper, /email:/);
  assert.doesNotMatch(publicMapper, /fullName:/);
  assert.doesNotMatch(publicMapper, /phone:/);
  assert.doesNotMatch(publicMapper, /addressLine/);
});

test("the result page distinguishes pending, approved and recoverable failures", () => {
  assert.match(checkoutSource, /La conciliación continúa en el servidor/);
  assert.match(checkoutSource, /function ResultJourney/);
  assert.match(checkoutSource, /Pago verificado/);
  assert.match(checkoutSource, /Sin compra aprobada/);
  assert.match(checkoutSource, /Esperamos el estado final y firmado del procesador/);
  assert.match(checkoutSource, /publicPaymentMethod/);
});
