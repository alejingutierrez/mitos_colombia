import test from "node:test";
import assert from "node:assert/strict";
import {
  getTarotCheckoutIntent,
  getTarotProduct,
  isTarotShippingRegionAllowed,
  TAROT_CHECKOUT_INTENTS,
} from "../../src/lib/tarot-commerce.js";

const ENV_KEYS = [
  "TAROT_COMMERCE_STATUS",
  "TAROT_PRICE_COP",
  "TAROT_TAXES_INCLUDED",
  "TAROT_DISPATCH_TEXT",
  "TAROT_SHIPPING_INCLUDED",
  "TAROT_SHIPPING_TEXT",
  "TAROT_SHIPPING_REGIONS",
  "TAROT_RETURNS_TEXT",
  "TAROT_PRODUCT_CONTENTS",
  "TAROT_PHYSICAL_SPECS",
  "TAROT_PRODUCT_IMAGE",
  "TAROT_PRODUCT_IMAGE_STATUS",
  "TAROT_PRODUCT_IMAGE_APPROVED_FOR_SALE",
  "TAROT_SELLER_LEGAL_NAME",
  "TAROT_SELLER_LEGAL_ID",
  "TAROT_SELLER_ADDRESS",
  "TAROT_SELLER_EMAIL",
  "TAROT_SELLER_PHONE",
  "BOLD_ENVIRONMENT",
  "BOLD_API_KEY_TEST",
  "BOLD_SECRET_KEY_TEST",
  "BOLD_API_KEY_PRODUCTION",
  "BOLD_SECRET_KEY_PRODUCTION",
  "TAROT_BOLD_PAYMENT_METHODS",
  "NEXT_PUBLIC_SITE_URL",
  "TAROT_ORDERS_READY",
  "TAROT_BOLD_WEBHOOK_READY",
  "GA4_MEASUREMENT_PROTOCOL_API_SECRET",
  "GA_MEASUREMENT_API_SECRET",
  "TAROT_SERVER_PURCHASE_TRACKING_READY",
];

const originalEnvironment = Object.fromEntries(
  ENV_KEYS.map((key) => [key, process.env[key]])
);

function clearCommerceEnvironment() {
  ENV_KEYS.forEach((key) => delete process.env[key]);
}

function configureCommercialProduct() {
  Object.assign(process.env, {
    TAROT_COMMERCE_STATUS: "available",
    TAROT_PRICE_COP: "124900",
    TAROT_TAXES_INCLUDED: "true",
    TAROT_DISPATCH_TEXT: "Despacho confirmado",
    TAROT_SHIPPING_INCLUDED: "true",
    TAROT_SHIPPING_TEXT: "Envío incluido en la cobertura confirmada",
    TAROT_SHIPPING_REGIONS: "Bogotá D.C.|Antioquia|Cundinamarca",
    TAROT_RETURNS_TEXT: "Cambios confirmados",
    TAROT_PRODUCT_CONTENTS: "Baraja física de 78 cartas",
    TAROT_PHYSICAL_SPECS: "Ficha física confirmada",
    TAROT_PRODUCT_IMAGE: "https://example.public.blob.vercel-storage.com/tarot-product-final.jpg",
    TAROT_PRODUCT_IMAGE_STATUS: "final",
    TAROT_SELLER_LEGAL_NAME: "Vendedor de prueba",
    TAROT_SELLER_LEGAL_ID: "ID de prueba",
    TAROT_SELLER_ADDRESS: "Dirección de prueba",
    TAROT_SELLER_EMAIL: "ventas@example.com",
    TAROT_SELLER_PHONE: "+573001234567",
  });
}

test.after(() => {
  ENV_KEYS.forEach((key) => {
    const original = originalEnvironment[key];
    if (original === undefined) delete process.env[key];
    else process.env[key] = original;
  });
});

test("preview mode fails closed with an auditable commercial checklist", () => {
  clearCommerceEnvironment();
  const product = getTarotProduct();

  assert.equal(product.commercialReady, false);
  assert.equal(product.checkoutReady, false);
  assert.equal(product.shippingIncluded, false);
  assert.ok(
    product.missingCommercialFields.includes(
      "Confirmación de que el envío está incluido en el precio"
    )
  );
  assert.ok(product.missingCommercialFields.includes("Cobertura del envío incluido"));
  assert.ok(product.missingCommercialFields.includes("Departamentos habilitados para entrega"));
  assert.ok(product.missingCommercialFields.includes("Aprobación de la imagen actual para esta etapa comercial"));
  assert.ok(product.missingCommercialFields.includes("Identidad y contacto verificables del vendedor"));
  assert.deepEqual(product.missingCheckoutFields, [
    "Llaves activa y secreta de Bold para el ambiente seleccionado",
    "Verificación en Bold de tarjeta, PSE, Nequi, Botón Bancolombia y QR Bre-B",
    "URL HTTPS definitiva para el retorno del pago",
    "Persistencia de órdenes",
    "Confirmación firmada del estado del pago",
    "Medición de compra confirmada desde el servidor",
  ]);
});

