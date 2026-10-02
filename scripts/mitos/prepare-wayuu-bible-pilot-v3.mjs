#!/usr/bin/env node
import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { validateBibleV3 } from "./biblia-v3.mjs";
import { wayuuVisualBibleV3 } from "../../editorial/wayuu/visual-bible-v3.mjs";
import { WAYUU_PILOT_DIRECTIONS_V3 } from "../../editorial/wayuu/pilot-direction-v3.mjs";

const args = Object.fromEntries(
  process.argv.slice(2).reduce((entries, arg, index, all) => {
    if (arg.startsWith("--")) entries.push([arg.slice(2), all[index + 1]?.startsWith("--") ? true : all[index + 1]]);
    return entries;
  }, []),
);

const plan = wayuuVisualBibleV3;
const report = validateBibleV3(plan, { stage: "design" });
if (!report.ok) throw new Error(`Preflight design bloqueado:\n${report.errors.map((item) => `${item.path}: ${item.message}`).join("\n")}`);

const requested = args.only
  ? String(args.only).split(",").map((item) => item.trim()).filter(Boolean)
  : plan.pilot.model_ids;
const unknown = requested.filter((id) => !plan.pilot.model_ids.includes(id));
if (unknown.length) throw new Error(`Modelos fuera del piloto aprobado: ${unknown.join(", ")}`);

const batchId = String(args.batch || "wayuu-v3-pilot-01-multicategory-medium");
const packageDir = path.resolve("content/mitos-visuales/_openai/wayuu/biblia-v3", batchId);
const promptDir = path.join(packageDir, "prompts");
const outputDir = path.resolve("output/imagegen/wayuu-v3", batchId);
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
  const direction = WAYUU_PILOT_DIRECTIONS_V3[modelId];
  if (!direction) throw new Error(`Falta direccion especifica del piloto: ${modelId}`);
  const view = model.views[0];
  const prompt = [
    `Use case: ${model.prompt_spec.use_case}`,
    `Asset type: ${model.prompt_spec.asset_type}`,
    `Primary request: ${direction.focus}`,
    `Scene/backdrop: ${direction.scene}`,
    `Subject: ${entity.name}. Modelo de ${entity.kind} para continuidad; mostrar identidad, forma y escala, no una escena narrativa completa.`,
    `Style/medium: ${model.prompt_spec.style_medium}`,
    `Composition/framing: ${model.prompt_spec.composition_framing}`,
    `Lighting/mood: ${model.prompt_spec.lighting_mood}`,
    `Materials/textures: ${model.prompt_spec.materials_textures}`,
    "",
    ...lines("MUST SHOW:", direction.must_show),
    ...lines("CONSTRAINTS:", model.prompt_spec.constraints.filter((item) => !item.startsWith("mostrar:"))),
    ...lines("AVOID:", [...direction.avoid, ...model.prompt_spec.avoid]),
    "- Prototipo editorial interno y reversible; no afirmar canon, revision comunitaria, ingestion o publicacion.",
  ].join("\n");
  const jobId = `${modelId}--${view.id}`;
  const promptFile = path.join(promptDir, `${jobId}.prompt.txt`);
  const outputFile = path.join(outputDir, `${jobId}.jpeg`);
  await fs.writeFile(promptFile, `${prompt}\n`, { encoding: "utf8", flag: "wx" });
  const promptSha = crypto.createHash("sha256").update(prompt).digest("hex");
  jobs.push({
    id: jobId,
    model_id: modelId,
    entity_id: entityId,
    view_id: view.id,
    title: direction.title,
    prompt_file: path.relative(process.cwd(), promptFile),
    output_file: path.relative(process.cwd(), outputFile),
    prompt_sha256: promptSha,
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
  inventory_approved_at: plan.inventory.approved_at,
  source_snapshot_sha256: plan.source_snapshot.sha256,
  model_ids: requested,
  models: Object.fromEntries(requested.map((id) => [id, plan.models[id]])),
  entities: Object.fromEntries(requested.map((id) => {
    const entityId = plan.models[id].entity_refs[0];
    return [entityId, plan.entities[entityId]];
  })),
};
const manifest = {
  schema: "mitos-colombia-biblia-pilot/v3",
  batch_id: batchId,
  asset_type: "bible_pilot",
  plan: "content/mitos-visuales/wayuu.v3.json",
  prepared_at: "2026-09-03",
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
  jobs: jobs.length,
  manifest: path.relative(process.cwd(), path.join(packageDir, "jobs.json")),
  requests: path.relative(process.cwd(), requestPath),
  output_dir: path.relative(process.cwd(), outputDir),
}, null, 2));
