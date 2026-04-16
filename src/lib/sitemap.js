export const ONE_HOUR = 60 * 60;

export function getBaseUrl(request) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (siteUrl) {
    return siteUrl.replace(/\/$/, "");
  }
  const host = (
    request?.headers?.get("x-forwarded-host") ||
    request?.headers?.get("host") ||
    ""
  ).trim();
  const proto = (
    request?.headers?.get("x-forwarded-proto") || "https"
  ).trim();
  if (host) {
    return `${proto}://${host}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export function buildUrl(baseUrl, path) {
  return `${baseUrl}${path}`;
}

export function encodeSegment(value) {
  return encodeURIComponent(String(value || "").trim());
}

export function normalizeTimestamp(value) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) {
    return new Date().toISOString();
  }
  return date.toISOString();
}

export function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildImageTags(images) {
  if (!Array.isArray(images) || images.length === 0) return "";
  return images
    .filter((img) => img?.url)
    .map((img) => {
      const title = img.title
        ? `<image:title>${escapeXml(img.title)}</image:title>`
        : "";
      const caption = img.caption
        ? `<image:caption>${escapeXml(img.caption)}</image:caption>`
        : "";
      return `<image:image><image:loc>${escapeXml(img.url)}</image:loc>${title}${caption}</image:image>`;
    })
    .join("");
}

export function buildSitemapXml(entries) {
  const hasImages = entries.some(
    (entry) => Array.isArray(entry.images) && entry.images.length > 0
  );
  const urls = entries
    .map((entry) => {
      const loc = escapeXml(entry.url);
      const lastmod = entry.lastModified
        ? `<lastmod>${normalizeTimestamp(entry.lastModified)}</lastmod>`
        : "";
      const changefreq = entry.changeFrequency
        ? `<changefreq>${entry.changeFrequency}</changefreq>`
        : "";
      const priority =
        typeof entry.priority === "number"
          ? `<priority>${entry.priority.toFixed(1)}</priority>`
          : "";
      const images = buildImageTags(entry.images);
      return `<url><loc>${loc}</loc>${lastmod}${changefreq}${priority}${images}</url>`;
    })
    .join("");

  const imageNs = hasImages
    ? ' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"'
    : "";
  return (
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"${imageNs}>${urls}</urlset>`
  );
}

export function buildSitemapIndexXml(entries) {
  const sitemaps = entries
    .map((entry) => {
      const loc = escapeXml(entry.url);
      const lastmod = entry.lastModified
        ? `<lastmod>${normalizeTimestamp(entry.lastModified)}</lastmod>`
        : "";
      return `<sitemap><loc>${loc}</loc>${lastmod}</sitemap>`;
    })
    .join("");

  return (
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemaps}</sitemapindex>`
  );
}
