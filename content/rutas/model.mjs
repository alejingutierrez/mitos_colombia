/**
 * Modelo de las rutas editoriales · contrato y normalización.
 *
 * Este módulo es PURO: no importa `next/*`, ni la base de datos, ni nada de
 * `src/`. Por eso lo pueden cargar por igual el servidor (`src/lib/routes.js`)
 * y un test de node (`scripts/rutas.test.mjs`).
 *
 * ── Por qué existe ────────────────────────────────────────────────────────
 * Hasta ahora una ruta declaraba sus mitos por TÍTULO en español y el código
 * los buscaba con coincidencia difusa. Bastaba con corregir el título de un
 * mito para que la ruta lo perdiera en silencio: el 15 % de los enlaces
 * curados apuntaba al relato equivocado y otro puñado no apuntaba a nada.
 * Aquí la pertenencia se declara por SLUG, que es la identidad estable de un
 * relato en el archivo y lo que ya vive en su URL. El título puede cambiar
 * cuantas veces haga falta.
 *
 * ── Forma de una ruta (lo que se escribe en content/rutas/<slug>.mjs) ─────
 *
 *   slug          string   · obligatorio · identidad y URL: /rutas/<slug>
 *   title         string   · obligatorio · nombre editorial
 *   description   string   · una línea; respaldo de la meta description
 *   detail        string   · una línea más corta, para bandas y tarjetas
 *   tone          string   · etiqueta de atmósfera («Ríos y neblina»)
 *   accent        string   · river | jungle | ember | ink
 *   keywords      string[] · términos SEO de respaldo
 *   intro         string | string[] · prosa de apertura; admite varios párrafos
 *   galleryIntro  string   · línea que presenta el conjunto de relatos
 *   closing       string | string[] · cierre editorial (opcional)
 *   cover         string   · slug del mito de portada; debe estar en `myths`
 *   myths         Array    · CENSO de la ruta, en orden de lectura:
 *                              { slug, label?, featured?, note? }
 *   momentos      Array    · etapas del recorrido:
 *                              { slug, title, summary?, prose?, myths? }
 *                            `myths` referencia slugs YA declarados en el censo.
 *
 * `label` es la manera en que la curaduría nombra el relato dentro de la ruta.
 * Es texto de presentación: NUNCA se usa para buscar el mito.
 * `note` es una nota interna de curaduría; no se renderiza.
 *
 * ── Migrar esto a la base de datos más adelante ───────────────────────────
 * Cada archivo es un objeto plano serializable. Un importador futuro sólo
 * tiene que recorrer `RUTAS`, guardar cada objeto tal cual (o normalizado con
 * `normalizeRuta`) y hacer que `src/lib/routes.js` lea de la tabla en vez del
 * índice. El resto de la aplicación no se entera: consume rutas normalizadas.
 */

export const RUTA_ACCENTS = ["river", "jungle", "ember", "ink"];

export const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function isWellFormedSlug(value) {
  return typeof value === "string" && SLUG_PATTERN.test(value);
}

/**
 * Acepta un string (con párrafos separados por línea en blanco) o un array de
 * párrafos y devuelve siempre un array limpio.
 */
export function toParagraphs(value) {
  if (!value) return [];
  const list = Array.isArray(value) ? value : String(value).split(/\n{2,}/);
  return list
    .map((paragraph) => String(paragraph == null ? "" : paragraph).trim())
    .filter(Boolean);
}

function text(value) {
  const trimmed = String(value == null ? "" : value).trim();
  return trimmed || "";
}

function normalizeMythEntry(entry) {
  const raw = typeof entry === "string" ? { slug: entry } : entry || {};
  const slug = text(raw.slug);
  if (!slug) return null;
  const normalized = { slug };
  const label = text(raw.label);
  if (label) normalized.label = label;
  if (raw.featured) normalized.featured = true;
  const note = text(raw.note);
  if (note) normalized.note = note;
  return Object.freeze(normalized);
}

