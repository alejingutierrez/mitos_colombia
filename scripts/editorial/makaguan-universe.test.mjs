import assert from "node:assert/strict";
import test from "node:test";

import {
  assertMakaguanUniverse,
  canonicalMakaguanSlugs,
  inheritedMakaguanSlugs,
  makaguanCategoryBySlug,
  makaguanEditorialDecisions,
} from "../../editorial/makaguan/universe.mjs";

test("conserva exactamente los dos mitos y la leyenda de El Vigía", () => {
  assert.deepEqual(assertMakaguanUniverse(), {
    inherited: 3,
    canonical: 3,
    corrected: 3,
    added: 0,
    unified: 0,
  });
  assert.equal(inheritedMakaguanSlugs.length, 3);
  assert.equal(new Set(canonicalMakaguanSlugs).size, 3);
  assert.equal(
    makaguanEditorialDecisions.additions.action,
    "no-new-page",
  );
});

test("mantiene las rutas y actualiza la taxonomía visible a Makaguán", () => {
  assert.deepEqual(
    new Set(Object.values(makaguanCategoryBySlug)),
    new Set(["Orinoquía > Arauca > Makaguán"]),
  );
});
