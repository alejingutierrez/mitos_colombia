import { getSqlClient, getSqliteDb, isPostgres } from "./db";

export const ROUTES = [
  {
    slug: "guardianes-del-agua",
    title: "Guardianes del agua",
    description:
      "Guardianes, pactos y relatos donde el agua dicta el equilibrio del territorio.",
    detail: "Ríos sagrados, lagunas encantadas y pactos con el agua.",
    intro:
      "En esta ruta el agua es territorio sagrado: ríos que escuchan, lagunas que recuerdan y corrientes que advierten. Los relatos hablan de guardianes, pactos y castigos que sostienen el equilibrio.",
    galleryIntro:
      "Selección curada de mitos donde el agua es protagonista y los guardianes sostienen la memoria del territorio.",
    tone: "Ríos y neblina",
    accent: "river",
    keywords: ["agua", "laguna", "mohan", "poira", "madre", "tesoro", "pescadores"],
    highlights: [
      {
        title: "Ríos con memoria",
        description: "Relatos donde el río escucha, responde y protege.",
      },
      {
        title: "Lagunas sagradas",
        description: "Pactos, ofrendas y tesoros custodiados por el agua.",
      },
      {
        title: "Corrientes invisibles",
        description: "Señales que anuncian cambio, castigo o renacimiento.",
      },
    ],
    curated: {
      coverTitle: "La madre agua",
      heroTitles: [
        "La madre agua",
        "Héntserá y el agua",
        "Lagunas encantadas",
      ],
      galleryTitles: [
        "Zequiel",
        "El tesoro de Caribare",
        "Kugï y Nokuerai",
        "El retorno de plumón amarillo",
        "El origen del agua",
        "El Carriazo de vereda San Isidro",
        "El Reventón de Jacobo",
      ],
    },
  },
  {
    slug: "cartografia-selva",
    title: "Cartografía de la selva",
    description: "Relatos de monte donde la selva marca fronteras invisibles.",
    detail: "Mapas vivos, límites sagrados y guardianes del monte.",
    intro:
      "La selva se lee como un mapa: señales en las hojas, brumas que desvían y guardianes que ponen límites. Esta ruta reúne relatos que enseñan a leer el territorio.",
    galleryIntro:
      "Mitos de selva donde los guardianes trazan fronteras, rutas y señales invisibles.",
    tone: "Selva y bruma",
    accent: "jungle",
    keywords: ["selva", "monte", "cazador", "tigre", "castigo", "venganza"],
    highlights: [
      {
        title: "Fronteras vivas",
        description: "Fronteras simbólicas entre lo humano y lo sagrado.",
      },
      {
        title: "Señales del monte",
        description: "Hojas, bruma y sonidos que orientan al viajero.",
      },
      {
        title: "Guardianes del territorio",
        description: "Presencias que castigan el exceso y cuidan la selva.",
      },
    ],
    curated: {
      coverTitle: "Los muertos en el monte",
      heroTitles: [
        "Los muertos en el monte",
        "La sed da los civilizados",
        "El Morrocoyo",
      ],
      galleryTitles: [
        "Juma",
        "Peleas y aventuras entre el sobrino conejo y el tío tigre",
        "Dïïjoma",
        "Kugï y Nokuerai",
        "Jobiya Jitoma",
        "Yepá castiaga a los animales",
        "El cazador",
      ],
    },
  },
  {
    slug: "bestiario-colombiano",
    title: "Bestiario colombiano",
    description: "Criaturas que encarnan miedos, pactos y fuerzas del paisaje.",
    detail: "Bestias tutelares, serpientes y metamorfosis.",
    intro:
      "Un bestiario de seres fronterizos: mitad castigo, mitad advertencia. Aquí conviven serpientes, felinos míticos y guardianes que sostienen el equilibrio del territorio.",
    galleryIntro:
      "Relatos donde las criaturas marcan límites, castigos y transformaciones.",
    tone: "Sombras y fuego",
    accent: "ember",
    keywords: ["caiman", "tigre", "serpiente", "brujo", "transformacion", "bestia"],
    highlights: [
      {
        title: "Metamorfosis",
        description: "Cuerpos que cambian para advertir o castigar.",
      },
      {
        title: "Fieras tutelares",
        description: "Serpientes, tigres y bestias que custodian el territorio.",
      },
      {
        title: "Advertencias",
        description: "Historias que marcan rutas peligrosas.",
      },
    ],
    curated: {
      coverTitle: "El hombre que soñó con caimán",
      heroTitles: [
        "El hombre que soñó con caimán",
        "Los brujos",
        "El hombre caimán",
      ],
      galleryTitles: [
        "El hombre tigre",
        "El tigre",
        "La niña que se volvió serpiente",
        "Yepá castiaga a los animales",
        "Aribamias",
        "Tasime (El Incesto)",
        "La vieja colmillona",
      ],
    },
  },
  {
    slug: "bosques-y-niebla",
    title: "Bosques y niebla",
    description: "Relatos en bosque húmedo donde la bruma guía y extravía.",
    detail: "Hojarasquín, duendes y sombras del monte.",
    intro:
      "El bosque guarda secretos y pactos. La niebla no solo cubre: guía, oculta y protege. Esta ruta recorre relatos donde el follaje es un umbral.",
    galleryIntro:
      "Historias donde la bruma, el musgo y el bosque marcan fronteras sagradas.",
    tone: "Humedad y bruma",
    accent: "jungle",
    keywords: ["bosque", "niebla", "monte", "pacto", "cazador", "diablo", "redencion"],
    highlights: [
      {
        title: "Bruma protectora",
        description: "La niebla como manto que guía o extravía.",
      },
      {
        title: "Duendes del bosque",
        description: "Travesuras que enseñan respeto por el monte.",
      },
      {
        title: "Sombras del monte",
        description: "Presencias que aparecen al borde del camino.",
      },
    ],
    curated: {
      coverTitle: "El Dominguez",
      heroTitles: [
        "El Dominguez",
        "Los muertos en el monte",
        "El diablo del puente del Común",
      ],
      galleryTitles: [
        "El Doctor Galeacer",
        "Historia de un viejo",
        "Coste",
        "El dalo",
        "El guatín astuto",
        "Tal para cual",
        "El cazador",
      ],
    },
  },
  {
    slug: "criaturas-nocturnas",
    title: "Criaturas nocturnas",
    description: "Apariciones y lamentos que se cuentan para sobrevivir la noche.",
    detail: "Sombras, lamentos y presencias al filo de la noche.",
    intro:
      "En la noche se cruzan voces, presencias y advertencias. Son relatos para reconocer señales, cuidar los caminos y entender lo que ocurre cuando todo se apaga.",
    galleryIntro:
      "Relatos de apariciones y presencias que se cuentan para sobrevivir la noche.",
    tone: "Noches rituales",
    accent: "ink",
    keywords: ["fantasma", "diablo", "pacto", "noche", "bus", "guango", "misterio"],
    highlights: [
      {
        title: "Lamentos",
        description: "Voces que viajan con el viento y recuerdan tragedias.",
      },
      {
        title: "Apariciones",
        description: "Presencias que avisan peligros en la oscuridad.",
      },
      {
        title: "Rituales nocturnos",
        description: "Noches donde los pactos se cierran.",
      },
    ],
    curated: {
      coverTitle: "El diablo del puente del Común",
      heroTitles: [
        "El diablo del puente del Común",
        "Los fantasmas",
        "El Doctor Galeacer",
      ],
      galleryTitles: [
        "El fantasma de El Horizonte",
        "No hay deuda que no se pague",
        "El diablo",
        "El guango",
        "El bus fantasma",
        "Taik",
        "La niña de la carta",
      ],
    },
  },
  {
    slug: "ritos-del-mar",
    title: "Ritos del mar",
    description: "Mareas, sirenas y guardianes costeros en el litoral colombiano.",
    detail: "Cantos de marea, barcos y pactos marinos.",
    intro:
      "El mar se lee en cantos, ofrendas y tempestades. Esta ruta reúne mitos de costas, sirenas y guardianes del litoral.",
    galleryIntro:
      "Historias donde el mar es oráculo, peligro y refugio para las comunidades.",
    tone: "Mareas y sal",
    accent: "river",
    keywords: ["mar", "playa", "barco", "fantasma", "caribe", "marea", "costero"],
    highlights: [
      {
        title: "Cantos y sirenas",
        description: "Voces saladas que seducen y protegen.",
      },
      {
        title: "Guardianes costeros",
        description: "Seres que custodian puertos y manglares.",
      },
      {
        title: "Tempestades",
        description: "Relatos nacidos del riesgo del mar.",
      },
    ],
    curated: {
      coverTitle: "Marineritis sentimental",
      heroTitles: [
        "Marineritis sentimental",
        "Madre de playa",
        "El barco fantasma",
      ],
      galleryTitles: [
        "El padre Mera",
        "Creación",
        "El héroe",
        "El castellano de San Juan",
        "El mal del mar",
        "En el sitio de Morillo",
        "El Incesto",
      ],
    },
  },
  {
    slug: "fronteras-y-caminos",
    title: "Fronteras y caminos",
    description: "Cruces de camino y viajes sagrados donde se prueban los pactos.",
    detail: "Puentes, trochas y viajes entre mundos.",
    intro:
      "Toda ruta tiene un umbral. Aquí los caminos son pruebas: puentes, cruces y viajes sagrados donde se sellan pactos.",
    galleryIntro:
      "Relatos donde viajar implica negociar con fuerzas invisibles y guardianes.",
    tone: "Cruces y caminos",
    accent: "ember",
    keywords: ["camino", "viaje", "puente", "ultratumba", "infierno", "tunjo", "redencion"],
    highlights: [
      {
        title: "Puentes y umbrales",
        description: "Lugares donde el viaje cambia de rumbo.",
      },
      {
        title: "Viajes sagrados",
        description: "Relatos de desplazamientos, canoas y pasos secretos.",
      },
      {
        title: "Pactos de camino",
        description: "Promesas que salvan o condenan.",
      },
    ],
    curated: {
      coverTitle: "El diablo del puente del Común",
      heroTitles: [
        "El diablo del puente del Común",
        "Kugï y Nokuerai",
        "El mundo de ultratumba",
      ],
      galleryTitles: [
        "El viaje al cielo",
        "La mina de oro en el infierno",
        "El tunjo",
        "La vista del libertador",
        "El hombre flaco",
        "La vieja, el burro y los huevos",
        "La comida para los muertos",
      ],
    },
  },
  {
    slug: "voces-urbanas",
    title: "Voces urbanas",
    description: "Leyendas coloniales y rumores actuales que siguen vivos en la ciudad.",
    detail: "Callejones, plazas y memorias urbanas.",
    intro:
      "La ciudad también guarda mitos: relatos que viajan de barrio en barrio, adaptándose a nuevas plazas y edificios.",
    galleryIntro:
      "Historias urbanas donde la memoria colonial y los rumores actuales se cruzan.",
    tone: "Ciudad y eco",
    accent: "ink",
    keywords: ["bogota", "tranvia", "ascensor", "teatro", "ciudad", "urbano", "plaza"],
    highlights: [
      {
        title: "Rumores de barrio",
        description: "Relatos que circulan entre plazas y callejones.",
      },
      {
        title: "Sombras coloniales",
        description: "Memorias de ciudades portuarias y plazas antiguas.",
      },
      {
        title: "Mitos contemporáneos",
        description: "Historias que se adaptan al ritmo urbano.",
      },
    ],
    curated: {
      coverTitle: "El bobo del tranvía",
      heroTitles: [
        "El bobo del tranvía",
        "El toro en el ascensor",
        "Anansi",
      ],
      galleryTitles: [
        "El chenche",
        "La confesión",
        "La sombra",
        "En el sitio de Morillo",
        "El mono de la pila",
        "El fantasma del teatro azul",
        "Una reunión clandestina",
      ],
    },
  },
  {
    slug: "montanas-paramos",
    title: "Montañas y páramos",
    description: "Alturas sagradas, lagunas de cima y guardianes del frío.",
    detail: "Cumbres sagradas, lagunas de altura y viento frío.",
    intro:
      "En las cumbres se guarda el agua y la memoria. Esta ruta reúne relatos de montañas, lagunas sagradas y guardianes del frío.",
    galleryIntro:
      "Relatos de altura donde el viento y las lagunas marcan el ritmo del territorio.",
    tone: "Alturas y viento",
    accent: "river",
    keywords: ["cerro", "paramo", "laguna", "tesoro", "encantado", "montana", "sierra"],
    highlights: [
      {
        title: "Lagunas de altura",
        description: "Ofrendas y tesoros que descansan en la cima.",
      },
      {
        title: "Guardianes de la sierra",
        description: "Cumbres protegidas por espíritus y custodios.",
      },
      {
        title: "Viento frío",
        description: "Señales que anuncian cambios de estación.",
      },
    ],
    curated: {
      coverTitle: "Lagunas encantadas",
      heroTitles: [
        "Lagunas encantadas",
        "La laguna de María Panana.",
        "Tradición del cerro",
      ],
      galleryTitles: [
        "Fu, el dios de la torpeza",
        "Namaku",
        "El tesoro de Buzaga",
        "El cerro encantado",
        "La visita del joven desconocido",
        "El Incesto",
        "La chama",
      ],
    },
  },
];

