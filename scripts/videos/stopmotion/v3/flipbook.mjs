// Carril v3.1 — "hoja + redibujado" (guía Sunburst 13-09-2026) con las tres
// mejoras medidas en la prueba de 5 s:
//
//   · rejilla configurable (6x6 = 36 poses en UNA hoja: un solo sistema de
//     coordenadas; la resolución la devuelve el redibujado);
//   · PUERTA DE HOJA antes de redibujar: masa por celda, centroide continuo,
//     tamaño relativo de la última celda frente a la primera, líneas dibujadas;
//   · ANCLAJE DE ESCALA a la maestra: un redibujo extra de A sobre alfa (la
//     propia A como "celda") mide dónde y de qué tamaño está la figura en A,
//     y toda la hoja se lleva a esas coordenadas. Medir A contra un plató
//     regenerado salía inflado; medir A contra A sobre alfa no.
//
// El resto igual: bloque común obligatorio, recorte sobre alfa, plató clavado,
// composición sin recentrar, montaje por tabla de estados (exposición
// generada desde la cadencia) y registro del prompt efectivo de cada llamada.
//
//   node scripts/videos/stopmotion/v3/flipbook.mjs --spec <plano.json> --dir <planos-out> --paso hoja|puerta|redibujar|componer|montar|todo
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
const [COLS, FILAS] = p.rejilla || [4, 4];
const N = COLS * FILAS;
const A = path.join(dir, "A.jpg"), plato = path.join(dir, "plato.jpg");
const fb = path.join(dir, p.carpeta || "flipbook");
await fs.mkdir(fb, { recursive: true });
const tablaPath = path.join(fb, "tabla-estados.json");
const tabla = (await existe(tablaPath)) ? JSON.parse(await fs.readFile(tablaPath, "utf8")) : { plano: p.plano, modelo: "gpt-image-2.5-sunburst", rejilla: [COLS, FILAS], estados: [] };
const anota = async (e) => { const i = tabla.estados.findIndex((x) => x.indice === e.indice && x.etapa === e.etapa); if (i >= 0) tabla.estados[i] = { ...tabla.estados[i], ...e }; else tabla.estados.push(e); await fs.writeFile(tablaPath, JSON.stringify(tabla, null, 1)); };
const nn = (i) => String(i).padStart(2, "0");

