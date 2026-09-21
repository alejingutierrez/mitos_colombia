/**
 * Auditoría de fuentes de una comunidad: relevancia, duplicados, salud de URLs.
 *
 *   node scripts/editorial/enriquecimiento/auditar-fuentes.mjs --comunidad=wayuu [--desde=modulos|neon] [--sin-red] [--env=.env]
 *
 * Lee las fuentes del módulo (la verdad) o de Neon (--desde=neon, para comunidades
 * sin módulos o para medir lo publicado). Escribe el informe en
 * content/editorial/<comunidad>/auditoria-fuentes-<fecha>.json y sale con código 1
 * si hay bloqueos (mito con menos de 5 fuentes, URL caída, comparativa sin paralelo).
 */
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { parseArgs, requireCommunity, connect, resolveCommunity, loadDbMyths, loadModules, allSources, normalizeUrl, hostOf, sourceFlags, checkUrl, mapLimit, MIN_SOURCES, TARGET_SOURCES, today } from "./lib.mjs";

const options = parseArgs(process.argv.slice(2), { desde: "modulos" });
const communitySlug = requireCommunity(options);

let records;
let label;
if (options.desde === "neon") {
  const client = await connect(options);
  try {
    const community = await resolveCommunity(client, communitySlug, options);
    records = await loadDbMyths(client, community.id);
    label = "neon";
  } finally {
    await client.end();
  }
} else {
  const modules = await loadModules(communitySlug, options);
  if (!modules) throw new Error(`La comunidad ${communitySlug} no tiene módulos en editorial/. Usa --desde=neon para auditar lo publicado.`);
  records = [...modules.values()];
  label = "modulos";
}

const usages = new Map(); // url normalizada → { url, title, slugs, objects }
const works = new Map(); // título+autor normalizados → urls distintas
const perMyth = [];
for (const record of records) {
  const sources = allSources(record);
  const flags = [];
  for (const source of sources) {
    const key = normalizeUrl(source.url);
    const entry = usages.get(key) || { url: source.url, title: source.title, slugs: [], variants: new Set() };
    entry.slugs.push(record.slug);
    entry.variants.add(JSON.stringify({ title: source.title, author: source.author, year: source.year, type: source.type }));
    usages.set(key, entry);
    const workKey = `${String(source.title).toLowerCase().replace(/\W+/g, " ").trim()}|${String(source.author || "").toLowerCase().replace(/\W+/g, " ").trim()}`;
    const w = works.get(workKey) || new Set();
    w.add(key);
    works.set(workKey, w);
    for (const flag of sourceFlags(source, record)) flags.push({ url: source.url, flag });
  }
  perMyth.push({
    slug: record.slug,
    total: sources.length,
    clave: (record.keySources || []).length,
    dominios: new Set(sources.map((s) => hostOf(s.url))).size,
    estado: sources.length < MIN_SOURCES ? "BLOQUEO" : sources.length < TARGET_SOURCES ? "BAJO_META" : "OK",
    flags,
  });
}

const shared = [...usages.values()].filter((u) => u.slugs.length > 1).sort((a, b) => b.slugs.length - a.slugs.length);
const foundational = shared.filter((u) => u.slugs.length >= Math.ceil(records.length / 3));
const inconsistent = [...usages.values()].filter((u) => u.variants.size > 1);
const sameWorkManyUrls = [...works.entries()].filter(([, urls]) => urls.size > 1).map(([work, urls]) => ({ work, urls: [...urls] }));

let health = [];
if (!options["sin-red"]) {
  const urls = [...usages.values()].map((u) => u.url);
  health = await mapLimit(urls, 8, (url) => checkUrl(url));
}
const healthByUrl = new Map(health.map((h) => [normalizeUrl(h.url), h]));
// Un 503 por límite de peticiones no es una fuente muerta: es el servidor
// diciendo «vuelva luego». Dialnet lo devuelve con ese texto cuando se le
// piden muchos PDF seguidos, y tratarlo como caída bloqueaba la publicación
// de setenta fichas por cinco URLs que están enteras.
const brokenUrls = health.filter(
  (h) => !h.ok && !h.restricted && h.verdict !== "SIN_RESPUESTA" && h.verdict !== "LIMITE_O_TEMPORAL",
);
const rateLimited = health.filter((h) => h.verdict === "LIMITE_O_TEMPORAL");

// Un punto final en la URL casi siempre es el punto de la frase que se coló al
// copiarla, y por eso bloquea. Pero a veces es parte de la dirección: la nota
// de Michua en iespautp.com responde 200 **con** el punto y 404 sin él. En vez
// de suponer, se comprueban las dos y sólo bloquea si la de verdad es la corta.
const puntoFinal = new Set();
if (!options["sin-red"]) {
  const conPunto = [...usages.values()].map((u) => u.url).filter((url) => /\.$/.test(url));
  const comprobadas = await mapLimit(conPunto, 4, async (url) => {
    const sin = url.replace(/\.+$/, "");
    const [a, b] = await Promise.all([checkUrl(url), checkUrl(sin)]);
    return { url, sirveConPunto: Boolean(a.ok), sirveSinPunto: Boolean(b.ok) };
  });
  for (const c of comprobadas) {
    if (c.sirveConPunto && !c.sirveSinPunto) puntoFinal.add(normalizeUrl(c.url));
  }
}
const restrictedUrls = health.filter((h) => h.restricted);
const silentUrls = health.filter((h) => h.verdict === "SIN_RESPUESTA");

