import assert from "node:assert/strict";
import test from "node:test";

import {
  assertCaldasMestizoUniverse,
  caldasMestizoCategoryBySlug,
  caldasMestizoCategorySlugs,
  caldasMestizoEditorialDecisions,
  caldasMestizoTargetTaxonomyBySlug,
  canonicalCaldasMestizoSlugs,
  inheritedCaldasMestizoSlugs,
  relocatedSantanderSlugs,
  reviewedCaldasMestizoSlugs,
} from "../../editorial/caldas-mestizo/universe.mjs";

test("conserva las nueve rutas y relocaliza Cuento de ánimas", () => {
  assert.deepEqual(assertCaldasMestizoUniverse(), {
    inherited: 9,
    canonical: 9,
    caldas: 8,
    relocatedToSantander: 1,
    reviewedRoutes: 9,
    unpublished: 0,
  });
  assert.deepEqual(
    new Set(inheritedCaldasMestizoSlugs),
    new Set(canonicalCaldasMestizoSlugs),
  );
  assert.deepEqual(
    new Set(reviewedCaldasMestizoSlugs),
    new Set(canonicalCaldasMestizoSlugs),
  );
  assert.deepEqual(relocatedSantanderSlugs, ["cuento-de-animas"]);
  assert.equal(caldasMestizoCategorySlugs.length, 8);
  assert.equal(
    caldasMestizoCategoryBySlug["cuento-de-animas"],
    "Andina > Santander > Mestizo",
  );
});

test("mantiene taxonomía Andina Mestizo y prepara dieciocho imágenes", () => {
  assert.deepEqual(
    new Set(Object.keys(caldasMestizoTargetTaxonomyBySlug)),
    new Set(reviewedCaldasMestizoSlugs),
  );
  for (const target of Object.values(caldasMestizoTargetTaxonomyBySlug)) {
    assert.deepEqual(target, {
      regionSlug: "andina",
      communitySlug: "mestizo",
    });
  }
  assert.equal(
    caldasMestizoEditorialDecisions.media.action,
    "prepare-eighteen-openai-images-with-provenance",
  );
});
