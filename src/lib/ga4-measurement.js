import { createHash } from "node:crypto";
import { GA_MEASUREMENT_ID } from "./google-tags.js";
import { cleanTarotCampaign } from "./tarot-attribution.js";

const GA4_COLLECT_URL = "https://www.google-analytics.com/mp/collect";

function cleanText(value, maximumLength) {
  return String(value || "").trim().slice(0, maximumLength);
}

export function cleanGa4AnalyticsContext(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};

  const clientId = cleanText(value.clientId, 128);
  const sessionId = cleanText(value.sessionId, 15);
  const numericSessionId = Number(sessionId);
  return {
    ...(clientId && /^[A-Za-z0-9._-]+$/.test(clientId) && { clientId }),
    ...(sessionId &&
      /^\d+$/.test(sessionId) &&
      Number.isSafeInteger(numericSessionId) && { sessionId }),
  };
}

function parseJsonObject(value) {
  try {
    const parsed = JSON.parse(value || "{}");
    return parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? parsed
      : {};
  } catch {
    return {};
  }
}

function fallbackClientId(reference) {
  const digest = createHash("sha256").update(reference).digest();
  return `${digest.readUInt32BE(0)}.${digest.readUInt32BE(4)}`;
}

export function buildGa4PurchasePayload(order) {
  const transactionId = cleanText(order?.payment_transaction_id, 100);
  const reference = cleanText(order?.reference, 180);
  const currency = cleanText(order?.currency, 3).toUpperCase();
  const amountInCents = Number(order?.amount_in_cents);
  const unitPriceCop = Number(order?.unit_price_cop);
  const quantity = Number(order?.quantity);

  if (
    order?.status !== "APPROVED" ||
    !transactionId ||
    !reference ||
    currency !== "COP" ||
    !Number.isFinite(amountInCents) ||
    amountInCents <= 0 ||
    !Number.isFinite(unitPriceCop) ||
    unitPriceCop <= 0 ||
    !Number.isInteger(quantity) ||
    quantity < 1
  ) {
    return null;
  }

  const analytics = cleanGa4AnalyticsContext(
    parseJsonObject(order.analytics_json)
  );
  const campaign = cleanTarotCampaign(parseJsonObject(order.campaign_json));
  const approvedAt = Date.parse(order.approved_at || "");
  const params = {
    transaction_id: transactionId,
    value: amountInCents / 100,
    currency,
    shipping: 0,
    engagement_time_msec: 1,
    items: [
      {
        item_id: cleanText(order.sku, 100),
        item_name: "Tarot de Mitos Colombianos",
        item_brand: "Mitos de Colombia",
        item_category: "Baraja editorial ilustrada",
        price: unitPriceCop,
        quantity,
      },
    ],
    ...(analytics.sessionId && { session_id: Number(analytics.sessionId) }),
    ...(campaign.landing_intent && {
      landing_intent: campaign.landing_intent,
    }),
    ...(campaign.utm_source && { utm_source: campaign.utm_source }),
    ...(campaign.utm_medium && { utm_medium: campaign.utm_medium }),
    ...(campaign.utm_campaign && { utm_campaign: campaign.utm_campaign }),
  };

  return {
    client_id: analytics.clientId || fallbackClientId(reference),
    ...(Number.isFinite(approvedAt) && {
      timestamp_micros: Math.trunc(approvedAt * 1000),
    }),
    validation_behavior: "ENFORCE_RECOMMENDATIONS",
    events: [{ name: "purchase", params }],
  };
}

export function getGa4ServerTrackingConfiguration() {
  const measurementId = cleanText(
    process.env.NEXT_PUBLIC_GA_ID || GA_MEASUREMENT_ID,
    32
  );
  const apiSecret = cleanText(
    process.env.GA4_MEASUREMENT_PROTOCOL_API_SECRET ||
      process.env.GA_MEASUREMENT_API_SECRET,
    200
  );
  const enabled = process.env.TAROT_SERVER_PURCHASE_TRACKING_READY === "true";
  return {
    measurementId,
    apiSecret,
    ready: Boolean(/^G-[A-Z0-9]+$/i.test(measurementId) && apiSecret && enabled),
  };
}

export async function sendGa4Purchase(
  order,
  {
    fetchImpl = fetch,
    measurementId,
    apiSecret,
    timeoutMs = 5000,
  } = {}
) {
  const configured = getGa4ServerTrackingConfiguration();
  const resolvedMeasurementId = cleanText(
    measurementId || configured.measurementId,
    32
  );
  const resolvedApiSecret = cleanText(apiSecret || configured.apiSecret, 200);
  const payload = buildGa4PurchasePayload(order);

  if (!/^G-[A-Z0-9]+$/i.test(resolvedMeasurementId) || !resolvedApiSecret) {
    throw new Error("GA4 server purchase tracking is not configured.");
  }
  if (!payload) {
    throw new Error("The approved order cannot produce a GA4 purchase payload.");
  }

  const endpoint = new URL(GA4_COLLECT_URL);
  endpoint.searchParams.set("measurement_id", resolvedMeasurementId);
  endpoint.searchParams.set("api_secret", resolvedApiSecret);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetchImpl(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (!response.ok) {
      throw new Error(`GA4 purchase delivery failed with status ${response.status}.`);
    }
    return { sent: true, transactionId: payload.events[0].params.transaction_id };
  } finally {
    clearTimeout(timeout);
  }
}
