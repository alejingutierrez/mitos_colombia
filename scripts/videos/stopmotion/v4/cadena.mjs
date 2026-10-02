// Carril v4 — CUADRO COMPLETO, SIN RECORTES.
//
// El usuario descarta el recorte sobre alfa y la composición sobre un plató:
// no funciona de verdad. Aquí no hay canal alfa en ninguna etapa. Cada
// fotograma es una imagen completa, con su decorado, generada a partir del
// fotograma anterior.
//
// El orden es el que pidió:
//
//   1. PLANCHA DE MOVIMIENTO (1x3, celdas de 1088x1920 NATIVAS): inicio (el
//      keyframe A), momento central, momento final. Sirve para entender cómo
//      se mueve la escena antes de planificar nada.
//   2. PLANCHA DEL PLAN (3x2, seis hitos): el estado en t=0,1,2,3,4,5 s. Es el
//      plan de creación de keyframes.
//   3. PLANCHA DE CADA SEGUNDO (6x4, 24 celdas): del hito N al hito N+1, los 24
//      fotogramas de ese segundo. Cinco planchas para los cinco segundos.
//   4. CADENA: cada celda se recorta y se pasa COMO GUÍA junto con el fotograma
//      anterior ya creado, para generar el siguiente fotograma a resolución
//      completa. El anterior manda en plató, luz, identidad y escala; la guía
//      manda sólo en la pose. Y así sucesivamente.
//
// Cada segundo arranca de su hito, así que los cinco segundos pueden correr en
// paralelo mientras la cadena dentro de cada segundo sigue siendo estricta: la
// deriva acumulada nunca pasa de 24 pasos.
//
//   node scripts/videos/stopmotion/v4/cadena.mjs --spec <plano.json> --dir <out> --paso movimiento|plan|segundos|cadena|montar [--segundo 1] [--fps 24]
import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import sharp from "sharp";
import { genImage, rootDir } from "../img.mjs";
import { cargarPlano, bloqueComun, assertComun, bloque } from "../v2/comun.mjs";

const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const p = await cargarPlano(path.resolve(rootDir, flag("--spec")));
const dir = path.resolve(rootDir, flag("--dir"), p.plano, p.carpeta || "v4");
const paso = flag("--paso", "todo");
const hacer = (x) => paso === "todo" || paso === x;
const FPS = Number(flag("--fps", 24));
const SEGS = Number(p.duracion || 5);
const base = path.resolve(rootDir, flag("--dir"), p.plano);
const A = path.join(base, "A.jpg"), B = path.join(base, "B.jpg");
await fs.mkdir(dir, { recursive: true });
const existe = (f) => fs.access(f).then(() => true).catch(() => false);
const nn = (i, n = 2) => String(i).padStart(n, "0");
const tablaPath = path.join(dir, "tabla-estados.json");
const tabla = (await existe(tablaPath)) ? JSON.parse(await fs.readFile(tablaPath, "utf8")) : { plano: p.plano, modelo: "gpt-image-2.5-sunburst", metodo: "cuadro completo en cadena, sin recortes", fps: FPS, estados: [] };
const anota = async (e) => { const i = tabla.estados.findIndex((x) => x.id === e.id); if (i >= 0) tabla.estados[i] = { ...tabla.estados[i], ...e }; else tabla.estados.push(e); await fs.writeFile(tablaPath, JSON.stringify(tabla, null, 1)); };
const gastado = () => tabla.estados.reduce((a, e) => a + (e.usd || 0), 0);

const CUADRO = [
  "Cada celda es un FOTOGRAMA COMPLETO de la toma, con todo su decorado: el mismo encuadre, la misma distancia y altura de cámara, la misma luz y el mismo fondo que la imagen de referencia. No hay fondos grises, ni recortes, ni siluetas sueltas.",
  "Lo que no se mueve está en el MISMO SITIO en todas las celdas, píxel por píxel: bohíos, vasijas, muro, fogón, luna, suelo.",
  "Rejilla regular a sangre, SIN canales, bordes, líneas divisorias, etiquetas ni números.",
];

