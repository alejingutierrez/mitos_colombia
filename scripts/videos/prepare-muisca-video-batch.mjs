// Congela y prepara el lote de videos muiscas cuyos keyframes ya existen.
// No genera imágenes ni video: crea recortes de reutilizaciones ya aprobadas,
// prompts de movimiento, especificaciones de voz y planes sin texto en pantalla.
//
// Uso:
//   node scripts/videos/prepare-muisca-video-batch.mjs \
//     --catalog /ruta/al/content/mitos-visuales/muiscas.json

import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "../..");
const args = process.argv.slice(2);

function getFlag(name, fallback = null) {
  const i = args.indexOf(name);
  if (i === -1) return fallback;
  return args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : true;
}

const catalogPath = path.resolve(
  getFlag("--catalog", path.join(rootDir, "content/mitos-visuales/muiscas.json"))
);
const videosDir = path.join(rootDir, "content/videos/muiscas/videos");
const mythsDir = path.join(rootDir, "content/videos/muiscas/mitos");
const batchPath = path.join(rootDir, "content/videos/muiscas/video-batch-2026-08-31.json");

const VOICE = {
  voice_id: "bNziytBsHtCSsgcPplG9",
  voice_name: "Alejandro",
  model_id: "eleven_flash_v2_5",
  voice_settings: {
    stability: 0.5,
    similarity_boost: 0.8,
    speed: 0.97,
  },
};

const TRANSITION_PALETTES = [
  ["dissolve", "smoothleft", "fadeblack", "wipeleft", "circleopen", "hblur", "smoothright", "revealup", "fade"],
  ["smoothright", "dissolve", "wiperight", "fadegrays", "circleopen", "smoothleft", "hblur", "revealdown", "fade"],
  ["fade", "revealleft", "dissolve", "smoothup", "radial", "hblur", "smoothright", "wipeup", "fadeblack"],
  ["hblur", "smoothleft", "dissolve", "revealup", "circleopen", "fadegrays", "wiperight", "smoothdown", "fade"],
];

const CAMERA_BY_COMP = {
  primer_plano: "a slow macro push-in of about five percent, keeping the focal subject centered",
  cenital: "a restrained overhead drift clockwise, ending on the principal detail",
  contrapicado: "a low-angle crane-up that reveals slightly more sky without changing the subject's proportions",
  diagonal: "a short lateral tracking move that follows the existing diagonal",
  umbral: "a slow push through the visible threshold, with foreground layers separating in parallax",
  simetria: "a centered dolly-in with no roll and exact symmetry preserved",
  figura_pequena: "a gentle crane-forward move that keeps the figure small inside the landscape",
  peso_contrario: "a slow arc toward the visual counterweight, preserving the original balance",
};

function cameraFor(comp, n) {
  return CAMERA_BY_COMP[comp] || [
    "a slow dolly-in with shallow parallax between the paper layers",
    "a restrained truck-left move with the subject held in frame",
    "a gentle pull-back that reveals one additional layer of the paper diorama",
  ][n % 3];
}

function movementPrompt(description, comp, n) {
  const camera = cameraFor(comp, n);
  return [
    "@Image 1 is the first frame and fixes the opening composition, identities, pose, props, light, and camera direction.",
    `Over exactly five seconds, continue one clear visible beat already implied by the scene: ${description}`,
    `Camera: ${camera}.`,
    "Movement has a readable beginning, consequence, and soft settling. Cloth, water, smoke, foliage, loose fibers, and paper effects react only when they are already present in the frame.",
    "Every surface remains visibly handmade cut paper, cardboard, natural fiber, and photographed physical diorama; faces, bodies, garments, props, palette, and layer edges remain stable throughout.",
    "No text, captions, letters, logos, watermark, lip-sync, talking, new people, new props, morphing, melting, photorealism, CGI sheen, or motion blur.",
  ].join(" ");
}

function rel(from, to) {
  return path.relative(from, to).split(path.sep).join("/");
}

