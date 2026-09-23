/**
 * Carga los módulos de una comunidad y valida sus fichas ya compuestas.
 *
 *   node scripts/editorial/enriquecimiento/comprobar-modulo.mjs --comunidad=<c> [--modulos=<carpeta>] [--slugs=a,b]
 *
 * Existe como proceso aparte a propósito. `importar-texto.mjs` lo llama después
 * de escribir, y si la comprobación corriera dentro del mismo proceso leería la
 * versión del módulo que ESM ya tenía en caché: la de antes de escribir. El
 * truco de `?t=` no basta, porque sólo invalida el archivo al que se le pone y
 * no a lo que ese archivo importa —`records.mjs` reexporta `definitions.mjs`—,
 * y entonces la comprobación informa de fallos que ya no existen.
 *
 * Imprime una línea `✗ <slug>: <errores>` por ficha que no cumple y sale con 0
 * siempre: quien llama decide qué hacer con el recuento, que va en la última
 * línea como `TOTAL <malos>`.
 */
import process from "node:process";

import fs from "node:fs/promises";
import path from "node:path";
import { loadModules, parseArgs, requireCommunity, validateRecord } from "./lib.mjs";

const options = parseArgs(process.argv.slice(2));
const communitySlug = requireCommunity(options);
const only = options.slugs ? new Set(String(options.slugs).split(",").map((s) => s.trim()).filter(Boolean)) : null;

const records = await loadModules(communitySlug, options);
let malos = 0;
for (const record of records?.values() ?? []) {
  if (only && !only.has(record.slug)) continue;
  const errores = validateRecord(record, { texto: true, fuentes: false });
  if (!errores.length) continue;
  malos += 1;
  console.log(`  ✗ ${record.slug}: ${errores.join("; ")}`);
}
// El cuarto escondite: un `define` que resuelve las fuentes por slug no lee
// las `sourceKeys` de la ficha, y el módulo publica el reparto heredado aunque
// la ficha declare otro. Todo lo demás pasa en verde, así que se marca aquí.
// Sólo importa si alguna ficha del ciclo ya declara las suyas.
const carpeta = path.resolve("editorial", String(options.modulos || communitySlug));
const archivos = await fs.readdir(carpeta).catch(() => []);
const leer = (f) => fs.readFile(path.join(carpeta, f), "utf8").catch(() => "");
const defines = (await Promise.all(archivos.filter((f) => /^define.*\.mjs$/.test(f)).map(leer))).join("\n");
const declaran = (
  await Promise.all(archivos.filter((f) => /^(definitions.*|records|reescrituras)\.mjs$/.test(f)).map(leer))
).some((src) => /\bsourceKeys\s*:/.test(src));
if (declaran && /pick\w+Sources\(\s*input\.slug,?\s*\)/.test(defines)) {
  malos += 1;
  console.log(
    `  ✗ ${path.basename(carpeta)}: el define resuelve las fuentes por slug e ignora las sourceKeys de la ficha (abrir-modulo.mjs --apply)`,
  );
}
console.log(`TOTAL ${malos}`);
