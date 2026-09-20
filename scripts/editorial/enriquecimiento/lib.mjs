/**
 * Kit de enriquecimiento editorial: reescritura (Fase A) y fuentes (Fase B).
 *
 * Verdad operativa que todos los scripts asumen:
 *
 *   - La FUENTE DE VERDAD es el módulo del repo (`editorial/<comunidad>/`),
 *     nunca Neon. Neon es lo publicado; el módulo es lo que se puede revisar,
 *     versionar y reproducir. Un cambio hecho sólo en Neon es deriva.
 *   - El texto público (mito, historia, versiones, leccion, similitudes,
 *     content, excerpt, seo_*) lo lee la página desde `myths`; las fuentes
 *     (`sources_json`, `key_sources_json`) las lee desde `editorial_myths`.
 *     Fase A escribe en las dos tablas; Fase B sólo en `editorial_myths`.
 *   - Toda escritura es dry-run por defecto, respalda antes y va en una
 *     transacción. Después de escribir hay que purgar la caché con
 *     `revalidar.mjs`: `vercel --prod` NO es el camino (sube el disco).
 */
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { pathToFileURL } from "node:url";
import dotenv from "dotenv";
import pg from "pg";

const { Client } = pg;
const execFileAsync = promisify(execFile);

export const TEXT_FIELDS = ["mito", "historia", "versiones", "leccion", "similitudes"];
export const HEADINGS = { mito: "Mito", historia: "Historia", versiones: "Versiones", leccion: "Lección", similitudes: "Similitudes" };
/**
 * Piso del Relato cuando el mito declara `relatoCorto` con su razón. Setenta
 * palabras es el tamaño de las transcripciones más breves que existen en estos
 * corpus —el relato 14 de Río Frío, por ejemplo—, así que por debajo de ahí ya
 * no hay narración que contar. El guardia de verdad es la razón por escrito, no
 * el número.
 */
export const MITO_MINIMO_CORTO = 70;

export const WORD_RANGES = {
  mito: [300, 650],
  historia: [220, 600],
  versiones: [170, 550],
  leccion: [8, 22],
  similitudes: [150, 450],
};
export const MIN_SOURCES = 5;
export const TARGET_SOURCES = 8;
export const MIN_HOSTS = 3;
export const USER_AGENT = "MitosColombiaEditorialAudit/1.0 (+https://www.mitosdecolombia.com)";
export const BROWSER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36";

