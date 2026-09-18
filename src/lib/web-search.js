/**
 * Buscador web propio. Sustituye a `web_search_preview` de OpenAI, que era lo
 * último que ataba el texto del proyecto a ese proveedor.
 *
 * El pipeline editorial ya sabía *leer* páginas (su scraper vive en
 * `editorial-myths/route.js`); lo que le faltaba era *encontrarlas*. Esta capa
 * devuelve URLs y fragmentos; interpretarlos es trabajo de Bedrock.
 *
 * Dos proveedores tras la misma interfaz. Serper es el de por defecto porque ya
 * está documentado en `rag_master`; Brave sirve igual y se activa con la
 * variable. Añadir un tercero es añadir una entrada a PROVIDERS.
 */

export const WEB_SEARCH_PROVIDER = (
  process.env.WEB_SEARCH_PROVIDER || "serper"
).toLowerCase();

export const WEB_SEARCH_DEFAULT_LIMIT = Number.parseInt(
  process.env.WEB_SEARCH_DEFAULT_LIMIT || "10",
  10
);

const TIMEOUT_MS = Number.parseInt(
  process.env.WEB_SEARCH_TIMEOUT_MS || "15000",
  10
);

function apiKeyFor(provider, env = process.env) {
  if (provider === "brave") return env.BRAVE_SEARCH_API_KEY || "";
  return env.SERPER_API_KEY || "";
}

/** Normaliza una URL para poder deduplicar por ella. */
export function normalizeResultUrl(value) {
  try {
    const url = new URL(String(value));
    if (!["http:", "https:"].includes(url.protocol)) return null;
    url.hash = "";
    // Los parámetros de campaña no cambian el documento.
    for (const key of [...url.searchParams.keys()]) {
      if (/^(utm_|fbclid|gclid|ref)/i.test(key)) url.searchParams.delete(key);
    }
    const normalized = url.toString();
    return normalized.endsWith("/") ? normalized.slice(0, -1) : normalized;
  } catch {
    return null;
  }
}

const PROVIDERS = {
  serper: {
    label: "Serper.dev",
    keyName: "SERPER_API_KEY",
    async run({ query, limit, country, lang, apiKey, signal }) {
      const response = await fetch("https://google.serper.dev/search", {
        method: "POST",
        headers: { "X-API-KEY": apiKey, "Content-Type": "application/json" },
        body: JSON.stringify({ q: query, gl: country, hl: lang, num: limit }),
        signal,
      });
      if (!response.ok) {
        throw new Error(`Serper respondió ${response.status}: ${await response.text()}`);
      }
      const data = await response.json();
      return (data.organic || []).map((item) => ({
        title: item.title || "",
        url: item.link || "",
        snippet: item.snippet || "",
      }));
    },
  },
  brave: {
    label: "Brave Search",
    keyName: "BRAVE_SEARCH_API_KEY",
    async run({ query, limit, country, lang, apiKey, signal }) {
      const url = new URL("https://api.search.brave.com/res/v1/web/search");
      url.searchParams.set("q", query);
      url.searchParams.set("count", String(limit));
      url.searchParams.set("country", String(country).toUpperCase());
      url.searchParams.set("search_lang", lang);
      const response = await fetch(url, {
        headers: { Accept: "application/json", "X-Subscription-Token": apiKey },
        signal,
      });
      if (!response.ok) {
        throw new Error(`Brave respondió ${response.status}: ${await response.text()}`);
      }
      const data = await response.json();
      return (data.web?.results || []).map((item) => ({
        title: item.title || "",
        url: item.url || "",
        // Brave marca los términos con <strong>; al modelo le estorba.
        snippet: String(item.description || "").replace(/<[^>]+>/g, ""),
      }));
    },
  },
};

export function assertWebSearchConfigured(env = process.env) {
  const provider = (env.WEB_SEARCH_PROVIDER || WEB_SEARCH_PROVIDER).toLowerCase();
  const definition = PROVIDERS[provider];
  if (!definition) {
    throw new Error(
      `WEB_SEARCH_PROVIDER="${provider}" no existe. Válidos: ${Object.keys(PROVIDERS).join(", ")}.`
    );
  }
  if (!apiKeyFor(provider, env)) {
    throw new Error(
      `Falta ${definition.keyName} para usar ${definition.label} como buscador.`
    );
  }
}

/**
 * Una consulta. Devuelve resultados normalizados `{ title, url, snippet }`,
 * sin duplicados de URL y sin entradas sin enlace utilizable.
 */
export async function searchWeb({
  query,
  limit = WEB_SEARCH_DEFAULT_LIMIT,
  country = "co",
  lang = "es",
  env = process.env,
  fetchImpl,
  signal,
} = {}) {
  const text = String(query || "").trim();
  if (!text) return [];
  const provider = (env.WEB_SEARCH_PROVIDER || WEB_SEARCH_PROVIDER).toLowerCase();
  const definition = PROVIDERS[provider];
  if (!definition) throw new Error(`Buscador desconocido: ${provider}`);
  const apiKey = apiKeyFor(provider, env);
  if (!apiKey) throw new Error(`Falta ${definition.keyName}`);

  const previousFetch = globalThis.fetch;
  if (fetchImpl) globalThis.fetch = fetchImpl;
  try {
    const raw = await definition.run({
      query: text,
      limit,
      country,
      lang,
      apiKey,
      signal: signal || AbortSignal.timeout(TIMEOUT_MS),
    });
    const seen = new Set();
    const results = [];
    for (const item of raw) {
      const url = normalizeResultUrl(item.url);
      if (!url || seen.has(url)) continue;
      seen.add(url);
      results.push({ title: item.title || url, url, snippet: item.snippet || "" });
      if (results.length >= limit) break;
    }
    return results;
  } finally {
    if (fetchImpl) globalThis.fetch = previousFetch;
  }
}

/**
 * Varias consultas en secuencia, con los resultados fundidos y deduplicados.
 * En secuencia y no en paralelo a propósito: los planes baratos de los
 * buscadores tarifan por consulta y responden 429 con ráfagas.
 *
 * Una consulta que falla no tumba la tanda: se anota en `errors` y se sigue,
 * porque media búsqueda sirve más que ninguna.
 */
export async function searchWebMany(queries, options = {}) {
  const { limitPerQuery = WEB_SEARCH_DEFAULT_LIMIT, totalLimit = 20 } = options;
  const seen = new Set();
  const results = [];
  const errors = [];
  for (const query of queries.filter(Boolean)) {
    if (results.length >= totalLimit) break;
    try {
      const batch = await searchWeb({ ...options, query, limit: limitPerQuery });
      for (const item of batch) {
        if (seen.has(item.url)) continue;
        seen.add(item.url);
        results.push({ ...item, query });
        if (results.length >= totalLimit) break;
      }
    } catch (error) {
      errors.push({ query, message: error instanceof Error ? error.message : String(error) });
    }
  }
  if (!results.length && errors.length) {
    throw new Error(
      `Ninguna consulta devolvió resultados: ${errors.map((e) => e.message).join(" · ")}`
    );
  }
  return { results, errors, queries: queries.filter(Boolean) };
}
