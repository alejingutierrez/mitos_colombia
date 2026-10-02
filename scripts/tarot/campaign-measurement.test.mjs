import test from "node:test";
import assert from "node:assert/strict";
import {
  DATA_LAYER_EVENT_PREFIX,
  TAROT_FUNNEL_EVENTS,
  TAROT_FUNNEL_STAGES,
  getTarotFunnelStage,
  trackEvent,
} from "../../src/lib/analytics.js";
import { captureTarotAttribution } from "../../src/lib/tarot-attribution.js";
import {
  TAROT_LANDING_VARIANTS,
  formatCop,
  getTarotProduct,
  resolveTarotHeroFacts,
} from "../../src/lib/tarot-commerce.js";
import {
  TAROT_LANDING_SLUGS,
  TAROT_RETIRED_LANDINGS,
  resolveRetiredTarotLanding,
} from "../../src/lib/tarot-landing-routes.js";

function memoryStorage() {
  const values = new Map();
  return {
    getItem: (key) => (values.has(key) ? values.get(key) : null),
    setItem: (key, value) => values.set(key, String(value)),
    removeItem: (key) => values.delete(key),
  };
}

function withBrowser(run) {
  const previousWindow = globalThis.window;
  const previousDocument = globalThis.document;
  globalThis.window = { location: { href: "https://www.mitosdecolombia.com/tarot/comprar" } };
  globalThis.document = { title: "Tarot" };
  try {
    return run();
  } finally {
    globalThis.window = previousWindow;
    globalThis.document = previousDocument;
  }
}

test("una URL de anuncio inventada falla a la vista en lugar de redirigirse en silencio", () => {
  assert.equal(resolveRetiredTarotLanding("slug-inventado-de-un-anuncio"), null);
  assert.equal(resolveRetiredTarotLanding("tarot/../admin"), null);
  assert.equal(resolveRetiredTarotLanding(""), null);
  assert.equal(resolveRetiredTarotLanding(undefined), null);
});

test("sólo las rutas jubiladas de forma explícita conservan su 308", () => {
  assert.equal(resolveRetiredTarotLanding("regalo"), "/tarot/regalo-colombiano");
  assert.equal(resolveRetiredTarotLanding("comprar-tarot"), "/tarot/comprar");

  for (const [slug, target] of Object.entries(TAROT_RETIRED_LANDINGS)) {
    assert.notEqual(target, `/tarot/${slug}`, `${slug} no puede redirigir a sí mismo`);
    assert.ok(
      TAROT_LANDING_SLUGS.includes(target.replace("/tarot/", "")),
      `${slug} debe apuntar a una landing publicada`
    );
  }
});

test("una variante de mayúsculas o acentos llega a su ruta canónica sin ciclo", () => {
  assert.equal(resolveRetiredTarotLanding("Comprar"), "/tarot/comprar");
  assert.equal(resolveRetiredTarotLanding("REGALO-COLOMBIANO"), "/tarot/regalo-colombiano");
  assert.equal(TAROT_LANDING_SLUGS.length, 6);
});

test("la taxonomía cubre el embudo completo de ver a comprar", () => {
  assert.deepEqual(
    [...new Set(Object.values(TAROT_FUNNEL_EVENTS))].sort(),
    Object.values(TAROT_FUNNEL_STAGES).sort()
  );
  assert.equal(getTarotFunnelStage("view_item"), "view");
  assert.equal(getTarotFunnelStage("landing_engaged"), "engage");
  assert.equal(getTarotFunnelStage("add_to_cart"), "intent");
  assert.equal(getTarotFunnelStage("begin_checkout"), "checkout");
  assert.equal(getTarotFunnelStage("purchase"), "purchase");
  assert.equal(getTarotFunnelStage("archive_filter"), "");
});

