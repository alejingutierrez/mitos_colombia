import assert from "node:assert/strict";
import test from "node:test";

import {
  addedNukakSlugs,
  assertNukakUniverse,
  canonicalNukakSlugs,
  inheritedNukakSlugs,
  nukakCategoryBySlug,
  nukakEditorialDecisions,
} from "../../editorial/nukak/universe.mjs";

test("corrige una ficha Nukak sin fragmentar ni añadir ciclos débiles", () => {
  assert.deepEqual(assertNukakUniverse(), {
    inherited: 1,
    canonical: 1,
    corrected: 1,
    added: 0,
    unified: 0,
  });
  assert.deepEqual(inheritedNukakSlugs, ["creacion-nukak-maku"]);
  assert.deepEqual(addedNukakSlugs, []);
  assert.deepEqual(canonicalNukakSlugs, ["creacion-nukak-maku"]);
  assert.equal(
    nukakEditorialDecisions.additions.action,
    "do-not-fragment-or-add-weakly-documented-pages",
  );
  assert.equal(
    nukakEditorialDecisions.media.action,
    "replace-two-conflated-physical-looking-images",
  );
});

test("mantiene la taxonomía heredada y el slug público", () => {
  assert.equal(
    nukakCategoryBySlug["creacion-nukak-maku"],
    "Amazonas > Guaviare > Nukak Makú",
  );
});
