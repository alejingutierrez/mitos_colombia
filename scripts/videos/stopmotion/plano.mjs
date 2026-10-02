// Orquestador de un plano de 5 s, de la maestra al montón de fotogramas.
//
// Tres vías, porque un guion no es sólo primeros planos de un personaje:
//
//   figura  el sujeto se recorta sobre alfa y se pega en un plató fijo. Da
//           deriva 0,00 y permite desplazarlo por el cuadro.
//   cuadro  no hay sujeto que aislar (objetos, manos, multitudes): cada celda
//           es el fotograma entero y lo que no se mueve se congela después.
//   quieto  el plano no tiene movimiento propio: una sola imagen y la vida la
//           pone la cámara en el montaje. $0,06 en vez de $1,6.
//
//   node scripts/videos/stopmotion/plano.mjs --spec <plano.json> [--paso todo|maestra|plancha|hojas|fondo|componer]
import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import sharp from "sharp";
import { genImage, rootDir } from "./img.mjs";
import { promptInicio, promptPlanchaArco, promptHojaRecorte, promptHojaCuadro } from "./prompts.mjs";

const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const specPath = path.resolve(rootDir, flag("--spec"));
const spec = JSON.parse(await fs.readFile(specPath, "utf8"));
const comun = JSON.parse(await fs.readFile(path.join(path.dirname(specPath), "_comun.json"), "utf8"));
const plano = { ...comun, ...spec, estilo: spec.estilo || comun.estilo, invariantes: [...(comun.invariantes || []), ...(spec.invariantes || [])] };
const dir = path.resolve(rootDir, plano.dir || path.join("content/videos/muiscas/videos/huitaca/planos-out", plano.plano));
const paso = flag("--paso", "todo");
const hacer = (p) => paso === "todo" || paso === p;
const existe = (p) => fs.access(p).then(() => true).catch(() => false);
const SIZE_HOJA = "2160x3840";
await fs.mkdir(dir, { recursive: true });

const corre = (script, extra) => {
  const r = spawnSync("node", [path.join(rootDir, "scripts/videos/stopmotion", script), ...extra], { encoding: "utf8" });
  if (r.status !== 0) throw new Error(`${script}: ${r.stderr?.slice(-800)}`);
  return r.stdout.trim();
};

let usd = 0;
const gasta = (r) => { usd += r.usd; return r; };

// 1. MAESTRA: el fotograma que manda sobre todo lo demás.
const maestra = path.join(dir, "maestra.jpg");
if (hacer("maestra") && !(await existe(maestra))) {
  gasta(await genImage({
    prompt: plano.track === "figura" ? promptMaestraFigura(plano) : promptMaestraCuadro(plano),
    refs: (plano.refs || []).map((r) => path.resolve(rootDir, r)),
    outPath: maestra, quality: "high", size: "1088x1920", tag: `${plano.plano}/maestra`,
  }));
  console.log(`  maestra ✓`);
}
function promptMaestraFigura(p) {
  return [
    "Dirección de arte para un video de mitos colombianos (pueblo muisca, altiplano cundiboyacense).",
    `TÉCNICA:\n${p.estilo.map((l) => `- ${l}`).join("\n")}`,
    `DECORADO (fotograma vertical 9:16, cámara fija):\n${(p.decorado || []).map((l) => `- ${l}`).join("\n")}`,
    `EN EL CUADRO, UNA SOLA FIGURA:\n${(p.figura || []).map((l) => `- ${l}`).join("\n")}`,
    `POSE DE ESTE FOTOGRAMA: ${(p.estados_hoja || [])[0] || (p.arco || [])[0] || "quieta"}.`,
    "La figura queda entera dentro del encuadre, integrada al decorado y a su luz. El 15% inferior del encuadre queda libre de elementos narrativos clave y el 20% superior sin elementos críticos.",
  ].join("\n\n");
}
function promptMaestraCuadro(p) {
  return [
    "Dirección de arte para un video de mitos colombianos (pueblo muisca, altiplano cundiboyacense).",
    `TÉCNICA:\n${p.estilo.map((l) => `- ${l}`).join("\n")}`,
    `ESCENA (fotograma vertical 9:16, cámara fija):\n${(p.decorado || []).map((l) => `- ${l}`).join("\n")}`,
    p.refs?.length ? "Las imágenes de referencia fijan la identidad y los materiales de lo que aparece; no copies su fondo ni su encuadre." : "",
    "El 15% inferior del encuadre queda libre de elementos narrativos clave y el 20% superior sin elementos críticos.",
    `NUNCA:\n${(p.invariantes || []).map((l) => `- ${l}`).join("\n")}`,
  ].filter(Boolean).join("\n\n");
}

