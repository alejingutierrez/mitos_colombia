#!/usr/bin/env node
import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { buildVisualModelPromptV2 } from "./art-direction.mjs";
import { validateBibleV2 } from "./biblia-v2.mjs";

const planPath = path.resolve("content/mitos-visuales/wayuu.v2.json");
const plan = JSON.parse(await fs.readFile(planPath, "utf8"));
const report = validateBibleV2(plan, { stage: "generate" });
if (!report.ok) {
  throw new Error(`Preflight generate bloqueado:\n${report.errors.map((item) => `${item.path}: ${item.message}`).join("\n")}`);
}

const packageDir = path.resolve(plan.generation_batch.package_dir);
const promptDir = path.join(packageDir, "prompts");
await fs.mkdir(promptDir, { recursive: true });
await fs.mkdir(path.resolve(plan.generation_batch.output_dir), { recursive: true });

const sizes = { "16:9": "1536x1024", "9:16": "1024x1536", "1:1": "1024x1024", "3:2": "1536x1024", "2:3": "1024x1536" };
const jobs = [];

for (const modelId of plan.generation_batch.model_ids) {
  const model = plan.models[modelId];
  const myth = plan.myths[model.introduced_by];
  const commonSafeguards = plan.generation_batch.safeguards || [];
  const modelSafeguards = plan.generation_batch.model_safeguards?.[modelId] || [];
  const safeguards = [...commonSafeguards, ...modelSafeguards];
  for (const view of model.views) {
    const referenceInputs = plan.generation_batch.reference_inputs?.[modelId] || [];
    for (const reference of referenceInputs) {
      try {
        await fs.access(path.resolve(reference.path));
      } catch {
        throw new Error(`Referencia de entrada ausente para ${modelId}: ${reference.path}`);
      }
    }
    const prompt = [
      buildVisualModelPromptV2({
        comunidad: plan.community,
        region: plan.region,
        modeloId: modelId,
        modelo: model,
        vista: view,
        mythicGrammar: myth.mythic_grammar,
        magicSignature: myth.magic_signature,
        paleta: plan.visual_system.palette_logic,
        eraOverride: view.era,
      }),
      "",
      "ALCANCE DE ESTA TANDA:",
      ...safeguards.map((item) => `- ${item}.`),
      "- Prototipo interno reversible: no afirmar revisión comunitaria ni publicación.",
      ...(referenceInputs.length
        ? [
            "",
            "REFERENCIAS DE ENTRADA CONTROLADAS:",
            ...referenceInputs.map((reference, index) => `- ${index + 1}. ${reference.role}: ${reference.path}; estado ${reference.status}. No convertirla en canon ni copiar defectos de acabado.`),
          ]
        : []),
    ].join("\n");
    const name = `${modelId}--${view.id}`;
    const promptFile = path.join(promptDir, `${name}.prompt.txt`);
    const outputFile = path.resolve(plan.generation_batch.output_dir, `${name}.jpeg`);
    await fs.writeFile(promptFile, `${prompt}\n`, { encoding: "utf8", flag: "wx" });
    jobs.push({
      id: name,
      model_id: modelId,
      view_id: view.id,
      prompt_file: path.relative(process.cwd(), promptFile),
      output_file: path.relative(process.cwd(), outputFile),
      prompt_sha256: crypto.createHash("sha256").update(prompt).digest("hex"),
      provider: plan.generation_batch.provider,
      model: plan.generation_batch.model,
      quality: plan.generation_batch.quality,
      size: sizes[view.aspect],
      output_format: "jpeg",
      references: view.reference_views,
      input_references: referenceInputs,
      safeguards,
      status: "prepared",
    });
  }
}

const manifest = {
  schema: "mitos-colombia-biblia-batch/v1",
  batch_id: plan.generation_batch.id,
  asset_type: plan.generation_batch.asset_type,
  quality: plan.generation_batch.quality,
  framing: plan.generation_batch.framing,
  surface_finish: plan.generation_batch.surface_finish,
  plan: path.relative(process.cwd(), planPath),
  prepared_at: "2026-09-03",
  generation_scope: plan.approval.scope,
  jobs,
};
const snapshotPath = path.join(packageDir, "plan.snapshot.json");
await fs.writeFile(snapshotPath, `${JSON.stringify(plan, null, 2)}\n`, { encoding: "utf8", flag: "wx" });
manifest.plan = path.relative(process.cwd(), snapshotPath);
const manifestPath = path.join(packageDir, "jobs.json");
await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, { encoding: "utf8", flag: "wx" });
console.log(JSON.stringify({ manifest: manifestPath, jobs: jobs.length }, null, 2));
