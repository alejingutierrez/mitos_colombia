import { NextResponse } from "next/server";
import OpenAI from "openai";
import {
  getSqlClient,
  getSqliteDb,
  getSqliteDbWritable,
  isPostgres,
} from "../../../../lib/db";
import { filterAllowedCommunities } from "../../../../lib/communityFilters";
import { ROUTES, getMythsByTitles } from "../../../../lib/routes";
import { getHomeStats } from "../../../../lib/myths";

export const runtime = "nodejs";
export const maxDuration = 300;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const MIN_SUMMARY_WORDS = 75;
const MIN_META_DESCRIPTION_CHARS = 120;
const MAX_MYTHS_PER_PAGE = 8;
const MAX_CONTENT_CHARS = 900;

const PAGE_TYPES = [
  { value: "all", label: "Todas" },
  { value: "page", label: "Páginas estáticas" },
  { value: "category", label: "Categorías" },
  { value: "community", label: "Comunidades" },
  { value: "region", label: "Regiones" },
  { value: "route", label: "Rutas" },
  { value: "myth", label: "Mitos" },
];

const STATIC_PAGES = [
  {
    slug: "home",
    path: "/",
    title: "Mitos de Colombia",
    summary:
      "Archivo editorial de mitos colombianos organizado por regiones, comunidades, rutas temáticas y categorías. Permite explorar relatos por territorio, filtrar por temas y acceder a nuevas narrativas desde un enfoque editorial contemporáneo.",
    sections: [
      "Exploración por regiones y comunidades.",
      "Rutas temáticas curadas con enfoque editorial.",
      "Mapa interactivo con mitos ubicados.",
      "Búsqueda inteligente por palabras clave.",
    ],
  },
  {
    slug: "categorias",
    path: "/categorias",
    title: "Categorías de mitos",
    summary:
      "Listado editorial de categorías temáticas para explorar mitos colombianos. Permite navegar por temas como creación, transformación, castigos y naturaleza.",
    sections: [
      "Categorías temáticas con mínimo de mitos.",
      "Paginación y navegación editorial.",
      "Enlaces internos hacia mitos relacionados.",
    ],
  },
  {
    slug: "comunidades",
    path: "/comunidades",
    title: "Comunidades indígenas",
    summary:
      "Explora los mitos desde las comunidades indígenas que preservan la tradición oral en Colombia. Navegación por región y acceso a relatos de cada pueblo.",
    sections: [
      "Listado por regiones culturales.",
      "Acceso a internas de cada comunidad.",
      "Relatos curados por pueblo.",
    ],
  },
  {
    slug: "regiones",
    path: "/regiones",
    title: "Regiones culturales",
    summary:
      "Mapa editorial de mitos por regiones de Colombia. Cada región reúne narrativas propias, pueblos y paisajes que conforman el imaginario colombiano.",
    sections: [
      "Resumen de mitos por región.",
      "Acceso a internas regionales.",
      "Filtros por comunidad y categoría.",
    ],
  },
  {
    slug: "rutas",
    path: "/rutas",
    title: "Rutas temáticas",
    summary:
      "Rutas curadas para explorar mitos por temas narrativos: agua, selva, bestiarios y territorios liminales. Una lectura guiada del archivo.",
    sections: [
      "Selecciones curadas de mitos.",
      "Narrativas editoriales por ruta.",
      "Relaciones con territorios y símbolos.",
    ],
  },
  {
    slug: "mapa",
    path: "/mapa",
    title: "Mapa de mitos",
    summary:
      "Mapa interactivo que ubica mitos colombianos por coordenadas. Permite descubrir relatos desde el territorio y visualizar coincidencias geográficas.",
    sections: [
      "Exploración geográfica de relatos.",
      "Pines con mitos y tarjetas informativas.",
      "Acceso directo a la lectura completa.",
    ],
  },
  {
    slug: "metodologia",
    path: "/metodologia",
    title: "Metodología editorial",
    summary:
      "Metodología de investigación, curaduría y escritura para el archivo de mitos colombianos. Describe criterios editoriales, estructura de datos y enfoque cultural.",
    sections: [
      "Proceso de investigación y curaduría.",
      "Estructura de datos y taxonomías.",
      "Enfoque editorial y narrativa.",
    ],
  },
  {
    slug: "sobre-el-proyecto",
    path: "/sobre-el-proyecto",
    title: "Sobre el proyecto",
    summary:
      "Historia, visión y alcance del proyecto Mitos de Colombia. Explica objetivos culturales, alcance editorial y futuro del archivo.",
    sections: [
      "Visión y propósito del archivo.",
      "Evolución del proyecto.",
      "Próximos lanzamientos.",
    ],
  },
  {
    slug: "contacto",
    path: "/contacto",
    title: "Contacto",
    summary:
      "Página de contacto para compartir mitos, colaborar o preguntar sobre el proyecto. Incluye formulario y canales de comunicación.",
    sections: [
      "Formulario de contacto.",
      "Convocatoria para relatos.",
      "Enlaces internos a secciones clave.",
    ],
  },
  {
    slug: "privacidad",
    path: "/privacidad",
    title: "Política de privacidad",
    summary:
      "Política de privacidad del sitio Mitos de Colombia. Explica uso de datos, formularios y almacenamiento de información.",
    sections: [
      "Uso de datos personales.",
      "Alcance de formularios.",
      "Derechos de los usuarios.",
    ],
  },
  {
    slug: "terminos",
    path: "/terminos",
    title: "Términos y condiciones",
    summary:
      "Condiciones de uso del sitio y del contenido editorial. Define responsabilidades, propiedad intelectual y usos permitidos.",
    sections: [
      "Condiciones de uso del contenido.",
      "Limitaciones de responsabilidad.",
      "Derechos y permisos.",
    ],
  },
];

