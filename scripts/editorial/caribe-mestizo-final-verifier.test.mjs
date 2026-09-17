import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("el verificador reporta 72 rutas e imágenes pendientes", () => {
  const result = spawnSync(process.execPath, ["scripts/editorial/verify-caribe-mestizo-final-review.mjs"], { cwd: process.cwd(), encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.status, "pending-sync");
  assert.equal(output.community, "mestizo");
  assert.equal(output.current, 72);
  assert.equal(output.canonical, 72);
  assert.deepEqual(output.missing, []);
  assert.deepEqual(output.pendingTransfers, []);
  assert.equal(output.imageProvenance.status, "pending");
});

test("el modo estricto impide afirmar cierre sin imágenes", () => {
  const result = spawnSync(process.execPath, ["scripts/editorial/verify-caribe-mestizo-final-review.mjs", "--strict"], { cwd: process.cwd(), encoding: "utf8" });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /todavía no está sincronizada/i);
});
