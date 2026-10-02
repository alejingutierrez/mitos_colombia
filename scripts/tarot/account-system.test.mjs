import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import {
  buildTarotOrderTimeline,
  tarotOrderStatusLabel,
  tarotOrderStatusTone,
} from "../../src/lib/tarot-account-presenter.js";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const read = (file) => readFileSync(path.join(projectRoot, file), "utf8");
const authSource = read("src/lib/tarot-auth.js");
const ordersSource = read("src/lib/tarot-orders.js");
const headerSource = read("src/components/organisms/Header.js");
const accountActions = read("src/components/tarot-commerce/TarotAccountActions.js");
const checkoutSource = read("src/components/tarot-commerce/TarotCheckoutPages.js");

test("customer sessions use hashed server-side tokens and hardened cookies", () => {
  assert.match(authSource, /createHash\("sha256"\)/);
  assert.match(authSource, /httpOnly: true/);
  assert.match(authSource, /sameSite: "lax"/);
  assert.match(authSource, /secure: process\.env\.NODE_ENV === "production"/);
  assert.match(authSource, /timingSafeEqual/);
  assert.match(authSource, /scrypt-v1/);
  assert.match(authSource, /checkTarotAuthRateLimit/);
  assert.match(authSource, /isTrustedTarotAuthRequest/);
  assert.match(authSource, /x-forwarded-host/);
  assert.match(authSource, /trustedHosts\.includes\(originHost\)/);
});

test("orders are linked by account id without exposing the status token", () => {
  assert.match(ordersSource, /user_id TEXT/);
  assert.match(ordersSource, /listTarotOrdersForAccount/);
  assert.match(ordersSource, /findTarotOrderForAccount/);
  assert.match(ordersSource, /claimTarotOrderForAccount/);
  const accountMapper = ordersSource.slice(
    ordersSource.indexOf("export function toAccountTarotOrder"),
    ordersSource.indexOf("const ACCOUNT_ORDER_COLUMNS")
  );
  assert.doesNotMatch(accountMapper, /statusToken|status_token|email:/);
});

test("the public header owns account and commerce navigation", () => {
  assert.match(headerSource, /Mi cuenta y pedidos/);
  assert.match(headerSource, /commerce\.onCart/);
  assert.match(checkoutSource, /<Header active="\/tarot"/);
  assert.doesNotMatch(checkoutSource, /<header className=\{styles\.header\}/);
});

test("sign in can claim a protected order and redirects only to local paths", () => {
  assert.match(accountActions, /orderToken/);
  assert.match(accountActions, /path\.startsWith\("\/"\)/);
  assert.match(accountActions, /\/api\/tarot\/auth\//);
});

test("tracking distinguishes payment, preparation, shipping and delivery", () => {
  const pending = { status: "PENDING", fulfillmentStatus: "PENDING" };
  assert.equal(tarotOrderStatusLabel(pending), "Pago en verificación");
  assert.equal(buildTarotOrderTimeline(pending)[0].state, "current");

  const shipped = { status: "APPROVED", fulfillmentStatus: "SHIPPED" };
  assert.equal(tarotOrderStatusLabel(shipped), "Pedido enviado");
  assert.deepEqual(buildTarotOrderTimeline(shipped).map((step) => step.state), ["complete", "complete", "current", "waiting"]);

  const delivered = { status: "APPROVED", fulfillmentStatus: "DELIVERED" };
  assert.equal(tarotOrderStatusTone(delivered), "success");
  assert.ok(buildTarotOrderTimeline(delivered).every((step) => step.state === "complete"));
});
