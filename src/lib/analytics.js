export { GA_MEASUREMENT_ID } from "./google-tags.js";

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

export function trackEvent({ action, category, label, value, ...params }) {
  const gtag = getGtag();
  if (!gtag) return;

  gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
    ...params,
  });
}
