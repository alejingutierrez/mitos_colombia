#!/usr/bin/env node
// Auditoría de artefactos, no de facturación: un prompt preparado no es una imagen.
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve, join } from "node:path";
import { pathToFileURL } from "node:url";
import sharp from "sharp";

export async function auditTriptychIterations(packageRoot, workspace = process.cwd()) {
  const rows = [];
  const seen = new Map();
  const manifests = readdirSync(resolve(workspace, packageRoot)).map((name) => join(packageRoot, name, "jobs.json"))
    .filter((path) => existsSync(resolve(workspace, path)))
    .map((path) => ({ path, data: JSON.parse(readFileSync(resolve(workspace, path), "utf8")) }))
    .sort((a, b) => String(a.data.created_at || "").localeCompare(String(b.data.created_at || "")) || a.path.localeCompare(b.path));
  for (const { path: manifest, data } of manifests) {
    for (const job of data.jobs) {
      const row = {
        batch_id: data.batch_id, prepared_at: data.created_at, act: job.act,
        purpose: data.batch_id.includes("options") ? "requested_alternative" : "generation_or_revision",
        manifest, output: job.output, prompt_file: job.prompt_file,
        requested_size: job.size, requested_quality: job.quality,
        visual_function: job.visual_function || "historical_unspecified",
      };
      if (!job.output || !existsSync(resolve(workspace, job.output))) {
        rows.push({ ...row, status: "prepared_without_local_output" });
        continue;
      }
      const bytes = readFileSync(resolve(workspace, job.output));
      const hash = createHash("sha256").update(bytes).digest("hex");
      const metadata = await sharp(bytes).metadata();
      const promptHash = job.prompt_file && existsSync(resolve(workspace, job.prompt_file))
        ? createHash("sha256").update(readFileSync(resolve(workspace, job.prompt_file))).digest("hex") : null;
      const legacyHash = promptHash ? createHash("sha256")
        .update(readFileSync(resolve(workspace, job.prompt_file), "utf8").replace(/\r?\n$/, "")).digest("hex") : null;
      rows.push({ ...row, status: seen.has(hash) ? "duplicate_artifact" : "unique_generated_artifact",
        sha256: hash, duplicate_of: seen.get(hash) || null,
        width: metadata.width, height: metadata.height,
        size_matches_request: `${metadata.width}x${metadata.height}` === job.size,
        prompt_sha256: promptHash, prompt_hash_matches_manifest: promptHash === job.prompt_sha256,
        prompt_integrity: !promptHash ? "missing" : promptHash === job.prompt_sha256 ? "exact_bytes"
          : legacyHash === job.prompt_sha256 ? "legacy_without_final_newline" : "mismatch",
      });
      if (!seen.has(hash)) seen.set(hash, job.output);
    }
  }
  const generated = rows.filter((row) => row.status === "unique_generated_artifact");
  const byAct = Object.fromEntries(["entrada", "acto", "huella"].map((act) => {
    const own = generated.filter((row) => row.act === act);
    return [act, { unique_images: own.length, preparation_rounds: new Set(own.map((row) => row.batch_id)).size,
      requested_alternatives: own.filter((row) => row.purpose === "requested_alternative").length }];
  }));
  return {
    schema: "mitos-triptych-iteration-audit/v1", audited_at: new Date().toISOString(), package_root: packageRoot,
    scope: "Artefactos locales referidos por jobs.json, deduplicados por SHA-256; no mide llamadas fallidas sin imagen ni facturación de API.",
    unique_images: generated.length, by_act: byAct,
    prepared_without_output: rows.filter((row) => row.status === "prepared_without_local_output").length,
    duplicates: rows.filter((row) => row.status === "duplicate_artifact").length,
    rows,
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  if (!process.argv[2]) throw new Error("uso: node scripts/mitos/audit-triptych-iterations.mjs <directorio de paquetes del mito>");
  console.log(JSON.stringify(await auditTriptychIterations(process.argv[2]), null, 2));
}
