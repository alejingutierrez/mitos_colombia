// Arma el CIERRE DE CANAL: el clip que va al final de TODOS los videos.
//
// Qué hace, y por qué así:
//
//  1. Los dos clips vienen de Seedance con la CÁMARA CLAVADA (ver
//     movimiento-v1-seedance.json). Un modelo de video no sabe dibujar una
//     interfaz web legible ni hacerla desplazarse: lo que pinta en la pantalla
//     del teléfono es una imitación que se deshace en cuanto se mueve.
//  2. Aquí se COMPONE ENCIMA la captura real del sitio, deformada con el filtro
//     `perspective` de ffmpeg sobre el cuadrilátero medido de la pantalla
//     (keyframes/pantalla-quad.json). El scroll también es real: se anima la
//     ventana de recorte sobre una captura de página completa.
//     Por eso la cámara tiene que estar quieta: el cuadrilátero es fijo.
//  3. El movimiento de cámara del cierre se añade DESPUÉS (Ken Burns por
//     expresiones de `crop`), ya con la pantalla compuesta, donde se controla al
//     píxel y no arrastra el compuesto.
//  4. La tipografía se renderiza con CoreText (render-text.swift) en Asimovian,
//     la fuente de títulos del sitio. Nunca con sharp/Pango: en macOS cae a
//     Helvetica en silencio.
//
// Uso:
//   node scripts/videos/build-cierre.mjs                 # máster mudo + versión con voz
//   node scripts/videos/build-cierre.mjs --solo-mudo
//   node scripts/videos/build-cierre.mjs --lecho content/videos/muiscas/cierre/lecho-v1.wav

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");
const D = path.join(root, "content/videos/muiscas/cierre");
const args = process.argv.slice(2);
const flag = (n, d = null) => { const i = args.indexOf(n); return i === -1 ? d : args[i + 1]; };
const soloMudo = args.includes("--solo-mudo");
const lechoPath = flag("--lecho", path.join(D, "lecho-v1.wav"));

const W = 1080, H = 1920, FPS = 24;

// ── Montaje ────────────────────────────────────────────────────────────────
// c01 lleva la acción (el pulgar y el scroll); c02 es la placa de cierre.
// La voz de la segunda línea entra justo en el corte, con la dirección.
const CORTE = 4.0;          // dura c01
const FIN = 8.4;            // duración total
const VOZ = [
  { file: "voces-v1/voz01.wav", at: 0.45 },   // "Hay cientos de mitos como este esperándote."
  { file: "voces-v1/voz02.wav", at: 4.35 },   // "Léelos completos en mitos de colombia punto com."
];

// Scroll real de la pantalla en c01: de la cabecera al cuerpo del relato, con
// un rebote corto al final, como un dedo que suelta.
const SCROLL = { desde: 0, hasta: 1500, sobrepaso: 44, empieza: 0.18, dura: 1.95, asienta: 0.38 };
// Ventana donde puede aparecer el pulgar sobre el vidrio, en el encuadre final.
const PULGAR = { x0: 280, y0: 1080, x1: 820, y1: 1600 };

