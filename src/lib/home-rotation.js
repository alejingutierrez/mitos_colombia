/**
 * Motor de rotación del home.
 *
 * Funciones PURAS: sin base de datos, sin `next/*`, sin estado global. Todo lo
 * que decide QUÉ se ve hoy vive aquí y se puede probar con `node --test`
 * (scripts/home-rotation.test.mjs). Las consultas viven en `src/lib/myths.js` y
 * sólo reciben la semilla que se calcula aquí.
 *
 * Tres reglas que sostienen el módulo:
 *
 *  1. UN SOLO RELOJ, EN BOGOTÁ. `dailySeed()` cambia exactamente a la medianoche
 *     de Colombia. El motor anterior hacía `new Date().getFullYear()` y restaba
 *     el inicio del año: en el servidor (UTC) eso salta a las 00:00 UTC, o sea a
 *     las 7 de la tarde en Bogotá, mientras la página prometía medianoche.
 *
 *  2. SEMILLAS INDEPENDIENTES POR SECCIÓN. Todas las secciones leen el mismo día
 *     (`dailySeed`), pero cada una deriva su propio flujo con
 *     `sectionSeed(daySeed, "portada" | "mesa" | ...)`. No hay un cursor
 *     compartido que avance y deje a la última sección con las sobras: cada
 *     sección saca su tramo del corpus ENTERO con su propio azar.
 *
 *  3. NADA DE `(id + semilla) % N`. Sumar la semilla antes de un módulo pequeño
 *     no reordena: sólo ROTA la misma lista. Por eso la portada tenía 23 estados
 *     y volvía cada 23 días. Aquí se baraja con un PRNG sembrado sobre el corpus
 *     completo, y en SQL la semilla entra en los dos factores de un producto
 *     (ver `seededOrderSql` en `myths.js`).
 */

/* Colombia no aplica horario de verano desde 1993: su desfase es fijo −05:00.
   Con un desfase fijo el cálculo es exacto y el módulo queda puro y sin
   dependencias — `Intl` con timeZone sería más general pero no hace falta, y
   volvería el motor imposible de razonar en una prueba. */
export const BOGOTA_UTC_OFFSET_MINUTES = -5 * 60;

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const BOGOTA_SHIFT_MS = BOGOTA_UTC_OFFSET_MINUTES * 60 * 1000;

function toMillis(value) {
  if (value instanceof Date) return value.getTime();
  if (typeof value === "number") return value;
  return new Date(value).getTime();
}

function pad2(value) {
  return String(value).padStart(2, "0");
}

/** Días enteros transcurridos desde 1970-01-01 *en Bogotá*. Salta a medianoche local. */
export function bogotaDayNumber(date = new Date()) {
  const ms = toMillis(date);
  if (!Number.isFinite(ms)) return 0;
  return Math.floor((ms + BOGOTA_SHIFT_MS) / MS_PER_DAY);
}

/** La fecha del calendario en Bogotá, `YYYY-MM-DD`. Es la clave legible del día. */
export function bogotaDayKey(date = new Date()) {
  const ms = toMillis(date);
  if (!Number.isFinite(ms)) return "1970-01-01";
  const shifted = new Date(ms + BOGOTA_SHIFT_MS);
  return `${shifted.getUTCFullYear()}-${pad2(shifted.getUTCMonth() + 1)}-${pad2(
    shifted.getUTCDate()
  )}`;
}

/** El instante exacto de la próxima medianoche de Bogotá, en UTC. */
export function nextBogotaMidnight(date = new Date()) {
  const ms = toMillis(date);
  const day = Math.floor((ms + BOGOTA_SHIFT_MS) / MS_PER_DAY);
  return new Date((day + 1) * MS_PER_DAY - BOGOTA_SHIFT_MS);
}

/** Cuánto falta para el próximo cambio de mesa. Útil para copy y para depurar. */
export function msUntilNextBogotaMidnight(date = new Date()) {
  return nextBogotaMidnight(date).getTime() - toMillis(date);
}