// ---- 1. PLANCHA DE MOVIMIENTO: inicio · centro · final --------------------
const movimiento = path.join(dir, "1-movimiento.jpg");
if (hacer("movimiento") && !(await existe(movimiento))) {
  const prompt = assertComun([
    "Dirección de arte para un video de mitos colombianos (pueblo muisca, altiplano cundiboyacense).",
    bloqueComun(p),
    "",
    "Genera UNA hoja de 1 fila y 3 columnas: los tres momentos que definen esta toma de 5 segundos, de izquierda a derecha.",
    ...CUADRO,
    "",
    "Celda 1 — MOMENTO INICIAL: exactamente el fotograma de la referencia 2, sin cambiar nada.",
    `Celda 2 — MOMENTO CENTRAL (segundo 2,5): ${p.centro}`,
    "Celda 3 — MOMENTO FINAL: exactamente el fotograma de la referencia 3, sin cambiar nada.",
    "",
    "PAPEL DE CADA IMAGEN ADJUNTA:",
    "- Referencia 1: la maestra del plano (identidad, materiales, luz).",
    "- Referencia 2: el fotograma inicial (celda 1).",
    "- Referencia 3: el fotograma final (celda 3).",
    "",
    bloque("LA ACCIÓN COMPLETA DE LA TOMA:", p.accion),
  ].join("\n"));
  const r = await genImage({ prompt, refs: [A, A, B], outPath: movimiento, quality: "high", size: "3264x1920", tag: `v4/${p.plano}/movimiento` });
  await anota({ id: "movimiento", etapa: "plancha-movimiento", prompt, refs: ["A (maestra)", "A", "B"], ajustes: { size: "3264x1920", celdas: "3 de 1088x1920 nativas" }, archivo: "1-movimiento.jpg", usd: r.usd, ms: r.ms });
  for (let i = 0; i < 3; i++) await sharp(movimiento).extract({ left: i * 1088, top: 0, width: 1088, height: 1920 }).jpeg({ quality: 95 }).toFile(path.join(dir, `1-mov-${["inicio", "centro", "final"][i]}.jpg`));
  console.log(`plancha de movimiento  ${(r.ms / 1000).toFixed(0)}s  $${r.usd.toFixed(3)}  → 3 celdas nativas`);
}

// ---- 2. PLANCHA DEL PLAN: seis hitos, uno por segundo ---------------------
const plan = path.join(dir, "2-plan.jpg");
const PLAN_W = 2592, PLAN_H = 3072, PLAN_C = 864, PLAN_R = 1536; // 3x2 celdas
if (hacer("plan") && !(await existe(plan))) {
  const prompt = assertComun([
    "Dirección de arte para un video de mitos colombianos (pueblo muisca, altiplano cundiboyacense).",
    bloqueComun(p),
    "",
    "Genera UNA hoja de 2 filas y 3 columnas: los SEIS HITOS de esta toma de 5 segundos, en orden de izquierda a derecha y luego de arriba abajo. Celda 1 = segundo 0 (inicio), celda 2 = segundo 1, celda 3 = segundo 2, celda 4 = segundo 3, celda 5 = segundo 4, celda 6 = segundo 5 (final).",
    ...CUADRO,
    "El movimiento avanza en pasos IGUALES de un hito al siguiente: cada celda adelanta exactamente un quinto de la acción. Nunca retrocede, nunca se queda quieta dos celdas seguidas, nunca adelanta el final.",
    "",
    // El modelo adelanta el desenlace si no se le dice qué hay en cada hito:
    // en la primera plancha, el hito del segundo 1 ya era casi el ave y los
    // tres últimos quedaban quietos. Los seis estados van escritos.
    ...(p.hitos || []).map((h, i) => `Celda ${i + 1} — SEGUNDO ${i}: ${h}`),
    "",
    "PAPEL DE CADA IMAGEN ADJUNTA:",
    "- Referencia 1: la plancha de movimiento de esta toma (inicio | centro | final): la celda 1 de esta hoja es su inicio, la celda 4 su centro aproximado y la celda 6 su final.",
    "- Referencia 2: el fotograma inicial.",
    "- Referencia 3: el fotograma final.",
    "",
    bloque("LA ACCIÓN COMPLETA DE LA TOMA:", p.accion),
  ].join("\n"));
  const r = await genImage({ prompt, refs: [movimiento, A, B], outPath: plan, quality: "high", size: `${PLAN_W}x${PLAN_H}`, tag: `v4/${p.plano}/plan` });
  await anota({ id: "plan", etapa: "plancha-plan", prompt, refs: ["1-movimiento.jpg", "A", "B"], ajustes: { size: `${PLAN_W}x${PLAN_H}`, celdas: "6 hitos" }, archivo: "2-plan.jpg", usd: r.usd, ms: r.ms });
  for (let i = 0; i < 6; i++) await sharp(plan).extract({ left: (i % 3) * PLAN_C, top: Math.floor(i / 3) * PLAN_R, width: PLAN_C, height: PLAN_R }).resize(1088, 1920, { kernel: "lanczos3" }).jpeg({ quality: 95 }).toFile(path.join(dir, `2-hito-${i}.jpg`));
  console.log(`plancha del plan  ${(r.ms / 1000).toFixed(0)}s  $${r.usd.toFixed(3)}  → 6 hitos`);
}

