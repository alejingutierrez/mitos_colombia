#!/usr/bin/env node
/**
 * Congela las tres piezas de un tríptico para OpenAI sin llamar la API.
 *
 * Calidad por función, nunca global:
 *   entrada 16:9 = high · acto 9:16 = medium · huella 1:1 = medium.
 *
 * Uso:
 *   npm run mitos:prepare:triptych:openai -- \
 *     --comunidad muiscas --slug chiminigagua --batch-id chiminigagua-openai-01
 */
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { join, relative, resolve } from "node:path";

import { qualityForTriptychAct } from "../../src/lib/image-quality-policy.js";
import { ACTOS, buildPrompt } from "./art-direction.mjs";
import { isStoryFirstProfile, buildStoryFirstPrompt, validateNarrativePlan, validateVisualMemoryReview } from "./triptych-story-direction.mjs";

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, arg, index, all) => {
    if (arg.startsWith("--")) acc.push([arg.slice(2), all[index + 1]?.startsWith("--") ? true : all[index + 1]]);
    return acc;
  }, []),
);

const root = resolve(import.meta.dirname, "../..");
const community = String(args.comunidad || "muiscas");
const slug = String(args.slug || "");
const batchId = String(args["batch-id"] || "");
const requestedActs = args.only
  ? String(args.only).split(",").map((act) => act.trim()).filter(Boolean)
  : ["entrada", "acto", "huella"];
if (!slug) throw new Error("falta --slug");
if (!batchId) throw new Error("falta --batch-id; cada paquete debe tener un ID nuevo e inmutable");
if (args.quality) throw new Error("--quality no está permitido: la política fija high/medium/medium por acto");
for (const act of requestedActs) {
  if (!ACTOS[act]) throw new Error(`acto desconocido en --only: ${act}`);
}

const planPath = resolve(args.plan || join(root, "content/mitos-visuales", `${community}.json`));
const plan = JSON.parse(readFileSync(planPath, "utf8"));
const myth = plan.mitos?.[slug];
if (!myth) throw new Error(`mito no está en el plan de trípticos: ${slug}`);
const campaignScope = plan.campaign_scope ? JSON.parse(readFileSync(resolve(root, plan.campaign_scope), "utf8")) : null;
let visualMemory = null;
if (campaignScope?.require_visual_memory_review || plan.visual_memory_library) {
  if (!plan.visual_memory_library) throw new Error("La campaña exige revisar imágenes actuales e históricas antes de preparar");
  visualMemory = JSON.parse(readFileSync(resolve(root, plan.visual_memory_library), "utf8"));
  validateVisualMemoryReview(myth, visualMemory);
}
const storyFirst = isStoryFirstProfile(plan.prompt_profile);
let narrativeSnapshot = null;
if (storyFirst) {
  narrativeSnapshot = JSON.parse(readFileSync(resolve(root, myth.narrative_contract.target_snapshot), "utf8"));
  validateNarrativePlan(plan, myth, narrativeSnapshot);
}

const canonicalModelIds = Array.isArray(myth.canon_models) ? myth.canon_models : [];
let canonicalModels = [];
if (canonicalModelIds.length) {
  const selectionPath = resolve(args["bible-selection"] || plan.bible_selection || "");
  if (!selectionPath || !existsSync(selectionPath)) {
    throw new Error(`${slug}: falta bible_selection para validar canon_models`);
  }
  const selection = JSON.parse(readFileSync(selectionPath, "utf8"));
  const selectedById = new Map((selection.selected || []).map((item) => [item.model_id, item]));
  const missingModels = canonicalModelIds.filter((modelId) => !selectedById.has(modelId));
  if (missingModels.length) {
    throw new Error(`${slug}: modelos canónicos no aprobados: ${missingModels.join(", ")}`);
  }
  canonicalModels = canonicalModelIds.map((modelId) => {
    const item = selectedById.get(modelId);
    if (!existsSync(resolve(root, item.path))) {
      throw new Error(`${slug}: archivo canónico ausente para ${modelId}: ${item.path}`);
    }
    return {
      model_id: modelId,
      path: item.path,
      sha256: item.sha256,
      qa_status: item.qa_status,
    };
  });
}

