import assert from "node:assert/strict";
import test from "node:test";

import {
  assertCuycuyesUniverse,
  canonicalCuycuyesSlugs,
  cuycuyesCategoryBySlug,
  cuycuyesContextOnlyNarratives,
  inheritedCuycuyesSlugs,
} from "../../editorial/cuycuyes/universe.mjs";

test("conserva las dos URL y corrige ambos expedientes sin adiciones débiles", () => {
  assert.deepEqual(assertCuycuyesUniverse(), {
    inherited: 2,
    canonical: 2,
    correctedColonialMistranslations: 1,
    replacedSyntheticStories: 1,
    added: 0,
    contextualized: 2,
  });
  assert.deepEqual(canonicalCuycuyesSlugs, inheritedCuycuyesSlugs);
  assert.equal(new Set(canonicalCuycuyesSlugs).size, 2);
});

test("mantiene como contexto lo que no tiene una trama mítica autónoma", () => {
  assert.equal(cuycuyesContextOnlyNarratives.length, 2);
  assert.ok(
    cuycuyesContextOnlyNarratives.some(({ title }) =>
      /Maitamá y Cirigua/i.test(title),
    ),
  );
  assert.ok(
    cuycuyesContextOnlyNarratives.some(({ title }) =>
      /sacrificio y canibalismo/i.test(title),
    ),
  );
});

test("mantiene la taxonomía histórica en Caldas", () => {
  assert.deepEqual(
    new Set(Object.values(cuycuyesCategoryBySlug)),
    new Set(["Andina > Caldas > Cuycuyes"]),
  );
});
