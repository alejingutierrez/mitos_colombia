import { NextResponse } from "next/server";
import OpenAI from "openai";
import {
  getSqlClient,
  getSqliteDb,
  getSqliteDbWritable,
  isPostgres,
} from "../../../../lib/db";

export const runtime = "nodejs";
export const maxDuration = 300;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const MIN_DESCRIPTION_WORDS = 75;
const MIN_CATEGORY_MYTHS = 6;
const MAX_MYTHS_PER_CATEGORY = 12;

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

function truncateText(text, max = 900) {
  const cleaned = sanitizeText(text);
  if (cleaned.length <= max) {
    return cleaned;
  }
  return `${cleaned.slice(0, max).trim()}...`;
}

async function ensureDescriptionColumn() {
  if (isPostgres()) {
    const db = getSqlClient();
    await db`ALTER TABLE tags ADD COLUMN IF NOT EXISTS description TEXT`;
    return;
  }

  const db = getSqliteDbWritable();
  const columns = db.prepare("PRAGMA table_info(tags)").all();
  const existing = new Set(columns.map((column) => column.name));
  if (!existing.has("description")) {
    db.prepare("ALTER TABLE tags ADD COLUMN description TEXT").run();
  }
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

function filterEligibleCategories(categories, regionNames) {
  const regionSet = new Set(regionNames.map(normalizeValue));

  return categories.filter((category) => {
    const mythCount = Number(category.myth_count || 0);
    if (mythCount < MIN_CATEGORY_MYTHS) {
      return false;
    }
    const normalized = normalizeValue(category.name);
    if (!normalized) {
      return false;
    }
    if (regionSet.has(normalized) || normalized === "ninguno") {
      return false;
    }
    return true;
  });
}

function annotateCategory(category) {
  const description = sanitizeText(category.description);
  const wordCount = countWords(description);
  return {
    ...category,
    description,
    word_count: wordCount,
  };
}

async function getMythsForCategory(tagId, limit = MAX_MYTHS_PER_CATEGORY) {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      SELECT
        myths.*,
        regions.name AS region,
        regions.slug AS region_slug,
        communities.name AS community,
        communities.slug AS community_slug
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
        myths.*,
        regions.name AS region,
        regions.slug AS region_slug,
        communities.name AS community,
        communities.slug AS community_slug
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

function buildMythContext(myth) {
  return {
    id: myth.id,
    title: myth.title,
    slug: myth.slug,
    region: myth.region,
    region_slug: myth.region_slug,
    community: myth.community,
    community_slug: myth.community_slug,
    category_path: myth.category_path,
    tags_raw: myth.tags_raw,
    excerpt: myth.excerpt,
    content: truncateText(myth.content),
    seo_title: myth.seo_title,
    seo_description: myth.seo_description,
    focus_keyword: myth.focus_keyword,
    focus_keywords_raw: myth.focus_keywords_raw,
    image_prompt: myth.image_prompt,
    image_url: myth.image_url,
    latitude: myth.latitude,
    longitude: myth.longitude,
    source_row: myth.source_row,
  };
}

async function generateCategoryDescription(category, myths) {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY no está configurada");
  }

  const payload = {
    category: {
      id: category.id,
      name: category.name,
      slug: category.slug,
      myth_count: Number(category.myth_count || 0),
    },
    myths_total: Number(category.myth_count || 0),
    myths_sample_count: myths.length,
    myths: myths.map(buildMythContext),
  };

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Eres un editor especializado en mitologia colombiana. " +
          "Redacta una descripcion editorial en espanol para una categoria de mitos. " +
          `Debe tener entre ${MIN_DESCRIPTION_WORDS} y 120 palabras, un solo parrafo, sin titulos ni listas. ` +
          "Usa un tono claro, evocador y preciso. Usa los datos suministrados; si falta contexto, " +
          "apoya con conocimiento general sin inventar hechos dudosos. Devuelve solo el texto final.",
      },
      {
        role: "user",
        content:
          "Crea la descripcion usando los mitos de la categoria. " +
          "Aqui tienes una muestra de mitos con campos completos (contenido truncado para contexto):\n\n" +
          JSON.stringify(payload, null, 2),
      },
    ],
    temperature: 0.6,
    max_tokens: 320,
  });

  const raw = response?.choices?.[0]?.message?.content;
  const cleaned = sanitizeText(raw);
  if (!cleaned) {
    throw new Error("OpenAI no devolvio descripcion");
  }
  return cleaned;
}

