/**
 * Reglas puras del formulario de contacto — las tres puertas.
 *
 * Vive aparte de `contact.js` a propósito: ese módulo arrastra `./db`, que
 * importa `server-only` y revienta fuera del bundle de servidor. Aquí no hay
 * base de datos ni `next/*`, así que lo puede importar tanto la ruta de API
 * como el componente de cliente como `scripts/contact-form.test.mjs` con
 * `node --test`.
 *
 * La página pregunta primero a qué viene la persona y después cambia de
 * campos. Las tres puertas caen en la MISMA tabla `contact_messages` sin tocar
 * el esquema: la intención viaja en `subject` (columna que ya existía) y los
 * campos extra se serializan dentro de `message` como texto plano legible —
 * /admin lo pinta con `whitespace-pre-line`, así que los saltos de línea que
 * escribimos acá son los que se ven allá. **Cero migraciones.**
 */

/* ------------------------------------------------------------------ *
 * Intenciones (las tres puertas)
 * ------------------------------------------------------------------ */

export const CONTACT_INTENTS = ["mito", "correccion", "consulta"];

/**
 * Puerta por defecto: la genérica. Cuando llega una intención que no
 * reconocemos (cliente viejo, bot, typo) NO reventamos ni inventamos un
 * asunto: caemos a "Otra consulta", que es la forma más corta y la única que
 * no promete estructura que no tenemos.
 */
export const DEFAULT_CONTACT_INTENT = "consulta";

export const CONTACT_INTENT_LABELS = {
  mito: "Comparto un mito",
  correccion: "Corrijo un dato",
  consulta: "Otra consulta",
};

/** Prefijo del `subject`: es lo que deja la bandeja de /admin ya clasificada. */
export const CONTACT_SUBJECT_PREFIXES = {
  mito: "Aporte de mito",
  correccion: "Corrección",
  consulta: "Consulta",
};

/**
 * Orden visual de los campos de cada puerta. Lo usa el cliente para llevar el
 * foco al PRIMER campo con error (no al último), así que tiene que coincidir
 * con el orden en que se pintan.
 */
export const CONTACT_FIELD_ORDER = {
  mito: ["title", "region", "place", "story", "teller", "name", "email"],
  correccion: ["myth", "current", "proposed", "basis", "name", "email"],
  consulta: ["topic", "message", "name", "email"],
};

/* ------------------------------------------------------------------ *
 * Vocabularios cerrados
 * ------------------------------------------------------------------ */

/**
 * Regiones del archivo. Nunca dejamos pasar una región escrita a mano hacia el
 * `subject`: si no está en esta lista se convierte en "No estoy seguro".
 */
export const CONTACT_REGIONS = [
  "Andina",
  "Caribe",
  "Pacífico",
  "Orinoquía",
  "Amazonía",
  "Insular",
  "No estoy seguro",
];

export const CONTACT_REGION_FALLBACK = "No estoy seguro";

/** Asuntos de la puerta genérica. Mismo criterio: vocabulario cerrado. */
export const CONTACT_TOPICS = [
  "Prensa y entrevistas",
  "Uso de textos o ilustraciones",
  "Alianza institucional o comunitaria",
  "Colaboración de ilustración o diseño",
  "Otra cosa",
];

export const CONTACT_TOPIC_FALLBACK = "Otra cosa";

/* ------------------------------------------------------------------ *
 * Límites
 * ------------------------------------------------------------------ */

export const CONTACT_LIMITS = {
  nameMin: 2,
  nameMax: 80,
  emailMax: 160,
  /** Campos de una línea (título del relato, lugar, quién lo contó, fuente). */
  shortMax: 160,
  /** Mínimo de cualquier campo largo. Es el que ya exigía la ruta de API. */
  textMin: 10,
  /** La historia de un mito necesita algo más que una frase suelta. */
  storyMin: 30,
  textMax: 5000,
  /** El asunto se recorta antes de guardarlo: el título del relato es libre. */
  subjectMax: 120,
};

/* ------------------------------------------------------------------ *
 * Normalización
 * ------------------------------------------------------------------ */

/** Campos de una línea: colapsa todo el espacio en blanco, incluidos saltos. */
export function normalizeLine(value) {
  if (value === null || value === undefined) return "";
  return String(value).replace(/\s+/g, " ").trim();
}