// ---- 1. HOJA ---------------------------------------------------------------
function promptHoja() {
  return assertComun([
    "Dirección de arte para un video de mitos colombianos (pueblo muisca, altiplano cundiboyacense).",
    bloqueComun(p),
    "",
    `Genera UNA hoja de poses de exactamente ${FILAS} filas y ${COLS} columnas: ${N} celdas del mismo tamaño, en orden de izquierda a derecha y luego de arriba abajo. Cada celda es un fotograma de una animación de stop-motion y muestra ÚNICAMENTE lo que se mueve en este plano (${p.sujeto_movil}) sobre un fondo mate liso gris medio idéntico en todas las celdas, sin decorado.`,
    `La celda 1 es EXACTAMENTE el estado de la referencia 2 (fotograma A), con la MISMA colocación y el MISMO tamaño relativo dentro de la celda que tiene dentro del fotograma A. La celda ${N} es EXACTAMENTE el estado de la referencia 3 (fotograma B), con el tamaño relativo que tiene en B. El movimiento avanza de forma perceptible y en pasos IGUALES en cada celda, no retrocede nunca, no repite poses y NO se reinicia al cambiar de fila.`,
    "Misma escala, misma distancia de cámara y misma LÍNEA DE APOYO en todas las celdas: lo que toca el suelo toca el suelo a la misma altura de celda; lo que se desplaza se desplaza DENTRO de la celda como se desplazaría dentro del fotograma. No centres cada pose en su celda.",
    "Rejilla regular a sangre, SIN canales, bordes, líneas divisorias, etiquetas ni números.",
    "",
    "PAPEL DE CADA IMAGEN ADJUNTA:",
    "- Referencia 1: la MAESTRA del plano (identidad, materiales, luz).",
    `- Referencia 2: el fotograma A (estado, colocación y tamaño de la celda 1).`,
    `- Referencia 3: el fotograma B (estado y tamaño de la celda ${N}).`,
    "",
    bloque(`LA ACCIÓN, de la celda 1 a la ${N}:`, p.accion),
  ].join("\n"));
}
const hoja = path.join(fb, "hoja.jpg");
if (hacer("hoja") && !(await existe(hoja))) {
  const B = path.join(dir, "B.jpg");
  const r = await genImage({ prompt: promptHoja(), refs: [A, A, B], outPath: hoja, quality: "high", size: "2160x3840", tag: `v3/${p.plano}/hoja${COLS}x${FILAS}` });
  await anota({ etapa: "hoja", indice: 0, prompt: promptHoja(), refs: ["A.jpg (maestra)", "A.jpg", "B.jpg"], ajustes: { size: "2160x3840", quality: "high", rejilla: [COLS, FILAS] }, archivo: `${path.basename(fb)}/hoja.jpg`, usd: r.usd, ms: r.ms, aprobado: null });
  console.log(`hoja ${COLS}x${FILAS}  ${(r.ms / 1000).toFixed(0)}s  $${r.usd.toFixed(3)}`);
}
// ---- 2. RECORTE + PUERTA DE HOJA ------------------------------------------
const celdas = path.join(fb, "celdas");
await fs.mkdir(celdas, { recursive: true });
const cw = 2160 / COLS, ch = 3840 / FILAS, M = 3;
if (hacer("hoja") || hacer("puerta")) {
  for (let i = 0; i < N; i++) {
    await sharp(hoja).extract({ left: Math.round((i % COLS) * cw) + M, top: Math.round(Math.floor(i / COLS) * ch) + M, width: Math.round(cw) - 2 * M, height: Math.round(ch) - 2 * M })
      .resize(1088, 1920, { fit: "fill", kernel: "lanczos3" }).jpeg({ quality: 95 }).toFile(path.join(celdas, `c${nn(i + 1)}.jpg`));
  }
  // Puerta: se mide sobre la hoja entera reducida, celda a celda.
  const { data, info } = await sharp(hoja).resize(COLS * 90, FILAS * 160).raw().toBuffer({ resolveWithObject: true });
  const W = info.width, H = info.height, kw = W / COLS, kh = H / FILAS;
  const esFigura = (i) => { const g = (data[i] + data[i + 1] + data[i + 2]) / 3, sat = Math.max(data[i], data[i + 1], data[i + 2]) - Math.min(data[i], data[i + 1], data[i + 2]); return sat > 28 || g < 70 || g > 200; };
  // "alto" = altura del COMPONENTE CONEXO MAYOR de la celda (la figura, o la
  // lechuza con su manta), no la caja de todo lo que cambia: una olla flotando
  // aparte inflaba la caja de la última celda hasta 1,09 de la primera.
  const medidas = [];
  for (let r = 0; r < FILAS; r++) for (let c = 0; c < COLS; c++) {
    const X0 = Math.round(c * kw), Y0 = Math.round(r * kh), X1 = Math.round((c + 1) * kw), Y1 = Math.round((r + 1) * kh);
    const ww = X1 - X0, hh = Y1 - Y0; const fig = new Uint8Array(ww * hh); let n = 0, cx = 0, cy = 0, bx0 = ww, by0 = hh, bx1 = -1, by1 = -1;
    for (let y = Y0; y < Y1; y++) for (let x = X0; x < X1; x++) if (esFigura((y * W + x) * 3)) { fig[(y - Y0) * ww + (x - X0)] = 1; n++; cx += x - X0; cy += y - Y0; const lx = x - X0, ly = y - Y0; if (lx < bx0) bx0 = lx; if (lx > bx1) bx1 = lx; if (ly < by0) by0 = ly; if (ly > by1) by1 = ly; }
    const vis = new Uint8Array(ww * hh); const comps = [];
    for (let s0 = 0; s0 < ww * hh; s0++) {
      if (!fig[s0] || vis[s0]) continue;
      const pila = [s0]; vis[s0] = 1; let cnt = 0, ya = hh, yb = -1, xa = ww, xb = -1;
      while (pila.length) { const q = pila.pop(); cnt++; const qy = Math.floor(q / ww), qx = q % ww; if (qy < ya) ya = qy; if (qy > yb) yb = qy; if (qx < xa) xa = qx; if (qx > xb) xb = qx;
        for (const [ddx, ddy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const nx = qx + ddx, ny = qy + ddy; if (nx < 0 || ny < 0 || nx >= ww || ny >= hh) continue; const k = ny * ww + nx; if (fig[k] && !vis[k]) { vis[k] = 1; pila.push(k); } } }
      comps.push({ n: cnt, y0: ya, y1: yb, x0: xa, x1: xb });
    }
    // El componente que APOYA: entre los grandes (>= 40 % del mayor), el más bajo. La olla flota; la figura o la lechuza con su manta tocan el suelo.
    // Umbral ABSOLUTO (>= 3 % de la celda): la olla, dibujada grande, ganaba al criterio relativo.
    const mejor = comps.filter((c) => c.n >= 0.03 * ww * hh).sort((a, b) => b.y1 - a.y1)[0] || comps.sort((a, b) => b.n - a.n)[0] || { n: 0, y0: 0, y1: 0, x0: 0, x1: 0 };
    medidas.push({ celda: r * COLS + c + 1, masa: +((n / (kw * kh)) * 100).toFixed(1), cx: n ? +(cx / n / kw).toFixed(2) : null, cy: n ? +(cy / n / kh).toFixed(2) : null, alto: mejor.n ? +((mejor.y1 - mejor.y0 + 1) / hh).toFixed(2) : 0, caja: n ? { x0: bx0 / ww, x1: (bx1 + 1) / ww, y0: by0 / hh, y1: (by1 + 1) / hh } : null, comp: mejor.n ? { x0: mejor.x0 / ww, x1: (mejor.x1 + 1) / ww, y0: mejor.y0 / hh, y1: (mejor.y1 + 1) / hh } : null });
  }
  let lineas = 0; for (let x = 1; x < W - 1; x++) { let s = 0; for (let y = 0; y < H; y++) { const i = (y * W + x) * 3; s += Math.abs(data[i] - data[i - 3]); } if (s / H > 25) lineas++; }
  const saltos = medidas.slice(1).map((m, i) => Math.hypot(m.cx - medidas[i].cx, m.cy - medidas[i].cy));
  const relAlto = medidas[N - 1].alto / medidas[0].alto;
  const puerta = { lineas, masa_min: Math.min(...medidas.map((m) => m.masa)), masa_max: Math.max(...medidas.map((m) => m.masa)), salto_centroide_max: +Math.max(...saltos).toFixed(2), alto_ultima_vs_primera: +relAlto.toFixed(2), objetivo_alto_ultima: p.alto_final_relativo ?? null, medidas };
  const fallos = [];
  if (lineas > 0) fallos.push(`líneas de rejilla dibujadas (${lineas} columnas)`);
  if (puerta.masa_min < 3) fallos.push(`celda casi vacía (masa mínima ${puerta.masa_min}%)`);
  if (puerta.salto_centroide_max > 0.35) fallos.push(`salto de centroide ${puerta.salto_centroide_max} (reinicio de fila)`);
  if (p.alto_final_relativo && Math.abs(relAlto - p.alto_final_relativo) > 0.2) fallos.push(`la última celda mide ${relAlto.toFixed(2)} de la primera, se pedía ${p.alto_final_relativo}`);
  puerta.fallos = fallos; tabla.puerta_hoja = puerta; await fs.writeFile(tablaPath, JSON.stringify(tabla, null, 1));
  console.log(`puerta de hoja: masa ${puerta.masa_min}-${puerta.masa_max}% · salto centroide máx ${puerta.salto_centroide_max} · última/primera ${relAlto.toFixed(2)}${p.alto_final_relativo ? ` (objetivo ${p.alto_final_relativo})` : ""} · líneas ${lineas} → ${fallos.length ? "RECHAZADA: " + fallos.join("; ") : "pasa"}`);
  if (fallos.length && !args.includes("--forzar")) process.exit(2);
}
// ---- 3. REDIBUJADO a resolución completa, en paralelo ---------------------
// La referencia de IDENTIDAD del redibujo es la que corresponde al contenido de
// la celda, por tramos: con la maestra (la mujer) como identidad de una celda
// que ya es la lechuza, el modelo volvía a dibujar a la mujer.
const tramoDe = (i) => (p.identidad_por_tramo || []).find((t) => i <= t.hasta) || null;
function promptRedibujo(i, desdeA = false) {
  const tr = desdeA ? null : tramoDe(i);
  const quien = tr?.quien || "el mismo personaje, la misma manta, la misma olla gris";
  return assertComun([
    "Dirección de arte para un video de mitos colombianos (pueblo muisca, altiplano cundiboyacense).",
    bloqueComun(p),
    "",
    desdeA
      ? "RECORTA la referencia 2 (que es el propio fotograma A): devuelve ÚNICAMENTE lo que se mueve en este plano, EXACTAMENTE en la misma pose, colocación y tamaño que tiene en A, sobre fondo completamente transparente."
      : `REDIBUJA a resolución completa la pose de la referencia 2 (celda ${i} de ${N} de una hoja de poses). Conserva EXACTAMENTE su pose y su colocación dentro del cuadro —qué está donde, a qué altura, con qué inclinación y de qué tamaño— y NO adelantes ni retrases la acción.`,
    `Aplica la identidad, los materiales de papel, los colores y la LUZ de la referencia 1: ${quien}, mismo grano de papel, misma dirección de la luz cálida del fogón y la fría de la luna. Lo que NO está en la celda no se dibuja: si en la celda no hay mujer, no hay mujer.`,
    `Muestra ÚNICAMENTE lo que se mueve en este plano (${p.sujeto_movil}) RECORTADO SOBRE FONDO COMPLETAMENTE TRANSPARENTE: sin decorado, sin suelo, sin sombra proyectada sobre el suelo, sin halo ni resplandor alrededor.`,
    "",
    "PAPEL DE CADA IMAGEN ADJUNTA:",
    `- Referencia 1: ${tr?.rol || "la MAESTRA (identidad, materiales, luz, escala)"}.`,
    desdeA ? "- Referencia 2: el fotograma A completo (pose, colocación y tamaño exactos)." : "- Referencia 2: la CELDA (pose y colocación).",
  ].join("\n"));
}
const redibujos = path.join(fb, "redibujos");
await fs.mkdir(redibujos, { recursive: true });
const fA = path.join(redibujos, "fA.png");
if (hacer("redibujar")) {
  const pendientes = [];
  if (p.anclaje_escala && !(await existe(fA))) pendientes.push("A");
  for (let i = 1; i <= N; i++) if (!(await existe(path.join(redibujos, `f${nn(i)}.png`)))) pendientes.push(i);
  const lote = async (idx) => {
    const desdeA = idx === "A";
    const out = desdeA ? fA : path.join(redibujos, `f${nn(idx)}.png`);
    for (let intento = 1; intento <= 2; intento++) {
      try {
        const refIdent = desdeA ? A : (tramoDe(idx)?.ref ? path.resolve(dir, tramoDe(idx).ref) : A);
        const r = await genImage({ prompt: promptRedibujo(idx, desdeA), refs: [refIdent, desdeA ? A : path.join(celdas, `c${nn(idx)}.jpg`)], outPath: out, quality: "high", size: "1088x1920", background: "transparent", formato: "png", tag: `v3/${p.plano}/redibujo/${idx}` });
        await anota({ etapa: "redibujo", indice: idx, prompt: promptRedibujo(idx, desdeA), refs: [path.basename(refIdent) + " (identidad)", desdeA ? "A.jpg" : `celdas/c${nn(idx)}.jpg`], ajustes: { size: "1088x1920", quality: "high", background: "transparent" }, archivo: path.relative(dir, out), usd: r.usd, ms: r.ms, intento, aprobado: null });
        return r.usd;
      } catch (e) { if (intento === 2) throw e; await new Promise((s) => setTimeout(s, 3000)); }
    }
  };
  let usd = 0;
  for (let k = 0; k < pendientes.length; k += 6) usd += (await Promise.all(pendientes.slice(k, k + 6).map(lote))).reduce((a, b) => a + b, 0);
  console.log(`redibujos ${pendientes.length} · $${usd.toFixed(2)}`);
}
// ---- 4. COMPOSICIÓN en coordenadas de A + control de escala + MONTAJE -----
const frames = path.join(fb, "frames");
const compAlfa = async (png) => {
  const { data, info } = await sharp(png).ensureAlpha().resize(272, 480, { fit: "fill" }).raw().toBuffer({ resolveWithObject: true });
  const ww = info.width, hh = info.height, fig = new Uint8Array(ww * hh);
  for (let i = 0; i < ww * hh; i++) fig[i] = data[i * 4 + 3] > 200 ? 1 : 0;
  const vis = new Uint8Array(ww * hh); const comps = [];
  for (let s0 = 0; s0 < ww * hh; s0++) {
    if (!fig[s0] || vis[s0]) continue;
    const pila = [s0]; vis[s0] = 1; let cnt = 0, ya = hh, yb = -1, xa = ww, xb = -1;
    while (pila.length) { const q = pila.pop(); cnt++; const qy = Math.floor(q / ww), qx = q % ww; if (qy < ya) ya = qy; if (qy > yb) yb = qy; if (qx < xa) xa = qx; if (qx > xb) xb = qx;
      for (const [ddx, ddy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const nx = qx + ddx, ny = qy + ddy; if (nx < 0 || ny < 0 || nx >= ww || ny >= hh) continue; const k = ny * ww + nx; if (fig[k] && !vis[k]) { vis[k] = 1; pila.push(k); } } }
    comps.push({ n: cnt, y0: ya, y1: yb, x0: xa, x1: xb });
  }
  const mejor = comps.filter((c) => c.n >= 0.03 * ww * hh).sort((a, b) => b.y1 - a.y1)[0] || comps.sort((a, b) => b.n - a.n)[0] || { n: 0, y0: 0, y1: 0, x0: 0, x1: 0 };
  // En fracciones del cuadro, misma definición que `comp` de la celda: el componente que apoya.
  return mejor.n ? { x0: mejor.x0 / ww, x1: (mejor.x1 + 1) / ww, y0: mejor.y0 / hh, y1: (mejor.y1 + 1) / hh, h: (mejor.y1 - mejor.y0 + 1) / hh, cx: (mejor.x0 + mejor.x1 + 1) / 2 / ww } : null;
};
const caja = async (png) => {
  const { data, info } = await sharp(png).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let x0 = info.width, y0 = info.height, x1 = -1, y1 = -1;
  for (let y = 0; y < info.height; y++) for (let x = 0; x < info.width; x++) if (data[(y * info.width + x) * 4 + 3] > 200) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  return { x0, y0, x1, y1, w: x1 - x0 + 1, h: y1 - y0 + 1, cx: (x0 + x1) / 2 };
};
if (hacer("componer")) {
  await fs.rm(frames, { recursive: true, force: true }); await fs.mkdir(frames, { recursive: true });
  const { width: W, height: H } = await sharp(plato).metadata();
  // Transformación única hoja → A, medida con dos recortes sobre alfa: la celda 1 redibujada y A recortada.
  let escala = 1, dx = 0, dy = 0;
  if (p.anclaje_escala && (await existe(fA))) {
    const cc1 = (tabla.puerta_hoja?.medidas || [])[0]?.comp;
    const ca = await compAlfa(fA);
    const cA = { h: ca.h * H, cx: ca.cx * W, y1: ca.y1 * H - 1 };
    const c1 = cc1 ? { h: (cc1.y1 - cc1.y0) * H, cx: ((cc1.x0 + cc1.x1) / 2) * W, y1: cc1.y1 * H - 1 } : await caja(path.join(redibujos, "f01.png"));
    escala = cA.h / c1.h; dx = cA.cx - c1.cx * escala; dy = cA.y1 - c1.y1 * escala;
    tabla.anclaje_escala = { escala: +escala.toFixed(3), dx: Math.round(dx), dy: Math.round(dy), figura_en_A: cA, figura_en_celda1: c1 };
    console.log(`anclaje a A: escala ${escala.toFixed(3)} · dx ${Math.round(dx)} · dy ${Math.round(dy)}`);
  }
  const endurecer = async (png) => { const { data, info } = await sharp(png).ensureAlpha().raw().toBuffer({ resolveWithObject: true }); for (let i = 3; i < data.length; i += 4) { const a = data[i]; data[i] = a <= 110 ? 0 : a >= 235 ? 255 : Math.round(((a - 110) / 125) * 255); } return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer(); };
  const aCoordenadasDeA = async (png) => {
    if (escala === 1 && !dx && !dy) return png;
    const ew = Math.round(W * escala), eh = Math.round(H * escala);
    const chica = await sharp(png).resize(ew, eh, { kernel: "lanczos3" }).png().toBuffer();
    const left = Math.round(dx), top = Math.round(dy);
    const sx = Math.max(0, -left), sy = Math.max(0, -top), vw = Math.min(ew - sx, W - Math.max(0, left)), vh = Math.min(eh - sy, H - Math.max(0, top));
    const visible = await sharp(chica).extract({ left: sx, top: sy, width: vw, height: vh }).png().toBuffer();
    return sharp({ create: { width: W, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } }).composite([{ input: visible, left: Math.max(0, left), top: Math.max(0, top) }]).png().toBuffer();
  };
  // LA HOJA MANDA EN LA GEOMETRÍA, EL REDIBUJO PONE EL DETALLE. Medido: con
  // celdas de 360x640 el redibujado llena el cuadro y la lechuza sale tan alta
  // como la mujer (33 de 36 fuera de escala). Cada redibujo se reescala y se
  // coloca en la caja exacta que su celda promete (misma definición a ambos
  // lados: todo lo no-gris de la celda ↔ todo el alfa del redibujo), y luego
  // la hoja entera se lleva a las coordenadas de A con el anclaje.
  const cajasCelda = (tabla.puerta_hoja?.medidas || []).map((m) => m.comp);
  const aCajaDeCelda = async (png, i) => {
    const cc = cajasCelda[i - 1]; if (!cc) return png;
    const cr = await compAlfa(png); if (!cr || cr.h * H < 2) return png;
    const objH = (cc.y1 - cc.y0) * H, objCx = ((cc.x0 + cc.x1) / 2) * W, objBottom = cc.y1 * H;
    const s = objH / (cr.h * H);
    const ew = Math.round(W * s), eh = Math.round(H * s);
    const chica = await sharp(png).resize(ew, eh, { kernel: "lanczos3" }).png().toBuffer();
    const left = Math.round(objCx - cr.cx * W * s), top = Math.round(objBottom - cr.y1 * H * s);
    const sx = Math.max(0, -left), sy = Math.max(0, -top), vw = Math.min(ew - sx, W - Math.max(0, left)), vh = Math.min(eh - sy, H - Math.max(0, top));
    if (vw <= 0 || vh <= 0) return png;
    const visible = await sharp(chica).extract({ left: sx, top: sy, width: vw, height: vh }).png().toBuffer();
    return sharp({ create: { width: W, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } }).composite([{ input: visible, left: Math.max(0, left), top: Math.max(0, top) }]).png().toBuffer();
  };
  const alturas = [];
  for (let i = 1; i <= N; i++) {
    const src = path.join(redibujos, `f${nn(i)}.png`);
    if (!(await existe(src))) continue;
    const enCelda = await aCajaDeCelda(await endurecer(src), i);
    const c = await caja(enCelda); alturas.push({ i, h: c.h });
    await sharp(plato).composite([{ input: await aCoordenadasDeA(enCelda), left: 0, top: 0 }]).jpeg({ quality: 95 }).toFile(path.join(frames, `f${nn(i)}.jpg`));
  }
  const esperado = tabla.puerta_hoja?.medidas || [];
  const sospechosos = alturas.filter(({ i, h }) => { const m = esperado[i - 1]; if (!m || !m.alto) return false; const prometido = m.alto * 1920; return Math.abs(h / prometido - 1) > 0.18; }).map((x) => `f${nn(x.i)}`);
  tabla.control_escala = { alturas, sospechosos };
  await fs.writeFile(tablaPath, JSON.stringify(tabla, null, 1));
  console.log(`compuestos ${alturas.length} sobre el plató clavado${sospechosos.length ? ` · redibujos que cambiaron de escala frente a su celda: ${sospechosos.join(", ")}` : " · escala coherente con la hoja"}`);
}
if (hacer("montar")) {
  // Exposición desde la cadencia: cada dibujo sostenido 24/cadencia fotogramas; el último se sostiene hasta la duración.
  const cad = p.cadencia || 8, hold = Math.max(1, Math.round(24 / cad)), total = Math.round((p.duracion || 5) * 24);
  const disponibles = (await fs.readdir(frames)).filter((f) => /^f\d{2}\.jpg$/.test(f)).sort().map((f) => f.replace(".jpg", ""));
  const exp = p.exposicion || disponibles.map((f, i) => [f, i === disponibles.length - 1 ? Math.max(hold, total - hold * (disponibles.length - 1)) : hold]);
  const lista = exp.map(([img, fr]) => `file '${path.join(frames, img + ".jpg")}'\nduration ${(fr / 24).toFixed(5)}`).join("\n");
  const listaPath = path.join(fb, ".exposicion.txt");
  await fs.writeFile(listaPath, `${lista}\nfile '${path.join(frames, exp.at(-1)[0] + ".jpg")}'\n`);
  const dur = exp.reduce((a, [, f]) => a + f, 0) / 24;
  const out = path.join(fb, `${p.plano}-flipbook.mp4`);
  const r = spawnSync("ffmpeg", ["-y", "-v", "error", "-f", "concat", "-safe", "0", "-i", listaPath, "-vf", "scale=1080:1920:flags=lanczos,setsar=1,fps=24", "-c:v", "libx264", "-preset", "slow", "-crf", "18", "-pix_fmt", "yuv420p", "-t", String(dur), out], { encoding: "utf8" });
  if (r.status !== 0) throw new Error(r.stderr.slice(-1200));
  tabla.montaje = { cadencia: cad, hold, exposicion: exp, fotogramas: exp.reduce((a, [, f]) => a + f, 0), duracion_s: dur, archivo: path.relative(dir, out) };
  await fs.writeFile(tablaPath, JSON.stringify(tabla, null, 1));
  console.log(`flipbook ${dur.toFixed(2)} s · ${exp.length} dibujos a ${cad}/s (hold ${hold}) → ${path.relative(rootDir, out)}`);
}
