import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("la sincronización prepara tres actualizaciones y una transferencia", () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/sync-andina-legacy-editorial-residual-review.mjs"],
    { cwd: process.cwd(), encoding: "utf8" },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.mode, "dry-run");
  assert.equal(output.community.profileUpdate, false);
  assert.equal(output.universe.current, 2);
  assert.equal(output.universe.inherited, 2);
  assert.equal(output.universe.canonical, 3);
  assert.equal(output.universe.reviewed, 3);
  assert.deepEqual(output.universe.toCreate, []);
  assert.equal(output.universe.toUpdate, 3);
  assert.deepEqual(output.universe.toTransfer, [
    "el-hada-de-los-canaverales",
  ]);
  assert.deepEqual(output.universe.toDelete, []);
  assert.equal(output.dossiers, 3);
  assert.equal(output.imagePairs, 3);
  assert.ok([].concat(output.sourcesPerMyth).every((n) => n >= 3), JSON.stringify(output.sourcesPerMyth));
  assert.deepEqual(output.tags.toCreate, []);
  assert.equal(output.imageProvenance.status, "pending");
});