async function exists(file) {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
}

async function digestFile(file) {
  const data = await fs.readFile(file);
  return crypto.createHash("sha256").update(data).digest("hex");
}

async function writeJson(file, value) {
  await fs.writeFile(file, `${JSON.stringify(value, null, 2)}\n`);
}

function extractScene(prompt = "") {
  const match = prompt.match(/\n\nEscena:\n- ([\s\S]*?)(?:\n\nPaleta:|\nEvitar SIEMPRE:|$)/);
  return match ? match[1].trim() : prompt.split("\n").filter(Boolean).slice(-1)[0] || "the visible action advances naturally";
}

function sfxFor(description = "") {
  const d = description.toLowerCase();
  if (/cascada|salto|torrente/.test(d)) return ["../../audio/sfx/sfx-cascada.mp3", 0.24];
  if (/lluv|tormenta/.test(d)) return ["../../audio/sfx/sfx-lluvia.mp3", 0.2];
  if (/fuego|fogón|llama|brasa/.test(d)) return ["../../audio/sfx/sfx-fogon.mp3", 0.18];
  if (/agua|laguna|río|arroyo|onda/.test(d)) return ["../../audio/sfx/sfx-laguna.mp3", 0.17];
  return null;
}

async function reuseSource(reusa, slot, mythDir) {
  const [, reuseSlug, kind] = reusa.match(/^mitos\/([^/]+)\/(entrada|acto|huella)$/) || [];
  if (!reuseSlug) throw new Error(`Reutilización inválida: ${reusa}`);
  const reuseDir = path.join(mythsDir, reuseSlug);
  const vertical = path.join(reuseDir, `${kind}.crop-9x16.jpg`);
  if (await exists(vertical)) return vertical;
  const original = path.join(reuseDir, `${kind}.jpg`);
  if (!(await exists(original))) throw new Error(`No existe la reutilización ${original}`);
  const crop = path.join(mythDir, "keyframes", `${slot}.reuse.crop-9x16.jpg`);
  if (!(await exists(crop))) {
    await sharp(original)
      .resize(1080, 1920, { fit: "cover", position: sharp.strategy.attention })
      .jpeg({ quality: 94, chromaSubsampling: "4:4:4" })
      .toFile(crop);
  }
  return crop;
}

async function normalSource(mythDir, slot) {
  const keyDir = path.join(mythDir, "keyframes");
  const exact = path.join(keyDir, `${slot}.crop-9x16.jpg`);
  if (await exists(exact)) return exact;
  const matches = (await fs.readdir(keyDir))
    .filter((name) => name.startsWith(`${slot}_`) && name.endsWith(".crop-9x16.jpg"))
    .sort();
  if (matches.length !== 1) throw new Error(`No se resolvió ${path.basename(mythDir)}/${slot}: ${matches.join(", ")}`);
  return path.join(keyDir, matches[0]);
}

function genericShots(myth) {
  const shots = [];
  for (let block = 1; block <= 9; block += 1) {
    const data = myth.video.bloques[`b${block}`];
    for (const suffix of ["a", "b"]) {
      if (!data?.[suffix]) continue;
      shots.push({
        block,
        slot: `b${block}${suffix}`,
        description: data[suffix].desc,
        comp: data[suffix].comp,
        reusa: data[suffix].reusa || null,
        line: data.linea,
      });
    }
  }
  return shots;
}

