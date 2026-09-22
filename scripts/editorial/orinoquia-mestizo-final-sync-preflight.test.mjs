import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("la sincronización prepara diecinueve actualizaciones sin bajas", () => {
  const result = spawnSync(process.execPath, ["scripts/editorial/sync-orinoquia-mestizo-final-review.mjs"], { cwd: process.cwd(), encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.mode, "dry-run");
  assert.equal(output.community.profileUpdate, false);
  assert.equal(output.universe.current, 19);
  assert.equal(output.universe.inherited, 19);
  assert.equal(output.universe.canonical, 19);
  assert.equal(output.universe.reviewed, 19);
  assert.deepEqual(output.universe.toCreate, []);
  assert.equal(output.universe.toUpdate, 19);
  assert.deepEqual(output.universe.toTransfer, []);
  assert.deepEqual(output.universe.toDelete, []);
  assert.equal(output.dossiers, 19);
  assert.equal(output.imagePairs, 19);
  // Era 8 para las diecinueve, el reparto en bloque. Ahora es un abanico.
  const porMito = [output.sourcesPerMyth].flat();
  assert.ok(porMito.length > 1, "todas con el mismo número de fuentes: huele a reparto en bloque");
  assert.ok(Math.min(...porMito) >= 7, `alguna ficha baja del piso: ${Math.min(...porMito)}`);
  assert.deepEqual(output.tags.toCreate, []);
  assert.equal(output.imageProvenance.status, "pending");
});
