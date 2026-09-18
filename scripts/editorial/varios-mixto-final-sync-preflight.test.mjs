import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

const transferred = [
  "el-cura-sin-cabeza",
  "el-jinete-negro",
  "el-mandingas",
  "el-mohan",
  "la-llorona",
  "la-madremonte",
  "los-duendes",
];

test("la sincronización prepara siete actualizaciones y transferencias", () => {
  const result = spawnSync(process.execPath, ["scripts/editorial/sync-varios-mixto-final-review.mjs"], { cwd: process.cwd(), encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.mode, "dry-run");
  assert.equal(output.community.profileUpdate, false);
  assert.equal(output.universe.current, 8);
  assert.equal(output.universe.inherited, 8);
  assert.equal(output.universe.canonical, 1);
  assert.equal(output.universe.reviewed, 7);
  assert.deepEqual(output.universe.toCreate, []);
  assert.equal(output.universe.toUpdate, 7);
  assert.deepEqual(output.universe.toTransfer, transferred);
  assert.deepEqual(output.universe.toDelete, []);
  assert.equal(output.dossiers, 7);
  assert.equal(output.imagePairs, 7);
  assert.equal(output.sourcesPerMyth, 8);
  assert.deepEqual(output.tags.toCreate, []);
  assert.equal(output.imageProvenance.status, "pending");
});
