import assert from "node:assert/strict";
import test from "node:test";

import {
  assertPacificoNarinoUniverse,
  canonicalPacificoMixtoNarinoSlugs,
  importedFromPacificoMestizoSlugs,
  inheritedPacificoNarinoSlugs,
  pacificoNarinoEditorialDecisions,
  pacificoNarinoTargetTaxonomyBySlug,
  reviewedPacificoNarinoSlugs,
  preservedExternalTransferSlugs,
  transferredToAfrocolombianosSlugs,
  transferredToQuillacingasSlugs,
} from "../../editorial/pacifico-narino/universe.mjs";

test("conserva las siete URL y reduce Mixto a tres rutas", () => {
  assert.deepEqual(assertPacificoNarinoUniverse(), {
    inheritedMixto: 7,
    importedFromMestizo: 1,
    preservedForAfroTransfer: 1,
    canonicalMixto: 3,
    transferredToAfrocolombianos: 1,
    transferredToQuillacingas: 3,
    reviewedRoutes: 7,
    unpublished: 0,
  });
  assert.equal(inheritedPacificoNarinoSlugs.length, 7);
  assert.equal(reviewedPacificoNarinoSlugs.length, 7);
  assert.deepEqual(importedFromPacificoMestizoSlugs, [
    "el-padre-mera",
  ]);
  assert.deepEqual(preservedExternalTransferSlugs, [
    "el-riviel-del-rosario",
  ]);
  assert.deepEqual(transferredToAfrocolombianosSlugs, [
    "el-padre-mera",
  ]);
  assert.deepEqual(transferredToQuillacingasSlugs, [
    "guagua-rayo",
    "la-totuma-de-la-cocha",
    "taita-galeras",
  ]);
  assert.deepEqual(canonicalPacificoMixtoNarinoSlugs, [
    "chiles-y-cumbal",
    "el-diablo-chivo-de-rumichaca",
    "la-sirena-del-arco",
  ]);
});

test("cada ruta tiene destino cultural explícito", () => {
  assert.deepEqual(
    new Set(Object.keys(pacificoNarinoTargetTaxonomyBySlug)),
    new Set(reviewedPacificoNarinoSlugs),
  );
  assert.equal(
    pacificoNarinoTargetTaxonomyBySlug["el-padre-mera"].communitySlug,
    "afrocolombianos",
  );
  assert.equal(
    pacificoNarinoTargetTaxonomyBySlug["guagua-rayo"].communitySlug,
    "quillacingas",
  );
  assert.equal(
    pacificoNarinoEditorialDecisions.media.action,
    "generate-fourteen-new-openai-images-with-provenance",
  );
});
