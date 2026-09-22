import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("la sincronización acota ocho actualizaciones sin despublicar", () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/sync-bogota-mestizo-memory-review.mjs"],
    { cwd: process.cwd(), encoding: "utf8" },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.mode, "dry-run");
  assert.equal(output.community.before, output.community.after);
  assert.equal(output.community.profileUpdate, false);
  assert.equal(output.universe.current, 8);
  assert.equal(output.universe.inherited, 8);
  assert.equal(output.universe.canonical, 8);
  assert.equal(output.universe.reviewed, 8);
  assert.deepEqual(output.universe.toCreate, []);
  assert.equal(output.universe.toUpdate, 8);
  assert.deepEqual(output.universe.toTransfer, []);
  assert.deepEqual(output.universe.toDelete, []);
  assert.equal(output.dossiers, 8);
  assert.equal(output.imagePairs, 8);
  // `sourcesPerMyth` era una cuota —5, 6, 7— porque el aparato se repartía en
  // bloque. Tras la búsqueda por mito es un abanico: se comprueba el piso, no
  // un número, y que no todas las fichas tengan el mismo.
  const porMito = [output.sourcesPerMyth].flat();
  assert.ok(porMito.length > 1, "todas las fichas tienen el mismo número de fuentes: huele a reparto en bloque");
  assert.ok(Math.min(...porMito) >= 8, `alguna ficha baja del piso: ${Math.min(...porMito)}`);
  assert.deepEqual(output.tags.toCreate, []);
  assert.equal(output.imageProvenance.status, "pending");
});
