#!/usr/bin/env node
import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const bibleDir = path.resolve("content/mitos-visuales/_openai/wayuu/biblia");
const targetPath = path.join(bibleDir, "accepted-selection.json");
const plan = JSON.parse(await fs.readFile(path.resolve("content/mitos-visuales/wayuu.v2.json"), "utf8"));
const foundation = JSON.parse(await fs.readFile(path.join(bibleDir, "foundation-selection.json"), "utf8"));

function relative(filePath) {
  return path.relative(root, filePath);
}

async function sha256(filePath) {
  return crypto.createHash("sha256").update(await fs.readFile(filePath)).digest("hex");
}

const selected = [];
const byModel = new Map();
const foundationModels = new Set(foundation.selected.map((item) => item.model_id));

for (const item of foundation.selected) {
  const absolute = path.resolve(item.path);
  const actual = await sha256(absolute);
  if (actual !== item.sha256) throw new Error(`Hash de cimiento divergente: ${item.model_id}`);
  const entry = {
    model_id: item.model_id,
    view_id: "canon",
    path: item.path,
    package: path.basename(item.prompt_package),
    qa_source: `${item.prompt_package}/QA.md`,
    dimensions: item.dimensions,
    sha256: item.sha256,
    qa_status: item.qa_status,
    generation_mode: "selected_from_foundation_qa",
  };
  selected.push(entry);
  byModel.set(entry.model_id, entry);
}

const dirents = await fs.readdir(bibleDir, { withFileTypes: true });
for (const dirent of dirents.filter((item) => item.isDirectory()).sort((a, b) => a.name.localeCompare(b.name))) {
  const packageDir = path.join(bibleDir, dirent.name);
  const qaPath = path.join(packageDir, "QA.md");
  const jobsPath = path.join(packageDir, "jobs.json");
  let qa;
  let manifest;
  try {
    [qa, manifest] = await Promise.all([
      fs.readFile(qaPath, "utf8"),
      fs.readFile(jobsPath, "utf8").then(JSON.parse),
    ]);
  } catch (error) {
    if (error?.code === "ENOENT") continue;
    throw error;
  }

  const qaWithSentinel = `${qa.trimEnd()}\n## __END__\n`;
  const sectionPattern = /^## ([^\n]+)\n([\s\S]*?)(?=^## )/gm;
  for (const match of qaWithSentinel.matchAll(sectionPattern)) {
    const jobId = match[1].trim();
    const section = match[2];
    if (!/Estado: `DIRECTION_CANDIDATE_PASS`/.test(section)) continue;

    const job = manifest.jobs.find((candidate) => candidate.id === jobId);
    if (!job) throw new Error(`QA aprobado sin job en ${dirent.name}: ${jobId}`);
    if (foundationModels.has(job.model_id)) continue;
    if (byModel.has(job.model_id)) {
      throw new Error(`Más de un candidato aprobado para ${job.model_id}: ${byModel.get(job.model_id).package} y ${dirent.name}`);
    }

    const hashMatch = section.match(/SHA-256: `([a-f0-9]{64})`/);
    if (!hashMatch) throw new Error(`QA aprobado sin SHA-256 en ${dirent.name}: ${jobId}`);
    const absolute = path.resolve(job.output_file);
    const actual = await sha256(absolute);
    if (actual !== hashMatch[1]) throw new Error(`Hash divergente en ${dirent.name}: ${jobId}`);

    const entry = {
      model_id: job.model_id,
      view_id: job.view_id,
      path: job.output_file,
      package: dirent.name,
      qa_source: relative(qaPath),
      dimensions: job.size,
      sha256: actual,
      qa_status: "DIRECTION_CANDIDATE_PASS",
      generation_mode: job.input_references?.length
        ? "edit_with_approved_pipeline_references"
        : "text_to_image",
      input_reference_count: job.input_references?.length || 0,
    };
    selected.push(entry);
    byModel.set(entry.model_id, entry);
  }
}

const planOrder = new Map(Object.keys(plan.models).map((modelId, index) => [modelId, index]));
selected.sort((a, b) => (planOrder.get(a.model_id) ?? Number.MAX_SAFE_INTEGER) - (planOrder.get(b.model_id) ?? Number.MAX_SAFE_INTEGER));

const totalModels = Object.keys(plan.models).length;
if (selected.length > totalModels) throw new Error(`Selección imposible: ${selected.length}/${totalModels}`);

const output = {
  schema: "mitos-colombia-biblia-accepted-selection/v1",
  community: plan.community,
  reviewed_at: "2026-09-03",
  status: "direction_candidates_not_ingested",
  provider: "OpenAI API",
  model: "gpt-image-2",
  quality: "medium",
  framing: "immersive_full_bleed",
  surface_finish: "layered_depth_no_exposed_support",
  progress: {
    accepted_models: selected.length,
    total_models: totalModels,
    remaining_models: totalModels - selected.length,
  },
  reference_policy: {
    default: "text_only",
    allowed: "Only pipeline-generated assets already approved by QA, and only when continuity requires them.",
    external_local_files: "not_approved_by_default",
  },
  selected,
  publication: {
    ingested: false,
    published: false,
    canonical: false,
    reason: "Selección acumulativa y reversible para revisión; QA de dirección no equivale a canon o publicación.",
  },
};

await fs.writeFile(targetPath, `${JSON.stringify(output, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ target: targetPath, ...output.progress }, null, 2));
