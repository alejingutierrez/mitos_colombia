#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";

const args = Object.fromEntries(
  process.argv.slice(2).reduce((entries, arg, index, all) => {
    if (arg.startsWith("--")) entries.push([arg.slice(2), all[index + 1]?.startsWith("--") ? true : all[index + 1]]);
    return entries;
  }, []),
);

if (!args.batch) {
  throw new Error("Uso: node scripts/mitos/build-wayuu-selection-contact-sheet-v3.mjs --batch <batch-id>");
}

const root = process.cwd();
const productionDir = path.resolve("content/mitos-visuales/_openai/wayuu/biblia-v3-production");
const batchId = String(args.batch);
const batchDir = path.join(productionDir, batchId);
const decisions = JSON.parse(await fs.readFile(path.join(batchDir, "selection.decisions.json"), "utf8"));
const baseManifest = JSON.parse(await fs.readFile(path.join(batchDir, "jobs.json"), "utf8"));
const sourceManifests = new Map();

async function manifestFor(sourceBatch) {
  if (!sourceManifests.has(sourceBatch)) {
    const manifest = JSON.parse(await fs.readFile(path.join(productionDir, sourceBatch, "jobs.json"), "utf8"));
    if (manifest.batch_id !== batchId && manifest.parent_batch_id !== batchId) {
      throw new Error(`${sourceBatch} no pertenece a ${batchId}`);
    }
    sourceManifests.set(sourceBatch, manifest);
  }
  return sourceManifests.get(sourceBatch);
}

const imagePaths = [];
for (const baseJob of baseManifest.jobs) {
  const sourceBatch = decisions.selections[baseJob.model_id];
  if (!sourceBatch) throw new Error(`Falta selección para ${baseJob.model_id}`);
  const sourceManifest = await manifestFor(sourceBatch);
  const selectedJob = sourceManifest.jobs.find((job) => job.model_id === baseJob.model_id);
  if (!selectedJob) throw new Error(`No existe ${baseJob.model_id} en ${sourceBatch}`);
  const imagePath = path.resolve(selectedJob.output_file);
  await fs.access(imagePath);
  imagePaths.push(imagePath);
}

if (imagePaths.length !== baseManifest.jobs.length) {
  throw new Error(`La lámina cubriría ${imagePaths.length}/${baseManifest.jobs.length} modelos`);
}

const outputPath = path.resolve(decisions.contact_sheet);
await fs.mkdir(path.dirname(outputPath), { recursive: true });
const magick = process.env.MAGICK_BIN || "/opt/homebrew/bin/magick";
const result = spawnSync(magick, [
  "montage",
  ...imagePaths,
  "-auto-orient",
  "-thumbnail", "320x260>",
  "-background", "#171310",
  "-font", "/System/Library/Fonts/Supplemental/Arial.ttf",
  "-gravity", "center",
  "-tile", "4x7",
  "-geometry", "320x260+16+16",
  "-quality", "90",
  outputPath,
], { cwd: root, encoding: "utf8" });

if (result.status !== 0) {
  throw new Error(result.stderr || result.stdout || `ImageMagick terminó con ${result.status}`);
}

console.log(JSON.stringify({
  batch_id: batchId,
  selected_models: imagePaths.length,
  contact_sheet: path.relative(root, outputPath),
}, null, 2));
