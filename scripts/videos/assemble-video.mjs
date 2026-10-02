// Ensamblador local de videos de mitos (ffmpeg + sharp): bloques motion/still,
// crossfades entre capítulos con re-timing automático de voz y subtítulos,
// narración por bloque, música + camas de ambiente (SFX) con ducking, títulos
// de canal y subtítulos quemados. Cero costos de API.
//
// Uso:
//   node scripts/videos/assemble-video.mjs --plan plan.json --out final.mp4 [--keep-temp]
//
// plan.json (campos nuevos de v3 marcados con *, de v4 con **):
// {
//   "width": 1080, "height": 1920, "fps": 24,
//   "music": "ruta.m4a" | null, "music_vol": 0.09,
//   "mix": "canal" | "narracion",     // **ver "4. Audio": "narracion" = receta de las narraciones del sitio
//   "voice_lufs": -16, "music_lufs": -34, "music_fade_out": 4,   // **sólo en mix "narracion" (fade: ambos modos; 0 = sin fade)
//   "burn_subtitles": true, "write_srt": true,                   // **false = no quema / no escribe el .srt
//   "title_font": "../../../fonts/Asimovian-Regular.ttf",        // **TTF/OTF de la fuente de títulos (la del sitio)
//   "title_font_family": "Asimovian", "title_size": 92, "title_color": "#F5F0E6", "title_y": 380,
//   "subtitle_font": null, "subtitle_font_family": "Helvetica",  // **fuente de subtítulos (por defecto Helvetica)
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
//
// FUENTES (2026-09-09): sharp/FreeType NO carga .woff2 y cae a Helvetica EN SILENCIO
// (verificado: cuatro renders con distintos woff2 salieron byte-idénticos). Por eso
// `title_font` exige .ttf/.otf y el ensamblador aborta si falta: un título en la
// fuente equivocada no es un título del canal.

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
const MIX_MODE = plan.mix === "narracion" ? "narracion" : "canal";
const VOICE_LUFS = plan.voice_lufs ?? -16;
const BED_LUFS = plan.music_lufs ?? -34;
const MUSIC_FADE_OUT = plan.music_fade_out ?? 4;
const BURN_SUBTITLES = plan.burn_subtitles !== false;
const WRITE_SRT = plan.write_srt !== false;
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

