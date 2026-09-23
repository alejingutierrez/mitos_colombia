/**
 * Deja en el módulo el título que el sitio ya publica.
 *
 *   node scripts/editorial/enriquecimiento/reponer-titulos.mjs --comunidad=<c> [--region=<r>] --modulos=<carpeta> [--slugs=a,b] [--apply]
 *
 * Los módulos del bloque traen títulos con subtítulos que puso el sitio y que
 * ninguna fuente da —«amor y metamorfosis», «Honorato y la Cobra Grande»,
 * «Petapeta y la canasta de semillas»—, y alguno afirma lo contrario del texto
 * rehecho. Aplicar el texto los publicaría en silencio. Cambiar un título
 * visible es una decisión del director (spec del cierre §4, agenda), no un
 * efecto de la reescritura: esto repone en el módulo el título publicado en
 * Neon, y la propuesta de título nuevo queda en el `titulo` del JSON de la
 * reescritura y en la agenda.
 *
 * Toca sólo las líneas `title: "…",` de las entradas en `definitions*.mjs` y
 * `records.mjs`. En dry-run imprime lo que cambiaría.
 */
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { connect, loadDbMyths, loadModules, parseArgs, requireCommunity, resolveCommunity } from "./lib.mjs";

const options = parseArgs(process.argv.slice(2));
const communitySlug = requireCommunity(options);
if (!options.modulos) throw new Error("Falta --modulos=<carpeta>");
const only = options.slugs ? new Set(String(options.slugs).split(",").map((s) => s.trim())) : null;

const client = await connect(options);
const community = await resolveCommunity(client, communitySlug, options);
const publicados = new Map((await loadDbMyths(client, community.id)).map((r) => [r.slug, r.title]));
await client.end();

const modules = await loadModules(communitySlug, options);
const carpeta = path.resolve("editorial", String(options.modulos));
const archivos = (await fs.readdir(carpeta)).filter((f) => /^(definitions.*|records)\.mjs$/.test(f));
const textos = new Map();
for (const f of archivos) textos.set(f, await fs.readFile(path.join(carpeta, f), "utf8"));

let cambios = 0;
for (const [slug, record] of modules) {
  if (only && !only.has(slug)) continue;
  const publicado = publicados.get(slug);
  if (!publicado || publicado === record.title) continue;
  const viejo = `    title: ${JSON.stringify(record.title)},`;
  const nuevo = `    title: ${JSON.stringify(publicado)},`;
  let hecho = false;
  for (const [f, src] of textos) {
    const ancla = src.indexOf(`\n    slug: ${JSON.stringify(slug)},\n`);
    if (ancla < 0) continue;
    // El título va en el mismo bloque que el slug: se busca a partir de él.
    const i = src.indexOf(viejo, ancla);
    const siguiente = src.indexOf("\n    slug: ", ancla + 10);
    if (i < 0 || (siguiente > 0 && i > siguiente)) continue;
    textos.set(f, src.slice(0, i) + nuevo + src.slice(i + viejo.length));
    hecho = true;
    cambios += 1;
    console.log(`  · ${slug}: «${record.title}» → «${publicado}»`);
    break;
  }
  if (!hecho) console.log(`  ? ${slug}: no encuentro su línea de título en el módulo`);
}
if (options.apply) {
  for (const [f, src] of textos) await fs.writeFile(path.join(carpeta, f), src);
  console.log(`Escrito: ${cambios} títulos repuestos al publicado.`);
} else console.log(`Dry-run: ${cambios} títulos por reponer. Añade --apply.`);
