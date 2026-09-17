import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("el verificador reporta el frente pendiente de imágenes y sync", () => {
  const result = spawnSync(process.execPath,
    ["scripts/editorial/verify-amazonas-mixto-residual-review.mjs"],
    { cwd: process.cwd(), encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.status, "pending-sync");
  assert.equal(output.community, "mixto");
  assert.equal(output.current, 12);
  assert.equal(output.canonical, 9);
  assert.deepEqual(output.missing, []);
  assert.deepEqual(new Set(output.pendingTransfers), new Set([
    "ngutapa-y-chimuiyae",
    "petapeta",
    "el-descubrimiento-del-agua-y-los-peces",
  ]));
  assert.equal(output.imageProvenance.status, "pending");
});

test("el modo estricto impide afirmar cierre antes de imágenes y sync", () => {
  const result = spawnSync(process.execPath,
    ["scripts/editorial/verify-amazonas-mixto-residual-review.mjs", "--strict"],
    { cwd: process.cwd(), encoding: "utf8" });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /todavía no está sincronizada/i);
});
