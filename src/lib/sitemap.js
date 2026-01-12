export const ONE_HOUR = 60 * 60;

export function getBaseUrl(request) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (siteUrl) {
    return siteUrl.replace(/\/$/, "");
  }
  const host =
    request?.headers?.get("x-forwarded-host") ||
    request?.headers?.get("host");
  const proto =
    request?.headers?.get("x-forwarded-proto") || "https";
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

export function buildSitemapXml(entries) {
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
      return `<url><loc>${loc}</loc>${lastmod}${changefreq}${priority}</url>`;
    })
    .join("");

  return (
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
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
