// Ensamblador local de videos de mitos (ffmpeg + sharp): bloques motion/still,
// crossfades entre capítulos con re-timing automático de voz y subtítulos,
// narración por bloque, música + camas de ambiente (SFX) con ducking, títulos
// de canal y subtítulos quemados. Cero costos de API.
//
// Uso:
//   node scripts/videos/assemble-video.mjs --plan plan.json --out final.mp4 [--keep-temp]
//
// plan.json (campos nuevos de v3 marcados con *):
// {
//   "width": 1080, "height": 1920, "fps": 24,
//   "music": "ruta.m4a" | null, "music_vol": 0.09,
//   "voice_offset": 0.5,
//   "transition_dur": 0.4,            // *duración pedida de los crossfades
//   "blocks": [
//     { "n": 1, "type": "motion", "clip": "c01.mp4", "voice": "voz01.wav",
//       "subtitle": "texto", "duration": 5,
//       "xfade": true,                 // *fundido cruzado AL ENTRAR a este bloque
//       "sfx": "sfx-laguna.mp3", "sfx_vol": 0.45,
//       "title": "BACHUÉ", "title_sub": "Mitos de Colombia" },  // *título sobreimpreso
//     { "n": 2, "type": "still", "image": "kf.jpg", "kenburns": "out", "duration": 3 }
//   ]
// }
// El xfade pedido se recorta automáticamente al aire real que deja la narración
// del bloque anterior (medido con silencedetect); si no hay aire, queda corte seco.

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const args = process.argv.slice(2);
function getFlag(name, fallback = null) {
  const i = args.indexOf(name);
  if (i === -1) return fallback;
  return args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : true;
}
const planPath = getFlag("--plan");
const outPath = getFlag("--out");
const keepTemp = args.includes("--keep-temp");
if (!planPath || !outPath) {
  console.error("Uso: --plan plan.json --out final.mp4 [--keep-temp]");
  process.exit(1);
}

const plan = JSON.parse(fs.readFileSync(planPath, "utf8"));
const W = plan.width || 1080;
const H = plan.height || 1920;
const FPS = plan.fps || 24;
const VOICE_OFFSET = plan.voice_offset ?? 0.5;
const MUSIC_VOL = plan.music_vol ?? 0.09;
const XFADE_REQ = plan.transition_dur ?? 0.4;
const VOICE_GAP = 0.25; // aire mínimo entre fin de habla y el siguiente arranque
const planDir = path.dirname(path.resolve(planPath));
const outDir = path.dirname(path.resolve(outPath));
const tmpDir = path.join(outDir, ".assemble-tmp");
fs.mkdirSync(tmpDir, { recursive: true });

function resolveInput(p) {
  if (!p) return null;
  return path.isAbsolute(p) ? p : path.resolve(planDir, p);
}

function run(cmd, argv) {
  const res = spawnSync(cmd, argv, { encoding: "utf8" });
  if (res.status !== 0) {
    throw new Error(`${cmd} ${argv.slice(0, 6).join(" ")}… falló:\n${res.stderr?.slice(-2000)}`);
  }
  return res.stdout;
}

function probeDuration(file) {
  const out = run("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", file]);
  return Number.parseFloat(out.trim());
}

// Fin real del habla: último silencio (-35dB, ≥0.2s) que llega hasta el final
// del archivo; si no hay silencio de cola, el habla ocupa todo el archivo.
function probeSpeechEnd(file, totalDur) {
  const res = spawnSync(
    "ffmpeg",
    ["-i", file, "-af", "silencedetect=n=-35dB:d=0.2", "-f", "null", "-"],
    { encoding: "utf8" }
  );
  const log = `${res.stderr || ""}`;
  const starts = [...log.matchAll(/silence_start:\s*([\d.]+)/g)].map((m) => Number(m[1]));
  const ends = [...log.matchAll(/silence_end:\s*([\d.]+)/g)].map((m) => Number(m[1]));
  if (!starts.length) return totalDur;
  const lastStart = starts[starts.length - 1];
  const lastEnd = ends.length >= starts.length ? ends[ends.length - 1] : totalDur;
  return lastEnd >= totalDur - 0.15 ? lastStart : totalDur;
}

