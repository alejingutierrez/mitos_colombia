import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

import { skipWithoutPostgres } from "../lib/test-postgres.mjs";

test("la sincronización Yukpa hace preflight sin exigir imágenes pendientes", { skip: skipWithoutPostgres }, () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/sync-yukpa-review.mjs"],
    {
      cwd: process.cwd(),
      encoding: "utf8",
    },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.mode, "dry-run");
  assert.equal(output.community.before, "Yukpa");
  assert.equal(output.community.after, "Yukpa");
  assert.equal(output.universe.current, 2);
  assert.equal(output.universe.inherited, 2);
  assert.equal(output.universe.canonical, 5);
  assert.deepEqual(output.universe.toCreate, [
    "aponto-y-el-arbol-manurhacha",
    "los-gemelos-yirhwach-y-las-constelaciones",
    "me-el-dueno-del-maiz",
  ]);
  assert.equal(output.universe.toUpdate, 2);
  assert.deepEqual(output.universe.toDelete, []);
  assert.equal(output.dossiers, 5);
  assert.equal(output.imagePairs, 5);
  // Antes eran nueve para las cinco fichas: el reparto en bloque. Ahora cada
  // ficha cita lo suyo, así que se comprueba el mínimo y que haya más de un
  // reparto.
  const repartos = [output.sourcesPerMyth].flat();
  assert.ok(Math.min(...repartos) >= 5, `reparto por debajo del mínimo: ${repartos}`);
  assert.deepEqual(output.tags.toCreate, []);
  assert.equal(output.imageProvenance.status, "pending");
});