// Sonoridad integrada (EBU R128) de un archivo, para las ganancias ESTÁTICAS del
// modo "narracion": se mide una vez y se aplica `volume=<dB>`, sin normalizador
// dinámico que respire con la voz.
function measureLufs(file) {
  const res = spawnSync(
    "ffmpeg",
    ["-hide_banner", "-nostats", "-i", file, "-af", "ebur128=framelog=quiet", "-f", "null", "-"],
    { encoding: "utf8" }
  );
  const all = String(res.stderr).match(/I:\s*(-?[\d.]+)\s*LUFS/g);
  if (!all) throw new Error(`no pude medir la sonoridad de ${file}`);
  return Number(all[all.length - 1].match(/(-?[\d.]+)/)[1]);
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
    // `-frames:v frames` NO es decorativo: `zoompan` con `d=N` emite N fotogramas
    // POR CADA fotograma de entrada, y `-loop 1 -t duration` ya entrega N. Sin el
    // tope, una placa de 4 s salía de 400 s (9.600 fotogramas). Nunca se notó
    // porque la placa siempre iba al FINAL y el `-t totalDur` del cierre la
    // recortaba; en cuanto hay un bloque DESPUÉS (el cierre de canal), la placa se
    // come el resto del video y ese bloque no aparece. La curva de zoom no cambia:
    // usa `on`, que en los primeros N fotogramas ya recorre la animación entera.
    run("ffmpeg", ["-y", "-loop", "1", "-t", String(duration), "-i", image, "-vf", vf, "-frames:v", String(frames), "-r", String(FPS), "-c:v", "libx264", "-preset", "medium", "-crf", "18", "-an", blockOut]);
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

// ── 4. Audio: voz + (música + ambientes) ─────────────────────────────────────
// Dos modos de mezcla (`plan.mix`):
//  · "canal" (histórico, por defecto): voces tal cual, música × music_vol, ambientes
//    por bloque, todo el lecho agachado bajo la voz (sidechain) y loudnorm final -16.
//  · "narracion" (2026-09-09): la receta de las narraciones del sitio
//    (src/lib/narration.js): cada voz a VOICE_LUFS (-16) con ganancia ESTÁTICA medida
//    con ebur128, el lecho musical a BED_LUFS (-34: 18 dB por debajo, medido en la
//    web 21,9 dB de separación habla/pausa), SIN ducking (la separación fija ya deja
//    la música audible y subordinada, sin bombeo) y sin loudnorm final: sólo un
//    limitador a -1,5 dBTP.
const cues = [];
const voiceInputs = [];
const delayFilters = [];
blockFiles.forEach((b, i) => {
  if (b.voicePath) {
    const at = Math.round((visStart[i] + VOICE_OFFSET) * 1000);
    voiceInputs.push(b.voicePath);
    let gain = "";
    if (MIX_MODE === "narracion") {
      const lufs = measureLufs(b.voicePath);
      gain = `volume=${(VOICE_LUFS - lufs).toFixed(2)}dB,`;
      console.log(`[assemble] voz bloque ${b.n}: ${lufs.toFixed(1)} LUFS → ${VOICE_LUFS} (${(VOICE_LUFS - lufs) >= 0 ? "+" : ""}${(VOICE_LUFS - lufs).toFixed(1)} dB)`);
    }
    delayFilters.push(`[${voiceInputs.length}:a]${gain}aformat=sample_rates=48000:channel_layouts=stereo,adelay=${at}|${at},apad=whole_dur=${totalDur}[v${delayFilters.length}]`);
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
  let gain = `volume=${MUSIC_VOL}`;
  if (MIX_MODE === "narracion") {
    const lufs = measureLufs(musicPath);
    gain = `volume=${(BED_LUFS - lufs).toFixed(2)}dB`;
    console.log(`[assemble] lecho: ${lufs.toFixed(1)} LUFS → ${BED_LUFS} (${(BED_LUFS - lufs).toFixed(1)} dB)`);
  }
  // La música resuelve con un fade en su final natural: el cierre queda solo con
  // el ambiente (respiración final), en vez de un corte de cama. Un lecho hecho a
  // medida (build-lecho.mjs) ya trae su fade: se puede poner music_fade_out 0.
  const fadeStart = Math.max(0, Math.min(musicDur, totalDur) - MUSIC_FADE_OUT);
  const fade = MUSIC_FADE_OUT > 0 ? `,afade=t=out:st=${fadeStart.toFixed(2)}:d=${MUSIC_FADE_OUT}` : "";
  filter += `;[${mIdx}:a]${gain}${fade},aformat=sample_rates=48000:channel_layouts=stereo,apad=whole_dur=${totalDur},atrim=0:${totalDur}[mus]`;
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
  if (MIX_MODE === "narracion") {
    filter += `;${bed}[voz][bed]amix=inputs=2:normalize=0[mix]`;
  } else {
    filter += `;[voz]asplit=2[vozA][vozB];${bed}[bed][vozB]sidechaincompress=threshold=0.03:ratio=8:attack=50:release=600[bedduck];[vozA][bedduck]amix=inputs=2:normalize=0[mix]`;
  }
} else {
  filter += `;[voz]anull[mix]`;
}
if (MIX_MODE === "narracion") {
  // -1,5 dBTP = 0,84 lineal. Sin loudnorm: la voz ya está en -16 y el lecho en -34.
  filter += `;[mix]alimiter=limit=0.84:attack=5:release=60:level=false,afade=t=out:st=${(totalDur - 1).toFixed(2)}:d=1[aout]`;
} else {
  filter += `;[mix]loudnorm=I=-16:TP=-1.5:LRA=11,afade=t=out:st=${(totalDur - 1).toFixed(2)}:d=1[aout]`;
}
console.log(`[assemble] mezcla: modo ${MIX_MODE}`);

const mixed = path.join(tmpDir, "mixed.mp4");
run("ffmpeg", ["-y", ...inputs, "-filter_complex", filter, "-map", "0:v", "-map", "[aout]", "-c:v", "copy", "-c:a", "aac", "-b:a", "192k", "-t", String(totalDur), mixed]);

// ── 5. Sobreimpresos: título editorial + subtítulos (PNG sharp, sin libass) ──
let finalIn = mixed;
const titles = blockFiles
  .map((b, i) => (b.title ? { text: b.title, sub: b.titleSub, at: visStart[i] } : null))
  .filter(Boolean);
const srtPath = outPath.replace(/\.mp4$/, ".srt");
if (cues.length && WRITE_SRT) {
  fs.writeFileSync(
    srtPath,
    cues.map((c, i) => `${i + 1}\n${fmtSrtTime(c.start)} --> ${fmtSrtTime(c.end)}\n${c.text}\n`).join("\n")
  );
}
const overlayCues = BURN_SUBTITLES ? cues : [];
if (overlayCues.length || titles.length) {
  const sharp = (await import("sharp")).default;
  const esc = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Fuentes: la de títulos es la del sitio (Asimovian, --font-display: "todos los
  // títulos"). Sólo .ttf/.otf.
  function fontSpec(key, defaultFamily) {
    const file = plan[key] ? resolveInput(plan[key]) : null;
    if (file && !fs.existsSync(file)) throw new Error(`No existe la fuente configurada en ${key}: ${file}`);
    if (file && !/\.(ttf|otf)$/i.test(file)) {
      throw new Error(`${key} debe ser .ttf/.otf: ${file}`);
    }
    return { file, family: plan[`${key}_family`] || (file ? defaultFamily : "Helvetica") };
  }
  const titleFont = fontSpec("title_font", "Asimovian");
  const subFont = fontSpec("subtitle_font", "Noto Sans Display");
  const fontOpts = (f) => (f.file ? { font: f.family, fontfile: f.file } : { font: f.family });
  const textLayer = (markup, widthPx, dpi, font) =>
    sharp({ text: { text: markup, rgba: true, width: widthPx, dpi, align: "centre", ...fontOpts(font) } }).png().toBuffer();
  const shadowOf = (buf, blur = 2.5) => sharp(buf).modulate({ brightness: 0 }).blur(blur).png().toBuffer();

  async function textPngWithShadow(markup, widthPx, dpi, outFile, pad = 16, font = subFont) {
    const base = await textLayer(markup, widthPx, dpi, font);
    const meta = await sharp(base).metadata();
    const shadow = await shadowOf(base);
    await sharp({ create: { width: W, height: meta.height + pad, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
      .composite([
        { input: shadow, left: Math.round((W - meta.width) / 2) + 2, top: Math.round(pad / 2) + 3 },
        { input: base, left: Math.round((W - meta.width) / 2), top: Math.round(pad / 2) },
      ])
      .png()
      .toFile(outFile);
  }

  // Texto por CoreText (scripts/videos/render-text.swift). Hace falta porque el
  // libvips de sharp en macOS sólo trae el backend CoreText de Pango: `fontfile`
  // y fontconfig se ignoran y toda fuente no instalada cae a Helvetica EN SILENCIO
  // (verificado 2026-09-09: el título "Asimovian" del primer máster era Helvetica).
  // El renderizador carga la fuente POR ARCHIVO y devuelve la familia real usada,
  // que aquí se compara con la pedida: si no coincide, se aborta.
  const rendererSrc = path.resolve(path.dirname(new URL(import.meta.url).pathname), "render-text.swift");
  const rendererBin = path.resolve(path.dirname(rendererSrc), ".bin", "render-text");
  function ensureRenderer() {
    const stale = !fs.existsSync(rendererBin) || fs.statSync(rendererBin).mtimeMs < fs.statSync(rendererSrc).mtimeMs;
    if (!stale) return;
    fs.mkdirSync(path.dirname(rendererBin), { recursive: true });
    console.log("[assemble] compilando render-text.swift (CoreText)…");
    run("swiftc", ["-O", "-o", rendererBin, rendererSrc]);
  }
  function renderNative({ text, fontFile, system, size, width, tracking = 0, lineheight = 1, color = "#F5F0E6", out }) {
    ensureRenderer();
    const argv = ["--text", text, "--size", String(size), "--width", String(width), "--tracking", String(tracking), "--lineheight", String(lineheight), "--color", color, "--out", out];
    if (fontFile) argv.push("--font", fontFile); else argv.push("--system", system || "Helvetica");
    return JSON.parse(run(rendererBin, argv).trim());
  }

  // Placa de título como el sitio: kicker arriba (uppercase, tracking 0.2em, como
  // `atlas-kicker` del hero) y el título del mito debajo en Asimovian, en caja de
  // frase y con tracking negativo (`font-editorial tracking-[-0.03em]` del hero,
  // cuyo tamaño de escritorio es 6.4rem ≈ 102 px). Sombra suave para leerse sobre
  // cualquier keyframe. Va en la franja superior, que las specs de keyframe dejan libre.
  async function titlePng(ti, outFile) {
    const color = plan.title_color || "#F5F0E6";
    const subColor = plan.title_sub_color || "#E4DCC8";
    const size = plan.title_size || 104;
    const tracking = plan.title_tracking ?? -0.03;
    const lineheight = plan.title_lineheight ?? 0.96;
    const titleText = plan.title_uppercase ? ti.text.toUpperCase() : ti.text;
    const mainPath = path.join(tmpDir, "title-main.png");
    const info = renderNative({ text: titleText, fontFile: titleFont.file, system: titleFont.file ? null : titleFont.family, size, width: 900, tracking, lineheight, color, out: mainPath });
    if (titleFont.file && info.family !== titleFont.family) {
      throw new Error(`La fuente del título no cargó: pedí "${titleFont.family}" y CoreText devolvió "${info.family}" (${info.postscript})`);
    }
    console.log(`[assemble] título en ${info.family} (${info.postscript}), ${info.lines} línea(s)`);
    const main = await sharp(mainPath).trim({ threshold: 1 }).png().toBuffer();
    const mMeta = await sharp(main).metadata();
    let sub = null, sMeta = null;
    if (ti.sub) {
      const subPath = path.join(tmpDir, "title-sub.png");
      renderNative({ text: ti.sub.toUpperCase(), system: plan.title_sub_font || "HelveticaNeue-Medium", size: plan.title_sub_size || 28, width: 900, tracking: 0.2, color: subColor, out: subPath });
      sub = await sharp(subPath).trim({ threshold: 1 }).png().toBuffer();
      sMeta = await sharp(sub).metadata();
    }
    const pad = 24, gap = 22;
    const totalH = pad + (sub ? sMeta.height + gap : 0) + mMeta.height + pad;
    const comps = [];
    let y = pad;
    if (sub) {
      comps.push({ input: await shadowOf(sub), left: Math.round((W - sMeta.width) / 2) + 2, top: y + 2 });
      comps.push({ input: sub, left: Math.round((W - sMeta.width) / 2), top: y });
      y += sMeta.height + gap;
    }
    comps.push({ input: await shadowOf(main, 3), left: Math.round((W - mMeta.width) / 2) + 2, top: y + 3 });
    comps.push({ input: main, left: Math.round((W - mMeta.width) / 2), top: y });
    await sharp({ create: { width: W, height: totalH, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
      .composite(comps)
      .png()
      .toFile(outFile);
  }

  const overlayDefs = []; // {file, y, enableFrom, enableTo, fade: bool}
  for (let i = 0; i < overlayCues.length; i++) {
    const cuePath = path.join(tmpDir, `cue${String(i).padStart(2, "0")}.png`);
    await textPngWithShadow(`<span foreground="#F5F0E6" weight="600">${esc(overlayCues[i].text)}</span>`, 880, 176, cuePath);
    overlayDefs.push({ file: cuePath, y: null, from: overlayCues[i].start, to: overlayCues[i].end, fade: false });
  }
  for (let t = 0; t < titles.length; t++) {
    const ti = titles[t];
    const titlePath = path.join(tmpDir, `title${t}.png`);
    await titlePng(ti, titlePath);
    overlayDefs.push({ file: titlePath, y: plan.title_y ?? Math.round(H * 0.2), from: ti.at + 0.8, to: ti.at + 5.6, fade: true });
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
  console.log(`[assemble] sobreimpresos: ${overlayCues.length} cues quemados${titles.length ? ` + ${titles.length} título(s) [${titleFont.family}]` : ""}${cues.length && WRITE_SRT ? ` (srt: ${srtPath})` : ""}`);
}

fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(finalIn, outPath);
const check = probeDuration(outPath);
console.log(`[assemble] listo: ${outPath} (${check.toFixed(2)}s, ${blockFiles.length} bloques)`);
if (!keepTemp) fs.rmSync(tmpDir, { recursive: true, force: true });
