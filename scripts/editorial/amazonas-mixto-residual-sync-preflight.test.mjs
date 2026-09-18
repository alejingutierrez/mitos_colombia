import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

import { skipWithoutPostgres } from "../lib/test-postgres.mjs";

test("la sincronización acota doce actualizaciones y tres transferencias", { skip: skipWithoutPostgres }, () => {
  const result = spawnSync(process.execPath,
    ["scripts/editorial/sync-amazonas-mixto-residual-review.mjs"],
    { cwd: process.cwd(), encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.mode, "dry-run");
  assert.equal(output.community.before, output.community.after);
  assert.equal(output.community.profileUpdate, false);
  assert.equal(output.universe.current, 12);
  assert.equal(output.universe.inherited, 12);
  assert.equal(output.universe.canonical, 9);
  assert.equal(output.universe.reviewed, 12);
  assert.deepEqual(output.universe.toCreate, []);
  assert.equal(output.universe.toUpdate, 12);
  assert.deepEqual(new Set(output.universe.toTransfer), new Set([
    "ngutapa-y-chimuiyae",
    "petapeta",
    "el-descubrimiento-del-agua-y-los-peces",
  ]));
  assert.deepEqual(output.universe.toDelete, []);
  assert.equal(output.dossiers, 12);
  assert.equal(output.imagePairs, 12);
  assert.equal(output.sourcesPerMyth, 8);
  assert.deepEqual(output.tags.toCreate, []);
  assert.equal(output.imageProvenance.status, "pending");
});
