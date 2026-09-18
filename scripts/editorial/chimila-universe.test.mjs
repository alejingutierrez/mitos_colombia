import assert from "node:assert/strict";
import test from "node:test";

import {
  addedChimilaSlugs,
  assertChimilaUniverse,
  canonicalChimilaSlugs,
  chimilaCategoryBySlug,
  inheritedChimilaSlugs,
} from "../../editorial/chimila/universe.mjs";

test("conserva el corpus de 1945 e incorpora dos cosmogonías vivas", () => {
  assert.deepEqual(assertChimilaUniverse(), {
    inherited: 21,
    canonical: 23,
    corrected: 21,
    added: 2,
    unified: 0,
  });
  assert.equal(inheritedChimilaSlugs.length, 21);
  assert.deepEqual(addedChimilaSlugs, [
    "yunari-y-las-cinco-tierras",
    "yaau-numirinta-y-las-dos-mazorcas",
  ]);
  assert.equal(new Set(canonicalChimilaSlugs).size, 23);
});

test("mantiene la ruta y taxonomía Chimila para no romper URLs", () => {
  assert.deepEqual(
    new Set(Object.values(chimilaCategoryBySlug)),
    new Set(["Caribe > Magdalena > Chimila"]),
  );
});
