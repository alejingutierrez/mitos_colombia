import assert from "node:assert/strict";
import test from "node:test";

import {
  assertHuitotoResidualUniverse,
  canonicalHuitotoAfterResidualSlugs,
  huitotoResidualCategoryBySlug,
  huitotoResidualEditorialDecisions,
  huitotoResidualTargetTaxonomyBySlug,
  inheritedHuitotoResidualUniverseSlugs,
  reviewedHuitotoResidualSlugs,
} from "../../editorial/huitoto-residual/universe.mjs";

test("amplía el universo Huitoto de 22 a 26 sin altas ni bajas", () => {
  assert.deepEqual(assertHuitotoResidualUniverse(), {
    inherited: 22,
    transferred: 4,
    canonical: 26,
    added: 0,
    unpublished: 0,
    declaredCycleWindows: 1,
  });
  assert.equal(inheritedHuitotoResidualUniverseSlugs.length, 22);
  assert.equal(reviewedHuitotoResidualSlugs.length, 4);
  for (const slug of reviewedHuitotoResidualSlugs) {
    assert.ok(canonicalHuitotoAfterResidualSlugs.includes(slug));
    assert.ok(!inheritedHuitotoResidualUniverseSlugs.includes(slug));
  }
});

test("transfiere cuatro rutas de Mixto a Huitoto y prepara ocho imágenes", () => {
  assert.deepEqual(
    new Set(Object.values(huitotoResidualCategoryBySlug)),
    new Set(["Amazonía > Caquetá y Putumayo > Huitoto / Murui-Muina"]),
  );
  assert.deepEqual(
    new Set(Object.keys(huitotoResidualTargetTaxonomyBySlug)),
    new Set(reviewedHuitotoResidualSlugs),
  );
  for (const target of Object.values(
    huitotoResidualTargetTaxonomyBySlug,
  )) {
    assert.deepEqual(target, {
      regionSlug: "amazonas",
      communitySlug: "huitotos",
    });
  }
  assert.equal(
    huitotoResidualEditorialDecisions.taik.action,
    "retain-url-as-declared-window-into-kugi-nokuerai-cycle",
  );
  assert.equal(
    huitotoResidualEditorialDecisions.media.action,
    "prepare-eight-openai-images-with-provenance",
  );
});
