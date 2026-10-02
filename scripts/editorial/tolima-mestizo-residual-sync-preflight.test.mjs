import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

import { skipWithoutPostgres } from "../lib/test-postgres.mjs";

test("la sincronización prepara cuatro actualizaciones sin altas ni bajas", { skip: skipWithoutPostgres }, () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/sync-tolima-mestizo-residual-review.mjs"],
    { cwd: process.cwd(), encoding: "utf8" },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.mode, "dry-run");
  assert.equal(output.community.profileUpdate, false);
  assert.equal(output.universe.current, 3);
  assert.equal(output.universe.inherited, 3);
  assert.equal(output.universe.canonical, 3);
  assert.equal(output.universe.reviewed, 4);
  assert.deepEqual(output.universe.toCreate, []);
  assert.equal(output.universe.toUpdate, 4);
  assert.deepEqual(output.universe.toTransfer, []);
  assert.deepEqual(output.universe.toDelete, []);
  assert.equal(output.dossiers, 4);
  assert.equal(output.imagePairs, 4);
  assert.ok([output.sourcesPerMyth].flat().every((n) => n >= 5), JSON.stringify(output.sourcesPerMyth));
  assert.deepEqual(output.tags.toCreate, []);
  assert.equal(output.imageProvenance.status, "pending");
});