function checkAuth(request) {
  const authHeader = request.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return false;
  }

  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString("utf-8");
  const [username, password] = credentials.split(":");

  const validUsername = process.env.ADMIN_USERNAME || "admin";
  const validPassword = process.env.ADMIN_PASSWORD || "admin";

  return username === validUsername && password === validPassword;
}

function normalizeValue(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function countWords(text) {
  if (!text) {
    return 0;
  }
  const words = String(text).trim().match(/\S+/g);
  return words ? words.length : 0;
}

function sanitizeText(text) {
  return String(text || "").replace(/\s+/g, " ").trim();
}

function truncateText(text, max = MAX_CONTENT_CHARS) {
  const cleaned = sanitizeText(text);
  if (cleaned.length <= max) {
    return cleaned;
  }
  return `${cleaned.slice(0, max).trim()}...`;
}

async function ensureSeoTable() {
  if (isPostgres()) {
    const db = getSqlClient();
    await db`
      CREATE TABLE IF NOT EXISTS seo_pages (
        id SERIAL PRIMARY KEY,
        page_type TEXT NOT NULL,
        slug TEXT NOT NULL,
        meta_title TEXT,
        meta_description TEXT,
        meta_keywords TEXT,
        og_title TEXT,
        og_description TEXT,
        twitter_title TEXT,
        twitter_description TEXT,
        canonical_path TEXT,
        summary TEXT,
        payload TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        UNIQUE(page_type, slug)
      )
    `;
    await db`CREATE INDEX IF NOT EXISTS idx_seo_pages_type ON seo_pages(page_type)`;
    return;
  }

  const db = getSqliteDbWritable();
  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS seo_pages (
      id INTEGER PRIMARY KEY,
      page_type TEXT NOT NULL,
      slug TEXT NOT NULL,
      meta_title TEXT,
      meta_description TEXT,
      meta_keywords TEXT,
      og_title TEXT,
      og_description TEXT,
      twitter_title TEXT,
      twitter_description TEXT,
      canonical_path TEXT,
      summary TEXT,
      payload TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(page_type, slug)
    )
  `
  ).run();
  db.prepare(
    "CREATE INDEX IF NOT EXISTS idx_seo_pages_type ON seo_pages(page_type)"
  ).run();
}

async function getRegionNames() {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`SELECT name FROM regions`;
    const rows = result.rows || result;
    return rows.map((row) => row.name);
  }

  const db = getSqliteDb();
  return db.prepare("SELECT name FROM regions").all().map((row) => row.name);
}

async function listCategories() {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      SELECT
        tags.id,
        tags.name,
        tags.slug,
        tags.description,
        COUNT(myth_tags.myth_id) AS myth_count
      FROM tags
      LEFT JOIN myth_tags ON myth_tags.tag_id = tags.id
      GROUP BY tags.id
      ORDER BY myth_count DESC, tags.name ASC
    `;
    return result.rows || result;
  }

  const db = getSqliteDb();
  return db
    .prepare(
      `
      SELECT
        tags.id,
        tags.name,
        tags.slug,
        tags.description,
        COUNT(myth_tags.myth_id) AS myth_count
      FROM tags
      LEFT JOIN myth_tags ON myth_tags.tag_id = tags.id
      GROUP BY tags.id
      ORDER BY myth_count DESC, tags.name COLLATE NOCASE ASC
    `
    )
    .all();
}

