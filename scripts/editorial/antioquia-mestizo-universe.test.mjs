import assert from "node:assert/strict";
import test from "node:test";

import {
  antioquiaMestizoCategoryBySlug,
  antioquiaMestizoCategorySlugs,
  antioquiaMestizoEditorialDecisions,
  antioquiaMestizoTargetTaxonomyBySlug,
  assertAntioquiaMestizoUniverse,
  canonicalAntioquiaMestizoSlugs,
  inheritedAntioquiaMestizoSlugs,
  relocatedCaldasSlugs,
  reviewedAntioquiaMestizoSlugs,
} from "../../editorial/antioquia-mestizo/universe.mjs";

test("conserva diez rutas y relocaliza la leyenda de Arma", () => {
  assert.deepEqual(assertAntioquiaMestizoUniverse(), {
    inherited: 10,
    canonical: 10,
    antioquia: 9,
    relocatedToCaldas: 1,
    reviewedRoutes: 10,
    unpublished: 0,
  });
  assert.deepEqual(
    new Set(inheritedAntioquiaMestizoSlugs),
    new Set(canonicalAntioquiaMestizoSlugs),
  );
  assert.deepEqual(
    new Set(reviewedAntioquiaMestizoSlugs),
    new Set(canonicalAntioquiaMestizoSlugs),
  );
  assert.deepEqual(relocatedCaldasSlugs, [
    "no-hay-deuda-que-no-se-pague",
  ]);
  assert.equal(antioquiaMestizoCategorySlugs.length, 9);
  assert.equal(
    antioquiaMestizoCategoryBySlug["no-hay-deuda-que-no-se-pague"],
    "Andina > Caldas > Mestizo",
  );
});

test("mantiene taxonomía Andina Mestizo y prepara veinte imágenes", () => {
  assert.deepEqual(
    new Set(Object.keys(antioquiaMestizoTargetTaxonomyBySlug)),
    new Set(reviewedAntioquiaMestizoSlugs),
  );
  for (const target of Object.values(
    antioquiaMestizoTargetTaxonomyBySlug,
  )) {
    assert.deepEqual(target, {
      regionSlug: "andina",
      communitySlug: "mestizo",
    });
  }
  assert.equal(
    antioquiaMestizoEditorialDecisions.media.action,
    "prepare-twenty-openai-images-with-provenance",
  );
});
