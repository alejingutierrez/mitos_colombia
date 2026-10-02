import dotenv from "dotenv";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  getTarotProduct,
  TAROT_CHECKOUT_INTENTS,
  TAROT_LANDING_VARIANTS,
} from "../../src/lib/tarot-commerce.js";

dotenv.config({ path: [".env.local", ".env"], quiet: true });

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const variants = Object.values(TAROT_LANDING_VARIANTS);
const checkoutIntents = Object.values(TAROT_CHECKOUT_INTENTS);
const product = getTarotProduct();

function localAssetExists(source) {
  if (!source?.startsWith("/")) return true;
  return existsSync(path.join(projectRoot, "public", source.replace(/^\//, "")));
}

const landingChecks = variants.map((variant) => ({
  id: variant.id,
  path: variant.path,
  ready: Boolean(
    variant.path &&
      variant.title &&
      variant.subtitle &&
      variant.primaryCta &&
      variant.secondaryCta &&
      variant.reasons?.length >= 3 &&
      variant.questions?.length >= 2 &&
      variant.galleryCount >= 6 &&
      variant.heroVisual?.src &&
      localAssetExists(variant.heroVisual.src)
  ),
  visualStatus: variant.heroVisual?.status || "missing",
}));

const routeSet = new Set(variants.map((variant) => variant.path));
const intentSet = new Set(checkoutIntents.map((intent) => intent.path));
const landingSystemReady = Boolean(
  variants.length === 6 &&
    checkoutIntents.length === 6 &&
    routeSet.size === 6 &&
    intentSet.size === 6 &&
    [...routeSet].every((route) => intentSet.has(route)) &&
    landingChecks.every((check) => check.ready)
);

const paymentMethods = product.paymentMethods.map((method) => ({
  id: method.id,
  label: method.label,
  confirmed: method.confirmed,
}));
const confirmedPaymentMethods = paymentMethods.filter((method) => method.confirmed).length;

const audit = {
  outcome: product.checkoutReady ? "READY_FOR_LIVE_E2E" : "BLOCKED_BY_CONFIGURATION",
  landingSystem: {
    ready: landingSystemReady,
    routesReady: landingChecks.filter((check) => check.ready).length,
    routesExpected: 6,
    provisionalIntentVisuals: landingChecks.filter(
      (check) => check.visualStatus === "provisional"
    ).length,
    checks: landingChecks,
  },
  catalogImage: {
    ready: product.imageReady,
    status: product.imageStatus,
    approvedForSale: product.imageApprovedForSale,
    sourceConfigured: product.image !== "/commerce/tarot-product-provisional.png",
    localAssetExists: localAssetExists(product.image),
  },
  commerce: {
    ready: product.commercialReady,
    missing: product.missingCommercialFields,
  },
  checkout: {
    ready: product.checkoutReady,
    missing: product.missingCheckoutFields,
  },
  payments: {
    provider: product.paymentProvider,
    confirmed: confirmedPaymentMethods,
    expected: paymentMethods.length,
    methods: paymentMethods,
  },
};

if (process.argv.includes("--json")) {
  console.log(JSON.stringify(audit, null, 2));
} else {
  const marker = (ready) => (ready ? "PASS" : "BLOCKED");
  console.log("Tarot de Mitos Colombianos — auditoría de lanzamiento");
  console.log(
    `[${marker(audit.landingSystem.ready)}] Landings: ${audit.landingSystem.routesReady}/${audit.landingSystem.routesExpected}`
  );
  console.log(
    `[${marker(audit.catalogImage.ready)}] Fotografía de catálogo: ${audit.catalogImage.status}`
  );
  console.log(`[${marker(audit.commerce.ready)}] Condiciones comerciales`);
  audit.commerce.missing.forEach((item) => console.log(`  - ${item}`));
  console.log(
    `[${marker(audit.payments.confirmed === audit.payments.expected)}] Medios Bold: ${audit.payments.confirmed}/${audit.payments.expected}`
  );
  paymentMethods.forEach((method) =>
    console.log(`  - ${method.confirmed ? "confirmado" : "pendiente"}: ${method.label}`)
  );
  console.log(`[${marker(audit.checkout.ready)}] Checkout y medición`);
  audit.checkout.missing.forEach((item) => console.log(`  - ${item}`));
  console.log(`Resultado: ${audit.outcome}`);
}

if (process.argv.includes("--strict") && !product.checkoutReady) {
  process.exitCode = 1;
}
