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

  assert.equal(sources.length, 11);
  assert.equal(urls.size, sources.length);
  for (const source of sources) {
    assert.ok(source.title);
    assert.ok(source.summary);
    assert.match(source.url, /^https?:\/\//);
  }
});

test("la narración desarrolla una historia literaria de extensión controlada", () => {
  assert.ok(wordCount(bachue.mito) >= 300);
  assert.ok(wordCount(bachue.mito) <= 650);
  assert.doesNotMatch(bachue.mito, /Labaque/i);
  assert.doesNotMatch(
    bachue.mito,
    /fuente|cr[oó]nica|relato|versi[oó]n|Pedro Sim[oó]n|Alonso de Zamora|hip[oó]tesis|matrilineal/i
  );
  assert.match(bachue.mito, /frailejones/i);
  assert.match(bachue.mito, /dos grandes serpientes/i);
});

test("la metodología no presenta matrilinealidad como matriarcado", () => {
  assert.doesNotMatch(
    bachue.content,
    /la sociedad (?:chibcha|muisca) se rigió por el matriarcado/i
  );
  assert.match(bachue.historia, /matrilineal/i);
  assert.match(bachue.historia, /no equivale a un gobierno de mujeres/i);
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
  assert.match(bachue.seo_title, /^Mito de Bachué:/);
});

test("clasificación, etiquetas y ubicación se declaran sin crear taxonomías", () => {
  assert.equal(bachue.category_path, "Andina > Varios > Muiscas");
  assert.deepEqual(bachue.tags, [
    "Bachué",
    "agua",
    "laguna",
    "muiscas",
    "serpiente",
  ]);
  assert.doesNotMatch(bachue.tags.join("|"), /fertilidad/i);
  assert.equal(bachue.latitude, 5.68728);
  assert.equal(bachue.longitude, -73.43681);
});