const ACCENT_STYLES = {
  river: {
    badge: "border-river-500/30 bg-river-500/10 text-river-600",
    text: "text-river-600",
    glow: "bg-river-500/25",
  },
  jungle: {
    badge: "border-jungle-500/30 bg-jungle-500/10 text-jungle-600",
    text: "text-jungle-600",
    glow: "bg-jungle-500/25",
  },
  ember: {
    badge: "border-ember-400/30 bg-ember-400/10 text-ember-600",
    text: "text-ember-600",
    glow: "bg-ember-400/30",
  },
  ink: {
    badge: "border-ink-500/30 bg-ink-500/10 text-ink-700",
    text: "text-ink-700",
    glow: "bg-ink-500/25",
  },
};

function normalizeInput(value) {
  if (!value) {
    return null;
  }
  const trimmed = String(value).trim().toLowerCase();
  return trimmed.length ? trimmed : null;
}

const TITLE_STOPWORDS = new Set([
  "el",
  "la",
  "los",
  "las",
  "del",
  "de",
  "y",
  "en",
  "al",
  "un",
  "una",
  "unos",
  "unas",
  "por",
  "para",
  "con",
]);

function stripDiacritics(value) {
  if (!value) {
    return "";
  }
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function normalizeTitle(value) {
  if (!value) {
    return "";
  }
  const cleaned = stripDiacritics(String(value).toLowerCase());
  return cleaned.replace(/[^a-z0-9]+/g, " ").trim();
}

function getTitleTokens(value) {
  const normalized = normalizeTitle(value);
  return normalized
    .split(" ")
    .map((token) => token.trim())
    .filter((token) => token.length > 2 && !TITLE_STOPWORDS.has(token));
}

function buildTitlePatterns(titles = []) {
  const patterns = new Set();

  titles
    .map((item) => (item ? String(item).trim() : ""))
    .filter(Boolean)
    .forEach((title) => {
      const noParens = title.replace(/\([^)]*\)/g, " ").trim();
      const noPunct = title.replace(/[^A-Za-z0-9\u00C0-\u017F]+/g, " ").trim();
      const normalized = normalizeTitle(title);
      const tokens = getTitleTokens(title);
      const compact = tokens.join(" ").trim();

      [title, noParens, noPunct, normalized, compact]
        .filter(Boolean)
        .forEach((candidate) => {
          const trimmed = candidate.trim();
          if (trimmed.length >= 4 && !TITLE_STOPWORDS.has(trimmed)) {
            patterns.add(trimmed);
          }
        });

      if (tokens.length) {
        const longest = tokens.reduce((acc, item) => (item.length > acc.length ? item : acc), "");
        if (longest.length >= 4) {
          patterns.add(longest);
        }
        if (tokens.length >= 2) {
          patterns.add(tokens.slice(0, 2).join(" "));
        }
        if (tokens.length >= 3) {
          patterns.add(tokens.slice(0, 3).join(" "));
        }
      }
    });

  return Array.from(patterns);
}

