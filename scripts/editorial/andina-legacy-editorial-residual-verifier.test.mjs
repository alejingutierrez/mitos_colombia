import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("el verificador reporta contenido listo, transferencia e imágenes pendientes", () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/verify-andina-legacy-editorial-residual-review.mjs"],
    { cwd: process.cwd(), encoding: "utf8" },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.status, "pending-sync");
  assert.equal(output.community, "mestizo");
  assert.equal(output.current, 2);
  assert.equal(output.canonical, 3);
  assert.deepEqual(output.missing, ["el-hada-de-los-canaverales"]);
  assert.deepEqual(output.pendingTransfers, [
    "el-hada-de-los-canaverales",
  ]);
  assert.equal(output.imageProvenance.status, "pending");
});

test("el modo estricto impide afirmar cierre sin imágenes", () => {
  const result = spawnSync(
    process.execPath,
    [
      "scripts/editorial/verify-andina-legacy-editorial-residual-review.mjs",
      "--strict",
    ],
    { cwd: process.cwd(), encoding: "utf8" },
  );
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /todavía no está sincronizada/i);
});
