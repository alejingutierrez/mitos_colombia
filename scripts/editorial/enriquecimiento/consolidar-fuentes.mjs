/**
 * Fase B · consolida en los módulos las fuentes propuestas por la búsqueda profunda.
 *
 *   node scripts/editorial/enriquecimiento/consolidar-fuentes.mjs --comunidad=wayuu --propuestas=<dir-o-archivo.json> [--sin-red] [--apply]
 *
 * Entrada: uno o varios JSON con la forma que devuelven los agentes de búsqueda:
 *   [{ slug, estado, fuentes: [{ title, author, year, type, url, summary, limitation }], ... }]
 * Para cada propuesta: verifica la URL (salvo --sin-red), la casa contra el pool
 * `editorial/<c>/sources.mjs` por URL normalizada, reutiliza la clave si la obra ya
 * existe (con summary/limitation propios del mito) o crea una clave nueva, y la
 * añade al final de `sourceKeys` del módulo `editorial/<c>/myths/<slug>.mjs`.
 * Dry-run por defecto: imprime el plan y no escribe. Con --apply escribe el pool y
 * los módulos; después toca correr auditar → test → aplicar-fuentes.
 *
 * Con --reemplazar, la lista propuesta **sustituye** a la que el mito tenía en
 * vez de añadirse al final. Es el modo que necesita una comunidad cuyo reparto
 * venía en bloque —la misma lista para todas sus fichas—: ahí lo que hay no es
 * un punto de partida al que sumar, sino lo que hay que tirar. Sin la bandera
 * se conserva el comportamiento de siempre, que es sumar.
 *
 * Cubre las tres disposiciones: `myths/<slug>.mjs`, uno o varios
 * `definitions*.mjs`, y `records.mjs`. Los resúmenes por mito
 * ({ key, summary, limitation }) exigen que el `pick…Sources` de la comunidad
 * acepte objetos; `abrir-modulo.mjs` deja así a las que no lo hacían.
 */
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";
import { parseArgs, requireCommunity, loadModules, allSources, normalizeUrl, checkUrl, mapLimit, sourceFlags } from "./lib.mjs";

const options = parseArgs(process.argv.slice(2));
const communitySlug = requireCommunity(options);
if (!options.propuestas) throw new Error("Falta --propuestas=<archivo.json o directorio>");

const dir = path.resolve("editorial", String(options.modulos || communitySlug));
const poolPath = path.join(dir, "sources.mjs");
const poolModule = await import(pathToFileURL(poolPath).href + `?t=${Date.now()}`);
// Las claves de un namespace ESM salen en orden alfabético, no en el del
// archivo: buscar el primer export que acabe en `Sources` elegía
// `juanLaraSources` antes que `zenuSources` y `abundanceSources` antes que
// `yucunaSources`, y las obras nuevas acababan en el objeto secundario. El
// pool es el que más obras tiene.
const poolName = Object.keys(poolModule)
  .filter((k) => /Sources$/.test(k) && poolModule[k] && typeof poolModule[k] === "object")
  .sort((a, b) => Object.keys(poolModule[b]).length - Object.keys(poolModule[a]).length)[0];
if (!poolName) throw new Error(`No encuentro el pool exportado (…Sources) en ${poolPath}`);
const pool = poolModule[poolName];
const modules = await loadModules(communitySlug, options);
if (!modules) throw new Error(`Sin módulos para ${communitySlug}`);

// Propuestas
const inputPath = path.resolve(String(options.propuestas));
const files = (await fs.stat(inputPath)).isDirectory() ? (await fs.readdir(inputPath)).filter((f) => f.endsWith(".json")).map((f) => path.join(inputPath, f)) : [inputPath];
const proposals = [];
for (const file of files) {
  const raw = JSON.parse(await fs.readFile(file, "utf8"));
  for (const item of Array.isArray(raw) ? raw : [raw]) for (const source of item.fuentes || []) proposals.push({ slug: item.slug, source, file: path.basename(file) });
}

// Tres disposiciones: `myths/<slug>.mjs`, uno o varios `definitions*.mjs`, y
// `records.mjs` con las llamadas de definición en línea. Las dos últimas se
// tratan igual. Algunas comunidades tienen `myths/` con archivos que sólo
// reexportan, así que no basta con que el directorio exista.
const definitionFiles = (await fs.readdir(dir).catch(() => []))
  .filter((f) => /^(definitions.*|records)\.mjs$/.test(f))
  .map((f) => path.join(dir, f));
