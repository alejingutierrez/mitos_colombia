/**
 * Consultas con las que se rastrea un mito en el buscador propio.
 *
 * Cuando la búsqueda la hacía OpenAI, el modelo decidía qué preguntar y nadie
 * lo veía. Ahora las consultas son código: se leen, se prueban y se corrigen.
 *
 * La regla que las gobierna: el relato entero como consulta devuelve páginas de
 * mitología genérica. Lo que ancla un mito son su título, su comunidad, su
 * región y el foco que la ficha ya eligió.
 */

function clean(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

/** Consultas para ubicar geográficamente un mito. */
export function buildGeoQueries(myth = {}) {
  const title = clean(myth.title);
  if (!title) return [];
  const region = clean(myth.region);
  const community = clean(myth.community);
  return [
    [title, region, "Colombia", "ubicación"].filter(Boolean).join(" "),
    community ? [title, community, "territorio Colombia"].filter(Boolean).join(" ") : "",
    `${title} coordenadas lugar Colombia`,
  ].filter(Boolean);
}

/** Consultas para reunir fuentes editoriales de un mito. */
export function buildEditorialQueries({
  title,
  region,
  community,
  focusKeyword,
} = {}) {
  const base = clean(title);
  if (!base) return [];
  const región = clean(region);
  const comunidad = clean(community);
  const foco = clean(focusKeyword);
  return [
    [base, "mito", comunidad || región, "Colombia"].filter(Boolean).join(" "),
    [base, "leyenda origen", región, "Colombia"].filter(Boolean).join(" "),
    comunidad ? `${base} ${comunidad} tradición oral` : "",
    foco && foco.toLowerCase() !== base.toLowerCase() ? `${foco} Colombia` : "",
    `"${base}" etnografía OR antropología Colombia`,
  ].filter(Boolean);
}
