import assert from "node:assert/strict";
import test from "node:test";

import {
  santanderMixtoResidualCategoryBySlug,
  santanderMixtoResidualEditorialDecisions,
  santanderMixtoResidualTargetTaxonomyBySlug,
  assertSantanderMixtoResidualUniverse,
  canonicalSantanderMixtoResidualSlugs,
  inheritedSantanderMixtoResidualSlugs,
} from "../../editorial/santander-mixto-residual/universe.mjs";

test("cierra las dos rutas residuales de Santander Mixto", () => {
  assert.deepEqual(assertSantanderMixtoResidualUniverse(), {
    inherited: 2,
    canonical: 2,
    reviewedRoutes: 2,
    added: 0,
    unpublished: 0,
    unifiedSpreadsheetRows: 4,
  });
  assert.deepEqual(
    new Set(inheritedSantanderMixtoResidualSlugs),
    new Set(["talabad", "el-ermitano-iracundo"]),
  );
  assert.deepEqual(
    new Set(canonicalSantanderMixtoResidualSlugs),
    new Set(inheritedSantanderMixtoResidualSlugs),
  );
});

test("conserva taxonomía existente y prepara cuatro imágenes OpenAI", () => {
  for (const slug of canonicalSantanderMixtoResidualSlugs) {
    assert.equal(
      santanderMixtoResidualCategoryBySlug[slug],
      "Andina > Santander > Mixto",
    );
    assert.deepEqual(santanderMixtoResidualTargetTaxonomyBySlug[slug], {
      regionSlug: "andina",
      communitySlug: "mixto",
    });
  }
  assert.equal(
    santanderMixtoResidualEditorialDecisions.media.action,
    "prepare-four-openai-images-with-provenance",
  );
  assert.match(
    santanderMixtoResidualEditorialDecisions.geography.reason,
    /Norte de Santander/,
  );
});
