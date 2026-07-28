import assert from "node:assert/strict";
import test from "node:test";

import {
  addedAwaSlugs,
  canonicalAwaSlugs,
  awaCategoryBySlug,
  replacedSyntheticAwaSlugs,
} from "../../editorial/awa/universe.mjs";

test("conserva las dos URLs heredadas y reemplaza sus tramas sintéticas", () => {
  assert.deepEqual(canonicalAwaSlugs, [
    "barbachas-del-arbol-grande",
    "guagaja",
  ]);
  assert.deepEqual(addedAwaSlugs, []);
  assert.deepEqual(replacedSyntheticAwaSlugs, [
    "barbachas-del-arbol-grande",
    "guagaja",
  ]);
});

test("usa solamente la categoría Awa ya existente", () => {
  assert.deepEqual(
    new Set(Object.values(awaCategoryBySlug)),
    new Set(["Pacífico > Nariño > Awa"]),
  );
});
