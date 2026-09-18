import assert from "node:assert/strict";
import test from "node:test";

import {
  alreadyReviewedVariosMixtoFinalSlugs,
  assertVariosMixtoFinalUniverse,
  canonicalVariosMixtoFinalSlugs,
  inheritedVariosMixtoFinalSlugs,
  reviewedVariosMixtoFinalSlugs,
  transferredFromVariosMixtoFinalSlugs,
  variosMixtoFinalCategoryBySlug,
  variosMixtoFinalEditorialDecisions,
  variosMixtoFinalTargetTaxonomyBySlug,
} from "../../editorial/varios-mixto-final/universe.mjs";

test("hereda ocho URL, revisa siete y no despublica ninguna", () => {
  assert.deepEqual(assertVariosMixtoFinalUniverse(), {
    inherited: 8,
    alreadyReviewed: 1,
    reviewedRoutes: 7,
    canonicalPendingSilbon: 1,
    transferredToMestizo: 7,
    created: 0,
    unpublished: 0,
    imagePairsPending: 7,
  });
  assert.equal(inheritedVariosMixtoFinalSlugs.length, 8);
  assert.equal(reviewedVariosMixtoFinalSlugs.length, 7);
  assert.deepEqual(alreadyReviewedVariosMixtoFinalSlugs, ["el-silbon"]);
  assert.deepEqual(canonicalVariosMixtoFinalSlugs, ["el-silbon"]);
  assert.deepEqual(transferredFromVariosMixtoFinalSlugs, reviewedVariosMixtoFinalSlugs);
});

test("normaliza las siete rutas como Mestizo regional", () => {
  for (const slug of reviewedVariosMixtoFinalSlugs) {
    assert.match(variosMixtoFinalCategoryBySlug[slug], / > Mestizo$/);
    assert.equal(variosMixtoFinalTargetTaxonomyBySlug[slug].communitySlug, "mestizo");
  }
  assert.equal(variosMixtoFinalTargetTaxonomyBySlug["el-mandingas"].regionSlug, "caribe");
  assert.equal(variosMixtoFinalTargetTaxonomyBySlug["el-cura-sin-cabeza"].regionSlug, "andina");
  assert.equal(variosMixtoFinalEditorialDecisions.media.action, "prepare-fourteen-openai-flat-paper-cut-images-with-provenance");
});