const run = (cmd, argv, opts = {}) => {
  const r = spawnSync(cmd, argv, { encoding: "utf8", maxBuffer: 1 << 28, ...opts });
  if (r.status !== 0) {
    console.error(`\n[cierre] falló: ${cmd} ${argv.slice(0, 6).join(" ")}…`);
    console.error(String(r.stderr || "").split("\n").slice(-25).join("\n"));
    process.exit(1);
  }
  return String(r.stdout || "");
};
const ff = (argv) => run("ffmpeg", ["-y", "-loglevel", "error", ...argv]);
const probe = (f) => Number.parseFloat(run("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f]).trim());

const tmp = fs.mkdtempSync(path.join(process.env.TMPDIR || "/tmp", "cierre-"));
const T = (n) => path.join(tmp, n);

// ── 1. Tipografía por CoreText ─────────────────────────────────────────────
const rendererSrc = path.join(__dirname, "render-text.swift");
const rendererBin = path.join(__dirname, ".bin", "render-text");
if (!fs.existsSync(rendererBin) || fs.statSync(rendererBin).mtimeMs < fs.statSync(rendererSrc).mtimeMs) {
  fs.mkdirSync(path.dirname(rendererBin), { recursive: true });
  console.log("[cierre] compilando render-text.swift (CoreText)…");
  run("swiftc", ["-O", "-o", rendererBin, rendererSrc]);
}
const ASIMOVIAN = path.join(root, "content/videos/fonts/Asimovian-Regular.ttf");
const VERDE = "#1c5c3f";   // --jungle-500 del sitio
const EMBER = "#a8702c";   // --v3-accent-ember oscurecido para leerse sobre papel crema

function renderText(o) {
  const argv = ["--text", o.text, "--size", String(o.size), "--width", "960",
    "--tracking", String(o.tracking ?? 0), "--lineheight", String(o.lineheight ?? 1),
    "--color", o.color, "--out", o.out];
  if (o.font) argv.push("--font", o.font); else argv.push("--system", o.system);
  const info = JSON.parse(run(rendererBin, argv).trim());
  if (o.font && info.family !== "Asimovian") {
    throw new Error(`La tipografía no cargó: pedí Asimovian y CoreText devolvió "${info.family}"`);
  }
  return info;
}

const tipoDir = path.join(D, "tipografia");
fs.mkdirSync(tipoDir, { recursive: true });
const tCta = path.join(tipoDir, "a-cta.png");
const tWord = path.join(tipoDir, "b-wordmark.png");
const tUrl = path.join(tipoDir, "b-url.png");
const iCta = renderText({ text: "Léelos completos", font: ASIMOVIAN, size: 82, tracking: -0.03, lineheight: 0.98, color: VERDE, out: tCta });
const iWord = renderText({ text: "Mitos de Colombia", font: ASIMOVIAN, size: 104, tracking: -0.03, lineheight: 0.96, color: VERDE, out: tWord });
const iUrl = renderText({ text: "MITOSDECOLOMBIA.COM", system: "HelveticaNeue-Medium", size: 34, tracking: 0.22, color: EMBER, out: tUrl });
console.log(`[cierre] tipografía en ${iWord.family} (${iWord.postscript}) + ${iUrl.postscript}`);

// Filete corto entre el wordmark y la dirección, como el `v3-rule-accent` del sitio.
const tRule = T("rule.png");
ff(["-f", "lavfi", "-i", `color=c=${EMBER}:s=44x3`, "-frames:v", "1", tRule]);

// ── 2. Máscara de la pantalla: rectángulo de esquinas redondeadas y borde suave ──
// Se deforma con la MISMA perspectiva que el contenido, así el compuesto termina
// exactamente en el vidrio y no en el bisel.
// (el ffmpeg de este Mac no trae decodificador de SVG: la máscara se rasteriza con sharp)
const maskFlat = T("mask.png");
{
  const r = 46, f = 3;   // radio de esquina y margen interior, en el espacio 1080x1920
  const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><rect x="${f}" y="${f}" width="${W - 2 * f}" height="${H - 2 * f}" rx="${r}" ry="${r}" fill="#ffffff"/></svg>`);
  await sharp(svg, { density: 72 }).resize(W, H).flatten({ background: "#000000" }).png().toFile(maskFlat);
}

// ── 3. Un clip compuesto ───────────────────────────────────────────────────
const quads = JSON.parse(fs.readFileSync(path.join(D, "keyframes/pantalla-quad.json"), "utf8"));
const pantalla = path.join(D, "pantalla/mito-scroll.png");

// perspective quiere los 4 puntos en orden TL, TR, BL, BR (x0y0 x1y1 x2y2 x3y3).
const persp = (q) => {
  const p = [q.TL, q.TR, q.BL, q.BR];
  return p.map((pt, i) => `x${i}=${pt[0]}:y${i}=${pt[1]}`).join(":") + ":sense=destination:eval=init";
};

// Recorte vertical animado sobre la captura de página completa: reposo, empujón
// con suavizado, sobrepaso de un pelo y asiento. Sin esto el scroll parece una
// interpolación, no un dedo.
function expresionScroll() {
  const { desde, hasta, sobrepaso, empieza, dura, asienta } = SCROLL;
  const p = `clip((t-${empieza})/${dura},0,1)`;
  const s = `(${p}*${p}*(3-2*${p}))`;                       // smoothstep
  const t2 = empieza + dura;
  const q = `clip((t-${t2})/${asienta},0,1)`;
  const s2 = `(${q}*${q}*(3-2*${q}))`;
  const subida = `${desde}+${hasta + sobrepaso - desde}*${s}`;
  return `if(lt(t,${t2}), ${subida}, ${hasta + sobrepaso}-${sobrepaso}*${s2})`;
}

// El pulgar pasa POR DELANTE del vidrio, así que la captura no puede taparlo.
// Se saca su silueta del propio clip: dentro de la pantalla el pulgar es ocre
// (R-B alto) y la página es gris neutra, así que la regla de color los separa
// limpiamente. Se unen varios fotogramas (el pulgar barre hacia arriba), se
// rellena hacia abajo por columna —en los primeros fotogramas está más bajo, y
// ahí la página aún muestra la foto arenosa del mito, donde la regla de color no
// sirve— y se suaviza el borde. Sale en coordenadas del encuadre final, no de la
// pantalla: se resta de la máscara YA deformada.
async function matteDelPulgar(clip, out) {
  const dir = T("pulgar");
  fs.mkdirSync(dir, { recursive: true });
  // Desde n=48: antes de eso la pantalla aún muestra la foto arenosa del mito, y
  // esa arena cae en el mismo rango de color que el pulgar. Como el prompt le pide
  // a la mano que no se mueva (y se verificó: la punta se queda en 580,1233 con
  // ~29.000 px constantes), el matte de esos fotogramas vale para todo el clip.
  ff(["-i", clip, "-vf", "select='gte(n\\,48)*not(mod(n\\,8))'", "-vsync", "0", path.join(dir, "u%02d.png")]);
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".png")).sort();
  const u = new Uint8Array(W * H);
  for (const f of files) {
    const { data } = await sharp(path.join(dir, f)).removeAlpha().raw().toBuffer({ resolveWithObject: true });
    for (let y = PULGAR.y0; y < PULGAR.y1; y++) for (let x = PULGAR.x0; x < PULGAR.x1; x++) {
      const i = (y * W + x) * 3;
      if (data[i] - data[i + 2] > 35 && data[i] - data[i + 1] > 18) u[y * W + x] = 255;   // ocre de papel vs. página gris neutra
    }
  }
  // Sin relleno hacia abajo: con el pulgar quieto, el matte lo calca. La primera
  // versión sí lo llevaba (el pulgar barría) y abría una franja a su izquierda por
  // donde se veía la página inventada del modelo.
  await sharp(Buffer.from(u), { raw: { width: W, height: H, channels: 1 } })
    // blur + umbral duro = dilatación de ~7 px (para cubrir el pulgar de los
    // primeros fotogramas, que va un poco más a la izquierda), y 3 px de borde
    // suave. Más holgura que esta deja asomar el texto inventado del modelo
    // alrededor del pulgar: se vio en la primera versión y era lo más feo del clip.
    .blur(7).linear(255, -16320).blur(2.5).png().toFile(out);
  const px = u.reduce((a, v) => a + (v ? 1 : 0), 0);
  console.log(`[cierre] matte del pulgar: ${px} px de ${files.length} fotogramas → ${path.relative(root, out)}`);
}

function componer(clip, quad, { scroll, kb, matte }, out) {
  const dur = Math.min(probe(clip), kb.dur);
  const cropY = scroll ? expresionScroll() : "0";
  // Ken Burns en post: `crop` evalúa w/h una sola vez, así que el movimiento va
  // con `zoompan`, que sí acepta expresiones por fotograma. Se amplía a 2x antes
  // para que el salto de un píxel entero de zoompan se note la mitad.
  const N = Math.max(2, Math.round(dur * FPS));
  const z = `(${kb.z0}+(${kb.z1}-${kb.z0})*on/${N - 1})`;
  const kbChain = `scale=${W * 2}:${H * 2}:flags=bicubic,` +
    `zoompan=z='${z}':x='(iw-iw/zoom)*0.5':y='(ih-ih/zoom)*${kb.anchor}':d=1:s=${W}x${H}:fps=${FPS}`;

  const filtro = [
    // 0: el clip
    `[0:v]scale=${W}:${H},fps=${FPS},trim=duration=${dur},setpts=PTS-STARTPTS[base]`,
    // 1: la captura del sitio → ventana animada → lienzo 1080x1920 → perspectiva
    `[1:v]crop=1179:2556:0:'${cropY}',scale=${W}:${H}:flags=lanczos,format=rgb24,` +
      // la pantalla es papel iluminado por dentro, no un LED: se calienta y se baja un punto
      `colorbalance=rs=0.02:gs=0.005:bs=-0.035,eq=brightness=-0.015:saturation=0.94,` +
      `perspective=${persp(quad)},fps=${FPS},trim=duration=${dur},setpts=PTS-STARTPTS[scr]`,
    // 2: la máscara del vidrio, con la misma perspectiva
    `[2:v]scale=${W}:${H},format=gray,perspective=${persp(quad)},boxblur=2:1[qm]`,
    // 3 (si hay): el pulgar se RESTA de la máscara, así queda por delante del compuesto
    ...(matte ? [`[3:v]format=gray[th]`, `[qm][th]blend=all_mode=subtract[msk]`] : [`[qm]null[msk]`]),
    `[scr][msk]alphamerge[scra]`,
    `[base][scra]overlay=0:0:format=auto[comp]`,
    `[comp]${kbChain}[vout]`,
  ].join(";");

  const entradas = ["-i", clip, "-loop", "1", "-framerate", String(FPS), "-i", pantalla,
    "-loop", "1", "-framerate", String(FPS), "-i", maskFlat];
  if (matte) entradas.push("-loop", "1", "-framerate", String(FPS), "-i", matte);
  ff([...entradas,
    "-filter_complex", filtro, "-map", "[vout]", "-t", String(dur),
    "-c:v", "libx264", "-preset", "slow", "-crf", "16", "-pix_fmt", "yuv420p", out]);
  return dur;
}

const clipsDir = path.join(D, "clips-v1");
const c01 = path.join(clipsDir, "c01.mp4");
const c02 = path.join(clipsDir, "c02.mp4");
for (const f of [c01, c02]) if (!fs.existsSync(f)) { console.error(`[cierre] falta ${f}`); process.exit(1); }

const mattePulgar = path.join(D, "keyframes/matte-pulgar.png");
await matteDelPulgar(c01, mattePulgar);
console.log("[cierre] componiendo la pantalla real en c01 (con scroll)…");
const dA = componer(c01, quads.c01.quad, { scroll: true, matte: mattePulgar, kb: { z0: 1.0, z1: 1.035, anchor: 0.42, dur: CORTE } }, T("a.mp4"));
console.log("[cierre] componiendo la pantalla real en c02 (placa de cierre)…");
const dB = componer(c02, quads.c02.quad, { scroll: false, kb: { z0: 1.055, z1: 1.0, anchor: 0.62, dur: FIN - CORTE } }, T("b.mp4"));

// ── 4. Corte seco entre los dos ────────────────────────────────────────────
fs.writeFileSync(T("lista.txt"), [T("a.mp4"), T("b.mp4")].map((f) => `file '${f}'`).join("\n") + "\n");
ff(["-f", "concat", "-safe", "0", "-i", T("lista.txt"), "-c", "copy", T("corte.mp4")]);
const total = probe(T("corte.mp4"));

// ── 5. Tipografía encima ───────────────────────────────────────────────────
// Todo el texto es OSCURO sobre el papel crema del cielo: es tinta sobre papel,
// no un rótulo sobre una imagen, así que no lleva sombra.
const capas = [
  { file: tCta, y: 190, from: 2.25, to: CORTE, fadeIn: 0.55, fadeOut: 0.0 },
  { file: tWord, y: 352, from: CORTE + 0.45, to: total, fadeIn: 0.6, fadeOut: 0.5 },
  { file: tRule, y: 520, from: CORTE + 0.85, to: total, fadeIn: 0.45, fadeOut: 0.5 },
  { file: tUrl, y: 572, from: CORTE + 1.0, to: total, fadeIn: 0.5, fadeOut: 0.5 },
];
{
  const inputs = ["-i", T("corte.mp4")];
  const parts = [];
  let prev = "0:v";
  capas.forEach((c, k) => {
    inputs.push("-loop", "1", "-framerate", String(FPS), "-t", String(Math.ceil(total)), "-i", c.file);
    let src = `${k + 1}:v`;
    const fades = [`[${src}]format=rgba`];
    if (c.fadeIn) fades.push(`fade=t=in:st=${c.from.toFixed(2)}:d=${c.fadeIn}:alpha=1`);
    if (c.fadeOut) fades.push(`fade=t=out:st=${(c.to - c.fadeOut).toFixed(2)}:d=${c.fadeOut}:alpha=1`);
    parts.push(`${fades.join(",")}[f${k}]`);
    src = `f${k}`;
    const out = k === capas.length - 1 ? "vout" : `o${k}`;
    parts.push(`[${prev}][${src}]overlay=x=(W-w)/2:y=${c.y}:enable='between(t,${c.from.toFixed(2)},${c.to.toFixed(2)})'[${out}]`);
    prev = out;
  });
  ff([...inputs, "-filter_complex", parts.join(";"), "-map", "[vout]", "-t", String(total),
    "-c:v", "libx264", "-preset", "slow", "-crf", "16", "-pix_fmt", "yuv420p", T("tipo.mp4")]);
}

const mudo = path.join(D, "cierre-canal-v1-mudo.mp4");
fs.copyFileSync(T("tipo.mp4"), mudo);
console.log(`[cierre] máster MUDO: ${path.relative(root, mudo)} (${probe(mudo).toFixed(2)}s, ${dA.toFixed(2)}+${dB.toFixed(2)})`);
console.log("[cierre]   → este es el que se pega al final de cada video (un bloque más en el plan,");
console.log("[cierre]     con voice = voz-cierre.wav; el lecho del propio video sigue sonando encima).");

// ── 6. Voz unida, para que el cierre quepa en UN bloque del plan ───────────
const vozOut = path.join(D, "voces-v1/voz-cierre.wav");
{
  const inputs = [];
  const parts = [];
  VOZ.forEach((v, i) => {
    inputs.push("-i", path.join(D, v.file));
    parts.push(`[${i}:a]aresample=48000,adelay=${Math.round(v.at * 1000)}|${Math.round(v.at * 1000)}[v${i}]`);
  });
  parts.push(`${VOZ.map((_, i) => `[v${i}]`).join("")}amix=inputs=${VOZ.length}:normalize=0,apad,atrim=duration=${total}[a]`);
  ff([...inputs, "-filter_complex", parts.join(";"), "-map", "[a]", "-c:a", "pcm_s24le", vozOut]);
  console.log(`[cierre] voz del cierre en un solo archivo: ${path.relative(root, vozOut)} (${probe(vozOut).toFixed(2)}s)`);
}

// ── 7. Versión suelta, con voz y lecho, para ver y compartir ───────────────
if (!soloMudo) {
  const conAudio = path.join(D, "cierre-canal-v1.mp4");
  const tieneLecho = fs.existsSync(lechoPath);
  if (!tieneLecho) console.log(`[cierre] sin lecho (${path.relative(root, lechoPath)} no existe): la versión suelta va sólo con voz`);
  const inputs = ["-i", mudo, "-i", vozOut];
  const parts = [`[1:a]aresample=48000[voz]`];
  if (tieneLecho) {
    inputs.push("-i", lechoPath);
    // Mismo balance que el sitio: voz -16 LUFS, lecho 18 dB por debajo, sin ducking.
    parts.push(`[2:a]aresample=48000,atrim=duration=${total},afade=t=out:st=${(total - 1.6).toFixed(2)}:d=1.6,volume=-18dB[bed]`);
    parts.push(`[voz][bed]amix=inputs=2:normalize=0[mix]`);
  } else {
    parts.push(`[voz]anull[mix]`);
  }
  parts.push(`[mix]alimiter=limit=0.84:attack=5:release=60:level=false[a]`);
  ff([...inputs, "-filter_complex", parts.join(";"), "-map", "0:v", "-map", "[a]",
    "-c:v", "copy", "-c:a", "aac", "-b:a", "192k", "-shortest", conAudio]);
  console.log(`[cierre] versión suelta con audio: ${path.relative(root, conAudio)} (${probe(conAudio).toFixed(2)}s)`);
}

fs.rmSync(tmp, { recursive: true, force: true });
