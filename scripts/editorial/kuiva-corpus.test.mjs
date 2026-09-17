import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import { kuivaCommunityPage } from "../../editorial/kuiva/community.mjs";
import { kuivaMedia } from "../../editorial/kuiva/media.mjs";
import records from "../../editorial/kuiva/records.mjs";
import { canonicalKuivaSlugs } from "../../editorial/kuiva/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los dos expedientes Kuiva cumplen la metodología editorial", () => {
  assert.equal(records.length, 2);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalKuivaSlugs),
  );
  for (const record of records) {
    assert.ok(words(record.mito) >= 300 && words(record.mito) <= 650);
    assert.ok(words(record.historia) >= 220 && words(record.historia) <= 600);
    assert.ok(words(record.versiones) >= 170 && words(record.versiones) <= 550);
    assert.ok(words(record.leccion) >= 8 && words(record.leccion) <= 22);
    assert.equal((record.leccion.match(/[.!?]+/g) || []).length, 1);
    assert.ok(
      words(record.similitudes) >= 150 && words(record.similitudes) <= 450,
    );
    assert.equal(
      record.content,
      [
        `Mito\n${record.mito}`,
        `Historia\n${record.historia}`,
        `Versiones\n${record.versiones}`,
        `Lección\n${record.leccion}`,
        `Similitudes\n${record.similitudes}`,
      ].join("\n\n"),
    );
    assert.ok(record.excerpt.length <= 180);
    assert.ok(record.seo_title.length <= 60);
    assert.ok(record.seo_description.length <= 165);
    assert.equal(record.tags.length, 4);
    assert.equal(record.focus_keywords.length, 5);
    assert.equal(record.keySources.length + record.sources.length, 7);
    const sourceUrls = [...record.keySources, ...record.sources].map(
      ({ url }) => url,
    );
    assert.equal(new Set(sourceUrls).size, sourceUrls.length);
  }
});

test("distingue la versión narrativa de los ciclos conocidos por índice", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  assert.equal(
    bySlug.get("creacion-kuibas").title,
    "La sangre del cielo y Boupé",
  );
  assert.equal(
    bySlug.get("namon-y-la-inundacion").title,
    "Namon y la inundación",
  );
  assert.match(
    bySlug.get("creacion-kuibas").mito,
    /La antología no dice quién contó esta versión/i,
  );
  assert.match(
    bySlug.get("namon-y-la-inundacion").mito,
    /por lo menos otras siete entradas/i,
  );
  assert.doesNotMatch(
    records.map(({ mito }) => mito).join("\n"),
    /Noé|arca bíblica|castigo divino|viaje del héroe/i,
  );
});

test("cada ficha reutiliza una pareja horizontal y vertical distinta", () => {
  const horizontal = new Set();
  const vertical = new Set();
  for (const slug of canonicalKuivaSlugs) {
    const media = kuivaMedia[slug];
    assert.match(media.horizontal, /^https:\/\//);
    assert.match(media.vertical, /^https:\/\//);
    assert.notEqual(media.horizontal, media.vertical);
    assert.ok(!horizontal.has(media.horizontal), `horizontal repetida: ${slug}`);
    assert.ok(!vertical.has(media.vertical), `vertical repetida: ${slug}`);
    assert.ok(media.reusedFrom);
    horizontal.add(media.horizontal);
    vertical.add(media.vertical);
  }
});

test("la dirección visual es ilustración 2D full paper cut, nunca maqueta", () => {
  for (const record of records) {
    for (const prompt of [
      record.image_prompt_horizontal,
      record.image_prompt_vertical,
    ]) {
      assert.match(prompt, /2D full paper cut/i);
      assert.match(prompt, /paper quilling/i);
      assert.match(prompt, /acabado gr[aá]fico plano/i);
      assert.match(prompt, /sin fotograf[ií]a/i);
      assert.match(prompt, /objeto físico/i);
      assert.match(prompt, /maqueta/i);
      assert.match(prompt, /diorama/i);
      assert.match(prompt, /CGI|render 3D/i);
    }
  }
  assert.match(kuivaCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.match(kuivaCommunityPage.imagePrompt, /capas planas/i);
  assert.match(kuivaCommunityPage.imagePrompt, /sin fotografía/i);
  assert.match(kuivaCommunityPage.imagePrompt, /objeto físico/i);
});

test("la ruta pública usa el perfil Kuiva revisado", () => {
  const route = fs.readFileSync(
    new URL("../../src/app/comunidades/[slug]/page.js", import.meta.url),
    "utf8",
  );
  const filters = fs.readFileSync(
    new URL("../../src/lib/communityFilters.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ kuivaCommunityPage \}/);
  assert.match(route, /"kuibas": \{\s+\.\.\.kuivaCommunityPage,/);
  assert.match(filters, /"kuibas"/);
});
