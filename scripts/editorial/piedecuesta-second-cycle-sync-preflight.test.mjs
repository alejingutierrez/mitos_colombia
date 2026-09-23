import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("la sincronización prepara siete correcciones y una incorporación", () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/sync-piedecuesta-second-cycle-review.mjs"],
    { cwd: process.cwd(), encoding: "utf8" },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.mode, "dry-run");
  assert.equal(output.community.before, output.community.after);
  assert.equal(output.community.profileUpdate, false);
  assert.equal(output.universe.current, 7);
  assert.equal(output.universe.inherited, 7);
  assert.equal(output.universe.canonical, 8);
  assert.equal(output.universe.reviewed, 8);
  assert.deepEqual(output.universe.toCreate, ["la-bruja-silbona"]);
  assert.equal(output.universe.toUpdate, 7);
  assert.deepEqual(output.universe.toTransfer, []);
  assert.deepEqual(output.universe.toDelete, []);
  assert.equal(output.dossiers, 8);
  assert.equal(output.imagePairs, 8);
  assert.ok([].concat(output.sourcesPerMyth).every((n) => n >= 3), JSON.stringify(output.sourcesPerMyth));
  assert.deepEqual(output.tags.toCreate, []);
  assert.equal(output.imageProvenance.status, "pending");
});
