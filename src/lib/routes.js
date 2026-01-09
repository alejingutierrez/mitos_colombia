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
    keywords: ["agua", "rio", "laguna", "mohan", "caiman", "madre", "sirena"],
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
      coverSlug: "el-mohan-guardian-de-aguas-doradas",
      heroSlugs: [
        "el-mohan-guardian-de-aguas-doradas",
        "bachue-madre-de-aguas-sagradas",
        "el-poira-seductor-de-aguas-profundas",
      ],
      gallerySlugs: [
        "caragabi-y-el-origen-del-agua",
        "toquecha-y-el-secreto-de-la-laguna",
        "encantos-y-guardianes-de-lagunas",
        "lagunas-encantadas-y-tesoros-ocultos",
        "diosa-dorada-de-la-laguna-encantada",
        "amantes-sedientos-y-la-laguna-magica",
        "amor-prohibido-en-aguas-encantadas",
        "kimaku-arquitecto-de-montanas-y-aguas",
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
    keywords: ["selva", "bosque", "madremonte", "duende", "monte", "cerro"],
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
      coverSlug: "madremonte-guardiana-verde-del-monte",
      heroSlugs: [
        "madremonte-guardiana-verde-del-monte",
        "guardiana-peluda-de-la-selva",
        "el-guardian-velludo-del-bosque",
      ],
      gallerySlugs: [
        "madremonte-guardiana-de-justicia-natural",
        "madremonte-guardiana-de-la-naturaleza",
        "madremonte-guardiana-de-selvas-vivas",
        "venganza-en-la-selva-encantada",
        "encuentro-magico-en-la-selva",
        "engano-astuto-en-la-selva",
        "duelo-ancestral-en-la-selva-colombiana",
        "chuyachaque-enganos-en-el-monte",
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
    keywords: ["criatura", "bestia", "monstruo", "patasola", "sombreron", "tunda"],
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
      coverSlug: "la-patasola-devoradora-de-montanas",
      heroSlugs: [
        "la-patasola-devoradora-de-montanas",
        "monstruo-encantado-del-lago-tota",
        "serpiente-bicefala-del-cananguchal",
      ],
      gallerySlugs: [
        "el-basilisco-devorador-de-caminos",
        "danza-chicha-y-la-patasola",
        "la-venganza-de-la-patasola",
        "venciendo-a-la-patasola-un-relato",
        "tigre-luminoso-en-tsorueto",
        "aribamia-encarnacion-tigre-del-mas-alla",
        "sabino-y-el-monstruo-marino",
        "buinaima-y-la-sirena-del-diluvio",
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
    keywords: ["bosque", "niebla", "madremonte", "hoja", "monte", "bruma"],
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
      coverSlug: "hojarasquin-guardian-del-bosque-encantado",
      heroSlugs: [
        "hojarasquin-guardian-del-bosque-encantado",
        "devoradores-nocturnos-del-bosque-antiguo",
        "sombra-misteriosa-del-tamarindo",
      ],
      gallerySlugs: [
        "baltazar-el-duende-jugueton",
        "duendes-ahuyentados-con-melodias-magicas",
        "silbidos-nocturnos-y-duendes-voraces",
        "el-cazador-fantasma-del-monte",
        "cazador-madre-monte-y-engano-mortal",
        "chuyachaque-enganos-en-el-monte",
        "mayavita-y-el-encanto-de-la-selva",
        "la-hechicera-unipeda-del-monte",
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
    keywords: ["noche", "sombra", "llorona", "fantasma", "aparecido", "sombreron"],
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
      coverSlug: "lagrimas-y-misterio-de-la-llorona",
      heroSlugs: [
        "lagrimas-y-misterio-de-la-llorona",
        "el-caballo-fantasma-de-medianoche",
        "la-lavandera-fantasma-de-la-noche",
      ],
      gallerySlugs: [
        "lagrimas-eternas-de-la-llorona",
        "noche-de-fantasmas-y-guacharacas",
        "el-errante-fantasma-del-patetarro",
        "corazon-colgado-carrera-fantasmal",
        "rascazon-y-el-fantasma-burlon",
        "caballo-fantasma-de-playon-blanco",
        "el-guando-camilla-fantasma-andina",
        "el-guando-carga-mortal-y-avaricia",
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
    keywords: ["mar", "marea", "costa", "caribe", "pacifico", "manglar", "sirena"],
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
      coverSlug: "maria-la-larga-belleza-aterradora",
      heroSlugs: [
        "sirena-del-arco-encanto-mortal",
        "maria-la-larga-belleza-aterradora",
        "el-barco-dorado-de-curay",
      ],
      gallerySlugs: [
        "danza-nocturna-con-sirenas",
        "canto-sirena-muerte-y-huida",
        "chontaduro-y-venganza-sirena",
        "guardianes-y-piratas-de-santa-marta",
        "la-madre-playa-y-su-cancion-nocturna",
        "milagro-en-la-tempestad-caribena",
        "salvacion-en-la-tormenta-caribena",
        "amor-imposible-en-la-costa-caribe",
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
    keywords: ["camino", "sendero", "cruce", "puente", "viaje", "trocha"],
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
      coverSlug: "puente-del-comun-pacto-diabolico",
      heroSlugs: [
        "puente-del-comun-pacto-diabolico",
        "viaje-ancestral-por-caminos-subterraneos",
        "viaje-celestial-de-los-cuatro-estantillos",
      ],
      gallerySlugs: [
        "viaje-primigenio-en-canoa-serpiente",
        "viaje-magico-en-canoa-transformadora",
        "viaje-mistico-del-piache-chaman",
        "camino-acuatico-y-renacimiento-ancestral",
        "mariposa-nocturna-y-el-viaje-encantado",
        "viaje-alado-al-mas-alla",
        "viaje-celestial-al-palacio-resplandeciente",
        "papukua-viaje-venganza-y-redencion",
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
    keywords: ["ciudad", "urbano", "calle", "barrio", "rumor", "terminal"],
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
      coverSlug: "fantasmas-y-misterios-de-la-candelaria",
      heroSlugs: [
        "fantasmas-y-misterios-de-la-candelaria",
        "candelaria-y-la-barca-sacrilega",
        "el-visitante-nocturno-de-cartagena",
      ],
      gallerySlugs: [
        "candelaria-y-el-exvoto-marino",
        "cartagena-encanto-de-piedra-y-tradicion",
        "amor-inolvidable-en-cartagena",
        "amor-y-libertad-en-cartagena",
        "amores-clandestinos-en-cartagena-colonial",
        "claveles-y-canones-en-cartagena",
        "adios-en-glorietas-de-cartagena",
        "la-virgen-cobradora-de-cartagena",
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
    keywords: ["paramo", "montana", "nevado", "cumbre", "frailejon", "laguna"],
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
      coverSlug: "furatena-esmeraldas-entre-cerros-sagrados",
      heroSlugs: [
        "furatena-esmeraldas-entre-cerros-sagrados",
        "cerros-magicos-y-espiritus-ancestrales",
        "guardianes-de-la-sierra-nevada",
      ],
      gallerySlugs: [
        "rescate-magico-en-cerro-plateado",
        "inirida-princesa-del-cerro-encantado",
        "toquecha-y-el-secreto-de-la-laguna",
        "diosa-dorada-de-la-laguna-encantada",
        "lagunas-encantadas-y-tesoros-ocultos",
        "kimaku-arquitecto-de-montanas-y-aguas",
        "viaje-magico-por-cerros-unidos",
        "misterios-y-milagros-de-monserrate",
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
      const curatedSlugs = [
        route.curated?.coverSlug,
        ...(route.curated?.heroSlugs || []),
        ...(route.curated?.gallerySlugs || []),
      ].filter(Boolean);
      const uniqueCurated = Array.from(new Set(curatedSlugs));

      if (uniqueCurated.length) {
        const curatedResult = await getMythsBySlugs(uniqueCurated);
        preview = curatedResult.find((item) => item.image_url) || curatedResult[0] || null;
      }

      if (!preview || !preview.image_url) {
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
