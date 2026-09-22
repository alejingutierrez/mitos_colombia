import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("la sincronización prepara dos actualizaciones sin altas ni bajas", () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/sync-cesar-mestizo-residual-review.mjs"],
    { cwd: process.cwd(), encoding: "utf8" },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.mode, "dry-run");
  assert.equal(output.community.before, output.community.after);
  assert.equal(output.community.profileUpdate, false);
  assert.equal(output.universe.current, 2);
  assert.equal(output.universe.inherited, 2);
  assert.equal(output.universe.canonical, 2);
  assert.equal(output.universe.reviewed, 2);
  assert.deepEqual(output.universe.toCreate, []);
  assert.equal(output.universe.toUpdate, 2);
  assert.deepEqual(output.universe.toTransfer, []);
  assert.deepEqual(output.universe.toDelete, []);
  assert.equal(output.dossiers, 2);
  assert.equal(output.imagePairs, 2);
  // Era 8 para las dos, porque el aparato se repartía en bloque. Tras la
  // búsqueda por mito es un abanico: se comprueba el piso, no un número.
  const porMito = [output.sourcesPerMyth].flat();
  assert.ok(Math.min(...porMito) >= 8, `alguna ficha baja del piso de 8: ${Math.min(...porMito)}`);
  assert.deepEqual(output.tags.toCreate, []);
  assert.equal(output.imageProvenance.status, "pending");
});