function scoreTitleMatch(requestedTitle, candidateTitle) {
  const requested = normalizeTitle(requestedTitle);
  const candidate = normalizeTitle(candidateTitle);

  if (!requested || !candidate) {
    return 0;
  }

  if (requested === candidate) {
    return 100;
  }

  let score = 0;
  if (candidate.includes(requested) || requested.includes(candidate)) {
    score += 50;
  }

  const requestedTokens = requested.split(" ").filter(Boolean);
  const candidateTokens = new Set(candidate.split(" ").filter(Boolean));
  let overlap = 0;
  requestedTokens.forEach((token) => {
    if (candidateTokens.has(token)) {
      overlap += 1;
    }
  });
  score += overlap * 10;

  if (requestedTokens.length) {
    const longest = requestedTokens.reduce(
      (acc, item) => (item.length > acc.length ? item : acc),
      ""
    );
    if (longest && candidate.includes(longest)) {
      score += 5;
    }
  }

  return score;
}

export function resolveMythsByTitles(titles, candidates = []) {
  const resolved = new Map();
  const used = new Set();

  titles.forEach((title) => {
    let best = null;
    let bestScore = 0;

    candidates.forEach((candidate) => {
      if (!candidate || used.has(candidate.slug)) {
        return;
      }
      const score = scoreTitleMatch(title, candidate.title);
      if (score > bestScore) {
        bestScore = score;
        best = candidate;
      }
    });

    if (best && bestScore > 0) {
      used.add(best.slug);
      resolved.set(title, best);
    } else {
      resolved.set(title, null);
    }
  });

  return resolved;
}

