import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  desanaCommunityImageUrl,
  desanaCommunityPage,
} from "../../editorial/desana/community.mjs";
import { desanaMedia } from "../../editorial/desana/media.mjs";
import records from "../../editorial/desana/records.mjs";
import { canonicalDesanaSlugs } from "../../editorial/desana/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los ocho expedientes Desana cumplen la metodología editorial", () => {
  assert.equal(records.length, 8);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalDesanaSlugs),
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
    // Eran 7 exactas, la cuota de la primera ronda. Tras la Fase B del cierre
    // (2026-09-22) cada ficha tiene las suyas: se comprueba el piso, no un número.
    assert.ok(record.keySources.length + record.sources.length >= 8, `${record.slug}: menos de 8 fuentes`);
    const urls = [...record.keySources, ...record.sources].map(({ url }) => url);
    assert.equal(new Set(urls).size, urls.length);
  }
});

test("corrige las tres fichas heredadas y conserva sus URLs", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  assert.equal(
    bySlug.get("creacion-desana").title,
    "Yebá Buró y la Canoa de Transformación",
  );
  assert.equal(
    bySlug.get("guelamun-ye-el-nieto-del-trueno").title,
    "Guramüye y el primer cataclismo",
  );
  assert.equal(
    bySlug.get("yurupari").title,
    "El robo de las flautas sagradas",
  );
  assert.match(
    bySlug.get("nuguye-y-sepiro-fuego-y-creciente").researchNotes,
    /UNIFICACIÓN EDITORIAL/i,
  );
  assert.match(
    bySlug.get("yurupari").researchNotes,
    /slug histórico/i,
  );
});

test("cada ficha reutiliza una pareja horizontal y vertical distinta", () => {
  const horizontal = new Set();
  const vertical = new Set();
  for (const slug of canonicalDesanaSlugs) {
    const media = desanaMedia[slug];
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
  assert.match(desanaCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.match(desanaCommunityPage.imagePrompt, /capas planas/i);
  assert.match(desanaCommunityPage.imagePrompt, /sin fotografía/i);
  assert.match(desanaCommunityPage.imagePrompt, /objeto físico/i);
  assert.equal(
    desanaCommunityImageUrl,
    desanaMedia["creacion-desana"].horizontal,
  );
});

test("la ruta pública usa el perfil Desana revisado", () => {
  const route = fs.readFileSync(
    new URL("../../src/lib/community-info.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ desanaCommunityPage \}/);
  assert.match(route, /"desana": \{\s+\.\.\.desanaCommunityPage,/);
});
