/**
 * Reglas puras del circuito de comentarios.
 *
 * Vive aparte de `comments.js` a propósito: ese módulo arrastra `./db`, que
 * importa `server-only` y revienta fuera del bundle de servidor. Aquí no hay
 * base de datos ni `next/*`, así que `scripts/comments.test.mjs` puede
 * importarlo con `node --test` sin montar nada.
 *
 * Todo lo que decide si un comentario entra, en qué estado queda y si huele a
 * spam está en este archivo. Las rutas sólo lo llaman.
 */

/* ------------------------------------------------------------------ *
 * Estados
 * ------------------------------------------------------------------ */

export const COMMENT_STATUSES = ["pending", "approved", "rejected"];
export const DEFAULT_COMMENT_STATUS = "pending";

export const COMMENT_STATUS_LABELS = {
  pending: "Pendiente",
  approved: "Aprobado",
  rejected: "Rechazado",
};

/**
 * Devuelve el estado normalizado o `null` si no es uno de los tres válidos.
 * Nunca inventa un estado por defecto: quien llama decide qué hacer con el
 * `null` (la ruta responde 400, el listado interpreta "todos").
 */
export function normalizeCommentStatus(value) {
  if (value === null || value === undefined) return null;
  const normalized = String(value).toLowerCase().trim();
  return COMMENT_STATUSES.includes(normalized) ? normalized : null;
}

/**
 * La moderación es reversible en las dos direcciones: un comentario aprobado se
 * puede volver a rechazar y uno rechazado se puede rescatar, porque quien
 * modera se equivoca. Lo único que no es una transición es quedarse donde está.
 */
export function canTransitionComment(from, to) {
  const origin = normalizeCommentStatus(from);
  const target = normalizeCommentStatus(to);
  if (!target) return false;
  if (!origin) return true; // origen desconocido: sólo importa que el destino valga
  return origin !== target;
}

/* ------------------------------------------------------------------ *
 * Límites y validación del formulario público
 * ------------------------------------------------------------------ */