function fmtSrtTime(t) {
  const ms = Math.round(t * 1000);
  const h = String(Math.floor(ms / 3600000)).padStart(2, "0");
  const m = String(Math.floor((ms % 3600000) / 60000)).padStart(2, "0");
  const s = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
  const mm = String(ms % 1000).padStart(3, "0");
  return `${h}:${m}:${s},${mm}`;
}

// Cues de ~7 palabras; un resto huérfano (<3 palabras) se fusiona con el anterior.
function subtitleCues(text, start, voiceDur) {
  if (!text) return [];
  const words = text.split(/\s+/).filter(Boolean);
  const chunks = [];
  for (let i = 0; i < words.length; i += 7) chunks.push(words.slice(i, i + 7));
  if (chunks.length > 1 && chunks[chunks.length - 1].length < 3) {
    const orphan = chunks.pop();
    chunks[chunks.length - 1] = chunks[chunks.length - 1].concat(orphan);
  }
  const total = words.length;
  let consumed = 0;
  return chunks.map((chunk) => {
    const dur = (chunk.length / total) * voiceDur;
    const cue = { start: start + consumed, end: start + consumed + dur - 0.05, text: chunk.join(" ") };
    consumed += dur;
    return cue;
  });
}

const KENBURNS = {
  in: (frames) => `zoompan=z='min(1+0.10*on/${frames},1.10)':x='(iw-iw/zoom)/2':y='(ih-ih/zoom)/2'`,
  out: (frames) => `zoompan=z='max(1.10-0.10*on/${frames},1.0)':x='(iw-iw/zoom)/2':y='(ih-ih/zoom)/2'`,
  up: (frames) => `zoompan=z=1.08:x='(iw-iw/zoom)/2':y='(ih-ih/zoom)*(1-on/${frames})'`,
  down: (frames) => `zoompan=z=1.08:x='(iw-iw/zoom)/2':y='(ih-ih/zoom)*on/${frames}'`,
};

// ── 1. Bloques normalizados ──────────────────────────────────────────────────
const blockFiles = [];
for (const block of plan.blocks) {
  const voicePath = resolveInput(block.voice);
  const voiceDur = voicePath ? probeDuration(voicePath) : 0;
  const speechEnd = voicePath ? probeSpeechEnd(voicePath, voiceDur) : 0;
  const blockOut = path.join(tmpDir, `block${String(block.n).padStart(2, "0")}.mp4`);

  let duration;
  if (block.type === "still") {
    duration = block.duration || Math.min(Math.max(voiceDur + VOICE_OFFSET + 0.7, 6), 13);
    const frames = Math.round(duration * FPS);
    const image = resolveInput(block.image);
    const kb = (KENBURNS[block.kenburns] || KENBURNS.in)(frames);
    // Sobre-escalar antes de zoompan evita el jitter clásico del filtro.
    const vf = `scale=${W * 2}:${H * 2}:force_original_aspect_ratio=increase,crop=${W * 2}:${H * 2},${kb}:d=${frames}:s=${W}x${H}:fps=${FPS},format=yuv420p`;
    run("ffmpeg", ["-y", "-loop", "1", "-t", String(duration), "-i", image, "-vf", vf, "-r", String(FPS), "-c:v", "libx264", "-preset", "medium", "-crf", "18", "-an", blockOut]);
  } else {
    const clip = resolveInput(block.clip);
    const clipDur = probeDuration(clip);
    duration = block.duration || clipDur;
    const vf = `scale=${W}:${H}:force_original_aspect_ratio=increase:flags=lanczos,crop=${W}:${H},fps=${FPS},format=yuv420p`;
    run("ffmpeg", ["-y", "-i", clip, "-t", String(duration), "-vf", vf, "-c:v", "libx264", "-preset", "medium", "-crf", "18", "-an", blockOut]);
  }

  blockFiles.push({
    n: block.n,
    file: blockOut,
    duration,
    voicePath,
    voiceDur,
    speechEnd,
    subtitle: block.subtitle || null,
    xfadeReq: block.xfade ? (typeof block.xfade === "number" ? block.xfade : XFADE_REQ) : 0,
    sfxPath: block.sfx ? resolveInput(block.sfx) : null,
    sfxVol: block.sfx_vol ?? 0.4,
    title: block.title || null,
    titleSub: block.title_sub || null,
  });
  console.log(`[assemble] bloque ${block.n} (${block.type}) → ${duration.toFixed(1)}s${voicePath ? ` (habla ${speechEnd.toFixed(1)}s)` : ""}`);
}

