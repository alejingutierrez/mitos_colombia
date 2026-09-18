import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

const transferred = [
  "el-cura-sin-cabeza",
  "el-jinete-negro",
  "el-mandingas",
  "el-mohan",
  "la-llorona",
  "la-madremonte",
  "los-duendes",
];

test("el verificador reporta siete transferencias e imágenes pendientes", () => {
  const result = spawnSync(process.execPath, ["scripts/editorial/verify-varios-mixto-final-review.mjs"], { cwd: process.cwd(), encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.status, "pending-sync");
  assert.equal(output.community, "mixto");
  assert.equal(output.current, 8);
  assert.equal(output.canonical, 1);
  assert.deepEqual(output.missing, []);
  assert.deepEqual(output.pendingTransfers, transferred);
  assert.equal(output.imageProvenance.status, "pending");
});

test("el modo estricto impide afirmar cierre sin imágenes", () => {
  const result = spawnSync(process.execPath, ["scripts/editorial/verify-varios-mixto-final-review.mjs", "--strict"], { cwd: process.cwd(), encoding: "utf8" });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /todavía no está sincronizada/i);
});
