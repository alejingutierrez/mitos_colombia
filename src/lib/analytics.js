import { GA_MEASUREMENT_ID } from "./google-tags.js";

export { GA_MEASUREMENT_ID };

function getGtag() {
  if (typeof window === "undefined") return null;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  return window.gtag;
}

function cleanClientId(value) {
  const candidate = String(value || "").trim();
  return candidate && candidate.length <= 128 && /^[A-Za-z0-9._-]+$/.test(candidate)
    ? candidate
    : "";
}

function cleanSessionId(value) {
  const candidate = String(value || "").trim();
  const numeric = Number(candidate);
  return /^\d{1,15}$/.test(candidate) && Number.isSafeInteger(numeric)
    ? candidate
    : "";
}

export function getAnalyticsSessionContext({ timeoutMs = 1200 } = {}) {
  const gtag = getGtag();
  if (!gtag || !GA_MEASUREMENT_ID) return Promise.resolve({});

  return new Promise((resolve) => {
    const context = {};
    let pending = 2;
    let settled = false;

    function finish() {
      if (settled) return;
      settled = true;
      window.clearTimeout(timer);
      resolve(context);
    }

    function capture(key, cleanValue) {
      return (value) => {
        if (settled) return;
        const cleaned = cleanValue(value);
        if (cleaned) context[key] = cleaned;
        pending -= 1;
        if (pending === 0) finish();
      };
    }

    const timer = window.setTimeout(finish, Math.max(200, timeoutMs));

    try {
      gtag(
        "get",
        GA_MEASUREMENT_ID,
        "client_id",
        capture("clientId", cleanClientId)
      );
      gtag(
        "get",
        GA_MEASUREMENT_ID,
        "session_id",
        capture("sessionId", cleanSessionId)
      );
    } catch {
      finish();
    }
  });
}

/**
 * Taxonomía del embudo comercial: ver → interactuar → intención → checkout → compra.
 *
 * Cada nombre es el evento tal como llega a GA4. La etapa se envía como el
 * parámetro `funnel_stage`, para poder construir audiencias y conversiones en
 * la consola sin depender del nombre exacto de cada evento.
 */
export const TAROT_FUNNEL_STAGES = Object.freeze({
  view: "view",
  engage: "engage",
  intent: "intent",
  checkout: "checkout",
  purchase: "purchase",
});

export const TAROT_FUNNEL_EVENTS = Object.freeze({
  view_item: TAROT_FUNNEL_STAGES.view,
  view_item_preview: TAROT_FUNNEL_STAGES.view,
  landing_engaged: TAROT_FUNNEL_STAGES.engage,
  landing_cta_click: TAROT_FUNNEL_STAGES.engage,
  add_to_cart: TAROT_FUNNEL_STAGES.intent,
  commerce_preview_open: TAROT_FUNNEL_STAGES.intent,
  view_cart: TAROT_FUNNEL_STAGES.intent,
  view_checkout_preview: TAROT_FUNNEL_STAGES.checkout,
  begin_checkout: TAROT_FUNNEL_STAGES.checkout,
  purchase: TAROT_FUNNEL_STAGES.purchase,
});

/** Prefijo del espejo en dataLayer, para no chocar con ningún evento de GA4. */
export const DATA_LAYER_EVENT_PREFIX = "mitos_";

export function getTarotFunnelStage(action) {
  return TAROT_FUNNEL_EVENTS[action] || "";
}

function mirrorToDataLayer(action, payload) {
  if (typeof window === "undefined" || !window.dataLayer) return;

  // Google Tag Manager sólo reconoce entradas con la clave `event`. El espejo
  // deja el embudo disponible como disparador nativo del contenedor sin
  // depender de que gtag.js interprete la cola compartida.
  window.dataLayer.push({
    event: `${DATA_LAYER_EVENT_PREFIX}${action}`,
    ...payload,
  });
}

export function trackEvent({ action, category, label, value, ...params }) {
  const gtag = getGtag();
  if (!gtag) return;

  const funnelStage = getTarotFunnelStage(action);
  const payload = {
    send_to: GA_MEASUREMENT_ID,
    event_category: category,
    event_label: label,
    value,
    ...(funnelStage && { funnel_stage: funnelStage }),
    ...params,
  };

  gtag("event", action, payload);
  if (funnelStage) mirrorToDataLayer(action, payload);
}