function normalizeMomento(raw, allowedSlugs) {
  const slug = text(raw?.slug);
  const title = text(raw?.title);
  if (!slug && !title) return null;

  const prose = toParagraphs(raw?.prose);
  const myths = (Array.isArray(raw?.myths) ? raw.myths : [])
    .map((item) => text(typeof item === "string" ? item : item?.slug))
    .filter(Boolean)
    // Un momento sólo puede citar mitos que la ruta ya declaró. Si alguien
    // escribe uno de más, aquí se cae y `validateRutas` lo denuncia.
    .filter((mythSlug) => allowedSlugs.has(mythSlug));

  return Object.freeze({
    slug: slug || title,
    title,
    summary: text(raw?.summary),
    prose: prose.join("\n\n"),
    proseParagraphs: Object.freeze(prose),
    myths: Object.freeze(myths),
  });
}

/**
 * Convierte una ruta escrita a mano en la forma que consume la aplicación.
 * Añade campos derivados y una capa de compatibilidad con el modelo anterior
 * (`highlights`, `curated`) para que las páginas actuales sigan funcionando.
 */
export function normalizeRuta(raw) {
  const slug = text(raw?.slug);
  const title = text(raw?.title);

  const seen = new Set();
  const myths = [];
  (Array.isArray(raw?.myths) ? raw.myths : []).forEach((entry) => {
    const normalized = normalizeMythEntry(entry);
    if (!normalized || seen.has(normalized.slug)) return;
    seen.add(normalized.slug);
    myths.push(normalized);
  });

  const mythSlugs = myths.map((myth) => myth.slug);
  const allowed = new Set(mythSlugs);

  const declaredCover = text(raw?.cover);
  const cover = allowed.has(declaredCover)
    ? declaredCover
    : mythSlugs[0] || null;

  const momentos = (Array.isArray(raw?.momentos) ? raw.momentos : [])
    .map((momento) => normalizeMomento(momento, allowed))
    .filter(Boolean);

  const assigned = new Set(momentos.flatMap((momento) => momento.myths));
  const looseMythSlugs = mythSlugs.filter((mythSlug) => !assigned.has(mythSlug));

  const featured = myths.filter((myth) => myth.featured);
  const rest = myths.filter((myth) => !myth.featured);
  const labelOf = (myth) => myth.label || myth.slug;

  const intro = toParagraphs(raw?.intro);
  const closing = toParagraphs(raw?.closing);

  return Object.freeze({
    slug,
    title,
    description: text(raw?.description),
    detail: text(raw?.detail),
    tone: text(raw?.tone),
    accent: RUTA_ACCENTS.includes(raw?.accent) ? raw.accent : "river",
    keywords: Object.freeze(
      (Array.isArray(raw?.keywords) ? raw.keywords : []).map(text).filter(Boolean)
    ),

    intro: intro.join("\n\n"),
    introParagraphs: Object.freeze(intro),
    galleryIntro: text(raw?.galleryIntro),
    closing: closing.join("\n\n"),
    closingParagraphs: Object.freeze(closing),

    cover,
    myths: Object.freeze(myths),
    mythSlugs: Object.freeze(mythSlugs),
    momentos: Object.freeze(momentos),
    looseMythSlugs: Object.freeze(looseMythSlugs),

    /* ── Compatibilidad con el modelo anterior ─────────────────────────────
       `highlights` es lo que la plantilla de detalle pinta como «El itinerario»
       y sale de los momentos. `curated` conserva los nombres viejos porque hay
       páginas que todavía los leen; ahora son texto de presentación derivado
       del censo, no la manera de encontrar el mito. */
    highlights: Object.freeze(
      momentos.map((momento) =>
        Object.freeze({ title: momento.title, description: momento.summary })
      )
    ),
    curated: Object.freeze({
      coverTitle:
        myths.find((myth) => myth.slug === cover)?.label || cover || "",
      heroTitles: Object.freeze(featured.map(labelOf)),
      galleryTitles: Object.freeze(rest.map(labelOf)),
      coverSlug: cover,
      heroSlugs: Object.freeze(featured.map((myth) => myth.slug)),
      gallerySlugs: Object.freeze(rest.map((myth) => myth.slug)),
      mythSlugs: Object.freeze(mythSlugs),
    }),
  });
}

export function normalizeRutas(list) {
  return Object.freeze((Array.isArray(list) ? list : []).map(normalizeRuta));
}

