import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("la sincronización acota diez actualizaciones sin despublicar", () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/sync-antioquia-mestizo-review.mjs"],
    { cwd: process.cwd(), encoding: "utf8" },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.mode, "dry-run");
  assert.equal(output.community.before, output.community.after);
  assert.equal(output.community.profileUpdate, false);
  assert.equal(output.universe.current, 10);
  assert.equal(output.universe.inherited, 10);
  assert.equal(output.universe.canonical, 10);
  assert.equal(output.universe.reviewed, 10);
  assert.deepEqual(output.universe.toCreate, []);
  assert.equal(output.universe.toUpdate, 10);
  assert.deepEqual(output.universe.toTransfer, []);
  assert.deepEqual(output.universe.toDelete, []);
  assert.equal(output.dossiers, 10);
  assert.equal(output.imagePairs, 10);
  assert.ok([output.sourcesPerMyth].flat().every((n) => n >= 3), JSON.stringify(output.sourcesPerMyth));
  assert.deepEqual(output.tags.toCreate, []);
  assert.equal(output.imageProvenance.status, "pending");
});
