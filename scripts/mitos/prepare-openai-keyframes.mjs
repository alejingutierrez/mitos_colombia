#!/usr/bin/env node
/**
 * Congela los prompts, referencias y destinos de los keyframes que se van a
 * generar con la cuenta OpenAI declarada en el `.env` local.
 *
 * No llama la API ni lee el secreto. La generación se ejecuta de forma
 * explícita con el CLI oficial del skill imagegen y luego se ingiere con
 * `ingest-keyframes.mjs --local-dir ...`.
 *
 *   npm run mitos:prepare:keyframes:openai -- \
 *     --comunidad muiscas --slug el-bermejo-aspira-a-ser-rey --only b1a,b5a
 */
import { existsSync, readFileSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { resolve, join, relative } from "node:path";
import { buildVideoKeyframePrompt } from "./art-direction.mjs";

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, arg, index, all) => {
    if (arg.startsWith("--")) acc.push([arg.slice(2), all[index + 1]?.startsWith("--") ? true : all[index + 1]]);
    return acc;
  }, [])
);
const root = resolve(import.meta.dirname, "../..");
const comunidad = String(args.comunidad || "muiscas");
const slug = String(args.slug || "");
const only = new Set(String(args.only || "").split(",").map((value) => value.trim()).filter(Boolean));
if (!slug) throw new Error("falta --slug");

const planPath = join(root, "content/mitos-visuales", `${comunidad}.json`);
const plan = JSON.parse(readFileSync(planPath, "utf8"));
const mito = plan.mitos[slug];
if (!mito) throw new Error(`mito no está en el plan: ${slug}`);

const videoFolder = mito.carpeta_video || slug;
const keyframeDir = join(root, "content/videos", comunidad, "videos", videoFolder, "keyframes");
const packageDir = resolve(args.out || join(root, "content/mitos-visuales/_openai", comunidad, slug));
const generatedDir = join(packageDir, "generated");

function referencePath(ref) {
  if (ref.includes("/")) return join(root, "content/videos", comunidad, `${ref}.jpg`);
  return join(root, "content/videos", comunidad, "biblia", `${ref}.jpg`);
}

function referenceLabel(ref) {
  if (!ref.includes("/")) {
    const own = mito.biblia?.[ref];
    if (own?.desc) return `${ref}: ficha canónica; conservar ${own.desc.split(".")[0].toLowerCase()}.`;
    return `${ref}: ficha canónica de la biblia visual muisca.`;
  }
  if (ref.startsWith("mitos/")) return `${ref}: escena aprobada del tríptico; conservar mundo material, técnica y continuidad del lugar.`;
  if (ref.startsWith("videos/")) return `${ref}: fotograma aprobado de la misma secuencia; conservar continuidad inmediata de sujetos, luz y utilería.`;
  return `${ref}: referencia canónica aprobada.`;
}

const candidates = [];
for (const [block, value] of Object.entries(mito.video?.bloques || {})) {
  for (const side of ["a", "b"]) {
    const scene = value[side];
    if (!scene || scene.reusa) continue;
    const tag = `${block}${side}`;
    if (only.size && !only.has(tag)) continue;
    if (!args.force && existsSync(join(keyframeDir, `${tag}.jpg`))) continue;
    if (!Array.isArray(scene.refs)) {
      throw new Error(`${tag}: falta decidir refs en el plan. Declara una lista explícita, incluso [] si el plano no necesita referencia`);
    }
    const refs = scene.refs;
    const paths = refs.map(referencePath);
    const missing = paths.filter((path) => !existsSync(path));
    if (missing.length) {
      throw new Error(`${tag}: faltan referencias antes de gastar: ${missing.map((path) => relative(root, path)).join(", ")}`);
    }
    const prompt = buildVideoKeyframePrompt({
      comunidad: plan.comunidad,
      region: plan.region,
      composicion: scene.comp,
      escena: scene.desc,
      paleta: mito.paleta,
      eraOverride: scene.era,
      referencias: refs.map(referenceLabel),
      narrativeMagic: scene.magic_in_the_ordinary,
    });
    candidates.push({
      tag,
      block,
      side,
      line: value.linea,
      composition: scene.comp,
      era: scene.era || null,
      refs,
      ref_paths: paths.map((path) => relative(root, path)),
      api_method: refs.length ? "images.edit" : "images.generate",
      prompt,
      prompt_sha256: createHash("sha256").update(prompt).digest("hex"),
      output: relative(root, join(generatedDir, `${tag}.jpeg`)),
    });
  }
}
if (!candidates.length) throw new Error("no hay keyframes pendientes que coincidan con la selección");