const packageDir = resolve(args.out || join(root, "content/mitos-visuales/_openai", community, slug, batchId));
const promptDir = join(packageDir, "prompts");
const outputDir = join(root, "output/imagegen", community, "triptychs", batchId);
const sizes = storyFirst ? plan.output_sizes : { entrada: "1536x1024", acto: "1024x1536", huella: "1024x1024" };

function referencePath(ref) {
  if (ref.includes("/")) return join(root, "content/videos", community, `${ref}.jpg`);
  return join(root, "content/videos", community, "biblia", `${ref}.jpg`);
}

function referenceLabel(ref) {
  if (!ref.includes("/")) return `${ref}: ficha canónica de la Biblia; conservar identidad y materialidad, no su encuadre.`;
  return `${ref}: asset aprobado; conservar sólo la continuidad declarada y componer la escena nueva.`;
}

await mkdir(promptDir, { recursive: true });
await mkdir(outputDir, { recursive: true });

const jobs = [];
for (const act of requestedActs) {
  const scene = myth.escenas?.[act];
  if (!scene) throw new Error(`falta escena ${slug}/${act}`);
  if (!Array.isArray(scene.refs)) throw new Error(`${slug}/${act}: refs debe ser una lista explícita, incluso []`);
  const refPaths = scene.refs.map(referencePath);
  const missing = refPaths.filter((item) => !existsSync(item));
  if (missing.length) throw new Error(`${slug}/${act}: referencias ausentes: ${missing.map((item) => relative(root, item)).join(", ")}`);

  const prompt = storyFirst ? buildStoryFirstPrompt({ myth, act }) : buildPrompt({
    comunidad: plan.comunidad,
    region: plan.region,
    acto: act,
    composicion: scene.composicion,
    escena: scene.escena,
    paleta: myth.paleta,
    eraOverride: scene.era,
    mythicGrammar: myth.mythic_grammar,
    magicSignature: myth.magic_signature,
    mythicImagination: myth.mythic_imagination,
    characterArtTreatment: myth.character_art_treatment,
    narrativeMagic: scene.magic_in_the_ordinary,
    extra: [
      ...(myth.continuity_contract?.length
        ? [
            "CONTRATO DE CONTINUIDAD DERIVADO DE LA BIBLIA APROBADA:",
            ...myth.continuity_contract.map((line) => `- ${line}`),
          ]
        : []),
      ...(scene.refs.length
        ? [
          "REFERENCIAS VISUALES ADJUNTAS, EN ESTE MISMO ORDEN:",
          ...scene.refs.map((ref, index) => `${index + 1}. ${referenceLabel(ref)}`),
        ]
        : [
            "GENERACIÓN DESDE TEXTO: no se adjunta ni se sube ninguna imagen local. Reconstruir la continuidad únicamente desde el contrato escrito.",
          ]),
    ],
  });
  const promptPath = join(promptDir, `${act}.prompt.txt`);
  await writeFile(promptPath, `${prompt}\n`, { encoding: "utf8", flag: "wx" });
  jobs.push({
    act,
    aspect_ratio: ACTOS[act].aspect_ratio,
    size: sizes[act],
    quality: qualityForTriptychAct(act),
    api_method: scene.refs.length ? "images.edit" : "images.generate",
    composition: scene.composicion,
    canon_model_ids: canonicalModelIds,
    refs: scene.refs,
    ref_paths: refPaths.map((item) => relative(root, item)),
    prompt_file: relative(root, promptPath),
    prompt_sha256: createHash("sha256").update(`${prompt}\n`).digest("hex"),
    ...(storyFirst ? { narrative_event_ids: scene.narrative_event_ids, editorial_translation: scene.editorial_translation } : {}),
    ...(scene.magic_in_the_ordinary ? { magic_in_the_ordinary: scene.magic_in_the_ordinary } : {}),
    ...(scene.visual_function ? { visual_function: scene.visual_function } : {}),
    ...(scene.symbolic_contract ? { symbolic_contract: scene.symbolic_contract } : {}),
    output: relative(root, join(outputDir, `${act}.jpeg`)),
    status: "prepared",
  });
}

