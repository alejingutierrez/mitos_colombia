import assert from "node:assert/strict";
import test from "node:test";

import {
  absorbedFromAfricanoSlugs,
  addedAfrocolombianSlugs,
  afrocolombianCategoryBySlug,
  afrocolombianEditorialDecisions,
  assertAfrocolombianUniverse,
  canonicalAfrocolombianSlugs,
  inheritedAfrocolombianSlugs,
  reviewedAfrocolombianWorklistSlugs,
  transferredFromMixtoSlugs,
} from "../../editorial/afrocolombianos/universe.mjs";

test("define seis fichas Afrocolombianas sin despublicar", () => {
  assert.deepEqual(assertAfrocolombianUniverse(), {
    inheritedAfrocolombianos: 2,
    absorbedFromAfricano: 2,
    transferredFromMixto: 1,
    added: 1,
    canonical: 6,
    reviewedRoutes: 6,
    unpublished: 0,
    transferredChimbilacoToYagua: 1,
    contextualized: 3,
  });
  assert.equal(inheritedAfrocolombianSlugs.length, 2);
  assert.equal(absorbedFromAfricanoSlugs.length, 2);
  assert.deepEqual(transferredFromMixtoSlugs, [
    "el-riviel-del-rosario",
  ]);
  assert.deepEqual(addedAfrocolombianSlugs, [
    "como-aparecio-la-muerte-en-el-choco",
  ]);
  assert.deepEqual(
    canonicalAfrocolombianSlugs,
    reviewedAfrocolombianWorklistSlugs,
  );
});

test("corrige taxonomía Africano y Mixto sin perder URLs", () => {
  assert.equal(canonicalAfrocolombianSlugs.length, 6);
  assert.ok(
    Object.values(afrocolombianCategoryBySlug).every((path) =>
      path.endsWith("> Afrocolombianos"),
    ),
  );
  assert.equal(
    afrocolombianEditorialDecisions.taxonomy.action,
    "unify-africano-into-afrocolombianos",
  );
  assert.equal(
    afrocolombianEditorialDecisions.media.action,
    "generate-twelve-new-openai-images-with-provenance",
  );
});
