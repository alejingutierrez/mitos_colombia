import assert from "node:assert/strict";
import test from "node:test";

import {
  addedBariSlugs,
  assertBariUniverse,
  bariCategoryBySlug,
  bariContextOnlyNarratives,
  bariUnifications,
  canonicalBariSlugs,
  inheritedBariSlugs,
} from "../../editorial/bari/universe.mjs";

test("define un universo Barí acotado de seis páginas", () => {
  assert.deepEqual(assertBariUniverse(), {
    inherited: 1,
    added: 5,
    canonical: 6,
    unifications: 2,
    contextualized: 3,
  });
  assert.equal(inheritedBariSlugs.length, 1);
  assert.equal(addedBariSlugs.length, 5);
  assert.equal(new Set(canonicalBariSlugs).size, 6);
});

test("unifica las variantes repetidas y no infla episodios débiles", () => {
  assert.equal(
    bariUnifications["el-dia-en-que-la-luna-y-la-tierra-se-separaron"]
      .incorporated,
    "los-bari-que-bajaron-del-cielo",
  );
  assert.equal(
    bariUnifications["el-gran-arbol-que-hizo-los-rios"].incorporated,
    "antiguamente-no-existia-agua",
  );
  assert.equal(bariContextOnlyNarratives.length, 3);
  assert.ok(
    bariContextOnlyNarratives.some(
      ({ title, destination }) =>
        title === "La historia del monito Pwácari" && destination === null,
    ),
  );
});

test("conserva la taxonomía histórica sin crear una nueva categoría", () => {
  assert.deepEqual(
    new Set(Object.values(bariCategoryBySlug)),
    new Set(["Andina > Santander > Motilón-Barí"]),
  );
});
