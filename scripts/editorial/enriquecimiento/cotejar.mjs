/**
 * Cotejo ficha por ficha: lo que el módulo resuelve contra lo que la
 * investigación pidió.
 *
 *   node scripts/editorial/enriquecimiento/cotejar.mjs --comunidad=uwa --fuentes=content/editorial/uwa/fuentes-2026-09-18
 *   node scripts/editorial/enriquecimiento/cotejar.mjs --comunidad=mestizo --region=caribe --modulos=caribe-mestizo-final --fuentes=<dir>
 *
 * Por qué existe: en u'wa, **diez de las once fichas se publicaron con las
 * fuentes de otra** mientras el auditor, los tests y la verificación pasaban en
 * verde. Todo lo demás mira si las fuentes son buenas; nadie miraba si eran las
 * de ese mito. El reparto se pierde en tres sitios —el pool, el constructor y
 * el `define`— y desde fuera no se nota, porque las URLs existen, responden y
 * tratan de la comunidad.
 *
 * Esto compara conjunto contra conjunto, por slug, y no mira nada más.
 * Era un script de scratchpad; el spec §7 pide que sea un comando del kit.
 */
import fsp from "node:fs/promises";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { parseArgs, requireCommunity, loadModules, allSources, normalizeUrl, fuenteVetada } from "./lib.mjs";

const options = parseArgs(process.argv.slice(2));
const comunidad = requireCommunity(options);
const dirFuentes = String(options.fuentes || "").trim();
if (!dirFuentes) {
  throw new Error(
    "Falta --fuentes=<carpeta con los JSON de la investigación>, p. ej. --fuentes=content/editorial/<ciclo>/fuentes-2026-09-19",
  );
}
if (!fs.existsSync(dirFuentes)) throw new Error(`No existe ${dirFuentes}`);

const records = await loadModules(comunidad, options);
if (!records) throw new Error(`No hay módulos para ${comunidad} (prueba --modulos=<carpeta de editorial/>)`);

/** Las URLs que el módulo REALMENTE resuelve para un mito, ya normalizadas. */
function urlsDelModulo(record) {
  return new Set(
    allSources(record)
      .map((s) => normalizeUrl(s?.url))
      .filter(Boolean),
  );
}

const archivos = (await fsp.readdir(dirFuentes)).filter((f) => f.endsWith(".json") && f !== "INFORME.json").sort();
if (!archivos.length) throw new Error(`No hay JSON en ${dirFuentes}`);

const filas = [];
const detalle = [];
let totalFallos = 0;

for (const archivo of archivos) {
  const slug = archivo.replace(/\.json$/, "");
  let pedidas;
  try {
    const data = JSON.parse(await fsp.readFile(path.join(dirFuentes, archivo), "utf8"));
    pedidas = Array.isArray(data) ? data : data.fuentes || [];
  } catch (error) {
    filas.push({ slug, módulo: "—", json: "—", faltan: "—", sobran: "—", veredicto: "JSON ILEGIBLE" });
    detalle.push({ slug, lineas: [`el JSON no se puede leer: ${error.message}`] });
    totalFallos += 1;
    continue;
  }

  const record = records.get(slug);
  if (!record) {
    filas.push({ slug, módulo: "AUSENTE", json: pedidas.length, faltan: "—", sobran: "—", veredicto: "SIN FICHA" });
    detalle.push({ slug, lineas: ["el módulo no tiene ninguna ficha con este slug"] });
    totalFallos += 1;
    continue;
  }

  const enModulo = urlsDelModulo(record);
  const enJson = new Set(pedidas.map((s) => normalizeUrl(s?.url)).filter(Boolean));

  const faltan = [...enJson].filter((u) => !enModulo.has(u));
  const sobran = [...enModulo].filter((u) => !enJson.has(u));
  const vetadas = [...enModulo].map((u) => [u, fuenteVetada(u)]).filter(([, v]) => v);

  const lineas = [];
  for (const u of faltan) lineas.push(`falta en el módulo: ${u}`);
  for (const u of sobran) lineas.push(`el módulo trae una que el JSON no pidió: ${u}`);
  for (const [u, v] of vetadas) lineas.push(`el módulo cita una fuente ${v}: ${u}`);

  // El caso u'wa: el módulo resuelve un conjunto entero que no es el suyo.
  const solapa = [...enJson].filter((u) => enModulo.has(u)).length;
  let veredicto = "coincide";
  if (!enJson.size) veredicto = "JSON VACÍO";
  else if (!solapa) veredicto = "NINGUNA COINCIDE";
  else if (faltan.length || sobran.length) veredicto = "difiere";

  if (veredicto !== "coincide") totalFallos += 1;
  if (lineas.length) detalle.push({ slug, lineas });

  filas.push({
    slug,
    módulo: enModulo.size,
    json: enJson.size,
    faltan: faltan.length,
    sobran: sobran.length,
    veredicto,
  });
}

// Fichas del módulo que ninguna investigación cubrió.
const cubiertos = new Set(archivos.map((f) => f.replace(/\.json$/, "")));
const huerfanas = [...records.keys()].filter((s) => !cubiertos.has(s));

console.table(filas);

for (const d of detalle) {
  console.log(`\n${d.slug}`);
  for (const l of d.lineas) console.log(`  ✖ ${l}`);
}

if (huerfanas.length) {
  console.log(`\nSIN INVESTIGACIÓN (${huerfanas.length}): ${huerfanas.join(", ")}`);
  console.log("  El alcance es el ciclo completo: ninguna ficha a medias (brief, regla 5).");
}

const gravisimo = filas.filter((f) => f.veredicto === "NINGUNA COINCIDE");
if (gravisimo.length) {
  console.log(
    `\n⚠ ${gravisimo.length} ficha(s) no comparten NI UNA URL con su investigación: ${gravisimo.map((f) => f.slug).join(", ")}`,
  );
  console.log("  Esto es exactamente lo que pasó en u'wa. Revisa el pool, el constructor y el `define`.");
}

console.log(
  `\n${archivos.length} ficha(s) cotejada(s) · ${totalFallos} con diferencias · ${huerfanas.length} sin investigación.`,
);
process.exit(totalFallos || huerfanas.length ? 1 : 0);
