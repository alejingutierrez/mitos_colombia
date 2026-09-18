import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("el verificador Yagua declara seis rutas y una transferencia pendientes", () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/verify-yagua-review.mjs"],
    {
      cwd: process.cwd(),
      encoding: "utf8",
    },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.status, "pending-sync");
  assert.equal(output.community, "yaguas");
  assert.equal(output.current, 1);
  assert.equal(output.canonical, 7);
  assert.equal(output.missing.length, 6);
  assert.deepEqual(output.pendingTransfers, ["chimbilaco"]);
  assert.equal(output.imageProvenance.status, "pending");
});

test("el modo estricto impide afirmar cierre Yagua antes de imágenes y sync", () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/verify-yagua-review.mjs", "--strict"],
    {
      cwd: process.cwd(),
      encoding: "utf8",
    },
  );
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /todavía no está sincronizada/i);
});
