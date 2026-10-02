import assert from "node:assert/strict";
import test from "node:test";

import {
  andinaLegacyEditorialResidualCategoryBySlug,
  andinaLegacyEditorialResidualEditorialDecisions,
  andinaLegacyEditorialResidualTargetTaxonomyBySlug,
  assertAndinaLegacyEditorialResidualUniverse,
  canonicalAndinaLegacyEditorialResidualSlugs,
  inheritedAndinaLegacyEditorialResidualSlugs,
  reviewedAndinaLegacyEditorialResidualSlugs,
} from "../../editorial/andina-legacy-editorial-residual/universe.mjs";

test("cierra las tres rutas legacy editoriales andinas sin bajas", () => {
  assert.deepEqual(assertAndinaLegacyEditorialResidualUniverse(), {
    inheritedMestizo: 2,
    canonicalMestizo: 3,
    reviewedRoutes: 3,
    transferredFromNullCommunity: 1,
    created: 0,
    unpublished: 0,
    inventedSupernaturalCoresRemoved: 2,
    disclosedContemporaryFables: 1,
  });
  assert.deepEqual(
    new Set(inheritedAndinaLegacyEditorialResidualSlugs),
    new Set(["catalina-la-napanga", "el-silbo-de-quinunchu"]),
  );
  assert.deepEqual(
    new Set(reviewedAndinaLegacyEditorialResidualSlugs),
    new Set([
      "catalina-la-napanga",
      "el-hada-de-los-canaverales",
      "el-silbo-de-quinunchu",
    ]),
  );
  assert.deepEqual(
    canonicalAndinaLegacyEditorialResidualSlugs,
    reviewedAndinaLegacyEditorialResidualSlugs,
  );
});

test("normaliza departamentos y transfiere el Hada a Mestizo", () => {
  assert.equal(
    andinaLegacyEditorialResidualCategoryBySlug["catalina-la-napanga"],
    "Andina > Cauca > Mestizo",
  );
  assert.equal(
    andinaLegacyEditorialResidualCategoryBySlug[
      "el-hada-de-los-canaverales"
    ],
    "Andina > Valle del Cauca > Mestizo",
  );
  assert.equal(
    andinaLegacyEditorialResidualCategoryBySlug["el-silbo-de-quinunchu"],
    "Andina > Antioquia > Mestizo",
  );
  for (const slug of reviewedAndinaLegacyEditorialResidualSlugs) {
    assert.deepEqual(
      andinaLegacyEditorialResidualTargetTaxonomyBySlug[slug],
      { regionSlug: "andina", communitySlug: "mestizo" },
    );
  }
  assert.equal(
    andinaLegacyEditorialResidualEditorialDecisions[
      "el-hada-de-los-canaverales"
    ].action,
    "retain-route-as-disclosed-contemporary-editorial-fable",
  );
});