async function listCommunities() {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      SELECT
        communities.id,
        communities.name,
        communities.slug,
        regions.name AS region,
        regions.slug AS region_slug,
        COUNT(myths.id) AS myth_count
      FROM communities
      JOIN regions ON regions.id = communities.region_id
      LEFT JOIN myths ON myths.community_id = communities.id
      GROUP BY communities.id, regions.id
      ORDER BY regions.name ASC, communities.name ASC
    `;
    return result.rows || result;
  }

  const db = getSqliteDb();
  return db
    .prepare(
      `
      SELECT
        communities.id,
        communities.name,
        communities.slug,
        regions.name AS region,
        regions.slug AS region_slug,
        COUNT(myths.id) AS myth_count
      FROM communities
      JOIN regions ON regions.id = communities.region_id
      LEFT JOIN myths ON myths.community_id = communities.id
      GROUP BY communities.id
      ORDER BY regions.name COLLATE NOCASE ASC, communities.name COLLATE NOCASE ASC
    `
    )
    .all();
}

async function listRegions() {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      SELECT
        regions.id,
        regions.name,
        regions.slug,
        COUNT(myths.id) AS myth_count
      FROM regions
      LEFT JOIN myths ON myths.region_id = regions.id
      GROUP BY regions.id
      ORDER BY regions.name ASC
    `;
    return result.rows || result;
  }

  const db = getSqliteDb();
  return db
    .prepare(
      `
      SELECT
        regions.id,
        regions.name,
        regions.slug,
        COUNT(myths.id) AS myth_count
      FROM regions
      LEFT JOIN myths ON myths.region_id = regions.id
      GROUP BY regions.id
      ORDER BY regions.name COLLATE NOCASE ASC
    `
    )
    .all();
}

async function listMyths() {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      SELECT id, title, slug, excerpt, content, tags_raw, focus_keyword
      FROM myths
      ORDER BY id
    `;
    return result.rows || result;
  }

  const db = getSqliteDb();
  return db
    .prepare(
      `
      SELECT id, title, slug, excerpt, content, tags_raw, focus_keyword
      FROM myths
      ORDER BY id
    `
    )
    .all();
}

async function getMythsForTag(tagId, limit = MAX_MYTHS_PER_PAGE) {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.content,
        myths.tags_raw,
        myths.focus_keyword,
        regions.name AS region,
        communities.name AS community
      FROM myths
      JOIN myth_tags ON myth_tags.myth_id = myths.id
      JOIN tags ON tags.id = myth_tags.tag_id
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      WHERE tags.id = ${tagId}
      ORDER BY myths.id
      LIMIT ${limit}
    `;
    return result.rows || result;
  }

  const db = getSqliteDb();
  return db
    .prepare(
      `
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.content,
        myths.tags_raw,
        myths.focus_keyword,
        regions.name AS region,
        communities.name AS community
      FROM myths
      JOIN myth_tags ON myth_tags.myth_id = myths.id
      JOIN tags ON tags.id = myth_tags.tag_id
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      WHERE tags.id = ?
      ORDER BY myths.id
      LIMIT ?
    `
    )
    .all(tagId, limit);
}

