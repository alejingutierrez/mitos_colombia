import { getSqlClient, getSqliteDb, isPostgres } from "./db";

export const ROUTES = [
  {
    slug: "guardianes-del-agua",
    title: "Guardianes del agua",
    description: "Relatos que protegen rios, lagunas y corrientes invisibles.",
    detail: "Relatos que protegen rios, lagunas y corrientes invisibles.",
    tone: "Rios y neblina",
    accent: "river",
    keywords: ["agua", "rio", "laguna", "mohan", "caiman", "madre", "sirena"],
    highlights: [
      {
        title: "Guardianes del Magdalena",
        description: "Mitos que defienden las aguas sagradas y sus rituales.",
      },
      {
        title: "Lagunas de promesa",
        description: "Relatos sobre pactos, ofrendas y nacimientos de rio.",
      },
      {
        title: "Corrientes invisibles",
        description: "Seres que advierten cuando el agua pierde su ritmo.",
      },
    ],
  },
  {
    slug: "cartografia-selva",
    title: "Cartografia de la selva",
    description: "Mitos que explican caminos, limites y pactos con la tierra.",
    detail: "Mitos que explican caminos, limites y pactos con la tierra.",
    tone: "Selva y bruma",
    accent: "jungle",
    keywords: ["selva", "bosque", "madremonte", "duende", "monte", "cerro"],
    highlights: [
      {
        title: "Senderos encantados",
        description: "Mapas ocultos que solo se revelan a los atentos.",
      },
      {
        title: "Pactos con el monte",
        description: "Relatos sobre limites sagrados y guardianes del bosque.",
      },
      {
        title: "Señales de la bruma",
        description: "Niebla que protege caminos y altera el rumbo de viajeros.",
      },
    ],
  },
  {
    slug: "bestiario-colombiano",
    title: "Bestiario colombiano",
    description: "Criaturas que advierten, transforman y cuidan territorios.",
    detail: "Criaturas que advierten, transforman y cuidan territorios.",
    tone: "Sombras y fuego",
    accent: "ember",
    keywords: ["criatura", "bestia", "monstruo", "patasola", "sombreron", "tunda"],
    highlights: [
      {
        title: "Transformaciones",
        description: "Seres que cruzan lo humano y lo animal con un mensaje.",
      },
      {
        title: "Guardianes del bosque",
        description: "Bestias que protegen los limites y castigan la arrogancia.",
      },
      {
        title: "Advertencias nocturnas",
        description: "Relatos que se cuentan para evitar rutas peligrosas.",
      },
    ],
  },
  {
    slug: "bosques-y-niebla",
    title: "Bosques y niebla",
    description: "Guardianes, señales y pactos entre arboles antiguos.",
    detail: "Guardianes, señales y pactos entre arboles antiguos.",
    tone: "Humedad y bruma",
    accent: "jungle",
    keywords: ["bosque", "niebla", "madremonte", "hoja", "monte", "bruma"],
    highlights: [
      {
        title: "Respirar la niebla",
        description: "Historias sobre ecos y voces que guian entre arboles.",
      },
      {
        title: "Guardianes del follaje",
        description: "Seres que vigilan los pactos y protegen la vida oculta.",
      },
      {
        title: "El limite del musgo",
        description: "Relatos donde el bosque marca fronteras invisibles.",
      },
    ],
  },
  {
    slug: "criaturas-nocturnas",
    title: "Criaturas nocturnas",
    description: "Apariciones, sombras y advertencias en la noche.",
    detail: "Apariciones, sombras y advertencias en la noche.",
    tone: "Noches rituales",
    accent: "ink",
    keywords: ["noche", "sombra", "llorona", "fantasma", "aparecido", "sombreron"],
    highlights: [
      {
        title: "Sombras en el camino",
        description: "Relatos que aparecen cuando la noche cae sobre el pueblo.",
      },
      {
        title: "Advertencias del silencio",
        description: "Historias donde el silencio anuncia una presencia.",
      },
      {
        title: "Rituales de luna",
        description: "Noches donde los pactos se sellan y los limites cambian.",
      },
    ],
  },
  {
    slug: "ritos-del-mar",
    title: "Ritos del mar",
    description: "Relatos de mareas, puertos y guardianes costeros.",
    detail: "Relatos de mareas, puertos y guardianes costeros.",
    tone: "Mareas y sal",
    accent: "river",
    keywords: ["mar", "marea", "costa", "caribe", "pacifico", "manglar", "sirena"],
    highlights: [
      {
        title: "Cantos de marea",
        description: "Voces que llegan con la brisa y se pierden en la espuma.",
      },
      {
        title: "Guardianes del litoral",
        description: "Relatos sobre seres que cuidan el equilibrio del mar.",
      },
      {
        title: "Puertos con memoria",
        description: "Historias donde el mar guarda secretos y promesas.",
      },
    ],
  },
  {
    slug: "fronteras-y-caminos",
    title: "Fronteras y caminos",
    description: "Cruces, viajes y pactos en territorios de paso.",
    detail: "Cruces, viajes y pactos en territorios de paso.",
    tone: "Cruces y caminos",
    accent: "ember",
    keywords: ["camino", "sendero", "cruce", "puente", "viaje", "trocha"],
    highlights: [
      {
        title: "Cruces de medianoche",
        description: "Puntos donde el viaje cambia de rumbo y de tiempo.",
      },
      {
        title: "Rutas de arrieros",
        description: "Relatos de viajeros y pactos en la ruta.",
      },
      {
        title: "Umbrales del camino",
        description: "Historias sobre limites que solo existen al andar.",
      },
    ],
  },
  {
    slug: "voces-urbanas",
    title: "Voces urbanas",
    description: "Mitos contemporaneos que sobreviven en la ciudad.",
    detail: "Mitos contemporaneos que sobreviven en la ciudad.",
    tone: "Ciudad y eco",
    accent: "ink",
    keywords: ["ciudad", "urbano", "calle", "barrio", "rumor", "terminal"],
    highlights: [
      {
        title: "Sombras del barrio",
        description: "Relatos que circulan en esquinas y patios compartidos.",
      },
      {
        title: "Rumores del centro",
        description: "Historias que se cuentan en plazas, mercados y buses.",
      },
      {
        title: "Noches de avenida",
        description: "Mitos nuevos que se mezclan con el ritmo urbano.",
      },
    ],
  },
  {
    slug: "montanas-paramos",
    title: "Montanas y paramos",
    description: "Alturas sagradas, viento frio y guardianes del paramo.",
    detail: "Alturas sagradas, viento frio y guardianes del paramo.",
    tone: "Alturas y viento",
    accent: "river",
    keywords: ["paramo", "montana", "nevado", "cumbre", "frailejon", "laguna"],
    highlights: [
      {
        title: "Guardianes del frio",
        description: "Relatos que resguardan el agua y el hielo de altura.",
      },
      {
        title: "Lagunas sagradas",
        description: "Historias de ofrendas y pactos en la cima.",
      },
      {
        title: "Cumbres de bruma",
        description: "La niebla como señal de los espiritus del paramo.",
      },
    ],
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
          DISTINCT myths.id,
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
        LEFT JOIN vertical_images vi
          ON vi.entity_type = 'myth' AND vi.entity_id = myths.id
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
          DISTINCT myths.id,
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
        DISTINCT myths.id,
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
      LEFT JOIN vertical_images vi
        ON vi.entity_type = 'myth' AND vi.entity_id = myths.id
      ${whereClause}
      ORDER BY
        CASE WHEN COALESCE(vi.image_url, myths.image_url) IS NOT NULL THEN 0 ELSE 1 END,
        (myths.id + :seed) % 97,
        myths.id
      LIMIT :limit
    `;

    return db.prepare(sql).all({ ...params, seed: seedValue, limit: limitValue });
  } catch (error) {
    console.error("[routes] vertical_images unavailable, fallback to myths.image_url", error);
    const sql = `
      SELECT
        DISTINCT myths.id,
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

export async function getRoutePreviews(seed = 0) {
  const safeSeed = Number.isFinite(seed) ? seed : 0;
  const previews = await Promise.all(
    ROUTES.map(async (route, index) => {
      const myths = await getRouteMyths({
        keywords: route.keywords,
        limit: 3,
        seed: safeSeed + index * 7,
      });
      const preview = myths.find((item) => item.image_url) || myths[0] || null;
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
