import assert from "node:assert/strict";
import test from "node:test";

import {
  assertCesarMestizoResidualUniverse,
  canonicalCesarMestizoResidualSlugs,
  cesarMestizoResidualCategoryBySlug,
  cesarMestizoResidualEditorialDecisions,
  cesarMestizoResidualTargetTaxonomyBySlug,
  inheritedCesarMestizoResidualSlugs,
} from "../../editorial/cesar-mestizo-residual/universe.mjs";

test("cierra las dos rutas residuales de Cesar Mestizo", () => {
  assert.deepEqual(assertCesarMestizoResidualUniverse(), {
    inherited: 2,
    canonical: 2,
    reviewedRoutes: 2,
    added: 0,
    unpublished: 0,
    inheritedEditorialRowsRevised: 2,
    conflationsCorrected: 1,
  });
  assert.deepEqual(
    new Set(inheritedCesarMestizoResidualSlugs),
    new Set(["la-bruja-del-trinche", "la-sirena-de-hurtado"]),
  );
  assert.deepEqual(
    new Set(canonicalCesarMestizoResidualSlugs),
    new Set(inheritedCesarMestizoResidualSlugs),
  );
});

test("conserva la taxonomía y reemplaza cuatro imágenes físicas", () => {
  for (const slug of canonicalCesarMestizoResidualSlugs) {
    assert.equal(
      cesarMestizoResidualCategoryBySlug[slug],
      "Caribe > Cesar > Mestizo",
    );
    assert.deepEqual(cesarMestizoResidualTargetTaxonomyBySlug[slug], {
      regionSlug: "caribe",
      communitySlug: "mestizo",
    });
  }
  assert.equal(
    cesarMestizoResidualEditorialDecisions.media.action,
    "replace-four-physical-paper-images-with-openai-flat-illustrations",
  );
  assert.match(
    cesarMestizoResidualEditorialDecisions["la-bruja-del-trinche"].reason,
    /Quín Vásquez/,
  );
});
