import assert from "node:assert/strict";
import test from "node:test";

import {
  assertSantanderClassicFolkloreUniverse,
  canonicalSantanderClassicFolkloreSlugs,
  inheritedSantanderClassicFolkloreSlugs,
  reviewedSantanderClassicFolkloreSlugs,
  santanderClassicFolkloreCategoryBySlug,
  santanderClassicFolkloreEditorialDecisions,
  santanderClassicFolkloreTargetTaxonomyBySlug,
} from "../../editorial/santander-folclor-clasico/universe.mjs";

test("conserva las seis rutas heredadas sin añadir ni despublicar", () => {
  assert.deepEqual(assertSantanderClassicFolkloreUniverse(), {
    inherited: 6,
    added: 0,
    transferred: 0,
    canonical: 6,
    santander: 6,
    unpublished: 0,
  });
  assert.deepEqual(
    reviewedSantanderClassicFolkloreSlugs,
    canonicalSantanderClassicFolkloreSlugs,
  );
  assert.deepEqual(
    inheritedSantanderClassicFolkloreSlugs,
    canonicalSantanderClassicFolkloreSlugs,
  );
});

test("mantiene la taxonomía mestiza y prepara doce imágenes", () => {
  assert.deepEqual(
    new Set(Object.values(santanderClassicFolkloreCategoryBySlug)),
    new Set(["Andina > Santander > Mestizo"]),
  );
  assert.deepEqual(
    new Set(Object.keys(santanderClassicFolkloreTargetTaxonomyBySlug)),
    new Set(reviewedSantanderClassicFolkloreSlugs),
  );
  for (const target of Object.values(
    santanderClassicFolkloreTargetTaxonomyBySlug,
  )) {
    assert.deepEqual(target, {
      regionSlug: "andina",
      communitySlug: "mestizo",
    });
  }
  assert.equal(
    santanderClassicFolkloreEditorialDecisions.media.action,
    "prepare-twelve-openai-images-with-provenance",
  );
});
