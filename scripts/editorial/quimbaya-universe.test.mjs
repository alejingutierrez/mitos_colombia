import assert from "node:assert/strict";
import test from "node:test";

import {
  addedQuimbayaSlugs,
  assertQuimbayaUniverse,
  canonicalQuimbayaSlugs,
  inheritedQuimbayaSlugs,
  quimbayaCategoryBySlug,
  quimbayaContextOnlyNarratives,
} from "../../editorial/quimbaya/universe.mjs";

test("conserva dos URL Quimbaya e incorpora un relato documentado", () => {
  assert.deepEqual(assertQuimbayaUniverse(), {
    inherited: 2,
    canonical: 3,
    replacedSyntheticStories: 1,
    identifiedModernLiteraryLegends: 1,
    added: 1,
    contextualized: 3,
  });
  assert.deepEqual(inheritedQuimbayaSlugs, ["batatabati", "ipiare-ebachi"]);
  assert.deepEqual(addedQuimbayaSlugs, ["nabsacadas-la-estrella-caida"]);
  assert.equal(new Set(canonicalQuimbayaSlugs).size, 3);
});

test("mantiene como contexto lo que todavía no justifica una ficha", () => {
  assert.equal(quimbayaContextOnlyNarratives.length, 3);
  assert.ok(
    quimbayaContextOnlyNarratives.some(({ title }) => /Consota/i.test(title)),
  );
  assert.ok(
    quimbayaContextOnlyNarratives.some(({ title }) => /Tacurumbí/i.test(title)),
  );
  assert.ok(
    quimbayaContextOnlyNarratives.some(({ title }) => /Bochica/i.test(title)),
  );
});

test("conserva la categoría histórica disponible", () => {
  assert.deepEqual(
    new Set(Object.values(quimbayaCategoryBySlug)),
    new Set(["Andina > Caldas > Quimbaya"]),
  );
});
