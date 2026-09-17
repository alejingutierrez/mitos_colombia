import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("la sincronización Yagua prevé cinco altas y la transferencia de Chimbilaco", () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/sync-yagua-review.mjs"],
    {
      cwd: process.cwd(),
      encoding: "utf8",
    },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.mode, "dry-run");
  assert.equal(output.community.before, "Yaguas");
  assert.equal(output.community.after, "Yagua / Ñihamwo");
  assert.equal(output.universe.current, 1);
  assert.equal(output.universe.inherited, 1);
  assert.equal(output.universe.canonical, 7);
  assert.equal(output.universe.reviewed, 7);
  assert.equal(output.universe.toCreate.length, 5);
  assert.equal(output.universe.toUpdate, 2);
  assert.deepEqual(output.universe.toTransfer, ["chimbilaco"]);
  assert.equal(output.dossiers, 7);
  assert.equal(output.imagePairs, 7);
  assert.deepEqual(output.sourcesPerMyth, [9, 7]);
  assert.deepEqual(output.tags.toCreate, []);
  assert.equal(output.imageProvenance.status, "pending");
});