async function getMythsForCommunity(communityId, limit = MAX_MYTHS_PER_PAGE) {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.content,
        myths.tags_raw,
        myths.focus_keyword,
        regions.name AS region,
        communities.name AS community
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      WHERE myths.community_id = ${communityId}
      ORDER BY myths.id
      LIMIT ${limit}
    `;
    return result.rows || result;
  }

  const db = getSqliteDb();
  return db
    .prepare(
      `
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.content,
        myths.tags_raw,
        myths.focus_keyword,
        regions.name AS region,
        communities.name AS community
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      WHERE myths.community_id = ?
      ORDER BY myths.id
      LIMIT ?
    `
    )
    .all(communityId, limit);
}

async function getMythsForRegion(regionId, limit = MAX_MYTHS_PER_PAGE) {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.content,
        myths.tags_raw,
        myths.focus_keyword,
        regions.name AS region,
        communities.name AS community
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      WHERE myths.region_id = ${regionId}
      ORDER BY myths.id
      LIMIT ${limit}
    `;
    return result.rows || result;
  }

  const db = getSqliteDb();
  return db
    .prepare(
      `
      SELECT
        myths.id,
        myths.title,
        myths.slug,
        myths.excerpt,
        myths.content,
        myths.tags_raw,
        myths.focus_keyword,
        regions.name AS region,
        communities.name AS community
      FROM myths
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      WHERE myths.region_id = ?
      ORDER BY myths.id
      LIMIT ?
    `
    )
    .all(regionId, limit);
}

function buildMythContext(myth) {
  return {
    title: myth.title,
    slug: myth.slug,
    region: myth.region,
    community: myth.community,
    focus_keyword: myth.focus_keyword,
    tags_raw: myth.tags_raw,
    excerpt: truncateText(myth.excerpt, 320),
    content: truncateText(myth.content),
  };
}

function buildStaticContext(slug, stats) {
  const entry = STATIC_PAGES.find((item) => item.slug === slug);
  if (!entry) {
    return null;
  }
  return {
    page_type: "page",
    slug: entry.slug,
    path: entry.path,
    title: entry.title,
    summary: entry.summary,
    sections: entry.sections,
    stats,
  };
}

function buildPageKey(pageType, slug) {
  return `${pageType}:${slug}`;
}

function normalizeKeywords(value) {
  if (!value) {
    return "";
  }
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean).join(", ");
  }
  return String(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .join(", ");
}

function parseSeoJson(raw) {
  if (!raw) {
    return null;
  }
  const cleaned = String(raw)
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
  try {
    return JSON.parse(cleaned);
  } catch (error) {
    console.error("[SEO] JSON parse error:", error);
    return null;
  }
}

function isSeoComplete(entry) {
  if (!entry) {
    return false;
  }
  const description = sanitizeText(entry.meta_description);
  const summary = sanitizeText(entry.summary);
  if (!sanitizeText(entry.meta_title)) {
    return false;
  }
  if (!description || description.length < MIN_META_DESCRIPTION_CHARS) {
    return false;
  }
  if (!sanitizeText(entry.meta_keywords)) {
    return false;
  }
  if (countWords(summary) < MIN_SUMMARY_WORDS) {
    return false;
  }
  return true;
}

