import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import { uwaCommunityPage } from "../../editorial/uwa/community.mjs";
import { uwaMedia } from "../../editorial/uwa/media.mjs";
import records from "../../editorial/uwa/records.mjs";
import { canonicalUwaSlugs } from "../../editorial/uwa/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los once expedientes U’wa cumplen la metodología editorial", () => {
  assert.equal(records.length, 11);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalUwaSlugs),
  );
  for (const record of records) {
    assert.ok(words(record.mito) >= 280 && words(record.mito) <= 650);
    assert.ok(words(record.historia) >= 160 && words(record.historia) <= 600);
    assert.ok(
      words(record.versiones) >= 150 && words(record.versiones) <= 550,
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
  for (const slug of canonicalUwaSlugs) {
    const media = uwaMedia[slug];
    assert.match(media.horizontal, /^https:\/\//);
    assert.match(media.vertical, /^https:\/\//);
    assert.notEqual(media.horizontal, media.vertical);
    assert.doesNotMatch(media.horizontal + media.vertical, /pending\.invalid/);
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
  assert.match(uwaCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.match(uwaCommunityPage.imagePrompt, /capas planas/i);
  assert.match(uwaCommunityPage.imagePrompt, /sin fotograf[ií]a/i);
  assert.match(uwaCommunityPage.imagePrompt, /objeto f[ií]sico/i);
});

test("corrige la cosmogonía heredada y distingue los núcleos añadidos", () => {
  const creation = records.find(({ slug }) => slug === "creacion-u-wa");
  const communityStories = [
    "mensajes-de-los-animales-uwa",
    "el-oso-y-el-hombre-uwa",
    "la-competencia-de-los-tigres-uwa",
    "monoa-el-hijo-de-la-montana",
    "el-pajaro-carpintero-y-el-poder-de-curar",
    "kubashoa-el-hijo-del-tabaco",
    "lisha-la-madre-del-agua",
    "yanoa-y-sirbetuna",
    "el-recorrido-de-uktara",
  ];
  const bees = records.find(
    ({ slug }) => slug === "las-hijas-del-sol-y-la-miel",
  );
  const kubashoa = records.find(
    ({ slug }) => slug === "kubashoa-el-hijo-del-tabaco",
  );

  assert.match(creation.mito, /Rurcocá/i);
  assert.match(creation.mito, /Sira/i);
  assert.match(creation.mito, /Canwará/i);
  assert.match(creation.mito, /Rukwa/i);
  assert.doesNotMatch(
    [creation.mito, creation.versiones, creation.similitudes].join("\n"),
    /Yin|Yang|nórdica|Norse/i,
  );
  for (const slug of communityStories) {
    const record = records.find((candidate) => candidate.slug === slug);
    assert.ok(record, `Falta el relato comunitario ${slug}.`);
    assert.ok(
      [...record.keySources, ...record.sources].some(({ title }) =>
        /Historias ancestrales U’wa|Kajkin Luin Karita/i.test(title),
      ),
      `${slug}: falta la fuente comunitaria bilingüe.`,
    );
  }
  assert.match(bees.content, /Rukwa/i);
  assert.match(bees.content, /Kanwar[aá]/i);
  assert.match(bees.content, /Rayria/i);
  assert.match(kubashoa.content, /tabaco/i);
  assert.doesNotMatch(kubashoa.mito, /Kusbasha/i);
  assert.match(kubashoa.versiones, /Kusbasha es quien enfrenta a Lisha/i);
});

test("la landing usa U’wa como nombre público y explica el alcance", () => {
  assert.equal(uwaCommunityPage.title, "U’wa");
  assert.match(uwaCommunityPage.longDescription, /once páginas/i);
  assert.match(uwaCommunityPage.longDescription, /Izketa Segovia/i);
  assert.match(uwaCommunityPage.longDescription, /Reowa y Aya/i);
});

test("la ruta pública consume el perfil editorial U’wa", () => {
  const route = fs.readFileSync(
    new URL("../../src/app/comunidades/[slug]/page.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ uwaCommunityPage \}/);
  assert.match(route, /"u-wa": \{\s+\.\.\.uwaCommunityPage,/);
});
