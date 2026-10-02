import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdtemp, mkdir, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { auditTriptychIterations } from "./audit-triptych-iterations.mjs";

const pixel = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jp1sAAAAASUVORK5CYII=", "base64");

async function fixture(t, hashText = "prompt\n") {
  const root = await mkdtemp(join(tmpdir(), "mitos-iteration-audit-"));
  t.after(() => rm(root, { recursive: true }));
  await mkdir(join(root, "packages", "options-01"), { recursive: true });
  await writeFile(join(root, "image.png"), pixel);
  await writeFile(join(root, "copy.png"), pixel);
  await writeFile(join(root, "prompt.txt"), "prompt\n");
  const job = { act: "entrada", size: "1x1", quality: "high", output: "image.png", prompt_file: "prompt.txt", prompt_sha256: createHash("sha256").update(hashText).digest("hex") };
  await writeFile(join(root, "packages", "options-01", "jobs.json"), JSON.stringify({
    batch_id: "options-01", created_at: "2026-09-05", jobs: [job, { ...job, output: "copy.png" }, { ...job, act: "huella", output: "missing.png" }],
  }));
  return root;
}

test("cuenta imágenes únicas, no copias, paquetes preparados ni artefactos sin manifiesto", async (t) => {
  const root = await fixture(t);
  const audit = await auditTriptychIterations("packages", root);
  assert.equal(audit.unique_images, 1);
  assert.equal(audit.duplicates, 1);
  assert.equal(audit.prepared_without_output, 1);
  assert.deepEqual(audit.by_act.entrada, { unique_images: 1, preparation_rounds: 1, requested_alternatives: 1 });
  assert.equal(audit.by_act.huella.unique_images, 0);
  assert.equal(audit.rows[0].prompt_integrity, "exact_bytes");
});

test("conserva la diferencia entre hash exacto y convención histórica sin salto final", async (t) => {
  const root = await fixture(t, "prompt");
  const audit = await auditTriptychIterations("packages", root);
  assert.equal(audit.rows[0].prompt_hash_matches_manifest, false);
  assert.equal(audit.rows[0].prompt_integrity, "legacy_without_final_newline");
});

test("no oculta un cambio real del prompt como normalización histórica", async (t) => {
  const root = await fixture(t, "otro prompt");
  const audit = await auditTriptychIterations("packages", root);
  assert.equal(audit.rows[0].prompt_integrity, "mismatch");
});
