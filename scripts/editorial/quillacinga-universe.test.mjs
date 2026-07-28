import assert from "node:assert/strict";
import test from "node:test";

import {
  addedQuillacingaSlugs,
  canonicalQuillacingaSlugs,
  inheritedQuillacingaSlugs,
  quillacingaCategoryBySlug,
} from "../../editorial/quillacingas/universe.mjs";

test("conserva dos URLs heredadas y añade cuatro relatos documentados", () => {
  assert.deepEqual(inheritedQuillacingaSlugs, [
    "cualanquizan",
    "el-llamado-de-inti",
  ]);
  assert.deepEqual(addedQuillacingaSlugs, [
    "origen-de-la-isla-la-corota",
    "el-rabo-de-casapamba",
    "creacion-de-los-colibries",
    "sirena-de-la-laguna-de-la-cocha",
  ]);
  assert.deepEqual(canonicalQuillacingaSlugs, [
    ...inheritedQuillacingaSlugs,
    ...addedQuillacingaSlugs,
  ]);
});

test("usa solamente la categoría Quillacingas ya existente", () => {
  assert.deepEqual(
    new Set(Object.values(quillacingaCategoryBySlug)),
    new Set(["Pacífico > Nariño > Quillacingas"]),
  );
});
