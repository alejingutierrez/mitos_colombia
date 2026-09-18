import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

import { skipWithoutPostgres } from "../lib/test-postgres.mjs";

test("el verificador reporta una transferencia e imágenes pendientes", { skip: skipWithoutPostgres }, () => {
  const result = spawnSync(process.execPath, ["scripts/editorial/verify-caribe-mixto-final-review.mjs"], { cwd: process.cwd(), encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.status, "pending-sync");
  assert.equal(output.community, "mixto");
  assert.equal(output.current, 6);
  assert.equal(output.canonical, 5);
  assert.deepEqual(output.missing, []);
  assert.deepEqual(output.pendingTransfers, ["el-hombre-caiman"]);
  assert.equal(output.imageProvenance.status, "pending");
});

test("el modo estricto impide afirmar cierre sin imágenes", { skip: skipWithoutPostgres }, () => {
  const result = spawnSync(process.execPath, ["scripts/editorial/verify-caribe-mixto-final-review.mjs", "--strict"], { cwd: process.cwd(), encoding: "utf8" });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /todavía no está sincronizada/i);
});
