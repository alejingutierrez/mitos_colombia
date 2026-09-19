/**
 * Fase A · importa reescrituras (JSON por mito) a los módulos del repo.
 *
 *   node scripts/editorial/enriquecimiento/importar-texto.mjs --comunidad=wayuu --reescrituras=<dir> [--slugs=a,b] [--apply]
 *
 * Cada JSON trae { slug, mito, historia, versiones, leccion, similitudes,
 * retirar_comparativas?: [claves del pool], matriz?, dudas? }. En dry-run valida
 * cada texto contra el contrato (rangos, lección de una oración, fórmulas
 * prohibidas, ninguna mención a recopiladores o fuentes dentro del Relato) y
 * muestra el cambio de tamaño. Con --apply reemplaza los cinco campos en
 * `editorial/<c>/myths/<slug>.mjs` y quita de `sourceKeys` las comparativas
 * retiradas. Después: node --test del corpus → aplicar-texto → revalidar → verificar --vivo.
 * Cubre dos disposiciones: `myths/<slug>.mjs` con `const <campo> = \`...\`;` y
 * `definitions.mjs` con entradas `myth({ ... })`, donde la reescritura sustituye
 * los núcleos `historyCore`/`versionCore`/`similarityCore` por los campos
 * completos `historia`/`versiones`/`similitudes`.
 */
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";
import { parseArgs, requireCommunity, loadModules, words, normalizeUrl, WORD_RANGES, TEXT_FIELDS } from "./lib.mjs";

const options = parseArgs(process.argv.slice(2));
const communitySlug = requireCommunity(options);
if (!options.reescrituras) throw new Error("Falta --reescrituras=<directorio con <slug>.json>");
const only = options.slugs ? new Set(String(options.slugs).split(",").map((s) => s.trim())) : null;
const root = path.resolve("editorial", String(options.modulos || communitySlug));
const dir = path.join(root, "myths");
// Tres disposiciones conviven en el repo: `myths/<slug>.mjs` con `const campo =
// …`, uno o varios `definitions*.mjs`, y `records.mjs` con las llamadas de
// definición en línea. Las dos últimas se tratan igual: un bloque por mito
// dentro de un array. Ojo: algunas comunidades tienen `myths/` con archivos que
// sólo reexportan desde `records.mjs`, así que no basta con que el directorio
// exista.
const definitionFiles = (await fs.readdir(root).catch(() => []))
  .filter((f) => /^(definitions.*|records)\.mjs$/.test(f))
  .map((f) => path.join(root, f));
const mythFileHasFields = await fs
  .readdir(dir)
  .then(async (files) => {
    const first = files.find((f) => f.endsWith(".mjs"));
    if (!first) return false;
    return /const mito = /.test(await fs.readFile(path.join(dir, first), "utf8"));
  })
  .catch(() => false);
const usesDefinitions = !mythFileHasFields && definitionFiles.length > 0;
const modules = await loadModules(communitySlug, options);
if (!modules) throw new Error(`Sin módulos para ${communitySlug}`);

// Nombres de recopiladores y vocabulario de aparato crítico: el Relato cuenta la
// historia y nada más. Se amplía comunidad a comunidad a medida que entran.
// «Fuente» es la palabra tramposa: en estos corpus andinos una fuente de agua es
// un nacedero, no una referencia bibliográfica, y el Relato la nombra con razón.
const RELATO_PROHIBIDO =
  /\b(chaves|pineda|perrin|paz ipuana|finol|villa posse|jusay[uú]|wilbert|reichel|dolmatoff|tangrutaya|rocha vivas|ni[ñn]o vargas|bolinder|cronista|recopilad|registr[oó]|informante|la fuente(?! de agua| hídrica| termal)|las fuentes(?! de agua| hídricas| termales)|versi[oó]n|el relato|la narraci[oó]n|el cuento|la transcripci[oó]n|la ficha|esta p[aá]gina|la p[aá]gina|la tradici[oó]n|editorial|antrop[oó]log|etn[oó]graf|mitolog[ií]a)\b/i;
const FORMULAS = /desde tiempos inmemoriales|misterio ancestral|el destino estaba escrito|por ahora no tenemos|actualizaremos/i;

// Excepción declarada al mínimo del Relato: cuando la fuente primaria es tan
// breve que llegar al piso sólo se consigue repitiendo, es más fiel un relato
// corto. Exige la razón por escrito y se imprime en cada pasada, para que la
// excepción no pase en silencio.
const MITO_MINIMO_CORTO = 70;

