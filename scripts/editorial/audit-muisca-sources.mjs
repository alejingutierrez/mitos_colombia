import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { pathToFileURL } from "node:url";
import { canonicalMuiscaSlugs } from "../../editorial/muisca/universe.mjs";

const CONCURRENCY = 6;
const TIMEOUT_MS = 20_000;
const restrictedStatuses = new Set([401, 403, 405, 429]);
const execFileAsync = promisify(execFile);

function modulePath(slug) {
  if (slug === "bachue") {
    return path.resolve("editorial", "myths", "bachue.mjs");
  }
  return path.resolve("editorial", "muisca", "myths", `${slug}.mjs`);
}

async function checkUrl(url) {
  let lastError;
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const response = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
        headers: {
          "User-Agent":
            "MitosColombiaEditorialAudit/1.0 (+https://mitoscolombia.com)",
          Range: "bytes=0-0",
        },
      });
      await response.body?.cancel();
      clearTimeout(timeout);
      return {
        url,
        status: response.status,
        finalUrl: response.url,
        ok: response.status >= 200 && response.status < 400,
        restricted: restrictedStatuses.has(response.status),
      };
    } catch (error) {
      clearTimeout(timeout);
      lastError = error;
    }
  }

  try {
    const { stdout } = await execFileAsync(
      "curl",
      [
        "-L",
        "--max-time",
        String(TIMEOUT_MS / 1000),
        "--connect-timeout",
        "8",
        "-A",
        "MitosColombiaEditorialAudit/1.0 (+https://mitoscolombia.com)",
        "-o",
        "/dev/null",
        "-sS",
        "-w",
        "%{http_code}\\t%{url_effective}",
        url,
      ],
      { timeout: TIMEOUT_MS + 2_000 }
    );
    const [statusRaw, finalUrl] = stdout.trim().split("\t");
    const status = Number(statusRaw);
    return {
      url,
      status,
      finalUrl,
      ok: status >= 200 && status < 400,
      restricted: restrictedStatuses.has(status),
      fallback: "curl",
    };
  } catch (error) {
    lastError = error;
  }

  return {
    url,
    status: null,
    finalUrl: null,
    ok: false,
    restricted: false,
    error: lastError?.name || lastError?.message || "unknown",
  };
}

async function mapLimit(items, limit, mapper) {
  const results = new Array(items.length);
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const index = next;
      next += 1;
      results[index] = await mapper(items[index]);
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, () => worker())
  );
  return results;
}

async function run() {
  const usages = new Map();
  for (const slug of canonicalMuiscaSlugs) {
    const { default: myth } = await import(
      pathToFileURL(modulePath(slug)).href
    );
    for (const source of [...myth.keySources, ...myth.sources]) {
      const entry = usages.get(source.url) || {
        title: source.title,
        slugs: [],
      };
      entry.slugs.push(slug);
      usages.set(source.url, entry);
    }
  }

  const urls = [...usages.keys()].sort();
  const results = await mapLimit(urls, CONCURRENCY, checkUrl);
  const hardFailures = results
    .filter((item) => !item.ok && !item.restricted)
    .map((item) => ({
      ...item,
      title: usages.get(item.url).title,
      slugs: usages.get(item.url).slugs,
    }));
  const restricted = results
    .filter((item) => item.restricted)
    .map((item) => ({
      ...item,
      title: usages.get(item.url).title,
      slugs: usages.get(item.url).slugs,
    }));

  console.log(
    JSON.stringify(
      {
        myths: canonicalMuiscaSlugs.length,
        sourceCitations: [...usages.values()].reduce(
          (sum, item) => sum + item.slugs.length,
          0
        ),
        uniqueUrls: urls.length,
        healthy: results.filter((item) => item.ok).length,
        restrictedCount: restricted.length,
        hardFailureCount: hardFailures.length,
        restricted,
        hardFailures,
      },
      null,
      2
    )
  );

  if (hardFailures.length) {
    process.exitCode = 1;
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
