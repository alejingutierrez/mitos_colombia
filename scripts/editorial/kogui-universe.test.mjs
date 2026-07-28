import assert from "node:assert/strict";
import test from "node:test";

import {
  assertKoguiUniverse,
  canonicalKoguiSlugs,
  inheritedKoguiSlugs,
  koguiCategoryBySlug,
  koguiEditorialDecisions,
} from "../../editorial/kogui/universe.mjs";

test("conserva y corrige las veinte fichas Kogui", () => {
  assert.deepEqual(assertKoguiUniverse(), {
    inherited: 20,
    canonical: 20,
    corrected: 20,
    added: 0,
    unified: 0,
  });
  assert.equal(inheritedKoguiSlugs.length, 20);
  assert.equal(new Set(canonicalKoguiSlugs).size, 20);
  assert.equal(
    koguiEditorialDecisions.additions.action,
    "no-new-page",
  );
});

test("mantiene la ruta y taxonomía Kogui para no romper URLs", () => {
  assert.deepEqual(
    new Set(Object.values(koguiCategoryBySlug)),
    new Set(["Caribe > Magdalena > Koguis"]),
  );
});
