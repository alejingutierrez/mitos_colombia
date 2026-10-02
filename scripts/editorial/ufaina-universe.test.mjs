import assert from "node:assert/strict";
import test from "node:test";

import {
  addedUfainaSlugs,
  assertUfainaUniverse,
  canonicalUfainaSlugs,
  ufainaCategoryBySlug,
  ufainaEditorialDecisions,
} from "../../editorial/ufaina/universe.mjs";

test("conserva el ciclo Ufaina continuo sin fragmentarlo artificialmente", () => {
  assert.deepEqual(assertUfainaUniverse(), {
    inherited: 1,
    canonical: 1,
    corrected: 1,
    added: 0,
    editorialChaptersUnified: 44,
    contextualized: 2,
  });
  assert.deepEqual(addedUfainaSlugs, []);
  assert.deepEqual(canonicalUfainaSlugs, ["creacion-ufaina"]);
  assert.equal(
    ufainaEditorialDecisions.additions.action,
    "do-not-fragment-forty-four-editorial-chapters",
  );
  assert.equal(
    ufainaEditorialDecisions.restrictedMaterial.action,
    "exclude-yurupari-and-operational-knowledge",
  );
});

test("mantiene una taxonomía Ufaina única", () => {
  assert.deepEqual(
    new Set(Object.values(ufainaCategoryBySlug)),
    new Set(["Amazonía > Amazonas > Ufaina"]),
  );
});