// ---- 3. PLANCHA DE CADA SEGUNDO: 24 celdas --------------------------------
const SEG_W = 2592, SEG_H = 3072, SEG_C = 432, SEG_R = 768; // 6x4 celdas
const planchaSeg = (s) => path.join(dir, `3-segundo-${s}.jpg`);
const celdasSeg = (s) => path.join(dir, `3-segundo-${s}-celdas`);
async function hazSegundo(s) {
  const out = planchaSeg(s);
  if (await existe(out)) return 0;
  const prompt = assertComun([
    "Dirección de arte para un video de mitos colombianos (pueblo muisca, altiplano cundiboyacense).",
    bloqueComun(p),
    "",
    `Genera UNA hoja de 4 filas y 6 columnas: los ${FPS} fotogramas del SEGUNDO ${s} de esta toma, en orden de izquierda a derecha y luego de arriba abajo.`,
    ...CUADRO,
    `La celda 1 es EXACTAMENTE el estado de la referencia 2 (el hito del segundo ${s - 1}). La celda ${FPS} es el estado JUSTO ANTES de la referencia 3 (el hito del segundo ${s}). Entre medias, el movimiento avanza en pasos IGUALES y MUY PEQUEÑOS —son fotogramas consecutivos a 24 por segundo—, sin retroceder y sin saltarse nada.`,
    "",
    "PAPEL DE CADA IMAGEN ADJUNTA:",
    "- Referencia 1: la plancha del plan (los seis hitos de la toma), para situar este segundo dentro de la acción.",
    `- Referencia 2: el hito de ARRANQUE de este segundo (celda 1).`,
    `- Referencia 3: el hito de LLEGADA de este segundo (celda ${FPS} un paso antes).`,
    "",
    bloque("LO QUE PASA EN ESTE SEGUNDO:", p.segundos?.[s - 1] ? [p.segundos[s - 1]] : p.accion),
  ].join("\n"));
  const r = await genImage({ prompt, refs: [plan, path.join(dir, `2-hito-${s - 1}.jpg`), path.join(dir, `2-hito-${s}.jpg`)], outPath: out, quality: "high", size: `${SEG_W}x${SEG_H}`, tag: `v4/${p.plano}/segundo${s}` });
  await anota({ id: `segundo-${s}`, etapa: "plancha-segundo", prompt, refs: ["2-plan.jpg", `2-hito-${s - 1}.jpg`, `2-hito-${s}.jpg`], ajustes: { size: `${SEG_W}x${SEG_H}`, celdas: FPS }, archivo: path.basename(out), usd: r.usd, ms: r.ms });
  const cd = celdasSeg(s); await fs.mkdir(cd, { recursive: true });
  for (let i = 0; i < FPS; i++) await sharp(out).extract({ left: (i % 6) * SEG_C, top: Math.floor(i / 6) * SEG_R, width: SEG_C, height: SEG_R }).resize(1088, 1920, { kernel: "lanczos3" }).jpeg({ quality: 95 }).toFile(path.join(cd, `g${nn(i + 1)}.jpg`));
  console.log(`plancha del segundo ${s}  ${(r.ms / 1000).toFixed(0)}s  $${r.usd.toFixed(3)}  → ${FPS} guías`);
  return r.usd;
}
if (hacer("segundos")) {
  const cuales = flag("--segundo") ? [Number(flag("--segundo"))] : Array.from({ length: SEGS }, (_, i) => i + 1);
  const usd = (await Promise.all(cuales.map(hazSegundo))).reduce((a, b) => a + b, 0);
  console.log(`planchas de segundo listas · $${usd.toFixed(2)}`);
}