function normalizeLabel(value) {
  return String(value == null ? "" : value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/**
 * Índice etiqueta → slug. Lo usa la capa de compatibilidad para que las páginas
 * que todavía piden mitos por título los reciban por slug, sin coincidencia
 * difusa. Una etiqueta que apunte a dos mitos distintos se marca ambigua y se
 * descarta: `validateRutas` la denuncia para que la curaduría la desempate.
 */
export function buildLabelIndex(rutas) {
  const index = new Map();
  const ambiguous = new Set();

  (rutas || []).forEach((ruta) => {
    (ruta.myths || []).forEach((myth) => {
      [myth.label, myth.slug].filter(Boolean).forEach((candidate) => {
        const key = normalizeLabel(candidate);
        if (!key) return;
        const current = index.get(key);
        if (current && current !== myth.slug) {
          ambiguous.add(key);
          return;
        }
        index.set(key, myth.slug);
      });
    });
  });

  ambiguous.forEach((key) => index.delete(key));
  return { index, ambiguous, normalizeLabel };
}

/**
 * Revisa el censo completo y devuelve una lista de problemas legibles.
 * Array vacío = todo en orden. La usa `scripts/rutas.test.mjs`.
 */
export function validateRutas(rutas) {
  const problems = [];
  const list = Array.isArray(rutas) ? rutas : [];
  const seenRouteSlugs = new Set();

  list.forEach((ruta, index) => {
    const where = ruta.slug || `ruta #${index + 1}`;

    if (!isWellFormedSlug(ruta.slug)) {
      problems.push(`${where}: el slug de la ruta no es válido`);
    } else if (seenRouteSlugs.has(ruta.slug)) {
      problems.push(`${where}: slug de ruta repetido`);
    } else {
      seenRouteSlugs.add(ruta.slug);
    }

    if (!ruta.title) problems.push(`${where}: falta el título`);
    if (!ruta.description) problems.push(`${where}: falta la descripción`);
    if (!RUTA_ACCENTS.includes(ruta.accent)) {
      problems.push(`${where}: acento desconocido «${ruta.accent}»`);
    }
    if (!ruta.myths.length) {
      problems.push(`${where}: la ruta no declara ningún mito`);
    }

    const declared = new Set();
    ruta.myths.forEach((myth) => {
      if (!isWellFormedSlug(myth.slug)) {
        problems.push(`${where}: slug de mito mal formado «${myth.slug}»`);
      }
      if (declared.has(myth.slug)) {
        problems.push(`${where}: el mito «${myth.slug}» está repetido`);
      }
      declared.add(myth.slug);
    });

    if (!ruta.cover) {
      problems.push(`${where}: no hay mito de portada`);
    } else if (!declared.has(ruta.cover)) {
      problems.push(`${where}: la portada «${ruta.cover}» no está en el censo`);
    }

    const momentoSlugs = new Set();
    const assigned = new Map();
    ruta.momentos.forEach((momento) => {
      if (!momento.title) {
        problems.push(`${where}: un momento no tiene título`);
      }
      if (!isWellFormedSlug(momento.slug)) {
        problems.push(`${where}: slug de momento mal formado «${momento.slug}»`);
      }
      if (momentoSlugs.has(momento.slug)) {
        problems.push(`${where}: momento repetido «${momento.slug}»`);
      }
      momentoSlugs.add(momento.slug);

      const inThisMomento = new Set();
      momento.myths.forEach((mythSlug) => {
        if (!declared.has(mythSlug)) {
          problems.push(
            `${where}/${momento.slug}: cita «${mythSlug}», que la ruta no declara`
          );
        }
        if (inThisMomento.has(mythSlug)) {
          problems.push(
            `${where}/${momento.slug}: «${mythSlug}» está repetido en el momento`
          );
        }
        inThisMomento.add(mythSlug);
        if (assigned.has(mythSlug)) {
          problems.push(
            `${where}: «${mythSlug}» está en dos momentos (${assigned.get(
              mythSlug
            )} y ${momento.slug})`
          );
        } else {
          assigned.set(mythSlug, momento.slug);
        }
      });
    });
  });

  const { ambiguous } = buildLabelIndex(list);
  ambiguous.forEach((key) => {
    problems.push(
      `etiqueta ambigua «${key}»: nombra a dos mitos distintos en el censo`
    );
  });

  return problems;
}
