export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID || "G-TSQYRJVCDJ";

export function pageview(url) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: url,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function trackEvent({ action, category, label, value, ...params }) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
    ...params,
  });
}