// ── 2. Crossfades: recorte automático según el aire de la narración previa ───
// El fundido al entrar al bloque i acorta la ventana de la última voz anterior:
// se recorta a (ventana − finHabla − VOICE_GAP), repartiendo si hay varios.
const rawStart = [];
{
  let acc = 0;
  for (const b of blockFiles) {
    rawStart.push(acc);
    acc += b.duration;
  }
}
const voiceIdx = blockFiles.map((b, i) => (b.voicePath ? i : -1)).filter((i) => i >= 0);
const consumedSlack = new Map();
const joinD = blockFiles.map(() => 0);
for (let i = 1; i < blockFiles.length; i++) {
  const req = blockFiles[i].xfadeReq;
  if (!req) continue;
  const prevV = [...voiceIdx].reverse().find((v) => v < i);
  const nextV = voiceIdx.find((v) => v >= i);
  let allowed = req;
  if (prevV !== undefined && nextV !== undefined) {
    const window = rawStart[nextV] - rawStart[prevV];
    const slack = window - blockFiles[prevV].speechEnd - VOICE_GAP - (consumedSlack.get(prevV) || 0);
    allowed = Math.min(req, Math.max(0, slack));
  }
  if (allowed >= 0.15) {
    joinD[i] = Math.round(allowed * 100) / 100;
    if (prevV !== undefined) consumedSlack.set(prevV, (consumedSlack.get(prevV) || 0) + joinD[i]);
  }
  if (joinD[i] < req) {
    console.log(`[assemble] xfade → bloque ${blockFiles[i].n}: ${joinD[i] ? `recortado a ${joinD[i]}s` : "sin aire, corte seco"}`);
  }
}

// Línea de tiempo visible final (los fundidos traslapan bloques).
const visStart = [];
{
  let t = 0;
  blockFiles.forEach((b, i) => {
    if (i > 0) t -= joinD[i];
    visStart.push(t);
    t += b.duration;
  });
}
const totalDur = visStart[visStart.length - 1] + blockFiles[blockFiles.length - 1].duration;

// ── 3. Video: cadena xfade/concat + fundido global de entrada y salida ───────
const vInputs = [];
blockFiles.forEach((b) => vInputs.push("-i", b.file));
let vFilter = blockFiles.map((_, i) => `[${i}:v]fps=${FPS},settb=AVTB[p${i}]`).join(";");
let cur = "[p0]";
for (let i = 1; i < blockFiles.length; i++) {
  const out = `[j${i}]`;
  vFilter += joinD[i]
    ? `;${cur}[p${i}]xfade=transition=fade:duration=${joinD[i]}:offset=${visStart[i].toFixed(3)},settb=AVTB${out}`
    : `;${cur}[p${i}]concat=n=2:v=1:a=0,settb=AVTB${out}`;
  cur = out;
}
vFilter += `;${cur}fade=t=in:st=0:d=0.6,fade=t=out:st=${(totalDur - 0.8).toFixed(2)}:d=0.8,format=yuv420p[vjoin]`;
const videoOnly = path.join(tmpDir, "video.mp4");
run("ffmpeg", ["-y", ...vInputs, "-filter_complex", vFilter, "-map", "[vjoin]", "-r", String(FPS), "-c:v", "libx264", "-preset", "medium", "-crf", "18", "-an", videoOnly]);
console.log(`[assemble] video unido: ${totalDur.toFixed(2)}s (${joinD.filter(Boolean).length} crossfades)`);

// ── 4. Audio: voz + (música con resolución final + ambientes) con ducking ────
const cues = [];
const voiceInputs = [];
const delayFilters = [];
blockFiles.forEach((b, i) => {
  if (b.voicePath) {
    const at = Math.round((visStart[i] + VOICE_OFFSET) * 1000);
    voiceInputs.push(b.voicePath);
    delayFilters.push(`[${voiceInputs.length}:a]adelay=${at}|${at},apad=whole_dur=${totalDur}[v${delayFilters.length}]`);
  }
  if (b.subtitle) {
    cues.push(...subtitleCues(b.subtitle, visStart[i] + VOICE_OFFSET, Math.max(b.voiceDur, 1)));
  }
});