const hasDefinitions = definitionFiles.length > 0;
const hasMythFiles = await fs
  .readdir(path.join(dir, "myths"))
  .then(async (files) => {
    const first = files.find((f) => f.endsWith(".mjs"));
    if (!first) return false;
    const src = await fs.readFile(path.join(dir, "myths", first), "utf8");
    return /sourceKeys|const mito = /.test(src);
  })
  .catch(() => false);

// Claves que el mito ya cita, leídas de sus fuentes resueltas y traducidas al pool
// por URL: sirve para comunidades cuyo define aplica una lista por defecto y el
// módulo no la declara (chimila), donde escribir `sourceKeys` sustituye esa lista.
function currentKeys(record) {
  const byUrl = new Map(Object.entries(pool).map(([k, v]) => [normalizeUrl(v.url), k]));
  const keys = [];
  for (const s of allSources(record)) {
    const k = byUrl.get(normalizeUrl(s.url));
    if (k && !keys.includes(k)) keys.push(k);
  }
  return keys;
}

function defaultKeys(mod) {
  const key = Object.keys(mod).find((k) => /^default.*SourceKeys$/.test(k));
  return key && Array.isArray(mod[key]) ? mod[key] : [];
}

const js = (v) => JSON.stringify(v);
const poolByUrl = new Map(Object.entries(pool).map(([k, v]) => [normalizeUrl(v.url), k]));
const usedKeys = new Set(Object.keys(pool));
const additions = new Map();
const plan = new Map(); // slug → entries
const rejected = [];
const cleanUrl = (u) => String(u || "").trim().replace(/&amp;/g, "&");

function keyFor(source) {
  const author = String(source.author || "").split(/,| y | and /)[0].trim().split(/\s+/).pop() || "fuente";
  const base = `${author}${String(source.title).split(/\s+/).filter((w) => w.length > 3)[0] || ""}`.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-zA-Z]/g, "");
  const stem = base ? base[0].toLowerCase() + base.slice(1) : "fuente";
  let key = `${stem}${source.year || ""}`;
  let n = 2;
  while (usedKeys.has(key)) key = `${stem}${source.year || ""}${n++}`;
  usedKeys.add(key);
  return key;
}

for (const p of proposals) p.source.url = cleanUrl(p.source.url);
const uniqueUrls = [...new Map(proposals.map((p) => [normalizeUrl(p.source.url), p.source.url])).entries()];
const health = new Map(options["sin-red"] ? [] : await mapLimit(uniqueUrls, 6, async ([norm, url]) => [norm, await checkUrl(url)]));

for (const { slug, source, file } of proposals) {
  const record = modules.get(slug);
  if (!record) { rejected.push({ slug, url: source.url, razon: `sin módulo (${file})` }); continue; }
  const url = cleanUrl(source.url);
  const norm = normalizeUrl(url);
  if (!source.title || !source.summary || !source.limitation || !url) { rejected.push({ slug, url, razon: "faltan title/summary/limitation/url" }); continue; }
  const h = health.get(norm);
  if (h && !h.ok && !h.restricted && h.verdict !== "SIN_RESPUESTA") { rejected.push({ slug, url, razon: `URL ${h.verdict} (${h.status ?? h.error})` }); continue; }
  const flags = sourceFlags({ ...source, url }, record).filter((f) => f !== "HTTP_SIN_TLS");
  if (flags.some((f) => f.startsWith("COMPARATIVA_SIN_PARALELO"))) { rejected.push({ slug, url, razon: flags.join(",") }); continue; }
  if (!options.reemplazar && allSources(record).some((s) => normalizeUrl(s.url) === norm)) { rejected.push({ slug, url, razon: "el mito ya la cita" }); continue; }
  let key = poolByUrl.get(norm);
  let isNew = false;
  if (!key) {
    key = keyFor(source);
    isNew = true;
    additions.set(key, { title: source.title, author: source.author, ...(source.year ? { year: source.year } : {}), type: source.type, url, summary: source.summary, limitation: source.limitation });
    poolByUrl.set(norm, key);
  }
  const entries = plan.get(slug) || [];
  if (entries.some((e) => (typeof e === "string" ? e : e.key) === key)) { rejected.push({ slug, url, razon: "propuesta repetida" }); continue; }
  const base = additions.get(key) || pool[key];
  const override = {};
  if (source.summary !== base.summary) override.summary = source.summary;
  if (source.limitation !== base.limitation) override.limitation = source.limitation;
  entries.push(Object.keys(override).length ? { key, ...override } : key);
  plan.set(slug, entries);
  if (h?.verdict === "SIN_RESPUESTA" || h?.restricted || flags.length) rejected.push({ slug, url, razon: `AVISO (se incluye): ${[h?.verdict, ...flags].filter(Boolean).join(",")}` });
  void isNew;
}

