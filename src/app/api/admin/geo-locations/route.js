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

const COLOMBIA_CENTER = {
  latitude: 4.570868,
  longitude: -74.297333,
  label: "Centro de Colombia",
};

const REGION_CENTERS = {
  amazonas: { latitude: -1.2, longitude: -71.8, label: "Amazonas, Colombia" },
  andina: { latitude: 4.8, longitude: -74.1, label: "Región Andina, Colombia" },
  caribe: { latitude: 10.6, longitude: -75.3, label: "Región Caribe, Colombia" },
  orinoquia: { latitude: 4.2, longitude: -71.4, label: "Orinoquía, Colombia" },
  pacifico: { latitude: 4.0, longitude: -77.2, label: "Región Pacífica, Colombia" },
  varios: { ...COLOMBIA_CENTER, label: "Colombia" },
};

const COLOMBIA_BOUNDS = {
  minLat: -4.5,
  maxLat: 13.5,
  minLng: -79.2,
  maxLng: -66.6,
};

function normalizeRegionKey(value) {
  if (!value) return "";
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "");
}

function resolveRegionCenter(regionSlug, regionName) {
  const slugKey = normalizeRegionKey(regionSlug);
  if (slugKey && REGION_CENTERS[slugKey]) {
    return REGION_CENTERS[slugKey];
  }
  const nameKey = normalizeRegionKey(regionName);
  if (nameKey && REGION_CENTERS[nameKey]) {
    return REGION_CENTERS[nameKey];
  }
  return COLOMBIA_CENTER;
}

function isValidCoordinate(value) {
  return Number.isFinite(value);
}

function isWithinColombia(latitude, longitude) {
  return (
    latitude >= COLOMBIA_BOUNDS.minLat &&
    latitude <= COLOMBIA_BOUNDS.maxLat &&
    longitude >= COLOMBIA_BOUNDS.minLng &&
    longitude <= COLOMBIA_BOUNDS.maxLng
  );
}

function roundCoordinate(value) {
  return Math.round(value * 1e6) / 1e6;
}

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

async function ensureGeoColumns() {
  if (isPostgres()) {
    const db = getSqlClient();
    await db`ALTER TABLE myths ADD COLUMN IF NOT EXISTS latitude DOUBLE PRECISION`;
    await db`ALTER TABLE myths ADD COLUMN IF NOT EXISTS longitude DOUBLE PRECISION`;
    return;
  }

  const db = getSqliteDbWritable();
  const columns = db.prepare("PRAGMA table_info(myths)").all();
  const existing = new Set(columns.map((column) => column.name));

  if (!existing.has("latitude")) {
    db.prepare("ALTER TABLE myths ADD COLUMN latitude REAL").run();
  }
  if (!existing.has("longitude")) {
    db.prepare("ALTER TABLE myths ADD COLUMN longitude REAL").run();
  }
}

async function getMythsWithoutLocation(limit = 10) {
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
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      WHERE myths.latitude IS NULL OR myths.longitude IS NULL
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
      JOIN regions ON regions.id = myths.region_id
      LEFT JOIN communities ON communities.id = myths.community_id
      WHERE myths.latitude IS NULL OR myths.longitude IS NULL
      ORDER BY myths.id
      LIMIT ?
    `
    )
    .all(limit);
}

async function updateMythLocation(id, latitude, longitude) {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      UPDATE myths
      SET latitude = ${latitude}, longitude = ${longitude}, updated_at = NOW()
      WHERE id = ${id}
      RETURNING id, title, latitude, longitude
    `;
    return result.rows?.[0] || result[0];
  }

  const db = getSqliteDbWritable();
  const stmt = db.prepare(`
    UPDATE myths
    SET latitude = ?, longitude = ?, updated_at = datetime('now')
    WHERE id = ?
  `);
  const info = stmt.run(latitude, longitude, id);
  if (info.changes === 0) {
    throw new Error(`No myth found with id ${id}`);
  }
  return { id, latitude, longitude };
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
    content: myth.content,
    seo_title: myth.seo_title,
    seo_description: myth.seo_description,
    focus_keyword: myth.focus_keyword,
    focus_keywords_raw: myth.focus_keywords_raw,
    image_prompt: myth.image_prompt,
    image_url: myth.image_url,
    source_row: myth.source_row,
    created_at: myth.created_at,
    updated_at: myth.updated_at,
  };
}

async function generateLocation(myth) {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY no está configurada");
  }
  const regionCenter = resolveRegionCenter(myth.region_slug, myth.region);

  const payload = {
    myth: buildMythContext(myth),
    region_center: regionCenter,
    colombia_center: COLOMBIA_CENTER,
  };

  const response = await openai.responses.create({
    model: "gpt-4o-mini",
    instructions:
      "Eres un investigador geografico especializado en mitologia colombiana. " +
      "Debes determinar la ubicacion geografica mas probable del mito usando " +
      "todos los campos provistos y haciendo una busqueda web obligatoria. " +
      "Si el mito describe una laguna, rio, pueblo o territorio especifico, " +
      "encuentra sus coordenadas aproximadas en Colombia. " +
      "Si no hay suficiente evidencia, usa el centro de la region indicada. " +
      "Solo si no hay region clara usa el centro de Colombia. " +
      "Responde solo en el formato JSON solicitado.",
    input: JSON.stringify(payload),
    tools: [
      {
        type: "web_search_preview",
        search_context_size: "medium",
        user_location: {
          type: "approximate",
          country: "CO",
          city: "Bogotá",
          region: "Cundinamarca",
        },
      },
    ],
    tool_choice: { type: "web_search_preview" },
    text: {
      format: {
        type: "json_schema",
        name: "myth_geolocation",
        strict: true,
        schema: {
          type: "object",
          additionalProperties: false,
          properties: {
            latitude: { type: "number" },
            longitude: { type: "number" },
            location_name: { type: "string" },
            confidence: { type: "number" },
            used_fallback: { type: "boolean" },
            rationale: { type: "string" },
          },
          required: [
            "latitude",
            "longitude",
            "location_name",
            "confidence",
            "used_fallback",
            "rationale",
          ],
        },
      },
    },
    temperature: 0.2,
    max_output_tokens: 450,
    truncation: "auto",
  });

  const outputText = response.output_text?.trim();
  if (!outputText) {
    throw new Error("OpenAI response is empty");
  }

  const parsed = JSON.parse(outputText);
  return {
    latitude: Number(parsed.latitude),
    longitude: Number(parsed.longitude),
    location_name: parsed.location_name,
    confidence: Number(parsed.confidence),
    used_fallback: Boolean(parsed.used_fallback),
    rationale: parsed.rationale,
  };
}