async function expandDescription(category, description, myths) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Eres un editor experto. Expande la descripcion manteniendo el tono editorial, " +
          `dejandola entre ${MIN_DESCRIPTION_WORDS} y 120 palabras. Un solo parrafo, sin listas.`,
      },
      {
        role: "user",
        content:
          "Descripcion actual:\n" +
          description +
          "\n\nCategoria:\n" +
          JSON.stringify(
            {
              id: category.id,
              name: category.name,
              slug: category.slug,
              myth_count: Number(category.myth_count || 0),
              myths_sample: myths.map(buildMythContext),
            },
            null,
            2
          ),
      },
    ],
    temperature: 0.5,
    max_tokens: 320,
  });

  const raw = response?.choices?.[0]?.message?.content;
  return sanitizeText(raw);
}

async function updateCategoryDescription(tagId, description) {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      UPDATE tags
      SET description = ${description}
      WHERE id = ${tagId}
      RETURNING id, name, slug, description
    `;
    return result.rows?.[0] || result[0];
  }

  const db = getSqliteDbWritable();
  const stmt = db.prepare(
    `
    UPDATE tags
    SET description = ?
    WHERE id = ?
  `
  );
  const info = stmt.run(description, tagId);
  if (info.changes === 0) {
    throw new Error(`No category found with id ${tagId}`);
  }
  return { id: tagId, description };
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

    await ensureDescriptionColumn();

    const regionNames = await getRegionNames();
    const categories = await listCategories();
    const eligible = filterEligibleCategories(categories, regionNames)
      .map(annotateCategory);
    const pending = eligible.filter(
      (category) => category.word_count < MIN_DESCRIPTION_WORDS
    );

    return NextResponse.json({
      total: pending.length,
      eligible: eligible.length,
      min_words: MIN_DESCRIPTION_WORDS,
      sample: pending.slice(0, 12).map((category) => ({
        id: category.id,
        name: category.name,
        slug: category.slug,
        myth_count: Number(category.myth_count || 0),
        word_count: category.word_count,
      })),
    });
  } catch (error) {
    console.error("[CATEGORY-DESCRIPTIONS] GET error:", error);
    return NextResponse.json(
      { error: error.message || "Error loading category descriptions" },
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

    await ensureDescriptionColumn();

    const body = await request.json();
    const count = Math.min(Math.max(1, body.count || 1), 10);
    const force = Boolean(body.force);

    const regionNames = await getRegionNames();
    const categories = await listCategories();
    const eligible = filterEligibleCategories(categories, regionNames)
      .map(annotateCategory);
    const pending = force
      ? eligible
      : eligible.filter((category) => category.word_count < MIN_DESCRIPTION_WORDS);

    if (pending.length === 0) {
      return NextResponse.json({
        success: true,
        message: "No hay categorias pendientes",
        updated: [],
      });
    }

    const batch = pending.slice(0, count);
    const updated = [];

    for (const category of batch) {
      try {
        const myths = await getMythsForCategory(category.id, MAX_MYTHS_PER_CATEGORY);
        const description = await generateCategoryDescription(category, myths);
        let finalDescription = description;
        if (countWords(finalDescription) < MIN_DESCRIPTION_WORDS) {
          const expanded = await expandDescription(category, description, myths);
          if (expanded) {
            finalDescription = expanded;
          }
        }

        const saved = await updateCategoryDescription(
          category.id,
          finalDescription
        );

        updated.push({
          id: saved.id,
          name: category.name,
          slug: category.slug,
          word_count: countWords(finalDescription),
          description: finalDescription,
          success: true,
        });
      } catch (error) {
        console.error("[CATEGORY-DESCRIPTIONS] Error:", error);
        updated.push({
          id: category.id,
          name: category.name,
          slug: category.slug,
          error: error.message || "Error desconocido",
          success: false,
        });
      }
    }

    return NextResponse.json({
      success: true,
      message: `Actualizadas ${updated.filter((item) => item.success).length} categorias`,
      updated,
    });
  } catch (error) {
    console.error("[CATEGORY-DESCRIPTIONS] POST error:", error);
    return NextResponse.json(
      { error: error.message || "Error updating category descriptions" },
      { status: 500 }
    );
  }
}