function clampNumber(value, min, max, fallback) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) {
    return fallback;
  }
  return Math.min(Math.max(parsed, min), max);
}

function buildKeywordWhereSqlite(keywords = []) {
  const clauses = [];
  const params = {};

  keywords
    .map((item) => normalizeInput(item))
    .filter(Boolean)
    .forEach((term, index) => {
      const key = `q${index}`;
      params[key] = `%${term}%`;
      clauses.push(
        `(
          myths.title LIKE :${key} OR
          myths.excerpt LIKE :${key} OR
          myths.content LIKE :${key} OR
          myths.tags_raw LIKE :${key} OR
          myths.focus_keywords_raw LIKE :${key} OR
          regions.name LIKE :${key} OR
          regions.slug LIKE :${key} OR
          communities.name LIKE :${key} OR
          communities.slug LIKE :${key}
        )`
      );
    });

  return {
    whereClause: clauses.length ? `WHERE ${clauses.join(" OR ")}` : "",
    params,
  };
}

function buildKeywordWherePostgres(keywords = []) {
  const clauses = [];
  const values = [];

  keywords
    .map((item) => normalizeInput(item))
    .filter(Boolean)
    .forEach((term) => {
      values.push(`%${term}%`);
      const idx = values.length;
      clauses.push(
        `(
          myths.title ILIKE $${idx} OR
          myths.excerpt ILIKE $${idx} OR
          myths.content ILIKE $${idx} OR
          myths.tags_raw ILIKE $${idx} OR
          myths.focus_keywords_raw ILIKE $${idx} OR
          regions.name ILIKE $${idx} OR
          regions.slug ILIKE $${idx} OR
          communities.name ILIKE $${idx} OR
          communities.slug ILIKE $${idx}
        )`
      );
    });

  return {
    whereClause: clauses.length ? `WHERE ${clauses.join(" OR ")}` : "",
    values,
  };
}

