import assert from "node:assert/strict";
import test from "node:test";

import {
  assertBogotaMestizoMemoryUniverse,
  bogotaMestizoMemoryCategoryBySlug,
  bogotaMestizoMemoryCategorySlugs,
  bogotaMestizoMemoryEditorialDecisions,
  bogotaMestizoMemoryTargetTaxonomyBySlug,
  canonicalBogotaMestizoMemorySlugs,
  inheritedBogotaMestizoMemorySlugs,
  relocatedCundinamarcaSlugs,
  reviewedBogotaMestizoMemorySlugs,
} from "../../editorial/bogota-mestizo-memoria/universe.mjs";

test("conserva ocho rutas y relocaliza el Puente del Común", () => {
  assert.deepEqual(assertBogotaMestizoMemoryUniverse(), {
    inherited: 8,
    canonical: 8,
    bogota: 7,
    relocatedToAndinaVarios: 1,
    reviewedRoutes: 8,
    unpublished: 0,
  });
  assert.deepEqual(
    new Set(inheritedBogotaMestizoMemorySlugs),
    new Set(canonicalBogotaMestizoMemorySlugs),
  );
  assert.deepEqual(
    new Set(reviewedBogotaMestizoMemorySlugs),
    new Set(canonicalBogotaMestizoMemorySlugs),
  );
  assert.deepEqual(relocatedCundinamarcaSlugs, [
    "el-diablo-del-puente-del-comun",
  ]);
  assert.equal(bogotaMestizoMemoryCategorySlugs.length, 7);
  assert.equal(
    bogotaMestizoMemoryCategoryBySlug["el-diablo-del-puente-del-comun"],
    "Andina > Varios > Mestizo",
  );
});

test("mantiene taxonomía Andina Mestizo y prepara dieciséis imágenes", () => {
  assert.deepEqual(
    new Set(Object.keys(bogotaMestizoMemoryTargetTaxonomyBySlug)),
    new Set(reviewedBogotaMestizoMemorySlugs),
  );
  for (const target of Object.values(
    bogotaMestizoMemoryTargetTaxonomyBySlug,
  )) {
    assert.deepEqual(target, {
      regionSlug: "andina",
      communitySlug: "mestizo",
    });
  }
  assert.equal(
    bogotaMestizoMemoryEditorialDecisions.media.action,
    "prepare-sixteen-openai-images-with-provenance",
  );
});
