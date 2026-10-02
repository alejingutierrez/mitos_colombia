#!/usr/bin/env node
import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

const args = Object.fromEntries(
  process.argv.slice(2).reduce((entries, arg, index, all) => {
    if (arg.startsWith("--")) entries.push([arg.slice(2), all[index + 1]?.startsWith("--") ? true : all[index + 1]]);
    return entries;
  }, []),
);

if (!args.batch) throw new Error("Uso: node scripts/mitos/finalize-wayuu-production-batch-v3.mjs --batch <batch-id>");

const root = process.cwd();
const productionDir = path.resolve("content/mitos-visuales/_openai/wayuu/biblia-v3-production");
const batchId = String(args.batch);
const batchDir = path.join(productionDir, batchId);
const decisionsPath = path.join(batchDir, "selection.decisions.json");
const targetPath = path.join(batchDir, "selection.json");
const plan = JSON.parse(await fs.readFile(path.resolve("content/mitos-visuales/wayuu.v3.json"), "utf8"));
const decisions = JSON.parse(await fs.readFile(decisionsPath, "utf8"));

async function readManifest(sourceBatch) {
  const manifest = JSON.parse(await fs.readFile(path.join(productionDir, sourceBatch, "jobs.json"), "utf8"));
  if (manifest.parent_batch_id !== batchId && manifest.batch_id !== batchId) {
    throw new Error(`${sourceBatch} no pertenece a ${batchId}`);
  }
  return manifest;
}

async function sha256(filePath) {
  return crypto.createHash("sha256").update(await fs.readFile(filePath)).digest("hex");
}

const sourceBatches = new Set([
  batchId,
  ...Object.values(decisions.selections),
  ...decisions.rejections.map((item) => item.source_batch),
]);
const manifests = new Map();
for (const sourceBatch of sourceBatches) manifests.set(sourceBatch, await readManifest(sourceBatch));

const baseManifest = manifests.get(batchId);
const baseModelIds = baseManifest.model_ids || baseManifest.jobs.map((job) => job.model_id);
const selectedModelIds = Object.keys(decisions.selections);
const supersedes = decisions.supersedes || {};
const missing = baseModelIds.filter((modelId) => !selectedModelIds.includes(modelId));
const extra = selectedModelIds.filter((modelId) => !baseModelIds.includes(modelId));
if (missing.length || extra.length) {
  throw new Error(`La decisión no cubre exactamente el lote. Faltan: ${missing.join(", ") || "ninguno"}. Sobran: ${extra.join(", ") || "ninguno"}.`);
}
const invalidSupersedes = Object.entries(supersedes).filter(([modelId, item]) => (
  !selectedModelIds.includes(modelId)
  || typeof item?.selection_source !== "string"
  || !item.selection_source.endsWith("/selection.json")
  || typeof item?.reason !== "string"
  || item.reason.length < 12
));
if (invalidSupersedes.length) {
  throw new Error(`Sustituciones inválidas o sin selección/causa: ${invalidSupersedes.map(([modelId]) => modelId).join(", ")}`);
}

function jobFor(sourceBatch, modelId) {
  const job = manifests.get(sourceBatch).jobs.find((item) => item.model_id === modelId);
  if (!job) throw new Error(`No existe job para ${modelId} en ${sourceBatch}`);
  return job;
}

function qaStatus(sourceBatch) {
  const revision = sourceBatch.match(/-(?:correction|corrections|qa-correction)-(\d+)$/)?.[1];
  return revision ? `PASS_AFTER_CORRECTION_${revision}` : "PASS";
}

const selections = {};
for (const modelId of baseModelIds) {
  const sourceBatch = decisions.selections[modelId];
  const job = jobFor(sourceBatch, modelId);
  const absolutePath = path.resolve(job.output_file);
  selections[modelId] = {
    status: qaStatus(sourceBatch),
    batch_id: sourceBatch,
    path: path.relative(root, absolutePath),
    sha256: await sha256(absolutePath),
  };
}

const rejections = [];
for (const rejection of decisions.rejections) {
  const job = jobFor(rejection.source_batch, rejection.model_id);
  const absolutePath = path.resolve(job.output_file);
  rejections.push({
    model_id: rejection.model_id,
    batch_id: rejection.source_batch,
    reason: rejection.reason,
    path: path.relative(root, absolutePath),
    sha256: await sha256(absolutePath),
  });
}

const acceptedPath = path.join(productionDir, "accepted-selection.json");
const accepted = JSON.parse(await fs.readFile(acceptedPath, "utf8"));
const selectedNow = new Set(baseModelIds);
const priorSelected = new Set(accepted.selected.map((item) => item.model_id).filter((modelId) => !selectedNow.has(modelId)));
const afterSelected = new Set([...priorSelected, ...selectedNow]);

const myth = plan.myths[baseManifest.myth_slug];
if (!myth) throw new Error(`Mito desconocido: ${baseManifest.myth_slug}`);
const mythModelIds = [...new Set(
  myth.entity_refs
    .map((ref) => plan.entities[ref.entity_id])
    .filter((entity) => entity?.visual_status === "required")
    .flatMap((entity) => entity.model_refs),
)];
const reused = mythModelIds.filter((modelId) => !selectedNow.has(modelId) && priorSelected.has(modelId));
const mythSelected = mythModelIds.filter((modelId) => afterSelected.has(modelId));
if (mythSelected.length !== mythModelIds.length) {
  throw new Error(`El mito no queda cubierto: faltan ${mythModelIds.filter((modelId) => !afterSelected.has(modelId)).join(", ")}`);
}

const completedMyths = Object.entries(plan.myths).filter(([, item]) => {
  const ids = new Set(
    item.entity_refs
      .map((ref) => plan.entities[ref.entity_id])
      .filter((entity) => entity?.visual_status === "required")
      .flatMap((entity) => entity.model_refs),
  );
  return ids.size > 0 && [...ids].every((modelId) => afterSelected.has(modelId));
}).map(([slug]) => slug);

const contactSheet = path.resolve(decisions.contact_sheet);
const highestCorrection = Math.max(0, ...Object.values(decisions.selections).map((sourceBatch) => Number(sourceBatch.match(/-(?:correction|corrections|qa-correction)-(\d+)$/)?.[1] || 0)));
const totalModels = Object.keys(plan.models).length;
const output = {
  schema: "mitos-colombia-biblia-production-selection/v3",
  community: plan.community,
  myth_slug: baseManifest.myth_slug,
  batch_id: batchId,
  status: highestCorrection ? `QA_PASS_AFTER_RESEARCH_AND_CORRECTIONS_${String(highestCorrection).padStart(2, "0")}` : "QA_PASS_AFTER_RESEARCH",
  reviewed_at: decisions.reviewed_at,
  quality: baseManifest.quality,
  generation_mode: baseManifest.generation_mode,
  contact_sheet: path.relative(root, contactSheet),
  contact_sheet_sha256: await sha256(contactSheet),
  batch_models: baseModelIds.length,
  selected_models: selectedModelIds.length,
  approved_models_reused_for_myth: reused,
  supersedes,
  myth_model_coverage: { selected: mythSelected.length, required: mythModelIds.length, remaining: mythModelIds.length - mythSelected.length },
  bible_progress_after_batch: { selected_models: afterSelected.size, required_models: totalModels, remaining_models: totalModels - afterSelected.size },
  completed_myths_after_batch: completedMyths.length,
  selections,
  rejections,
};

await fs.writeFile(targetPath, `${JSON.stringify(output, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ target: path.relative(root, targetPath), ...output.bible_progress_after_batch, completed_myths: completedMyths.length, rejections: rejections.length }, null, 2));
