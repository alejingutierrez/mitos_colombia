const DEFAULT_GA_MEASUREMENT_ID = "G-TSQYRJVCDJ";

export function normalizeGaMeasurementId(value) {
  const id = String(value || "").trim().toUpperCase();
  return /^G-[A-Z0-9]+$/.test(id) ? id : "";
}

export function normalizeGtmContainerId(value) {
  const id = String(value || "").trim().toUpperCase();
  return /^GTM-[A-Z0-9]+$/.test(id) ? id : "";
}

export const GA_MEASUREMENT_ID =
  normalizeGaMeasurementId(process.env.NEXT_PUBLIC_GA_ID) ||
  DEFAULT_GA_MEASUREMENT_ID;

export const GTM_CONTAINER_ID = normalizeGtmContainerId(
  process.env.NEXT_PUBLIC_GTM_ID
);

function publicAnalyticsBootstrap(measurementId) {
  return `if (w.location.pathname.indexOf('/admin') === 0) return;
w.dataLayer = w.dataLayer || [];
w.gtag = w.gtag || function(){w.dataLayer.push(arguments);};
if (!w.__mitosAnalyticsClickTracking) {
  w.__mitosAnalyticsClickTracking = true;
  d.addEventListener('click', function(event){
    var target = event.target && event.target.closest
      ? event.target.closest('[data-analytics-event]')
      : null;
    if (!target || !target.dataset.analyticsEvent) return;
    var value = target.dataset.analyticsValue;
    w.gtag('event', target.dataset.analyticsEvent, {
      send_to: ${JSON.stringify(measurementId)},
      event_category: target.dataset.analyticsCategory || undefined,
      event_label: target.dataset.analyticsLabel || undefined,
      value: value ? Number(value) : undefined
    });
  });
}`;
}

export function buildDirectGaBootstrap(measurementId) {
  const gaId = normalizeGaMeasurementId(measurementId);
  if (!gaId) return "";

  return `(function(w,d){
${publicAnalyticsBootstrap(gaId)}
var j=d.createElement('script'),f=d.getElementsByTagName('script')[0];
j.async=true;j.src='https://www.googletagmanager.com/gtag/js?id='+${JSON.stringify(gaId)};
f.parentNode.insertBefore(j,f);
w.gtag('js', new Date());
w.gtag('config', ${JSON.stringify(gaId)});
})(window,document);`;
}

export function buildGtmBootstrap(containerId) {
  const gtmId = normalizeGtmContainerId(containerId);
  if (!gtmId) return "";

  return `(function(w,d,s,l,i){
${publicAnalyticsBootstrap(GA_MEASUREMENT_ID)}
w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',${JSON.stringify(gtmId)});`;
}
