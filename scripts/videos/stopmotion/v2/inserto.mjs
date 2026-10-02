// Inserto dibujado con carta de exposición: un objeto, ≤ 2 s de acción.
//
// Lo que cambia frente a v1, punto por punto:
//  - A y B son fotogramas completos aprobados; la hoja de recortes los ve a
//    los dos y va de A a "un paso antes de B" (no puede retroceder ni
//    reiniciar: no hay más hojas).
//  - Cada celda se pega ENTERA sobre el plató, a UNA escala (la de la hoja):
//    nada de normalizar por caja alfa, que es lo que hacía bombear a la lechuza.
//  - Sin sombra sintética. Desenfoque del recorte calibrado contra el plató.
//  - La secuencia la manda la CARTA {img, frames}: hold de anticipación sobre A,
//    los recortes a dos (el impacto a uno), hold de remate sobre B.
//
//   node scripts/videos/stopmotion/v2/inserto.mjs --spec P14.json --dir <planos-out> [--solo hoja|componer|montar]
import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import sharp from "sharp";
import { genImage, rootDir } from "../img.mjs";
import { cargarPlano, promptHojaInserto } from "./comun.mjs";

const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const p = await cargarPlano(path.resolve(rootDir, flag("--spec")));
const dir = path.resolve(rootDir, flag("--dir"), p.plano);
const solo = flag("--solo", "todo");
const hacer = (x) => solo === "todo" || solo === x;
const existe = (f) => fs.access(f).then(() => true).catch(() => false);
const A = path.join(dir, "A.jpg"), B = path.join(dir, "B.jpg"), plato = path.join(dir, "plato.jpg");
if (!(await existe(A)) || !(await existe(B))) throw new Error("faltan A y B aprobados");

// 1. Plató = A sin el objeto.
if (!(await existe(plato))) {
  const r = await genImage({
    prompt: `La imagen de referencia es un fotograma de una maqueta de papel. Devuelve EXACTAMENTE LA MISMA IMAGEN con un solo cambio: quitar ${p.objeto} y reconstruir detrás lo que tapaba. Todo lo demás píxel a píxel igual: encuadre, luz, suelo, fondo, materiales. Sin personas, sin texto.`,
    refs: [A], outPath: plato, quality: "high", size: "1088x1920", tag: `v2/${p.plano}/plato`,
  });
  console.log(`plató  $${r.usd.toFixed(3)}`);
}

// 2. Hoja 3x3 de recortes del objeto sobre alfa, de A a un paso antes de B.
const hoja = path.join(dir, "hoja-recortes.png");
const N = 9;
if (hacer("hoja") && !(await existe(hoja))) {
  const r = await genImage({ prompt: promptHojaInserto(p, N), refs: [A, B], outPath: hoja, quality: "high", size: "2160x3840", background: "transparent", formato: "png", tag: `v2/${p.plano}/hoja` });
  console.log(`hoja  ${(r.ms / 1000).toFixed(0)}s  $${r.usd.toFixed(3)}`);
}
const rec = path.join(dir, "recortes");
await fs.mkdir(rec, { recursive: true });
const cw = 720, ch = 1280;
const medidas = [];
for (let i = 0; i < N; i++) {
  const celda = await sharp(hoja).extract({ left: (i % 3) * cw, top: Math.floor(i / 3) * ch, width: cw, height: ch }).resize(1088, 1920, { kernel: "lanczos3" }).png().toBuffer();
  await fs.writeFile(path.join(rec, `f${i}.png`), celda);
  // G5: tamaño del objeto por la MÁSCARA alfa (ancho de píxeles opacos por fila, máximo), no por la caja.
  const { data, info } = await sharp(celda).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let maxW = 0, cx = 0, cy = 0, n = 0;
  for (let y = 0; y < info.height; y++) {
    let w = 0;
    for (let x = 0; x < info.width; x++) { const a = data[(y * info.width + x) * 4 + 3]; if (a > 40) { w++; cx += x; cy += y; n++; } }
    if (w > maxW) maxW = w;
  }
  medidas.push({ celda: i, ancho_max: maxW, cx: n ? Math.round(cx / n) : null, cy: n ? Math.round(cy / n) : null, px: n });
}
const anchos = medidas.map((m) => m.ancho_max);
const varTam = (Math.max(...anchos) - Math.min(...anchos)) / (Math.max(...anchos) || 1);
console.log(`G5 tamaño del objeto: variación ${(varTam * 100).toFixed(1)}% (umbral 3%) · centroides y: ${medidas.map((m) => m.cy).join(" ")}`);
await fs.writeFile(path.join(dir, "g5.json"), JSON.stringify({ variacion_tamano: varTam, medidas }, null, 1));

