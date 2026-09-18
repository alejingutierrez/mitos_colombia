import assert from "node:assert/strict";
import test from "node:test";

import {
  boyacaMixtoResidualCategoryBySlug,
  boyacaMixtoResidualEditorialDecisions,
  boyacaMixtoResidualTargetTaxonomyBySlug,
  assertBoyacaMixtoResidualUniverse,
  canonicalBoyacaMixtoResidualSlugs,
  inheritedBoyacaMixtoResidualSlugs,
} from "../../editorial/boyaca-mixto-residual/universe.mjs";

test("cierra las cuatro rutas residuales de Boyacá Mixto", () => {
  assert.deepEqual(assertBoyacaMixtoResidualUniverse(), {
    inherited: 4,
    canonical: 4,
    reviewedRoutes: 4,
    added: 0,
    unpublished: 0,
    unifiedSpreadsheetRows: 9,
  });
  assert.deepEqual(
    new Set(inheritedBoyacaMixtoResidualSlugs),
    new Set([
      "los-mensajeros-de-los-dioses",
      "el-cucacuy",
      "la-sombra-creadora",
      "furatena",
    ]),
  );
  assert.deepEqual(
    new Set(canonicalBoyacaMixtoResidualSlugs),
    new Set(inheritedBoyacaMixtoResidualSlugs),
  );
});

test("conserva taxonomía y prepara ocho imágenes OpenAI", () => {
  for (const slug of canonicalBoyacaMixtoResidualSlugs) {
    assert.equal(
      boyacaMixtoResidualCategoryBySlug[slug],
      "Andina > Boyacá > Mixto",
    );
    assert.deepEqual(boyacaMixtoResidualTargetTaxonomyBySlug[slug], {
      regionSlug: "andina",
      communitySlug: "mixto",
    });
  }
  assert.equal(
    boyacaMixtoResidualEditorialDecisions.media.action,
    "prepare-eight-openai-images-with-provenance",
  );
  assert.match(
    boyacaMixtoResidualEditorialDecisions.taxonomy.reason,
    /comunidad Muzo/,
  );
});
