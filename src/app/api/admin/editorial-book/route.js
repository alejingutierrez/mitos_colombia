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

async function listEditorialMyths(limit, offset) {
  if (isPostgres()) {
    const db = getSqlClient();
    const totalResult = await db`SELECT COUNT(*)::int AS total FROM editorial_myths`;
    const total = Number(totalResult[0]?.total || 0);

    const items = await db`
      SELECT
        em.id AS editorial_id,
        em.source_myth_id,
        em.title,
        em.slug,
        em.mito,
        em.historia,
        em.leccion,
        em.similitudes,
        em.content,
        em.excerpt,
        em.region_id,
        r.name AS region,
        r.slug AS region_slug,
        em.community_id,
        c.name AS community,
        c.slug AS community_slug,
        vi.image_url AS vertical_image_url,
        em.image_url AS image_url
      FROM editorial_myths em
      JOIN regions r ON r.id = em.region_id
      LEFT JOIN communities c ON c.id = em.community_id
      LEFT JOIN vertical_images vi
        ON vi.entity_type = 'myth' AND vi.entity_id = em.source_myth_id
      ORDER BY em.id
      LIMIT ${limit} OFFSET ${offset}
    `;

    return { total, items };
  }

  const db = getSqliteDb();
  const totalRow = db.prepare("SELECT COUNT(*) as total FROM editorial_myths").get();
  const total = Number(totalRow?.total || 0);

  const items = db
    .prepare(
      `
      SELECT
        em.id AS editorial_id,
        em.source_myth_id,
        em.title,
        em.slug,
        em.mito,
        em.historia,
        em.leccion,
        em.similitudes,
        em.content,
        em.excerpt,
        em.region_id,
        r.name AS region,
        r.slug AS region_slug,
        em.community_id,
        c.name AS community,
        c.slug AS community_slug,
        vi.image_url AS vertical_image_url,
        em.image_url AS image_url
      FROM editorial_myths em
      JOIN regions r ON r.id = em.region_id
      LEFT JOIN communities c ON c.id = em.community_id
      LEFT JOIN vertical_images vi
        ON vi.entity_type = 'myth' AND vi.entity_id = em.source_myth_id
      ORDER BY em.id
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

    const { total, items } = await listEditorialMyths(limit, offset);

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
