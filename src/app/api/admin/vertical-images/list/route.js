import { NextResponse } from "next/server";
import { isPostgres, getSqlClient, getSqliteDb } from "../../../../../lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isAuthenticated(request) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader) return false;

  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString(
    "ascii"
  );
  const [username, password] = credentials.split(":");

  return (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  );
}

export async function GET(request) {
  if (!isAuthenticated(request)) {
    return new NextResponse("Unauthorized", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Admin"' },
    });
  }

  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "20", 10);
    const entityType = searchParams.get("entityType") || "";
    const offset = (page - 1) * limit;

    const isPg = isPostgres();

    if (isPg) {
      const db = getSqlClient();

      // PostgreSQL version
      let total = 0;
      let items = [];

      if (entityType) {
        // Con filtro
        const countResult = await db`
          SELECT COUNT(*) as total FROM vertical_images
          WHERE entity_type = ${entityType}
        `;
        const countRow = countResult.rows?.[0] || countResult[0];
        total = parseInt(countRow?.total || 0);

        items = await db`
          SELECT * FROM vertical_images
          WHERE entity_type = ${entityType}
          ORDER BY created_at DESC
          LIMIT ${limit} OFFSET ${offset}
        `;
      } else {
        // Sin filtro
        const countResult = await db`
          SELECT COUNT(*) as total FROM vertical_images
        `;
        const countRow = countResult.rows?.[0] || countResult[0];
        total = parseInt(countRow?.total || 0);

        items = await db`
          SELECT * FROM vertical_images
          ORDER BY created_at DESC
          LIMIT ${limit} OFFSET ${offset}
        `;
      }

      return NextResponse.json({
        items: items.rows || items,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit) || 1,
      });

    } else {
      // SQLite version
      const db = getSqliteDb();

      let whereClause = "";
      const params = [];

      if (entityType) {
        whereClause = "WHERE entity_type = ?";
        params.push(entityType);
      }

      // Obtener total
      const countQuery = `SELECT COUNT(*) as total FROM vertical_images ${whereClause}`;
      const countResult = db.prepare(countQuery).get(...params);
      const total = countResult.total;

      // Obtener items paginados
      const query = `
        SELECT *
        FROM vertical_images
        ${whereClause}
        ORDER BY created_at DESC
        LIMIT ? OFFSET ?
      `;
      const items = db.prepare(query).all(...params, limit, offset);

      return NextResponse.json({
        items,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      });
    }
  } catch (error) {
    console.error("Error listing vertical images:", error);
    return NextResponse.json(
      { error: "Failed to list vertical images", details: error.message },
      { status: 500 }
    );
  }
}
