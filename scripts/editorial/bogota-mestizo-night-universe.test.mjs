import assert from "node:assert/strict";
import test from "node:test";

import {
  assertBogotaMestizoNightUniverse,
  bogotaMestizoNightCategoryBySlug,
  bogotaMestizoNightEditorialDecisions,
  bogotaMestizoNightTargetTaxonomyBySlug,
  canonicalBogotaMestizoNightSlugs,
  inheritedBogotaMestizoNightSlugs,
  reviewedBogotaMestizoNightSlugs,
} from "../../editorial/bogota-mestizo-nocturno/universe.mjs";

test("conserva y revisa las ocho rutas nocturnas de Bogotá", () => {
  assert.deepEqual(assertBogotaMestizoNightUniverse(), {
    inherited: 8,
    canonical: 8,
    bogota: 8,
    reviewedRoutes: 8,
    unpublished: 0,
  });
  assert.deepEqual(
    new Set(inheritedBogotaMestizoNightSlugs),
    new Set(canonicalBogotaMestizoNightSlugs),
  );
  assert.deepEqual(
    new Set(reviewedBogotaMestizoNightSlugs),
    new Set(canonicalBogotaMestizoNightSlugs),
  );
  assert.deepEqual(
    new Set(Object.values(bogotaMestizoNightCategoryBySlug)),
    new Set(["Andina > Bogotá > Mestizo"]),
  );
});

test("mantiene taxonomía Andina Mestizo y prepara dieciséis imágenes", () => {
  assert.deepEqual(
    new Set(Object.keys(bogotaMestizoNightTargetTaxonomyBySlug)),
    new Set(reviewedBogotaMestizoNightSlugs),
  );
  for (const target of Object.values(
    bogotaMestizoNightTargetTaxonomyBySlug,
  )) {
    assert.deepEqual(target, {
      regionSlug: "andina",
      communitySlug: "mestizo",
    });
  }
  assert.equal(
    bogotaMestizoNightEditorialDecisions.media.action,
    "prepare-sixteen-openai-images-with-provenance",
  );
});