const musicPath = plan.music ? resolveInput(plan.music) : null;
const inputs = ["-i", videoOnly];
voiceInputs.forEach((v) => inputs.push("-i", v));
if (musicPath) inputs.push("-i", musicPath);

// Camas de ambiente por bloque (loop + fades); cruzan los cortes como puente sonoro.
const sfxFilters = [];
let sfxInputIdx = voiceInputs.length + (musicPath ? 1 : 0);
blockFiles.forEach((b, i) => {
  if (b.sfxPath) {
    inputs.push("-i", b.sfxPath);
    sfxInputIdx += 1;
    const span = b.duration + (joinD[i + 1] || 0) * 0; // el traslape ya lo da visStart del siguiente
    const at = Math.round(visStart[i] * 1000);
    sfxFilters.push(
      `[${sfxInputIdx}:a]aloop=loop=-1:size=2000000,atrim=0:${span || b.duration},volume=${b.sfxVol},afade=t=in:d=0.4,afade=t=out:st=${Math.max(0, b.duration - 0.5)}:d=0.5,adelay=${at}|${at},apad=whole_dur=${totalDur}[s${sfxFilters.length}]`
    );
  }
});

const vLabels = delayFilters.map((_, i) => `[v${i}]`).join("");
let filter = `${delayFilters.join(";")};${vLabels}amix=inputs=${delayFilters.length}:normalize=0,apad=whole_dur=${totalDur}[voz]`;

const bedParts = [];
if (musicPath) {
  const mIdx = voiceInputs.length + 1;
  const musicDur = probeDuration(musicPath);
  // La música resuelve con un fade de 4 s en su final natural: el cierre queda
  // solo con el ambiente (respiración final), en vez de un corte de cama.
  const fadeStart = Math.max(0, Math.min(musicDur, totalDur) - 4);
  filter += `;[${mIdx}:a]volume=${MUSIC_VOL},afade=t=out:st=${fadeStart.toFixed(2)}:d=4,apad=whole_dur=${totalDur},atrim=0:${totalDur}[mus]`;
  bedParts.push("[mus]");
}
if (sfxFilters.length) {
  filter += `;${sfxFilters.join(";")}`;
  const sLabels = sfxFilters.map((_, i) => `[s${i}]`).join("");
  filter += `;${sLabels}amix=inputs=${sfxFilters.length}:normalize=0,apad=whole_dur=${totalDur}[amb]`;
  bedParts.push("[amb]");
}
if (bedParts.length) {
  const bed = bedParts.length === 2 ? `${bedParts.join("")}amix=inputs=2:normalize=0[bed];` : `${bedParts[0]}anull[bed];`;
  filter += `;[voz]asplit=2[vozA][vozB];${bed}[bed][vozB]sidechaincompress=threshold=0.03:ratio=8:attack=50:release=600[bedduck];[vozA][bedduck]amix=inputs=2:normalize=0[mix]`;
} else {
  filter += `;[voz]anull[mix]`;
}
filter += `;[mix]loudnorm=I=-16:TP=-1.5:LRA=11,afade=t=out:st=${(totalDur - 1).toFixed(2)}:d=1[aout]`;

const mixed = path.join(tmpDir, "mixed.mp4");
run("ffmpeg", ["-y", ...inputs, "-filter_complex", filter, "-map", "0:v", "-map", "[aout]", "-c:v", "copy", "-c:a", "aac", "-b:a", "192k", "-t", String(totalDur), mixed]);

// ── 5. Sobreimpresos: título de canal + subtítulos (PNG sharp, sin libass) ───
let finalIn = mixed;
const titles = blockFiles
  .map((b, i) => (b.title ? { text: b.title, sub: b.titleSub, at: visStart[i] } : null))
  .filter(Boolean);