async function bachueShots(mythDir) {
  const manifest = JSON.parse(await fs.readFile(path.join(mythDir, "keyframes/manifest.json"), "utf8"));
  const names = [
    "b1b_semillas_orilla", "b2b_salida_agua", "b2c_huellas",
    "b3a_construccion_casa", "b3b_fogon_nocturno", "b4a_semillas_pareja",
    "b4b_valle_atardecer", "b5a_fila_sendero", "b5b_pies_arroyo",
    "b6a_ensenanza_semillas", "b6b_compartir_agua", "b7a_rostro_anciana",
    "b7b_reunion_descendientes", "b8a_ascenso_multitud", "b8b_entrega_semillas",
    "b9a_entrada_agua", "b9b_serpientes",
  ];
  const first = path.join(rootDir, "content/videos/muiscas/biblia/laguna_iguaque_A.crop-9x16.jpg");
  return [
    {
      block: 1,
      slot: "b1a-reuse",
      description: "A still high-altitude lagoon remains almost motionless while a thin bank of mist slides across the water and the nearest paper grasses bend once in the cold wind.",
      comp: "figura_pequena",
      source: first,
    },
    ...names.map((name, index) => ({
      block: Math.min(9, Math.floor((index + 1) / 2) + 1),
      slot: name,
      description: extractScene(manifest.items[name]?.prompt),
      comp: null,
      source: path.join(mythDir, "keyframes", `${name}.crop-9x16.jpg`),
    })),
  ].map((shot, index) => ({ ...shot, block: Math.floor(index / 2) + 1 }));
}

async function prepareMyth({ slug, dataSlug, myth, index }) {
  const mythDir = path.join(videosDir, slug);
  const planDir = mythDir;
  const shots = slug === "bachue" ? await bachueShots(mythDir) : genericShots(myth);
  const voiceSpec = slug === "bachue"
    ? JSON.parse(await fs.readFile(path.join(rootDir, "docs/videos/muiscas/mvp-guiones/historico/guion-bachue-v3.json"), "utf8"))
    : {
        ...VOICE,
        enfoque: `${myth.titulo} — narración del catálogo visual muisca`,
        lines: Array.from({ length: 9 }, (_, i) => ({
          window: 9.15,
          text: myth.video.bloques[`b${i + 1}`].linea,
        })),
      };
  voiceSpec.voice_id = VOICE.voice_id;
  voiceSpec.voice_name = VOICE.voice_name;
  voiceSpec.model_id = VOICE.model_id;
  voiceSpec.voice_settings = VOICE.voice_settings;

  const palette = TRANSITION_PALETTES[index % TRANSITION_PALETTES.length];
  const prepared = [];
  for (let i = 0; i < shots.length; i += 1) {
    const shot = shots[i];
    const source = shot.source || (shot.reusa
      ? await reuseSource(shot.reusa, shot.slot, mythDir)
      : await normalSource(mythDir, shot.slot));
    if (!(await exists(source))) throw new Error(`No existe ${source}`);
    prepared.push({
      n: i + 1,
      block: shot.block,
      slot: shot.slot,
      keyframe: rel(mythDir, source),
      keyframe_sha256: await digestFile(source),
      duration_s: 5,
      prompt: movementPrompt(shot.description, shot.comp, i),
      transition: i > 0 && shots[i - 1].block !== shot.block ? palette[shot.block - 2] : "cut",
      status: "pending",
      job_id: null,
    });
  }

  const movementPath = path.join(mythDir, "movimiento-v1.json");
  const voicePath = path.join(mythDir, "voz-v1.json");
  const planPath = path.join(mythDir, "plan-v1-no-title.json");
  await writeJson(movementPath, {
    myth: slug,
    title: myth.titulo,
    model: "Seedance 2.5 web unlimited",
    resolution: "1080p",
    duration_s: 5,
    aspect_ratio: "9:16",
    no_title: true,
    no_subtitles: true,
    shots: prepared,
  });
  await writeJson(voicePath, voiceSpec);

  const blocks = prepared.map((shot, i) => {
    const sfx = sfxFor(shots[i].description);
    const block = {
      n: shot.n,
      type: "motion",
      clip: `clips-v1/c${String(shot.n).padStart(2, "0")}.mp4`,
      duration: 5,
    };
    if (shot.transition !== "cut") block.transition = shot.transition;
    if (i === 0 || shots[i - 1].block !== shots[i].block) {
      block.voice = `voces-v1/voz${String(shots[i].block).padStart(2, "0")}.mp3`;
    }
    if (sfx) {
      [block.sfx, block.sfx_vol] = sfx;
    }
    return block;
  });
  await writeJson(planPath, {
    _notas: `Lote muisca 2026-08-31: sin título, sin subtítulos; ${prepared.length} clips de 5 s y transiciones variadas entre beats.`,
    width: 1080,
    height: 1920,
    fps: 24,
    voice_offset: 0.5,
    transition_dur: 0.45,
    music: "../../audio/musica-muisca-andina.mp3",
    music_vol: 0.1,
    burn_subtitles: false,
    write_srt: false,
    blocks,
  });

  return {
    slug,
    data_slug: dataSlug,
    id: myth.id,
    title: myth.titulo,
    keyframes: prepared.length,
    keyframe_digest: crypto.createHash("sha256")
      .update(prepared.map((shot) => `${shot.slot}:${shot.keyframe_sha256}`).join("\n"))
      .digest("hex"),
    movement: rel(rootDir, movementPath),
    voice: rel(rootDir, voicePath),
    plan: rel(rootDir, planPath),
    clips_expected: prepared.length,
    final: rel(rootDir, path.join(mythDir, `${slug}-final-v1.mp4`)),
    status: "prepared",
  };
}

