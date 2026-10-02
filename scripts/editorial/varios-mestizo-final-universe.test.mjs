import assert from "node:assert/strict";
import test from "node:test";

import {
  assertVariosMestizoFinalUniverse,
  canonicalVariosMestizoFinalSlugs,
  inheritedVariosMestizoFinalSlugs,
  reviewedVariosMestizoFinalSlugs,
  transferredToAndinaMestizoSlugs,
  variosMestizoFinalCategoryBySlug,
  variosMestizoFinalEditorialDecisions,
  variosMestizoFinalTargetTaxonomyBySlug,
} from "../../editorial/varios-mestizo-final/universe.mjs";

test("cierra tres URL, transfiere dos y no despublica ninguna", () => {
  assert.deepEqual(assertVariosMestizoFinalUniverse(), {
    inherited: 3,
    canonicalVariosMestizo: 1,
    reviewedRoutes: 3,
    transferredToAndina: 2,
    created: 0,
    unpublished: 0,
    fabricatedCoresRemoved: 2,
    distinctBusCyclesPreserved: 2,
  });
  assert.deepEqual(inheritedVariosMestizoFinalSlugs, [
    "el-bus-fantasma",
    "el-judio-errante",
    "la-viudita",
  ]);
  assert.deepEqual(reviewedVariosMestizoFinalSlugs, inheritedVariosMestizoFinalSlugs);
  assert.deepEqual(canonicalVariosMestizoFinalSlugs, ["el-bus-fantasma"]);
  assert.deepEqual(transferredToAndinaMestizoSlugs, [
    "el-judio-errante",
    "la-viudita",
  ]);
});

test("normaliza Nariño, Boyacá y el residual nacional", () => {
  assert.equal(
    variosMestizoFinalCategoryBySlug["la-viudita"],
    "Andina > Nariño > Mestizo",
  );
  assert.equal(
    variosMestizoFinalCategoryBySlug["el-judio-errante"],
    "Andina > Boyacá > Mestizo",
  );
  assert.equal(
    variosMestizoFinalCategoryBySlug["el-bus-fantasma"],
    "Varios > Varios > Mestizo",
  );
  assert.deepEqual(
    variosMestizoFinalTargetTaxonomyBySlug["la-viudita"],
    { regionSlug: "andina", communitySlug: "mestizo" },
  );
  assert.deepEqual(
    variosMestizoFinalTargetTaxonomyBySlug["el-bus-fantasma"],
    { regionSlug: "varios", communitySlug: "mestizo" },
  );
  assert.equal(
    variosMestizoFinalEditorialDecisions.media.action,
    "prepare-six-openai-flat-paper-cut-images-with-provenance",
  );
});