test("cada evento del embudo viaja con su etapa y con un espejo legible por Tag Manager", () => {
  withBrowser(() => {
    trackEvent({
      action: "add_to_cart",
      category: "ecommerce",
      label: "tarot-mitos-colombia-78",
      currency: "COP",
      value: 124900,
    });

    assert.equal(window.dataLayer.length, 2);
    const [, eventName, eventParams] = Array.from(window.dataLayer[0]);
    assert.equal(eventName, "add_to_cart");
    assert.equal(eventParams.funnel_stage, "intent");

    const mirror = window.dataLayer[1];
    assert.equal(mirror.event, `${DATA_LAYER_EVENT_PREFIX}add_to_cart`);
    assert.equal(mirror.funnel_stage, "intent");
    assert.equal(mirror.value, 124900);
    for (const key of Object.keys(mirror)) {
      assert.ok(
        key === "event" || key in eventParams,
        `${key} no debería aparecer sólo en el espejo`
      );
    }
  });
});

test("un evento fuera del embudo no se duplica ni inventa una etapa", () => {
  withBrowser(() => {
    trackEvent({ action: "archive_filter", category: "navigation", label: "region:andina" });
    assert.equal(window.dataLayer.length, 1);
    const [, , eventParams] = Array.from(window.dataLayer[0]);
    assert.equal("funnel_stage" in eventParams, false);
  });
});

test("la captura global conserva la intención que la landing ya declaró", () => {
  const storage = memoryStorage();
  captureTarotAttribution({
    search: "?gclid=click-123&utm_source=google&utm_medium=cpc",
    context: { landing_intent: "gift", campaign: "lanzamiento_tarot" },
    storages: [storage],
    now: 1_000,
  });

  const global = captureTarotAttribution({
    search: "?gclid=click-123&utm_source=google&utm_medium=cpc",
    storages: [storage],
    now: 1_100,
    keepStoredContext: true,
  });

  assert.deepEqual(global, {
    gclid: "click-123",
    utm_source: "google",
    utm_medium: "cpc",
    campaign: "lanzamiento_tarot",
    landing_intent: "gift",
  });
});

test("la captura nunca guarda datos personales aunque vengan en la URL", () => {
  const storage = memoryStorage();
  const campaign = captureTarotAttribution({
    search: "?gclid=click-123&email=comprador@example.com&name=Ana",
    storages: [storage],
    now: 1_000,
  });
  assert.deepEqual(campaign, { gclid: "click-123" });
  assert.equal(JSON.stringify(campaign).includes("example.com"), false);
});

test("el hero muestra el precio del producto, no una cifra escrita a mano", () => {
  const product = getTarotProduct();
  for (const variant of Object.values(TAROT_LANDING_VARIANTS)) {
    const facts = resolveTarotHeroFacts(variant, product);
    assert.equal(facts.length, 3, `${variant.path} debe conservar tres hechos`);
    for (const fact of facts) {
      assert.equal(/^\{.+\}$/.test(fact), false, `${variant.path} dejó un token sin resolver`);
      assert.equal(/\$\s?\d/.test(fact) && !product.priceCop, false);
    }
    for (const item of variant.heroPanel.items) {
      assert.equal(
        /\$\s?\d/.test(item),
        false,
        `${variant.path} no debe fijar un precio en la configuración`
      );
    }
  }

  assert.deepEqual(
    resolveTarotHeroFacts(TAROT_LANDING_VARIANTS.comprar, {
      priceCop: 124900,
      shippingIncluded: true,
    }),
    ["78 cartas", formatCop(124900), "Envío incluido"]
  );
  assert.deepEqual(
    resolveTarotHeroFacts(TAROT_LANDING_VARIANTS.comprar, {}),
    ["78 cartas", "Precio confirmado antes de pagar", "Envío informado antes de pagar"]
  );
});

test("ninguna landing se queda sin camino de compra a la vista", () => {
  for (const variant of Object.values(TAROT_LANDING_VARIANTS)) {
    assert.ok(
      ["cart", "story", "gallery", "facts", "signature", "reflection"].includes(
        variant.primaryAction
      ),
      `${variant.path} declara una acción principal desconocida`
    );
  }
});
