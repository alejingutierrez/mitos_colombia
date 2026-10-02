import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

import { skipWithoutPostgres } from "../lib/test-postgres.mjs";

test("el verificador Zenú declara contenido y transferencia pendientes", { skip: skipWithoutPostgres }, () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/verify-zenu-review.mjs"],
    {
      cwd: process.cwd(),
      encoding: "utf8",
    },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.status, "pending-sync");
  assert.equal(output.community, "zenu");
  assert.equal(output.current, 7);
  assert.equal(output.canonical, 6);
  assert.deepEqual(output.missing, []);
  assert.deepEqual(output.pendingTransfers, [
    "juan-lara-y-la-trenza-del-aire",
  ]);
  assert.equal(output.imageProvenance.status, "pending");
});

test("el modo estricto impide afirmar cierre antes de imágenes y sync", { skip: skipWithoutPostgres }, () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/verify-zenu-review.mjs", "--strict"],
    {
      cwd: process.cwd(),
      encoding: "utf8",
    },
  );
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /todavía no está sincronizada/i);
});
