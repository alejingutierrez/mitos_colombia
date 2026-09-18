import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import { misakCommunityPage } from "../../editorial/misak/community.mjs";
import { misakMedia } from "../../editorial/misak/media.mjs";
import records from "../../editorial/misak/records.mjs";
import { canonicalMisakSlugs } from "../../editorial/misak/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los siete expedientes cumplen la metodología editorial", () => {
  assert.equal(records.length, 7);
  assert.deepEqual(
    records.map(({ slug }) => slug),
    canonicalMisakSlugs,
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

test("cada página conserva una horizontal y una vertical públicas y distintas", () => {
  for (const slug of canonicalMisakSlugs) {
    const media = misakMedia[slug];
    assert.match(media.horizontal, /^https:\/\//);
    assert.match(media.vertical, /^https:\/\//);
    assert.notEqual(media.horizontal, media.vertical);
  }
});

test("la dirección visual exige ilustración full paper cut 2D", () => {
  for (const record of records) {
    for (const prompt of [
      record.image_prompt_horizontal,
      record.image_prompt_vertical,
    ]) {
      assert.match(prompt, /full paper cut/i);
      assert.match(prompt, /paper quilling/i);
      assert.match(prompt, /sin fotograf[ií]a/i);
      assert.match(prompt, /objeto f[ií]sico/i);
      assert.match(prompt, /maqueta/i);
      assert.match(prompt, /diorama/i);
      assert.match(prompt, /CGI|render 3D/i);
    }
  }
  assert.match(misakCommunityPage.imagePrompt, /full paper cut/i);
  assert.match(misakCommunityPage.imagePrompt, /capas planas/i);
  assert.match(misakCommunityPage.imagePrompt, /sin fotograf[ií]a/i);
  assert.match(misakCommunityPage.imagePrompt, /objeto f[ií]sico/i);
});

test("corrige los núcleos documentales sin fundir relatos distintos", () => {
  const creation = records.find(
    ({ slug }) => slug === "creacion-misak-guambianos",
  );
  const serpent = records.find(({ slug }) => slug === "el-nino-serpiente");
  const storm = records.find(({ slug }) => slug === "el-viejo-tempestad");
  const wind = records.find(({ slug }) => slug === "el-viento-y-sus-hijos");
  const mama = records.find(({ slug }) => slug === "la-mama-grande");
  const pedro = records.find(
    ({ slug }) => slug === "pedro-el-mago-travieso",
  );

  assert.match(creation.mito, /Pishau/);
  assert.match(creation.mito, /Nupisu/);
  assert.doesNotMatch(serpent.mito, /criad[oa] por espíritus/i);
  assert.match(storm.mito, /Srekollimisak/);
  assert.match(storm.mito, /Kosrokollimisak/);
  assert.match(wind.historia, /María Jesusita Yalanda/);
  assert.match(wind.historia, /Floro Cuchillo/);
  assert.equal(mama.title, "Mama Manuela Caramaya");
  assert.match(mama.historia, /Domingo Tombé/);
  assert.doesNotMatch(mama.mito, /honda|gigante/i);
  assert.doesNotMatch(pedro.mito, /tambor|tumba/i);
  assert.match(pedro.historia, /reelaboración tardía/i);
});

test("la landing usa Misak como nombre público y explica la ruta histórica", () => {
  assert.equal(misakCommunityPage.title, "Misak");
  assert.match(misakCommunityPage.longDescription, /siete núcleos/i);
  assert.match(misakCommunityPage.longDescription, /término «Guambianos»/i);
});

test("la ruta pública consume el perfil editorial Misak", () => {
  const route = fs.readFileSync(
    new URL("../../src/lib/community-info.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ misakCommunityPage \}/);
  assert.match(
    route,
    /"misak-guambianos": \{\s+\.\.\.misakCommunityPage,/,
  );
});
