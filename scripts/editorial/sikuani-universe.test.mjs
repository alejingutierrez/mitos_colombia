import assert from "node:assert/strict";
import test from "node:test";

import {
  addedSikuaniSlugs,
  assertSikuaniUniverse,
  canonicalSikuaniSlugs,
  inheritedSikuaniSlugs,
  sikuaniCategoryBySlug,
  sikuaniEditorialDecisions,
} from "../../editorial/sikuani/universe.mjs";

test("corrige las nueve fichas heredadas y añade Kaliwirnae", () => {
  assert.deepEqual(assertSikuaniUniverse(), {
    inherited: 9,
    canonical: 10,
    corrected: 9,
    added: 1,
    unified: 0,
  });
  assert.equal(inheritedSikuaniSlugs.length, 9);
  assert.deepEqual(addedSikuaniSlugs, [
    "kaliwirnae-el-arbol-de-los-alimentos",
  ]);
  assert.equal(canonicalSikuaniSlugs.length, 10);
  assert.equal(
    sikuaniEditorialDecisions.tigerStories.action,
    "keep-distinct",
  );
});

test("mantiene una taxonomía Sikuani visible y sin duplicados", () => {
  assert.equal(new Set(canonicalSikuaniSlugs).size, 10);
  assert.deepEqual(
    new Set(Object.values(sikuaniCategoryBySlug)),
    new Set(["Orinoquía > Llanos Orientales > Sikuani"]),
  );
  assert.ok(
    inheritedSikuaniSlugs.every((slug) =>
      canonicalSikuaniSlugs.includes(slug),
    ),
  );
});
