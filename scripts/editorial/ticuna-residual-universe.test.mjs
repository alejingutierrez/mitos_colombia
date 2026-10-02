import assert from "node:assert/strict";
import test from "node:test";

import {
  assertTicunaResidualUniverse,
  canonicalTicunaAfterResidualSlugs,
  inheritedTicunaResidualUniverseSlugs,
  reviewedTicunaResidualSlugs,
  ticunaResidualCategoryBySlug,
  ticunaResidualEditorialDecisions,
  ticunaResidualTargetTaxonomyBySlug,
} from "../../editorial/ticuna-residual/universe.mjs";

test("amplía el universo Ticuna de seis a trece sin altas ni bajas", () => {
  assert.deepEqual(assertTicunaResidualUniverse(), {
    inherited: 6,
    transferred: 7,
    canonical: 13,
    added: 0,
    unpublished: 0,
    declaredVariantsOrCycleWindows: 4,
    rejoinedFragments: 2,
  });
  assert.equal(inheritedTicunaResidualUniverseSlugs.length, 6);
  assert.equal(reviewedTicunaResidualSlugs.length, 7);
  assert.equal(canonicalTicunaAfterResidualSlugs.length, 13);
  for (const slug of reviewedTicunaResidualSlugs) {
    assert.ok(canonicalTicunaAfterResidualSlugs.includes(slug));
    assert.ok(!inheritedTicunaResidualUniverseSlugs.includes(slug));
  }
});

test("transfiere siete rutas de Mixto a Ticuna y prepara catorce imágenes", () => {
  assert.deepEqual(
    new Set(Object.values(ticunaResidualCategoryBySlug)),
    new Set(["Amazonía > Amazonas > Ticuna"]),
  );
  assert.deepEqual(
    new Set(Object.keys(ticunaResidualTargetTaxonomyBySlug)),
    new Set(reviewedTicunaResidualSlugs),
  );
  for (const target of Object.values(ticunaResidualTargetTaxonomyBySlug)) {
    assert.deepEqual(target, {
      regionSlug: "amazonas",
      communitySlug: "ticuna",
    });
  }
  assert.equal(
    ticunaResidualEditorialDecisions.yoiIpi.action,
    "correct-moe-name-and-retain-declared-yoi-ipi-cycle-window",
  );
  assert.equal(
    ticunaResidualEditorialDecisions.media.action,
    "prepare-fourteen-openai-images-with-provenance",
  );
});
