import assert from "node:assert/strict";
import test from "node:test";

import {
  addedUmbraSlugs,
  assertUmbraUniverse,
  canonicalUmbraSlugs,
  inheritedUmbraSlugs,
  umbraCategoryBySlug,
  umbraContextOnlyNarratives,
} from "../../editorial/umbra/universe.mjs";

test("conserva la URL de Tasime e incorpora Batero con atribución", () => {
  assert.deepEqual(assertUmbraUniverse(), {
    inherited: 1,
    canonical: 2,
    corrected: 1,
    added: 1,
    contextualized: 3,
  });
  assert.deepEqual(inheritedUmbraSlugs, ["tasime-el-incesto"]);
  assert.deepEqual(addedUmbraSlugs, [
    "los-jeques-que-desaparecieron-en-batero",
  ]);
  assert.equal(new Set(canonicalUmbraSlugs).size, 2);
});

test("mantiene como contexto los relatos que todavía no justifican ficha", () => {
  assert.equal(umbraContextOnlyNarratives.length, 3);
  assert.ok(
    umbraContextOnlyNarratives.some(({ title }) => /Sausagua/i.test(title)),
  );
  assert.ok(
    umbraContextOnlyNarratives.some(({ title }) => /Taramakunga/i.test(title)),
  );
  assert.ok(
    umbraContextOnlyNarratives.some(({ title }) => /Michua/i.test(title)),
  );
});

test("conserva la categoría heredada y documenta el alcance territorial", () => {
  assert.deepEqual(
    new Set(Object.values(umbraCategoryBySlug)),
    new Set(["Andina > Caldas > Umbra"]),
  );
});