/** FNV-1a de 32 bits. Determinista, sin dependencias, mismo valor en todo runtime. */
export function hashString(text) {
  const value = String(text ?? "");
  let hash = 0x811c9dc5;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

/* Avalancha de 32 bits (variante de MurmurHash3): mezcla dos enteros de forma
   NO lineal. Es lo que impide que dos días vecinos den listas parecidas. */
function avalanche(value) {
  let hash = value >>> 0;
  hash = Math.imul(hash ^ (hash >>> 16), 0x45d9f3b) >>> 0;
  hash = Math.imul(hash ^ (hash >>> 16), 0x45d9f3b) >>> 0;
  return (hash ^ (hash >>> 16)) >>> 0;
}

/** La semilla del día. Igual durante todo el día en Bogotá, distinta al siguiente. */
export function dailySeed(date = new Date()) {
  return avalanche(hashString(`mitos:${bogotaDayKey(date)}`));
}

/**
 * La semilla de UNA sección, derivada del mismo día.
 *
 * Es el contrato que evita el cursor único: dos secciones con el mismo `daySeed`
 * y distinta `section` recorren el corpus en órdenes sin relación entre sí, así
 * que ninguna se queda con lo que le sobró a la otra.
 */
export function sectionSeed(daySeed, section) {
  return avalanche((daySeed >>> 0) ^ hashString(section));
}

/** PRNG mulberry32: rápido, determinista y con periodo de sobra para esto. */
export function createRandom(seed) {
  let state = (seed >>> 0) || 1;
  return function random() {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Fisher-Yates sembrado. Devuelve una copia; no toca la lista original. */
export function shuffleSeeded(list, seed) {
  const next = Array.isArray(list) ? list.slice() : [];
  const random = createRandom(seed);
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

/** Los primeros `count` de una baraja sembrada. */
export function pickSeeded(list, count, seed) {
  if (!Array.isArray(list) || count <= 0) return [];
  return shuffleSeeded(list, seed).slice(0, count);
}

/**
 * Reparto equilibrado: `count` elementos repartidos por turnos entre los grupos
 * que devuelve `groupBy`, de modo que ningún territorio domine la selección.
 *
 * Garantía: mientras todos los grupos tengan existencias, la diferencia entre el
 * que más aporta y el que menos aporta es como mucho 1. Cuando un grupo se
 * agota, los turnos siguen entre los demás (no se pierde el cupo).
 *
 * `keyOf` es la identidad para `exclude`; `exclude` es un Set (o lista) de esas
 * claves que ya están tomadas por otra sección.
 */
export function balancedPick({
  items = [],
  count = 0,
  seed = 0,
  groupBy = () => "",
  keyOf = (item) => item,
  exclude = null,
} = {}) {
  if (!Array.isArray(items) || count <= 0) return [];
  const taken = exclude instanceof Set ? exclude : new Set(exclude || []);

  const groups = new Map();
  for (const item of items) {
    if (taken.has(keyOf(item))) continue;
    const group = String(groupBy(item) ?? "");
    if (!groups.has(group)) groups.set(group, []);
    groups.get(group).push(item);
  }
  if (!groups.size) return [];

  // Cada grupo se baraja con SU propia semilla: si todos compartieran una, los
  // grupos quedarían correlacionados y dos secciones distintas verían el mismo
  // orden interno.
  const order = shuffleSeeded([...groups.keys()], seed);
  const queues = order.map((group) =>
    shuffleSeeded(groups.get(group), avalanche(seed ^ hashString(group)))
  );

  const picked = [];
  let alive = true;
  while (picked.length < count && alive) {
    alive = false;
    for (let i = 0; i < queues.length && picked.length < count; i += 1) {
      const queue = queues[i];
      if (!queue.length) continue;
      picked.push(queue.shift());
      alive = true;
    }
  }
  return picked;
}

/**
 * Reparte el pozo entre varias secciones SIN cursor compartido.
 *
 * Cada sección hace su propio `balancedPick` sobre todo lo que aún no tomó otra
 * sección, con `sectionSeed(daySeed, key)`. El resultado es disjunto (nada se
 * repite en pantalla) pero ninguna sección es «el resto»: la última también
 * elige con su propio azar sobre un corpus grande.
 *
 * `sections`: `[{ key, count }]`. Devuelve `{ [key]: item[] }`.
 */
export function partitionSections({
  items = [],
  sections = [],
  daySeed = 0,
  groupBy = () => "",
  keyOf = (item) => item,
} = {}) {
  const taken = new Set();
  const result = {};
  for (const section of sections) {
    const picked = balancedPick({
      items,
      count: section.count,
      seed: sectionSeed(daySeed, section.key),
      groupBy,
      keyOf,
      exclude: taken,
    });
    picked.forEach((item) => taken.add(keyOf(item)));
    result[section.key] = picked;
  }
  return result;
}

/* ------------------------------------------------------------------ *
 * Bolsas del importador
 * ------------------------------------------------------------------ */

/**
 * «Mestizo», «Mixto» y «Varios» NO son pueblos: son las bolsas con las que el
 * importador clasificó lo que no pudo atribuir. Son 253 relatos, el 42,5 % del
 * archivo, y estaban invisibles porque la home los descartaba junto con el resto
 * del ruido. Se pueden mostrar —hay que mostrarlos— pero NUNCA con nombre de
 * pueblo: van con su propia etiqueta.
 */
const IMPORTER_BUCKETS = new Set([
  "varios",
  "otros",
  "mixto",
  "mixta",
  "mestizo",
  "mestiza",
  "sin region",
  "sin región",
  "sin comunidad",
]);

export const UNATTRIBUTED_LABEL = "Sin pueblo identificado";

export function isImporterBucket(name) {
  return IMPORTER_BUCKETS.has(String(name || "").trim().toLowerCase());
}

/* ------------------------------------------------------------------ *
 * La mesa: etiquetas, criterio y forma de tarjeta
 * ------------------------------------------------------------------ */

/** «Andina · Muiscas». Las bolsas del importador no se nombran como comunidad. */
export function mythMeta(myth) {
  const community = isImporterBucket(myth?.community) ? null : myth?.community;
  return [myth?.region, community].filter(Boolean).join(" · ");
}

/**
 * La línea de «por qué está aquí». Es un criterio real, no un adorno: primero el
 * tema con el que está clasificado, y si no lo tiene, el pueblo que lo sostiene
 * o el territorio del que viene.
 */
export function mythReason(myth, tag) {
  if (tag?.name) return `Por tema · ${String(tag.name).toLowerCase()}`;
  if (myth?.community && !isImporterBucket(myth.community)) {
    return `Por comunidad · ${String(myth.community).toLowerCase()}`;
  }
  if (myth?.region) return `Por territorio · ${String(myth.region).toLowerCase()}`;
  return "Entra hoy al archivo";
}

/**
 * Reparte los chips de tema de la mesa.
 *
 * Cada mito cae en UN solo chip (el más frecuente que tenga), así que el conteo
 * hay que hacerlo DESPUÉS de repartir: contando etiquetas sueltas, un chip
 * anunciaba «2» y al pulsarlo aparecía una sola tarjeta. Los chips que se quedan
 * con menos de `min` tarjetas se caen, y se vuelve a repartir: sus mitos pasan al
 * siguiente chip que sí tengan.
 *
 * Devuelve `{ chips, themeOf }`, con `themeOf` = Map de clave del mito → slug del chip.
 */
export function assignThemeChips({
  items = [],
  tagsOf = () => [],
  keyOf = (item) => item?.slug,
  max = 4,
  min = 2,
} = {}) {
  const frequency = new Map();
  items.forEach((item) => {
    (tagsOf(item) || []).forEach((tag) => {
      if (!tag?.slug) return;
      const entry = frequency.get(tag.slug) || { name: tag.name, slug: tag.slug, count: 0 };
      entry.count += 1;
      frequency.set(tag.slug, entry);
    });
  });

  const ranked = [...frequency.values()].sort(
    (a, b) => b.count - a.count || String(a.name).localeCompare(String(b.name))
  );

  const assign = (candidates) => {
    const counts = new Map();
    items.forEach((item) => {
      const tags = tagsOf(item) || [];
      const chip = candidates.find((candidate) =>
        tags.some((tag) => tag.slug === candidate.slug)
      );
      if (chip) counts.set(chip.slug, (counts.get(chip.slug) || 0) + 1);
    });
    return counts;
  };

  let chips = ranked.slice(0, Math.max(max, 0) + 2);
  for (let pass = 0; pass < 4; pass += 1) {
    const counts = assign(chips);
    const kept = chips.filter((chip) => (counts.get(chip.slug) || 0) >= min);
    if (kept.length === chips.length) break;
    chips = kept;
  }
  chips = chips.slice(0, max);

  const themeOf = new Map();
  items.forEach((item) => {
    const tags = tagsOf(item) || [];
    const chip = chips.find((candidate) => tags.some((tag) => tag.slug === candidate.slug));
    themeOf.set(keyOf(item), chip ? chip.slug : null);
  });

  return { chips: chips.map(({ name, slug }) => ({ name, slug })), themeOf };
}

/**
 * La tarjeta de la mesa. UNA sola forma, compartida por el render del servidor
 * (`src/app/page.js`) y por `/api/mesa`, para que «Barajar» no devuelva algo con
 * otra pinta que lo que ya está pintado.
 *
 * `motif` entra como valor (lo calcula quien llama con `mythMotif`) para que este
 * módulo siga sin importar componentes.
 */
export function toMesaCard(myth, { tags = [], theme = null, motif = null } = {}) {
  const chip = theme ? tags.find((tag) => tag.slug === theme) : null;
  return {
    slug: myth?.slug || "",
    title: myth?.title || "",
    excerpt: myth?.excerpt || "",
    meta: mythMeta(myth),
    motif: motif || null,
    imageUrl: myth?.image_url || myth?.imageUrl || null,
    why: mythReason(myth, chip || tags[0]),
    theme: theme || null,
  };
}

/** Los chips tal como los pinta `TodayTable`, con «Todo el archivo» al frente. */
export function buildMesaFilters(cards = [], chips = []) {
  return [
    { key: "todos", label: "Todo el archivo", count: cards.length },
    ...chips.map((chip) => ({
      key: chip.slug,
      label: chip.name,
      count: cards.filter((card) => card.theme === chip.slug).length,
    })),
  ];
}

/* ------------------------------------------------------------------ *
 * Secciones
 * ------------------------------------------------------------------ */

/** Las claves de sección. Cambiar una cambia su rotación: son parte del contrato. */
export const HOME_SECTIONS = {
  PORTADA: "portada",
  MESA: "mesa",
  MAPA: "mapa",
  COMUNIDADES: "comunidades",
  SIN_PUEBLO: "sin-pueblo",
  RUTAS: "rutas",
  CATEGORIAS: "categorias",
  ORACULO: "oraculo",
};