await mkdir(generatedDir, { recursive: true });
for (const job of candidates) await writeFile(join(packageDir, `${job.tag}.prompt.txt`), `${job.prompt}\n`);
const manifest = {
  schema: "mitos-openai-keyframes/v1",
  created_at: new Date().toISOString(),
  account_source: "OPENAI_API_KEY from ignored .env",
  provider: "openai",
  model: "gpt-image-2",
  quality: "medium",
  size: "1024x1536",
  community: comunidad,
  myth: slug,
  plan: relative(root, planPath),
  jobs: candidates.map(({ prompt, ...job }) => ({ ...job, prompt_file: `${job.tag}.prompt.txt` })),
};
await writeFile(join(packageDir, "jobs.json"), `${JSON.stringify(manifest, null, 2)}\n`);
const cli = "/Users/alegut/.codex/skills/.system/imagegen/scripts/image_gen.py";
const generationCommands = candidates.flatMap((job) => [
  `# ${job.tag} · ${job.composition} · ${job.api_method}`,
  `"$IMAGEGEN_PYTHON" ${cli} ${job.refs.length ? "edit" : "generate"} \\`,
  `  --model gpt-image-2 \\`,
  `  --prompt-file ${relative(root, join(packageDir, `${job.tag}.prompt.txt`))} \\`,
  ...job.ref_paths.map((path) => `  --image ${path} \\`),
  `  --size 1024x1536 --quality medium --output-format jpeg --no-augment \\`,
  `  --out ${job.output}`,
  "",
]);
await writeFile(join(packageDir, "LEEME.md"), [
  `# OpenAI · ${mito.titulo}`,
  "",
  `Paquete reproducible de ${candidates.length} keyframe(s). La clave se lee sólo desde el \`.env\` ignorado.`,
  "",
  "- Modelo: `gpt-image-2`",
  "- Calidad: `medium`",
  "- Tamaño maestro: `1024x1536`",
  "- Método: `images.edit` cuando el plano tiene referencias; `images.generate` cuando no las necesita.",
  "- Regla: nunca reemplazar un keyframe existente; todo reintento requiere revisión explícita.",
  "",
  "## Preparar el cliente temporal",
  "",
  "```bash",
  "python3 -m venv /tmp/mitos-imagegen",
  "/tmp/mitos-imagegen/bin/python -m pip install 'openai>=2.0.0'",
  "export IMAGEGEN_PYTHON=/tmp/mitos-imagegen/bin/python",
  "set -a",
  "source .env",
  "set +a",
  "```",
  "",
  "## Generar",
  "",
  "Las referencias aparecen en el mismo orden que en el prompt y `jobs.json`.",
  "",
  "```bash",
  ...generationCommands,
  "```",
  "",
  "## Revisar e ingerir",
  "",
  "Después de generar y revisar:",
  "",
  "```bash",
  `npm run mitos:ingest:keyframes -- --comunidad ${comunidad} --slug ${slug} --local-dir ${relative(root, generatedDir)} --jobs ${relative(root, join(packageDir, "jobs.json"))}`,
  "npm run mitos:estado -- --comunidad muiscas --detalle",
  "```",
  "",
].join("\n"));

console.log(`paquete OpenAI → ${relative(root, packageDir)}`);
for (const job of candidates) console.log(`  ${job.tag} · refs ${job.refs.length} · ${job.prompt_sha256.slice(0, 12)} · ${job.output}`);
