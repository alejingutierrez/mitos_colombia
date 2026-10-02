import { getSqlClient, getSqliteDb, isPostgres } from "../../../lib/db";
import {
  buildSitemapXml,
  buildUrl,
  encodeSegment,
  getBaseUrl,
  ONE_HOUR,
} from "../../../lib/sitemap";
import { resolveRouteParams } from "../../../lib/next-route-props";
import { LEGACY_CONTENT_LASTMOD } from "../../../lib/sitemap-entries";

export const runtime = "nodejs";
export const revalidate = 3600;
export const dynamicParams = true;

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
        SELECT m.slug, m.title, m.excerpt, m.image_url,
               GREATEST(m.updated_at, em.updated_at) AS updated_at
        FROM myths m
        LEFT JOIN editorial_myths em ON em.source_myth_id = m.id
        WHERE m.slug IS NOT NULL AND m.slug != ''
        ORDER BY m.id ASC
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
      SELECT m.slug, m.title, m.excerpt, m.image_url,
             CASE
               WHEN em.updated_at IS NOT NULL
                 AND (m.updated_at IS NULL OR em.updated_at > m.updated_at)
                 THEN em.updated_at
               ELSE m.updated_at
             END AS updated_at
      FROM myths m
      LEFT JOIN editorial_myths em ON em.source_myth_id = m.id
      WHERE m.slug IS NOT NULL AND m.slug != ''
      ORDER BY m.id ASC
      LIMIT ? OFFSET ?
    `
    )
    .all(limit, offset);
}

export async function GET(request, { params }) {
  const baseUrl = getBaseUrl(request);
  const { page: pageParam } = await resolveRouteParams(params);
  const page = clampNumber(pageParam, 1, 9999, 1);
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
    lastModified: myth.updated_at || LEGACY_CONTENT_LASTMOD,
    changeFrequency: "monthly",
    priority: 0.5,
    ...(myth.image_url && {
      images: [
        {
          url: myth.image_url,
          title: myth.title || undefined,
          caption: myth.excerpt ? String(myth.excerpt).slice(0, 250) : undefined,
        },
      ],
    }),
  }));

  const xml = buildSitemapXml(entries);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": `public, s-maxage=${ONE_HOUR}, stale-while-revalidate=${ONE_HOUR}`,
    },
  });
}
