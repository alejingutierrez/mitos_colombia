import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  andoqueCommunityImageUrl,
  andoqueCommunityPage,
} from "../../editorial/andoque/community.mjs";
import { andoqueMedia } from "../../editorial/andoque/media.mjs";
import records from "../../editorial/andoque/records.mjs";
import { canonicalAndoqueSlugs } from "../../editorial/andoque/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los catorce expedientes Andoque cumplen la metodología editorial", () => {
  assert.equal(records.length, 14);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalAndoqueSlugs),
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
    const urls = [...record.keySources, ...record.sources].map(({ url }) => url);
    assert.equal(new Set(urls).size, urls.length);
  }
});

test("incorpora tres ciclos primarios y distingue los dos retornos", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  assert.equal(
    bySlug.get("la-guerra-del-palo-hablador").title,
    "La guerra del Palo Hablador",
  );
  assert.equal(
    bySlug.get("huevo-de-chupaflor-el-diluvio-y-el-fuego").title,
    "Huevo-de-chupaflor, el diluvio y el fuego",
  );
  assert.equal(
    bySlug.get("el-aguila-canibal-y-la-madre-de-los-andoques").title,
    "El Águila Caníbal y la madre de los Andoque",
  );
  assert.notEqual(
    bySlug.get("el-retorno-de-plumon-amarillo").title,
    bySlug.get("el-retorno-de-plumon-de-fiebre").title,
  );
  assert.match(bySlug.get("los-caucheros-de-la-casa-arana").researchNotes, /testimonio histórico/i);
});

test("cada ficha reutiliza una pareja horizontal y vertical distinta", () => {
  const horizontal = new Set();
  const vertical = new Set();
  for (const slug of canonicalAndoqueSlugs) {
    const media = andoqueMedia[slug];
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
  assert.match(andoqueCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.match(andoqueCommunityPage.imagePrompt, /capas planas/i);
  assert.match(andoqueCommunityPage.imagePrompt, /sin fotografía/i);
  assert.match(andoqueCommunityPage.imagePrompt, /objeto físico/i);
  assert.equal(
    andoqueCommunityImageUrl,
    andoqueMedia["la-guerra-del-palo-hablador"].horizontal,
  );
});

test("la ruta pública usa el perfil Andoque revisado", () => {
  const route = fs.readFileSync(
    new URL("../../src/lib/community-info.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ andoqueCommunityPage \}/);
  assert.match(route, /"andoque": \{\s+\.\.\.andoqueCommunityPage,/);
});
