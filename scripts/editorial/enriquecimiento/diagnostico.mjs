/**
 * Diagnóstico de comunidades sin abrir una sola ficha.
 *
 *   node scripts/editorial/enriquecimiento/diagnostico.mjs [--comunidades=a,b] [--todas] [--sin-red]
 *
 * Nueve comunidades enseñaron que las mismas cuatro enfermedades se repiten y
 * que todas se ven antes de leer nada:
 *
 *  1. PLANTILLA — los cinco campos miden casi lo mismo en toda la comunidad
 *     porque un constructor, un helper o la mano pegan los mismos párrafos. Se
 *     mide con la dispersión de longitudes y con las oraciones repetidas.
 *  2. NARRADORES — el corpus casi siempre los trae y la ficha casi nunca. Se
 *     mide contando cuántas fichas nombran a alguien en Historia o Versiones.
 *  3. FUENTES EN BLOQUE — las mismas URLs repartidas a toda la comunidad, con
 *     portadas de catálogo entre ellas. Se mide con URLs únicas por mito y con
 *     una lista de dominios que no sostienen un relato.
 *  4. APARATO EN EL RELATO — método y descargos dentro del mito.
 *
 * Y una quinta que apareció al pasar el diagnóstico por todo el sitio: hay
 * fichas que **nunca entraron en la estructura de cinco campos**. Tienen los
 * cinco vacíos y todo el texto en `content`, en un solo bloque. Se ven en la
 * columna «formato»: `5 campos` o `sólo content`. No están vacías —la página
 * sirve el `content`— pero no se pueden validar campo a campo ni reescribir con
 * el importador hasta repartirlas.
 *
 * No toca la red salvo para leer Neon. Es el paso cero de cada comunidad.
 */
import process from "node:process";
import { parseArgs, connect, resolveCommunity, loadDbMyths, words, allSources, hostOf } from "./lib.mjs";

const options = parseArgs(process.argv.slice(2));
const CAMPOS = ["mito", "historia", "versiones", "similitudes"];

/** Dominios que existen para catalogar, no para contar un mito. */
const CATALOGO = [
  /books\.google\./i, /openlibrary\.org/i, /worldcat\.org/i, /redcol\.minciencias/i,
  /\.blogspot\./i, /scribd\.com/i, /academia\.edu/i, /researchgate\.net/i,
  /wikipedia\.org/i, /dialnet\.unirioja\.es\/servlet\/(libro|articulo)\?/i,
];

/** Vocabulario de aparato crítico dentro del Relato. */
const APARATO =
  /\b(la fuente(?! de agua)|las fuentes(?! de agua)|la investigación|el corpus|la monografía|la transcripción|esta página|la ficha|la edición|el índice|la vista|se documenta|no se conoce|no se sabe|se desconoce|el registro|los autores|la revisión)\b/i;

/** Un nombre propio de persona, para saber si la ficha acredita a alguien. */
const NOMBRE = /\b(?:don|doña|taita|mama|capitán|gobernador|exgobernador|narrad(?:or|ora)|relat(?:or|ora)|comuner[oa]|mayor)\b/i;

function oraciones(texto) {
  return String(texto || "")
    .split(/(?<=[.!?])\s+/)
    .map((o) => o.trim().toLowerCase().replace(/\s+/g, " "))
    .filter((o) => o.split(" ").length >= 8);
}

async function diagnosticar(client, slug) {
  const community = await resolveCommunity(client, slug, options);
  const fichas = await loadDbMyths(client, community.id);
  if (!fichas.length) return null;

  // 0 · formato. Las que sólo tienen `content` no se pueden medir por campos.
  const soloContent = fichas.filter(
    (f) => !words(f.mito) && !words(f.historia) && words(f.content),
  ).length;
  const conCampos = fichas.filter((f) => words(f.mito)).length;

  // 1 · plantilla
  const rangos = {};
  for (const campo of CAMPOS) {
    const v = fichas.map((f) => words(f[campo])).filter(Boolean);
    rangos[campo] = v.length ? Math.max(...v) - Math.min(...v) : null;
  }
  const todas = [];
  for (const f of fichas) for (const c of CAMPOS) todas.push(...oraciones(f[c]));
  const cuenta = new Map();
  for (const o of todas) cuenta.set(o, (cuenta.get(o) || 0) + 1);
  const repetidas = [...cuenta.values()].filter((n) => n > 1).reduce((a, b) => a + b, 0);
  const pctRepetidas = todas.length ? (100 * repetidas) / todas.length : 0;

  // 2 · narradores
  const conNombre = fichas.filter((f) => NOMBRE.test(`${f.historia}\n${f.versiones}`)).length;

  // 3 · fuentes
  const urls = new Set();
  const catalogo = new Set();
  let citas = 0;
  for (const f of fichas) {
    for (const s of allSources(f)) {
      citas += 1;
      if (!s?.url) continue;
      urls.add(s.url);
      if (CATALOGO.some((p) => p.test(s.url))) catalogo.add(s.url);
    }
  }
  const dominios = new Set([...urls].map(hostOf).filter(Boolean));

  // 4 · aparato dentro del Relato
  const conAparato = fichas.filter((f) => APARATO.test(f.mito)).length;

  return {
    comunidad: community.name,
    slug,
    mitos: fichas.length,
    formato:
      soloContent === fichas.length
        ? "sólo content"
        : soloContent
          ? `${conCampos} campos / ${soloContent} content`
          : "5 campos",
    "disp.mito": rangos.mito,
    "disp.hist": rangos.historia,
    "disp.vers": rangos.versiones,
    "repetidas %": Number(pctRepetidas.toFixed(1)),
    urls: urls.size,
    "urls/mito": Number((urls.size / fichas.length).toFixed(1)),
    dominios: dominios.size,
    catálogo: catalogo.size,
    "con narrador": `${conNombre}/${fichas.length}`,
    "aparato en relato": `${conAparato}/${fichas.length}`,
  };
}

const client = await connect(options);
let slugs;
if (options.comunidades) slugs = String(options.comunidades).split(",").map((s) => s.trim());
else if (options.todas) {
  const r = await client.query(
    `select co.slug from communities co join myths m on m.community_id = co.id
     group by co.slug order by count(m.id) desc`,
  );
  slugs = r.rows.map((x) => x.slug);
} else throw new Error("Falta --comunidades=a,b o --todas");

const filas = [];
for (const slug of slugs) {
  try {
    const fila = await diagnosticar(client, slug);
    if (fila) filas.push(fila);
  } catch (error) {
    filas.push({ comunidad: slug, slug, mitos: 0, "repetidas %": String(error.message).slice(0, 40) });
  }
}
await client.end();
console.table(filas);
console.log(
  "\nLeer así: dispersión baja en los tres campos = plantilla. «repetidas %» alto = plantilla confirmada.",
);
console.log(
  "«urls/mito» por debajo de 1 = fuentes repartidas en bloque. «catálogo» = portadas que no sostienen un relato.",
);
console.log(
  "«formato: sólo content» = la ficha nunca entró en la estructura de cinco campos; hay que repartirla antes de reescribirla.",
);
