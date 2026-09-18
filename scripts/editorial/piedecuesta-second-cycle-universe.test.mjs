import assert from "node:assert/strict";
import test from "node:test";

import {
  addedPiedecuestaSecondCycleSlugs,
  assertPiedecuestaSecondCycleUniverse,
  canonicalPiedecuestaSecondCycleSlugs,
  inheritedPiedecuestaSecondCycleSlugs,
  piedecuestaSecondCycleCategoryBySlug,
  piedecuestaSecondCycleEditorialDecisions,
  piedecuestaSecondCycleTargetTaxonomyBySlug,
  reviewedPiedecuestaSecondCycleSlugs,
} from "../../editorial/piedecuesta-segundo-ciclo/universe.mjs";

test("conserva siete rutas, incorpora la Bruja y corrige el Gritón", () => {
  assert.deepEqual(assertPiedecuestaSecondCycleUniverse(), {
    inherited: 7,
    added: 1,
    canonical: 8,
    santander: 8,
    relocatedFromVarios: ["el-griton"],
    unpublished: 0,
  });
  assert.deepEqual(addedPiedecuestaSecondCycleSlugs, [
    "la-bruja-silbona",
  ]);
  assert.ok(inheritedPiedecuestaSecondCycleSlugs.includes("el-griton"));
  assert.deepEqual(
    new Set(reviewedPiedecuestaSecondCycleSlugs),
    new Set(canonicalPiedecuestaSecondCycleSlugs),
  );
});

test("ubica las ocho rutas en Santander y prepara dieciséis imágenes", () => {
  assert.deepEqual(
    new Set(Object.values(piedecuestaSecondCycleCategoryBySlug)),
    new Set(["Andina > Santander > Mestizo"]),
  );
  assert.deepEqual(
    new Set(Object.keys(piedecuestaSecondCycleTargetTaxonomyBySlug)),
    new Set(reviewedPiedecuestaSecondCycleSlugs),
  );
  for (const target of Object.values(
    piedecuestaSecondCycleTargetTaxonomyBySlug,
  )) {
    assert.deepEqual(target, {
      regionSlug: "andina",
      communitySlug: "mestizo",
    });
  }
  assert.equal(
    piedecuestaSecondCycleEditorialDecisions.media.action,
    "prepare-sixteen-openai-images-with-provenance",
  );
});
