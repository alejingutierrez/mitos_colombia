import assert from "node:assert/strict";
import test from "node:test";

import {
  auditHtml,
  countMythLinks,
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
  const relatedLinks = Array.from(
    { length: 4 },
    (_, idx) => `<a href="/mitos/relacionado-${idx + 1}">Relacionado ${idx + 1}</a>`
  ).join("");

  const html = `
    <html>
      <head>
        <title>El agua</title>
        <meta name="description" content="Un relato tradicional colombiano sobre el agua y la memoria del territorio." />
        <link rel="canonical" href="https://www.mitosdecolombia.com/mitos/el-agua" />
        <script type="application/ld+json">{"@context":"https://schema.org","@type":"Article"}</script>
      </head>
      <body>
        <h1>El agua</h1>
        ${relatedLinks}
      </body>
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
      mythLinkCount: 4,
      mythLinkFloor: 3,
      hasTooFewMythLinks: false,
      title: "El agua",
      titleLength: 7,
      description:
        "Un relato tradicional colombiano sobre el agua y la memoria del territorio.",
      descriptionLength: 75,
      hasZeroMetricText: false,
    }
  );
});

test("flags taxonomy pages with too few myth links (the Suspense regression we missed)", () => {
  const html = `
    <html>
      <head>
        <title>Agua</title>
        <link rel="canonical" href="https://www.mitosdecolombia.com/categorias/agua" />
      </head>
      <body><h1>Agua</h1><p>Once mitos de agua</p></body>
    </html>
  `;

  const result = auditHtml(
    "https://www.mitosdecolombia.com/categorias/agua",
    html,
    new Headers()
  );

  assert.equal(result.mythLinkCount, 0);
  assert.equal(result.mythLinkFloor, 5);
  assert.equal(result.hasTooFewMythLinks, true);
});

test("counts unique myth links case-insensitively", () => {
  const html = `
    <a href="/mitos/foo">foo</a>
    <a href="/mitos/Foo">foo dup</a>
    <a href='/mitos/bar'>bar</a>
    <a href="/mitos/baz">baz</a>
  `;
  assert.equal(countMythLinks(html), 3);
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
  assert.equal(result.hasTooFewMythLinks, false);
  assert.equal(result.mythLinkFloor, 0);
});

test("extracts URLs from Search Console CSV exports and plain URL lists", () => {
  const input = `URL,Último rastreo\nhttps://www.mitosdecolombia.com/post/foo,8 may 2026\nhttps://www.mitosdecolombia.com/mitos/el-agua`;

  assert.deepEqual(extractCsvUrls(input), [
    "https://www.mitosdecolombia.com/post/foo",
    "https://www.mitosdecolombia.com/mitos/el-agua",
  ]);
});

test("detects zero-valued metrics rendered into visible server HTML", () => {
  const html = `
    <html><head><title>Archivo</title></head>
    <body><h1>Archivo</h1><p>0</p><p>Mitos</p></body></html>
  `;

  const result = auditHtml(
    "https://www.mitosdecolombia.com/mitos",
    html,
    new Headers()
  );

  assert.equal(result.hasZeroMetricText, true);
});
