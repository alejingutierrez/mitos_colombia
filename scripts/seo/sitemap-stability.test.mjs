import assert from "node:assert/strict";
import test from "node:test";

import {
  createRouteSitemapEntries,
  createStaticSitemapEntries,
  ROUTE_CONTENT_LASTMOD,
  STATIC_CONTENT_LASTMOD,
  STATIC_CONTENT_LASTMOD_BY_PATH,
} from "../../src/lib/sitemap-entries.js";

test("static sitemap entries use a stable content lastmod instead of the current time", () => {
  const first = createStaticSitemapEntries("https://www.mitosdecolombia.com");
  const second = createStaticSitemapEntries("https://www.mitosdecolombia.com");

  assert.deepEqual(
    first.map((entry) => entry.lastModified),
    second.map((entry) => entry.lastModified)
  );
  assert.deepEqual(
    Object.fromEntries(first.map((entry) => [new URL(entry.url).pathname, entry.lastModified])),
    STATIC_CONTENT_LASTMOD_BY_PATH
  );
  assert.equal(
    STATIC_CONTENT_LASTMOD,
    Object.values(STATIC_CONTENT_LASTMOD_BY_PATH).sort(
      (left, right) => new Date(right) - new Date(left)
    )[0]
  );
  assert.ok(new Set(first.map((entry) => entry.lastModified)).size > 1);
});

test("route sitemap entries use a stable content lastmod instead of the current time", () => {
  const entries = createRouteSitemapEntries("https://www.mitosdecolombia.com", [
    { slug: "guardianes-del-agua" },
    { slug: "cartografia-selva" },
  ]);
  const uniqueLastmods = new Set(entries.map((entry) => entry.lastModified));

  assert.equal(uniqueLastmods.size, 1);
  assert.equal(entries[0].lastModified, ROUTE_CONTENT_LASTMOD);
  assert.ok(!Number.isNaN(new Date(entries[0].lastModified).getTime()));
});