async function getRouteMythsPostgres({ keywords = [], limit = 12, seed = 0 }) {
  const sql = getSqlClient();
  const { whereClause, values } = buildKeywordWherePostgres(keywords);
  const limitValue = clampNumber(limit, 1, 24, 12);
  const seedValue = Number.isFinite(seed) ? seed : 0;
  const seedIndex = values.length + 1;
  const limitIndex = values.length + 2;

  try {
    const result = await sql.query(
      `
        SELECT
          myths.id,
          myths.title,
          myths.slug,
          myths.excerpt,
          myths.category_path,
          COALESCE(vi.image_url, myths.image_url) AS image_url,
          regions.name AS region,
          regions.slug AS region_slug,
          communities.name AS community,
          communities.slug AS community_slug
        FROM myths
        JOIN regions ON regions.id = myths.region_id
        LEFT JOIN communities ON communities.id = myths.community_id
        LEFT JOIN LATERAL (
          SELECT image_url
          FROM vertical_images
          WHERE entity_type = 'myth' AND entity_id = myths.id
          ORDER BY updated_at DESC NULLS LAST, created_at DESC NULLS LAST
          LIMIT 1
        ) vi ON true
        ${whereClause}
        ORDER BY
          CASE WHEN COALESCE(vi.image_url, myths.image_url) IS NOT NULL THEN 0 ELSE 1 END,
          (myths.id + $${seedIndex}) % 97,
          myths.id
        LIMIT $${limitIndex}
      `,
      [...values, seedValue, limitValue]
    );

    return result.rows;
  } catch (error) {
    console.error("[routes] vertical_images unavailable, fallback to myths.image_url", error);
    const result = await sql.query(
      `
        SELECT
          myths.id,
          myths.title,
          myths.slug,
          myths.excerpt,
          myths.category_path,
          myths.image_url,
          regions.name AS region,
          regions.slug AS region_slug,
          communities.name AS community,
          communities.slug AS community_slug
        FROM myths
        JOIN regions ON regions.id = myths.region_id
        LEFT JOIN communities ON communities.id = myths.community_id
        ${whereClause}
        ORDER BY
          CASE WHEN myths.image_url IS NOT NULL THEN 0 ELSE 1 END,
          (myths.id + $${seedIndex}) % 97,
          myths.id
        LIMIT $${limitIndex}
      `,
      [...values, seedValue, limitValue]
    );
    return result.rows;
  }
}

