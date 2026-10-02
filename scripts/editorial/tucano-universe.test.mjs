import assert from "node:assert/strict";
import test from "node:test";

import {
  addedTucanoSlugs,
  assertTucanoUniverse,
  canonicalTucanoSlugs,
  transferredFromTucanoSlugs,
  tucanoCategoryBySlug,
  tucanoEditorialDecisions,
} from "../../editorial/tucano/universe.mjs";

test("corrige el universo Tucano sin despublicar las atribuciones dudosas", () => {
  assert.deepEqual(assertTucanoUniverse(), {
    inherited: 8,
    transferred: 2,
    retained: 6,
    added: 1,
    canonical: 7,
    reassignedDuplicate: 1,
    contextualized: 2,
  });
  assert.deepEqual(transferredFromTucanoSlugs, [
    "el-descubrimiento-del-agua-y-los-peces",
    "el-hijo-de-tuhixana",
  ]);
  assert.deepEqual(addedTucanoSlugs, ["la-semilla-de-la-yuca-tucano"]);
  assert.equal(canonicalTucanoSlugs.length, 7);
  assert.equal(
    tucanoEditorialDecisions.media.action,
    "generate-fourteen-new-openai-images-with-provenance",
  );
});

test("mantiene una taxonomía Tucano única", () => {
  assert.equal(new Set(canonicalTucanoSlugs).size, 7);
  assert.deepEqual(
    new Set(Object.values(tucanoCategoryBySlug)),
    new Set(["Amazonía > Vaupés > Tucano"]),
  );
});
