import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("la sincronización prepara seis actualizaciones y una transferencia", () => {
  const result = spawnSync(process.execPath, ["scripts/editorial/sync-caribe-mixto-final-review.mjs"], { cwd: process.cwd(), encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.mode, "dry-run");
  assert.equal(output.community.profileUpdate, false);
  assert.equal(output.universe.current, 6);
  assert.equal(output.universe.inherited, 6);
  assert.equal(output.universe.canonical, 5);
  assert.equal(output.universe.reviewed, 6);
  assert.deepEqual(output.universe.toCreate, []);
  assert.equal(output.universe.toUpdate, 6);
  assert.deepEqual(output.universe.toTransfer, ["el-hombre-caiman"]);
  assert.deepEqual(output.universe.toDelete, []);
  assert.equal(output.dossiers, 6);
  assert.equal(output.imagePairs, 6);
  assert.equal(output.sourcesPerMyth, 8);
  assert.deepEqual(output.tags.toCreate, []);
  assert.equal(output.imageProvenance.status, "pending");
});
