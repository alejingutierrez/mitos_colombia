import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("the root layout loads the approved heading and body fonts", async () => {
  const layout = await read("src/app/layout.js");

  assert.match(layout, /import \{ Asimovian, Noto_Sans_Display \}/);
  assert.match(layout, /const display = Asimovian\(/);
  assert.match(layout, /weight: "400"/);
  assert.match(layout, /adjustFontFallback: false/);
  assert.match(layout, /const body = Noto_Sans_Display\(/);
  assert.match(layout, /axes: \["wdth"\]/);
  assert.doesNotMatch(layout, /Manrope|Inter|Cormorant_Garamond/);
});

test("header and footer render the approved typographic wordmarks", async () => {
  const [header, footer] = await Promise.all([
    read("src/components/organisms/Header.js"),
    read("src/components/organisms/Footer.js"),
  ]);

  assert.match(header, /font-display[^\n]+text-jungle-700/);
  assert.match(header, /\{SITE_NAME\}/);
  assert.doesNotMatch(header, /BRAND_MARK|label: "Inicio"/);
  assert.match(footer, /font-display[^\n]+text-white/);
  assert.match(footer, /<span aria-hidden="true">Mitos de<\/span>/);
  assert.match(footer, /<span aria-hidden="true">Colombia<\/span>/);
  assert.doesNotMatch(footer, /BRAND_MARK/);
});

test("favicon is an uppercase black M over light green", async () => {
  const favicon = await read("public/favicon.svg");

  assert.match(favicon, /aria-label="M"/);
  assert.match(favicon, /fill="#ccebd7"/);
  assert.match(favicon, /fill="#11110e"/);
});

test("photographic hero titles opt into white for contrast", async () => {
  const heroFiles = await Promise.all([
    read("src/components/templates/MythHero.js"),
    read("src/components/templates/RouteDetailTemplate.js"),
    read("src/components/templates/TaxonomyDetailTemplate.js"),
    read("src/app/rutas/page.js"),
  ]);

  for (const source of heroFiles) {
    // El className puede venir como cadena o como template literal.
    assert.match(source, /<h1\s[^>]*!text-white/);
  }
});
