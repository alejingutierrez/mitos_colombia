import assert from "node:assert/strict";
import test from "node:test";

import {
  addedPiedecuestaVicenteArenasISlugs,
  assertPiedecuestaVicenteArenasIUniverse,
  canonicalPiedecuestaVicenteArenasISlugs,
  inheritedPiedecuestaVicenteArenasISlugs,
  piedecuestaVicenteArenasICategoryBySlug,
  piedecuestaVicenteArenasIEditorialDecisions,
  piedecuestaVicenteArenasITargetTaxonomyBySlug,
  reviewedPiedecuestaVicenteArenasISlugs,
} from "../../editorial/piedecuesta-vicente-arenas-i/universe.mjs";

test("conserva siete rutas e incorpora la Llorona del Molino", () => {
  assert.deepEqual(assertPiedecuestaVicenteArenasIUniverse(), {
    inherited: 7,
    added: 1,
    canonical: 8,
    santander: 8,
    unpublished: 0,
  });
  assert.deepEqual(addedPiedecuestaVicenteArenasISlugs, [
    "la-llorona-del-molino",
  ]);
  assert.equal(inheritedPiedecuestaVicenteArenasISlugs.length, 7);
  assert.deepEqual(
    new Set(reviewedPiedecuestaVicenteArenasISlugs),
    new Set(canonicalPiedecuestaVicenteArenasISlugs),
  );
});

test("ubica las ocho rutas en Santander y prepara dieciséis imágenes", () => {
  assert.deepEqual(
    new Set(Object.values(piedecuestaVicenteArenasICategoryBySlug)),
    new Set(["Andina > Santander > Mestizo"]),
  );
  assert.deepEqual(
    new Set(Object.keys(piedecuestaVicenteArenasITargetTaxonomyBySlug)),
    new Set(reviewedPiedecuestaVicenteArenasISlugs),
  );
  for (const target of Object.values(
    piedecuestaVicenteArenasITargetTaxonomyBySlug,
  )) {
    assert.deepEqual(target, {
      regionSlug: "andina",
      communitySlug: "mestizo",
    });
  }
  assert.equal(
    piedecuestaVicenteArenasIEditorialDecisions.media.action,
    "prepare-sixteen-openai-images-with-provenance",
  );
});
