// Carril v3 — "hoja + redibujado", el método del flipbook auditado en la guía
// Sunburst (13-09-2026), adaptado a la maqueta de papel y al plató clavado.
//
//   1. HOJA de 16 poses (4x4): la acción avanza de forma perceptible de la celda
//      1 a la 16 y termina en la última; misma escala, misma colocación, misma
//      línea de apoyo. Es planificación: la resolución de la hoja no es la de
//      los fotogramas.
//   2. RECORTE de la hoja con margen, tras inspeccionarla (la cuadrícula pedida
//      no se asume cumplida).
//   3. REDIBUJADO de cada celda a resolución completa, en paralelo, con dos
//      referencias de papel distinto: la MAESTRA manda en identidad, materiales
//      y luz; la CELDA manda en pose y colocación. No se adelanta la acción.
//      Sale recortado sobre alfa para pegarlo sobre el plató clavado.
//   4. COMPOSICIÓN sin recentrar (coordenadas comunes) y MONTAJE por tabla de
//      estados: exposición explícita por imagen.
//
// Cada solicitud queda en la tabla de estados con su prompt efectivo, sus
// referencias, sus ajustes, el archivo y su aprobación.
//
//   node scripts/videos/stopmotion/v3/flipbook.mjs --spec <plano.json> --dir <planos-out> --paso hoja|redibujar|componer|montar|todo
import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import sharp from "sharp";
import { genImage, rootDir } from "../img.mjs";
import { cargarPlano, bloqueComun, assertComun, bloque } from "../v2/comun.mjs";

const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const p = await cargarPlano(path.resolve(rootDir, flag("--spec")));
const dir = path.resolve(rootDir, flag("--dir"), p.plano);
const paso = flag("--paso", "todo");
const hacer = (x) => paso === "todo" || paso === x;
const existe = (f) => fs.access(f).then(() => true).catch(() => false);
const COLS = 4, FILAS = 4, N = 16;
const A = path.join(dir, "A.jpg"), B = path.join(dir, "B.jpg"), plato = path.join(dir, "plato.jpg");
const fb = path.join(dir, "flipbook");
await fs.mkdir(fb, { recursive: true });
const tablaPath = path.join(fb, "tabla-estados.json");
const tabla = (await existe(tablaPath)) ? JSON.parse(await fs.readFile(tablaPath, "utf8")) : { plano: p.plano, modelo: "gpt-image-2.5-sunburst", estados: [] };
const anota = async (e) => { const i = tabla.estados.findIndex((x) => x.indice === e.indice && x.etapa === e.etapa); if (i >= 0) tabla.estados[i] = { ...tabla.estados[i], ...e }; else tabla.estados.push(e); await fs.writeFile(tablaPath, JSON.stringify(tabla, null, 1)); };

