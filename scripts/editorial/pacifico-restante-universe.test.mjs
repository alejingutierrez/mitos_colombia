import assert from "node:assert/strict";
import test from "node:test";

import {
  assertPacificoRestanteUniverse,
  canonicalPacificoMestizoSlugs,
  inheritedPacificoMestizoSlugs,
  pacificoRestanteEditorialDecisions,
  pacificoRestanteTargetTaxonomyBySlug,
  preservedExternalTransferSlugs,
  reviewedPacificoRestanteSlugs,
} from "../../editorial/pacifico-restante/universe.mjs";

test("conserva ocho rutas y reconoce la transferencia externa de Padre Mera", () => {
  assert.deepEqual(assertPacificoRestanteUniverse(), {
    inheritedMestizo: 9,
    transferredExternally: 1,
    canonicalMestizo: 8,
    reviewedRoutes: 8,
    unpublished: 0,
  });
  assert.equal(inheritedPacificoMestizoSlugs.length, 9);
  assert.equal(canonicalPacificoMestizoSlugs.length, 8);
  assert.deepEqual(preservedExternalTransferSlugs, ["el-padre-mera"]);
  assert.ok(!canonicalPacificoMestizoSlugs.includes("el-padre-mera"));
  assert.deepEqual(
    new Set(reviewedPacificoRestanteSlugs),
    new Set(canonicalPacificoMestizoSlugs),
  );
});

test("las ocho rutas permanecen en Pacífico Mestizo", () => {
  assert.deepEqual(
    new Set(Object.keys(pacificoRestanteTargetTaxonomyBySlug)),
    new Set(reviewedPacificoRestanteSlugs),
  );
  for (const target of Object.values(
    pacificoRestanteTargetTaxonomyBySlug,
  )) {
    assert.deepEqual(target, {
      regionSlug: "pacifico",
      communitySlug: "mestizo",
    });
  }
  assert.equal(
    pacificoRestanteEditorialDecisions.media.action,
    "generate-sixteen-new-openai-images-with-provenance",
  );
});