export const COMMENT_LIMITS = {
  authorNameMin: 2,
  authorNameMax: 80,
  authorEmailMax: 160,
  contentMin: 10,
  contentMax: 2000,
  maxLinks: 0,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function normalizeEmail(value) {
  if (value === null || value === undefined) return "";
  return String(value).trim().toLowerCase();
}

export function isValidEmail(value) {
  const email = normalizeEmail(value);
  if (!email || email.length > COMMENT_LIMITS.authorEmailMax) return false;
  return EMAIL_PATTERN.test(email);
}

/** Colapsa espacios y quita los saltos de línea de más, sin tocar el texto. */
function collapseWhitespace(value) {
  return String(value ?? "")
    .replace(/\r\n?/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function normalizeMythId(value) {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isSafeInteger(parsed) || parsed <= 0) return null;
  return parsed;
}

function invalid(code, message, field) {
  return { ok: false, code, error: message, field };
}

/**
 * Valida y normaliza lo que llega del formulario.
 *
 * El correo es OPCIONAL: en producción `comments.author_email` acepta NULL y
 * nadie lo muestra en la página. Cuando viene, tiene que ser un correo de
 * verdad; cuando no viene, se guarda cadena vacía (el `schema.sql` que se usa
 * para instalaciones nuevas sí lo declara NOT NULL).
 *
 * Devuelve `{ ok: true, value }` o `{ ok: false, code, error, field }` con un
 * mensaje ya redactado para mostrárselo a la persona.
 */
export function validateCommentInput(raw = {}) {
  const mythId = normalizeMythId(raw.mythId);
  if (!mythId) {
    return invalid("myth-id", "No pudimos identificar el mito.", "mythId");
  }

  const authorName = collapseWhitespace(raw.authorName);
  if (authorName.length < COMMENT_LIMITS.authorNameMin) {
    return invalid(
      "name-too-short",
      `El nombre debe tener al menos ${COMMENT_LIMITS.authorNameMin} caracteres.`,
      "authorName"
    );
  }
  if (authorName.length > COMMENT_LIMITS.authorNameMax) {
    return invalid(
      "name-too-long",
      `El nombre no puede pasar de ${COMMENT_LIMITS.authorNameMax} caracteres.`,
      "authorName"
    );
  }

  const authorEmail = normalizeEmail(raw.authorEmail);
  if (authorEmail && !isValidEmail(authorEmail)) {
    return invalid("email-invalid", "El correo no es válido.", "authorEmail");
  }

  const content = collapseWhitespace(raw.content);
  if (content.length < COMMENT_LIMITS.contentMin) {
    return invalid(
      "content-too-short",
      `El comentario debe tener al menos ${COMMENT_LIMITS.contentMin} caracteres.`,
      "content"
    );
  }
  if (content.length > COMMENT_LIMITS.contentMax) {
    return invalid(
      "content-too-long",
      `El comentario no puede pasar de ${COMMENT_LIMITS.contentMax} caracteres.`,
      "content"
    );
  }

  return { ok: true, value: { mythId, authorName, authorEmail, content } };
}

/* ------------------------------------------------------------------ *
 * Spam
 * ------------------------------------------------------------------ */

const LINK_PATTERN = /(https?:\/\/|www\.)/gi;
const MARKUP_PATTERN = /(\[url[=\]]|<a\s|\[link[=\]]|href\s*=)/i;
const LETTERS_PATTERN = /[a-záéíóúüñ]/gi;

/**
 * Lista corta y conservadora. Un sitio editorial en español no debería tener
 * falsos positivos con esto, y una lista larga sí los tendría.
 */
const SPAM_TERMS = [
  "viagra",
  "cialis",
  "casino",
  "porn",
  "sex cam",
  "buy followers",
  "seo services",
  "crypto investment",
  "binary options",
  "work from home earn",
];

export function countLinks(value) {
  const matches = String(value ?? "").match(LINK_PATTERN);
  return matches ? matches.length : 0;
}

/**
 * Heurísticas baratas contra el spam automatizado.
 *
 * `honeypot` es un campo escondido del formulario: una persona nunca lo llena,
 * un bot que rellena todos los `input` sí. Ojo — el honeypot sólo atrapa algo
 * si el formulario público pinta ese campo; aquí sólo se verifica.
 *
 * Devuelve `{ spam, code, reason, silent }`. `silent` marca los casos en los que
 * conviene responder como si hubiera pasado (honeypot): decirle al bot que lo
 * pillamos sólo le enseña a evitarlo.
 */
export function detectSpam({ authorName = "", content = "", honeypot = "" } = {}) {
  const clean = (value) => String(value ?? "").trim();

  if (clean(honeypot).length > 0) {
    return {
      spam: true,
      code: "honeypot",
      reason: "Campo trampa relleno.",
      silent: true,
    };
  }

  const body = clean(content);

  if (countLinks(body) > COMMENT_LIMITS.maxLinks) {
    return {
      spam: true,
      code: "links",
      reason: "No publicamos comentarios con enlaces.",
      silent: false,
    };
  }

  if (MARKUP_PATTERN.test(body) || MARKUP_PATTERN.test(clean(authorName))) {
    return {
      spam: true,
      code: "markup",
      reason: "No publicamos comentarios con enlaces ni etiquetas HTML.",
      silent: false,
    };
  }

  const letters = body.match(LETTERS_PATTERN);
  if (!letters || letters.length < 5) {
    return {
      spam: true,
      code: "no-prose",
      reason: "Escribe tu comentario con palabras, por favor.",
      silent: false,
    };
  }

  const haystack = `${clean(authorName)} ${body}`.toLowerCase();
  const hit = SPAM_TERMS.find((term) => haystack.includes(term));
  if (hit) {
    return {
      spam: true,
      code: "blocklist",
      reason: "Ese comentario no se puede publicar.",
      silent: false,
    };
  }

  return { spam: false, code: null, reason: null, silent: false };
}

/* ------------------------------------------------------------------ *
 * Límite de frecuencia
 * ------------------------------------------------------------------ */

/**
 * Ventana deslizante en memoria, con reloj inyectable para poder probarla sin
 * dormir el test.
 *
 * Advertencia honesta: en Vercel cada instancia tiene su propio mapa, así que
 * esto frena el ruido de un bot suelto, no un ataque distribuido. Para eso hace
 * falta un contador compartido (Redis/Upstash), que hoy no existe en el
 * proyecto.
 */
export function createRateLimiter({
  limit = 3,
  windowMs = 10 * 60 * 1000,
  now = () => Date.now(),
  maxKeys = 5000,
} = {}) {
  const hits = new Map();

  function prune(currentTime) {
    for (const [key, timestamps] of hits) {
      const fresh = timestamps.filter((time) => currentTime - time < windowMs);
      if (fresh.length === 0) hits.delete(key);
      else hits.set(key, fresh);
    }
  }

  return {
    /**
     * `consume: false` consulta sin gastar cupo. Sirve para mirar el contador
     * ANTES de validar: alguien que se equivoca tres veces escribiendo su
     * comentario no debería quedar castigado diez minutos, y una petición que
     * ni siquiera pasa la validación no llega a tocar la base.
     */
    check(key, { consume = true } = {}) {
      const currentTime = now();
      const id = String(key || "desconocido");

      if (hits.size > maxKeys) prune(currentTime);

      const previous = hits.get(id) || [];
      const fresh = previous.filter((time) => currentTime - time < windowMs);

      if (fresh.length >= limit) {
        const oldest = fresh[0];
        hits.set(id, fresh);
        return {
          allowed: false,
          remaining: 0,
          retryAfterMs: Math.max(0, windowMs - (currentTime - oldest)),
        };
      }

      if (consume) fresh.push(currentTime);
      hits.set(id, fresh);
      return {
        allowed: true,
        remaining: limit - fresh.length,
        retryAfterMs: 0,
      };
    },
    reset() {
      hits.clear();
    },
    get size() {
      return hits.size;
    },
  };
}

/* ------------------------------------------------------------------ *
 * Serialización
 * ------------------------------------------------------------------ */

const SQLITE_DATETIME = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;

/**
 * Normaliza la fecha a ISO.
 *
 * Postgres devuelve `Date`; SQLite devuelve `'YYYY-MM-DD HH:MM:SS'` en UTC, que
 * `new Date()` interpreta como hora LOCAL y desplaza el comentario cinco horas.
 */
export function toIsoDate(value) {
  if (!value) return null;
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? null : value.toISOString();
  }
  const text = String(value).trim();
  if (SQLITE_DATETIME.test(text)) {
    return `${text.replace(" ", "T")}.000Z`;
  }
  const parsed = new Date(text);
  return Number.isNaN(parsed.getTime()) ? text : parsed.toISOString();
}

/** Forma pública: nunca sale el correo de quien comenta. */
export function serializePublicComment(row = {}) {
  return {
    id: row.id,
    author_name: row.author_name,
    content: row.content,
    created_at: toIsoDate(row.created_at),
  };
}

/** Forma para el panel: aquí sí va el correo y el mito al que pertenece. */
export function serializeAdminComment(row = {}) {
  return {
    id: row.id,
    myth_id: row.myth_id,
    myth_slug: row.myth_slug || null,
    myth_title: row.myth_title || null,
    author_name: row.author_name,
    author_email: row.author_email || null,
    content: row.content,
    status: normalizeCommentStatus(row.status) || row.status,
    created_at: toIsoDate(row.created_at),
  };
}

/** Agrupa filas aprobadas por `myth_id` para el render en servidor. */
export function groupCommentsByMythId(rows = []) {
  const grouped = {};
  for (const row of rows) {
    const key = String(row.myth_id);
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(serializePublicComment(row));
  }
  return grouped;
}