/** Dominios que sólo valen como comparación: exigen que Similitudes nombre el paralelo. */
export const COMPARATIVE_HOSTS = [
  { host: /ovid\.lib\.virginia\.edu/i, mentions: /ovidio|metamorfosis|orfeo|eur[ií]dice/i, label: "Ovidio" },
  { host: /mesoweb\.com/i, mentions: /popol\s*vuh|k['’]?iche|maya/i, label: "Popol Vuh" },
  { host: /perseus\.tufts\.edu/i, mentions: /hes[ií]odo|prometeo|teogon[ií]a|griego|griega/i, label: "Hesíodo" },
  { host: /biblegateway\.com/i, mentions: /biblia|b[ií]blico|g[ée]nesis|no[ée]/i, label: "Biblia" },
  { host: /worldhistory\.org/i, mentions: /./, label: "World History Encyclopedia" },
  { host: /metmuseum\.org/i, mentions: /./, label: "Met Museum" },
];

/** Dominios de relleno: se aceptan sólo con limitación declarada y nunca como fuente clave. */
export const WEAK_HOSTS = [/wikipedia\.org/i, /pueblosoriginarios\.com/i, /uniquecolombia\.com/i, /profesorenlinea\.cl/i, /tumblr\.com/i, /scribd\.com/i, /pueblosindigenas\.es/i];

/**
 * Catálogos: responden 200 y no contienen el relato. Una portada de WorldCat,
 * una ficha de Open Library o un registro de metadatos pasan cualquier
 * comprobación de salud de URL y no sostienen nada. En andoque, once de catorce
 * fichas declaraban como fuente narrativa la portada de Google Books del libro
 * del que salían.
 */
export const CATALOG_HOSTS = [
  /books\.google\./i,
  /openlibrary\.org/i,
  /worldcat\.org/i,
  /ci\.nii\.ac\.jp/i,
  /redcol\.minciencias/i,
  /dialnet\.unirioja\.es\/servlet\/(libro|articulo)\?/i,
  /\/opac_css\//i,
  /vitalsource\.com/i,
  /jstor\.org\/publisher\//i,
];

/**
 * Copias sin editor. Si la obra vale, se cita por su editor o por su ficha
 * institucional. Son 172 citas en el corpus mestizo y mixto.
 */
export const MIRROR_HOSTS = [
  /scribd\.com/i, /docslib\.org/i, /1library\./i, /academia\.edu/i,
  /researchgate\.net/i, /studylib\./i, /dokumen\.pub/i, /vdocuments\./i,
  /coursehero\.com/i, /pdfcoffee\.com/i, /idoc\.pub/i,
];

/**
 * Relleno: documentos reales que no dicen nada de ningún relato concreto. La
 * Convención del Patrimonio Inmaterial está citada 34 veces y la declaratoria
 * de Cartagena otras 33, en fichas de aparecidos.
 *
 * Excepción: un expediente PES o una ficha de inventario que SÍ trate el relato
 * concreto entra; lo que no entra es la Convención genérica ni la declaratoria.
 * Por eso se mira la ruta, no sólo el dominio.
 */
export const FILLER_URLS = [
  /ich\.unesco\.org\/en\/convention/i,
  /ich\.unesco\.org\/es\/convenci/i,
  /whc\.unesco\.org\/en\/list\//i,
  /whc\.unesco\.org\/es\/list\//i,
  /unesco\.org\/[a-z-]*\/?$/i,
];

/** Agregadores y blogs de turismo: sin autoría ni registro. */
export const TOURISM_HOSTS = [
  /zonaturistica/i, /colombia\.travel/i, /tripadvisor\./i, /civitatis\./i,
  /viajaporcolombia/i, /donde-?ir/i, /top\d+/i,
];

/** El sitio y sus espejos: circularidad. En este corpus el riesgo es máximo. */
export const SELF_HOSTS = [/mitosdecolombia\.com/i, /mitos-?de-?colombia/i];

/**
 * Clasifica una URL contra las listas propias del bloque mestizo y mixto.
 * Devuelve la etiqueta del primer motivo de rechazo, o null si pasa.
 */
export function fuenteVetada(url) {
  const u = String(url || "");
  if (!u) return null;
  if (SELF_HOSTS.some((r) => r.test(u))) return "CIRCULAR";
  if (MIRROR_HOSTS.some((r) => r.test(u))) return "COPIA_SIN_EDITOR";
  if (CATALOG_HOSTS.some((r) => r.test(u))) return "CATALOGO";
  if (FILLER_URLS.some((r) => r.test(u))) return "RELLENO";
  if (TOURISM_HOSTS.some((r) => r.test(u))) return "TURISMO";
  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// Medidas de prosa (spec-mestizos-y-mixtos §5.3)
//
// «Mejorar la redacción» tenía que dejar de ser una opinión. Son cuatro
// números, y cada uno nació de un defecto medido en el lote heredado.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Umbrales del bloque, CALIBRADOS el 2026-09-19 contra los dos corpus que ya
 * existen: 67 mitos aprobados (wayuu + muisca) y los ocho marcos de plantilla
 * de `caribe-mestizo-final`. Los del spec estaban escritos a ojo y dos de los
 * cuatro no resistían el contraste:
 *
 *   medida      corpus aprobado          plantilla heredada    veredicto
 *   ─────────────────────────────────────────────────────────────────────────
 *   TTR         0,473 – 0,653            0,657 – 0,764         NO discrimina:
 *               (mediana 0,567)                                el texto malo
 *                                                              puntúa MÁS alto,
 *                                                              porque es prosa
 *                                                              abstracta, no
 *                                                              relleno repetido.
 *                                                              Sigue valiendo
 *                                                              como piso.
 *   adjetivos   0 – 2,1 % (med. 1,0 %)   3,8 – 8,6 %           DISCRIMINA. Es
 *                                                              la única de las
 *                                                              cuatro que separa
 *                                                              limpiamente.
 *   mediana     7 – 21 (mediana 10)      15 – 20               NO discrimina, y
 *                                                              el rango 12-22
 *                                                              del spec suspendía
 *                                                              a 11 de cada 12
 *                                                              fichas wayuu.
 *   oración     hasta 61 palabras        hasta 32              el corpus bueno
 *   máxima                                                     se pasa de 45: es
 *                                                              aviso, no bloqueo.
 *
 * Lo que de verdad destapa la plantilla no es ninguna de las cuatro: es
 * `repeticion()` entre fichas del ciclo (86,6 % en caribe) y `aperturaFirma()`.
 */
export const PROSA = {
  // Bloquean.
  ttrMinimo: 0.45,        // piso; el corpus aprobado no baja de 0,473
  adjetivosMaximo: 0.03,  // aprobado ≤ 2,1 % · heredado ≥ 3,8 %
  repeticionMaxima: 2,    // % de oraciones repetidas dentro del ciclo
  // Avisan.
  oracionMaxima: 45,      // el spec lo pedía; el corpus bueno llega a 61
  medianaMinima: 8,
  medianaMaxima: 22,
};

const PALABRA = /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ][A-Za-zÁÉÍÓÚÜÑáéíóúüñ'’-]*/g;

export function tokens(texto) {
  return (String(texto || "").toLowerCase().match(PALABRA) || []);
}

/** Oraciones de un texto, en crudo (para medir) o normalizadas (para comparar). */
export function sentences(texto, { normalizar = false } = {}) {
  const partes = String(texto || "")
    .split(/(?<=[.!?…])\s+/)
    .map((o) => o.trim())
    .filter(Boolean);
  if (!normalizar) return partes;
  return partes.map((o) => o.toLowerCase().replace(/\s+/g, " ").replace(/[«»"“”]/g, ""));
}

/**
 * Riqueza léxica (type-token ratio). El relleno repite las mismas veinte
 * palabras: 0,30 frente al 0,45 del resto del corpus.
 *
 * El TTR cae con la longitud del texto, así que se mide sobre una ventana fija
 * de 300 tokens —el mínimo del Relato— y no sobre el texto entero: si no, un
 * mito de 640 palabras suspende por ser largo y uno de 310 aprueba por ser corto.
 */
export function ttr(texto, ventana = 300) {
  const t = tokens(texto);
  if (!t.length) return null;
  if (t.length <= ventana) return Number((new Set(t).size / t.length).toFixed(3));
  let suma = 0;
  let n = 0;
  for (let i = 0; i + ventana <= t.length; i += ventana) {
    suma += new Set(t.slice(i, i + ventana)).size / ventana;
    n += 1;
  }
  const resto = t.length % ventana;
  if (resto >= ventana / 2) {
    suma += new Set(t.slice(-ventana)).size / ventana;
    n += 1;
  }
  return Number((suma / n).toFixed(3));
}

/**
 * Sufijos adjetivales del español. No es un etiquetador morfológico —no lo
 * necesitamos— sino un detector de grandilocuencia: mide la proporción de
 * palabras con forma de adjetivo valorativo, que es lo que infla esta prosa.
 */
/**
 * Detector de grandilocuencia, no etiquetador morfológico. Marca las formas
 * inequívocamente adjetivales del español —las que no se confunden con un
 * sustantivo— y deja fuera a propósito los adjetivos en -o/-a simples («viejo»,
 * «negra»), porque separarlos de «perro» y «casa» exige un analizador y no hace
 * falta: la prosa inflada no se infla con «viejo», se infla con «tenebroso»,
 * «inconmensurable» y «ancestral».
 *
 * Por eso el umbral NO es el 8 % de tokens que escribió el spec a ojo: se fijó
 * midiendo el corpus ya aprobado contra el heredado (ver PROSA más arriba).
 */
const ADJETIVO = new RegExp(
  "^(?:" +
    [
      "[a-záéíóúñ]{3,}(?:ísim|érrim)[oa]s?",        // superlativos
      "[a-záéíóúñ]{3,}os[oa]s?",                    // -oso / -osa
      "[a-záéíóúñ]{3,}(?:abl|ibl)es?",              // -able / -ible
      "[a-záéíóúñ]{3,}ient[oa]s?",                  // -iento
      "[a-záéíóúñ]{4,}(?:al|ales)",                 // -al
      "[a-záéíóúñ]{3,}iv[oa]s?",                    // -ivo
      "[a-záéíóúñ]{4,}(?:ante|antes|ente|entes)",   // -ante / -ente
      "[a-záéíóúñ]{3,}(?:und|end)[oa]s?",           // -undo / -endo
      "[a-záéíóúñ]{3,}(?:izo|iza|izos|izas)",       // -izo
      "[a-záéíóúñ]{3,}(?:esc[oa]s?)",               // -esco
      "[a-záéíóúñ]{3,}(?:ífic[oa]s?)",              // -ífico
      "[a-záéíóúñ]{3,}(?:bundo|bunda)s?",           // -bundo
      "[a-záéíóúñ]{3,}(?:áce[oa]|íne[oa]|óre[oa])s?",
      // -ario/-orio queda FUERA a propósito: produce más sustantivos
      // («memoria», «territorio», «campanario») que adjetivos.
      "in[a-záéíóúñ]{4,}(?:o|a|os|as|e|es)",        // in- privativo
    ].join("|") +
    ")$",
  "i",
);

/** Palabras frecuentes que caen en los sufijos de arriba y no son adjetivos. */
const NO_ADJ = new Set([
  "cuando", "cuanto", "cuantos", "cuantas", "durante", "mediante", "entonces",
  "general", "animal", "final", "local", "capital", "canal", "corral", "metal",
  "total", "igual", "real", "cristal", "umbral", "portal", "cardenal", "caudal",
  "arenal", "maizal", "cañaveral", "catedral", "hospital", "funeral", "carnaval",
  "arrabal", "matorral", "manantial", "material", "pedestal", "ritual", "animales",
  "canales", "corrales", "metales", "umbrales", "portales", "rituales", "materiales",
  "delante", "adelante", "comerciante", "habitante", "estudiante", "cantante",
  "viajante", "amante", "sirviente", "teniente", "presidente", "cliente",
  "pariente", "diente", "puente", "monte", "horizonte", "corriente", "torrente",
  "accidente", "instante", "semblante", "guante", "elefante", "gigante",
  "diamante", "comandante", "ayudante", "vigilante", "navegante", "tratante",
  "danzante", "habitantes", "comerciantes", "estudiantes", "parientes", "dientes",
  "puentes", "montes", "gente", "frente", "muerte", "suerte", "fuente", "fuentes",
  "hombre", "nombre", "sangre", "hambre", "madre", "padre", "noche", "tarde",
  "vivo", "vivos", "viva", "vivas", "nativo", "nativos",
])

export function adjetivos(texto) {
  const t = tokens(texto);
  if (!t.length) return { total: 0, cuantos: 0, ratio: null, muestra: [] };
  const marcados = t.filter((w) => w.length > 4 && !NO_ADJ.has(w) && ADJETIVO.test(w));
  return {
    total: t.length,
    cuantos: marcados.length,
    ratio: Number((marcados.length / t.length).toFixed(3)),
    muestra: [...new Set(marcados)].slice(0, 12),
  };
}

/** Ritmo: la mediana y el máximo, que es lo que la metodología pedía y nadie medía. */
export function ritmo(texto) {
  const largos = sentences(texto).map((o) => tokens(o).length).filter((n) => n > 0);
  if (!largos.length) return { oraciones: 0, mediana: null, maxima: null, largas: [] };
  const orden = [...largos].sort((a, b) => a - b);
  const mitad = Math.floor(orden.length / 2);
  const mediana = orden.length % 2 ? orden[mitad] : Math.round((orden[mitad - 1] + orden[mitad]) / 2);
  return {
    oraciones: largos.length,
    mediana,
    maxima: Math.max(...largos),
    largas: sentences(texto).filter((o) => tokens(o).length > PROSA.oracionMaxima),
  };
}

/**
 * Firma sintáctica de la apertura: las primeras cuatro palabras reducidas a su
 * categoría gruesa. Siete de las ocho fichas de Piedecuesta empiezan igual y
 * ninguna comparte una oración literal, así que comparar texto no basta.
 */
const DET = /^(el|la|los|las|un|una|unos|unas|este|esta|estos|estas|ese|esa|aquel|aquella|su|sus|mi|tu)$/;
const PREP = /^(a|ante|bajo|con|contra|de|desde|durante|en|entre|hacia|hasta|para|por|según|sin|sobre|tras|al|del)$/;
const CONJ = /^(y|e|o|u|pero|aunque|cuando|mientras|porque|si|que|como|donde|aún|todavía)$/;

export function aperturaFirma(texto, n = 4) {
  const primera = sentences(texto)[0];
  if (!primera) return null;
  return tokens(primera)
    .slice(0, n)
    .map((w) => (DET.test(w) ? "D" : PREP.test(w) ? "P" : CONJ.test(w) ? "C" : "X"))
    .join("");
}

/** Fórmulas prohibidas propias de este bloque (spec §5.3), más las de siempre. */
export const FORMULAS = [
  /desde tiempos inmemoriales/i,
  /un misterio ancestral/i,
  /sabidur[ií]a ancestral/i,
  /el destino estaba escrito/i,
  /cuenta la leyenda que/i,
  /dicen los abuelos que/i,
  /nadie sabe a ciencia cierta/i,
  /lo cierto es que/i,
  /se pierde en la noche de los tiempos/i,
  /como por arte de magia/i,
];

/** Las cuatro medidas de §5.3 sobre un texto, con su veredicto. */
export function medirProsa(texto) {
  const r = ritmo(texto);
  const a = adjetivos(texto);
  const t = ttr(texto);
  const fallos = [];
  const avisos = [];
  if (t !== null && t < PROSA.ttrMinimo) fallos.push(`TTR ${t} < ${PROSA.ttrMinimo}`);
  if (a.ratio !== null && a.ratio > PROSA.adjetivosMaximo) {
    fallos.push(`adjetivos ${(a.ratio * 100).toFixed(1)}% > ${(PROSA.adjetivosMaximo * 100).toFixed(0)}% (${a.muestra.slice(0, 6).join(", ")})`);
  }
  for (const f of FORMULAS) {
    const m = String(texto || "").match(f);
    if (m) fallos.push(`fórmula prohibida: «${m[0]}»`);
  }
  if (r.largas.length) avisos.push(`${r.largas.length} oración(es) de más de ${PROSA.oracionMaxima} palabras`);
  if (r.mediana !== null && (r.mediana < PROSA.medianaMinima || r.mediana > PROSA.medianaMaxima)) {
    avisos.push(`mediana ${r.mediana} fuera de ${PROSA.medianaMinima}-${PROSA.medianaMaxima}`);
  }
  return {
    ttr: t, adjetivos: a.ratio, mediana: r.mediana, maxima: r.maxima,
    oraciones: r.oraciones, apertura: aperturaFirma(texto), fallos, avisos,
  };
}

/**
 * Repetición dentro de un conjunto de fichas: el porcentaje de oraciones que
 * aparecen en más de una. Es la medida que destapó el 86,6 % de
 * `caribe-mestizo-final`. Cuenta oraciones de 7+ palabras, que es el umbral
 * del spec §5.2.
 */
export function repeticion(fichas, campos = TEXT_FIELDS) {
  const todas = [];
  const porOracion = new Map();
  for (const f of fichas) {
    const vistas = new Set();
    for (const c of campos) {
      for (const o of sentences(f[c], { normalizar: true })) {
        if (tokens(o).length < 7) continue;
        todas.push(o);
        if (vistas.has(o)) continue;
        vistas.add(o);
        if (!porOracion.has(o)) porOracion.set(o, []);
        porOracion.get(o).push(f.slug || f.titulo || "?");
      }
    }
  }
  const compartidas = [...porOracion.entries()].filter(([, fs]) => fs.length > 1);
  const repetidas = todas.filter((o) => (porOracion.get(o) || []).length > 1).length;
  return {
    oraciones: todas.length,
    repetidas,
    pct: todas.length ? Number(((100 * repetidas) / todas.length).toFixed(1)) : 0,
    peores: compartidas.sort((a, b) => b[1].length - a[1].length).slice(0, 10)
      .map(([o, fs]) => ({ oracion: o.slice(0, 110), fichas: fs.length })),
  };
}

export function parseArgs(argv, defaults = {}) {
  const options = { ...defaults, _: [] };
  for (const arg of argv) {
    if (arg.startsWith("--")) {
      const [key, value] = arg.slice(2).split("=");
      options[key] = value === undefined ? true : value;
    } else options._.push(arg);
  }
  return options;
}

export function requireCommunity(options) {
  const slug = String(options.comunidad || "").trim();
  if (!slug) throw new Error("Falta --comunidad=<slug de la comunidad en Neon>, p. ej. --comunidad=wayuu");
  return slug;
}

export function words(value) {
  return String(value || "").trim().split(/\s+/).filter(Boolean).length;
}

export function composeContent(record) {
  return TEXT_FIELDS.map((f) => `${HEADINGS[f]}\n${record[f]}`).join("\n\n");
}

export function normalizeUrl(value) {
  const raw = String(value || "").trim();
  try {
    const parsed = new URL(raw);
    parsed.hash = "";
    return parsed.toString().replace(/\/+$/, "").toLowerCase();
  } catch {
    return raw.replace(/\/+$/, "").toLowerCase();
  }
}

export function hostOf(value) {
  try {
    return new URL(String(value)).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

export function parseJsonArray(value) {
  if (Array.isArray(value)) return value;
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function loadEnv(options) {
  dotenv.config({ path: path.resolve(String(options.env || ".env")), quiet: true });
}

export function connectionString() {
  return (
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL
  );
}

export async function connect(options) {
  loadEnv(options);
  const cs = connectionString();
  if (!cs) throw new Error(`No hay conexión Postgres en ${options.env || ".env"} (POSTGRES_URL_NON_POOLING o POSTGRES_URL).`);
  const client = new Client({ connectionString: cs, ssl: { rejectUnauthorized: false } });
  await client.connect();
  return client;
}

export async function resolveCommunity(client, slug, options = {}) {
  const r = await client.query(
    `SELECT c.id, c.name, c.slug, r.slug AS region_slug,
            (SELECT COUNT(*)::int FROM myths m WHERE m.community_id = c.id) AS myth_count
     FROM communities c JOIN regions r ON r.id = c.region_id
     WHERE c.slug = $1 AND ($2::text = '' OR r.slug = $2) ORDER BY r.slug`,
    [slug, String(options.region || "")],
  );
  if (r.rowCount === 1) return r.rows[0];
  if (!r.rowCount) throw new Error(`No existe la comunidad ${slug}${options.region ? ` en la región ${options.region}` : ""}.`);
  // El mismo slug puede existir en dos regiones (nasa-paeces está en andina, vacía, y en pacifico):
  // si sólo una tiene mitos, es ésa; si no, hay que decir --region=<slug>.
  const withMyths = r.rows.filter((x) => x.myth_count > 0);
  if (withMyths.length === 1) return withMyths[0];
  throw new Error(`Comunidad ambigua: ${slug} existe en ${r.rows.map((x) => `${x.region_slug} (${x.myth_count} mitos)`).join(", ")}. Usa --region=<slug>.`);
}

/** Lo publicado, por slug exacto: texto desde `myths`, fuentes desde `editorial_myths`. */
export async function loadDbMyths(client, communityId) {
  const r = await client.query(
    `SELECT m.id, m.slug, m.title, m.mito, m.historia, m.versiones, m.leccion, m.similitudes,
            m.content, m.excerpt, m.seo_title, m.seo_description, m.updated_at,
            e.id AS editorial_id, e.sources_json, e.key_sources_json, e.research_notes,
            e.mito AS e_mito, e.historia AS e_historia, e.versiones AS e_versiones,
            e.leccion AS e_leccion, e.similitudes AS e_similitudes, e.content AS e_content,
            e.updated_at AS editorial_updated_at
     FROM myths m LEFT JOIN editorial_myths e ON e.source_myth_id = m.id
     WHERE m.community_id = $1 ORDER BY m.slug`,
    [communityId],
  );
  return r.rows.map((row) => ({
    ...row,
    sources: parseJsonArray(row.sources_json),
    keySources: parseJsonArray(row.key_sources_json),
  }));
}

/**
 * Los módulos de la comunidad. Dos disposiciones conviven en el repo:
 *   editorial/<com>/myths/<slug>.mjs   (muisca, wayuu, nasa)
 *   editorial/<com>/records.mjs        (el resto: un array de expedientes)
 * Devuelve Map slug → expediente, o null si la comunidad no tiene módulos.
 */
export async function loadModules(communitySlug, options = {}) {
  // El slug de Neon y la carpeta de editorial/ no siempre coinciden (nasa-paeces → editorial/nasa):
  // sin --modulos, se prueba el slug completo y después su primer tramo.
  let dir = path.resolve("editorial", String(options.modulos || communitySlug));
  if (!options.modulos) {
    const candidates = [communitySlug, communitySlug.split("-")[0]];
    for (const c of candidates) {
      try { await fs.access(path.resolve("editorial", c)); dir = path.resolve("editorial", c); break; } catch {}
    }
  }
  const mythsDir = path.join(dir, "myths");
  const records = new Map();
  try {
    const files = (await fs.readdir(mythsDir)).filter((n) => n.endsWith(".mjs")).sort();
    for (const file of files) {
      const { default: data } = await import(pathToFileURL(path.join(mythsDir, file)).href);
      records.set(data.slug, data);
    }
    return records;
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  try {
    const { default: list } = await import(pathToFileURL(path.join(dir, "records.mjs")).href);
    for (const data of list) records.set(data.slug, data);
    return records;
  } catch (error) {
    if (error.code !== "ENOENT" && error.code !== "ERR_MODULE_NOT_FOUND") throw error;
  }
  return null;
}

export function allSources(record) {
  return [...(record.keySources || []), ...(record.sources || [])];
}

/** Invariantes del expediente. Devuelve la lista de errores (vacía = pasa). */
export function validateRecord(record, { texto = true, fuentes = true } = {}) {
  const errors = [];
  if (texto) {
    // Un mito puede declarar `relatoCorto: "<razón>"` cuando su fuente primaria
    // es tan breve que llegar al mínimo sólo se consigue repitiendo. La razón
    // vive en el módulo, que es la verdad, y viaja con el expediente.
    const corto = String(record.relatoCorto || "").trim();
    for (const [field, [min, max]] of Object.entries(WORD_RANGES)) {
      const n = words(record[field]);
      const piso = field === "mito" && corto ? MITO_MINIMO_CORTO : min;
      if (n < piso || n > max) errors.push(`${field}: ${n} palabras, se esperaban ${piso}-${max}`);
    }
    const leccion = String(record.leccion || "").trim();
    if (leccion.includes("\n")) errors.push("leccion: debe ser una sola frase, sin saltos de línea");
    const marks = leccion.match(/[.!?…](?=\s|$)/g) || [];
    if (marks.length !== 1 || !/[.!?…]$/.test(leccion)) errors.push("leccion: debe contener exactamente una oración completa");
    if (record.content !== composeContent(record)) errors.push("content: no coincide con la concatenación de los cinco campos");
    if (String(record.excerpt || "").length > 180) errors.push("excerpt: supera 180 caracteres");
    if (String(record.seo_title || "").length > 60) errors.push("seo_title: supera 60 caracteres");
    if (String(record.seo_description || "").length > 165) errors.push("seo_description: supera 165 caracteres");
    if (/por ahora no tenemos|actualizaremos más adelante|desde tiempos inmemoriales|misterio ancestral|el destino estaba escrito/i.test(`${record.mito}\n${record.historia}`)) {
      errors.push("texto: contiene una fórmula prohibida por la metodología (§6)");
    }
  }
  if (fuentes) {
    const sources = allSources(record);
    if (sources.length < MIN_SOURCES) errors.push(`fuentes: ${sources.length}, mínimo ${MIN_SOURCES}`);
    const seen = new Set();
    for (const s of sources) {
      if (!s?.title || !s?.summary || !s?.url || !s?.limitation) errors.push(`fuente sin title/summary/limitation/url: ${s?.title || s?.url || "?"}`);
      let parsed;
      try {
        parsed = new URL(s.url);
      } catch {
        errors.push(`fuente con URL inválida: ${s.url}`);
        continue;
      }
      if (!["https:", "http:"].includes(parsed.protocol)) errors.push(`protocolo no permitido: ${s.url}`);
      const key = normalizeUrl(s.url);
      if (seen.has(key)) errors.push(`fuente duplicada dentro del mito: ${s.url}`);
      seen.add(key);
    }
    const hosts = new Set(sources.map((s) => hostOf(s.url)).filter(Boolean));
    if (hosts.size < MIN_HOSTS) errors.push(`fuentes: sólo ${hosts.size} dominios distintos, mínimo ${MIN_HOSTS}`);
  }
  return errors;
}

const sinTildes = (v) => String(v || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

/**
 * ¿Similitudes nombra la obra comparativa concreta? Se mira el apellido del
 * autor y las palabras largas del título —«Metamorfosis», «Deucalión»,
 * «Odisea»—, que es como se cita un paralelo cuando se cita de verdad.
 */
function mencionaLaObra(source, similitudes) {
  const texto = sinTildes(similitudes);
  const autor = sinTildes(source?.author).split(/[;,(]/)[0].split(/\s+/).filter((w) => w.length > 3);
  const titulo = sinTildes(source?.title).split(/[^a-z0-9]+/).filter((w) => w.length > 5);
  return [...autor, ...titulo].some((w) => texto.includes(w));
}

/** Señales de relevancia de una fuente dentro de un mito. Devuelve etiquetas (vacío = limpia). */
export function sourceFlags(source, record) {
  const flags = [];
  const url = String(source?.url || "");
  if (/\.$/.test(url)) flags.push("URL_TERMINA_EN_PUNTO");
  if (/^http:\/\//.test(url)) flags.push("HTTP_SIN_TLS");
  for (const rule of COMPARATIVE_HOSTS) {
    // La regla del dominio nombra un paralelo representativo, pero un mismo
    // repositorio sirve a muchos: Perseus publica a Hesíodo, a Homero y a
    // Ovidio. Lo que hay que exigir es que Similitudes nombre **este**
    // paralelo, así que primero se busca al autor y a las palabras del título
    // de la propia fuente; la lista del dominio queda como red de seguridad.
    if (!rule.host.test(url)) continue;
    const similitudes = String(record?.similitudes || "");
    if (rule.mentions.test(similitudes) || mencionaLaObra(source, similitudes)) continue;
    flags.push(`COMPARATIVA_SIN_PARALELO_EN_SIMILITUDES:${rule.label}`);
  }
  if (WEAK_HOSTS.some((h) => h.test(url))) flags.push("DOMINIO_DEBIL");
  if (String(source?.type || "").toLowerCase().includes("wikipedia")) flags.push("DOMINIO_DEBIL");
  return [...new Set(flags)];
}

/**
 * Comprueba una URL. Los 5xx se reintentan: algunos repositorios grandes
 * (Banrepcultural, en particular) devuelven 502 de forma intermitente y dar por
 * caída una fuente buena cuesta más que esperar dos segundos.
 */
export async function checkUrl(url, timeoutMs = 20_000, intentos = 3) {
  let ultimo;
  for (let i = 0; i < intentos; i += 1) {
    ultimo = await checkUrlOnce(url, timeoutMs);
    const transitorio = typeof ultimo.status === "number" && ultimo.status >= 500;
    if (!transitorio) return ultimo;
    if (i + 1 < intentos) await new Promise((r) => setTimeout(r, 1500 * (i + 1)));
  }
  return ultimo;
}

async function checkUrlOnce(url, timeoutMs = 20_000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: { "User-Agent": USER_AGENT, Range: "bytes=0-4095" },
    });
    let body = "";
    try {
      body = (await response.text()).slice(0, 4096);
    } catch {}
    clearTimeout(timer);
    const captcha = /captcha|radware|bunkerweb|access denied|attention required|are you a robot/i.test(body);
    return classify({ url, status: response.status, finalUrl: response.url, captcha });
  } catch (error) {
    clearTimeout(timer);
    const cert = /certificate/i.test(String(error?.cause?.message || error?.message));
    // Segunda y tercera oportunidad con curl: primero con nuestro agente, después
    // como navegador, porque algunos portales de revistas cortan a los bots.
    let lastError;
    for (const agent of [USER_AGENT, BROWSER_AGENT]) {
      try {
        const { stdout } = await execFileAsync(
          "curl",
          ["-L", "-sS", "-k", "--max-time", String(Math.round(timeoutMs / 1000) + 10), "--connect-timeout", "10", "-A", agent, "-o", "/dev/null", "-w", "%{http_code}\t%{url_effective}", url],
          { timeout: timeoutMs + 12_000 },
        );
        const [status, finalUrl] = stdout.trim().split("\t");
        if (Number(status) > 0) return classify({ url, status: Number(status), finalUrl, via: agent === USER_AGENT ? "curl" : "curl-navegador", cert });
      } catch (curlError) {
        lastError = curlError;
      }
    }
    return classify({ url, status: null, finalUrl: null, error: String(lastError?.message || lastError || "sin respuesta").slice(0, 120), cert });
  }
}

function classify(result) {
  const { status, finalUrl, url, captcha, cert } = result;
  const restricted = [401, 403, 405, 429].includes(status) || captcha;
  const homepageRedirect = Boolean(finalUrl) && new URL(finalUrl).pathname.replace(/\/+$/, "") === "" && new URL(url).pathname.replace(/\/+$/, "") !== "";
  const ok = status !== null && status >= 200 && status < 400 && !homepageRedirect;
  // CAIDA es una respuesta del servidor (404, 410, 5xx). Sin respuesta (timeout,
  // DNS, conexión rechazada) es SIN_RESPUESTA: portales de revistas que se caen
  // por horas; se comprueba a mano antes de retirar la fuente.
  let verdict = "OK";
  if (restricted) verdict = "RESTRINGIDA";
  else if (homepageRedirect) verdict = "REDIRIGE_A_PORTADA";
  else if (cert && ok) verdict = "CERTIFICADO_INVALIDO";
  else if (status === null) verdict = "SIN_RESPUESTA";
  else if (!ok) verdict = "CAIDA";
  return { ...result, ok, restricted: Boolean(restricted), homepageRedirect, verdict };
}

export async function mapLimit(items, limit, mapper) {
  const results = new Array(items.length);
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const index = next++;
      results[index] = await mapper(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

/** Respaldo durable antes de cualquier escritura: `myths` + `editorial_myths` completos. */
export async function saveBackup(client, communitySlug, label, mythIds) {
  const ids = mythIds.length ? mythIds : [-1];
  const [myths, editorial] = await Promise.all([
    client.query("SELECT * FROM myths WHERE id = ANY($1::int[]) ORDER BY slug", [ids]),
    client.query("SELECT * FROM editorial_myths WHERE source_myth_id = ANY($1::int[]) ORDER BY slug", [ids]),
  ]);
  const directory = path.resolve("artifacts", "editorial-backups");
  await fs.mkdir(directory, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const file = path.join(directory, `${communitySlug}-${label}-${stamp}.json`);
  await fs.writeFile(file, `${JSON.stringify({ createdAt: new Date().toISOString(), community: communitySlug, label, myths: myths.rows, editorial: editorial.rows }, null, 2)}\n`, "utf8");
  return file;
}

export function stable(value) {
  return JSON.stringify(value);
}

export function sameSources(a, b) {
  return stable(a) === stable(b);
}

/** Diferencia entre lo publicado y el módulo, sólo en fuentes. */
export function diffSources(dbRow, record) {
  const before = allSources(dbRow);
  const after = allSources(record);
  const beforeUrls = new Set(before.map((s) => normalizeUrl(s.url)));
  const afterUrls = new Set(after.map((s) => normalizeUrl(s.url)));
  return {
    keyChanged: !sameSources(dbRow.keySources, record.keySources),
    sourcesChanged: !sameSources(dbRow.sources, record.sources),
    before: before.length,
    after: after.length,
    added: after.filter((s) => !beforeUrls.has(normalizeUrl(s.url))).map((s) => s.url),
    removed: before.filter((s) => !afterUrls.has(normalizeUrl(s.url))).map((s) => s.url),
    reworded: after.filter((s) => beforeUrls.has(normalizeUrl(s.url)) && !before.some((b) => stable(b) === stable(s))).map((s) => s.url),
  };
}

/** Diferencia entre lo publicado y el módulo, sólo en texto. */
export function diffText(dbRow, record) {
  const fields = [...TEXT_FIELDS, "content", "excerpt", "seo_title", "seo_description", "title"];
  return fields.filter((f) => String(dbRow[f] ?? "") !== String(record[f] ?? ""));
}

export function siteUrl() {
  return String(process.env.NEXT_PUBLIC_SITE_URL || "https://www.mitosdecolombia.com").replace(/\/+$/, "");
}

/** Purga las dos cachés (datos + HTML prerenderizado) de las rutas de los slugs. */
export async function revalidate(slugs) {
  const user = process.env.ADMIN_USERNAME;
  const pass = process.env.ADMIN_PASSWORD;
  if (!user || !pass) throw new Error("Faltan ADMIN_USERNAME / ADMIN_PASSWORD en el .env para purgar la caché.");
  const auth = Buffer.from(`${user}:${pass}`).toString("base64");
  const results = [];
  for (let i = 0; i < slugs.length; i += 40) {
    const batch = slugs.slice(i, i + 40);
    const response = await fetch(`${siteUrl()}/api/admin/revalidate`, {
      method: "POST",
      headers: { Authorization: `Basic ${auth}`, "Content-Type": "application/json" },
      body: JSON.stringify({ slugs: batch, tags: ["myth"] }),
    });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(`Revalidate ${response.status}: ${JSON.stringify(body)}`);
    results.push(body);
  }
  return results;
}

export function printTable(rows) {
  if (!rows.length) return;
  console.table(rows);
}

export function today() {
  // Fecha LOCAL, no UTC. Con `toISOString()`, a partir de las 19:00 en Colombia
  // el kit nombraba las carpetas con el día siguiente y el trabajo de una misma
  // sesión quedaba partido entre `busqueda-<hoy>` y `actas-<mañana>`.
  const d = new Date();
  const p2 = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p2(d.getMonth() + 1)}-${p2(d.getDate())}`;
}