test("the checkout keeps six distinct purchase motivations and fails to purchase", () => {
  const intents = Object.values(TAROT_CHECKOUT_INTENTS);
  assert.equal(intents.length, 6);
  assert.equal(new Set(intents.map((intent) => intent.cartTitle)).size, 6);
  assert.equal(new Set(intents.map((intent) => intent.checkoutTitle)).size, 6);
  assert.equal(getTarotCheckoutIntent("gift").id, "gift");
  assert.equal(getTarotCheckoutIntent("unknown").id, "purchase");
});

test("shipping text alone cannot enable a checkout that promises included shipping", () => {
  clearCommerceEnvironment();
  configureCommercialProduct();
  process.env.TAROT_SHIPPING_INCLUDED = "false";

  const product = getTarotProduct();
  assert.equal(product.shipping, "Envío incluido en la cobertura confirmada");
  assert.equal(product.shippingIncluded, false);
  assert.equal(product.commercialReady, false);
});

test("shipping copy cannot replace a structured delivery coverage", () => {
  clearCommerceEnvironment();
  configureCommercialProduct();
  delete process.env.TAROT_SHIPPING_REGIONS;

  const product = getTarotProduct();
  assert.equal(product.shippingRegionsReady, false);
  assert.equal(product.commercialReady, false);
  assert.ok(
    product.missingCommercialFields.includes("Departamentos habilitados para entrega")
  );
});

test("checkout accepts only exact departments from the confirmed coverage", () => {
  clearCommerceEnvironment();
  configureCommercialProduct();
  const product = getTarotProduct();

  assert.equal(isTarotShippingRegionAllowed(product, "Antioquia"), true);
  assert.equal(isTarotShippingRegionAllowed(product, " antioquia "), true);
  assert.equal(isTarotShippingRegionAllowed(product, "Tolima"), false);
});

test("national shipping expands to every Colombian department only when explicit", () => {
  clearCommerceEnvironment();
  configureCommercialProduct();
  process.env.TAROT_SHIPPING_REGIONS = "ALL_COLOMBIA";

  const product = getTarotProduct();
  assert.equal(product.shippingRegions.length, 33);
  assert.equal(isTarotShippingRegionAllowed(product, "Vichada"), true);
});

test("seller identity is required before commerce can open", () => {
  clearCommerceEnvironment();
  configureCommercialProduct();
  delete process.env.TAROT_SELLER_LEGAL_ID;

  const product = getTarotProduct();
  assert.equal(product.sellerReady, false);
  assert.equal(product.commercialReady, false);
  assert.ok(
    product.missingCommercialFields.includes(
      "Identidad y contacto verificables del vendedor"
    )
  );
});

test("a provisional catalog image cannot enable commerce", () => {
  clearCommerceEnvironment();
  configureCommercialProduct();
  process.env.TAROT_PRODUCT_IMAGE = "/commerce/tarot-product-provisional.png";
  process.env.TAROT_PRODUCT_IMAGE_STATUS = "final";

  const product = getTarotProduct();
  assert.equal(product.imageReady, false);
  assert.equal(product.imageStatus, "final");
  assert.equal(product.commercialReady, false);
  assert.ok(product.missingCommercialFields.includes(
    "Aprobación de la imagen actual para esta etapa comercial"
  ));
});

test("the current provisional image can be explicitly approved without becoming final", () => {
  clearCommerceEnvironment();
  configureCommercialProduct();
  process.env.TAROT_PRODUCT_IMAGE = "/commerce/tarot-product-provisional.png";
  process.env.TAROT_PRODUCT_IMAGE_STATUS = "provisional";
  process.env.TAROT_PRODUCT_IMAGE_APPROVED_FOR_SALE = "true";

  const product = getTarotProduct();
  assert.equal(product.imageReady, true);
  assert.equal(product.imageStatus, "provisional");
  assert.equal(product.imageApprovedForSale, true);
  assert.equal(product.commercialReady, true);
});

test("a complete product can be commercial-ready while payment remains closed", () => {
  clearCommerceEnvironment();
  configureCommercialProduct();

  const product = getTarotProduct();
  assert.equal(product.shippingIncluded, true);
  assert.equal(product.commercialReady, true);
  assert.equal(product.checkoutReady, false);
  assert.deepEqual(product.missingCommercialFields, []);
});

