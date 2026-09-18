import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

import { skipWithoutPostgres } from "../lib/test-postgres.mjs";

test("la sincronización previsualiza seis fichas y tres transferencias", { skip: skipWithoutPostgres }, () => {
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
  assert.deepEqual(output.sourcesPerMyth, [6, 7, 8]);
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
