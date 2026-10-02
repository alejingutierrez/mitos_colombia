import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

import { skipWithoutPostgres } from "../lib/test-postgres.mjs";

test("la sincronización prepara tres actualizaciones y dos transferencias", { skip: skipWithoutPostgres }, () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/sync-varios-mestizo-final-review.mjs"],
    { cwd: process.cwd(), encoding: "utf8" },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.mode, "dry-run");
  assert.equal(output.community.profileUpdate, false);
  assert.equal(output.universe.current, 3);
  assert.equal(output.universe.inherited, 3);
  assert.equal(output.universe.canonical, 1);
  assert.equal(output.universe.reviewed, 3);
  assert.deepEqual(output.universe.toCreate, []);
  assert.equal(output.universe.toUpdate, 3);
  assert.deepEqual(new Set(output.universe.toTransfer), new Set([
    "el-judio-errante",
    "la-viudita",
  ]));
  assert.deepEqual(output.universe.toDelete, []);
  assert.equal(output.dossiers, 3);
  assert.equal(output.imagePairs, 3);
  assert.ok([].concat(output.sourcesPerMyth).every((n) => n >= 3), JSON.stringify(output.sourcesPerMyth));
  assert.deepEqual(output.tags.toCreate, []);
  assert.equal(output.imageProvenance.status, "pending");
});
