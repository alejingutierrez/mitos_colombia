import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  sikuaniCommunityImageUrl,
  sikuaniCommunityPage,
} from "../../editorial/sikuani/community.mjs";
import { sikuaniMedia } from "../../editorial/sikuani/media.mjs";
import records from "../../editorial/sikuani/records.mjs";
import { canonicalSikuaniSlugs } from "../../editorial/sikuani/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los diez expedientes Sikuani cumplen la metodología editorial", () => {
  assert.equal(records.length, 10);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalSikuaniSlugs),
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

test("corrige las dos páginas inventadas y separa los dos jaguares", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  assert.equal(
    bySlug.get("el-creador-del-cosmos").title,
    "Kuwei, Kuemi y el comienzo del mundo",
  );
  assert.equal(
    bySlug.get("la-comida-para-los-muertos").title,
    "Tsamani y el camino de la luz",
  );
  assert.equal(
    bySlug.get("historia-de-un-tigre").title,
    "El jaguar y los dos hermanos",
  );
  assert.equal(
    bySlug.get("el-tigre").title,
    "El jaguar en la casa Tsorueto",
  );
  assert.doesNotMatch(
    records.map(({ mito }) => mito).join("\n"),
    /arca de No[eé]|Kano[aá].*niños muertos|alma hambrienta/i,
  );
});

test("cada ficha reutiliza una pareja horizontal y vertical distinta", () => {
  const horizontal = new Set();
  const vertical = new Set();
  for (const slug of canonicalSikuaniSlugs) {
    const media = sikuaniMedia[slug];
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
  assert.match(sikuaniCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.match(sikuaniCommunityPage.imagePrompt, /capas planas/i);
  assert.match(sikuaniCommunityPage.imagePrompt, /sin fotografía/i);
  assert.match(sikuaniCommunityPage.imagePrompt, /objeto físico/i);
  assert.equal(
    sikuaniCommunityImageUrl,
    sikuaniMedia["kaliwirnae-el-arbol-de-los-alimentos"].horizontal,
  );
});

test("la ruta pública usa el perfil Sikuani revisado", () => {
  const route = fs.readFileSync(
    new URL("../../src/lib/community-info.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ sikuaniCommunityPage \}/);
  assert.match(route, /"guahibo-sikuani": \{\s+\.\.\.sikuaniCommunityPage,/);
  assert.match(route, /"sikuani": \{\s+\.\.\.sikuaniCommunityPage,/);
});
