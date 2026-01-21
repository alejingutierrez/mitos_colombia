import { NextResponse } from "next/server";
import { getSqlClient, getSqliteDb, isPostgres } from "../../../../lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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

async function listMyths(limit, offset) {
  if (isPostgres()) {
    const db = getSqlClient();
    const totalResult = await db`SELECT COUNT(*)::int AS total FROM myths`;
    const total = Number(
      totalResult?.rows?.[0]?.total ??
        totalResult?.[0]?.total ??
        0
    );

    const itemsResult = await db`
      SELECT
        m.id AS myth_id,
        m.title,
        m.slug,
        m.mito,
        m.historia,
        m.leccion,
        m.similitudes,
        m.content,
        m.excerpt,
        m.region_id,
        r.name AS region,
        r.slug AS region_slug,
        m.community_id,
        c.name AS community,
        c.slug AS community_slug,
        vi.image_url AS vertical_image_url,
        m.image_url AS image_url
      FROM myths m
      JOIN regions r ON r.id = m.region_id
      LEFT JOIN communities c ON c.id = m.community_id
      LEFT JOIN vertical_images vi
        ON vi.entity_type = 'myth' AND vi.entity_id = m.id
      ORDER BY m.id
      LIMIT ${limit} OFFSET ${offset}
    `;
    const items = itemsResult?.rows ?? itemsResult ?? [];

    return { total, items };
  }

  const db = getSqliteDb();
  const totalRow = db.prepare("SELECT COUNT(*) as total FROM myths").get();
  const total = Number(totalRow?.total || 0);

  const items = db
    .prepare(
      `
      SELECT
        m.id AS myth_id,
        m.title,
        m.slug,
        m.mito,
        m.historia,
        m.leccion,
        m.similitudes,
        m.content,
        m.excerpt,
        m.region_id,
        r.name AS region,
        r.slug AS region_slug,
        m.community_id,
        c.name AS community,
        c.slug AS community_slug,
        vi.image_url AS vertical_image_url,
        m.image_url AS image_url
      FROM myths m
      JOIN regions r ON r.id = m.region_id
      LEFT JOIN communities c ON c.id = m.community_id
      LEFT JOIN vertical_images vi
        ON vi.entity_type = 'myth' AND vi.entity_id = m.id
      ORDER BY m.id
      LIMIT ? OFFSET ?
    `
    )
    .all(limit, offset);

  return { total, items };
}

export async function GET(request) {
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

    const { searchParams } = new URL(request.url);
    const page = Math.max(Number(searchParams.get("page") || 1), 1);
    const limit = Math.min(Math.max(Number(searchParams.get("limit") || 40), 1), 200);
    const offset = (page - 1) * limit;

    const { total, items } = await listMyths(limit, offset);

    return NextResponse.json({
      total,
      page,
      limit,
      items,
    });
  } catch (error) {
    console.error("Error loading editorial book:", error);
    return NextResponse.json(
      { error: error.message || "Failed to load editorial book" },
      { status: 500 }
    );
  }
}
