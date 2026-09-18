import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("el verificador reporta cuatro transferencias e imágenes pendientes", () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/verify-huitoto-residual-review.mjs"],
    { cwd: process.cwd(), encoding: "utf8" },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.status, "pending-sync");
  assert.equal(output.community, "huitotos");
  assert.equal(output.current, 22);
  assert.equal(output.canonical, 26);
  assert.deepEqual(
    new Set(output.missing),
    new Set([
      "el-diluvio-guinadoma",
      "nonuetoma",
      "taife",
      "taik",
    ]),
  );
  assert.deepEqual(
    new Set(output.pendingTransfers),
    new Set([
      "el-diluvio-guinadoma",
      "nonuetoma",
      "taife",
      "taik",
    ]),
  );
  assert.equal(output.imageProvenance.status, "pending");
});

test("el modo estricto impide afirmar cierre antes de imágenes y sync", () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/verify-huitoto-residual-review.mjs", "--strict"],
    { cwd: process.cwd(), encoding: "utf8" },
  );
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /todavía no está sincronizada/i);
});
