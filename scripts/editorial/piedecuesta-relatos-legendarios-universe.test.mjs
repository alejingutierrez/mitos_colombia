import assert from "node:assert/strict";
import test from "node:test";

import {
  assertPiedecuestaLegendaryAccountsUniverse,
  canonicalPiedecuestaLegendaryAccountsSlugs,
  inheritedPiedecuestaLegendaryAccountsSlugs,
  piedecuestaLegendaryAccountsCategoryBySlug,
  piedecuestaLegendaryAccountsEditorialDecisions,
  piedecuestaLegendaryAccountsTargetTaxonomyBySlug,
  reviewedPiedecuestaLegendaryAccountsSlugs,
} from "../../editorial/piedecuesta-relatos-legendarios/universe.mjs";

test("conserva las cuatro rutas heredadas sin añadir ni despublicar", () => {
  assert.deepEqual(assertPiedecuestaLegendaryAccountsUniverse(), {
    inherited: 4,
    added: 0,
    transferred: 0,
    canonical: 4,
    santander: 4,
    unpublished: 0,
  });
  assert.deepEqual(
    reviewedPiedecuestaLegendaryAccountsSlugs,
    canonicalPiedecuestaLegendaryAccountsSlugs,
  );
  assert.deepEqual(
    inheritedPiedecuestaLegendaryAccountsSlugs,
    canonicalPiedecuestaLegendaryAccountsSlugs,
  );
});

test("ubica las rutas en Santander y prepara ocho imágenes", () => {
  assert.deepEqual(
    new Set(Object.values(piedecuestaLegendaryAccountsCategoryBySlug)),
    new Set(["Andina > Santander > Mestizo"]),
  );
  assert.deepEqual(
    new Set(Object.keys(piedecuestaLegendaryAccountsTargetTaxonomyBySlug)),
    new Set(reviewedPiedecuestaLegendaryAccountsSlugs),
  );
  for (const target of Object.values(
    piedecuestaLegendaryAccountsTargetTaxonomyBySlug,
  )) {
    assert.deepEqual(target, {
      regionSlug: "andina",
      communitySlug: "mestizo",
    });
  }
  assert.equal(
    piedecuestaLegendaryAccountsEditorialDecisions.media.action,
    "prepare-eight-openai-images-with-provenance",
  );
});
