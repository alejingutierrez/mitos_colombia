import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

import { skipWithoutPostgres } from "../lib/test-postgres.mjs";
const expected = new Set([
  "moe-e-ipi",
  "origen-de-la-luna",
  "origen-de-los-micos-boquiblancos",
  "origen-de-los-vegetales-cultivaldos",
  "origen-del-agua",
  "origen-del-gavilan",
  "origen-del-sol",
]);

test("el verificador reporta siete transferencias e imágenes pendientes", { skip: skipWithoutPostgres }, () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/verify-ticuna-residual-review.mjs"],
    { cwd: process.cwd(), encoding: "utf8" },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.status, "pending-sync");
  assert.equal(output.community, "ticuna");
  assert.equal(output.current, 6);
  assert.equal(output.canonical, 13);
  assert.deepEqual(new Set(output.missing), expected);
  assert.deepEqual(new Set(output.pendingTransfers), expected);
  assert.equal(output.imageProvenance.status, "pending");
});

test("el modo estricto impide afirmar cierre antes de imágenes y sync", { skip: skipWithoutPostgres }, () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/verify-ticuna-residual-review.mjs", "--strict"],
    { cwd: process.cwd(), encoding: "utf8" },
  );
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /todavía no está sincronizada/i);
});