const blockers = [
  ...perMyth.filter((m) => m.estado === "BLOQUEO").map((m) => `${m.slug}: ${m.total} fuentes (<${MIN_SOURCES})`),
  ...perMyth.flatMap((m) =>
    m.flags
      .filter(
        (f) =>
          f.flag.startsWith("COMPARATIVA_SIN_PARALELO") ||
          (f.flag === "URL_TERMINA_EN_PUNTO" && !puntoFinal.has(normalizeUrl(f.url))),
      )
      .map((f) => `${m.slug}: ${f.flag} ${f.url}`),
  ),
  ...brokenUrls.map((h) => `${h.verdict} ${h.url} (${h.status ?? h.error}) citada en ${usages.get(normalizeUrl(h.url)).slugs.join(", ")}`),
];
const warnings = [
  ...perMyth.filter((m) => m.estado === "BAJO_META").map((m) => `${m.slug}: ${m.total} fuentes, meta ${TARGET_SOURCES}`),
  ...perMyth.flatMap((m) => m.flags.filter((f) => f.flag === "DOMINIO_DEBIL" || f.flag === "HTTP_SIN_TLS").map((f) => `${m.slug}: ${f.flag} ${f.url}`)),
  ...perMyth.flatMap((m) =>
    m.flags
      .filter((f) => f.flag === "URL_TERMINA_EN_PUNTO" && puntoFinal.has(normalizeUrl(f.url)))
      .map((f) => `${m.slug}: el punto final es parte de la dirección, no un error de copia: ${f.url}`),
  ),
  ...restrictedUrls.map((h) => `RESTRINGIDA ${h.url} (${h.status}${h.captcha ? ", captcha" : ""}): no se puede verificar automáticamente; comprobar a mano`),
  ...rateLimited.map((h) => `LIMITE_O_TEMPORAL ${h.url} (${h.status}): el servidor limita las peticiones, no es una fuente caída; comprobar a mano y espaciar la auditoría`),
  ...silentUrls.map((h) => `SIN_RESPUESTA ${h.url} (${h.error}): el servidor no contestó; comprobar a mano antes de retirarla, citada en ${usages.get(normalizeUrl(h.url)).slugs.join(", ")}`),
  ...inconsistent.map((u) => `misma URL con fichas bibliográficas distintas: ${u.url} → ${[...u.variants].join(" | ")}`),
  ...sameWorkManyUrls.map((w) => `misma obra en varias URLs (elegir una canónica): ${w.work} → ${w.urls.join(" , ")}`),
  ...health.filter((h) => h.ok && h.finalUrl && normalizeUrl(h.finalUrl) !== normalizeUrl(h.url)).map((h) => `redirige: ${h.url} → ${h.finalUrl}`),
];

const report = {
  community: communitySlug,
  desde: label,
  date: today(),
  myths: records.length,
  citations: [...usages.values()].reduce((n, u) => n + u.slugs.length, 0),
  uniqueUrls: usages.size,
  perMyth,
  shared: shared.map((u) => ({ url: u.url, title: u.title, citedBy: u.slugs.length, foundational: foundational.includes(u) })),
  health: health.map((h) => ({ ...h, citedBy: usages.get(normalizeUrl(h.url))?.slugs.length })),
  blockers,
  warnings,
};
const outDir = path.resolve("content", "editorial", communitySlug);
await fs.mkdir(outDir, { recursive: true });
const outFile = path.join(outDir, `auditoria-fuentes-${today()}.json`);
await fs.writeFile(outFile, `${JSON.stringify(report, null, 2)}\n`, "utf8");

console.log(`Auditoría de fuentes · ${communitySlug} desde ${label} · ${records.length} mitos · ${report.citations} citas · ${usages.size} URLs únicas`);
console.table(perMyth.map(({ slug, total, clave, dominios, estado, flags }) => ({ slug, total, clave, dominios, estado, flags: flags.length })));
console.log(`Fuentes fundacionales (citadas por ≥ ⅓ del corpus): ${foundational.length}`);
for (const u of foundational) console.log(`  ${u.slugs.length}× ${u.title} — ${u.url}`);
if (health.length) console.log(`Salud de URLs: ${health.filter((h) => h.ok).length} ok · ${restrictedUrls.length} restringidas · ${silentUrls.length} sin respuesta · ${brokenUrls.length} caídas`);
console.log(`\nBLOQUEOS (${blockers.length}):`);
for (const b of blockers) console.log(`  ✗ ${b}`);
console.log(`\nAVISOS (${warnings.length}):`);
for (const w of warnings) console.log(`  · ${w}`);
console.log(`\nInforme: ${outFile}`);
if (blockers.length) process.exitCode = 1;
