// Escalera de bisección: rellena un plano de 5 s entre sus dos anclas.
//
// Nivel a nivel: cada fotograma nuevo se genera SIEMPRE entre sus dos vecinos
// ya existentes, así el error no se acumula como en una cadena. Los fotogramas
// de un mismo nivel son independientes entre sí y salen en paralelo.
//
//   node scripts/videos/stopmotion/escalera.mjs --plano p.json --dir <carpeta> --niveles 5 [--concurrencia 6]
import fs from "node:fs/promises";
import path from "node:path";
import { genImage, rootDir } from "./img.mjs";
import { promptMedio } from "./prompts.mjs";

const args = process.argv.slice(2);
const flag = (n, d = null) => (args.indexOf(n) === -1 ? d : args[args.indexOf(n) + 1]);
const plano = JSON.parse(await fs.readFile(path.resolve(rootDir, flag("--plano")), "utf8"));
const dir = path.resolve(rootDir, flag("--dir"));
const niveles = Number(flag("--niveles", 5));
const concurrencia = Number(flag("--concurrencia", 6));
const quality = flag("--quality", "high");
const D = 2 ** niveles;
const durMs = plano.duracion_s * 1000;

const nombre = (i) => path.join(dir, `f${String(i).padStart(4, "0")}.jpg`);
const existe = (p) => fs.access(p).then(() => true).catch(() => false);

// Las anclas ya generadas ocupan los extremos de la rejilla final.
for (const [src, i] of [["A.jpg", 0], ["B.jpg", D]]) {
  const from = path.join(dir, src);
  if (!(await existe(nombre(i)))) await fs.copyFile(from, nombre(i));
}

async function enTandas(tareas, n) {
  const out = [];
  for (let i = 0; i < tareas.length; i += n) {
    out.push(...(await Promise.all(tareas.slice(i, i + n).map((t) => t()))));
  }
  return out;
}

let totalUsd = 0;
let generados = 0;
for (let L = 1; L <= niveles; L++) {
  const paso = D / 2 ** L;
  const faltan = [];
  for (let i = paso; i < D; i += 2 * paso) {
    if (!(await existe(nombre(i)))) faltan.push(i);
  }
  if (!faltan.length) {
    console.log(`nivel ${L}: completo`);
    continue;
  }
  console.log(`nivel ${L}: ${faltan.length} fotogramas (paso ${paso}/${D} = ${Math.round((paso / D) * durMs)} ms)`);
  const t0 = Date.now();
  const res = await enTandas(
    faltan.map((i) => async () => {
      const a = nombre(i - paso);
      const b = nombre(i + paso);
      for (let intento = 1; intento <= 3; intento++) {
        try {
          const r = await genImage({
            prompt: promptMedio(plano, { msA: ((i - paso) / D) * durMs, msB: ((i + paso) / D) * durMs, nota: plano.nota_movimiento || "" }),
            refs: [a, b],
            outPath: nombre(i),
            quality,
            size: flag("--size", "1088x1920"),
            tag: `${plano.plano}/esc/L${L}/f${i}`,
          });
          return r.usd;
        } catch (e) {
          const msg = String(e?.message || e);
          if (intento === 3) throw e;
          console.warn(`  reintento ${intento} en f${i}: ${msg.slice(0, 120)}`);
          await new Promise((r) => setTimeout(r, 4000 * intento));
        }
      }
    }),
    concurrencia
  );
  const usd = res.reduce((a, b) => a + b, 0);
  totalUsd += usd;
  generados += faltan.length;
  console.log(`  ${faltan.length} listos en ${((Date.now() - t0) / 1000).toFixed(0)}s · $${usd.toFixed(2)}`);
}
console.log(`\nescalera ${D + 1} fotogramas · ${generados} nuevos · $${totalUsd.toFixed(2)}`);
