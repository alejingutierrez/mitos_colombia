import assert from "node:assert/strict";
import test from "node:test";

import {
  buildDirectGaBootstrap,
  buildGtmBootstrap,
  normalizeGaMeasurementId,
  normalizeGtmContainerId,
} from "../../src/lib/google-tags.js";
import { trackEvent } from "../../src/lib/analytics.js";

test("accepts valid Google identifiers and rejects unsafe values", () => {
  assert.equal(normalizeGaMeasurementId(" g-tsqyrjvcdj "), "G-TSQYRJVCDJ");
  assert.equal(normalizeGtmContainerId(" gtm-abc123 "), "GTM-ABC123");
  assert.equal(normalizeGaMeasurementId("G-ABC';alert(1)"), "");
  assert.equal(normalizeGtmContainerId("GTM-ABC&x=1"), "");
});

test("builds executable direct GA4 and GTM bootstraps", () => {
  const direct = buildDirectGaBootstrap("G-TSQYRJVCDJ");
  const manager = buildGtmBootstrap("GTM-ABC123");

  assert.match(direct, /w\.gtag\('config'/);
  assert.doesNotMatch(direct, /send_page_view/);
  assert.match(direct, /G-TSQYRJVCDJ/);
  assert.match(direct, /data-analytics-event/);
  assert.match(direct, /send_to: "G-TSQYRJVCDJ"/);
  assert.match(manager, /gtm\.start/);
  assert.match(manager, /GTM-ABC123/);
  assert.match(manager, /w\.gtag/);
  assert.match(manager, /send_to: "G-TSQYRJVCDJ"/);
});

test("queues custom events before the Google library is ready", () => {
  const previousWindow = globalThis.window;
  const previousDocument = globalThis.document;

  globalThis.window = {
    location: { href: "https://www.mitosdecolombia.com/mitos?region=andina" },
  };
  globalThis.document = { title: "Archivo de mitos" };

  try {
    trackEvent({
      action: "archive_filter",
      category: "navigation",
      label: "region:andina",
    });

    assert.equal(window.dataLayer.length, 1);
    const [, eventName, eventParams] = Array.from(window.dataLayer[0]);
    assert.equal(eventName, "archive_filter");
    assert.equal(eventParams.send_to, "G-TSQYRJVCDJ");
  } finally {
    globalThis.window = previousWindow;
    globalThis.document = previousDocument;
  }
});
