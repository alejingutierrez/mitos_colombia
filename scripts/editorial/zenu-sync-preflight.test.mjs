import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

import { skipWithoutPostgres } from "../lib/test-postgres.mjs";

test("la sincronización Zenú previsualiza seis rutas y una transferencia", { skip: skipWithoutPostgres }, () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/sync-zenu-review.mjs"],
    {
      cwd: process.cwd(),
      encoding: "utf8",
    },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.mode, "dry-run");
  assert.equal(output.community.before, "Zenú");
  assert.equal(output.community.after, "Zenú");
  assert.equal(output.universe.current, 7);
  assert.equal(output.universe.inherited, 7);
  assert.equal(output.universe.canonical, 6);
  assert.equal(output.universe.reviewed, 7);
  assert.deepEqual(output.universe.toCreate, []);
  assert.equal(output.universe.toUpdate, 7);
  assert.deepEqual(output.universe.toTransfer, [
    "juan-lara-y-la-trenza-del-aire",
  ]);
  assert.deepEqual(output.universe.toDelete, []);
  assert.equal(output.dossiers, 7);
  assert.equal(output.imagePairs, 7);
  assert.deepEqual(output.sourcesPerMyth, [12, 6]);
  assert.deepEqual(output.tags.toCreate, []);
  assert.equal(output.imageProvenance.status, "pending");
});
