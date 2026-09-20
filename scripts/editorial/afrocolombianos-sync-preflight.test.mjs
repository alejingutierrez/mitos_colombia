import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("la sincronización previsualiza seis fichas y tres transferencias", () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/editorial/sync-afrocolombianos-review.mjs"],
    {
      cwd: process.cwd(),
      encoding: "utf8",
    },
  );
  assert.equal(result.status, 0, result.stderr);
  const output = JSON.parse(result.stdout);
  assert.equal(output.mode, "dry-run");
  assert.equal(output.community.before, "Afrocolombianos");
  assert.equal(output.community.after, "Afrocolombianos");
  assert.equal(output.universe.current, 2);
  assert.equal(output.universe.inherited, 2);
  assert.equal(output.universe.canonical, 6);
  assert.equal(output.universe.reviewed, 6);
  assert.deepEqual(output.universe.toCreate, [
    "como-aparecio-la-muerte-en-el-choco",
  ]);
  assert.equal(output.universe.toUpdate, 5);
  assert.deepEqual(output.universe.toTransfer, [
    "anansi",
    "tulavieja-tunda",
    "el-riviel-del-rosario",
  ]);
  assert.deepEqual(output.universe.toDelete, []);
  assert.equal(output.dossiers, 6);
  assert.equal(output.imagePairs, 6);
  // El número exacto lo fija cada ficha desde que el reparto dejó de venir del
  // mapa `afroSourceKeysBySlug`: se comprueba el mínimo y que no vuelva a
  // haber un solo reparto para toda la comunidad.
  const repartos = [output.sourcesPerMyth].flat();
  assert.ok(repartos.length >= 2, "un solo reparto para todas las fichas");
  assert.ok(Math.min(...repartos) >= 5, `reparto por debajo del mínimo: ${repartos}`);
  assert.deepEqual(output.tags.toCreate, []);
  assert.equal(output.imageProvenance.status, "pending");
  assert.deepEqual(output.obsoleteCommunities, [
    {
      id: output.obsoleteCommunities[0].id,
      slug: "africano",
      regionSlug: "pacifico",
      mythCount: 3,
    },
  ]);
});
