import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("la sincronización prepara 70 actualizaciones y conserva 72 rutas", () => {
  const result = spawnSync(process.execPath, ["scripts/editorial/sync-caribe-mestizo-final-review.mjs"], { cwd: process.cwd(), encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.mode, "dry-run");
  assert.equal(output.community.profileUpdate, false);
  assert.equal(output.universe.current, 72);
  assert.equal(output.universe.inherited, 72);
  assert.equal(output.universe.canonical, 72);
  assert.equal(output.universe.reviewed, 70);
  assert.deepEqual(output.universe.toCreate, []);
  assert.equal(output.universe.toUpdate, 70);
  assert.deepEqual(output.universe.toTransfer, []);
  assert.deepEqual(output.universe.toDelete, []);
  assert.equal(output.dossiers, 70);
  assert.equal(output.imagePairs, 70);
  // `sourcesPerMyth` era 8 para las setenta, porque el aparato se repartía en
  // bloque. Tras la búsqueda por mito es un abanico: se comprueba el piso del
  // bloque mestizo, no una cuota. Que deje de ser un número único es
  // justamente la señal de que el reparto en bloque desapareció.
  const porMito = [output.sourcesPerMyth].flat();
  assert.ok(porMito.length > 1, "todas las fichas tienen el mismo número de fuentes: huele a reparto en bloque");
  assert.ok(Math.min(...porMito) >= 8, `alguna ficha baja del piso de 8: ${Math.min(...porMito)}`);
  assert.deepEqual(output.tags.toCreate, []);
  assert.equal(output.imageProvenance.status, "pending");
});
