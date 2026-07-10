import fs from "node:fs/promises";
import process from "node:process";

const DEFAULT_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.mitosdecolombia.com";
const DEFAULT_SITEMAP_URL = `${DEFAULT_SITE_URL.replace(/\/+$/, "")}/sitemap.xml`;
const GOOGLEBOT_UA = "Googlebot/2.1 (+http://www.google.com/bot.html)";

export function extractLocs(xml) {
  return [...String(xml || "").matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map(
    (match) => match[1].replace(/&amp;/g, "&").trim()
  );
}

export function extractCsvUrls(input) {
  const matches = String(input || "").match(/https?:\/\/[^\s,"\u0000-\u001F]+/g);
  return [...new Set((matches || []).map((url) => url.replace(/[)\].]+$/, "")))];
}

function getHeader(headers, name) {
  if (!headers) return "";
  if (typeof headers.get === "function") return headers.get(name) || "";
  return headers[name.toLowerCase()] || headers[name] || "";
}

function extractFirst(pattern, value) {
  return String(value || "").match(pattern)?.[1]?.trim() || "";
}

function normalizeComparableUrl(value) {
  try {
    const url = new URL(value);
    const pathname = url.pathname === "/" ? "" : url.pathname.replace(/\/+$/, "");
    return `${url.origin}${pathname}${url.search}`;
  } catch {
    return String(value || "").replace(/\/+$/, "");
  }
}

function urlsMatchCanonical(canonical, auditedUrl) {
  try {
    const canonicalUrl = new URL(canonical);
    const targetUrl = new URL(auditedUrl);
    const targetIsLocal = ["localhost", "127.0.0.1", "::1"].includes(
      targetUrl.hostname
    );
    if (!targetIsLocal && canonicalUrl.origin !== targetUrl.origin) return false;
    return (
      `${canonicalUrl.pathname.replace(/\/+$/, "")}${canonicalUrl.search}` ===
      `${targetUrl.pathname.replace(/\/+$/, "")}${targetUrl.search}`
    );
  } catch {
    return normalizeComparableUrl(canonical) === normalizeComparableUrl(auditedUrl);
  }
}

function parseJsonLdBlocks(html) {
  return [
    ...String(html || "").matchAll(
      /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
    ),
  ].map((match) => match[1].trim());
}

function visibleText(html) {
  return String(html || "")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const SECTION_LINK_MINIMUMS = {
  "/categorias/": 5,
  "/comunidades/": 5,
  "/regiones/": 5,
  "/rutas/": 3,
  "/mitos/": 3,
};

function pathFromUrl(url) {
  try {
    return new URL(url).pathname;
  } catch {
    return String(url || "");
  }
}

export function countMythLinks(html) {
  const matches = String(html || "").match(/href=["']\/mitos\/[a-z0-9-]+["']/gi);
  return matches ? new Set(matches.map((m) => m.toLowerCase())).size : 0;
}

function expectedMythLinkFloor(url) {
  const pathname = pathFromUrl(url).toLowerCase();
  if (pathname === "/mitos" || pathname.startsWith("/mitos/pagina/")) {
    return 12;
  }
  for (const [prefix, floor] of Object.entries(SECTION_LINK_MINIMUMS)) {
    if (pathname.startsWith(prefix) && pathname !== "/mitos") {
      // Detail myth pages need 3, taxonomy/listing pages need 5+
      if (prefix === "/mitos/") return floor;
      return floor;
    }
  }
  return 0;
}

export function auditHtml(url, html, headers) {
  const canonical = extractFirst(
    /<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i,
    html
  );
  const title = extractFirst(/<title[^>]*>([^<]*)<\/title>/i, html);
  const description = extractFirst(
    /<meta\b[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i,
    html
  );
  const metaRobots = extractFirst(
    /<meta\b[^>]*name=["']robots["'][^>]*content=["']([^"']+)["'][^>]*>/i,
    html
  );
  const xRobots = getHeader(headers, "x-robots-tag");
  const jsonLdBlocks = parseJsonLdBlocks(html);
  const jsonLdValid = jsonLdBlocks.every((block) => {
    try {
      JSON.parse(block);
      return true;
    } catch {
      return false;
    }
  });

  const mythLinkCount = countMythLinks(html);
  const linkFloor = expectedMythLinkFloor(url);
  const hasTooFewMythLinks = linkFloor > 0 && mythLinkCount < linkFloor;
  const hasZeroMetricText = /\b0\s+(?:mitos|arcanos|mayores|menores|palos)\b/i.test(
    visibleText(html)
  );

  return {
    canonical,
    canonicalSelf:
      Boolean(canonical) &&
      urlsMatchCanonical(canonical, url),
    hasNoindex: /noindex/i.test(`${metaRobots} ${xRobots}`),
    h1Count: (String(html || "").match(/<h1\b/gi) || []).length,
    jsonLdCount: jsonLdBlocks.length,
    jsonLdValid,
    mythLinkCount,
    mythLinkFloor: linkFloor,
    hasTooFewMythLinks,
    title,
    titleLength: title.length,
    description,
    descriptionLength: description.length,
    hasZeroMetricText,
  };
}

function parseArgs(argv) {
  const options = {
    sitemap: DEFAULT_SITEMAP_URL,
    input: "",
    concurrency: 8,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--sitemap") options.sitemap = argv[++index];
    else if (arg.startsWith("--sitemap=")) options.sitemap = arg.slice(10);
    else if (arg === "--input") options.input = argv[++index];
    else if (arg.startsWith("--input=")) options.input = arg.slice(8);
    else if (arg === "--concurrency") options.concurrency = Number(argv[++index]) || 8;
    else if (arg.startsWith("--concurrency=")) {
      options.concurrency = Number(arg.slice(14)) || 8;
    }
  }

  return options;
}

async function fetchText(url) {
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { "user-agent": GOOGLEBOT_UA, accept: "text/html,application/xml" },
      });
      return {
        response,
        text: await response.text(),
      };
    } catch (error) {
      lastError = error;
      if (attempt < 3) {
        await new Promise((resolve) => setTimeout(resolve, attempt * 200));
      }
    }
  }
  throw lastError;
}

function useAuditOrigin(url, auditOrigin) {
  const parsed = new URL(url);
  return new URL(`${parsed.pathname}${parsed.search}`, auditOrigin).toString();
}

async function collectSitemapUrls(
  sitemapUrl,
  auditOrigin = new URL(sitemapUrl).origin
) {
  const { response, text } = await fetchText(sitemapUrl);
  if (!response.ok) {
    throw new Error(`Could not fetch sitemap ${sitemapUrl}: HTTP ${response.status}`);
  }

  const locs = extractLocs(text);
  if (/<sitemapindex\b/i.test(text)) {
    const nested = await Promise.all(
      locs.map((loc) => collectSitemapUrls(useAuditOrigin(loc, auditOrigin), auditOrigin))
    );
    return nested.flat();
  }

  return locs.map((loc) => useAuditOrigin(loc, auditOrigin));
}

async function mapLimit(items, limit, mapper) {
  const output = [];
  let cursor = 0;

  async function worker() {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      output[index] = await mapper(items[index], index);
    }
  }

  await Promise.all(
    Array.from({ length: Math.max(1, Math.min(limit, items.length)) }, worker)
  );
  return output;
}

async function auditUrl(url, sitemapUrls) {
  try {
    const { response, text } = await fetchText(url);
    const htmlAudit = /text\/html/i.test(response.headers.get("content-type") || "")
      ? auditHtml(url, text, response.headers)
      : null;

    const issues = [];
    if (response.status !== 200) issues.push(`HTTP ${response.status}`);
    if (!htmlAudit) issues.push("not_html");
    if (htmlAudit?.hasNoindex) issues.push("noindex");
    if (htmlAudit && !htmlAudit.canonical) issues.push("missing_canonical");
    if (htmlAudit && !htmlAudit.canonicalSelf) issues.push("non_self_canonical");
    if (htmlAudit && !htmlAudit.title) issues.push("missing_title");
    if (htmlAudit?.titleLength > 60) {
      issues.push(`title_too_long:${htmlAudit.titleLength}`);
    }
    if (htmlAudit && !htmlAudit.description) issues.push("missing_description");
    if (htmlAudit && htmlAudit.h1Count !== 1) {
      issues.push(`h1_count:${htmlAudit.h1Count}`);
    }
    if (htmlAudit && htmlAudit.jsonLdCount === 0) issues.push("missing_jsonld");
    if (htmlAudit && !htmlAudit.jsonLdValid) issues.push("invalid_jsonld");
    if (htmlAudit?.hasZeroMetricText) issues.push("ssr_zero_metric");
    if (htmlAudit?.hasTooFewMythLinks) {
      issues.push(
        `too_few_myth_links:${htmlAudit.mythLinkCount}/${htmlAudit.mythLinkFloor}`
      );
    }
    if (!sitemapUrls.has(url)) issues.push("not_in_sitemap");

    return {
      url,
      status: response.status,
      inSitemap: sitemapUrls.has(url),
      issues,
      ...htmlAudit,
    };
  } catch (error) {
    return {
      url,
      status: 0,
      inSitemap: sitemapUrls.has(url),
      issues: [`fetch_failed:${error.message}`],
    };
  }
}

async function auditArchiveVariant(url, canonicalUrl) {
  try {
    const { response, text } = await fetchText(url);
    const htmlAudit = auditHtml(url, text, response.headers);
    const issues = [];
    if (response.status !== 200) issues.push(`HTTP ${response.status}`);
    if (!htmlAudit.hasNoindex) issues.push("missing_noindex");
    if (!urlsMatchCanonical(htmlAudit.canonical, canonicalUrl)) {
      issues.push("wrong_canonical");
    }
    return { url, status: response.status, issues, ...htmlAudit };
  } catch (error) {
    return { url, status: 0, issues: [`fetch_failed:${error.message}`] };
  }
}

async function readInputUrls(path) {
  if (!path) return [];
  const raw = await fs.readFile(path, "utf8");
  return extractCsvUrls(raw);
}

function printSummary(results, label) {
  const failures = results.filter((item) => item.issues.length > 0);
  console.log(`${label}: ${results.length} URL(s), ${failures.length} with issue(s)`);

  const issueCounts = failures.reduce((acc, item) => {
    item.issues.forEach((issue) => {
      acc[issue] = (acc[issue] || 0) + 1;
    });
    return acc;
  }, {});

  if (Object.keys(issueCounts).length) {
    console.log(JSON.stringify(issueCounts, null, 2));
  }

  failures.slice(0, 30).forEach((item) => {
    console.log(
      [
        item.status,
        item.issues.join(","),
        item.url,
        item.canonical ? `canonical=${item.canonical}` : "",
      ]
        .filter(Boolean)
        .join(" | ")
    );
  });
}

export async function runCli(argv = process.argv.slice(2)) {
  const options = parseArgs(argv);
  const sitemapUrls = new Set(await collectSitemapUrls(options.sitemap));
  const inputUrls = await readInputUrls(options.input);

  const sitemapResults = await mapLimit(
    [...sitemapUrls],
    options.concurrency,
    (url) => auditUrl(url, sitemapUrls)
  );
  printSummary(sitemapResults, "Sitemap audit");

  const origin = new URL(options.sitemap).origin;
  const archiveCanonical = `${origin}/mitos`;
  const archiveVariants = [
    `${archiveCanonical}?q=agua`,
    `${archiveCanonical}?region=andina`,
    `${archiveCanonical}?community=muisca`,
    `${archiveCanonical}?tag=agua`,
    `${archiveCanonical}?limit=100`,
  ];
  const archiveResults = await mapLimit(
    archiveVariants,
    Math.min(options.concurrency, archiveVariants.length),
    (url) => auditArchiveVariant(url, archiveCanonical)
  );
  printSummary(archiveResults, "Archive variant audit");

  let inputResults = [];
  if (inputUrls.length) {
    inputResults = await mapLimit(inputUrls, options.concurrency, (url) =>
      auditUrl(url, sitemapUrls)
    );
    printSummary(inputResults, "Input audit");
  }

  const failed = [...sitemapResults, ...archiveResults, ...inputResults].some(
    (item) => item.issues.length > 0
  );
  return failed ? 1 : 0;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  runCli()
    .then((code) => {
      process.exitCode = code;
    })
    .catch((error) => {
      console.error(error);
      process.exitCode = 1;
    });
}
