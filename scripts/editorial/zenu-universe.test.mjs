import assert from "node:assert/strict";
import test from "node:test";

import {
  assertZenuUniverse,
  canonicalZenuSlugs,
  inheritedZenuSlugs,
  reviewedZenuWorklistSlugs,
  transferredZenuSlugs,
  zenuCategoryBySlug,
  zenuContextOnlyNarratives,
  zenuEditorialDecisions,
} from "../../editorial/zenu/universe.mjs";

test("corrige siete rutas Zenú sin despublicar y transfiere Juan Lara", () => {
  assert.deepEqual(assertZenuUniverse(), {
    inherited: 7,
    canonicalZenu: 6,
    correctedZenu: 6,
    transferredToCaribbeanMestizo: 1,
    added: 0,
    unpublished: 0,
    contextualized: 6,
    reviewedRoutes: 7,
  });
  assert.equal(inheritedZenuSlugs.length, 7);
  assert.equal(canonicalZenuSlugs.length, 6);
  assert.deepEqual(transferredZenuSlugs, [
    "juan-lara-y-la-trenza-del-aire",
  ]);
  assert.equal(reviewedZenuWorklistSlugs.length, 7);
  assert.equal(zenuContextOnlyNarratives.length, 6);
  assert.equal(
    zenuEditorialDecisions.media.action,
    "generate-fourteen-new-openai-images-with-provenance",
  );
});

test("deja seis fichas Zenú y mueve Juan Lara a Caribe Mestizo", () => {
  assert.equal(new Set(reviewedZenuWorklistSlugs).size, 7);
  assert.deepEqual(
    new Set(canonicalZenuSlugs.map((slug) => zenuCategoryBySlug[slug])),
    new Set([
      "Caribe > Córdoba > Zenú",
      "Caribe > Sucre > Zenú",
    ]),
  );
  assert.equal(
    zenuCategoryBySlug["juan-lara-y-la-trenza-del-aire"],
    "Caribe > Córdoba > Mestizo",
  );
});