function getRouteMythsSqlite({ keywords = [], limit = 12, seed = 0 }) {
  const db = getSqliteDb();
  const { whereClause, params } = buildKeywordWhereSqlite(keywords);
  const limitValue = clampNumber(limit, 1, 24, 12);
  const seedValue = Number.isFinite(seed) ? seed : 0;

  try {
    const sql = `
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.category_path,
        COALESCE(
          (
            SELECT image_url
            FROM vertical_images vi
            WHERE vi.entity_type = 'myth' AND vi.entity_id = myths.id
            ORDER BY vi.updated_at DESC, vi.created_at DESC
            LIMIT 1
          ),
          myths.image_url
        ) AS image_url,
        regions.name AS region,
        regions.slug AS region_slug,
        communities.name AS community,
        communities.slug AS community_slug
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      ${whereClause}
      ORDER BY
        CASE WHEN image_url IS NOT NULL THEN 0 ELSE 1 END,
        (myths.id + :seed) % 97,
        myths.id
      LIMIT :limit
    `;

    return db.prepare(sql).all({ ...params, seed: seedValue, limit: limitValue });
  } catch (error) {
    console.error("[routes] vertical_images unavailable, fallback to myths.image_url", error);
    const sql = `
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.category_path,
        myths.image_url,
        regions.name AS region,
        regions.slug AS region_slug,
        communities.name AS community,
        communities.slug AS community_slug
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      ${whereClause}
      ORDER BY
        CASE WHEN myths.image_url IS NOT NULL THEN 0 ELSE 1 END,
        (myths.id + :seed) % 97,
        myths.id
      LIMIT :limit
    `;
    return db.prepare(sql).all({ ...params, seed: seedValue, limit: limitValue });
  }
}

export async function getRouteMyths({ keywords = [], limit = 12, seed = 0 } = {}) {
  if (isPostgres()) {
    return getRouteMythsPostgres({ keywords, limit, seed });
  }
  return getRouteMythsSqlite({ keywords, limit, seed });
}

function buildTitleWhereSqlite(patterns = []) {
  const clauses = [];
  const params = {};

  patterns
    .map((item) => (item ? String(item).trim().toLowerCase() : ""))
    .filter(Boolean)
    .forEach((pattern, index) => {
      const key = `t${index}`;
      params[key] = `%${pattern}%`;
      clauses.push(
        `(
          lower(myths.title) LIKE :${key} OR
          lower(myths.tags_raw) LIKE :${key} OR
          lower(myths.focus_keywords_raw) LIKE :${key} OR
          lower(myths.category_path) LIKE :${key}
        )`
      );
    });

  return {
    whereClause: clauses.length ? `WHERE ${clauses.join(" OR ")}` : "",
    params,
  };
}

