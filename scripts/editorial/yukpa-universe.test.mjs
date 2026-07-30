import assert from "node:assert/strict";
import test from "node:test";

import {
  addedYukpaSlugs,
  assertYukpaUniverse,
  canonicalYukpaSlugs,
  inheritedYukpaSlugs,
  yukpaCategoryBySlug,
  yukpaContextOnlyNarratives,
  yukpaEditorialDecisions,
} from "../../editorial/yukpa/universe.mjs";

test("corrige dos rutas Yukpa y añade tres ciclos documentados", () => {
  assert.deepEqual(assertYukpaUniverse(), {
    inherited: 2,
    canonical: 5,
    corrected: 2,
    added: 3,
    unpublished: 0,
    contextualized: 3,
  });
  assert.deepEqual(inheritedYukpaSlugs, [
    "la-piedra-que-flota",
    "los-dos-caminos-del-cielo",
  ]);
  assert.deepEqual(addedYukpaSlugs, [
    "aponto-y-el-arbol-manurhacha",
    "los-gemelos-yirhwach-y-las-constelaciones",
    "me-el-dueno-del-maiz",
  ]);
  assert.equal(canonicalYukpaSlugs.length, 5);
  assert.equal(yukpaContextOnlyNarratives.length, 3);
  assert.equal(
    yukpaEditorialDecisions.media.action,
    "generate-ten-new-openai-images-with-provenance",
  );
});

test("mantiene las cinco fichas en la taxonomía Yukpa del Cesar", () => {
  assert.equal(new Set(canonicalYukpaSlugs).size, 5);
  assert.deepEqual(
    new Set(canonicalYukpaSlugs.map((slug) => yukpaCategoryBySlug[slug])),
    new Set(["Caribe > Cesar > Yukpa"]),
  );
});
