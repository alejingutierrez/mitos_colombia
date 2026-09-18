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

/** Señales de relevancia de una fuente dentro de un mito. Devuelve etiquetas (vacío = limpia). */
export function sourceFlags(source, record) {
  const flags = [];
  const url = String(source?.url || "");
  if (/\.$/.test(url)) flags.push("URL_TERMINA_EN_PUNTO");
  if (/^http:\/\//.test(url)) flags.push("HTTP_SIN_TLS");
  for (const rule of COMPARATIVE_HOSTS) {
    if (rule.host.test(url) && !rule.mentions.test(String(record?.similitudes || ""))) flags.push(`COMPARATIVA_SIN_PARALELO_EN_SIMILITUDES:${rule.label}`);
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
  return new Date().toISOString().slice(0, 10);
}
