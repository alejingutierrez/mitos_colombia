/**
 * Lógica del expediente de un mito: de dónde viene el relato (procedencia) y
 * sobre qué se sostiene (fuentes). Vive fuera de `MythSections.js` porque no
 * dibuja nada —son datos— y así se puede probar sin montar JSX.
 *
 * Sólo lo importan `MythSections.js` y `MythDetailTemplate.js`.
 */

/* Comodín del `category_path` ("Andina > Varios > Muiscas"): no aporta nada. */
const PROVENANCE_PLACEHOLDER = /^(varios|otros|desconocid[ao]|n\/?a)$/i;

/**
 * Rastro de procedencia, sin repeticiones.
 *
 * Los tres campos se solapan: `category_path` es "Región > Departamento >
 * Comunidad" y repite lo que ya dicen `region` y `community`. La línea anterior
 * los concatenaba tal cual y salía "… de Muiscas, Andina · Andina > Varios >
 * Muiscas.". Aquí se ordena de lo particular a lo general, se descartan los
 * duplicados (sin distinguir mayúsculas ni tildes de más) y se quitan los
 * comodines, que en el archivo son mayoría en la casilla del departamento.
 */
export function provenanceTrail({ region, community, categoryPath } = {}) {
  const department = String(categoryPath || "").split(">")[1];
  const trail = [];
  const seen = new Set();
  for (const raw of [community, department, region]) {
    const value = String(raw || "").trim();
    if (!value || PROVENANCE_PLACEHOLDER.test(value)) continue;
    const key = value.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    trail.push(value);
  }
  return trail;
}

/** Una fuente sólo cuenta si tiene título y una URL http(s) que se pueda abrir. */
export function normalizeSource(source) {
  const title = String(source?.title || "").trim();
  const summary = String(source?.summary || "").trim();
  let url = "";
  let host = "";
  try {
    const parsed = new URL(String(source?.url || ""));
    if (parsed.protocol === "https:" || parsed.protocol === "http:") {
      url = parsed.toString();
      host = parsed.hostname.replace(/^www\./, "");
    }
  } catch {
    url = "";
  }
  return title && url ? { title, summary, url, host } : null;
}

/**
 * Separa la bibliografía en sus dos funciones reales, que la ficha ya distingue
 * en la base y la plantilla anterior aplanaba en una sola lista:
 *
 *   principal (`key_sources_json`) — sobre lo que se apoya el relato.
 *   contraste (`sources_json`)     — con qué se contrastó y en qué contexto.
 *
 * Deduplica por URL en cascada (la principal gana) porque 262 referencias del
 * archivo están en las dos listas: sin esto la misma crónica aparecería bajo
 * los dos rótulos. No hay tope de entradas: el corte anterior en 12 truncaba en
 * silencio a 53 de los 378 mitos que sí tienen bibliografía.
 */
export function buildSourceGroups({ keySources = [], sources = [] } = {}) {
  const seen = new Set();
  const take = (list) => {
    const out = [];
    for (const raw of Array.isArray(list) ? list : []) {
      const source = normalizeSource(raw);
      if (!source || seen.has(source.url)) continue;
      seen.add(source.url);
      out.push(source);
    }
    return out;
  };
  const primary = take(keySources);
  const secondary = take(sources);
  return { primary, secondary, total: primary.length + secondary.length };
}

export function formatReviewDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Bogota",
  }).format(date);
}

/*
 * A partir de siete referencias de contraste la cola se pliega en un
 * `<details>`: sigue completa en el HTML —y por tanto para buscadores y
 * lectores de pantalla—, pero deja de convertir el final del artículo en un
 * muro. Seis es el tamaño de la mitad larga del archivo: al mito mediano no le
 * pliega nada.
 */
export const SECONDARY_INLINE_LIMIT = 6;
