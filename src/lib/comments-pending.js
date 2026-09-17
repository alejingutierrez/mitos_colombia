/**
 * "Sala de espera" — lógica pura del aporte propio mientras espera moderación.
 *
 * Contexto: durante meses el circuito publicó CERO comentarios. Quien escribía
 * veía un "gracias" y su texto desaparecía para siempre, ni siquiera para él.
 * Este módulo sostiene la mitad del arreglo en la interfaz: guardar el aporte
 * en el navegador de quien lo escribió, decirle cuándo lo vamos a leer, y
 * retirarlo solo cuando el servidor ya lo devuelve publicado.
 *
 * Vive aparte del componente a propósito: aquí no hay React ni `next/*`, así
 * que `scripts/comments-ui.test.mjs` lo importa con `node --test` sin montar
 * nada. Las reglas del formulario (validación, spam, estados) siguen en
 * `comments-validation.js`; este archivo NO toca la API ni la base de datos.
 */

/* ------------------------------------------------------------------ *
 * La promesa de plazo — el único sitio donde se edita
 * ------------------------------------------------------------------ */

/**
 * Ventana de servicio, en DÍAS HÁBILES contados desde el envío.
 *
 * La maqueta decía "antes del 8 de septiembre". Una fecha fija se pudre en una
 * semana y deja al sitio publicando una promesa falsa, así que el plazo se
 * calcula siempre relativo al envío de cada persona.
 *
 * Para cambiar el compromiso editorial, cambia ESTE número y nada más.
 * Para retirar la promesa —si la redacción no puede sostener ninguna ventana—
 * pon `null`: la interfaz degrada sola a una frase honesta y sin fecha
 * ("la lee una persona antes de publicarla"), sin dejar huecos ni "undefined".
 */
export const REVIEW_WINDOW_BUSINESS_DAYS = 5;

/** Zona horaria del archivo: el plazo se cuenta en días de Colombia. */
export const SITE_TIME_ZONE = "America/Bogota";

/**
 * A los 30 días dejamos de afirmar "en revisión".
 *
 * Un aporte rechazado NUNCA vuelve del servidor, así que sin caducidad el
 * bloque local se quedaría prometiendo una publicación que no va a llegar.
 */
export const PENDING_MAX_AGE_DAYS = 30;

/** Tope de aportes propios guardados por mito (el mismo que el límite de la API). */
export const MAX_PENDING_PER_MYTH = 3;

/** Versión del formato guardado: si cambia la forma, lo viejo se descarta. */
export const PENDING_STORAGE_VERSION = 1;

const STORAGE_PREFIX = "mdc:comentario-en-revision:";

const MONTHS = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const DAY_MS = 24 * 60 * 60 * 1000;

/* ------------------------------------------------------------------ *
 * Fechas civiles (sin depender de ICU ni de la zona del navegador)
 * ------------------------------------------------------------------ */

function toDate(value) {
  if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;
  if (typeof value === "number" && Number.isFinite(value)) return new Date(value);
  if (typeof value === "string" && value.trim()) {
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }
  return null;
}

/**
 * Instante → fecha civil `{ year, month, day }` en la zona del sitio.
 *
 * Se calcula con `Intl` cuando existe y con un desplazamiento fijo de −5 h
 * cuando no: Colombia no tiene horario de verano, así que el respaldo da la
 * misma respuesta y nunca lanza.
 */
export function civilDate(value, timeZone = SITE_TIME_ZONE) {
  const date = toDate(value);
  if (!date) return null;

  try {
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
    const [year, month, day] = parts.split("-").map((part) => Number.parseInt(part, 10));
    if (Number.isFinite(year) && Number.isFinite(month) && Number.isFinite(day)) {
      return { year, month, day };
    }
  } catch {
    // Sin ICU: seguimos con el respaldo de abajo.
  }

  const shifted = new Date(date.getTime() - 5 * 60 * 60 * 1000);
  return {
    year: shifted.getUTCFullYear(),
    month: shifted.getUTCMonth() + 1,
    day: shifted.getUTCDate(),
  };
}

/** Fecha civil → `Date` a medianoche UTC, para hacer aritmética de días exacta. */
function civilToUtc(civil) {
  return new Date(Date.UTC(civil.year, civil.month - 1, civil.day));
}

function utcToCivil(date) {
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
  };
}

/** ¿Cae en sábado o domingo? */
export function isWeekend(civil) {
  const day = civilToUtc(civil).getUTCDay();
  return day === 0 || day === 6;
}

/**
 * Suma días hábiles a una fecha civil (salta sábados y domingos).
 *
 * No conoce los festivos colombianos a propósito: una tabla de festivos hay
 * que mantenerla cada año y su ausencia sólo hace la promesa un día más
 * exigente, nunca más laxa.
 */
