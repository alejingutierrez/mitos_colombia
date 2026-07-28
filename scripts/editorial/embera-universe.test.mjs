import assert from "node:assert/strict";
import test from "node:test";

import {
  assertEmberaBoundaryCoverage,
  canonicalEmberaSlugs,
  emberaBoundaryMoves,
  emberaMergeCandidates,
  sourceEmberaSlugs,
} from "../../editorial/embera/universe.mjs";

test("clasifica exactamente los 26 registros Emberá de origen", () => {
  assert.deepEqual(assertEmberaBoundaryCoverage(), {
    source: 26,
    canonical: 1,
    moved: 25,
  });
});

test("no deja La Yesca ni relatos Chamí/Katío dentro del universo genérico", () => {
  assert.deepEqual(canonicalEmberaSlugs, ["los-burumias-y-carautas"]);
  assert.equal(emberaBoundaryMoves["la-yesca"].targetCommunity, "mestizo");
  assert.equal(emberaBoundaryMoves.cobaima.targetCommunity, "katios");
  assert.equal(
    emberaBoundaryMoves["a-transformacion-del-hombre-que-no-podia-cazar"]
      .targetCommunity,
    "katios",
  );
  assert.equal(emberaBoundaryMoves["el-guatin-astuto"].targetCommunity, "chami");
});

test("documenta las unificaciones que deben resolverse en las comunidades destino", () => {
  assert.equal(
    emberaMergeCandidates["el-origen-del-agua"].canonicalSlug,
    "hentsera-y-el-agua",
  );
  assert.equal(
    emberaMergeCandidates["el-tesoro-de-dabeiba"].canonicalSlug,
    "dabeiba",
  );
  assert.equal(sourceEmberaSlugs.length, 26);
});