function validate(data) {
  const errors = [];
  const corto = String(data.relato_corto || "").trim();
  for (const [field, [min, max]] of Object.entries(WORD_RANGES)) {
    const n = words(data[field]);
    const piso = field === "mito" && corto ? MITO_MINIMO_CORTO : min;
    if (!data[field]) errors.push(`${field}: vacío`);
    else if (n < piso || n > max) errors.push(`${field}: ${n} palabras, se esperaban ${piso}-${max}`);
  }
  const leccion = String(data.leccion || "").trim();
  if (leccion.includes("\n")) errors.push("leccion: contiene saltos de línea");
  const marks = leccion.match(/[.!?…](?=\s|$)/g) || [];
  if (marks.length !== 1 || !/[.!?…]$/.test(leccion)) errors.push("leccion: debe ser exactamente una oración terminada en punto");
  if (/;/.test(leccion)) errors.push("leccion: contiene punto y coma");
  if (/\b(debemos|hay que|no debes|debes)\b/i.test(leccion)) errors.push("leccion: orden moral");
  const m = String(data.mito || "");
  const hit = m.match(RELATO_PROHIBIDO);
  if (hit) errors.push(`mito: menciona «${hit[0]}» (el Relato sólo cuenta la historia)`);
  for (const f of TEXT_FIELDS) {
    const bad = String(data[f] || "").match(FORMULAS);
    if (bad) errors.push(`${f}: fórmula prohibida «${bad[0]}»`);
    if (/[*_#]{2}|^#+ /m.test(String(data[f] || ""))) errors.push(`${f}: contiene markdown`);
  }
  return errors;
}

const esc = (t) => String(t).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
const files = (await fs.readdir(path.resolve(String(options.reescrituras)))).filter((f) => f.endsWith(".json")).sort();
const rows = [];
const problems = [];
const plans = [];
for (const file of files) {
  const data = JSON.parse(await fs.readFile(path.join(path.resolve(String(options.reescrituras)), file), "utf8"));
  const slug = data.slug || file.replace(/\.json$/, "");
  if (only && !only.has(slug)) continue;
  const current = modules.get(slug);
  if (!current) { problems.push(`${slug}: sin módulo`); continue; }
  const errors = validate(data);
  if (errors.length) problems.push(`${slug}: ${errors.join(" · ")}`);
  rows.push({ slug, mito: `${words(current.mito)}→${words(data.mito)}`, historia: `${words(current.historia)}→${words(data.historia)}`, versiones: `${words(current.versiones)}→${words(data.versiones)}`, leccion: `${words(current.leccion)}→${words(data.leccion)}`, similitudes: `${words(current.similitudes)}→${words(data.similitudes)}`, retirar: (data.retirar_comparativas || []).join(",") || "", dudas: (Array.isArray(data.dudas) ? data.dudas.length : data.dudas ? 1 : 0), ok: errors.length === 0 });
  plans.push({ slug, data });
}
console.table(rows);
for (const p of problems) console.log(`  ✗ ${p}`);
const asList = (v) => (Array.isArray(v) ? v : v ? [String(v)] : []);
for (const { slug, data } of plans) for (const d of asList(data.dudas)) console.log(`  ? ${slug}: ${d}`);
for (const { slug, data } of plans) if (data.relato_corto) console.log(`  ! ${slug}: relato corto bajo el mínimo — ${data.relato_corto}`);
if (!options.apply) { console.log(`\nDry-run: ${plans.length} reescrituras, ${problems.length} con problemas. Añade --apply para escribir los módulos (sólo se escriben las que validan).`); process.exit(problems.length ? 1 : 0); }

// Mapa URL → clave del pool, para retirar por URL las fuentes que la reescritura
// declaró ajenas al mito.
async function poolByUrl() {
  const mod = await import(pathToFileURL(path.join(root, "sources.mjs")).href + `?t=${Date.now()}`);
  const name = Object.keys(mod).find((k) => /Sources$/.test(k) && typeof mod[k] === "object");
  return new Map(Object.entries(mod[name] || {}).map(([k, v]) => [normalizeUrl(v.url), k]));
}

// Localiza el bloque de un slug: la llamada de definición que lo envuelve, se
// llame `myth({`, `defineChamiMyth({` o como sea. Se busca hacia atrás la
// apertura más cercana con esa forma, y hacia adelante su cierre.
function blockRange(src, slug) {
  const at = src.indexOf(`\n    slug: ${JSON.stringify(slug)},\n`);
  if (at < 0) throw new Error(`${slug}: no encuentro su bloque`);
  // Se incluye el salto de línea que está en `at`: cuando `slug` es el primer
  // campo del bloque, ese salto es a la vez el cierre de la línea de apertura,
  // y dejarlo fuera hacía invisible la apertura del primer mito del archivo.
  const antes = src.slice(0, at + 1);
  const aperturas = [...antes.matchAll(/\n  [A-Za-z_$][\w$]*\(\{\n/g)];
  const ultima = aperturas[aperturas.length - 1];
  if (!ultima) throw new Error(`${slug}: no encuentro la apertura de su bloque`);
  const end = src.indexOf("\n  }),\n", at);
  if (end < 0) throw new Error(`${slug}: bloque sin cierre`);
  return [ultima.index, end + "\n  }),\n".length];
}

if (usesDefinitions) {
  const urlKeys = await poolByUrl();
  const sources = new Map();
  for (const file of definitionFiles) sources.set(file, await fs.readFile(file, "utf8"));
  const fileFor = (slug) => {
    const hit = [...sources].find(([, src]) => src.includes(`\n    slug: ${JSON.stringify(slug)},\n`));
    if (!hit) throw new Error(`${slug}: no encuentro su bloque en ningún definitions*.mjs`);
    return hit[0];
  };
  const touched = new Set();
  let count = 0;
  for (const { slug, data } of plans) {
    if (problems.some((p) => p.startsWith(`${slug}:`))) continue;
    const file = fileFor(slug);
    let src = sources.get(file);
    const [start, end] = blockRange(src, slug);
    let block = src.slice(start, end);
    // El nombre del campo de origen varía por comunidad: `historyCore`,
    // `historia`, o `history` donde un envoltorio compone las capas.
    for (const [alternativas, field] of [
      [["historyCore", "historia", "history"], "historia"],
      [["versionCore", "versiones", "versions"], "versiones"],
      [["similarityCore", "similitudes", "similarities"], "similitudes"],
    ]) {
      const core = alternativas.join("|");
      const literal = new RegExp(`\n    (?:${core}):\\s*(?:"[\\s\\S]*?"|\`[\\s\\S]*?\`),\n`);
      // Algunas comunidades componen la capa con una plantilla compartida
      // —`historia: composeRioFrioHistory({ … }),`—, que es justo lo que la
      // reescritura sustituye por un texto propio.
      const compuesto = new RegExp(`\n    (?:${core}): [A-Za-z0-9_$]+\\(\\{[\\s\\S]*?\n    \\}\\),\n`);
      const nuevo = `\n    ${field}: \`${esc(data[field].trim())}\`,\n`;
      // Y una tercera forma: el campo es un objeto literal que un envoltorio
      // pasa a la plantilla —`history: { sourceFocus: …, … },`—.
      const objeto = new RegExp(`\n    (?:${core}): \\{[\\s\\S]*?\n    \\},\n`);
      // Y una cuarta: la plantilla recibe sus trozos como argumentos sueltos
      // —`historia: history(\`…\`, \`…\`),`— en vez de como un objeto. Es la
      // disposición de panán.
      const llamada = new RegExp(`\n    (?:${core}): [A-Za-z0-9_$]+\\(\n[\\s\\S]*?\n    \\),\n`);
      if (literal.test(block)) block = block.replace(literal, nuevo);
      else if (compuesto.test(block)) block = block.replace(compuesto, nuevo);
      else if (objeto.test(block)) block = block.replace(objeto, nuevo);
      else if (llamada.test(block)) block = block.replace(llamada, nuevo);
      else throw new Error(`${slug}: no encuentro ninguno de ${core}`);
    }
    const reMito = /\n    mito:\s*(?:"[\s\S]*?"|`[\s\S]*?`),\n/;
    if (!reMito.test(block)) throw new Error(`${slug}: no encuentro mito`);
    block = block.replace(reMito, `\n    mito: \`${esc(data.mito.trim())}\`,\n`);
    const reLec = /\n    leccion:\s*(?:"[\s\S]*?"|`[\s\S]*?`),\n/;
    if (!reLec.test(block)) throw new Error(`${slug}: no encuentro la lección`);
    block = block.replace(reLec, `\n    leccion:\n      ${JSON.stringify(data.leccion.trim())},\n`);
    // La excepción al mínimo del Relato vive en el módulo, con su razón escrita,
    // para que el validador compartido y el verificador en vivo la respeten.
    const reCorto = /\n    relatoCorto:\s*(?:"[\s\S]*?"|`[\s\S]*?`),\n/;
    const corto = String(data.relato_corto || "").trim();
    if (corto) {
      const linea = `\n    relatoCorto:\n      ${JSON.stringify(corto)},\n`;
      block = reCorto.test(block)
        ? block.replace(reCorto, linea)
        : block.replace(/(\n    slug: "[^"]+",\n)/, `$1${linea.slice(1)}`);
    } else if (reCorto.test(block)) {
      block = block.replace(reCorto, "\n");
    }
    for (const url of data.fuentes_que_no_aplican || []) {
      const key = urlKeys.get(normalizeUrl(url));
      if (!key) { console.log(`  · ${slug}: ${url} no está en el pool`); continue; }
      const before = block;
      block = block
        .replace(new RegExp(`\n      ${JSON.stringify(key)},`), "")
        .replace(new RegExp(`\n      \\{\n        key: ${JSON.stringify(key)},[\\s\\S]*?\n      \\},`), "");
      if (block === before) console.log(`  · ${slug}: ${key} no estaba en sus sourceKeys`);
    }
    sources.set(file, src.slice(0, start) + block + src.slice(end));
    touched.add(file);
    count += 1;
  }
  for (const file of touched) await fs.writeFile(file, sources.get(file), "utf8");
  const nombres = [...touched].map((f) => path.basename(f)).join(", ");
  console.log(`Escritos ${count} mitos en ${nombres}. Siguiente: node --test scripts/editorial/${communitySlug}-corpus.test.mjs → aplicar-texto.mjs`);
  process.exit(0);
}

let written = 0;
for (const { slug, data } of plans) {
  if (problems.some((p) => p.startsWith(`${slug}:`))) continue;
  const file = path.join(dir, `${slug}.mjs`);
  let src = await fs.readFile(file, "utf8");
  for (const f of ["mito", "historia", "versiones", "similitudes"]) {
    const literal = new RegExp(`const ${f} = \`[\\s\\S]*?\`;\\n`);
    // Algunas comunidades (nasa) componen estos campos con una plantilla
    // compartida —`const historia = composeNasaHistory({...});`—, que es
    // justamente lo que la reescritura sustituye por un texto propio.
    const composed = new RegExp(`const ${f} = [A-Za-z0-9_]+\\(\\{[\\s\\S]*?\\n\\}\\);\\n`);
    const replacement = `const ${f} = \`${esc(data[f].trim())}\`;\n`;
    if (literal.test(src)) src = src.replace(literal, replacement);
    else if (composed.test(src)) src = src.replace(composed, replacement);
    else throw new Error(`${slug}: no encuentro const ${f}`);
  }
  // Si ya no queda ninguna llamada a la plantilla, sobra su import.
  if (!/compose[A-Za-z]+\(/.test(src)) {
    src = src.replace(/import \{[^}]*\} from "\.\.\/compose-sections\.mjs";\n/, "");
  }
  const reL = /const leccion =\s*(?:"[\s\S]*?"|`[\s\S]*?`);\n/;
  if (reL.test(src)) {
    src = src.replace(reL, `const leccion =\n  ${JSON.stringify(data.leccion.trim())};\n`);
  } else {
    // Otras comunidades la declaran dentro del objeto: `  leccion: "…",`
    const inline = /\n  leccion:\s*(?:"[\s\S]*?"|`[\s\S]*?`),\n/;
    if (!inline.test(src)) throw new Error(`${slug}: no encuentro la lección`);
    src = src.replace(inline, `\n  leccion:\n    ${JSON.stringify(data.leccion.trim())},\n`);
  }
  for (const key of data.retirar_comparativas || []) {
    const before = src;
    src = src.replace(new RegExp(`\\n    ${JSON.stringify(key)},`), "").replace(new RegExp(`\\n    \\{\\n      key: ${JSON.stringify(key)},[\\s\\S]*?\\n    \\},`), "");
    if (src === before) console.log(`  · ${slug}: la comparativa ${key} no estaba en sourceKeys`);
  }
  await fs.writeFile(file, src, "utf8");
  written += 1;
}
console.log(`Escritos ${written} módulos en ${path.relative(process.cwd(), dir)}. Siguiente: node --test scripts/editorial/${communitySlug}-corpus.test.mjs → aplicar-texto.mjs`);