async function getMythsByTitlesPostgres(titles = []) {
  const patterns = buildTitlePatterns(titles).map((pattern) => `%${pattern}%`);
  if (!patterns.length) {
    return [];
  }
  const sql = getSqlClient();

  try {
    const result = await sql.query(
      `
        SELECT
          myths.id,
          myths.title,
          myths.slug,
          myths.excerpt,
          myths.category_path,
          COALESCE(vi.image_url, myths.image_url) AS image_url,
          regions.name AS region,
          regions.slug AS region_slug,
          communities.name AS community,
          communities.slug AS community_slug
        FROM myths
        JOIN regions ON regions.id = myths.region_id
        LEFT JOIN communities ON communities.id = myths.community_id
        LEFT JOIN LATERAL (
          SELECT image_url
          FROM vertical_images
          WHERE entity_type = 'myth' AND entity_id = myths.id
          ORDER BY updated_at DESC NULLS LAST, created_at DESC NULLS LAST
          LIMIT 1
        ) vi ON true
        WHERE
          myths.title ILIKE ANY($1) OR
          myths.tags_raw ILIKE ANY($1) OR
          myths.focus_keywords_raw ILIKE ANY($1) OR
          myths.category_path ILIKE ANY($1)
      `,
      [patterns]
    );
    return result.rows;
  } catch (error) {
    console.error("[routes] fallback: myths by titles without vertical_images", error);
    const result = await sql.query(
      `
        SELECT
          myths.id,
          myths.title,
          myths.slug,
          myths.excerpt,
          myths.category_path,
          myths.image_url,
          regions.name AS region,
          regions.slug AS region_slug,
          communities.name AS community,
          communities.slug AS community_slug
        FROM myths
        JOIN regions ON regions.id = myths.region_id
        LEFT JOIN communities ON communities.id = myths.community_id
        WHERE
          myths.title ILIKE ANY($1) OR
          myths.tags_raw ILIKE ANY($1) OR
          myths.focus_keywords_raw ILIKE ANY($1) OR
          myths.category_path ILIKE ANY($1)
      `,
      [patterns]
    );
    return result.rows;
  }
}

function getMythsByTitlesSqlite(titles = []) {
  const patterns = buildTitlePatterns(titles);
  if (!patterns.length) {
    return [];
  }
  const db = getSqliteDb();
  const { whereClause, params } = buildTitleWhereSqlite(patterns);

  try {
    const sql = `
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.category_path,
        COALESCE(
          (
            SELECT image_url
            FROM vertical_images vi
            WHERE vi.entity_type = 'myth' AND vi.entity_id = myths.id
            ORDER BY vi.updated_at DESC, vi.created_at DESC
            LIMIT 1
          ),
          myths.image_url
        ) AS image_url,
        regions.name AS region,
        regions.slug AS region_slug,
        communities.name AS community,
        communities.slug AS community_slug
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      ${whereClause}
    `;
    return db.prepare(sql).all(params);
  } catch (error) {
    console.error("[routes] fallback: myths by titles without vertical_images", error);
    const sql = `
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.category_path,
        myths.image_url,
        regions.name AS region,
        regions.slug AS region_slug,
        communities.name AS community,
        communities.slug AS community_slug
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      ${whereClause}
    `;
    return db.prepare(sql).all(params);
  }
}

export async function getMythsByTitles(titles = []) {
  if (isPostgres()) {
    return getMythsByTitlesPostgres(titles);
  }
  return getMythsByTitlesSqlite(titles);
}

