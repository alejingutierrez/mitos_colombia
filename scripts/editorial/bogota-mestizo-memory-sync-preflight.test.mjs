import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

import { skipWithoutPostgres } from "../lib/test-postgres.mjs";

test("la sincronización acota ocho actualizaciones sin despublicar", { skip: skipWithoutPostgres }, () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/sync-bogota-mestizo-memory-review.mjs"],
    { cwd: process.cwd(), encoding: "utf8" },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.mode, "dry-run");
  assert.equal(output.community.before, output.community.after);
  assert.equal(output.community.profileUpdate, false);
  assert.equal(output.universe.current, 8);
  assert.equal(output.universe.inherited, 8);
  assert.equal(output.universe.canonical, 8);
  assert.equal(output.universe.reviewed, 8);
  assert.deepEqual(output.universe.toCreate, []);
  assert.equal(output.universe.toUpdate, 8);
  assert.deepEqual(output.universe.toTransfer, []);
  assert.deepEqual(output.universe.toDelete, []);
  assert.equal(output.dossiers, 8);
  assert.equal(output.imagePairs, 8);
  assert.deepEqual(
    new Set(output.sourcesPerMyth),
    new Set([5, 6, 7]),
  );
  assert.deepEqual(output.tags.toCreate, []);
  assert.equal(output.imageProvenance.status, "pending");
});
