import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  makaguanCommunityPage,
} from "../../editorial/makaguan/community.mjs";
import { makaguanMedia } from "../../editorial/makaguan/media.mjs";
import records from "../../editorial/makaguan/records.mjs";
import {
  canonicalMakaguanSlugs,
} from "../../editorial/makaguan/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los tres expedientes Makaguán cumplen la metodología editorial", () => {
  assert.equal(records.length, 3);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalMakaguanSlugs),
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

test("restituye títulos, género y correcciones comunitarias", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  assert.equal(
    bySlug.get("creacion-makawanes").title,
    "Los hijos del venado",
  );
  assert.equal(
    bySlug.get("la-gran-inundacion").title,
    "La gran inundación y Wiri",
  );
  assert.equal(
    bySlug.get("el-alma").title,
    "Wuachirajua, la leyenda de El Alma",
  );
  assert.match(
    bySlug.get("la-gran-inundacion").mito,
    /no era una paloma, sino un samuro/is,
  );
  assert.match(bySlug.get("el-alma").mito, /clasifica El Alma como leyenda/i);
  assert.doesNotMatch(
    bySlug.get("el-alma").mito,
    /yōkai|mitología nórdica|viaje del héroe/i,
  );
  assert.match(
    bySlug.get("creacion-makawanes").mito,
    /no la convierte en una jerarquía verdadera/is,
  );
});

test("cada ficha reutiliza una pareja horizontal y vertical distinta", () => {
  const horizontal = new Set();
  const vertical = new Set();
  for (const slug of canonicalMakaguanSlugs) {
    const media = makaguanMedia[slug];
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
  assert.match(makaguanCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.match(makaguanCommunityPage.imagePrompt, /capas planas/i);
  assert.match(makaguanCommunityPage.imagePrompt, /sin fotografía/i);
  assert.match(makaguanCommunityPage.imagePrompt, /objeto físico/i);
});

test("la ruta pública usa el perfil Makaguán revisado", () => {
  const route = fs.readFileSync(
    new URL("../../src/app/comunidades/[slug]/page.js", import.meta.url),
    "utf8",
  );
  const filters = fs.readFileSync(
    new URL("../../src/lib/communityFilters.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ makaguanCommunityPage \}/);
  assert.match(route, /"makawanes": \{\s+\.\.\.makaguanCommunityPage,/);
  assert.match(filters, /"makawanes"/);
});