// ---- 1. HOJA ---------------------------------------------------------------
function promptHoja() {
  return assertComun([
    "Dirección de arte para un video de mitos colombianos (pueblo muisca, altiplano cundiboyacense).",
    bloqueComun(p),
    "",
    `Genera UNA hoja de poses de exactamente ${FILAS} filas y ${COLS} columnas: ${N} celdas del mismo tamaño, en orden de izquierda a derecha y luego de arriba abajo. Cada celda es un fotograma de una animación de stop-motion y muestra ÚNICAMENTE lo que se mueve en este plano (${p.sujeto_movil}) sobre un fondo mate liso gris medio idéntico en todas las celdas, sin decorado.`,
    `La celda 1 es EXACTAMENTE el estado de la referencia 2 (fotograma A). La celda ${N} es EXACTAMENTE el estado de la referencia 3 (fotograma B). El movimiento avanza de forma perceptible en cada celda, no retrocede nunca, no repite poses y NO se reinicia al cambiar de fila: la celda 5 continúa la 4, la 9 continúa la 8.`,
    "Misma escala, misma distancia de cámara y misma LÍNEA DE APOYO en todas las celdas: lo que toca el suelo toca el suelo a la misma altura de celda; lo que se desplaza se desplaza DENTRO de la celda como se desplazaría dentro del fotograma. No centres cada pose en su celda.",
    "Rejilla regular a sangre, SIN canales, bordes, líneas divisorias, etiquetas ni números.",
    "",
    "PAPEL DE CADA IMAGEN ADJUNTA:",
    "- Referencia 1: la MAESTRA del plano (identidad, materiales, luz).",
    "- Referencia 2: el fotograma A (estado de la celda 1).",
    "- Referencia 3: el fotograma B (estado de la celda 16).",
    "",
    bloque("LA ACCIÓN, de la celda 1 a la 16:", p.accion),
  ].join("\n"));
}
const hoja = path.join(fb, "hoja.jpg");
if (hacer("hoja") && !(await existe(hoja))) {
  const r = await genImage({ prompt: promptHoja(), refs: [A, A, B], outPath: hoja, quality: "high", size: "2160x3840", tag: `v3/${p.plano}/hoja` });
  await anota({ etapa: "hoja", indice: 0, prompt: promptHoja(), refs: ["A.jpg (maestra)", "A.jpg", "B.jpg"], ajustes: { size: "2160x3840", quality: "high" }, archivo: "flipbook/hoja.jpg", usd: r.usd, ms: r.ms, aprobado: null });
  console.log(`hoja  ${(r.ms / 1000).toFixed(0)}s  $${r.usd.toFixed(3)}`);
}
// ---- 2. RECORTE (con margen; la cuadrícula se inspecciona aparte) ----------
const celdas = path.join(fb, "celdas");
await fs.mkdir(celdas, { recursive: true });
if (hacer("hoja") || hacer("redibujar")) {
  const cw = 2160 / COLS, ch = 3840 / FILAS, M = 5;
  for (let i = 0; i < N; i++) {
    await sharp(hoja).extract({ left: Math.round((i % COLS) * cw) + M, top: Math.round(Math.floor(i / COLS) * ch) + M, width: Math.round(cw) - 2 * M, height: Math.round(ch) - 2 * M })
      .resize(1088, 1920, { fit: "fill", kernel: "lanczos3" }).jpeg({ quality: 95 }).toFile(path.join(celdas, `c${String(i + 1).padStart(2, "0")}.jpg`));
  }
}
// ---- 3. REDIBUJADO a resolución completa, en paralelo ---------------------
function promptRedibujo(i) {
  return assertComun([
    "Dirección de arte para un video de mitos colombianos (pueblo muisca, altiplano cundiboyacense).",
    bloqueComun(p),
    "",
    `REDIBUJA a resolución completa la pose de la referencia 2 (celda ${i} de ${N} de una hoja de poses). Conserva EXACTAMENTE su pose y su colocación dentro del cuadro —qué está donde, a qué altura, con qué inclinación— y NO adelantes ni retrases la acción.`,
    "Aplica la identidad, los materiales de papel, los colores y la LUZ de la referencia 1 (la maestra del plano): mismo personaje, misma manta, misma olla gris, mismo grano de papel, misma dirección de la luz cálida del fogón y la fría de la luna.",
    `Muestra ÚNICAMENTE lo que se mueve en este plano (${p.sujeto_movil}) RECORTADO SOBRE FONDO COMPLETAMENTE TRANSPARENTE: sin decorado, sin suelo, sin sombra proyectada sobre el suelo, sin halo ni resplandor alrededor. La escala es la de la maestra: lo que en la maestra mide X, aquí mide X.`,
    "",
    "PAPEL DE CADA IMAGEN ADJUNTA:",
    "- Referencia 1: la MAESTRA (identidad, materiales, luz, escala).",
    "- Referencia 2: la CELDA (pose y colocación).",
  ].join("\n"));
}
const redibujos = path.join(fb, "redibujos");
await fs.mkdir(redibujos, { recursive: true });
if (hacer("redibujar")) {
  const pendientes = [];
  for (let i = p.coordenadas === "hoja" ? 1 : 2; i <= N; i++) if (!(await existe(path.join(redibujos, `f${String(i).padStart(2, "0")}.png`)))) pendientes.push(i);
  const lote = async (idx) => {
    const out = path.join(redibujos, `f${String(idx).padStart(2, "0")}.png`);
    for (let intento = 1; intento <= 2; intento++) {
      try {
        const r = await genImage({ prompt: promptRedibujo(idx), refs: [A, path.join(celdas, `c${String(idx).padStart(2, "0")}.jpg`)], outPath: out, quality: "high", size: "1088x1920", background: "transparent", formato: "png", tag: `v3/${p.plano}/redibujo/${idx}` });
        await anota({ etapa: "redibujo", indice: idx, prompt: promptRedibujo(idx), refs: ["A.jpg (maestra)", `celdas/c${String(idx).padStart(2, "0")}.jpg`], ajustes: { size: "1088x1920", quality: "high", background: "transparent" }, archivo: `flipbook/redibujos/f${String(idx).padStart(2, "0")}.png`, usd: r.usd, ms: r.ms, intento, aprobado: null });
        return r.usd;
      } catch (e) { if (intento === 2) throw e; await new Promise((s) => setTimeout(s, 3000)); }
    }
  };
  let usd = 0;
  for (let k = 0; k < pendientes.length; k += 6) usd += (await Promise.all(pendientes.slice(k, k + 6).map(lote))).reduce((a, b) => a + b, 0);
  console.log(`redibujos ${pendientes.length} · $${usd.toFixed(2)}`);
}
// ---- 4. COMPOSICIÓN sin recentrar + MONTAJE por tabla de estados ----------
const frames = path.join(fb, "frames");
if (hacer("componer")) {
  await fs.rm(frames, { recursive: true, force: true }); await fs.mkdir(frames, { recursive: true });
  const hayF01 = await existe(path.join(redibujos, "f01.png"));
  if (!hayF01) await fs.copyFile(A, path.join(frames, "f01.jpg"));
  // SISTEMA DE COORDENADAS COMÚN (la guía: decidir el punto de apoyo antes del
  // atlas, no recentrar cada silueta). El redibujado conserva la colocación de
  // la celda, y la celda va a la escala de la HOJA, no de la maestra: medido,
  // la figura salía 1,5x y la lechuza final enorme. Se mide UNA vez la figura
  // en la celda 1 (sobre gris) y en la maestra (contra el plató), y la misma
  // escala y traslación se aplican a los 15 redibujos: lo que en la hoja
  // encoge, encoge; lo que se desplaza, se desplaza.
  const cajaGris = async (jpg) => {
    const { data, info } = await sharp(jpg).raw().toBuffer({ resolveWithObject: true });
    let x0 = info.width, y0 = info.height, x1 = -1, y1 = -1;
    for (let y = 0; y < info.height; y++) for (let x = 0; x < info.width; x++) { const i = (y * info.width + x) * 3; const g = (data[i] + data[i + 1] + data[i + 2]) / 3, sat = Math.max(data[i], data[i + 1], data[i + 2]) - Math.min(data[i], data[i + 1], data[i + 2]); if (sat > 28 || g < 70 || g > 200) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; } }
    return { x0, y0, x1, y1 };
  };
  const cajaContraPlato = async (jpg, platoJpg) => {
    const a = await sharp(jpg).raw().toBuffer(), b = await sharp(platoJpg).raw().toBuffer(); const { width: W, height: H } = await sharp(jpg).metadata();
    let x0 = W, y0 = H, x1 = -1, y1 = -1;
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { const i = (y * W + x) * 3; const d = Math.max(Math.abs(a[i] - b[i]), Math.abs(a[i + 1] - b[i + 1]), Math.abs(a[i + 2] - b[i + 2])); if (d > 60) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; } }
    return { x0, y0, x1, y1 };
  };
  const cC = await cajaGris(path.join(celdas, "c01.jpg"));
  const cA = await cajaContraPlato(A, plato);
  // Medido: la caja de A contra un plató regenerado sale inflada (el plató
  // cambia también esteras y fuego), y la escala global no corrige un tamaño
  // relativo mal dibujado en la hoja. Con `coordenadas: "hoja"` el clip se
  // vuelve autoconsistente: todos los fotogramas, incluida la celda 1, viven
  // en el sistema de la hoja (identidad) y A/B no entran en la secuencia.
  const escala = p.coordenadas === "hoja" ? 1 : (cA.y1 - cA.y0) / (cC.y1 - cC.y0);
  // Punto de apoyo: centro de la base de la figura. Se mapea el de la celda 1 al de la maestra.
  const apoyoC = { x: (cC.x0 + cC.x1) / 2, y: cC.y1 }, apoyoA = p.coordenadas === "hoja" ? { ...{ x: (cC.x0 + cC.x1) / 2, y: cC.y1 } } : { x: (cA.x0 + cA.x1) / 2, y: cA.y1 };
  console.log(`coordenadas comunes: escala ${escala.toFixed(3)} · apoyo celda (${apoyoC.x | 0},${apoyoC.y | 0}) → maestra (${apoyoA.x | 0},${apoyoA.y | 0})`);
  const { width: W, height: H } = await sharp(plato).metadata();
  const aCoordenadasComunes = async (png) => {
    const ew = Math.round(W * escala), eh = Math.round(H * escala);
    const chica = await sharp(png).resize(ew, eh, { kernel: "lanczos3" }).png().toBuffer();
    // La celda escalada se coloca de modo que su punto de apoyo caiga sobre el de la maestra.
    const left = Math.round(apoyoA.x - apoyoC.x * escala), top = Math.round(apoyoA.y - apoyoC.y * escala);
    const lienzo = sharp({ create: { width: W, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } });
    // Recorte por si la celda escalada sale del cuadro.
    const sx = Math.max(0, -left), sy = Math.max(0, -top), vw = Math.min(ew - sx, W - Math.max(0, left)), vh = Math.min(eh - sy, H - Math.max(0, top));
    const visible = await sharp(chica).extract({ left: sx, top: sy, width: vw, height: vh }).png().toBuffer();
    return lienzo.composite([{ input: visible, left: Math.max(0, left), top: Math.max(0, top) }]).png().toBuffer();
  };
  const endurecer = async (png) => { const { data, info } = await sharp(png).ensureAlpha().raw().toBuffer({ resolveWithObject: true }); for (let i = 3; i < data.length; i += 4) { const a = data[i]; data[i] = a <= 110 ? 0 : a >= 235 ? 255 : Math.round(((a - 110) / 125) * 255); } return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer(); };
  for (let i = hayF01 ? 1 : 2; i <= N; i++) {
    const src = path.join(redibujos, `f${String(i).padStart(2, "0")}.png`);
    if (!(await existe(src))) continue;
    await sharp(plato).composite([{ input: await aCoordenadasComunes(await endurecer(src)), left: 0, top: 0 }]).jpeg({ quality: 95 }).toFile(path.join(frames, `f${String(i).padStart(2, "0")}.jpg`));
  }
  await fs.copyFile(B, path.join(frames, "fB.jpg"));
  console.log("compuestos sobre el plató clavado (sin recentrar)");
}
if (hacer("montar")) {
  const exp = p.exposicion; // [["f01",6],["f02",3],...,["fB",69]] en fotogramas a 24 fps
  const lista = exp.map(([img, fr]) => `file '${path.join(frames, img + ".jpg")}'\nduration ${(fr / 24).toFixed(5)}`).join("\n");
  const listaPath = path.join(fb, ".exposicion.txt");
  await fs.writeFile(listaPath, `${lista}\nfile '${path.join(frames, exp.at(-1)[0] + ".jpg")}'\n`);
  const total = exp.reduce((a, [, f]) => a + f, 0) / 24;
  const out = path.join(fb, `${p.plano}-flipbook.mp4`);
  const r = spawnSync("ffmpeg", ["-y", "-v", "error", "-f", "concat", "-safe", "0", "-i", listaPath, "-vf", "scale=1080:1920:flags=lanczos,setsar=1,fps=24", "-c:v", "libx264", "-preset", "slow", "-crf", "18", "-pix_fmt", "yuv420p", "-t", String(total), out], { encoding: "utf8" });
  if (r.status !== 0) throw new Error(r.stderr.slice(-1200));
  tabla.montaje = { exposicion: exp, fotogramas: exp.reduce((a, [, f]) => a + f, 0), duracion_s: total, archivo: path.relative(dir, out) };
  await fs.writeFile(tablaPath, JSON.stringify(tabla, null, 1));
  console.log(`flipbook ${total.toFixed(2)} s · ${exp.length} estados → ${path.relative(rootDir, out)}`);
}
