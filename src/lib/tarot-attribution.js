export const TAROT_CAMPAIGN_KEY = "mitos_tarot_campaign_v2";
export const TAROT_ATTRIBUTION_MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;

const LEGACY_CAMPAIGN_KEY = "mitos_tarot_campaign_v1";
const CAMPAIGN_FIELDS = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "gbraid",
  "wbraid",
  "campaign",
  "content",
  "landing_intent",
]);

function cleanText(value, maximumLength) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maximumLength);
}

export function cleanTarotCampaign(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return Object.fromEntries(
    Object.entries(value)
      .filter(([key]) => CAMPAIGN_FIELDS.has(key))
      .map(([key, item]) => [
        key,
        cleanText(item, ["gclid", "gbraid", "wbraid"].includes(key) ? 300 : 120),
      ])
      .filter(([, item]) => item)
  );
}

function parseStoredAttribution(raw, now) {
  try {
    const parsed = JSON.parse(raw || "null");
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return null;

    if (parsed.campaign && Number.isFinite(parsed.capturedAt)) {
      if (now - parsed.capturedAt > TAROT_ATTRIBUTION_MAX_AGE_MS) return null;
      const campaign = cleanTarotCampaign(parsed.campaign);
      return Object.keys(campaign).length
        ? { campaign, capturedAt: parsed.capturedAt }
        : null;
    }

    const campaign = cleanTarotCampaign(parsed);
    return Object.keys(campaign).length ? { campaign, capturedAt: now } : null;
  } catch {
    return null;
  }
}

function availableBrowserStorages() {
  if (typeof window === "undefined") return [];
  const storages = [];
  for (const key of ["localStorage", "sessionStorage"]) {
    try {
      if (window[key]) storages.push(window[key]);
    } catch {
      // The browser can block storage access while still allowing the page.
    }
  }
  return storages;
}

export function readTarotAttribution({ storages, now = Date.now() } = {}) {
  const candidates = storages || availableBrowserStorages();
  for (const storage of candidates) {
    try {
      const current = parseStoredAttribution(storage.getItem(TAROT_CAMPAIGN_KEY), now);
      if (current) return current.campaign;
      const legacy = parseStoredAttribution(storage.getItem(LEGACY_CAMPAIGN_KEY), now);
      if (legacy) return legacy.campaign;
    } catch {
      // Storage can be unavailable in restrictive browser modes.
    }
  }
  return {};
}

export function captureTarotAttribution({
  search,
  context = {},
  storages,
  now = Date.now(),
} = {}) {
  const candidates = storages || availableBrowserStorages();
  const query = new URLSearchParams(
    search ?? (typeof window === "undefined" ? "" : window.location.search)
  );
  const incoming = {};
  [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "gclid",
    "gbraid",
    "wbraid",
  ].forEach((key) => {
    const value = query.get(key);
    if (value) incoming[key] = value;
  });

  const hasClickAttribution = Object.keys(incoming).length > 0;
  const previous = readTarotAttribution({ storages: candidates, now });
  const campaign = cleanTarotCampaign(
    hasClickAttribution || !Object.keys(previous).length
      ? { ...incoming, ...context }
      : previous
  );
  if (!Object.keys(campaign).length) return {};

  const payload = JSON.stringify({ campaign, capturedAt: now });
  candidates.forEach((storage) => {
    try {
      storage.setItem(TAROT_CAMPAIGN_KEY, payload);
      storage.removeItem(LEGACY_CAMPAIGN_KEY);
    } catch {
      // Attribution must never prevent the commerce experience from loading.
    }
  });
  return campaign;
}
