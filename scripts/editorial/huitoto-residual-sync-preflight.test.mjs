import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("la sincronización prepara cuatro transferencias sin altas ni bajas", () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/sync-huitoto-residual-review.mjs"],
    { cwd: process.cwd(), encoding: "utf8" },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.mode, "dry-run");
  assert.equal(output.community.before, output.community.after);
  assert.equal(output.community.profileUpdate, false);
  assert.equal(output.universe.current, 22);
  assert.equal(output.universe.inherited, 22);
  assert.equal(output.universe.canonical, 26);
  assert.equal(output.universe.reviewed, 4);
  assert.deepEqual(output.universe.toCreate, []);
  assert.equal(output.universe.toUpdate, 4);
  assert.deepEqual(
    new Set(output.universe.toTransfer),
    new Set([
      "el-diluvio-guinadoma",
      "nonuetoma",
      "taife",
      "taik",
    ]),
  );
  assert.deepEqual(output.universe.toDelete, []);
  assert.equal(output.dossiers, 4);
  assert.equal(output.imagePairs, 4);
  assert.equal(output.sourcesPerMyth, 8);
  assert.deepEqual(output.tags.toCreate, []);
  assert.equal(output.imageProvenance.status, "pending");
});
