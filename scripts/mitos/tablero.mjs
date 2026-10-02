#!/usr/bin/env node
/**
 * Arma el tablero de producción: una página con el estado de los cinco pasos
 * de cada mito y todo el material ya producido en miniatura.
 *
 * Las miniaturas van incrustadas como data URI porque el visor de artefactos
 * bloquea cualquier host externo; a 320 px y calidad 72 el archivo entero cabe
 * de sobra bajo el techo de 16 MB.
 */
import { readdirSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const comunidad = process.argv[2] || "muiscas";
const salida = process.argv[3];
const plan = JSON.parse(readFileSync(`content/mitos-visuales/${comunidad}.json`, "utf8"));
const bibliaDir = join("content/videos", comunidad, "biblia");
const bibliaMan = JSON.parse(readFileSync(join(bibliaDir, "manifest.json"), "utf8"));

const mini = async (ruta, ancho = 320) => {
  const b = await sharp(ruta).resize(ancho, ancho, { fit: "inside" }).jpeg({ quality: 72 }).toBuffer();
  return `data:image/jpeg;base64,${b.toString("base64")}`;
};

const PASOS = [
  { k: "personajes", kind: "personaje", n: 1, label: "Personajes" },
  { k: "paisajes", kind: "paisaje", n: 2, label: "Paisajes" },
  { k: "props", kind: "prop", n: 3, label: "Props" },
  { k: "triptico", n: 4, label: "Tríptico" },
  { k: "video", n: 5, label: "Video" },
];

const mitos = [];
for (const [slug, m] of Object.entries(plan.mitos)) {
  const dirT = join("content/videos", comunidad, "mitos", m.carpeta || slug);
  const dirK = join("content/videos", comunidad, "videos", m.carpeta_video || slug, "keyframes");
  const fichas = Object.entries(m.biblia || {});
  const pasos = {};
  for (const p of PASOS) {
    if (p.kind) {
      const dec = fichas.filter(([, f]) => f.kind === p.kind);
      pasos[p.k] = [dec.filter(([n]) => existsSync(join(bibliaDir, `${n}.jpg`))).length, dec.length];
    }
  }
  pasos.triptico = [["entrada", "acto", "huella"].filter((a) => existsSync(join(dirT, `${a}.jpg`))).length, 3];
  const esperadas = Object.values(m.video?.bloques || {}).flatMap((b) => [b.a, b.b]).filter((e) => e && !e.reusa).length;
  const kf = existsSync(dirK) ? readdirSync(dirK).filter((f) => /^b\d[ab](_.+)?\.jpg$/.test(f) && !f.includes("crop")) : [];
  pasos.video = [kf.length, esperadas];

  const piezas = [];
  for (const a of ["entrada", "acto", "huella"]) {
    if (existsSync(join(dirT, `${a}.jpg`))) piezas.push({ tipo: "triptico", tag: a, src: await mini(join(dirT, `${a}.jpg`)) });
  }
  for (const [n, f] of fichas) {
    if (existsSync(join(bibliaDir, `${n}.jpg`))) piezas.push({ tipo: "ficha", tag: n, kind: f.kind, src: await mini(join(bibliaDir, `${n}.jpg`), 220) });
  }
  for (const f of kf.sort()) piezas.push({ tipo: "kf", tag: f.replace(/\.jpg$/, ""), src: await mini(join(dirK, f), 180) });

  mitos.push({ slug, ...m, pasos, piezas, completo: PASOS.every((p) => pasos[p.k][1] === 0 || pasos[p.k][0] >= pasos[p.k][1]) });
  process.stderr.write(`  ${slug}: ${piezas.length} piezas\n`);
}

// Fichas heredadas: existían antes de este plan y las sigue usando todo el mundo.
const heredadas = [];
for (const [n, it] of Object.entries(bibliaMan.items)) {
  if (it.estrenado_en) continue;
  if (!existsSync(join(bibliaDir, `${n}.jpg`))) continue;
  heredadas.push({ tag: n, kind: it.kind, src: await mini(join(bibliaDir, `${n}.jpg`), 200) });
}

const tot = (k) => mitos.reduce((s, m) => s + m.pasos[k][1], 0);
const hec = (k) => mitos.reduce((s, m) => s + Math.min(m.pasos[k][0], m.pasos[k][1]), 0);
const totales = PASOS.map((p) => ({ ...p, hecho: hec(p.k), total: tot(p.k) }));

writeFileSync(salida.replace(/\.html$/, ".json"), JSON.stringify({ comunidad: plan.comunidad, mitos, heredadas, totales, PASOS }, null, 0));
process.stderr.write(`\n  datos → ${salida.replace(/\.html$/, ".json")}\n`);
