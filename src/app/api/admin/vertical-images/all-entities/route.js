import { NextResponse } from "next/server";
import { isPostgres, getSqlClient, getSqliteDb } from "../../../../../lib/db.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Basic auth middleware
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

// Get all entities with their vertical image status
export async function GET(request) {
  try {
    // Check authentication
    if (!checkAuth(request)) {
      return NextResponse.json(
        { error: "Unauthorized" },
        {
          status: 401,
          headers: {
            'WWW-Authenticate': 'Basic realm="Admin Area"'
          }
        }
      );
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "20", 10);
    const entityType = searchParams.get("entityType") || "";
    const offset = (page - 1) * limit;

    const isPg = isPostgres();

    if (isPg) {
      const db = getSqlClient();

      let total = 0;
      let items = [];

      if (entityType) {
        // Con filtro por tipo
        if (entityType === 'myth') {
          const countResult = await db`SELECT COUNT(*) as total FROM myths WHERE image_prompt IS NOT NULL`;
          total = parseInt(countResult[0]?.total || 0);

          items = await db`
            SELECT
              m.id,
              m.title as name,
              m.slug,
              m.image_prompt,
              'myth' as entity_type,
              vi.id as vertical_image_id,
              vi.base_prompt,
              vi.custom_prompt,
              vi.image_url as vertical_image_url,
              vi.created_at as vertical_created_at
            FROM myths m
            LEFT JOIN vertical_images vi ON vi.entity_type = 'myth' AND vi.entity_id = m.id
            WHERE m.image_prompt IS NOT NULL
            ORDER BY m.id
            LIMIT ${limit} OFFSET ${offset}
          `;
        } else if (entityType === 'community') {
          const countResult = await db`SELECT COUNT(*) as total FROM communities WHERE image_prompt IS NOT NULL`;
          total = parseInt(countResult[0]?.total || 0);

          items = await db`
            SELECT
              c.id,
              c.name,
              c.slug,
              c.image_prompt,
              'community' as entity_type,
              vi.id as vertical_image_id,
              vi.base_prompt,
              vi.custom_prompt,
              vi.image_url as vertical_image_url,
              vi.created_at as vertical_created_at
            FROM communities c
            LEFT JOIN vertical_images vi ON vi.entity_type = 'community' AND vi.entity_id = c.id
            WHERE c.image_prompt IS NOT NULL
            ORDER BY c.id
            LIMIT ${limit} OFFSET ${offset}
          `;
        } else if (entityType === 'category') {
          const countResult = await db`SELECT COUNT(*) as total FROM tags WHERE image_prompt IS NOT NULL`;
          total = parseInt(countResult[0]?.total || 0);

          items = await db`
            SELECT
              t.id,
              t.name,
              t.slug,
              t.image_prompt,
              'category' as entity_type,
              vi.id as vertical_image_id,
              vi.base_prompt,
              vi.custom_prompt,
              vi.image_url as vertical_image_url,
              vi.created_at as vertical_created_at
            FROM tags t
            LEFT JOIN vertical_images vi ON vi.entity_type = 'category' AND vi.entity_id = t.id
            WHERE t.image_prompt IS NOT NULL
            ORDER BY t.id
            LIMIT ${limit} OFFSET ${offset}
          `;
        } else if (entityType === 'region') {
          const countResult = await db`SELECT COUNT(*) as total FROM regions WHERE image_prompt IS NOT NULL`;
          total = parseInt(countResult[0]?.total || 0);

          items = await db`
            SELECT
              r.id,
              r.name,
              r.slug,
              r.image_prompt,
              'region' as entity_type,
              vi.id as vertical_image_id,
              vi.base_prompt,
              vi.custom_prompt,
              vi.image_url as vertical_image_url,
              vi.created_at as vertical_created_at
            FROM regions r
            LEFT JOIN vertical_images vi ON vi.entity_type = 'region' AND vi.entity_id = r.id
            WHERE r.image_prompt IS NOT NULL
            ORDER BY r.id
            LIMIT ${limit} OFFSET ${offset}
          `;
        }
      } else {
        // Sin filtro - todos los tipos (con prioridad)
        const allQuery = await db`
          (
            SELECT
              m.id,
              m.title as name,
              m.slug,
              m.image_prompt,
              'myth' as entity_type,
              1 as priority,
              vi.id as vertical_image_id,
              vi.base_prompt,
              vi.custom_prompt,
              vi.image_url as vertical_image_url,
              vi.created_at as vertical_created_at
            FROM myths m
            LEFT JOIN vertical_images vi ON vi.entity_type = 'myth' AND vi.entity_id = m.id
            WHERE m.image_prompt IS NOT NULL
          )
          UNION ALL
          (
            SELECT
              c.id,
              c.name,
              c.slug,
              c.image_prompt,
              'community' as entity_type,
              2 as priority,
              vi.id as vertical_image_id,
              vi.base_prompt,
              vi.custom_prompt,
              vi.image_url as vertical_image_url,
              vi.created_at as vertical_created_at
            FROM communities c
            LEFT JOIN vertical_images vi ON vi.entity_type = 'community' AND vi.entity_id = c.id
            WHERE c.image_prompt IS NOT NULL
          )
          UNION ALL
          (
            SELECT
              t.id,
              t.name,
              t.slug,
              t.image_prompt,
              'category' as entity_type,
              3 as priority,
              vi.id as vertical_image_id,
              vi.base_prompt,
              vi.custom_prompt,
              vi.image_url as vertical_image_url,
              vi.created_at as vertical_created_at
            FROM tags t
            LEFT JOIN vertical_images vi ON vi.entity_type = 'category' AND vi.entity_id = t.id
            WHERE t.image_prompt IS NOT NULL
          )
          UNION ALL
          (
            SELECT
              r.id,
              r.name,
              r.slug,
              r.image_prompt,
              'region' as entity_type,
              4 as priority,
              vi.id as vertical_image_id,
              vi.base_prompt,
              vi.custom_prompt,
              vi.image_url as vertical_image_url,
              vi.created_at as vertical_created_at
            FROM regions r
            LEFT JOIN vertical_images vi ON vi.entity_type = 'region' AND vi.entity_id = r.id
            WHERE r.image_prompt IS NOT NULL
          )
          ORDER BY priority, id
          LIMIT ${limit} OFFSET ${offset}
        `;

        items = allQuery;

        // Get total count
        const countResult = await db`
          SELECT
            (SELECT COUNT(*) FROM myths WHERE image_prompt IS NOT NULL) +
            (SELECT COUNT(*) FROM communities WHERE image_prompt IS NOT NULL) +
            (SELECT COUNT(*) FROM tags WHERE image_prompt IS NOT NULL) +
            (SELECT COUNT(*) FROM regions WHERE image_prompt IS NOT NULL) as total
        `;
        total = parseInt(countResult[0]?.total || 0);
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
      let items = [];
      let total = 0;

      if (entityType) {
        // Con filtro
        if (entityType === 'myth') {
          total = db.prepare(`SELECT COUNT(*) as count FROM myths WHERE image_prompt IS NOT NULL`).get().count;
          items = db.prepare(`
            SELECT
              m.id,
              m.title as name,
              m.slug,
              m.image_prompt,
              'myth' as entity_type,
              vi.id as vertical_image_id,
              vi.base_prompt,
              vi.custom_prompt,
              vi.image_url as vertical_image_url,
              vi.created_at as vertical_created_at
            FROM myths m
            LEFT JOIN vertical_images vi ON vi.entity_type = 'myth' AND vi.entity_id = m.id
            WHERE m.image_prompt IS NOT NULL
            ORDER BY m.id
            LIMIT ? OFFSET ?
          `).all(limit, offset);
        } else if (entityType === 'community') {
          total = db.prepare(`SELECT COUNT(*) as count FROM communities WHERE image_prompt IS NOT NULL`).get().count;
          items = db.prepare(`
            SELECT
              c.id,
              c.name,
              c.slug,
              c.image_prompt,
              'community' as entity_type,
              vi.id as vertical_image_id,
              vi.base_prompt,
              vi.custom_prompt,
              vi.image_url as vertical_image_url,
              vi.created_at as vertical_created_at
            FROM communities c
            LEFT JOIN vertical_images vi ON vi.entity_type = 'community' AND vi.entity_id = c.id
            WHERE c.image_prompt IS NOT NULL
            ORDER BY c.id
            LIMIT ? OFFSET ?
          `).all(limit, offset);
        } else if (entityType === 'category') {
          total = db.prepare(`SELECT COUNT(*) as count FROM tags WHERE image_prompt IS NOT NULL`).get().count;
          items = db.prepare(`
            SELECT
              t.id,
              t.name,
              t.slug,
              t.image_prompt,
              'category' as entity_type,
              vi.id as vertical_image_id,
              vi.base_prompt,
              vi.custom_prompt,
              vi.image_url as vertical_image_url,
              vi.created_at as vertical_created_at
            FROM tags t
            LEFT JOIN vertical_images vi ON vi.entity_type = 'category' AND vi.entity_id = t.id
            WHERE t.image_prompt IS NOT NULL
            ORDER BY t.id
            LIMIT ? OFFSET ?
          `).all(limit, offset);
        } else if (entityType === 'region') {
          total = db.prepare(`SELECT COUNT(*) as count FROM regions WHERE image_prompt IS NOT NULL`).get().count;
          items = db.prepare(`
            SELECT
              r.id,
              r.name,
              r.slug,
              r.image_prompt,
              'region' as entity_type,
              vi.id as vertical_image_id,
              vi.base_prompt,
              vi.custom_prompt,
              vi.image_url as vertical_image_url,
              vi.created_at as vertical_created_at
            FROM regions r
            LEFT JOIN vertical_images vi ON vi.entity_type = 'region' AND vi.entity_id = r.id
            WHERE r.image_prompt IS NOT NULL
            ORDER BY r.id
            LIMIT ? OFFSET ?
          `).all(limit, offset);
        }
      } else {
        // Sin filtro - mezclar todos
        const allItems = [];

        // Myths
        const myths = db.prepare(`
          SELECT
            m.id,
            m.title as name,
            m.slug,
            m.image_prompt,
            'myth' as entity_type,
            1 as priority,
            vi.id as vertical_image_id,
            vi.base_prompt,
            vi.custom_prompt,
            vi.image_url as vertical_image_url,
            vi.created_at as vertical_created_at
          FROM myths m
          LEFT JOIN vertical_images vi ON vi.entity_type = 'myth' AND vi.entity_id = m.id
          WHERE m.image_prompt IS NOT NULL
        `).all();
        allItems.push(...myths);

        // Communities
        const communities = db.prepare(`
          SELECT
            c.id,
            c.name,
            c.slug,
            c.image_prompt,
            'community' as entity_type,
            2 as priority,
            vi.id as vertical_image_id,
            vi.base_prompt,
            vi.custom_prompt,
            vi.image_url as vertical_image_url,
            vi.created_at as vertical_created_at
          FROM communities c
          LEFT JOIN vertical_images vi ON vi.entity_type = 'community' AND vi.entity_id = c.id
          WHERE c.image_prompt IS NOT NULL
        `).all();
        allItems.push(...communities);

        // Tags
        const tags = db.prepare(`
          SELECT
            t.id,
            t.name,
            t.slug,
            t.image_prompt,
            'category' as entity_type,
            3 as priority,
            vi.id as vertical_image_id,
            vi.base_prompt,
            vi.custom_prompt,
            vi.image_url as vertical_image_url,
            vi.created_at as vertical_created_at
          FROM tags t
          LEFT JOIN vertical_images vi ON vi.entity_type = 'category' AND vi.entity_id = t.id
          WHERE t.image_prompt IS NOT NULL
        `).all();
        allItems.push(...tags);

        // Regions
        const regions = db.prepare(`
          SELECT
            r.id,
            r.name,
            r.slug,
            r.image_prompt,
            'region' as entity_type,
            4 as priority,
            vi.id as vertical_image_id,
            vi.base_prompt,
            vi.custom_prompt,
            vi.image_url as vertical_image_url,
            vi.created_at as vertical_created_at
          FROM regions r
          LEFT JOIN vertical_images vi ON vi.entity_type = 'region' AND vi.entity_id = r.id
          WHERE r.image_prompt IS NOT NULL
        `).all();
        allItems.push(...regions);

        total = allItems.length;
        items = allItems.slice(offset, offset + limit);
      }

      return NextResponse.json({
        items,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit) || 1,
      });
    }

  } catch (error) {
    console.error("Error listing all entities:", error);
    return NextResponse.json(
      {
        error: error.message || "Failed to list entities",
        details: error.toString()
      },
      { status: 500 }
    );
  }
}
