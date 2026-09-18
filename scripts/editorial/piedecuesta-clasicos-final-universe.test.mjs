import assert from "node:assert/strict";
import test from "node:test";

import {
  addedPiedecuestaClasicosFinalSlugs,
  assertPiedecuestaClasicosFinalUniverse,
  canonicalPiedecuestaClasicosFinalSlugs,
  inheritedPiedecuestaClasicosFinalSlugs,
  piedecuestaClasicosFinalCategoryBySlug,
  piedecuestaClasicosFinalEditorialDecisions,
  piedecuestaClasicosFinalTargetTaxonomyBySlug,
  reviewedPiedecuestaClasicosFinalSlugs,
  transferredPiedecuestaClasicosFinalSlugs,
} from "../../editorial/piedecuesta-clasicos-final/universe.mjs";

test("conserva tres rutas, transfiere el Silbón e incorpora la Luz", () => {
  assert.deepEqual(assertPiedecuestaClasicosFinalUniverse(), {
    inherited: 3,
    transferred: 1,
    added: 1,
    canonical: 5,
    santander: 5,
    relocatedFromVarios: ["el-silbon"],
    unpublished: 0,
  });
  assert.deepEqual(addedPiedecuestaClasicosFinalSlugs, [
    "la-luz-del-limonal",
  ]);
  assert.deepEqual(transferredPiedecuestaClasicosFinalSlugs, [
    "el-silbon",
  ]);
  assert.equal(inheritedPiedecuestaClasicosFinalSlugs.length, 3);
  assert.deepEqual(
    new Set(reviewedPiedecuestaClasicosFinalSlugs),
    new Set(canonicalPiedecuestaClasicosFinalSlugs),
  );
});

test("ubica las cinco rutas en Santander y prepara diez imágenes", () => {
  assert.deepEqual(
    new Set(Object.values(piedecuestaClasicosFinalCategoryBySlug)),
    new Set(["Andina > Santander > Mestizo"]),
  );
  assert.deepEqual(
    new Set(Object.keys(piedecuestaClasicosFinalTargetTaxonomyBySlug)),
    new Set(reviewedPiedecuestaClasicosFinalSlugs),
  );
  for (const target of Object.values(
    piedecuestaClasicosFinalTargetTaxonomyBySlug,
  )) {
    assert.deepEqual(target, {
      regionSlug: "andina",
      communitySlug: "mestizo",
    });
  }
  assert.equal(
    piedecuestaClasicosFinalEditorialDecisions.media.action,
    "prepare-ten-openai-images-with-provenance",
  );
});
