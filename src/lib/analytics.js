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

export function trackEvent({ action, category, label, value, ...params }) {
  const gtag = getGtag();
  if (!gtag) return;

  gtag("event", action, {
    send_to: GA_MEASUREMENT_ID,
    event_category: category,
    event_label: label,
    value,
    ...params,
  });
}
