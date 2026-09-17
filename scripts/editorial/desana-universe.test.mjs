import assert from "node:assert/strict";
import test from "node:test";

import {
  addedDesanaSlugs,
  assertDesanaUniverse,
  canonicalDesanaSlugs,
  inheritedDesanaSlugs,
  desanaCategoryBySlug,
  desanaEditorialDecisions,
} from "../../editorial/desana/universe.mjs";

test("corrige tres fichas heredadas y añade cinco ciclos documentados", () => {
  assert.deepEqual(assertDesanaUniverse(), {
    inherited: 3,
    canonical: 8,
    corrected: 3,
    added: 5,
    unified: 1,
  });
  assert.deepEqual(inheritedDesanaSlugs, [
    "creacion-desana",
    "guelamun-ye-el-nieto-del-trueno",
    "yurupari",
  ]);
  assert.deepEqual(addedDesanaSlugs, [
    "el-origen-de-la-noche-desana",
    "nuguye-y-sepiro-fuego-y-creciente",
    "el-origen-de-la-mandioca-desana",
    "gainpaya-y-el-origen-del-chontaduro",
    "agamahsapu-y-el-tiempo-del-umari",
  ]);
  assert.equal(canonicalDesanaSlugs.length, 8);
  assert.equal(
    desanaEditorialDecisions.sensitiveMaterial.action,
    "do-not-adapt-explicit-buhtari-or-operational-ritual-detail",
  );
  assert.equal(
    desanaEditorialDecisions.unification.action,
    "unify-nuguye-and-sepiro-as-one-cataclysm-card",
  );
});

test("mantiene una taxonomía Desana visible y sin duplicados", () => {
  assert.equal(new Set(canonicalDesanaSlugs).size, 8);
  assert.deepEqual(
    new Set(Object.values(desanaCategoryBySlug)),
    new Set(["Amazonía > Vaupés y Alto Río Negro > Desana"]),
  );
  assert.ok(
    inheritedDesanaSlugs.every((slug) =>
      canonicalDesanaSlugs.includes(slug),
    ),
  );
});