if (cues.length || titles.length) {
  const srtPath = outPath.replace(/\.mp4$/, ".srt");
  if (cues.length) {
    fs.writeFileSync(
      srtPath,
      cues.map((c, i) => `${i + 1}\n${fmtSrtTime(c.start)} --> ${fmtSrtTime(c.end)}\n${c.text}\n`).join("\n")
    );
  }
  const sharp = (await import("sharp")).default;
  const esc = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  async function textPngWithShadow(markup, widthPx, dpi, outFile, pad = 16) {
    const base = await sharp({ text: { text: markup, rgba: true, width: widthPx, dpi, align: "centre", font: "Helvetica" } })
      .png()
      .toBuffer();
    const meta = await sharp(base).metadata();
    const shadow = await sharp(base).modulate({ brightness: 0 }).blur(2.5).png().toBuffer();
    await sharp({ create: { width: W, height: meta.height + pad, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
      .composite([
        { input: shadow, left: Math.round((W - meta.width) / 2) + 2, top: Math.round(pad / 2) + 3 },
        { input: base, left: Math.round((W - meta.width) / 2), top: Math.round(pad / 2) },
      ])
      .png()
      .toFile(outFile);
  }

  const overlayDefs = []; // {file, y, enableFrom, enableTo, fade: bool}
  for (let i = 0; i < cues.length; i++) {
    const cuePath = path.join(tmpDir, `cue${String(i).padStart(2, "0")}.png`);
    await textPngWithShadow(`<span foreground="#F5F0E6" weight="600">${esc(cues[i].text)}</span>`, 880, 176, cuePath);
    overlayDefs.push({ file: cuePath, y: null, from: cues[i].start, to: cues[i].end, fade: false });
  }
  for (let t = 0; t < titles.length; t++) {
    const ti = titles[t];
    const titlePath = path.join(tmpDir, `title${t}.png`);
    const markup = `<span foreground="#F5F0E6" weight="300" size="200%" letter_spacing="14336">${esc(ti.text.toUpperCase())}</span>${ti.sub ? `\n<span foreground="#E4DCC8" weight="500" size="66%" letter_spacing="6144">${esc(ti.sub)}</span>` : ""}`;
    await textPngWithShadow(markup, 940, 200, titlePath, 24);
    overlayDefs.push({ file: titlePath, y: Math.round(H * 0.24), from: ti.at + 1.0, to: ti.at + 5.2, fade: true });
  }

  const subbed = path.join(tmpDir, "subbed.mp4");
  const inputsSub = ["-i", mixed];
  const parts = [];
  let prev = "0:v";
  overlayDefs.forEach((o, k) => {
    inputsSub.push("-loop", "1", "-framerate", String(FPS), "-t", String(Math.ceil(totalDur)), "-i", o.file);
    let src = `${k + 1}:v`;
    if (o.fade) {
      parts.push(
        `[${src}]format=rgba,fade=t=in:st=${o.from.toFixed(2)}:d=0.8:alpha=1,fade=t=out:st=${(o.to - 0.8).toFixed(2)}:d=0.8:alpha=1[f${k}]`
      );
      src = `f${k}`;
    }
    const out = k === overlayDefs.length - 1 ? "vout" : `t${k}`;
    const yExpr = o.y === null ? "H-h-150" : String(o.y);
    parts.push(`[${prev}][${src}]overlay=x=(W-w)/2:y=${yExpr}:enable='between(t,${o.from.toFixed(2)},${o.to.toFixed(2)})'[${out}]`);
    prev = out;
  });
  run("ffmpeg", ["-y", ...inputsSub, "-filter_complex", parts.join(";"), "-map", "[vout]", "-map", "0:a", "-c:v", "libx264", "-preset", "medium", "-crf", "18", "-c:a", "copy", "-t", String(totalDur), subbed]);
  finalIn = subbed;
  console.log(`[assemble] sobreimpresos: ${cues.length} cues${titles.length ? ` + ${titles.length} título(s)` : ""}${cues.length ? ` (srt: ${srtPath})` : ""}`);
}

fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(finalIn, outPath);
const check = probeDuration(outPath);
console.log(`[assemble] listo: ${outPath} (${check.toFixed(2)}s, ${blockFiles.length} bloques)`);
if (!keepTemp) fs.rmSync(tmpDir, { recursive: true, force: true });
