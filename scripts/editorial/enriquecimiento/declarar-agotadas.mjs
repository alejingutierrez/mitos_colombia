/**
 * Lleva al módulo el «agotado» que la investigación declaró en sus fuentes.
 *
 *   node scripts/editorial/enriquecimiento/declarar-agotadas.mjs --modulos=<carpeta> --fuentes=<dir> [--apply]
 *
 * Una ficha que no da para ocho fuentes sin relleno declara en su JSON de
 * fuentes `"agotado": "<qué se buscó>"` (o `"estado": "AGOTADO: …"`). El
 * consolidador escribe las `sourceKeys`, pero no esa declaración, y el `define`
 * del bloque exige ocho salvo `fuentesAgotadas`: tres veces una ficha con siete
 * buenas fuentes detuvo el cotejo y la aplicación. Esto escribe
 * `fuentesAgotadas: "<razón>"` en la entrada de cada una, justo después del
 * `slug`, en las disposiciones `definitions*.mjs` y `records.mjs`.
 *
 * Es idempotente: una entrada que ya lo declara no se toca.
 */
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { parseArgs } from "./lib.mjs";

const options = parseArgs(process.argv.slice(2));
if (!options.modulos || !options.fuentes) throw new Error("Falta --modulos=<carpeta> y --fuentes=<dir>");
const carpeta = path.resolve("editorial", String(options.modulos));
const archivos = (await fs.readdir(carpeta)).filter((f) => /^(definitions.*|records)\.mjs$/.test(f));
const fuentes = path.resolve(String(options.fuentes));

const razonDe = (json) => {
  if (typeof json.agotado === "string" && json.agotado.trim()) return json.agotado.trim();
  const estado = String(json.estado || "");
  const m = estado.match(/^AGOTADO[:\s-]*(.*)$/is);
  return m ? (m[1].trim() || "AGOTADO declarado en la investigación") : null;
};

const textos = new Map();
for (const f of archivos) textos.set(f, await fs.readFile(path.join(carpeta, f), "utf8"));
const hechas = [];
const ya = [];
for (const f of (await fs.readdir(fuentes)).filter((x) => x.endsWith(".json"))) {
  const json = JSON.parse(await fs.readFile(path.join(fuentes, f), "utf8"));
  const slug = json.slug || f.replace(/\.json$/, "");
  const razon = razonDe(json);
  if (!razon) continue;
  for (const [archivo, src] of textos) {
    const ancla = `\n    slug: ${JSON.stringify(slug)},\n`;
    const i = src.indexOf(ancla);
    if (i < 0) continue;
    const resto = src.slice(i + ancla.length, i + ancla.length + 400);
    if (/^\s*fuentesAgotadas:/.test(resto)) {
      ya.push(slug);
      continue;
    }
    textos.set(archivo, src.replace(ancla, `${ancla}    fuentesAgotadas: ${JSON.stringify(razon)},\n`));
    hechas.push(`${slug} (${archivo})`);
  }
}
for (const s of hechas) console.log(`  + ${s}`);
for (const s of ya) console.log(`  = ${s}: ya lo declaraba`);
if (options.apply) {
  for (const [archivo, src] of textos) await fs.writeFile(path.join(carpeta, archivo), src);
  console.log(`Escrito: ${hechas.length} fichas declaran fuentesAgotadas.`);
} else console.log(`Dry-run: ${hechas.length} por declarar. Añade --apply para escribir.`);