if (plano.track === "quieto") {
  console.log(`[${plano.plano}] quieto · $${usd.toFixed(3)} · la vida la pone la cámara en el montaje`);
  process.exit(0);
}

// 2. PLANCHA: el reparto del movimiento, de un golpe.
const planchaDir = path.join(dir, "plancha");
const planchaPath = path.join(planchaDir, "plancha.png");
const COLS = 9, FILAS = 4, N = 36;
const usaPlancha = plano.track === "figura" && !plano.estados_hoja;
if (hacer("plancha") && !(await existe(planchaPath)) && usaPlancha) {
  await fs.mkdir(planchaDir, { recursive: true });
  gasta(await genImage({
    prompt: promptPlanchaArco(plano, { filas: FILAS, cols: COLS }),
    refs: [maestra], outPath: planchaPath, quality: "high", size: "2160x1712", tag: `${plano.plano}/plancha`,
  }));
  console.log(`  plancha ✓`);
}

// 3. HOJAS DE PRODUCCIÓN: 9 de 2x2, celdas de 1080x1920 nativas, en paralelo.
const recortes = path.join(dir, "recortes");
await fs.mkdir(recortes, { recursive: true });
if (hacer("hojas")) {
  const tandas = [];
  // Un gesto narrativo necesita 36 poses distintas; un movimiento CÍCLICO
  // (manos en un tambor, gente bailando, chicha pasando) necesita un ciclo
  // corto que se repite, como en la animación de siempre: una sola hoja de 4
  // estados en vaivén sale a $0,12 en vez de $1,11 y además no tiene costuras.
  const nHojas = plano.hojas ?? (plano.track === "figura" ? 9 : 1);
  for (let t = 0; t < nHojas; t++) {
    const desde = t * 4;
    if (await existe(path.join(recortes, `f${String(desde + 3).padStart(4, "0")}.${plano.track === "figura" ? "png" : "jpg"}`))) continue;
    tandas.push({ t, desde });
  }
  await Promise.all(tandas.map(async ({ t, desde }) => {
    let plan = null;
    if (usaPlancha) {
      plan = path.join(planchaDir, `tira-${t}.png`);
      if (!(await existe(plan))) corre("tira.mjs", ["--plancha", planchaPath, "--cols", String(COLS), "--filas", String(FILAS), "--desde", String(desde), "--hasta", String(desde + 4), "--out", plan]);
    }
    const celdas = Array.from({ length: 4 }, (_, i) =>
      usaPlancha
        ? `exactamente la pose de la miniatura ${i + 1} de la tira adjunta, en su punto justo del movimiento.`
        : plano.track === "figura"
          ? `La figura ${plano.estados_hoja[(desde + i) % plano.estados_hoja.length]}.`
          : (plano.estados || [])[desde + i] || plano.estados[(desde + i) % plano.estados.length]
    );
    const r = await genImage({
      prompt: plano.track === "figura"
        ? promptHojaRecorte(plano, { filas: 2, cols: 2, celdas, conPlan: true })
        : promptHojaCuadro(plano, { filas: 2, cols: 2, celdas }),
      refs: plan ? [maestra, plan] : [maestra],
      outPath: path.join(recortes, `hoja-${t}.${plano.track === "figura" ? "png" : "jpg"}`),
      quality: "high", size: SIZE_HOJA,
      ...(plano.track === "figura" ? { background: "transparent", formato: "png" } : {}),
      tag: `${plano.plano}/hoja${t}`,
    });
    gasta(r);
    const [W, H] = SIZE_HOJA.split("x").map(Number);
    const cw = Math.floor(W / 2), ch = Math.floor(H / 2);
    for (let i = 0; i < 4; i++) {
      const c = sharp(path.join(recortes, `hoja-${t}.${plano.track === "figura" ? "png" : "jpg"}`))
        .extract({ left: (i % 2) * cw, top: Math.floor(i / 2) * ch, width: cw, height: ch })
        .resize(1088, 1920, { fit: "fill", kernel: "lanczos3" });
      const nombre = path.join(recortes, `f${String(desde + i).padStart(4, "0")}`);
      await (plano.track === "figura" ? c.png().toFile(`${nombre}.png`) : c.jpeg({ quality: 95 }).toFile(`${nombre}.jpg`));
    }
  }));
  console.log(`  ${tandas.length} hojas ✓`);
}

