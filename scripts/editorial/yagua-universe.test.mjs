import assert from "node:assert/strict";
import test from "node:test";

import {
  addedYaguaSlugs,
  assertYaguaUniverse,
  canonicalYaguaSlugs,
  inheritedYaguaSlugs,
  yaguaCategoryBySlug,
  yaguaContextOnlyNarratives,
  yaguaEditorialDecisions,
} from "../../editorial/yagua/universe.mjs";

test("corrige el universo Yagua sin fragmentar episodios ni despublicar", () => {
  assert.deepEqual(assertYaguaUniverse(), {
    inherited: 1,
    corrected: 1,
    added: 5,
    canonical: 6,
    contextualized: 3,
    inheritedConflationsRemoved: 5,
  });
  assert.deepEqual(inheritedYaguaSlugs, ["yagua"]);
  assert.deepEqual(addedYaguaSlugs, [
    "el-calvito-yagua",
    "el-huerfano-yagua",
    "los-mellizos-de-avispa-yagua",
    "luna-y-sol-yagua",
    "tortuga-y-jaguar-yagua",
  ]);
  assert.equal(canonicalYaguaSlugs.length, 6);
  assert.equal(yaguaContextOnlyNarratives.length, 3);
  assert.equal(
    yaguaEditorialDecisions.media.action,
    "generate-twelve-new-openai-images-with-provenance",
  );
});

test("mantiene una taxonomía Yagua única", () => {
  assert.equal(new Set(canonicalYaguaSlugs).size, 6);
  assert.deepEqual(
    new Set(Object.values(yaguaCategoryBySlug)),
    new Set(["Amazonía > Amazonas > Yaguas"]),
  );
});
