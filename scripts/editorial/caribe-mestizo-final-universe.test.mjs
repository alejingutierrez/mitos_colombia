import assert from "node:assert/strict";
import test from "node:test";

import {
  alreadyReviewedCaribeMestizoFinalSlugs,
  assertCaribeMestizoFinalUniverse,
  canonicalCaribeMestizoFinalSlugs,
  caribeMestizoFinalCategoryBySlug,
  caribeMestizoFinalEditorialDecisions,
  caribeMestizoFinalTargetTaxonomyBySlug,
  inheritedCaribeMestizoFinalSlugs,
  reviewedCaribeMestizoFinalSlugs,
} from "../../editorial/caribe-mestizo-final/universe.mjs";

test("hereda 72 rutas, preserva dos expedientes y revisa las 70 restantes", () => {
  assert.deepEqual(assertCaribeMestizoFinalUniverse(), {
    inherited: 72,
    reviewedRoutes: 70,
    canonicalPreserved: 72,
    previouslyReviewedPreserved: 2,
    created: 0,
    unpublished: 0,
    transferred: 0,
    imagePairsPending: 70,
  });
  assert.equal(alreadyReviewedCaribeMestizoFinalSlugs.length, 2);
  assert.equal(canonicalCaribeMestizoFinalSlugs.length, 72);
  assert.ok(reviewedCaribeMestizoFinalSlugs.every((slug) => !alreadyReviewedCaribeMestizoFinalSlugs.includes(slug)));
});

test("conserva la taxonomía Caribe Mestizo y no crea etiquetas regionales paralelas", () => {
  for (const slug of reviewedCaribeMestizoFinalSlugs) {
    assert.match(caribeMestizoFinalCategoryBySlug[slug], /^Caribe > .+ > Mestizo$/);
    assert.deepEqual(caribeMestizoFinalTargetTaxonomyBySlug[slug], {
      regionSlug: "caribe",
      communitySlug: "mestizo",
    });
  }
  assert.equal(
    caribeMestizoFinalEditorialDecisions.media.action,
    "prepare-one-hundred-forty-openai-flat-paper-cut-images",
  );
  assert.equal(inheritedCaribeMestizoFinalSlugs.length, 72);
});