const manifest = {
  schema: "mitos-openai-triptych/v1",
  batch_id: batchId,
  created_at: new Date().toISOString(),
  account_source: "OPENAI_API_KEY from ignored .env",
  provider: "openai",
  model: "gpt-image-2",
  community,
  myth: slug,
  plan: relative(root, planPath),
  prompt_profile: plan.prompt_profile || "legacy_art_first",
  plan_sha256: createHash("sha256").update(readFileSync(planPath)).digest("hex"),
  narrative_target_sha256: narrativeSnapshot?.content_sha256 || null,
  evidence: myth.evidence || [],
  visual_memory_library: plan.visual_memory_library || null,
  visual_memory_review: myth.visual_memory_review || null,
  bible_selection: plan.bible_selection || null,
  canonical_models: canonicalModels,
  approval_gate: plan.approval_gate || null,
  requested_acts: requestedActs,
  generation_mode: jobs.some((job) => job.refs.length) ? "with_explicit_visual_references" : "text_only_no_local_references",
  framing: "immersive_full_bleed",
  surface_finish: "layered_depth_no_exposed_support",
  jobs,
};
await writeFile(join(packageDir, "jobs.json"), `${JSON.stringify(manifest, null, 2)}\n`, { encoding: "utf8", flag: "wx" });
if (storyFirst) {
  await writeFile(join(packageDir, "plan.snapshot.json"), `${JSON.stringify(plan, null, 2)}\n`, { encoding: "utf8", flag: "wx" });
  await writeFile(join(packageDir, "narrative.snapshot.json"), `${JSON.stringify(narrativeSnapshot, null, 2)}\n`, { encoding: "utf8", flag: "wx" });
}
if (visualMemory) {
  await writeFile(join(packageDir, "visual-memory.snapshot.json"), `${JSON.stringify(visualMemory.myths[slug], null, 2)}\n`, { encoding: "utf8", flag: "wx" });
}

const cli = "/Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py";
const commands = jobs.flatMap((job) => [
  `# ${job.act} · ${job.aspect_ratio} · ${job.quality} · ${job.api_method}`,
  `"$IMAGEGEN_PYTHON" ${cli} ${job.refs.length ? "edit" : "generate"} \\`,
  "  --model gpt-image-2 \\",
  `  --prompt-file ${job.prompt_file} \\`,
  ...job.ref_paths.map((item) => `  --image ${item} \\`),
  `  --size ${job.size} --quality ${job.quality} --output-format jpeg --no-augment \\`,
  `  --out ${job.output}`,
  "",
]);

await writeFile(join(packageDir, "LEEME.md"), [
  `# OpenAI · tríptico · ${myth.titulo || slug}`,
  "",
  "Paquete inmutable. No llama la API y no contiene la clave.",
  "",
  "- Modelo: `gpt-image-2`.",
  "- Entrada horizontal 16:9: `high`.",
  "- Acto vertical 9:16: `medium`.",
  "- Huella cuadrada 1:1: `medium`.",
  `- Generación: ${jobs.some((job) => job.refs.length) ? "con referencias visuales explícitas" : "desde texto, sin subir imágenes locales"}.`,
  `- Puerta editorial: ${plan.approval_gate || "revisión conjunta antes de continuar"}.`,
  "- Encuadre: dentro del diorama, sin perímetro/base/cartón soporte visibles.",
  "- Profundidad: capas internas a distintas distancias, con aire, oclusiones y sombras.",
  "",
  "```bash",
  "export IMAGEGEN_PYTHON=/tmp/mitos-imagegen/bin/python",
  "set -a",
  "source .env",
  "set +a",
  "",
  ...commands,
  "```",
  "",
  requestedActs.length === 3
    ? "Revisar las tres piezas juntas antes de ingerir. Una pieza fallida abre un paquete nuevo; no se sobrescribe éste."
    : `Lote de corrección parcial: ${requestedActs.join(", ")}. Sustituye sólo las piezas aprobadas explícitamente; no sobrescribe lotes anteriores.`,
  "",
].join("\n"), { encoding: "utf8", flag: "wx" });

console.log(`paquete OpenAI tríptico → ${relative(root, packageDir)}`);
for (const job of jobs) console.log(`  ${job.act} · ${job.size} · ${job.quality} · ${job.prompt_sha256.slice(0, 12)}`);
