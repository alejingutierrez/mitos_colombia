import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import { bariCommunityPage } from "../../editorial/bari/community.mjs";
import { bariMedia } from "../../editorial/bari/media.mjs";
import records from "../../editorial/bari/records.mjs";
import { canonicalBariSlugs } from "../../editorial/bari/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los seis expedientes Barí cumplen la metodología editorial", () => {
  assert.equal(records.length, 6);
  assert.deepEqual(
    records.map(({ slug }) => slug),
    canonicalBariSlugs,
  );
  for (const record of records) {
    assert.ok(words(record.mito) >= 300 && words(record.mito) <= 650);
    assert.ok(words(record.historia) >= 220 && words(record.historia) <= 600);
    assert.ok(
      words(record.versiones) >= 170 && words(record.versiones) <= 550,
    );
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
    assert.ok(record.keySources.length + record.sources.length >= 5);
    const sourceUrls = [...record.keySources, ...record.sources].map(
      ({ url }) => url,
    );
    assert.equal(new Set(sourceUrls).size, sourceUrls.length);
  }
});

test("cada página exige una horizontal y una vertical públicas y distintas", () => {
  for (const slug of canonicalBariSlugs) {
    const media = bariMedia[slug];
    assert.match(media.horizontal, /^https:\/\//);
    assert.match(media.vertical, /^https:\/\//);
    assert.notEqual(media.horizontal, media.vertical);
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
      assert.match(prompt, /objeto f[ií]sico/i);
      assert.match(prompt, /maqueta/i);
      assert.match(prompt, /diorama/i);
      assert.match(prompt, /CGI|render 3D/i);
    }
  }
  assert.match(bariCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.match(bariCommunityPage.imagePrompt, /capas planas/i);
  assert.match(bariCommunityPage.imagePrompt, /sin fotograf[ií]a/i);
  assert.match(bariCommunityPage.imagePrompt, /objeto f[ií]sico/i);
});

test("corrige el mito heredado y sitúa los cinco núcleos añadidos", () => {
  const bejuco = records.find(
    ({ slug }) => slug === "el-dia-en-que-la-luna-y-la-tierra-se-separaron",
  );
  const sabaseba = records.find(
    ({ slug }) => slug === "sabaseba-y-los-hijos-de-la-pina",
  );
  const tree = records.find(
    ({ slug }) => slug === "el-gran-arbol-que-hizo-los-rios",
  );
  const sibabio = records.find(
    ({ slug }) => slug === "sibabio-y-las-cenizas-del-mundo",
  );
  const lights = records.find(
    ({ slug }) => slug === "nandou-chibaig-y-las-luces-del-cielo",
  );
  const afterlife = records.find(
    ({ slug }) => slug === "caminar-liviano-hacia-el-mas-alla",
  );

  assert.match(bejuco.mito, /unirse íntimamente/i);
  assert.match(bejuco.mito, /gallinazo|zamuro/i);
  assert.doesNotMatch(bejuco.mito, /palacio de plata|señora de la Sabiduría/i);
  assert.match(sabaseba.mito, /piñas/);
  assert.match(tree.mito, /Dabogyi|Iquibocyi/);
  assert.match(sibabio.historia, /vocabulario racial|problema racial/i);
  assert.match(lights.mito, /Ñandóu/);
  assert.match(lights.mito, /Chibáig/);
  assert.match(afterlife.historia, /venezolano/i);
});

test("la landing usa Barí como nombre público y explica el slug legado", () => {
  assert.equal(bariCommunityPage.title, "Barí");
  assert.match(bariCommunityPage.longDescription, /seis páginas/i);
  assert.match(bariCommunityPage.longDescription, /«Motilón»/i);
  assert.match(bariCommunityPage.longDescription, /ruta y taxonomía histórica/i);
});

test("la ruta pública consume el perfil editorial Barí", () => {
  const route = fs.readFileSync(
    new URL("../../src/lib/community-info.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ bariCommunityPage \}/);
  assert.match(route, /"motilon-bari": \{\s+\.\.\.bariCommunityPage,/);
});
