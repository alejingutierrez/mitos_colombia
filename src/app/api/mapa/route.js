import { NextResponse } from "next/server";
import { getSqlClient, getSqliteDb, isPostgres } from "../../../lib/db";

export const runtime = "nodejs";

export async function GET() {
  try {
    if (isPostgres()) {
      const db = getSqlClient();
      const result = await db`
        SELECT
          myths.id,
          myths.title,
          myths.slug,
          myths.excerpt,
          myths.image_url,
          myths.latitude,
          myths.longitude,
          regions.name AS region,
          regions.slug AS region_slug,
          communities.name AS community,
          communities.slug AS community_slug
        FROM myths
        JOIN regions ON regions.id = myths.region_id
        LEFT JOIN communities ON communities.id = myths.community_id
        WHERE myths.latitude IS NOT NULL AND myths.longitude IS NOT NULL
        ORDER BY myths.id ASC
      `;

      const response = NextResponse.json({ myths: result.rows || result });
      response.headers.set(
        "Cache-Control",
        "public, s-maxage=3600, stale-while-revalidate=3600"
      );
      return response;
    }

    const db = getSqliteDb();
    const myths = db
      .prepare(
        `
        SELECT
          myths.id,
          myths.title,
          myths.slug,
          myths.excerpt,
          myths.image_url,
          myths.latitude,
          myths.longitude,
          regions.name AS region,
          regions.slug AS region_slug,
          communities.name AS community,
          communities.slug AS community_slug
        FROM myths
        JOIN regions ON regions.id = myths.region_id
        LEFT JOIN communities ON communities.id = myths.community_id
        WHERE myths.latitude IS NOT NULL AND myths.longitude IS NOT NULL
        ORDER BY myths.id ASC
      `
      )
      .all();

    const response = NextResponse.json({ myths });
    response.headers.set(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=3600"
    );
    return response;
  } catch (error) {
    console.error("Error loading map myths:", error);
    return NextResponse.json(
      { error: error.message || "Failed to load map data" },
      { status: 500 }
    );
  }
}
