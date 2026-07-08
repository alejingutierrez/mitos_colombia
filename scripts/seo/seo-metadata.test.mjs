import assert from "node:assert/strict";
import test from "node:test";

import {
  normalizeSeoDescription,
  normalizeSeoTitle,
  pickSeoTitle,
  shouldRethrowSeoLoadError,
} from "../../src/lib/seo-metadata.js";

test("normalizeSeoTitle keeps long SEO titles within snippet-friendly bounds", () => {
  const title = normalizeSeoTitle(
    "Trono Corcovao: leyenda zenu del cerro Tofeme, el totumo de oro y las inundaciones | Mitos de Colombia"
  );

  assert.ok(title.length <= 60, title);
  assert.ok(title.endsWith("| Mitos de Colombia"), title);
});

test("normalizeSeoDescription expands descriptions that are too thin for snippets", () => {
  const description = normalizeSeoDescription("Explora los mitos de la categoria oro");

  assert.ok(description.length >= 70, description);
  assert.ok(description.includes("tradicion oral colombiana"));
});

test("pickSeoTitle can prefer a canonical title when stored SEO title is generic", () => {
  const title = pickSeoTitle({
    seoTitle: "Rios en la Mitologia Colombiana | Mitos de Colombia",
    fallbackTitle: "Rio en la mitologia colombiana",
    preferFallbackTitle: true,
  });

  assert.equal(title, "Rio en la mitologia colombiana");
});

test("transient SEO data errors fail closed during static builds", () => {
  assert.equal(
    shouldRethrowSeoLoadError(new Error("fetch failed"), {
      NEXT_PHASE: "phase-production-build",
    }),
    true
  );
  assert.equal(shouldRethrowSeoLoadError(new Error("fetch failed"), {}), false);
});