async function getMythsBySlugsPostgres(slugs = []) {
  if (!slugs.length) {
    return [];
  }
  const sql = getSqlClient();

  try {
    const result = await sql.query(
      `
        SELECT
          myths.id,
          myths.title,
          myths.slug,
          myths.excerpt,
          myths.category_path,
          COALESCE(vi.image_url, myths.image_url) AS image_url,
          regions.name AS region,
          regions.slug AS region_slug,
          communities.name AS community,
          communities.slug AS community_slug
        FROM myths
        JOIN regions ON regions.id = myths.region_id
        LEFT JOIN communities ON communities.id = myths.community_id
        LEFT JOIN LATERAL (
          SELECT image_url
          FROM vertical_images
          WHERE entity_type = 'myth' AND entity_id = myths.id
          ORDER BY updated_at DESC NULLS LAST, created_at DESC NULLS LAST
          LIMIT 1
        ) vi ON true
        WHERE myths.slug = ANY($1)
        ORDER BY array_position($1, myths.slug)
      `,
      [slugs]
    );
    return result.rows;
  } catch (error) {
    console.error("[routes] fallback: myths by slugs without vertical_images", error);
    const result = await sql.query(
      `
        SELECT
          myths.id,
          myths.title,
          myths.slug,
          myths.excerpt,
          myths.category_path,
          myths.image_url,
          regions.name AS region,
          regions.slug AS region_slug,
          communities.name AS community,
          communities.slug AS community_slug
        FROM myths
        JOIN regions ON regions.id = myths.region_id
        LEFT JOIN communities ON communities.id = myths.community_id
        WHERE myths.slug = ANY($1)
        ORDER BY array_position($1, myths.slug)
      `,
      [slugs]
    );
    return result.rows;
  }
}

function getMythsBySlugsSqlite(slugs = []) {
  if (!slugs.length) {
    return [];
  }
  const db = getSqliteDb();
  const placeholders = slugs.map(() => "?").join(", ");
  const orderCases = slugs
    .map(() => "WHEN ? THEN ?")
    .join(" ");
  const orderParams = slugs.flatMap((slug, index) => [slug, index]);

  try {
    const sql = `
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.category_path,
        COALESCE(
          (
            SELECT image_url
            FROM vertical_images vi
            WHERE vi.entity_type = 'myth' AND vi.entity_id = myths.id
            ORDER BY vi.updated_at DESC, vi.created_at DESC
            LIMIT 1
          ),
          myths.image_url
        ) AS image_url,
        regions.name AS region,
        regions.slug AS region_slug,
        communities.name AS community,
        communities.slug AS community_slug
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      WHERE myths.slug IN (${placeholders})
      ORDER BY CASE myths.slug ${orderCases} ELSE ${slugs.length} END
    `;

    return db.prepare(sql).all(...slugs, ...orderParams);
  } catch (error) {
    console.error("[routes] fallback: myths by slugs without vertical_images", error);
    const sql = `
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.category_path,
        myths.image_url,
        regions.name AS region,
        regions.slug AS region_slug,
        communities.name AS community,
        communities.slug AS community_slug
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      WHERE myths.slug IN (${placeholders})
      ORDER BY CASE myths.slug ${orderCases} ELSE ${slugs.length} END
    `;
    return db.prepare(sql).all(...slugs, ...orderParams);
  }
}

export async function getMythsBySlugs(slugs = []) {
  if (isPostgres()) {
    return getMythsBySlugsPostgres(slugs);
  }
  return getMythsBySlugsSqlite(slugs);
}

export async function getRoutePreviews(seed = 0) {
  const safeSeed = Number.isFinite(seed) ? seed : 0;
  const previews = await Promise.all(
    ROUTES.map(async (route, index) => {
      let preview = null;
      const curatedTitles = [
        route.curated?.coverTitle,
        ...(route.curated?.heroTitles || []),
        ...(route.curated?.galleryTitles || []),
      ].filter(Boolean);
      const uniqueCurated = Array.from(new Set(curatedTitles));

      if (uniqueCurated.length) {
        const curatedResult = await getMythsByTitles(uniqueCurated);
        const resolvedMap = resolveMythsByTitles(uniqueCurated, curatedResult);
        const cover = route.curated?.coverTitle
          ? resolvedMap.get(route.curated.coverTitle)
          : null;
        const resolvedList = uniqueCurated
          .map((title) => resolvedMap.get(title))
          .filter(Boolean);
        preview = cover || resolvedList.find((item) => item.image_url) || resolvedList[0] || null;
      } else {
        const myths = await getRouteMyths({
          keywords: route.keywords,
          limit: 3,
          seed: safeSeed + index * 7,
        });
        const fallback = myths.find((item) => item.image_url) || myths[0] || null;
        preview = fallback || preview;
      }
      return { ...route, preview };
    })
  );

  return previews;
}

export function getRouteBySlug(slug) {
  return ROUTES.find((route) => route.slug === slug);
}

export function getAccentStyles(accent) {
  return ACCENT_STYLES[accent] || ACCENT_STYLES.river;
}
