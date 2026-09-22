import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("la sincronización prepara cinco actualizaciones sin altas ni bajas", () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/sync-andina-varios-mestizo-residual-review.mjs"],
    { cwd: process.cwd(), encoding: "utf8" },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.mode, "dry-run");
  assert.equal(output.community.profileUpdate, false);
  assert.equal(output.universe.current, 5);
  assert.equal(output.universe.inherited, 5);
  assert.equal(output.universe.canonical, 5);
  assert.equal(output.universe.reviewed, 5);
  assert.deepEqual(output.universe.toCreate, []);
  assert.equal(output.universe.toUpdate, 5);
  assert.deepEqual(output.universe.toTransfer, []);
  assert.deepEqual(output.universe.toDelete, []);
  assert.equal(output.dossiers, 5);
  assert.equal(output.imagePairs, 5);
  assert.ok([output.sourcesPerMyth].flat().every((n) => n >= 3), JSON.stringify(output.sourcesPerMyth));
  assert.deepEqual(output.tags.toCreate, []);
  assert.equal(output.imageProvenance.status, "pending");
});
