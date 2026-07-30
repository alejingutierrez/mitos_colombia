import assert from "node:assert/strict";
import test from "node:test";

import {
  assertPiedecuestaEspantosUniverse,
  canonicalPiedecuestaEspantosSlugs,
  inheritedPiedecuestaEspantosSlugs,
  piedecuestaEspantosCategoryBySlug,
  piedecuestaEspantosEditorialDecisions,
  piedecuestaEspantosTargetTaxonomyBySlug,
  reviewedPiedecuestaEspantosSlugs,
} from "../../editorial/piedecuesta-espantos-y-entierros/universe.mjs";

test("conserva y revisa ocho rutas de Piedecuesta", () => {
  assert.deepEqual(assertPiedecuestaEspantosUniverse(), {
    inherited: 8,
    canonical: 8,
    santander: 8,
    reviewedRoutes: 8,
    unpublished: 0,
  });
  assert.deepEqual(
    new Set(inheritedPiedecuestaEspantosSlugs),
    new Set(canonicalPiedecuestaEspantosSlugs),
  );
  assert.deepEqual(
    new Set(reviewedPiedecuestaEspantosSlugs),
    new Set(canonicalPiedecuestaEspantosSlugs),
  );
  assert.deepEqual(
    new Set(Object.values(piedecuestaEspantosCategoryBySlug)),
    new Set(["Andina > Santander > Mestizo"]),
  );
});

test("mantiene taxonomía Andina Mestizo y prepara dieciséis imágenes", () => {
  assert.deepEqual(
    new Set(Object.keys(piedecuestaEspantosTargetTaxonomyBySlug)),
    new Set(reviewedPiedecuestaEspantosSlugs),
  );
  for (const target of Object.values(
    piedecuestaEspantosTargetTaxonomyBySlug,
  )) {
    assert.deepEqual(target, {
      regionSlug: "andina",
      communitySlug: "mestizo",
    });
  }
  assert.equal(
    piedecuestaEspantosEditorialDecisions.media.action,
    "prepare-sixteen-openai-images-with-provenance",
  );
});
