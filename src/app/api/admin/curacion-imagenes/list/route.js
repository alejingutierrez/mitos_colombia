import { NextResponse } from "next/server";
import { isPostgres, getSqlClient, getSqliteDb } from "../../../../../lib/db.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const BLOB_PATH_PATTERN = "%/mitos/%";

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

function normalizeItems(items = []) {
  return items.map((item) => ({
    ...item,
    image_prompt: item.image_prompt || "",
  }));
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
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "20", 10);
    const entityType = searchParams.get("entityType") || "";
    const offset = (page - 1) * limit;

    if (isPostgres()) {
      const db = getSqlClient();
      const typeFilter = entityType.toLowerCase();

      let total = 0;
      let items = [];
      const breakdown = {
        myth: 0,
        community: 0,
        category: 0,
        region: 0,
      };

      if (typeFilter) {
        if (typeFilter === "myth") {
          const countResult = await db`
            SELECT COUNT(*) as total
            FROM myths
            WHERE image_url IS NOT NULL AND image_url LIKE ${BLOB_PATH_PATTERN}
          `;
          breakdown.myth = Number((countResult.rows || countResult)?.[0]?.total || 0);
          total = breakdown.myth;
          items = await db`
            SELECT
              id,
              title as name,
              slug,
              image_prompt,
              image_url,
              'myth' as entity_type
            FROM myths
            WHERE image_url IS NOT NULL AND image_url LIKE ${BLOB_PATH_PATTERN}
            ORDER BY id
            LIMIT ${limit} OFFSET ${offset}
          `;
        } else if (typeFilter === "community") {
          const countResult = await db`
            SELECT COUNT(*) as total
            FROM communities
            WHERE image_url IS NOT NULL AND image_url LIKE ${BLOB_PATH_PATTERN}
          `;
          breakdown.community = Number((countResult.rows || countResult)?.[0]?.total || 0);
          total = breakdown.community;
          items = await db`
            SELECT
              id,
              name,
              slug,
              image_prompt,
              image_url,
              'community' as entity_type
            FROM communities
            WHERE image_url IS NOT NULL AND image_url LIKE ${BLOB_PATH_PATTERN}
            ORDER BY id
            LIMIT ${limit} OFFSET ${offset}
          `;
        } else if (typeFilter === "category") {
          const countResult = await db`
            SELECT COUNT(*) as total
            FROM tags
            WHERE image_url IS NOT NULL AND image_url LIKE ${BLOB_PATH_PATTERN}
          `;
          breakdown.category = Number((countResult.rows || countResult)?.[0]?.total || 0);
          total = breakdown.category;
          items = await db`
            SELECT
              id,
              name,
              slug,
              image_prompt,
              image_url,
              'category' as entity_type
            FROM tags
            WHERE image_url IS NOT NULL AND image_url LIKE ${BLOB_PATH_PATTERN}
            ORDER BY id
            LIMIT ${limit} OFFSET ${offset}
          `;
        } else if (typeFilter === "region") {
          const countResult = await db`
            SELECT COUNT(*) as total
            FROM regions
            WHERE image_url IS NOT NULL AND image_url LIKE ${BLOB_PATH_PATTERN}
          `;
          breakdown.region = Number((countResult.rows || countResult)?.[0]?.total || 0);
          total = breakdown.region;
          items = await db`
            SELECT
              id,
              name,
              slug,
              image_prompt,
              image_url,
              'region' as entity_type
            FROM regions
            WHERE image_url IS NOT NULL AND image_url LIKE ${BLOB_PATH_PATTERN}
            ORDER BY id
            LIMIT ${limit} OFFSET ${offset}
          `;
        }
      } else {
        const mythCountResult = await db`
          SELECT COUNT(*) as total
          FROM myths
          WHERE image_url IS NOT NULL AND image_url LIKE ${BLOB_PATH_PATTERN}
        `;
        const communityCountResult = await db`
          SELECT COUNT(*) as total
          FROM communities
          WHERE image_url IS NOT NULL AND image_url LIKE ${BLOB_PATH_PATTERN}
        `;
        const categoryCountResult = await db`
          SELECT COUNT(*) as total
          FROM tags
          WHERE image_url IS NOT NULL AND image_url LIKE ${BLOB_PATH_PATTERN}
        `;
        const regionCountResult = await db`
          SELECT COUNT(*) as total
          FROM regions
          WHERE image_url IS NOT NULL AND image_url LIKE ${BLOB_PATH_PATTERN}
        `;
        breakdown.myth = Number((mythCountResult.rows || mythCountResult)?.[0]?.total || 0);
        breakdown.community = Number((communityCountResult.rows || communityCountResult)?.[0]?.total || 0);
        breakdown.category = Number((categoryCountResult.rows || categoryCountResult)?.[0]?.total || 0);
        breakdown.region = Number((regionCountResult.rows || regionCountResult)?.[0]?.total || 0);
        total =
          breakdown.myth +
          breakdown.community +
          breakdown.category +
          breakdown.region;

        items = await db`
          (
            SELECT
              id,
              title as name,
              slug,
              image_prompt,
              image_url,
              'myth' as entity_type,
              1 as priority
            FROM myths
            WHERE image_url IS NOT NULL AND image_url LIKE ${BLOB_PATH_PATTERN}
          )
          UNION ALL
          (
            SELECT
              id,
              name,
              slug,
              image_prompt,
              image_url,
              'community' as entity_type,
              2 as priority
            FROM communities
            WHERE image_url IS NOT NULL AND image_url LIKE ${BLOB_PATH_PATTERN}
          )
          UNION ALL
          (
            SELECT
              id,
              name,
              slug,
              image_prompt,
              image_url,
              'category' as entity_type,
              3 as priority
            FROM tags
            WHERE image_url IS NOT NULL AND image_url LIKE ${BLOB_PATH_PATTERN}
          )
          UNION ALL
          (
            SELECT
              id,
              name,
              slug,
              image_prompt,
              image_url,
              'region' as entity_type,
              4 as priority
            FROM regions
            WHERE image_url IS NOT NULL AND image_url LIKE ${BLOB_PATH_PATTERN}
          )
          ORDER BY priority, id
          LIMIT ${limit} OFFSET ${offset}
        `;
      }

      const rows = normalizeItems(items.rows || items);
      const totalPages = Math.max(1, Math.ceil(total / limit));

      return NextResponse.json({
        items: rows,
        total,
        totalPages,
        breakdown,
      });
    }

    const db = getSqliteDb();
    const typeFilter = entityType.toLowerCase();

    const listByType = (type) => {
      if (type === "myth") {
        return db
          .prepare(
            `
            SELECT
              id,
              title as name,
              slug,
              image_prompt,
              image_url,
              'myth' as entity_type,
              1 as priority
            FROM myths
            WHERE image_url IS NOT NULL AND image_url LIKE ?
            ORDER BY id
          `
          )
          .all(BLOB_PATH_PATTERN);
      }
      if (type === "community") {
        return db
          .prepare(
            `
            SELECT
              id,
              name,
              slug,
              image_prompt,
              image_url,
              'community' as entity_type,
              2 as priority
            FROM communities
            WHERE image_url IS NOT NULL AND image_url LIKE ?
            ORDER BY id
          `
          )
          .all(BLOB_PATH_PATTERN);
      }
      if (type === "category") {
        return db
          .prepare(
            `
            SELECT
              id,
              name,
              slug,
              image_prompt,
              image_url,
              'category' as entity_type,
              3 as priority
            FROM tags
            WHERE image_url IS NOT NULL AND image_url LIKE ?
            ORDER BY id
          `
          )
          .all(BLOB_PATH_PATTERN);
      }
      if (type === "region") {
        return db
          .prepare(
            `
            SELECT
              id,
              name,
              slug,
              image_prompt,
              image_url,
              'region' as entity_type,
              4 as priority
            FROM regions
            WHERE image_url IS NOT NULL AND image_url LIKE ?
            ORDER BY id
          `
          )
          .all(BLOB_PATH_PATTERN);
      }
      return [];
    };

    let items = [];
    const breakdown = {
      myth: 0,
      community: 0,
      category: 0,
      region: 0,
    };

    if (typeFilter) {
      items = listByType(typeFilter);
      breakdown[typeFilter] = items.length;
    } else {
      const myths = listByType("myth");
      const communities = listByType("community");
      const categories = listByType("category");
      const regions = listByType("region");
      breakdown.myth = myths.length;
      breakdown.community = communities.length;
      breakdown.category = categories.length;
      breakdown.region = regions.length;
      items = [...myths, ...communities, ...categories, ...regions];
      items.sort((a, b) => {
        if (a.priority !== b.priority) {
          return a.priority - b.priority;
        }
        return a.id - b.id;
      });
    }

    const total = items.length;
    const totalPages = Math.max(1, Math.ceil(total / limit));
    const paged = items.slice(offset, offset + limit).map(({ priority, ...item }) => item);

    return NextResponse.json({
      items: normalizeItems(paged),
      total,
      totalPages,
      breakdown,
    });
  } catch (error) {
    console.error("[CURACION] Error listing images:", error);
    return NextResponse.json(
      { error: error.message || "Error al cargar imágenes" },
      { status: 500 }
    );
  }
}
