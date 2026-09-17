import assert from "node:assert/strict";
import test from "node:test";

import {
  addedPananSlugs,
  canonicalPananSlugs,
  inheritedPananSlugs,
  pananCategoryBySlug,
} from "../../editorial/panan/universe.mjs";

test("conserva quince URLs y añade únicamente Guamurran", () => {
  assert.equal(inheritedPananSlugs.length, 15);
  assert.deepEqual(addedPananSlugs, ["guamurran-madre-de-agua"]);
  assert.deepEqual(canonicalPananSlugs, [
    ...inheritedPananSlugs,
    ...addedPananSlugs,
  ]);
  assert.equal(new Set(canonicalPananSlugs).size, 16);
});

test("usa solamente la categoría Pananes ya existente", () => {
  assert.deepEqual(
    new Set(Object.values(pananCategoryBySlug)),
    new Set(["Pacífico > Nariño > Pananes"]),
  );
});
