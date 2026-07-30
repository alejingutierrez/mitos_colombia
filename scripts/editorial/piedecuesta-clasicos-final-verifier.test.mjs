import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("el verificador reporta la transferencia, incorporación e imágenes pendientes", () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/verify-piedecuesta-clasicos-final-review.mjs"],
    { cwd: process.cwd(), encoding: "utf8" },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.status, "pending-sync");
  assert.equal(output.community, "mestizo");
  assert.equal(output.current, 3);
  assert.equal(output.canonical, 5);
  assert.deepEqual(output.missing, [
    "el-silbon",
    "la-luz-del-limonal",
  ]);
  assert.deepEqual(output.pendingTransfers, ["el-silbon"]);
  assert.equal(output.imageProvenance.status, "pending");
});

test("el modo estricto impide afirmar cierre antes de imágenes y sync", () => {
  const result = spawnSync(
    process.execPath,
    [
      "scripts/editorial/verify-piedecuesta-clasicos-final-review.mjs",
      "--strict",
    ],
    { cwd: process.cwd(), encoding: "utf8" },
  );
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /todavía no está sincronizada/i);
});
