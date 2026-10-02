import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = "/Users/alegut/MyApps/Personal/mitos_colombia";
const imageCli = "/Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py";
const python = "/tmp/mitos-sunburst-20260909/bin/python";
const magick = "/opt/homebrew/bin/magick";
const allowed = new Set([
  "los-dominios-de-juya",
  "los-dos-hermanos",
  "los-mellizos-transformadores",
  "maleiwa",
  "serranias-de-la-guajira",
  "ulepala",
  "umarala",
  "waleker-el-origen-del-tejido"
]);

const slugIndex = process.argv.indexOf("--slug");
const slug = slugIndex >= 0 ? process.argv[slugIndex + 1] : null;
if (!slug || !allowed.has(slug)) {
  throw new Error(`Use --slug with one of: ${[...allowed].join(", ")}`);
}
if (!process.env.OPENAI_API_KEY) throw new Error("OPENAI_API_KEY is not loaded");

process.chdir(root);
const planPath = `content/videos/wayuu/videos/${slug}/preproduccion-01/plan.json`;
const prepRoot = path.dirname(planPath);
const outRoot = `output/imagegen/wayuu/keyframes/${slug}-preproduccion-01`;
fs.mkdirSync(outRoot, { recursive: true });

const plan = JSON.parse(fs.readFileSync(planPath, "utf8"));
const frames = plan.blocks.flatMap((block) => block.keyframes);
const inventory = Object.fromEntries(plan.inventory.map((item) => [item.id, item]));
const models = Object.fromEntries(plan.canonical_models.map((model) => [model.model_id, model]));
const triptych = plan.reference_review.sources;

const hash = (file) => crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
const save = () => fs.writeFileSync(planPath, `${JSON.stringify(plan, null, 2)}\n`);
const run = (command, args, options = {}) => {
  const result = spawnSync(command, args, { stdio: "inherit", ...options });
  if (result.status !== 0) throw new Error(`${command} failed with ${result.status}`);
};
const nextPrepared = (frameId) => {
  for (let attempt = 1; attempt < 100; attempt += 1) {
    const candidate = `${prepRoot}/prepared-${frameId}-${String(attempt).padStart(2, "0")}`;
    if (!fs.existsSync(candidate)) return candidate;
  }
  throw new Error(`No free prepared directory for ${frameId}`);
};
const canonicalFor = (frame) => {
  const ids = frame.entity_ids.flatMap((id) => inventory[id]?.model_ids ?? []);
  return [...new Set(ids)].map((id) => models[id]).filter(Boolean).slice(0, 3);
};
const canonicalInput = (model) => ({
  kind: "canonical_model",
  myth: slug,
  path: model.path,
  sha256: model.sha256,
  approved: true,
  role: `Fijar el modelo canónico ${model.model_id}; preservar identidad y material sin copiar la composición.`
});
const priorInput = (frame) => ({
  kind: "prior_keyframe",
  frame_id: frame.id,
  myth: slug,
  path: frame.asset.path,
  sha256: frame.asset.sha256,
  approved: true,
  role: `Preservar continuidad causal de ${frame.id}: identidades, vestuario, paleta y material; prohibido repetir cámara o distribución.`
});

console.log(`MYTH ${slug}`);
for (let index = 0; index < frames.length; index += 1) {
  const frame = frames[index];
  if (frame.asset?.status === "approved_keyframe" && fs.existsSync(frame.asset.path)) {
    if (hash(frame.asset.path) !== frame.asset.sha256) throw new Error(`Hash mismatch for ${frame.id}`);
    console.log(`SKIP ${frame.id} already approved`);
    continue;
  }

  if (index === 0) {
    const bootstrap = frame.generation_inputs.length >= 2
      ? frame.generation_inputs
      : triptych.slice(0, 2).map((source, sourceIndex) => ({
          kind: "triptych",
          myth: slug,
          path: source.path,
          sha256: source.sha256,
          approved: true,
          role: `Fijar identidad, paleta y material desde el tríptico ${sourceIndex + 1}; prohibido copiar su composición.`
        }));
    const seen = new Set(bootstrap.map((input) => input.path));
    frame.generation_inputs = [...bootstrap];
    for (const model of canonicalFor(frame)) {
      if (frame.generation_inputs.length >= 5 || seen.has(model.path)) break;
      frame.generation_inputs.push(canonicalInput(model));
      seen.add(model.path);
    }
  } else {
    const prior = frames.slice(Math.max(0, index - 2), index);
    for (const item of prior) {
      if (item.asset?.status !== "approved_keyframe" || !fs.existsSync(item.asset.path)) {
        throw new Error(`Missing approved prior ${item.id} for ${frame.id}`);
      }
    }
    const seen = new Set(prior.map((item) => item.asset.path));
    frame.generation_inputs = prior.map(priorInput);
    for (const model of canonicalFor(frame)) {
      if (frame.generation_inputs.length >= 5 || seen.has(model.path)) continue;
      frame.generation_inputs.push(canonicalInput(model));
      seen.add(model.path);
    }
    if (index === 1 && frame.generation_inputs.length < 2) {
      const source = triptych.find((candidate) => !seen.has(candidate.path));
      if (source) frame.generation_inputs.push({
        kind: "triptych",
        myth: slug,
        path: source.path,
        sha256: source.sha256,
        approved: true,
        role: "Fijar paleta y material del mito; prohibido copiar la composición."
      });
    }
  }
  save();

  const prepared = nextPrepared(frame.id);
  run("node", ["scripts/videos/wayuu-preproduction.mjs", "prepare", "--plan", planPath, "--out", prepared]);
  const freeze = JSON.parse(fs.readFileSync(`${prepared}/freeze.json`, "utf8"));
  const job = freeze.jobs.find((candidate) => candidate.id === frame.id);
  if (!job) throw new Error(`No prepared job for ${frame.id}`);

  const master = `${outRoot}/${frame.id}.sunburst-master.jpeg`;
  const delivery = `${outRoot}/${frame.id}.jpeg`;
  console.log(`GENERATE ${frame.id} with ${job.input_images.length} refs`);
  run(python, [
    imageCli,
    "edit",
    "--model", "gpt-image-2.5-sunburst",
    "--prompt-file", job.prompt_file,
    ...job.input_images.flatMap((input) => ["--image", input.path]),
    "--size", "1024x1536",
    "--quality", "medium",
    "--output-format", "jpeg",
    "--output-compression", "92",
    "--out", master,
    "--force"
  ], { env: process.env });
  run(magick, [master, "-gravity", "center", "-crop", "864x1536+0+0", "+repage", delivery]);
  frame.asset = { status: "approved_keyframe", path: delivery, sha256: hash(delivery) };
  save();
  console.log(`APPROVED ${frame.id} ${frame.asset.sha256}`);
}

console.log(`MYTH_COMPLETE ${slug} ${frames.length}`);
