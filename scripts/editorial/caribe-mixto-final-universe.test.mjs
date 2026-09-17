import assert from "node:assert/strict";
import test from "node:test";

import {
  assertCaribeMixtoFinalUniverse,
  canonicalCaribeMixtoFinalSlugs,
  caribeMixtoFinalCategoryBySlug,
  caribeMixtoFinalEditorialDecisions,
  caribeMixtoFinalTargetTaxonomyBySlug,
  inheritedCaribeMixtoFinalSlugs,
  transferredToCaribeMestizoSlugs,
} from "../../editorial/caribe-mixto-final/universe.mjs";

test("revisa seis URL, transfiere una y no despublica ninguna", () => {
  assert.deepEqual(assertCaribeMixtoFinalUniverse(), {
    inherited: 6,
    canonicalCaribeMixto: 5,
    reviewedRoutes: 6,
    transferredToCaribeMestizo: 1,
    created: 0,
    unpublished: 0,
    distinctRaizalTalesPreserved: 5,
    imagePairsPending: 6,
  });
  assert.equal(inheritedCaribeMixtoFinalSlugs.length, 6);
  assert.equal(canonicalCaribeMixtoFinalSlugs.length, 5);
  assert.deepEqual(transferredToCaribeMestizoSlugs, ["el-hombre-caiman"]);
});

test("normaliza San Andrés raizal y Plato mestizo", () => {
  for (const slug of canonicalCaribeMixtoFinalSlugs) {
    assert.equal(caribeMixtoFinalCategoryBySlug[slug], "Caribe > San Andrés > Mixto");
    assert.deepEqual(caribeMixtoFinalTargetTaxonomyBySlug[slug], { regionSlug: "caribe", communitySlug: "mixto" });
  }
  assert.equal(caribeMixtoFinalCategoryBySlug["el-hombre-caiman"], "Caribe > Magdalena > Mestizo");
  assert.deepEqual(caribeMixtoFinalTargetTaxonomyBySlug["el-hombre-caiman"], { regionSlug: "caribe", communitySlug: "mestizo" });
  assert.equal(caribeMixtoFinalEditorialDecisions.media.action, "prepare-twelve-openai-flat-paper-cut-images-with-provenance");
});
