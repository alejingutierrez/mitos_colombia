import assert from "node:assert/strict";
import test from "node:test";

import {
  assertOrinoquiaMestizoFinalUniverse,
  canonicalOrinoquiaMestizoFinalSlugs,
  inheritedOrinoquiaMestizoFinalSlugs,
  orinoquiaMestizoFinalCategoryBySlug,
  orinoquiaMestizoFinalEditorialDecisions,
  orinoquiaMestizoFinalTargetTaxonomyBySlug,
  reviewedOrinoquiaMestizoFinalSlugs,
} from "../../editorial/orinoquia-mestizo-final/universe.mjs";

test("hereda, revisa y conserva las diecinueve URL", () => {
  assert.deepEqual(assertOrinoquiaMestizoFinalUniverse(), {
    inherited: 19,
    reviewedRoutes: 19,
    canonical: 19,
    created: 0,
    unpublished: 0,
    transferred: 0,
    imagePairsPending: 19,
  });
  assert.deepEqual(canonicalOrinoquiaMestizoFinalSlugs, reviewedOrinoquiaMestizoFinalSlugs);
  assert.deepEqual(inheritedOrinoquiaMestizoFinalSlugs, reviewedOrinoquiaMestizoFinalSlugs);
  assert.ok(!inheritedOrinoquiaMestizoFinalSlugs.includes("el-centauro"));
});

test("normaliza las rutas como Mestizo de Orinoquía sin transferencias", () => {
  for (const slug of reviewedOrinoquiaMestizoFinalSlugs) {
    assert.match(orinoquiaMestizoFinalCategoryBySlug[slug], /^Orinoquía > .+ > Mestizo$/);
    assert.deepEqual(orinoquiaMestizoFinalTargetTaxonomyBySlug[slug], {
      regionSlug: "orinoquia",
      communitySlug: "mestizo",
    });
  }
  assert.equal(
    orinoquiaMestizoFinalEditorialDecisions.media.action,
    "prepare-thirty-eight-openai-flat-paper-cut-images-with-provenance",
  );
});