async function getSeoEntries(pageType) {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = pageType
      ? await db`
          SELECT
            page_type,
            slug,
            meta_title,
            meta_description,
            meta_keywords,
            summary,
            updated_at
          FROM seo_pages
          WHERE page_type = ${pageType}
        `
      : await db`
          SELECT
            page_type,
            slug,
            meta_title,
            meta_description,
            meta_keywords,
            summary,
            updated_at
          FROM seo_pages
        `;
    const rows = result.rows || result;
    return rows || [];
  }

  const db = getSqliteDb();
  if (pageType) {
    return db
      .prepare(
        `
        SELECT
          page_type,
          slug,
          meta_title,
          meta_description,
          meta_keywords,
          summary,
          updated_at
        FROM seo_pages
        WHERE page_type = ?
      `
      )
      .all(pageType);
  }
  return db
    .prepare(
      `
      SELECT
        page_type,
        slug,
        meta_title,
        meta_description,
        meta_keywords,
        summary,
        updated_at
      FROM seo_pages
    `
    )
    .all();
}

async function upsertSeoEntry(entry) {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      INSERT INTO seo_pages (
        page_type,
        slug,
        meta_title,
        meta_description,
        meta_keywords,
        og_title,
        og_description,
        twitter_title,
        twitter_description,
        canonical_path,
        summary,
        payload,
        updated_at
      )
      VALUES (
        ${entry.page_type},
        ${entry.slug},
        ${entry.meta_title},
        ${entry.meta_description},
        ${entry.meta_keywords},
        ${entry.og_title},
        ${entry.og_description},
        ${entry.twitter_title},
        ${entry.twitter_description},
        ${entry.canonical_path},
        ${entry.summary},
        ${entry.payload},
        NOW()
      )
      ON CONFLICT (page_type, slug) DO UPDATE
      SET
        meta_title = EXCLUDED.meta_title,
        meta_description = EXCLUDED.meta_description,
        meta_keywords = EXCLUDED.meta_keywords,
        og_title = EXCLUDED.og_title,
        og_description = EXCLUDED.og_description,
        twitter_title = EXCLUDED.twitter_title,
        twitter_description = EXCLUDED.twitter_description,
        canonical_path = EXCLUDED.canonical_path,
        summary = EXCLUDED.summary,
        payload = EXCLUDED.payload,
        updated_at = NOW()
      RETURNING id, page_type, slug
    `;
    return result.rows?.[0] || result[0];
  }

  const db = getSqliteDbWritable();
  db.prepare(
    `
    INSERT INTO seo_pages (
      page_type,
      slug,
      meta_title,
      meta_description,
      meta_keywords,
      og_title,
      og_description,
      twitter_title,
      twitter_description,
      canonical_path,
      summary,
      payload,
      updated_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
    ON CONFLICT(page_type, slug) DO UPDATE SET
      meta_title = excluded.meta_title,
      meta_description = excluded.meta_description,
      meta_keywords = excluded.meta_keywords,
      og_title = excluded.og_title,
      og_description = excluded.og_description,
      twitter_title = excluded.twitter_title,
      twitter_description = excluded.twitter_description,
      canonical_path = excluded.canonical_path,
      summary = excluded.summary,
      payload = excluded.payload,
      updated_at = datetime('now')
  `
  ).run(
    entry.page_type,
    entry.slug,
    entry.meta_title,
    entry.meta_description,
    entry.meta_keywords,
    entry.og_title,
    entry.og_description,
    entry.twitter_title,
    entry.twitter_description,
    entry.canonical_path,
    entry.summary,
    entry.payload
  );
  return { page_type: entry.page_type, slug: entry.slug };
}

async function listAllPages(type) {
  const stats = await getHomeStats();
  const regionNames = await getRegionNames();
  const pages = [];

  if (!type || type === "all" || type === "page") {
    STATIC_PAGES.forEach((page) => {
      pages.push({
        page_type: "page",
        slug: page.slug,
        path: page.path,
        title: page.title,
        stats,
      });
    });
  }

  if (!type || type === "all" || type === "category") {
    const categories = await listCategories();
    const regionSet = new Set(regionNames.map(normalizeValue));
    categories.forEach((category) => {
      const mythCount = Number(category.myth_count || 0);
      const normalized = normalizeValue(category.name);
      if (mythCount < 6 || normalized === "ninguno" || regionSet.has(normalized)) {
        return;
      }
      pages.push({
        page_type: "category",
        slug: category.slug,
        title: category.name,
        myth_count: mythCount,
        id: category.id,
      });
    });
  }

  if (!type || type === "all" || type === "community") {
    const communities = filterAllowedCommunities(await listCommunities());
    communities.forEach((community) => {
      pages.push({
        page_type: "community",
        slug: community.slug,
        title: community.name,
        myth_count: Number(community.myth_count || 0),
        id: community.id,
        region: community.region,
      });
    });
  }

  if (!type || type === "all" || type === "region") {
    const regions = await listRegions();
    regions.forEach((region) => {
      pages.push({
        page_type: "region",
        slug: region.slug,
        title: region.name,
        myth_count: Number(region.myth_count || 0),
        id: region.id,
      });
    });
  }

  if (!type || type === "all" || type === "route") {
    ROUTES.forEach((route) => {
      pages.push({
        page_type: "route",
        slug: route.slug,
        title: route.title,
        keywords: route.keywords,
        intro: route.intro,
      });
    });
  }

  if (!type || type === "all" || type === "myth") {
    const myths = await listMyths();
    myths.forEach((myth) => {
      pages.push({
        page_type: "myth",
        slug: myth.slug,
        title: myth.title,
        id: myth.id,
      });
    });
  }

  return pages;
}

async function buildContextForPage(page, stats) {
  if (page.page_type === "page") {
    return buildStaticContext(page.slug, stats);
  }

  if (page.page_type === "category") {
    const categories = await listCategories();
    const category = categories.find((item) => item.slug === page.slug);
    if (!category) {
      return null;
    }
    const myths = await getMythsForTag(category.id);
    return {
      page_type: "category",
      slug: category.slug,
      path: `/categorias/${category.slug}`,
      title: category.name,
      description: category.description,
      myth_count: Number(category.myth_count || 0),
      myths: myths.map(buildMythContext),
    };
  }

  if (page.page_type === "community") {
    const communities = await listCommunities();
    const community = communities.find((item) => item.slug === page.slug);
    if (!community) {
      return null;
    }
    const myths = await getMythsForCommunity(community.id);
    return {
      page_type: "community",
      slug: community.slug,
      path: `/comunidades/${community.slug}`,
      title: community.name,
      region: community.region,
      myth_count: Number(community.myth_count || 0),
      myths: myths.map(buildMythContext),
    };
  }

  if (page.page_type === "region") {
    const regions = await listRegions();
    const region = regions.find((item) => item.slug === page.slug);
    if (!region) {
      return null;
    }
    const myths = await getMythsForRegion(region.id);
    return {
      page_type: "region",
      slug: region.slug,
      path: `/regiones/${region.slug}`,
      title: region.name,
      myth_count: Number(region.myth_count || 0),
      myths: myths.map(buildMythContext),
    };
  }

  if (page.page_type === "route") {
    const route = ROUTES.find((item) => item.slug === page.slug);
    if (!route) {
      return null;
    }
    const curatedTitles = Array.from(
      new Set(
        [
          ...(route.curated?.heroTitles || []),
          ...(route.curated?.galleryTitles || []),
        ].filter(Boolean)
      )
    );
    const curatedMyths = curatedTitles.length
      ? await getMythsByTitles(curatedTitles)
      : [];
    return {
      page_type: "route",
      slug: route.slug,
      path: `/rutas/${route.slug}`,
      title: route.title,
      description: route.description,
      intro: route.intro,
      keywords: route.keywords,
      curated_titles: curatedTitles,
      myths: curatedMyths.map(buildMythContext),
    };
  }

  if (page.page_type === "myth") {
    const myths = await listMyths();
    const myth = myths.find((item) => item.slug === page.slug);
    if (!myth) {
      return null;
    }
    return {
      page_type: "myth",
      slug: myth.slug,
      path: `/mitos/${myth.slug}`,
      title: myth.title,
      excerpt: truncateText(myth.excerpt, 320),
      focus_keyword: myth.focus_keyword,
      tags_raw: myth.tags_raw,
      content: truncateText(myth.content),
    };
  }

  return null;
}

async function generateSeoPayload(context) {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY no está configurada");
  }

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content:
          "Eres un especialista en SEO editorial. Devuelve SOLO JSON valido con los siguientes campos: " +
          "meta_title, meta_description, keywords, og_title, og_description, twitter_title, twitter_description, canonical_path, summary, focus_topics. " +
          "Reglas: meta_title <= 60 caracteres, meta_description entre 120 y 170 caracteres, summary minimo 75 palabras y maximo 140 palabras, " +
          "keywords debe ser un arreglo de 8 a 14 palabras clave (sin hashtags). " +
          "canonical_path debe iniciar con '/'. " +
          "No incluyas markdown ni texto adicional.",
      },
      {
        role: "user",
        content: JSON.stringify(context, null, 2),
      },
    ],
    temperature: 0.5,
    max_tokens: 500,
  });

  const raw = response?.choices?.[0]?.message?.content;
  const parsed = parseSeoJson(raw);
  if (!parsed) {
    throw new Error("OpenAI no devolvió JSON válido");
  }
  return parsed;
}

function normalizeSeoPayload(payload, fallbackPath) {
  const metaTitle = sanitizeText(payload.meta_title);
  const metaDescription = sanitizeText(payload.meta_description);
  const keywords = normalizeKeywords(payload.keywords);
  const ogTitle = sanitizeText(payload.og_title) || metaTitle;
  const ogDescription = sanitizeText(payload.og_description) || metaDescription;
  const twitterTitle = sanitizeText(payload.twitter_title) || ogTitle;
  const twitterDescription = sanitizeText(payload.twitter_description) || ogDescription;
  const canonicalPath = sanitizeText(payload.canonical_path) || fallbackPath;
  const summary = sanitizeText(payload.summary);

  return {
    meta_title: metaTitle,
    meta_description: metaDescription,
    meta_keywords: keywords,
    og_title: ogTitle,
    og_description: ogDescription,
    twitter_title: twitterTitle,
    twitter_description: twitterDescription,
    canonical_path: canonicalPath,
    summary,
    payload: JSON.stringify(payload),
  };
}

function parseTimestamp(value) {
  if (!value) {
    return 0;
  }
  if (value instanceof Date) {
    return value.getTime();
  }
  const normalized = String(value).replace(" ", "T");
  const time = Date.parse(normalized);
  return Number.isNaN(time) ? 0 : time;
}

export async function GET(request) {
  try {
    if (!checkAuth(request)) {
      return NextResponse.json(
        { error: "Unauthorized" },
        {
          status: 401,
          headers: { "WWW-Authenticate": 'Basic realm="Admin Area"' },
        }
      );
    }

    await ensureSeoTable();

    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type") || "all";

    const pages = await listAllPages(type);
    const entries = await getSeoEntries(type === "all" ? null : type);
    const entryMap = new Map(
      entries.map((entry) => [buildPageKey(entry.page_type, entry.slug), entry])
    );

    const pending = pages.filter((page) => {
      const entry = entryMap.get(buildPageKey(page.page_type, page.slug));
      return !isSeoComplete(entry);
    });

    const breakdown = pages.reduce((acc, page) => {
      const entry = entryMap.get(buildPageKey(page.page_type, page.slug));
      const key = page.page_type;
      if (!acc[key]) {
        acc[key] = { total: 0, pending: 0 };
      }
      acc[key].total += 1;
      if (!isSeoComplete(entry)) {
        acc[key].pending += 1;
      }
      return acc;
    }, {});

    return NextResponse.json({
      total: pending.length,
      eligible: pages.length,
      min_summary_words: MIN_SUMMARY_WORDS,
      types: PAGE_TYPES,
      breakdown,
      sample: pending.slice(0, 12).map((page) => ({
        page_type: page.page_type,
        slug: page.slug,
        title: page.title,
      })),
    });
  } catch (error) {
    console.error("[SEO] GET error:", error);
    return NextResponse.json(
      { error: error.message || "Error loading SEO data" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    if (!checkAuth(request)) {
      return NextResponse.json(
        { error: "Unauthorized" },
        {
          status: 401,
          headers: { "WWW-Authenticate": 'Basic realm="Admin Area"' },
        }
      );
    }

    await ensureSeoTable();

    const body = await request.json();
    const count = Math.min(Math.max(1, body.count || 1), 10);
    const type = body.type || "all";
    const force = Boolean(body.force);
    const stats = await getHomeStats();

    const pages = await listAllPages(type);
    const entries = await getSeoEntries(type === "all" ? null : type);
    const entryMap = new Map(
      entries.map((entry) => [buildPageKey(entry.page_type, entry.slug), entry])
    );
    const pending = force
      ? pages
      : pages
          .map((page) => {
            const entry = entryMap.get(buildPageKey(page.page_type, page.slug));
            return {
              page,
              entry,
              hasEntry: Boolean(entry),
              updatedAt: parseTimestamp(entry?.updated_at),
            };
          })
          .filter((item) => !isSeoComplete(item.entry))
          .sort((a, b) => {
            if (!a.hasEntry && b.hasEntry) return -1;
            if (a.hasEntry && !b.hasEntry) return 1;
            if (a.updatedAt !== b.updatedAt) {
              return a.updatedAt - b.updatedAt;
            }
            return a.page.slug.localeCompare(b.page.slug);
          })
          .map((item) => item.page);

    if (pending.length === 0) {
      return NextResponse.json({
        success: true,
        message: "No hay páginas pendientes",
        updated: [],
      });
    }

    const batch = pending.slice(0, count);
    const updated = [];

    for (const page of batch) {
      try {
        const context = await buildContextForPage(page, stats);
        if (!context) {
          throw new Error("Contexto insuficiente para generar SEO");
        }
        const payload = await generateSeoPayload(context);
        const normalized = normalizeSeoPayload(payload, context.path);
        await upsertSeoEntry({
          page_type: page.page_type,
          slug: page.slug,
          ...normalized,
        });
        const focusTopics = Array.isArray(payload.focus_topics)
          ? payload.focus_topics.filter(Boolean).join(", ")
          : sanitizeText(payload.focus_topics);
        updated.push({
          page_type: page.page_type,
          slug: page.slug,
          title: page.title,
          meta_title: normalized.meta_title,
          meta_description: normalized.meta_description,
          meta_keywords: normalized.meta_keywords,
          og_title: normalized.og_title,
          og_description: normalized.og_description,
          twitter_title: normalized.twitter_title,
          twitter_description: normalized.twitter_description,
          canonical_path: normalized.canonical_path,
          summary: normalized.summary,
          focus_topics: focusTopics,
          summary_words: countWords(normalized.summary),
          success: true,
        });
      } catch (error) {
        console.error("[SEO] Error:", error);
        updated.push({
          page_type: page.page_type,
          slug: page.slug,
          title: page.title,
          error: error.message || "Error desconocido",
          success: false,
        });
      }
    }

    return NextResponse.json({
      success: true,
      message: `Actualizadas ${updated.filter((item) => item.success).length} páginas`,
      updated,
    });
  } catch (error) {
    console.error("[SEO] POST error:", error);
    return NextResponse.json(
      { error: error.message || "Error updating SEO data" },
      { status: 500 }
    );
  }
}
