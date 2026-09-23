#!/usr/bin/env node
/**
 * Verifica un acta de reducción y, si se le pasa el guion, que lo cubra.
 *
 * El acta es el paso que faltaba entre el canon y el guion. Pasar 2.000
 * caracteres de relato a nueve líneas de dieciocho palabras es donde se pierde
 * el mito, y hasta ahora nadie declaraba qué se podía sacrificar: se decidía de
 * cabeza, mito por mito. El acta obliga a escribir ANTES los nudos
 * irrenunciables —qué pasa, quién cambia, qué queda— con la frase del canon que
 * los sostiene, y a declarar qué se descarta y por qué.
 *
 * Comprueba tres cosas:
 *   1. cada `evidencia` aparece de verdad en el canon (no se inventa el ancla);
 *   2. el N propuesto cae en 8-18 bloques (16-36 cuadros, 80-180 s);
 *   3. con --guion, que cada nudo esté cubierto por al menos un bloque y que
 *      ningún bloque flote sin cubrir ninguno.
 *
 *   node scripts/videos/lint-acta.mjs <acta.json> [--guion <guion.json>]
 */
import fs from "node:fs";
import crypto from "node:crypto";
import { neon } from "@neondatabase/serverless";

const norm = (s) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9ñ ]/g, " ").replace(/\s+/g, " ").trim();

const ruta = process.argv[2];
const iG = process.argv.indexOf("--guion");
const acta = JSON.parse(fs.readFileSync(ruta, "utf8"));
const errs = [];
const avisos = [];

const sql = neon(process.env.POSTGRES_URL);
const filas = await sql`SELECT mito FROM myths WHERE slug = ${acta.canon_slug}`;
if (!filas.length) errs.push(`el slug ${acta.canon_slug} no existe o no tiene canon`);
const canon = filas[0]?.mito || "";
const canonNorm = norm(canon);

const sha = crypto.createHash("sha256").update(canon).digest("hex");
if (acta.canon_sha256 && acta.canon_sha256 !== sha)
  errs.push(`el canon cambió desde que se escribió el acta (sha ${sha.slice(0, 12)}…)`);

const nudos = acta.nudos || [];
if (!nudos.length) errs.push("el acta no declara ningún nudo");
for (const n of nudos) {
  if (!n.evidencia) { errs.push(`${n.id}: sin evidencia`); continue; }
  if (!canonNorm.includes(norm(n.evidencia)))
    errs.push(`${n.id}: la evidencia no aparece literal en el canon → «${n.evidencia.slice(0, 54)}…»`);
}

const N = acta.N_propuesto;
if (!(N >= 8 && N <= 18)) errs.push(`N_propuesto ${N} fuera de 8-18 (16-36 cuadros)`);
if (!acta.razon_N) errs.push("sin razon_N: el largo debe salir de los nudos, no del molde");

// La duración la deciden los nudos, no el gusto: cada bloque sostiene como
// mucho dos, cada keyframe es un clip de 5 s. De ahí, N = techo(nudos / 2)
// acotado a 8-18, o sea 16-36 keyframes, o sea 80-180 s de video.
//
// Sin esta comprobación el largo lo terminaba decidiendo cuán fino se troceaba
// el canon: actas que declaraban un nudo por frase empujaban N al máximo y
// convertían mitos de 90 s en videos de 180 s. Auditado el 2026-09-17 sobre los
// 117 guiones: la correlación nudos-N era 0,93 y la de canon-nudos apenas 0,56,
// es decir el troceo mandaba sobre el mito.
// Un mito con video ya montado queda congelado: su guion no se vuelve a medir
// porque volver a producirlo costaría más que el largo que ganaría. Se marca
// con `congelado` en el acta y se dice por qué, para que no parezca descuido.
const N_DERIVADO = Math.min(18, Math.max(8, Math.ceil(acta.nudos.length / 2)));
if (acta.congelado) {
  avisos.push(`congelado (${acta.congelado}): N=${N} se conserva aunque los nudos pidan N=${N_DERIVADO}`);
} else if (N !== N_DERIVADO) {
  errs.push(
    `N_propuesto ${N} no sale de los nudos: ${acta.nudos.length} nudos piden N=${N_DERIVADO} ` +
      `(${N_DERIVADO * 2} keyframes, ≈${N_DERIVADO * 10}s). ` +
      (N > N_DERIVADO
        ? "Si el mito de verdad da para más, el acta necesita más nudos; si no, sobra largo."
        : "Consolida menos, o el guion deja nudos sin cubrir.")
  );
}

if (iG > 0) {
  const g = JSON.parse(fs.readFileSync(process.argv[iG + 1], "utf8"));
  if (g.lines.length !== N) errs.push(`el guion trae ${g.lines.length} bloques y el acta propone ${N}`);
  const cubiertos = new Set(g.lines.flatMap((l) => l.cubre || []));
  const sinCubrir = nudos.filter((n) => !cubiertos.has(n.id)).map((n) => n.id);
  if (sinCubrir.length) errs.push(`nudos sin cubrir en el guion: ${sinCubrir.join(", ")}`);
  g.lines.forEach((l, i) => {
    if (!(l.cubre || []).length) errs.push(`${l.bloque || "b" + (i + 1)}: no cubre ningún nudo`);
    /* Tres nudos en un bloque significa que N se quedó corto: dos frases no
     * sostienen tres hechos sin que uno entre de refilón. Pasó en el-diluvio,
     * donde el acta avisó del riesgo de sacrificar el incendio y el guion lo
     * sacrificó igual, metiéndolo en media frase de un bloque con tres nudos. */
    if ((l.cubre || []).length >= 3)
      avisos.push(`${l.bloque || "b" + (i + 1)}: cubre ${l.cubre.length} nudos (${l.cubre.join(", ")}) — señal de que N se quedó corto`);
    for (const id of l.cubre || [])
      if (!nudos.some((n) => n.id === id)) errs.push(`${l.bloque}: cubre ${id}, que no está en el acta`);
  });
}

if (errs.length) {
  console.log(`✘ ${acta.mito}`);
  errs.forEach((e) => console.log(`    ${e}`));
  avisos.forEach((a) => console.log(`    ! ${a}`));
  process.exit(1);
}
avisos.forEach((a) => console.log(`  ! ${a}`));
console.log(`✔ ${acta.mito} · ${nudos.length} nudos · N=${N} (${N * 2} cuadros, ≈${N * 10}s)` +
  (acta.descartes?.length ? ` · ${acta.descartes.length} descartes declarados` : ""));
