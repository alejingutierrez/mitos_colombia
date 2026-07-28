import assert from "node:assert/strict";
import test from "node:test";

import {
  ansermasCategoryBySlug,
  ansermasContextOnlyNarratives,
  assertAnsermasUniverse,
  canonicalAnsermasSlugs,
  inheritedAnsermasSlugs,
} from "../../editorial/ansermas/universe.mjs";

test("conserva dos URL y convierte el duplicado en una narración recuperada", () => {
  assert.deepEqual(assertAnsermasUniverse(), {
    inherited: 2,
    canonical: 2,
    unifiedDuplicates: 1,
    recoveredNarratives: 1,
    contextualized: 2,
  });
  assert.deepEqual(canonicalAnsermasSlugs, inheritedAnsermasSlugs);
  assert.equal(new Set(canonicalAnsermasSlugs).size, 2);
});

test("mantiene como contexto los datos sin trama autónoma suficiente", () => {
  assert.equal(ansermasContextOnlyNarratives.length, 2);
  assert.ok(
    ansermasContextOnlyNarratives.some(({ title }) =>
      /progenitor del Sol y la Luna/i.test(title),
    ),
  );
  assert.ok(
    ansermasContextOnlyNarratives.some(({ title }) =>
      /Santuarios, jeques/i.test(title),
    ),
  );
});

test("corrige la taxonomía de Caldas a Risaralda", () => {
  assert.deepEqual(
    new Set(Object.values(ansermasCategoryBySlug)),
    new Set(["Andina > Risaralda > Ansermas"]),
  );
});
