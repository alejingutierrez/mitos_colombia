import { getSqlClient, getSqliteDb, isPostgres } from "./db";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");

function normalizeKeywords(value) {
  if (!value) {
    return [];
  }
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }
  return String(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export async function getSeoEntry(pageType, slug) {
  if (!pageType || !slug) {
    return null;
  }

  try {
    if (isPostgres()) {
      const db = getSqlClient();
      const result = await db`
        SELECT
          page_type,
          slug,
          meta_title,
          meta_description,
          meta_keywords,
          og_title,
          og_description,
          twitter_title,
          twitter_description,
          canonical_path,
          summary,
          payload
        FROM seo_pages
        WHERE page_type = ${pageType} AND slug = ${slug}
        LIMIT 1
      `;
      return result.rows?.[0] || result[0] || null;
    }

    const db = getSqliteDb();
    return (
      db
        .prepare(
          `
          SELECT
            page_type,
            slug,
            meta_title,
            meta_description,
            meta_keywords,
            og_title,
            og_description,
            twitter_title,
            twitter_description,
            canonical_path,
            summary,
            payload
          FROM seo_pages
          WHERE page_type = ? AND slug = ?
          LIMIT 1
        `
        )
        .get(pageType, slug) || null
    );
  } catch (error) {
    console.error("[SEO] Failed to load SEO entry:", error);
    return null;
  }
}

export function buildSeoMetadata({
  fallback = {},
  seo = {},
  canonicalPath,
  openGraphType = "website",
}) {
  const metaTitle = seo?.meta_title || fallback.title;
  const metaDescription = seo?.meta_description || fallback.description;
  const keywords = normalizeKeywords(seo?.meta_keywords || fallback.keywords);
  const ogTitle = seo?.og_title || metaTitle;
  const ogDescription = seo?.og_description || metaDescription;
  const twitterTitle = seo?.twitter_title || ogTitle;
  const twitterDescription = seo?.twitter_description || ogDescription;
  const canonical =
    seo?.canonical_path || canonicalPath
      ? `${SITE_URL}${seo?.canonical_path || canonicalPath || ""}`
      : undefined;

  const metadata = {
    title: metaTitle,
    description: metaDescription,
    keywords: keywords.length ? keywords : undefined,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: openGraphType,
    },
    twitter: {
      card: "summary_large_image",
      title: twitterTitle,
      description: twitterDescription,
    },
  };

  if (canonical) {
    metadata.alternates = { canonical };
    metadata.openGraph.url = canonical;
  }

  return metadata;
}