console.log(`Consolidación · ${communitySlug} · ${proposals.length} propuestas · ${[...plan.values()].reduce((n, e) => n + e.length, 0)} aceptadas · ${additions.size} obras nuevas en el pool · ${rejected.filter((r) => !r.razon.startsWith("AVISO")).length} rechazadas`);
console.table([...plan.entries()].map(([slug, entries]) => {
  const antes = allSources(modules.get(slug)).length;
  return { slug, antes, propuestas: entries.length, despues: options.reemplazar ? entries.length : antes + entries.length };
}));
if (options.reemplazar) console.log("Modo reemplazo: la lista propuesta sustituye a la que el mito tenía.");
for (const r of rejected) console.log(`  ${r.razon.startsWith("AVISO") ? "·" : "✗"} ${r.slug}: ${r.razon} — ${r.url}`);
if (!options.apply) { console.log("\nDry-run. Añade --apply para escribir el pool y los módulos."); process.exit(0); }

let poolSrc = await fs.readFile(poolPath, "utf8");
// El pool no siempre es el último objeto del archivo: zenú tiene después
// `juanLaraSources`, yucuna `abundanceSources` y afrocolombianos el mapa
// `afroSourceKeysBySlug`. Buscar el último `\n};` metía las obras nuevas en
// el objeto equivocado —y en afrocolombianos convertía doce claves de fuente
// en doce slugs falsos—, así que se cierra el objeto que de verdad es el pool.
const apertura = poolSrc.indexOf(`export const ${poolName} = {`);
if (apertura < 0) throw new Error(`No encuentro la apertura de ${poolName} en ${poolPath}`);
const closing = poolSrc.indexOf("\n};", apertura);
if (closing < 0) throw new Error(`No encuentro el cierre de ${poolName}`);
// No todos los pools envuelven sus entradas en un `source({ … })`: unos pocos
// —misak— son objetos literales sueltos. Escribir la llamada ahí rompe el
// módulo con «source is not defined», así que se mira antes qué usa el archivo.
const envuelve = /\bfunction source\s*\(/.test(poolSrc) || /\bconst source\s*=/.test(poolSrc);
const [abre, cierra] = envuelve ? ["source({", "}),"] : ["{", "},"];
const poolCode = [...additions.entries()].map(([k, o]) => `  ${k}: ${abre}\n    title: ${js(o.title)},\n    author: ${js(o.author)},\n${o.year ? `    year: ${o.year},\n` : ""}    type: ${js(o.type)},\n    url: ${js(o.url)},\n    summary:\n      ${js(o.summary)},\n    limitation:\n      ${js(o.limitation)},\n  ${cierra}`).join("\n");
if (additions.size) poolSrc = `${poolSrc.slice(0, closing)}\n\n  // ——— Búsqueda profunda ${new Date().toISOString().slice(0, 10)} ———\n${poolCode}${poolSrc.slice(closing)}`;
await fs.writeFile(poolPath, poolSrc, "utf8");
if (hasDefinitions && !hasMythFiles) {
  // Disposición `definitions*.mjs`: uno o varios arrays de `myth({ ... })`. Se
  // inserta `sourceKeys` dentro del bloque del mito, después de su `slug:`.
  const sources = new Map();
  for (const file of definitionFiles) sources.set(file, await fs.readFile(file, "utf8"));
  const touched = new Set();
  for (const [slug, entries] of plan) {
    const anchor = new RegExp(`\n    slug: ${js(slug).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")},\n`);
    const file = [...sources.keys()].find((f) => anchor.test(sources.get(f)));
    if (!file) throw new Error(`${slug}: no encuentro su bloque en ningún definitions*.mjs`);
    let src = sources.get(file);
    const at = src.match(anchor);
    // El guardia mira SÓLO el bloque de este mito. Mirando una ventana de
    // caracteres se colaba en el bloque siguiente y daba un falso positivo en
    // cuanto un mito vecino del mismo archivo ya había recibido sus claves.
    const bloque = src.slice(at.index, (() => {
      const cierre = src.indexOf("\n  }),\n", at.index);
      return cierre < 0 ? src.length : cierre;
    })());
    const render = (lista) =>
      lista
        .map((e) =>
          typeof e === "string"
            ? `      ${js(e)},`
            : `      {\n        key: ${js(e.key)},\n${e.summary ? `        summary:\n          ${js(e.summary)},\n` : ""}${e.limitation ? `        limitation:\n          ${js(e.limitation)},\n` : ""}      },`,
        )
        .join("\n");
    const yaDeclara = /\n    sourceKeys: \[/.test(bloque);
    if (yaDeclara && options.reemplazar) {
      // La lista vieja era el reparto en bloque: se va entera y en su lugar
      // queda la que el mito usó de verdad, en el orden en que la propuso.
      const inicio = src.indexOf("\n    sourceKeys: [\n", at.index);
      const fin = src.indexOf("\n    ],\n", inicio);
      if (inicio < 0 || fin < 0) throw new Error(`${slug}: no puedo delimitar su sourceKeys`);
      sources.set(file, src.slice(0, inicio) + `\n    sourceKeys: [\n${render(entries)}` + src.slice(fin));
      touched.add(file);
      continue;
    }
    if (yaDeclara) {
      // El mito ya trae su lista: las nuevas claves se añaden al final de ella,
      // sin tocar las que ya estaban ni su orden.
      const inicio = src.indexOf("\n    sourceKeys: [\n", at.index);
      const fin = src.indexOf("\n    ],\n", inicio);
      if (inicio < 0 || fin < 0) throw new Error(`${slug}: no puedo delimitar su sourceKeys`);
      const existentes = src.slice(inicio, fin);
      const nuevas = entries.filter((e) => {
        const k = typeof e === "string" ? e : e.key;
        return !new RegExp(`(?:"${k}",|key: "${k}",)`).test(existentes);
      });
      if (!nuevas.length) continue;
      sources.set(file, src.slice(0, fin) + `\n${render(nuevas)}` + src.slice(fin));
      touched.add(file);
      continue;
    }
    const keys = options.reemplazar ? entries : [...currentKeys(modules.get(slug)), ...entries];
    const insert = `${at[0]}    sourceKeys: [\n${render(keys)}\n    ],\n`;
    sources.set(file, src.slice(0, at.index) + insert + src.slice(at.index + at[0].length));
    touched.add(file);
  }
  for (const file of touched) await fs.writeFile(file, sources.get(file), "utf8");
  const nombres = [...touched].map((f) => path.basename(f)).join(", ");
  console.log(`Escrito: ${additions.size} claves en ${path.relative(process.cwd(), poolPath)} y sourceKeys de ${plan.size} mitos en ${nombres}. Siguiente: auditar-fuentes → node --test → aplicar-fuentes.`);
  process.exit(0);
}

for (const [slug, entries] of plan) {
  const file = path.join(dir, "myths", `${slug}.mjs`);
  let src = await fs.readFile(file, "utf8");
  const match = src.match(/  sourceKeys: \[[\s\S]*?\n  \],\n/);
  const code = entries.map((e) => (typeof e === "string" ? `    ${js(e)},` : `    {\n      key: ${js(e.key)},\n${e.summary ? `      summary:\n        ${js(e.summary)},\n` : ""}${e.limitation ? `      limitation:\n        ${js(e.limitation)},\n` : ""}    },`)).join("\n");
  if (match && options.reemplazar) {
    // La lista vieja era el reparto en bloque: se va entera.
    src = src.replace(match[0], `  sourceKeys: [\n${code}\n  ],\n`);
  } else if (match) {
    src = src.replace(match[0], match[0].replace(/\n  \],\n$/, `\n${code}\n  ],\n`));
  } else if (options.reemplazar) {
    const anchor = src.match(/\n  tags: \[/) || src.match(/\n  researchNotes:/);
    if (!anchor) throw new Error(`${slug}: no encuentro dónde insertar sourceKeys`);
    src = src.slice(0, anchor.index) + `\n  sourceKeys: [\n${code}\n  ],` + src.slice(anchor.index);
  } else {
    // Comunidades cuyo define aplica una lista por defecto (nasa): el módulo no
    // declara sourceKeys, así que se crea con las claves por defecto más las nuevas.
    const defaults = defaultKeys(poolModule);
    if (!defaults.length) throw new Error(`${slug}: sin sourceKeys y sin lista por defecto en el pool`);
    const anchor = src.match(/\n  tags: \[/) || src.match(/\n  researchNotes:/);
    if (!anchor) throw new Error(`${slug}: no encuentro dónde insertar sourceKeys`);
    src = src.slice(0, anchor.index) + `\n  sourceKeys: [\n${defaults.map((k) => `    ${js(k)},`).join("\n")}\n${code}\n  ],` + src.slice(anchor.index);
  }
  await fs.writeFile(file, src, "utf8");
}
console.log(`Escrito: ${additions.size} claves en ${path.relative(process.cwd(), poolPath)} y sourceKeys en ${plan.size} módulos. Siguiente: auditar-fuentes → node --test → aplicar-fuentes.`);
