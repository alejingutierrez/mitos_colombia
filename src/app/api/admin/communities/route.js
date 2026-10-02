import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import {
  getSqlClient,
  getSqliteDb,
  getSqliteDbWritable,
  isPostgres,
} from "../../../../lib/db";

export const runtime = "nodejs";

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

function normalizeText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

function slugify(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .trim();
}

async function getRegionById(regionId) {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db.query(
      "SELECT id, name, slug FROM regions WHERE id = $1",
      [regionId]
    );
    return result.rows?.[0] || null;
  }

  const db = getSqliteDb();
  return db.prepare("SELECT id, name, slug FROM regions WHERE id = ?").get(regionId);
}

async function listCommunitiesByRegion(regionId) {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db.query(
      "SELECT id, name, slug FROM communities WHERE region_id = $1",
      [regionId]
    );
    return result.rows || [];
  }

  const db = getSqliteDb();
  return db
    .prepare("SELECT id, name, slug FROM communities WHERE region_id = ?")
    .all(regionId);
}

function buildUniqueSlug(baseSlug, existingSlugs) {
  const slugBase = slugify(baseSlug);
  if (!slugBase) return null;
  if (!existingSlugs.has(slugBase)) {
    return slugBase;
  }
  let counter = 2;
  while (existingSlugs.has(`${slugBase}-${counter}`)) {
    counter += 1;
  }
  return `${slugBase}-${counter}`;
}

async function insertCommunity(regionId, name, slug) {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db.query(
      `
      INSERT INTO communities (region_id, name, slug)
      VALUES ($1, $2, $3)
      RETURNING id, name, slug, region_id
    `,
      [regionId, name, slug]
    );
    return result.rows?.[0] || null;
  }

  const db = getSqliteDbWritable();
  db.prepare(
    "INSERT OR IGNORE INTO communities (region_id, name, slug) VALUES (?, ?, ?)"
  ).run(regionId, name, slug);
  return db
    .prepare(
      "SELECT id, name, slug, region_id FROM communities WHERE region_id = ? AND slug = ?"
    )
    .get(regionId, slug);
}

export async function POST(request) {
  try {
    if (!checkAuth(request)) {
      return NextResponse.json(
        { error: "Unauthorized" },
        {
          status: 401,
          headers: {
            "WWW-Authenticate": 'Basic realm="Admin Area"',
          },
        }
      );
    }

    const body = await request.json();
    const regionId = Number(body.region_id);
    const name = String(body.name || "").trim();

    if (!regionId) {
      return NextResponse.json({ error: "Region requerida" }, { status: 400 });
    }

    if (!name) {
      return NextResponse.json({ error: "Nombre requerido" }, { status: 400 });
    }

    const region = await getRegionById(regionId);
    if (!region) {
      return NextResponse.json({ error: "Region no encontrada" }, { status: 400 });
    }

    const normalized = normalizeText(name);
    const existing = await listCommunitiesByRegion(regionId);
    const match = existing.find(
      (community) =>
        normalizeText(community.name) === normalized ||
        normalizeText(community.slug) === normalized
    );

    if (match) {
      return NextResponse.json({
        community: { ...match, region_id: regionId },
        created: false,
      });
    }

    const existingSlugs = new Set(existing.map((community) => community.slug));
    const slug = buildUniqueSlug(name, existingSlugs);
    if (!slug) {
      return NextResponse.json({ error: "Slug invalido" }, { status: 400 });
    }

    const created = await insertCommunity(regionId, name, slug);
    if (!created?.id) {
      throw new Error("No se pudo crear la comunidad");
    }

    revalidateTag("taxonomy");

    return NextResponse.json({
      community: created,
      created: true,
    });
  } catch (error) {
    console.error("Error in communities POST:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create community" },
      { status: 500 }
    );
  }
}
