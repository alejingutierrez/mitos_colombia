import assert from "node:assert/strict";
import test from "node:test";

import {
  amazonasMixtoResidualCategoryBySlug,
  amazonasMixtoResidualEditorialDecisions,
  amazonasMixtoResidualTargetTaxonomyBySlug,
  assertAmazonasMixtoResidualUniverse,
  canonicalAmazonasMixtoResidualSlugs,
  inheritedAmazonasMixtoResidualSlugs,
  reviewedAmazonasMixtoResidualSlugs,
  transferredToTicunaSlugs,
  transferredToUfainaSlugs,
} from "../../editorial/amazonas-mixto-residual/universe.mjs";

test("conserva doce URL y transfiere tres sin altas ni bajas", () => {
  assert.deepEqual(assertAmazonasMixtoResidualUniverse(), {
    inherited: 12,
    canonicalMixed: 9,
    transferredToTicuna: 2,
    transferredToUfaina: 1,
    reviewedRoutes: 12,
    created: 0,
    unpublished: 0,
  });
  assert.equal(inheritedAmazonasMixtoResidualSlugs.length, 12);
  assert.equal(reviewedAmazonasMixtoResidualSlugs.length, 12);
  assert.equal(canonicalAmazonasMixtoResidualSlugs.length, 9);
  assert.deepEqual(transferredToTicunaSlugs, [
    "ngutapa-y-chimuiyae",
    "petapeta",
  ]);
  assert.deepEqual(transferredToUfainaSlugs, [
    "el-descubrimiento-del-agua-y-los-peces",
  ]);
});

test("define taxonomía individual y veinticuatro imágenes OpenAI", () => {
  assert.equal(
    amazonasMixtoResidualCategoryBySlug.petapeta,
    "Amazonía > Amazonas > Ticuna",
  );
  assert.equal(
    amazonasMixtoResidualCategoryBySlug[
      "el-descubrimiento-del-agua-y-los-peces"
    ],
    "Amazonía > Amazonas > Ufaina",
  );
  assert.deepEqual(
    amazonasMixtoResidualTargetTaxonomyBySlug.yacuruna,
    { regionSlug: "amazonas", communitySlug: "mixto" },
  );
  assert.equal(
    amazonasMixtoResidualEditorialDecisions.media.action,
    "prepare-twenty-four-openai-images-with-provenance",
  );
});
