import { getSqlClient, getSqliteDb, isPostgres } from "../../lib/db";
import {
  buildSitemapXml,
  buildUrl,
  encodeSegment,
  getBaseUrl,
  ONE_HOUR,
} from "../../lib/sitemap";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MYTHS_PER_SITEMAP = 500;

function clampNumber(value, min, max, fallback) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) return fallback;
  return Math.min(Math.max(parsed, min), max);
}

async function getMythsPage(limit, offset) {
  if (isPostgres()) {
    const sql = getSqlClient();
    const result = await sql.query(
      `
        SELECT slug, updated_at
        FROM myths
        WHERE slug IS NOT NULL AND slug != ''
        ORDER BY id ASC
        LIMIT $1 OFFSET $2
      `,
      [limit, offset]
    );
    return result.rows || [];
  }

  const db = getSqliteDb();
  return db
    .prepare(
      `
      SELECT slug, updated_at
      FROM myths
      WHERE slug IS NOT NULL AND slug != ''
      ORDER BY id ASC
      LIMIT ? OFFSET ?
    `
    )
    .all(limit, offset);
}

export async function GET(request) {
  const baseUrl = getBaseUrl(request);
  const now = new Date();
  const url = new URL(request.url);
  const page = clampNumber(url.searchParams.get("page"), 1, 9999, 1);
  const limit = MYTHS_PER_SITEMAP;
  const offset = (page - 1) * limit;

  let myths = [];
  try {
    myths = await getMythsPage(limit, offset);
  } catch (error) {
    console.error("[SITEMAP] Myth page load failed:", error);
  }

  const entries = myths.map((myth) => ({
    url: buildUrl(baseUrl, `/mitos/${encodeSegment(myth.slug)}`),
    lastModified: myth.updated_at || now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const xml = buildSitemapXml(entries);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": `public, s-maxage=${ONE_HOUR}, stale-while-revalidate=${ONE_HOUR}`,
    },
  });
}