// 3. Componer: celda entera sobre el plató, una sola escala, sin sombra, alfa erosionado 1 px, desenfoque calibrado.
const frames = path.join(dir, "frames");
if (hacer("componer")) {
  await fs.rm(frames, { recursive: true, force: true });
  await fs.mkdir(frames, { recursive: true });
  const lap = async (f) => { const g = await sharp(f).resize(272, 480).greyscale().raw().toBuffer(); let s = 0, s2 = 0, n = 0; for (let y = 1; y < 479; y++) for (let x = 1; x < 271; x++) { const v = 4 * g[y * 272 + x] - g[y * 272 + x - 1] - g[y * 272 + x + 1] - g[(y - 1) * 272 + x] - g[(y + 1) * 272 + x]; s += v; s2 += v * v; n++; } return s2 / n - (s / n) ** 2; };
  const lapPlato = await lap(plato);
  // El modelo dibuja la caída como una diagonal de la HOJA y la posición se
  // reinicia en cada fila; y hornea un halo cálido en el alfa. Así que: alfa
  // endurecido (el halo desaparece) y el NÚCLEO del objeto (alfa > 200) se
  // lleva por una trayectoria escrita: x lineal y y con aceleración de caída,
  // desde donde está en la celda 1 (= A) hasta donde está en la celda 9 (= B).
  const nucleo = async (png) => {
    const { data, info } = await sharp(png).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    let x0 = info.width, y0 = info.height, x1 = -1, y1 = -1;
    for (let y = 0; y < info.height; y++) for (let x = 0; x < info.width; x++) if (data[(y * info.width + x) * 4 + 3] > 200) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
    return { cx: (x0 + x1) / 2, top: y0, bottom: y1 };
  };
  const endurecer = async (png) => {
    const { data, info } = await sharp(png).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    for (let i = 3; i < data.length; i += 4) { const a = data[i]; data[i] = a <= 110 ? 0 : a >= 235 ? 255 : Math.round(((a - 110) / 125) * 255); }
    return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer();
  };
  const celdas = [];
  for (let i = 0; i < N; i++) celdas.push({ png: await endurecer(path.join(rec, `f${i}.png`)) });
  for (let i = 0; i < N; i++) celdas[i].n = await nucleo(celdas[i].png);
  const ini = celdas[0].n, fin = celdas[N - 1].n;
  for (let i = 0; i < N; i++) {
    const t = i / (N - 1);
    // Objetivo: el borde inferior del núcleo cae con aceleración; x lineal.
    const objX = ini.cx + (fin.cx - ini.cx) * t;
    const objBottom = ini.bottom + (fin.bottom - ini.bottom) * t * t;
    const dx = Math.round(objX - celdas[i].n.cx), dy = Math.round(objBottom - celdas[i].n.bottom);
    const lapRec = await lap(celdas[i].png);
    const sigma = lapRec > 2 * lapPlato ? Math.min(2.5, 0.4 * Math.log2(lapRec / lapPlato)) : 0;
    let capa = sharp(celdas[i].png);
    if (sigma > 0.3) capa = capa.blur(sigma);
    // Desplazar la celda entera (dx, dy) recortando/extendiendo con transparencia.
    const { width: W, height: H } = await sharp(celdas[i].png).metadata();
    // sharp aplica extract ANTES de extend si van en la misma tubería: dos pasos.
    const extendida = await capa.extend({ top: Math.max(0, dy), bottom: Math.max(0, -dy), left: Math.max(0, dx), right: Math.max(0, -dx), background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
    const movida = await sharp(extendida).extract({ left: Math.max(0, -dx), top: Math.max(0, -dy), width: W, height: H }).png().toBuffer();
    await sharp(plato).composite([{ input: movida, left: 0, top: 0 }]).jpeg({ quality: 95 }).toFile(path.join(frames, `f${i}.jpg`));
    process.stdout.write(`  f${i}: dx ${dx} dy ${dy}\n`);
  }
  console.log(`compuestos ${N} sobre un solo plató (nitidez plató ${lapPlato.toFixed(0)})`);
}

// 4. Montar según la carta: [["A",12],["f0",2],...,["B",36]] → mp4 a 24 fps.
if (hacer("montar")) {
  const lista = p.carta.map(([img, fr]) => `file '${path.join(frames, img + ".jpg")}'\nduration ${(fr / 24).toFixed(5)}`).join("\n");
  const listaPath = path.join(dir, ".carta.txt");
  await fs.writeFile(listaPath, `${lista}\nfile '${path.join(frames, p.carta.at(-1)[0] + ".jpg")}'\n`);
  const total = p.carta.reduce((a, [, f]) => a + f, 0) / 24;
  const out = path.join(dir, `${p.plano}-inserto.mp4`);
  const r = spawnSync("ffmpeg", ["-y", "-v", "error", "-f", "concat", "-safe", "0", "-i", listaPath, "-vf", "scale=1080:1920:flags=lanczos,setsar=1,fps=24", "-c:v", "libx264", "-preset", "slow", "-crf", "18", "-pix_fmt", "yuv420p", "-t", String(total), out], { encoding: "utf8" });
  if (r.status !== 0) throw new Error(r.stderr.slice(-1200));
  const manifiesto = { plano: p.plano, carta: p.carta, fotogramas: p.carta.reduce((a, [, f]) => a + f, 0), duracion_s: total, g5_variacion_tamano: varTam };
  await fs.writeFile(path.join(dir, "manifiesto.json"), JSON.stringify(manifiesto, null, 1));
  console.log(`inserto ${total.toFixed(2)} s → ${path.relative(rootDir, out)}`);
}