// 4. Y a partir de aquí cada vía termina distinto.
const frames = path.join(dir, "frames");
if (plano.track === "cuadro") {
  const alineado = path.join(dir, "alineado");
  corre("alinear.mjs", ["--dir", recortes, "--out", alineado, "--margen", "0.05", "--lado", String(plano.lado_registro || 0.3), "--alto", "0.22"]);
  console.log("  " + corre("estabilizar.mjs", ["--dir", alineado, "--out", frames, "--umbral", String(plano.umbral || 26), "--arriba", String(plano.arriba || 60), "--engorde", "10", "--vida", String(plano.vida ?? 0.08)]).split("\n").find((l) => l.includes("zona")));
} else {
  // Plató vacío + plancha de fondo, y la figura encima.
  const plato = path.join(dir, "plato-vacio.jpg");
  if (!(await existe(plato))) {
    gasta(await genImage({
      prompt: [
        "La imagen de referencia es un fotograma de una maqueta de papel. Devuelve EXACTAMENTE LA MISMA IMAGEN con un solo cambio: BORRAR LA FIGURA.",
        "Reconstruye detrás de ella lo que tapaba, de forma coherente. TODO LO DEMÁS QUEDA EN SU SITIO EXACTO, sin recomponer ni reencuadrar, sin acercar ni alejar la cámara: mismo encuadre, misma luz, mismos materiales, mismos objetos en el mismo punto y al mismo tamaño.",
        "Sin personas, sin siluetas, sin sombra de persona, sin texto.",
      ].join("\n"),
      refs: [maestra], outPath: plato, quality: "high", size: "1088x1920", tag: `${plano.plano}/plato`,
    }));
  }
  let fondoDir = plato;
  if (plano.fondo?.estados?.length) {
    fondoDir = path.join(dir, "fondo");
    if (!(await existe(path.join(fondoDir, "f0003.jpg")))) {
      const antes = usd;
      corre("fondo.mjs", ["--plano", specPath, "--plato", plato, "--out", fondoDir]);
      usd += 0.117; // lo que cuesta la hoja de fondo; el resto del paso es local
      void antes;
    }
  }
  const e = plano.encaje || {};
  const m = plano.montaje || {};
  corre("componer.mjs", ["--plato", fondoDir, "--recortes", recortes, "--out", frames,
    ...(m.ciclo ? ["--ciclo", "--frames", String(m.frames || 30)] : []),
    "--alto", String(e.alto ?? 0.6), "--base", String(e.base ?? 0.9),
    "--x", String(e.x ?? 0.45), "--x-fin", String(e.x_fin ?? e.x ?? 0.45), "--sombra", String(e.sombra ?? 0.35)]);
}
console.log(`[${plano.plano}] ${plano.track} · $${usd.toFixed(2)} · ${frames}`);
