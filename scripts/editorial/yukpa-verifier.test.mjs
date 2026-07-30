import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("el verificador Yukpa declara el estado pendiente antes de sincronizar", () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/verify-yukpa-review.mjs"],
    {
      cwd: process.cwd(),
      encoding: "utf8",
    },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.status, "pending-sync");
  assert.equal(output.community, "yukpa");
  assert.equal(output.current, 2);
  assert.equal(output.canonical, 5);
  assert.deepEqual(output.missing, [
    "aponto-y-el-arbol-manurhacha",
    "los-gemelos-yirhwach-y-las-constelaciones",
    "me-el-dueno-del-maiz",
  ]);
  assert.equal(output.imageProvenance.status, "pending");
});

test("el modo estricto impide afirmar cierre antes de imágenes y sync", () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/verify-yukpa-review.mjs", "--strict"],
    {
      cwd: process.cwd(),
      encoding: "utf8",
    },
  );
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /todavía no está sincronizada/i);
});
