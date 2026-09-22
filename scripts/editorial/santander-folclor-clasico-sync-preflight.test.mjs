import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("la sincronización prepara seis correcciones sin altas ni bajas", () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/sync-santander-folclor-clasico-review.mjs"],
    { cwd: process.cwd(), encoding: "utf8" },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.mode, "dry-run");
  assert.equal(output.community.before, output.community.after);
  assert.equal(output.community.profileUpdate, false);
  assert.equal(output.universe.current, 6);
  assert.equal(output.universe.inherited, 6);
  assert.equal(output.universe.canonical, 6);
  assert.equal(output.universe.reviewed, 6);
  assert.deepEqual(output.universe.toCreate, []);
  assert.equal(output.universe.toUpdate, 6);
  assert.deepEqual(output.universe.toTransfer, []);
  assert.deepEqual(output.universe.toDelete, []);
  assert.equal(output.dossiers, 6);
  assert.equal(output.imagePairs, 6);
  // Era 7 para todas, el reparto en bloque. Ahora es un abanico: las rehechas
  // con piso de 8 y las bloqueadas con su reparto heredado.
  const porMito = [output.sourcesPerMyth].flat();
  assert.ok(porMito.length > 1, "todas con el mismo número de fuentes: huele a reparto en bloque");
  assert.ok(Math.min(...porMito) >= 5, `alguna ficha baja del piso: ${Math.min(...porMito)}`);
  assert.deepEqual(output.tags.toCreate, []);
  assert.equal(output.imageProvenance.status, "pending");
});