test("checkout opens only after payment, persistence, webhook and analytics readiness", () => {
  clearCommerceEnvironment();
  configureCommercialProduct();
  Object.assign(process.env, {
    BOLD_ENVIRONMENT: "test",
    BOLD_API_KEY_TEST: "test_api_key",
    BOLD_SECRET_KEY_TEST: "test_secret_key",
    TAROT_BOLD_PAYMENT_METHODS: "card,pse,nequi,bancolombia,qr",
    NEXT_PUBLIC_SITE_URL: "https://www.mitosdecolombia.com",
    TAROT_ORDERS_READY: "true",
    TAROT_BOLD_WEBHOOK_READY: "true",
    GA4_MEASUREMENT_PROTOCOL_API_SECRET: "test_ga4_secret",
    TAROT_SERVER_PURCHASE_TRACKING_READY: "true",
  });

  const product = getTarotProduct();
  assert.equal(product.commercialReady, true);
  assert.equal(product.paymentReady, true);
  assert.equal(product.checkoutReady, true);
  assert.deepEqual(product.missingCheckoutFields, []);
});

test("checkout accepts the existing GA4 server secret variable used by Vercel", () => {
  clearCommerceEnvironment();
  configureCommercialProduct();
  Object.assign(process.env, {
    BOLD_ENVIRONMENT: "test",
    BOLD_API_KEY_TEST: "test_api_key",
    BOLD_SECRET_KEY_TEST: "test_secret_key",
    TAROT_BOLD_PAYMENT_METHODS: "card,pse,nequi,bancolombia,qr",
    NEXT_PUBLIC_SITE_URL: "https://www.mitosdecolombia.com",
    TAROT_ORDERS_READY: "true",
    TAROT_BOLD_WEBHOOK_READY: "true",
    GA_MEASUREMENT_API_SECRET: "existing_vercel_secret",
    TAROT_SERVER_PURCHASE_TRACKING_READY: "true",
  });

  const product = getTarotProduct();
  assert.equal(product.serverPurchaseTrackingReady, true);
  assert.equal(product.checkoutReady, true);
});

test("checkout stays closed until server-side purchase tracking is confirmed", () => {
  clearCommerceEnvironment();
  configureCommercialProduct();
  Object.assign(process.env, {
    BOLD_ENVIRONMENT: "test",
    BOLD_API_KEY_TEST: "test_api_key",
    BOLD_SECRET_KEY_TEST: "test_secret_key",
    TAROT_BOLD_PAYMENT_METHODS: "card,pse,nequi,bancolombia,qr",
    NEXT_PUBLIC_SITE_URL: "https://www.mitosdecolombia.com",
    TAROT_ORDERS_READY: "true",
    TAROT_BOLD_WEBHOOK_READY: "true",
  });

  const product = getTarotProduct();
  assert.equal(product.serverPurchaseTrackingReady, false);
  assert.equal(product.checkoutReady, false);
  assert.ok(
    product.missingCheckoutFields.includes(
      "Medición de compra confirmada desde el servidor"
    )
  );
});

test("checkout stays closed until every promised payment method is confirmed", () => {
  clearCommerceEnvironment();
  configureCommercialProduct();
  Object.assign(process.env, {
    BOLD_ENVIRONMENT: "test",
    BOLD_API_KEY_TEST: "test_api_key",
    BOLD_SECRET_KEY_TEST: "test_secret_key",
    TAROT_BOLD_PAYMENT_METHODS: "card,nequi",
    NEXT_PUBLIC_SITE_URL: "https://www.mitosdecolombia.com",
    TAROT_ORDERS_READY: "true",
    TAROT_BOLD_WEBHOOK_READY: "true",
  });

  const product = getTarotProduct();
  assert.equal(product.paymentMethodsReady, false);
  assert.equal(product.checkoutReady, false);
  assert.ok(
    product.missingCheckoutFields.includes(
      "Verificación en Bold de tarjeta, PSE, Nequi, Botón Bancolombia y QR Bre-B"
    )
  );
});

test("checkout requires a final HTTPS return URL", () => {
  clearCommerceEnvironment();
  configureCommercialProduct();
  Object.assign(process.env, {
    BOLD_ENVIRONMENT: "test",
    BOLD_API_KEY_TEST: "test_api_key",
    BOLD_SECRET_KEY_TEST: "test_secret_key",
    TAROT_BOLD_PAYMENT_METHODS: "card,pse,nequi,bancolombia,qr",
    NEXT_PUBLIC_SITE_URL: "http://localhost:3003",
    TAROT_ORDERS_READY: "true",
    TAROT_BOLD_WEBHOOK_READY: "true",
  });

  const product = getTarotProduct();
  assert.equal(product.checkoutRedirectReady, false);
  assert.equal(product.checkoutReady, false);
  assert.ok(
    product.missingCheckoutFields.includes("URL HTTPS definitiva para el retorno del pago")
  );
});
