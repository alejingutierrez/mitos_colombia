import assert from "node:assert/strict";
import test from "node:test";

import {
  addedMisakSlugs,
  canonicalMisakSlugs,
  inheritedMisakSlugs,
  misakCategoryBySlug,
} from "../../editorial/misak/universe.mjs";

test("conserva exactamente las siete URLs heredadas sin añadir duplicados", () => {
  assert.equal(inheritedMisakSlugs.length, 7);
  assert.deepEqual(addedMisakSlugs, []);
  assert.deepEqual(canonicalMisakSlugs, inheritedMisakSlugs);
  assert.equal(new Set(canonicalMisakSlugs).size, 7);
});

test("conserva la categoría histórica para no romper enlaces", () => {
  assert.deepEqual(
    new Set(Object.values(misakCategoryBySlug)),
    new Set(["Andina > Cauca > Misak - Guambianos"]),
  );
});
