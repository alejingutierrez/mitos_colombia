import assert from "node:assert/strict";
import test from "node:test";

import {
  auditHtml,
  extractCsvUrls,
  extractLocs,
} from "./indexability-audit.mjs";

test("extracts sitemap loc values and decodes XML entities", () => {
  const xml = `<?xml version="1.0"?><urlset><url><loc>https://example.com/mitos?offset=24&amp;limit=24</loc></url></urlset>`;

  assert.deepEqual(extractLocs(xml), [
    "https://example.com/mitos?offset=24&limit=24",
  ]);
});

test("audits indexability signals from rendered HTML", () => {
  const html = `
    <html>
      <head>
        <title>El agua</title>
        <link rel="canonical" href="https://www.mitosdecolombia.com/mitos/el-agua" />
        <script type="application/ld+json">{"@context":"https://schema.org","@type":"Article"}</script>
      </head>
      <body><h1>El agua</h1></body>
    </html>
  `;

  assert.deepEqual(
    auditHtml("https://www.mitosdecolombia.com/mitos/el-agua", html, new Headers()),
    {
      canonical: "https://www.mitosdecolombia.com/mitos/el-agua",
      canonicalSelf: true,
      hasNoindex: false,
      h1Count: 1,
      jsonLdCount: 1,
      jsonLdValid: true,
      title: "El agua",
    }
  );
});

test("treats root URL canonical with and without trailing slash as self", () => {
  const html = `
    <html>
      <head>
        <title>Home</title>
        <link rel="canonical" href="https://www.mitosdecolombia.com" />
      </head>
      <body><h1>Home</h1></body>
    </html>
  `;

  const result = auditHtml("https://www.mitosdecolombia.com/", html, new Headers());

  assert.equal(result.canonicalSelf, true);
});

test("extracts URLs from Search Console CSV exports and plain URL lists", () => {
  const input = `URL,Último rastreo\nhttps://www.mitosdecolombia.com/post/foo,8 may 2026\nhttps://www.mitosdecolombia.com/mitos/el-agua`;

  assert.deepEqual(extractCsvUrls(input), [
    "https://www.mitosdecolombia.com/post/foo",
    "https://www.mitosdecolombia.com/mitos/el-agua",
  ]);
});
