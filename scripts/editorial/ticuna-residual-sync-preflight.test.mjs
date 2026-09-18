import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

import { skipWithoutPostgres } from "../lib/test-postgres.mjs";

test("la sincronización prepara siete transferencias sin altas ni bajas", { skip: skipWithoutPostgres }, () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/sync-ticuna-residual-review.mjs"],
    { cwd: process.cwd(), encoding: "utf8" },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.mode, "dry-run");
  assert.equal(output.community.before, output.community.after);
  assert.equal(output.community.profileUpdate, false);
  assert.equal(output.universe.current, 6);
  assert.equal(output.universe.inherited, 6);
  assert.equal(output.universe.canonical, 13);
  assert.equal(output.universe.reviewed, 7);
  assert.deepEqual(output.universe.toCreate, []);
  assert.equal(output.universe.toUpdate, 7);
  assert.deepEqual(
    new Set(output.universe.toTransfer),
    new Set([
      "moe-e-ipi",
      "origen-de-la-luna",
      "origen-de-los-micos-boquiblancos",
      "origen-de-los-vegetales-cultivaldos",
      "origen-del-agua",
      "origen-del-gavilan",
      "origen-del-sol",
    ]),
  );
  assert.deepEqual(output.universe.toDelete, []);
  assert.equal(output.dossiers, 7);
  assert.equal(output.imagePairs, 7);
  assert.equal(output.sourcesPerMyth, 8);
  assert.deepEqual(output.tags.toCreate, []);
  assert.equal(output.imageProvenance.status, "pending");
});
