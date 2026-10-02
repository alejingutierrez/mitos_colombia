#!/usr/bin/env node
import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { validateBibleV3 } from "./biblia-v3.mjs";
import { wayuuVisualBibleV3 } from "../../editorial/wayuu/visual-bible-v3.mjs";
import { WAYUU_PRODUCTION_DIRECTIONS_V3 } from "../../editorial/wayuu/production-direction-v3.mjs";
import {
  assertWayuuMaterialCultureCoverage,
  materialCulturePromptLines,
} from "../../editorial/wayuu/material-culture-v3.mjs";

const args = Object.fromEntries(
  process.argv.slice(2).reduce((entries, arg, index, all) => {
    if (arg.startsWith("--")) entries.push([arg.slice(2), all[index + 1]?.startsWith("--") ? true : all[index + 1]]);
    return entries;
  }, []),
);

const plan = wayuuVisualBibleV3;
const report = validateBibleV3(plan, { stage: "generate" });
if (!report.ok) throw new Error(`Preflight de produccion bloqueado:\n${report.errors.map((item) => `${item.path}: ${item.message}`).join("\n")}`);

const batch = plan.generation_batch;
const requested = args.only
  ? String(args.only).split(",").map((item) => item.trim()).filter(Boolean)
  : batch.model_ids;
const unknown = requested.filter((id) => !batch.model_ids.includes(id));
if (unknown.length) throw new Error(`Modelos fuera de la tanda congelada ${batch.id}: ${unknown.join(", ")}`);
if (new Set(requested).size !== requested.length) throw new Error("La lista --only contiene modelos repetidos");

const revision = args.revision ? String(args.revision) : "";
if (revision && !/^[a-z0-9-]+$/.test(revision)) throw new Error("--revision solo admite minusculas, numeros y guiones");
const batchId = revision ? `${batch.id}-${revision}` : String(args.batch || batch.id);
if (!revision && batchId !== batch.id) throw new Error(`El identificador debe coincidir con la tanda congelada: ${batch.id}`);

const packageDir = path.resolve("content/mitos-visuales/_openai/wayuu/biblia-v3-production", batchId);
const promptDir = path.join(packageDir, "prompts");
const outputDir = path.resolve("output/imagegen/wayuu-v3-production", batchId);
const requestPath = path.resolve("tmp/imagegen", `${batchId}.jsonl`);
await fs.mkdir(promptDir, { recursive: true });
await fs.mkdir(outputDir, { recursive: true });
await fs.mkdir(path.dirname(requestPath), { recursive: true });

const sizeByAspect = { "1:1": "1024x1024", "16:9": "1536x1024", "9:16": "1024x1536" };
const jobs = [];
const requests = [];

function lines(label, values) {
  return [label, ...values.map((value) => `- ${value}${/[.!?]$/.test(value) ? "" : "."}`)];
}

for (const modelId of requested) {
  const model = plan.models[modelId];
  const entityId = model.entity_refs[0];
  const entity = plan.entities[entityId];
  const direction = WAYUU_PRODUCTION_DIRECTIONS_V3[modelId];
  if (!direction) throw new Error(`Falta direccion especifica de produccion: ${modelId}`);
  assertWayuuMaterialCultureCoverage({
    batchId: batch.id,
    modelId,
    entity,
    direction,
  });
  const view = model.views[0];
  const prompt = [
    `Use case: ${model.prompt_spec.use_case}`,
    `Asset type: ${model.prompt_spec.asset_type}`,
    `Primary request: ${direction.focus}`,
    `Scene/backdrop: ${direction.scene}`,
    `Subject: ${entity.name}. Modelo de ${entity.kind} para continuidad visual de ${batch.myth_slug}; no es un keyframe ni una escena narrativa completa.`,
    `Style/medium: ${model.prompt_spec.style_medium}`,
    `Composition/framing: ${model.prompt_spec.composition_framing}`,
    `Lighting/mood: ${model.prompt_spec.lighting_mood}`,
    `Materials/textures: ${model.prompt_spec.materials_textures}`,
    "",
    ...materialCulturePromptLines(direction.material_culture),
    ...(direction.material_culture ? [""] : []),
    ...lines("MUST SHOW:", direction.must_show),
    ...lines("CONSTRAINTS:", model.prompt_spec.constraints.filter((item) => !item.startsWith("mostrar:"))),
    ...lines("AVOID:", [...direction.avoid, ...model.prompt_spec.avoid]),
    "- Activo editorial de producción sujeto a QA; no afirmar canon, revisión comunitaria, ingestión o publicación.",
  ].join("\n");
  const jobId = `${modelId}--${view.id}`;
  const promptFile = path.join(promptDir, `${jobId}.prompt.txt`);
  const outputFile = path.join(outputDir, `${jobId}.jpeg`);
  await fs.writeFile(promptFile, `${prompt}\n`, { encoding: "utf8", flag: "wx" });
  jobs.push({
    id: jobId,
    model_id: modelId,
    entity_id: entityId,
    view_id: view.id,
    title: direction.title,
    prompt_file: path.relative(process.cwd(), promptFile),
    output_file: path.relative(process.cwd(), outputFile),
    prompt_sha256: crypto.createHash("sha256").update(prompt).digest("hex"),
    provider: "OpenAI API",
    model: "gpt-image-2",
    quality: "medium",
    size: sizeByAspect[view.aspect],
    output_format: "jpeg",
    input_references: [],
    status: "prepared",
  });
  requests.push({
    prompt,
    model: "gpt-image-2",
    quality: "medium",
    size: sizeByAspect[view.aspect],
    output_format: "jpeg",
    out: `${jobId}.jpeg`,
  });
}

const snapshot = {
  schema: plan.schema,
  batch: plan.generation_batch,
  inventory_approved_at: plan.inventory.approved_at,
  pilot_approved_at: plan.pilot.approved_at,
  source_snapshot_sha256: plan.source_snapshot.sha256,
  model_ids: requested,
  models: Object.fromEntries(requested.map((id) => [id, plan.models[id]])),
  entities: Object.fromEntries(requested.map((id) => {
    const entityId = plan.models[id].entity_refs[0];
    return [entityId, plan.entities[entityId]];
  })),
};
const manifest = {
  schema: "mitos-colombia-biblia-production/v3",
  batch_id: batchId,
  parent_batch_id: batch.id,
  revision: revision || null,
  myth_slug: batch.myth_slug,
  asset_type: "bible_model",
  plan: "content/mitos-visuales/wayuu.v3.json",
  prepared_at: "2026-09-04",
  quality: "medium",
  framing: "immersive_full_bleed",
  surface_finish: "layered_depth_no_exposed_support",
  generation_mode: "text_only_no_local_references",
  jobs,
};

await fs.writeFile(path.join(packageDir, "plan.snapshot.json"), `${JSON.stringify(snapshot, null, 2)}\n`, { encoding: "utf8", flag: "wx" });
await fs.writeFile(path.join(packageDir, "jobs.json"), `${JSON.stringify(manifest, null, 2)}\n`, { encoding: "utf8", flag: "wx" });
await fs.writeFile(requestPath, `${requests.map((request) => JSON.stringify(request)).join("\n")}\n`, { encoding: "utf8", flag: "wx" });

console.log(JSON.stringify({
  batch_id: batchId,
  myth_slug: batch.myth_slug,
  jobs: jobs.length,
  manifest: path.relative(process.cwd(), path.join(packageDir, "jobs.json")),
  requests: path.relative(process.cwd(), requestPath),
  output_dir: path.relative(process.cwd(), outputDir),
}, null, 2));