function applyFallback(myth, reason, previous = {}) {
  const regionCenter = resolveRegionCenter(myth.region_slug, myth.region);
  return {
    latitude: regionCenter.latitude,
    longitude: regionCenter.longitude,
    location_name: regionCenter.label || COLOMBIA_CENTER.label,
    confidence: 0,
    used_fallback: true,
    fallback_reason: reason,
    rationale: previous.rationale || "",
  };
}

function normalizeResult(myth, result) {
  let latitude = result.latitude;
  let longitude = result.longitude;
  let confidence = Number.isFinite(result.confidence) ? result.confidence : 0;
  let usedFallback = result.used_fallback;
  let fallbackReason = "";

  if (!isValidCoordinate(latitude) || !isValidCoordinate(longitude)) {
    return applyFallback(myth, "Coordenadas invalidas", result);
  }

  if (!isWithinColombia(latitude, longitude)) {
    return applyFallback(myth, "Fuera de Colombia", result);
  }

  if (confidence < 0.45 || usedFallback) {
    fallbackReason = usedFallback ? "Modelo solicito fallback" : "Confianza baja";
    const fallback = applyFallback(myth, fallbackReason, result);
    return {
      ...fallback,
      location_name: fallback.location_name || result.location_name,
    };
  }

  return {
    latitude: roundCoordinate(latitude),
    longitude: roundCoordinate(longitude),
    location_name: result.location_name,
    confidence: Math.min(Math.max(confidence, 0), 1),
    used_fallback: false,
    rationale: result.rationale,
  };
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

    await ensureGeoColumns();

    if (isPostgres()) {
      const db = getSqlClient();
      const totalResult = await db`
        SELECT COUNT(*)::int AS total
        FROM myths
        WHERE latitude IS NULL OR longitude IS NULL
      `;
      const breakdownResult = await db`
        SELECT regions.name, regions.slug, COUNT(myths.id)::int AS total
        FROM myths
        JOIN regions ON regions.id = myths.region_id
        WHERE myths.latitude IS NULL OR myths.longitude IS NULL
        GROUP BY regions.id
        ORDER BY total DESC
      `;

      return NextResponse.json({
        total: totalResult.rows?.[0]?.total ?? totalResult[0]?.total ?? 0,
        breakdown: breakdownResult.rows || breakdownResult,
      });
    }

    const db = getSqliteDb();
    const total = db
      .prepare(
        "SELECT COUNT(*) as total FROM myths WHERE latitude IS NULL OR longitude IS NULL"
      )
      .get().total;
    const breakdown = db
      .prepare(
        `
        SELECT regions.name, regions.slug, COUNT(myths.id) as total
        FROM myths
        JOIN regions ON regions.id = myths.region_id
        WHERE myths.latitude IS NULL OR myths.longitude IS NULL
        GROUP BY regions.id
        ORDER BY total DESC
      `
      )
      .all();

    return NextResponse.json({ total, breakdown });
  } catch (error) {
    console.error("Error getting geo count:", error);
    return NextResponse.json(
      { error: error.message || "Failed to get geo count" },
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

    await ensureGeoColumns();

    const body = await request.json();
    const count = Math.min(Math.max(1, body.count || 1), 50);
    const myths = await getMythsWithoutLocation(count);

    if (!myths.length) {
      return NextResponse.json({
        success: true,
        message: "No hay mitos pendientes de geolocalizacion",
        updated: [],
      });
    }

    const results = [];

    for (const myth of myths) {
      try {
        let result;
        try {
          result = await generateLocation(myth);
          result = normalizeResult(myth, result);
        } catch (aiError) {
          result = applyFallback(myth, "Error en OpenAI", { rationale: "" });
          result.warning = aiError.message;
        }

        const saved = await updateMythLocation(
          myth.id,
          result.latitude,
          result.longitude
        );

        results.push({
          id: myth.id,
          title: myth.title,
          slug: myth.slug,
          region: myth.region,
          community: myth.community,
          latitude: saved.latitude ?? result.latitude,
          longitude: saved.longitude ?? result.longitude,
          location_name: result.location_name,
          confidence: result.confidence,
          used_fallback: result.used_fallback,
          rationale: result.rationale,
          fallback_reason: result.fallback_reason,
          warning: result.warning,
          success: true,
        });
      } catch (error) {
        results.push({
          id: myth.id,
          title: myth.title,
          slug: myth.slug,
          region: myth.region,
          community: myth.community,
          error: error.message,
          success: false,
        });
      }
    }

    return NextResponse.json({
      success: true,
      message: `Actualizadas ${results.filter((r) => r.success).length} ubicaciones`,
      updated: results,
      total: myths.length,
    });
  } catch (error) {
    console.error("Error in geo-locations API:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate geo locations" },
      { status: 500 }
    );
  }
}