export function addBusinessDays(civil, days) {
  if (!civil) return null;
  const amount = Number.isFinite(days) ? Math.max(0, Math.trunc(days)) : 0;
  const cursor = civilToUtc(civil);
  let remaining = amount;
  while (remaining > 0) {
    cursor.setUTCDate(cursor.getUTCDate() + 1);
    const weekday = cursor.getUTCDay();
    if (weekday !== 0 && weekday !== 6) remaining -= 1;
  }
  return utcToCivil(cursor);
}

/** "8 de septiembre" — y con año cuando no es el mismo que el de referencia. */
export function formatCivilDate(civil, { referenceYear } = {}) {
  if (!civil) return "";
  const month = MONTHS[civil.month - 1] || "";
  const base = `${civil.day} de ${month}`;
  if (referenceYear && civil.year !== referenceYear) return `${base} de ${civil.year}`;
  return base;
}

/** Fecha larga completa, para los comentarios ya publicados. */
export function formatLongDate(value, timeZone = SITE_TIME_ZONE) {
  const civil = civilDate(value, timeZone);
  if (!civil) return "";
  return `${civil.day} de ${MONTHS[civil.month - 1]} de ${civil.year}`;
}

export function isSameCivilDay(a, b) {
  if (!a || !b) return false;
  return a.year === b.year && a.month === b.month && a.day === b.day;
}

/**
 * La promesa que se le enseña a quien acaba de escribir.
 *
 * Devuelve SIEMPRE un objeto usable: cuando no hay ventana comprometida
 * (`businessDays` a `null`) el texto degrada a una frase sin fecha en vez de
 * dejar la interfaz a medias.
 */
export function reviewPromise(
  submittedAt,
  { now = Date.now(), businessDays = REVIEW_WINDOW_BUSINESS_DAYS, timeZone = SITE_TIME_ZONE } = {}
) {
  const submitted = civilDate(submittedAt, timeZone);
  const today = civilDate(now, timeZone);

  // `null` (sin ventana comprometida), `undefined` o una fecha ilegible caen
  // todas aquí: una frase honesta y sin plazo.
  if (!submitted || !Number.isFinite(businessDays)) {
    return {
      hasDate: false,
      deadline: null,
      deadlineLabel: "",
      overdue: false,
      readingStep: "En lectura editorial",
      sentence: "La lee una persona del equipo antes de publicarla.",
    };
  }

  const deadline = addBusinessDays(submitted, businessDays);
  const deadlineLabel = formatCivilDate(deadline, { referenceYear: submitted.year });
  const overdue = today ? civilToUtc(today) > civilToUtc(deadline) : false;

  return {
    hasDate: true,
    deadline,
    deadlineLabel,
    overdue,
    readingStep: `En lectura editorial · antes del ${deadlineLabel}`,
    sentence: overdue
      ? "Se nos pasó el plazo que prometimos. Sigue en la cola y la vamos a leer."
      : `La leemos antes del ${deadlineLabel}.`,
  };
}

/** "hoy, 3 de septiembre" el mismo día; la fecha a secas los demás. */
export function formatReceivedLabel(
  submittedAt,
  { now = Date.now(), timeZone = SITE_TIME_ZONE } = {}
) {
  const submitted = civilDate(submittedAt, timeZone);
  if (!submitted) return "";
  const today = civilDate(now, timeZone);
  const label = formatCivilDate(submitted, { referenceYear: today ? today.year : undefined });
  return isSameCivilDay(submitted, today) ? `hoy, ${label}` : label;
}

/* ------------------------------------------------------------------ *
 * Conciliación con lo que devuelve el servidor
 * ------------------------------------------------------------------ */

/**
 * Forma comparable de un texto.
 *
 * La API guarda el contenido después de colapsar espacios, así que el texto
 * que salió del navegador y el que vuelve del servidor casi nunca son
 * idénticos byte a byte. Sin esta normalización el bloque "en revisión" se
 * quedaría al lado de su propia versión ya publicada: el mismo aporte, dos
 * veces.
 */