// ---- 4. CADENA: anterior + guía → fotograma completo ----------------------
function promptCadena(s, i) {
  return assertComun([
    "Dirección de arte para un video de mitos colombianos (pueblo muisca, altiplano cundiboyacense).",
    bloqueComun(p),
    "",
    `Genera el FOTOGRAMA ${i} de ${FPS} del segundo ${s} de esta toma de stop-motion, a resolución completa y CON TODO SU DECORADO.`,
    "La referencia 1 es el FOTOGRAMA ANTERIOR de esta misma toma y es la autoridad sobre TODO lo que no se mueve: encuadre, distancia y altura de cámara, decorado, luz, materiales, colores, identidad de los personajes y su tamaño en el cuadro. Cópialo píxel por píxel donde no haya movimiento.",
    "La referencia 2 es la GUÍA DE POSE de este fotograma: dice ÚNICAMENTE en qué punto del movimiento están los personajes y los objetos. No copies de ella el nivel de detalle, ni el color, ni el encuadre si difiere: sólo la pose y la colocación.",
    "El cambio respecto al fotograma anterior es MUY PEQUEÑO: son dos fotogramas consecutivos a 24 por segundo. Nada de saltos, nada de reencuadres, nada de elementos nuevos.",
    // Sin plató clavado, la cadena deriva: medido, ~1,8 de diferencia de
    // decorado por paso, que a 24 pasos se ve. El ancla es una referencia más
    // (no un recorte ni una composición): el decorado vuelve a su sitio.
    p.ancla_decorado ? "La referencia 3 es el DECORADO DE ESTA TOMA tal como debe verse siempre: bohíos, muro, vasijas, fogón, luna, cerros y suelo van EXACTAMENTE donde están en ella, del mismo tamaño y con la misma luz. Si el fotograma anterior se ha ido del sitio, corrígelo contra esta referencia; los personajes y objetos en movimiento siguen al fotograma anterior y a la guía." : "",
  ].filter(Boolean).join("\n"));
}
const frames = path.join(dir, "frames");
async function cadenaSegundo(s) {
  await fs.mkdir(frames, { recursive: true });
  // Arranque: el segundo 1 parte del keyframe A; los demás, del último fotograma del segundo anterior si existe, o de su hito.
  let anterior = s === 1 ? A : (await existe(path.join(frames, `f${nn((s - 1) * FPS, 3)}.jpg`)) ? path.join(frames, `f${nn((s - 1) * FPS, 3)}.jpg`) : path.join(dir, `2-hito-${s - 1}.jpg`));
  let usd = 0;
  for (let i = 1; i <= FPS; i++) {
    const idx = (s - 1) * FPS + i;
    const out = path.join(frames, `f${nn(idx, 3)}.jpg`);
    if (await existe(out)) { anterior = out; continue; }
    const guia = path.join(celdasSeg(s), `g${nn(i)}.jpg`);
    let hecho = false;
    for (let intento = 1; intento <= 2 && !hecho; intento++) {
      try {
        const refs = [anterior, guia];
        if (p.ancla_decorado) refs.push(path.resolve(base, p.ancla_decorado));
        const r = await genImage({ prompt: promptCadena(s, i), refs, outPath: out, quality: "high", size: "1088x1920", tag: `v4/${p.plano}/f${idx}` });
        await anota({ id: `f${nn(idx, 3)}`, etapa: "cadena", segundo: s, indice: i, prompt: promptCadena(s, i), refs: [path.basename(anterior), `3-segundo-${s}-celdas/g${nn(i)}.jpg`, ...(p.ancla_decorado ? [p.ancla_decorado] : [])], ajustes: { size: "1088x1920", quality: "high" }, archivo: `frames/f${nn(idx, 3)}.jpg`, usd: r.usd, ms: r.ms, intento });
        usd += r.usd; hecho = true;
      } catch (e) { if (intento === 2) throw e; await new Promise((t) => setTimeout(t, 3000)); }
    }
    anterior = out;
    if (i % 6 === 0) console.log(`  segundo ${s}: ${i}/${FPS} · $${usd.toFixed(2)}`);
  }
  return usd;
}
if (hacer("cadena")) {
  const cuales = flag("--segundo") ? [Number(flag("--segundo"))] : Array.from({ length: SEGS }, (_, i) => i + 1);
  // Los segundos corren en paralelo (cada uno arranca de su hito); dentro de cada segundo la cadena es estricta.
  const usd = (await Promise.all(cuales.map(cadenaSegundo))).reduce((a, b) => a + b, 0);
  console.log(`cadena lista · $${usd.toFixed(2)} · acumulado del plano $${gastado().toFixed(2)}`);
}

// ---- 5. MONTAJE: a uno, 24 fotogramas por segundo -------------------------
if (hacer("montar")) {
  const files = (await fs.readdir(frames)).filter((f) => /^f\d{3}\.jpg$/.test(f)).sort();
  const lista = files.map((f) => `file '${path.join(frames, f)}'\nduration ${(1 / FPS).toFixed(5)}`).join("\n");
  const listaPath = path.join(dir, ".lista.txt");
  await fs.writeFile(listaPath, `${lista}\nfile '${path.join(frames, files.at(-1))}'\n`);
  const out = path.join(dir, `${p.plano}-v4.mp4`);
  const r = spawnSync("ffmpeg", ["-y", "-v", "error", "-f", "concat", "-safe", "0", "-i", listaPath, "-vf", `scale=1080:1920:flags=lanczos,setsar=1,fps=${FPS}`, "-c:v", "libx264", "-preset", "slow", "-crf", "18", "-pix_fmt", "yuv420p", out], { encoding: "utf8" });
  if (r.status !== 0) throw new Error(r.stderr.slice(-1200));
  tabla.montaje = { fotogramas: files.length, fps: FPS, duracion_s: files.length / FPS, archivo: path.basename(out), usd_total: +gastado().toFixed(2) };
  await fs.writeFile(tablaPath, JSON.stringify(tabla, null, 1));
  console.log(`v4 ${(files.length / FPS).toFixed(2)} s · ${files.length} fotogramas a uno (${FPS} fps) · $${gastado().toFixed(2)} → ${path.relative(rootDir, out)}`);
}
