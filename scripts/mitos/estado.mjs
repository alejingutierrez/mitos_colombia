#!/usr/bin/env node
/**
 * Qué falta, mito por mito, en los cinco pasos de producción.
 *
 * El corpus son 596 mitos y ~22 piezas cada uno: ninguna sesión lo termina.
 * Lo que hace reanudable el trabajo no es una lista de tareas aparte sino
 * mirar el disco: si el archivo existe, el paso está hecho. Así el estado no
 * se puede desincronizar de la realidad.
 *
 *   npm run mitos:estado -- --comunidad muiscas [--detalle]
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, arr) => {
    if (a.startsWith("--")) acc.push([a.slice(2), arr[i + 1]?.startsWith("--") ? true : arr[i + 1]]);
    return acc;
  }, [])
);
const comunidad = args.comunidad || "muiscas";
const plan = JSON.parse(readFileSync(`content/mitos-visuales/${comunidad}.json`, "utf8"));
const bibliaDir = join("content/videos", comunidad, "biblia");

const PASOS = ["personajes", "paisajes", "props", "triptico", "video"];
const filas = [];

for (const [slug, mito] of Object.entries(plan.mitos)) {
  const dir = join("content/videos", comunidad, "mitos", slug);
  // Dos mitos guardan su video en una carpeta con nombre viejo, de antes de
  // este plan; se respeta para no romper rutas ya versionadas.
  const kfDir = join("content/videos", comunidad, "videos", mito.carpeta_video || slug, "keyframes");
  const fichas = Object.entries(mito.biblia || {});
  const cuenta = (kind) => {
    const declaradas = fichas.filter(([, f]) => f.kind === kind);
    const hechas = declaradas.filter(([n]) => existsSync(join(bibliaDir, `${n}.jpg`)));
    return [hechas.length, declaradas.length];
  };
  const trip = ["entrada", "acto", "huella"].filter((a) => existsSync(join(dir, `${a}.jpg`))).length;
  const escenas = Object.values(mito.video?.bloques || {})
    .flatMap((b) => [b.a, b.b]).filter((e) => e && !e.reusa).length;
  // Los keyframes viejos se llamaban `b1a_algo.jpg` y los nuevos `b1a.jpg`;
  // ambos cuentan, y los recortes 9:16 no, que si no salen al doble.
  const kf = existsSync(kfDir)
    ? readdirSync(kfDir).filter((f) => /^b\d[ab](_.+)?\.jpg$/.test(f) && !f.includes("crop")).length
    : 0;

  filas.push({
    slug,
    personajes: cuenta("personaje"),
    paisajes: cuenta("paisaje"),
    props: cuenta("prop"),
    triptico: [trip, 3],
    video: [kf, escenas],
  });
}

const marca = ([a, b]) => (b === 0 ? "  —  " : a >= b ? ` ${String(a).padStart(2)}/${b} ✔` : ` ${String(a).padStart(2)}/${b}  `);
console.log(`\n  ${comunidad} · ${filas.length} mitos en plan\n`);
console.log("  " + "mito".padEnd(26) + PASOS.map((p) => p.padStart(8)).join(""));
console.log("  " + "─".repeat(26 + 8 * 5));
for (const f of filas) {
  const completo = PASOS.every((p) => f[p][1] === 0 || f[p][0] >= f[p][1]);
  console.log(`  ${(completo ? "✔ " : "· ") + f.slug.padEnd(24)}${PASOS.map((p) => marca(f[p]).padStart(8)).join("")}`);
}
const total = (p) => filas.reduce((s, f) => s + f[p][1], 0);
const hecho = (p) => filas.reduce((s, f) => s + Math.min(f[p][0], f[p][1]), 0);
console.log("  " + "─".repeat(26 + 8 * 5));
console.log("  " + "TOTAL".padEnd(26) + PASOS.map((p) => `${hecho(p)}/${total(p)}`.padStart(8)).join(""));
const faltan = PASOS.reduce((s, p) => s + total(p) - hecho(p), 0);
console.log(`\n  faltan ${faltan} imágenes en los mitos ya planeados · ${Object.keys(plan.mitos).length}/41 mitos muiscas con plan escrito\n`);
