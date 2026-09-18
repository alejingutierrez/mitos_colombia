import assert from "node:assert/strict";
import test from "node:test";

import {
  antioquiaMixtoResidualCategoryBySlug,
  antioquiaMixtoResidualEditorialDecisions,
  antioquiaMixtoResidualTargetTaxonomyBySlug,
  assertAntioquiaMixtoResidualUniverse,
  canonicalAntioquiaMixtoResidualSlugs,
  inheritedAntioquiaMixtoResidualSlugs,
} from "../../editorial/antioquia-mixto-residual/universe.mjs";

test("cierra las dos rutas residuales de Antioquia Mixto", () => {
  assert.deepEqual(assertAntioquiaMixtoResidualUniverse(), {
    inherited: 2,
    canonical: 2,
    reviewedRoutes: 2,
    added: 0,
    unpublished: 0,
  });
  assert.deepEqual(
    new Set(inheritedAntioquiaMixtoResidualSlugs),
    new Set(["el-patetarro", "el-mareco"]),
  );
  assert.deepEqual(
    new Set(canonicalAntioquiaMixtoResidualSlugs),
    new Set(inheritedAntioquiaMixtoResidualSlugs),
  );
});

test("conserva taxonomía Mixto y prepara cuatro imágenes OpenAI", () => {
  for (const slug of canonicalAntioquiaMixtoResidualSlugs) {
    assert.equal(
      antioquiaMixtoResidualCategoryBySlug[slug],
      "Andina > Antioquia > Mixto",
    );
    assert.deepEqual(antioquiaMixtoResidualTargetTaxonomyBySlug[slug], {
      regionSlug: "andina",
      communitySlug: "mixto",
    });
  }
  assert.equal(
    antioquiaMixtoResidualEditorialDecisions.media.action,
    "prepare-four-openai-images-with-provenance",
  );
});