const catalog = JSON.parse(await fs.readFile(catalogPath, "utf8"));
const mythData = catalog.mitos;
const dirs = (await fs.readdir(videosDir, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

const candidates = [];
const excluded = [];
for (const slug of dirs) {
  const keyDir = path.join(videosDir, slug, "keyframes");
  if (!(await exists(keyDir))) continue;
  const count = (await fs.readdir(keyDir)).filter((name) => name.endsWith(".crop-9x16.jpg") && !name.includes(".reuse.")).length;
  if (count < 14) {
    excluded.push({ slug, keyframes: count, reason: "secuencia_incompleta" });
    continue;
  }
  candidates.push({ slug, keyframes: count });
}

const entries = [];
for (let i = 0; i < candidates.length; i += 1) {
  const { slug, keyframes } = candidates[i];
  if (slug === "bochica") {
    entries.push({
      slug,
      data_slug: "el-tequendama",
      id: mythData["el-tequendama"].id,
      title: "Bochica y el Salto del Tequendama",
      keyframes,
      clips_expected: 19,
      plan: "content/videos/muiscas/videos/bochica/plan-v4.json",
      final: "content/videos/muiscas/videos/bochica/bochica-final-v4-r3-no-title.mp4",
      status: "qa_pending",
    });
    continue;
  }
  const dataSlug = slug === "bochica-maestro" ? "bochica" : slug;
  const myth = mythData[dataSlug];
  if (!myth) throw new Error(`No hay catálogo para ${slug} (${dataSlug})`);
  entries.push(await prepareMyth({ slug, dataSlug, myth, index: i }));
}

const scopeDigest = crypto.createHash("sha256")
  .update(entries.map((entry) => `${entry.slug}:${entry.keyframe_digest || entry.keyframes}`).join("\n"))
  .digest("hex");
await writeJson(batchPath, {
  schema: "muisca-video-production-batch-v1",
  frozen_at: new Date().toISOString(),
  rule: "Sólo secuencias cinematográficas completas ya creadas; sin generar keyframes nuevos.",
  presentation: {
    title: false,
    subtitles: false,
    clip_duration_s: 5,
    transition_policy: "variada por beat, con recorte automático para proteger la voz",
  },
  catalog_source: catalogPath,
  scope_count: entries.length,
  scope_digest: scopeDigest,
  entries,
  excluded,
});

console.log(`[batch] ${entries.length} mitos preparados · digest ${scopeDigest}`);
for (const entry of entries) console.log(`[batch] ${entry.slug}: ${entry.status} (${entry.clips_expected} clips)`);
for (const item of excluded) console.log(`[batch] EXCLUIDO ${item.slug}: ${item.keyframes} keyframes`);
console.log(`[batch] manifiesto → ${batchPath}`);
