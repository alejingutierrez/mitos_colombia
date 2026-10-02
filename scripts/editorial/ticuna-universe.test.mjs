import assert from "node:assert/strict";
import test from "node:test";

import {
  addedTicunaSlugs,
  assertTicunaUniverse,
  canonicalTicunaSlugs,
  inheritedTicunaSlugs,
  ticunaCategoryBySlug,
  ticunaEditorialDecisions,
} from "../../editorial/ticuna/universe.mjs";

test("corrige dos fichas Ticuna y añade cuatro relatos atribuidos", () => {
  assert.deepEqual(assertTicunaUniverse(), {
    inherited: 2,
    canonical: 6,
    corrected: 2,
    added: 4,
    unified: 0,
  });
  assert.deepEqual(inheritedTicunaSlugs, [
    "creacion",
    "el-combate-del-sueno-y-la-palabra",
  ]);
  assert.deepEqual(addedTicunaSlugs, [
    "origen-del-sol-tikuna",
    "origen-de-la-luna-tikuna",
    "origen-del-friaje-tikuna",
    "la-canoa-de-moe",
  ]);
  assert.equal(canonicalTicunaSlugs.length, 6);
  assert.equal(
    ticunaEditorialDecisions.media.action,
    "generate-twelve-new-openai-images-with-provenance",
  );
});

test("mantiene una taxonomía Ticuna única y visible", () => {
  assert.equal(new Set(canonicalTicunaSlugs).size, 6);
  assert.deepEqual(
    new Set(Object.values(ticunaCategoryBySlug)),
    new Set(["Amazonía > Amazonas > Ticuna"]),
  );
});
