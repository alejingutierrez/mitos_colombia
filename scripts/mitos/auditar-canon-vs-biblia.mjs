#!/usr/bin/env node
/**
 * Mide la desincronia entre lo que el canon cuenta y lo que la biblia fichó.
 *
 * Las dos capas se construyeron contra fuentes distintas: el inventario leyó el
 * censo y el dossier, y el acta lee el relato congelado. Cuando divergen, la
 * biblia tiene fichas de figuras que el relato no nombra —y le faltan las que
 * si nombra—. `zenu/la-noche-mas-larga` lo enseño: Mexion y Tarra estan en el
 * plan y en cero lineas del canon, mientras Babilla Antigua, Ceiba Primera y la
 * luz de insectos estan en el canon y fuera del expediente.
 *
 * El acta es el unico sitio donde eso se ve, porque es la unica capa cuyas
 * afirmaciones se verifican contra el texto. Aqui solo se mide; corregirlo es
 * decision editorial.
 *
 *   node scripts/mitos/auditar-canon-vs-biblia.mjs
 *   node scripts/mitos/auditar-canon-vs-biblia.mjs --corpus zenu --detalle
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";

const PLANES = "content/mitos-visuales";
const ACTAS = "content/mitos-visuales/actas";

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    if (!argv[i].startsWith("--")) continue;
    const next = argv[i + 1];
    out[argv[i].slice(2)] = !next || next.startsWith("--") ? true : next;
  }
  return out;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const corpus = args.corpus ? [String(args.corpus)] : readdirSync(ACTAS).sort();

  let mitos = 0, huerfanas = 0, traidas = 0;
  const filas = [];
  for (const id of corpus) {
    const planPath = join(PLANES, `${id}.v3.json`);
    if (!existsSync(planPath)) continue;
    const plan = JSON.parse(readFileSync(planPath, "utf8"));
    let hC = 0, tC = 0, n = 0;
    for (const f of readdirSync(join(ACTAS, id)).filter((x) => x.endsWith(".json"))) {
      const acta = JSON.parse(readFileSync(join(ACTAS, id, f), "utf8"));
      if (!Array.isArray(acta.escenas) || !acta.escenas.length) continue;
      n += 1; mitos += 1;

      const usadas = new Set(acta.escenas.flatMap((e) => e.entity_refs || []));
      // Lo que el plan asocia al relato y llega a lamina.
      const asociadas = (plan.myths?.[acta.mito]?.entity_refs || [])
        .filter((r) => plan.entities?.[r.entity_id]?.visual_status === "required")
        .map((r) => r.entity_id);
      // Fichadas para este relato que ninguna escena pudo usar: candidatas a que
      // el canon no las sostenga.
      const sinUsar = asociadas.filter((x) => !usadas.has(x));
      // Usadas por la escena que el plan no asocia a este relato: el acta tuvo
      // que ir a buscarlas fuera de la lista del inventario.
      const fuera = [...usadas].filter((x) => !asociadas.includes(x));
      hC += sinUsar.length; tC += fuera.length;
      if (args.detalle && (sinUsar.length || fuera.length)) {
        console.log(`  ${acta.mito}`);
        if (sinUsar.length) console.log(`     fichada y sin escena: ${sinUsar.join(", ")}`);
        if (fuera.length) console.log(`     traida de fuera     : ${fuera.join(", ")}`);
      }
    }
    if (!n) continue;
    huerfanas += hC; traidas += tC;
    filas.push([id, n, hC, tC, (hC / n).toFixed(1)]);
  }

  console.log("corpus".padEnd(28), "actas".padStart(6), "sin escena".padStart(11), "de fuera".padStart(9), "media".padStart(7));
  for (const r of filas.sort((a, b) => Number(b[4]) - Number(a[4]))) {
    console.log(String(r[0]).padEnd(28), String(r[1]).padStart(6), String(r[2]).padStart(11), String(r[3]).padStart(9), String(r[4]).padStart(7));
  }
  console.log("-".repeat(66));
  console.log(`${mitos} relatos con escenas · ${huerfanas} fichas asociadas que ninguna escena usa · ${traidas} traidas de fuera de la lista`);
  console.log("Una ficha sin escena no es un error: puede ser atrezo de fondo. Muchas en el");
  console.log("mismo relato si lo son, y significan que el inventario y el canon no coinciden.");
}

main();
