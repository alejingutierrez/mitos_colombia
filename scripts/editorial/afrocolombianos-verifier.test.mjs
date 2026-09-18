import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("el verificador declara contenido, transferencias e imágenes pendientes", () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/verify-afrocolombianos-review.mjs"],
    {
      cwd: process.cwd(),
      encoding: "utf8",
    },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.status, "pending-sync");
  assert.equal(output.community, "afrocolombianos");
  assert.equal(output.current, 2);
  assert.equal(output.canonical, 6);
  assert.deepEqual(output.missing, [
    "anansi",
    "como-aparecio-la-muerte-en-el-choco",
    "el-riviel-del-rosario",
    "tulavieja-tunda",
  ]);
  assert.deepEqual(output.pendingTransfers, [
    "anansi",
    "el-riviel-del-rosario",
    "tulavieja-tunda",
  ]);
  assert.equal(output.imageProvenance.status, "pending");
});

test("el modo estricto impide afirmar cierre antes de imágenes y sync", () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/verify-afrocolombianos-review.mjs", "--strict"],
    {
      cwd: process.cwd(),
      encoding: "utf8",
    },
  );
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /todavía no está sincronizada/i);
});
