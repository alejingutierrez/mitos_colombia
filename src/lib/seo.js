import { getSqlClient, getSqliteDb, isPostgres } from "./db";
import { withRetry } from "./db-resilience";
import {
  normalizeSeoDescription,
  normalizeSeoTitle,
  pickSeoTitle,
  shouldRethrowSeoLoadError,
} from "./seo-metadata";

const RAW_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "");
const SITE_URL = RAW_SITE_URL.trim().replace(/\/+$/, "");

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
      const result = await withRetry(
        () => db`
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
        `
      );
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
    if (shouldRethrowSeoLoadError(error)) {
      throw error;
    }
    return null;
  }
}

export function buildSeoMetadata({
  fallback = {},
  seo = {},
  canonicalPath,
  openGraphType = "website",
  imageUrl,
  preferFallbackTitle = false,
}) {
  const metaTitle = normalizeSeoTitle(
    pickSeoTitle({
      seoTitle: seo?.meta_title,
      fallbackTitle: fallback.title,
      preferFallbackTitle,
    })
  );
  const metaDescription = normalizeSeoDescription(
    seo?.meta_description || fallback.description
  );
  const keywords = normalizeKeywords(seo?.meta_keywords || fallback.keywords);
  const ogTitle = normalizeSeoTitle(seo?.og_title || metaTitle);
  const ogDescription = normalizeSeoDescription(seo?.og_description || metaDescription);
  const twitterTitle = normalizeSeoTitle(seo?.twitter_title || ogTitle);
  const twitterDescription = normalizeSeoDescription(
    seo?.twitter_description || ogDescription
  );
  const dbCanonical =
    typeof seo?.canonical_path === "string" ? seo.canonical_path.trim() : "";
  const pageCanonical =
    typeof canonicalPath === "string" ? canonicalPath.trim() : "";
  const chosenPath = dbCanonical.startsWith("/")
    ? dbCanonical
    : pageCanonical.startsWith("/")
      ? pageCanonical
      : "";
  const canonical = SITE_URL && chosenPath ? `${SITE_URL}${chosenPath}` : undefined;

  const ogImage = imageUrl || (SITE_URL ? `${SITE_URL}/opengraph-image` : undefined);

  const metadata = {
    title: metaTitle,
    description: metaDescription,
    keywords: keywords.length ? keywords : undefined,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: openGraphType,
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630, alt: ogTitle }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: twitterTitle,
      description: twitterDescription,
      ...(ogImage && { images: [ogImage] }),
    },
  };

  if (canonical) {
    metadata.alternates = { canonical };
    metadata.openGraph.url = canonical;
  }

  return metadata;
}
