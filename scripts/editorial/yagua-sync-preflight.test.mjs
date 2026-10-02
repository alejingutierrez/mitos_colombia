import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

import { skipWithoutPostgres } from "../lib/test-postgres.mjs";

test("la sincronización Yagua prevé cinco altas y la transferencia de Chimbilaco", { skip: skipWithoutPostgres }, () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/sync-yagua-review.mjs"],
    {
      cwd: process.cwd(),
      encoding: "utf8",
    },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.mode, "dry-run");
  assert.equal(output.community.before, "Yaguas");
  assert.equal(output.community.after, "Yagua / Ñihamwo");
  assert.equal(output.universe.current, 1);
  assert.equal(output.universe.inherited, 1);
  assert.equal(output.universe.canonical, 7);
  assert.equal(output.universe.reviewed, 7);
  assert.equal(output.universe.toCreate.length, 5);
  assert.equal(output.universe.toUpdate, 2);
  assert.deepEqual(output.universe.toTransfer, ["chimbilaco"]);
  assert.equal(output.dossiers, 7);
  assert.equal(output.imagePairs, 7);
  // El número exacto lo fija ahora cada ficha: se comprueba el mínimo y que no
  // vuelva a haber un único reparto para toda la comunidad.
  assert.ok(output.sourcesPerMyth.length >= 2, "un solo reparto para todas las fichas");
  assert.ok(Math.min(...output.sourcesPerMyth) >= 5, `reparto por debajo del mínimo: ${output.sourcesPerMyth}`);
  assert.deepEqual(output.tags.toCreate, []);
  assert.equal(output.imageProvenance.status, "pending");
});