export function normalizeForMatch(value) {
  return String(value ?? "")
    .normalize("NFC")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

/**
 * ¿Este comentario del servidor es el aporte que guardé yo?
 *
 * Primero por id: la API devuelve el `id` de la fila insertada, y eso es
 * inequívoco. Si no lo tenemos (respuesta antigua, o el id llegó nulo) se cae
 * al par texto + nombre. Se exigen LOS DOS: dos personas pueden escribir el
 * mismo texto corto, y adoptar el aporte de otra persona como propio sería
 * peor que mostrar el bloque un rato de más.
 */
export function matchesServerComment(entry, comment) {
  if (!entry || !comment) return false;

  if (entry.serverId !== null && entry.serverId !== undefined && comment.id !== undefined) {
    if (String(entry.serverId) === String(comment.id)) return true;
  }

  const sameContent =
    normalizeForMatch(entry.content) === normalizeForMatch(comment.content) &&
    normalizeForMatch(entry.content).length > 0;
  if (!sameContent) return false;

  return normalizeForMatch(entry.authorName) === normalizeForMatch(comment.author_name);
}

export function isExpiredEntry(entry, { now = Date.now(), maxAgeDays = PENDING_MAX_AGE_DAYS } = {}) {
  const submitted = toDate(entry?.submittedAt);
  if (!submitted) return true;
  return now - submitted.getTime() > maxAgeDays * DAY_MS;
}

/**
 * Cruza los aportes guardados con los comentarios publicados que trae el
 * servidor y devuelve los que siguen esperando de verdad.
 *
 * `published` son los ids/entradas que ya salieron (para poder avisar en la
 * interfaz), `expired` los que caducaron sin volver nunca.
 */
export function reconcilePending(
  entries,
  serverComments = [],
  { now = Date.now(), maxAgeDays = PENDING_MAX_AGE_DAYS } = {}
) {
  const list = Array.isArray(entries) ? entries : [];
  const comments = Array.isArray(serverComments) ? serverComments : [];

  const pending = [];
  const published = [];
  const expired = [];

  for (const entry of list) {
    if (!entry || typeof entry !== "object") continue;
    const match = comments.find((comment) => matchesServerComment(entry, comment));
    if (match) {
      published.push({ entry, comment: match });
      continue;
    }
    if (isExpiredEntry(entry, { now, maxAgeDays })) {
      expired.push(entry);
      continue;
    }
    pending.push(entry);
  }

  return { pending, published, expired, changed: published.length + expired.length > 0 };
}

/* ------------------------------------------------------------------ *
 * Persistencia por navegador
 * ------------------------------------------------------------------ */

export function storageKey(mythId) {
  return `${STORAGE_PREFIX}${mythId}`;
}

/**
 * `localStorage` si existe y si el navegador deja tocarlo.
 *
 * En una ventana privada de Safari, o con los datos de sitio bloqueados, el
 * simple hecho de LEER la propiedad puede lanzar. Por eso nunca se accede a
 * `window.localStorage` fuera de este try.
 */
export function getStorage() {
  try {
    if (typeof globalThis === "undefined") return null;
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}

function sanitizeEntry(raw) {
  if (!raw || typeof raw !== "object") return null;
  const content = typeof raw.content === "string" ? raw.content : "";
  const authorName = typeof raw.authorName === "string" ? raw.authorName : "";
  const submittedAt = toDate(raw.submittedAt);
  if (!content.trim() || !submittedAt) return null;
  return {
    id: typeof raw.id === "string" && raw.id ? raw.id : `local-${submittedAt.getTime()}`,
    serverId: raw.serverId ?? null,
    authorName,
    content,
    submittedAt: submittedAt.toISOString(),
  };
}

/**
 * Lee los aportes guardados de un mito. Ante CUALQUIER problema —storage que
 * lanza, JSON corrupto, formato de otra versión— devuelve lista vacía: la
 * página se tiene que ver bien igual.
 */
export function readPending(mythId, storage = getStorage()) {
  if (!storage || mythId === null || mythId === undefined) return [];
  let raw = null;
  try {
    raw = storage.getItem(storageKey(mythId));
  } catch {
    return [];
  }
  if (!raw) return [];

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return [];
  }

  if (!parsed || parsed.v !== PENDING_STORAGE_VERSION || !Array.isArray(parsed.entries)) {
    return [];
  }

  return parsed.entries.map(sanitizeEntry).filter(Boolean).slice(0, MAX_PENDING_PER_MYTH);
}

/**
 * Guarda la lista completa. Devuelve `true` sólo si de verdad quedó escrita:
 * quien llama necesita saberlo para poder decir en pantalla que este navegador
 * no va a recordar el bloque tras recargar.
 */
export function writePending(mythId, entries, storage = getStorage()) {
  if (!storage || mythId === null || mythId === undefined) return false;
  const clean = (Array.isArray(entries) ? entries : [])
    .map(sanitizeEntry)
    .filter(Boolean)
    .slice(-MAX_PENDING_PER_MYTH);

  try {
    if (clean.length === 0) {
      storage.removeItem(storageKey(mythId));
      return true;
    }
    storage.setItem(
      storageKey(mythId),
      JSON.stringify({ v: PENDING_STORAGE_VERSION, entries: clean })
    );
    return true;
  } catch {
    return false;
  }
}

export function clearPending(mythId, storage = getStorage()) {
  if (!storage || mythId === null || mythId === undefined) return false;
  try {
    storage.removeItem(storageKey(mythId));
    return true;
  } catch {
    return false;
  }
}

/**
 * Construye la entrada que se guarda.
 *
 * El correo NO entra aquí a propósito: es el único dato personal del
 * formulario y no hay ni una razón para dejarlo en el disco de un navegador
 * compartido. El servidor ya lo tiene.
 */
export function createPendingEntry({ content, authorName, serverId = null, submittedAt = Date.now() }) {
  const date = toDate(submittedAt) || new Date();
  return sanitizeEntry({
    id: `local-${date.getTime()}-${Math.random().toString(36).slice(2, 8)}`,
    serverId,
    authorName,
    content,
    submittedAt: date.toISOString(),
  });
}
