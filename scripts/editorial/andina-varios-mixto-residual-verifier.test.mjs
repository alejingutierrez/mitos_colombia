import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

import { skipWithoutPostgres } from "../lib/test-postgres.mjs";

test("el verificador reporta contenido listo e imágenes pendientes", { skip: skipWithoutPostgres }, () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/verify-andina-varios-mixto-residual-review.mjs"],
    { cwd: process.cwd(), encoding: "utf8" },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.status, "pending-sync");
  assert.equal(output.community, "mixto");
  assert.equal(output.current, 3);
  assert.equal(output.canonical, 3);
  assert.deepEqual(output.missing, []);
  assert.deepEqual(output.pendingTransfers, []);
  assert.equal(output.imageProvenance.status, "pending");
});

test("el modo estricto impide afirmar cierre sin imágenes", { skip: skipWithoutPostgres }, () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/verify-andina-varios-mixto-residual-review.mjs", "--strict"],
    { cwd: process.cwd(), encoding: "utf8" },
  );
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /todavía no está sincronizada/i);
});
