import assert from "node:assert/strict";
import test from "node:test";
import bachue from "../../editorial/myths/bachue.mjs";

function wordCount(value) {
  return String(value).trim().split(/\s+/).filter(Boolean).length;
}

test("el piloto conserva cinco campos sincronizados", () => {
  const expected = [
    ["Mito", bachue.mito],
    ["Historia", bachue.historia],
    ["Versiones", bachue.versiones],
    ["Lección", bachue.leccion],
    ["Similitudes", bachue.similitudes],
  ]
    .map(([heading, body]) => `${heading}\n${body}`)
    .join("\n\n");

  assert.equal(bachue.content, expected);
});

test("el piloto publica más de cinco fuentes únicas", () => {
  const sources = [...bachue.keySources, ...bachue.sources];
  const urls = new Set(sources.map((source) => source.url));

  assert.equal(sources.length, 10);
  assert.equal(urls.size, sources.length);
  for (const source of sources) {
    assert.ok(source.title);
    assert.ok(source.summary);
    assert.match(source.url, /^https?:\/\//);
  }
});

test("la narración reduce la extensión y elimina el nombre no sustentado", () => {
  assert.ok(wordCount(bachue.mito) >= 300);
  assert.ok(wordCount(bachue.mito) <= 400);
  assert.ok(wordCount(bachue.mito) < 673);
  assert.doesNotMatch(bachue.mito, /Labaque/i);
});

test("la metodología no presenta matrilinealidad como matriarcado", () => {
  assert.doesNotMatch(
    bachue.content,
    /la sociedad (?:chibcha|muisca) se rigió por el matriarcado/i
  );
  assert.match(bachue.historia, /no prueba un “matriarcado”/i);
});

test("los metadatos cumplen los límites editoriales", () => {
  assert.ok(bachue.excerpt.length <= 180);
  assert.ok(bachue.seo_title.length <= 60);
  assert.ok(bachue.seo_description.length <= 165);
  assert.ok(bachue.focus_keywords.length >= 5);
  assert.equal(bachue.seo.meta_title, bachue.seo_title);
  assert.equal(bachue.seo.meta_description, bachue.seo_description);
  assert.equal(bachue.seo.canonical_path, "/mitos/bachue");
  assert.equal(bachue.methodologySeo.canonical_path, "/metodologia");
});
