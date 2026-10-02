#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const acceptedPath = path.resolve("content/mitos-visuales/_openai/wayuu/biblia-v3-production/accepted-selection.json");
const accepted = JSON.parse(await fs.readFile(acceptedPath, "utf8"));
const { selected_models: selectedModels, required_models: requiredModels, remaining_models: remainingModels } = accepted.progress;

if (accepted.status !== "complete_qa_pass" || selectedModels !== requiredModels || remainingModels !== 0) {
  throw new Error(`La selección aceptada no está completa: ${selectedModels}/${requiredModels}, faltan ${remainingModels}`);
}

const imagePaths = [];
for (const item of accepted.selected) {
  const imagePath = path.resolve(item.path);
  await fs.access(imagePath);
  imagePaths.push(imagePath);
}

const outputPath = path.resolve("output/imagegen/wayuu-v3-production/wayuu-biblia-v3-complete-contact-sheet.jpeg");
await fs.mkdir(path.dirname(outputPath), { recursive: true });
const magick = process.env.MAGICK_BIN || "/opt/homebrew/bin/magick";
const result = spawnSync(magick, [
  "montage",
  ...imagePaths,
  "-auto-orient",
  "-thumbnail", "140x110>",
  "-background", "#171310",
  "-font", "/System/Library/Fonts/Supplemental/Arial.ttf",
  "-gravity", "center",
  "-tile", "15x29",
  "-geometry", "140x110+5+5",
  "-quality", "88",
  outputPath,
], { cwd: root, encoding: "utf8" });

if (result.status !== 0) {
  throw new Error(result.stderr || result.stdout || `ImageMagick terminó con ${result.status}`);
}

console.log(JSON.stringify({
  selected_models: imagePaths.length,
  contact_sheet: path.relative(root, outputPath),
}, null, 2));
