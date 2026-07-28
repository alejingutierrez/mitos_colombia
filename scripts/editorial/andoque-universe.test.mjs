import assert from "node:assert/strict";
import test from "node:test";

import {
  addedAndoqueSlugs,
  assertAndoqueUniverse,
  canonicalAndoqueSlugs,
  inheritedAndoqueSlugs,
  andoqueCategoryBySlug,
  andoqueEditorialDecisions,
} from "../../editorial/andoque/universe.mjs";

test("corrige las once fichas heredadas y añade tres ciclos primarios", () => {
  assert.deepEqual(assertAndoqueUniverse(), {
    inherited: 11,
    canonical: 14,
    corrected: 11,
    added: 3,
    unified: 0,
  });
  assert.equal(inheritedAndoqueSlugs.length, 11);
  assert.deepEqual(addedAndoqueSlugs, [
    "la-guerra-del-palo-hablador",
    "huevo-de-chupaflor-el-diluvio-y-el-fuego",
    "el-aguila-canibal-y-la-madre-de-los-andoques",
  ]);
  assert.equal(canonicalAndoqueSlugs.length, 14);
  assert.equal(
    andoqueEditorialDecisions.plumonStories.action,
    "keep-distinct",
  );
});

test("mantiene una taxonomía Andoque visible y sin duplicados", () => {
  assert.equal(new Set(canonicalAndoqueSlugs).size, 14);
  assert.deepEqual(
    new Set(Object.values(andoqueCategoryBySlug)),
    new Set(["Amazonía > Amazonas > Andoque"]),
  );
  assert.ok(
    inheritedAndoqueSlugs.every((slug) =>
      canonicalAndoqueSlugs.includes(slug),
    ),
  );
});
