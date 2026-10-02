import { NextResponse } from "next/server";
import { isPostgres, getSqlClient } from "../../../../../lib/db.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const isPg = isPostgres();

    if (!isPg) {
      return NextResponse.json({
        error: "Not using PostgreSQL",
        database: "sqlite"
      });
    }

    const db = getSqlClient();

    // Check if table exists
    const tables = await db`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      AND table_name = 'vertical_images'
    `;

    // Check if columns exist in communities
    const communityColumns = await db`
      SELECT column_name
      FROM information_schema.columns
      WHERE table_schema = 'public'
      AND table_name = 'communities'
      AND column_name IN ('image_prompt', 'image_url')
    `;

    return NextResponse.json({
      success: true,
      database: "postgresql",
      vertical_images_exists: tables.length > 0,
      community_columns: communityColumns.map(c => c.column_name),
      raw_check: {
        tables_result: tables.rows || tables,
        columns_result: communityColumns.rows || communityColumns
      }
    });

  } catch (error) {
    console.error("Test endpoint error:", error);
    return NextResponse.json(
      {
        error: error.message,
        stack: error.stack,
        details: error.toString()
      },
      { status: 500 }
    );
  }
}