/** Campos largos: conserva los párrafos, limpia el resto. */
export function normalizeBlock(value) {
  if (value === null || value === undefined) return "";
  return String(value)
    .replace(/\r\n?/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function normalizeEmail(value) {
  if (value === null || value === undefined) return "";
  return String(value).trim().toLowerCase();
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/** `ana@correo` — tiene arroba y dominio, pero le falta el punto final. */
const EMAIL_MISSING_TLD = /^[^\s@]+@[^\s@.]+$/;

export function isValidEmail(value) {
  const email = normalizeEmail(value);
  if (!email || email.length > CONTACT_LIMITS.emailMax) return false;
  return EMAIL_PATTERN.test(email);
}

/**
 * Normaliza una intención. Devuelve `null` si no es una de las tres — quien
 * llama decide. Para "dame algo con lo que pueda trabajar" está `resolveContactIntent`.
 */
export function normalizeContactIntent(value) {
  if (value === null || value === undefined) return null;
  const normalized = String(value).toLowerCase().trim();
  return CONTACT_INTENTS.includes(normalized) ? normalized : null;
}

/** Intención válida SIEMPRE: lo desconocido cae a la puerta genérica. */
export function resolveContactIntent(value) {
  return normalizeContactIntent(value) || DEFAULT_CONTACT_INTENT;
}

/** Un valor de un vocabulario cerrado, o el de reserva. Nunca texto libre. */
export function resolveFromVocabulary(value, vocabulary, fallback) {
  const candidate = normalizeLine(value);
  return vocabulary.includes(candidate) ? candidate : fallback;
}

/* ------------------------------------------------------------------ *
 * Mensajes de error (uno por campo, ya redactados para mostrar)
 * ------------------------------------------------------------------ */

export function nameError(value) {
  const name = normalizeLine(value);
  if (name.length < CONTACT_LIMITS.nameMin) {
    return "Escribe al menos dos caracteres.";
  }
  if (name.length > CONTACT_LIMITS.nameMax) {
    return `El nombre no puede pasar de ${CONTACT_LIMITS.nameMax} caracteres.`;
  }
  return null;
}

/**
 * El correo se explica solo cuando se puede: a `ana@correo` le proponemos
 * `ana@correo.com` en vez de decirle "inválido" y dejarla adivinando.
 */
export function emailError(value) {
  const email = normalizeEmail(value);
  if (!email) return "Escribe un correo para poder responderte.";
  if (email.length > CONTACT_LIMITS.emailMax) {
    return `El correo no puede pasar de ${CONTACT_LIMITS.emailMax} caracteres.`;
  }
  if (EMAIL_MISSING_TLD.test(email)) return `Falta el dominio: ${email}.com.`;
  if (!EMAIL_PATTERN.test(email)) return "Ese correo no parece completo. Revísalo.";
  return null;
}

function lineError(value, { required, emptyMessage }) {
  const text = normalizeLine(value);
  if (!text) return required ? emptyMessage : null;
  if (text.length > CONTACT_LIMITS.shortMax) {
    return `No puede pasar de ${CONTACT_LIMITS.shortMax} caracteres.`;
  }
  return null;
}

function blockError(value, { required, emptyMessage, min = CONTACT_LIMITS.textMin }) {
  const text = normalizeBlock(value);
  if (!text) return required ? emptyMessage : null;
  if (text.length < min) return `Escribe al menos ${min} caracteres.`;
  if (text.length > CONTACT_LIMITS.textMax) {
    return `No puede pasar de ${CONTACT_LIMITS.textMax} caracteres.`;
  }
  return null;
}

/* ------------------------------------------------------------------ *
 * Validación por puerta
 * ------------------------------------------------------------------ */

function validateShared(raw, errors) {
  const name = nameError(raw.name);
  if (name) errors.name = name;
  const email = emailError(raw.email);
  if (email) errors.email = email;
}

const VALIDATORS = {
  mito(raw, errors) {
    const title = lineError(raw.title, { required: false });
    if (title) errors.title = title;

    if (!normalizeLine(raw.region)) errors.region = "Elige una región.";

    const place = lineError(raw.place, { required: false });
    if (place) errors.place = place;

    const story = blockError(raw.story, {
      required: true,
      emptyMessage: "Cuéntanos la historia, aunque sea a pedazos.",
      min: CONTACT_LIMITS.storyMin,
    });
    if (story) errors.story = story;

    const teller = lineError(raw.teller, { required: false });
    if (teller) errors.teller = teller;
  },

  correccion(raw, errors) {
    const myth = lineError(raw.myth, {
      required: true,
      emptyMessage: "Dinos en qué mito, aunque sea el nombre aproximado.",
    });
    if (myth) errors.myth = myth;

    const current = blockError(raw.current, {
      required: true,
      emptyMessage: "Copia el fragmento que hay que ajustar.",
    });
    if (current) errors.current = current;

    const proposed = blockError(raw.proposed, {
      required: true,
      emptyMessage: "Escríbelo como crees que es correcto.",
    });
    if (proposed) errors.proposed = proposed;

    const basis = lineError(raw.basis, { required: false });
    if (basis) errors.basis = basis;
  },

  consulta(raw, errors) {
    if (!normalizeLine(raw.topic)) errors.topic = "Elige un asunto.";

    const message = blockError(raw.message, {
      required: true,
      emptyMessage: "Escribe tu mensaje.",
    });
    if (message) errors.message = message;
  },
};

/**
 * Valida lo que llega de una de las tres puertas.
 *
 * Devuelve SIEMPRE la misma forma: `{ ok, intent, errors, fields }`.
 * `errors` es un mapa `campo → mensaje` (vacío cuando `ok`), `fields` trae los
 * valores ya normalizados, listos para serializar.
 *
 * Un `intent` desconocido no es un error: se valida como "consulta".
 */
export function validateContactIntentSubmission(raw = {}) {
  const intent = resolveContactIntent(raw.intent);
  const errors = {};

  VALIDATORS[intent](raw, errors);
  validateShared(raw, errors);

  const fields = {
    name: normalizeLine(raw.name),
    email: normalizeEmail(raw.email),
    title: normalizeLine(raw.title),
    region: resolveFromVocabulary(raw.region, CONTACT_REGIONS, CONTACT_REGION_FALLBACK),
    place: normalizeLine(raw.place),
    story: normalizeBlock(raw.story),
    teller: normalizeLine(raw.teller),
    myth: normalizeLine(raw.myth),
    current: normalizeBlock(raw.current),
    proposed: normalizeBlock(raw.proposed),
    basis: normalizeLine(raw.basis),
    topic: resolveFromVocabulary(raw.topic, CONTACT_TOPICS, CONTACT_TOPIC_FALLBACK),
    message: normalizeBlock(raw.message),
  };

  return { ok: Object.keys(errors).length === 0, intent, errors, fields };
}

/**
 * Devuelve el primer campo con error siguiendo el orden VISUAL de la puerta,
 * no el orden en que se descubrieron. Es lo que decide a dónde va el foco.
 */
export function firstInvalidField(intent, errors = {}) {
  const order = CONTACT_FIELD_ORDER[resolveContactIntent(intent)];
  return order.find((field) => errors[field]) || null;
}

/* ------------------------------------------------------------------ *
 * Serialización a `subject` + `message`
 * ------------------------------------------------------------------ */

function truncate(value, max) {
  const text = String(value ?? "");
  if (text.length <= max) return text;
  return `${text.slice(0, Math.max(0, max - 1)).trimEnd()}…`;
}

/**
 * El asunto es lo único que se ve sin abrir el mensaje en /admin, así que
 * carga la clasificación completa: puerta + el dato que permite priorizar.
 *
 *   Aporte de mito · Andina
 *   Corrección · La Madremonte
 *   Consulta · Prensa y entrevistas
 */
export function buildContactSubject(intent, fields = {}) {
  const door = resolveContactIntent(intent);
  const prefix = CONTACT_SUBJECT_PREFIXES[door];

  let qualifier = "";
  if (door === "mito") {
    qualifier = resolveFromVocabulary(fields.region, CONTACT_REGIONS, CONTACT_REGION_FALLBACK);
  } else if (door === "correccion") {
    qualifier = normalizeLine(fields.myth);
  } else {
    qualifier = resolveFromVocabulary(fields.topic, CONTACT_TOPICS, CONTACT_TOPIC_FALLBACK);
  }

  const subject = qualifier ? `${prefix} · ${qualifier}` : prefix;
  return truncate(subject, CONTACT_LIMITS.subjectMax);
}

/** `Etiqueta: valor`, y nada si el valor viene vacío. */
function line(label, value) {
  const text = normalizeLine(value);
  return text ? `${label}: ${text}` : null;
}

/** Bloque largo con su rótulo encima, para que se lea sin adivinar qué es qué. */
function block(label, value) {
  const text = normalizeBlock(value);
  return text ? `${label}:\n${text}` : null;
}

/**
 * Texto plano, con rótulos fijos y un bloque por campo largo. /admin lo pinta
 * con `whitespace-pre-line`, así que esto es literalmente lo que se lee allá.
 */
export function buildContactMessage(intent, fields = {}) {
  const door = resolveContactIntent(intent);

  if (door === "mito") {
    return [
      [
        line("Relato", fields.title),
        line(
          "Región",
          resolveFromVocabulary(fields.region, CONTACT_REGIONS, CONTACT_REGION_FALLBACK)
        ),
        line("Lugar", fields.place),
        line("Quién se lo contó", fields.teller),
      ]
        .filter(Boolean)
        .join("\n"),
      block("La historia", fields.story),
    ]
      .filter(Boolean)
      .join("\n\n");
  }

  if (door === "correccion") {
    return [
      [line("Mito", fields.myth), line("En qué se basa", fields.basis)]
        .filter(Boolean)
        .join("\n"),
      block("Qué dice hoy", fields.current),
      block("Qué debería decir", fields.proposed),
    ]
      .filter(Boolean)
      .join("\n\n");
  }

  return [
    line("Asunto", resolveFromVocabulary(fields.topic, CONTACT_TOPICS, CONTACT_TOPIC_FALLBACK)),
    normalizeBlock(fields.message),
  ]
    .filter(Boolean)
    .join("\n\n");
}

/* ------------------------------------------------------------------ *
 * Camino heredado: `{ name, email, subject, message }` sin intención
 * ------------------------------------------------------------------ */

/**
 * El contrato viejo de `POST /api/contact` sigue vivo. Mismos mínimos que
 * antes (nombre ≥ 2, mensaje ≥ 10); lo único que se apretó es el correo, que
 * antes pasaba con sólo tener una arroba.
 */
export function validateLegacyContact(raw = {}) {
  const errors = {};

  const name = nameError(raw.name);
  if (name) errors.name = name;

  const email = emailError(raw.email);
  if (email) errors.email = email;

  const message = blockError(raw.message, {
    required: true,
    emptyMessage: "Escribe tu mensaje.",
  });
  if (message) errors.message = message;

  const subject = normalizeLine(raw.subject);

  return {
    ok: Object.keys(errors).length === 0,
    errors,
    fields: {
      name: normalizeLine(raw.name),
      email: normalizeEmail(raw.email),
      subject: subject ? truncate(subject, CONTACT_LIMITS.subjectMax) : "Sin asunto",
      message: normalizeBlock(raw.message),
    },
  };
}

/* ------------------------------------------------------------------ *
 * Punto de entrada único de la ruta de API
 * ------------------------------------------------------------------ */

const LEGACY_FIELD_ORDER = ["name", "email", "message"];

/**
 * Convierte lo que llegue por la red en las cuatro columnas que acepta
 * `addContactMessage`: `{ name, email, subject, message }`.
 *
 * - Sin `intent` → camino heredado, igual que siempre.
 * - Con `intent` → tres puertas; una intención desconocida se atiende como
 *   "Otra consulta" en vez de reventar.
 *
 * Devuelve `{ ok: true, intent, value }` o
 * `{ ok: false, intent, errors, field, error }`, donde `field`/`error` son el
 * primer problema en orden visual (la ruta responde con eso para no romper a
 * quien lea sólo `payload.error`).
 */
export function serializeContactSubmission(raw = {}) {
  const hasIntent =
    raw.intent !== undefined && raw.intent !== null && String(raw.intent).trim() !== "";

  if (!hasIntent) {
    const legacy = validateLegacyContact(raw);
    if (!legacy.ok) {
      const field = LEGACY_FIELD_ORDER.find((key) => legacy.errors[key]) || null;
      return {
        ok: false,
        intent: null,
        errors: legacy.errors,
        field,
        error: field ? legacy.errors[field] : "Revisa los campos marcados.",
      };
    }
    return { ok: true, intent: null, value: legacy.fields };
  }

  const { ok, intent, errors, fields } = validateContactIntentSubmission(raw);
  if (!ok) {
    const field = firstInvalidField(intent, errors);
    return {
      ok: false,
      intent,
      errors,
      field,
      error: field ? errors[field] : "Revisa los campos marcados.",
    };
  }

  return {
    ok: true,
    intent,
    value: {
      name: fields.name,
      email: fields.email,
      subject: buildContactSubject(intent, fields),
      message: buildContactMessage(intent, fields),
    },
  };
}
