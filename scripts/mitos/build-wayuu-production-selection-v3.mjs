#!/usr/bin/env node
import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const productionDir = path.resolve("content/mitos-visuales/_openai/wayuu/biblia-v3-production");
const targetPath = path.join(productionDir, "accepted-selection.json");
const plan = JSON.parse(await fs.readFile(path.resolve("content/mitos-visuales/wayuu.v3.json"), "utf8"));
const pilot = JSON.parse(await fs.readFile(path.resolve("content/mitos-visuales/_openai/wayuu/biblia-v3/pilot-selection.json"), "utf8"));

async function sha256(filePath) {
  return crypto.createHash("sha256").update(await fs.readFile(filePath)).digest("hex");
}

async function verifyAndAdd(byModel, modelId, item, source, replacement = null) {
  if (!Object.hasOwn(plan.models, modelId)) throw new Error(`Modelo desconocido en ${source}: ${modelId}`);
  const prior = byModel.get(modelId);
  if (prior && replacement?.selection_source !== prior.selection_source) {
    throw new Error(`Modelo seleccionado dos veces sin sustitución explícita: ${modelId} (${prior.selection_source} y ${source})`);
  }
  if (!prior && replacement) {
    throw new Error(`Sustitución sin selección previa para ${modelId}: ${replacement.selection_source}`);
  }
  const actual = await sha256(path.resolve(item.path));
  if (actual !== item.sha256) throw new Error(`Hash divergente para ${modelId} en ${source}`);
  byModel.set(modelId, {
    model_id: modelId,
    path: item.path,
    sha256: item.sha256,
    qa_status: item.status,
    batch_id: item.batch_id,
    selection_source: source,
    ...(prior ? {
      superseded_selection: {
        path: prior.path,
        sha256: prior.sha256,
        qa_status: prior.qa_status,
        batch_id: prior.batch_id,
        selection_source: prior.selection_source,
        reason: replacement.reason,
      },
    } : {}),
  });
}

const byModel = new Map();
for (const [modelId, item] of Object.entries(pilot.selections)) {
  await verifyAndAdd(byModel, modelId, item, "content/mitos-visuales/_openai/wayuu/biblia-v3/pilot-selection.json");
}

const dirents = await fs.readdir(productionDir, { withFileTypes: true });
for (const dirent of dirents.filter((item) => item.isDirectory()).sort((a, b) => a.name.localeCompare(b.name))) {
  const selectionPath = path.join(productionDir, dirent.name, "selection.json");
  let selection;
  try {
    selection = JSON.parse(await fs.readFile(selectionPath, "utf8"));
  } catch (error) {
    if (error?.code === "ENOENT") continue;
    throw error;
  }
  if (!String(selection.status).startsWith("QA_PASS")) continue;
  const supersedes = selection.supersedes || {};
  const orphanSupersedes = Object.keys(supersedes).filter((modelId) => !Object.hasOwn(selection.selections || {}, modelId));
  if (orphanSupersedes.length) throw new Error(`Sustituciones sin modelo seleccionado en ${selectionPath}: ${orphanSupersedes.join(", ")}`);
  for (const [modelId, item] of Object.entries(selection.selections || {})) {
    await verifyAndAdd(byModel, modelId, item, path.relative(root, selectionPath), supersedes[modelId] || null);
  }
}

const order = new Map(Object.keys(plan.models).map((modelId, index) => [modelId, index]));
const selected = [...byModel.values()].sort((a, b) => order.get(a.model_id) - order.get(b.model_id));
const totalModels = Object.keys(plan.models).length;
const remaining = Object.keys(plan.models).filter((modelId) => !byModel.has(modelId));
const completedMyths = Object.entries(plan.myths).filter(([, myth]) => {
  const modelIds = new Set(
    myth.entity_refs
      .map((ref) => plan.entities[ref.entity_id])
      .filter((entity) => entity?.visual_status === "required")
      .flatMap((entity) => entity.model_refs),
  );
  return modelIds.size > 0 && [...modelIds].every((modelId) => byModel.has(modelId));
}).map(([slug]) => slug);

const output = {
  schema: "mitos-colombia-biblia-production-accepted-selection/v3",
  community: plan.community,
  reviewed_at: "2026-09-04",
  status: selected.length === totalModels ? "complete_qa_pass" : "production_in_progress",
  provider: "OpenAI API",
  model: "gpt-image-2",
  quality: "medium",
  generation_mode: "text_only_no_local_references",
  progress: {
    selected_models: selected.length,
    required_models: totalModels,
    remaining_models: totalModels - selected.length,
    completed_myths: completedMyths.length,
    total_myths: Object.keys(plan.myths).length,
  },
  completed_myth_slugs: completedMyths,
  selected,
  superseded_selections: selected.filter((item) => item.superseded_selection).map((item) => ({
    model_id: item.model_id,
    ...item.superseded_selection,
  })),
  remaining_model_ids: remaining,
  publication: {
    ingested: false,
    published: false,
    canonical: false,
    reason: "La selección de producción es acumulativa y reversible; QA de Biblia no equivale a ingestión, canon o publicación.",
  },
};

await fs.writeFile(targetPath, `${JSON.stringify(output, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ target: path.relative(root, targetPath), ...output.progress }, null, 2));
