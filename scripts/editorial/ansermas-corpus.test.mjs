import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import { ansermasCommunityPage } from "../../editorial/ansermas/community.mjs";
import { ansermasMedia } from "../../editorial/ansermas/media.mjs";
import records from "../../editorial/ansermas/records.mjs";
import {
  ansermasEditorialDecisions,
  canonicalAnsermasSlugs,
} from "../../editorial/ansermas/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los dos expedientes Ansermas cumplen la metodología editorial", () => {
  assert.equal(records.length, 2);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalAnsermasSlugs),
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
    assert.equal(record.keySources.length + record.sources.length, 7);
    const sourceUrls = [...record.keySources, ...record.sources].map(
      ({ url }) => url,
    );
    assert.equal(new Set(sourceUrls).size, sourceUrls.length);
  }
});

test("la revisión unifica un duplicado y recupera el relato de los Tamaracas", () => {
  assert.equal(
    ansermasEditorialDecisions["los-pasos-de-xixaraca"].action,
    "unify",
  );
  assert.equal(
    ansermasEditorialDecisions["las-huellas-de-mapura"].action,
    "reassign-duplicate-url",
  );
  const footsteps = records.find(
    ({ slug }) => slug === "los-pasos-de-xixaraca",
  );
  const tamaracas = records.find(
    ({ slug }) => slug === "las-huellas-de-mapura",
  );
  assert.match(footsteps.title, /huellas de Xixaraca/i);
  assert.match(footsteps.mito, /Lágrimas de Michua/i);
  assert.match(footsteps.historia, /dos páginas/i);
  assert.match(tamaracas.title, /Tamaracas/i);
  assert.match(tamaracas.mito, /Opiramá/i);
  assert.match(tamaracas.mito, /langostas/i);
  assert.match(tamaracas.versiones, /Tamaraca para los españoles/i);
  assert.match(tamaracas.versiones, /categoría móvil/i);
  assert.match(
    tamaracas.mito,
    /no los identifica con ningún pueblo indígena vivo/i,
  );
  assert.doesNotMatch(
    tamaracas.mito,
    /Noanamá|Tatamá|Chocó.*(?:mal|demon|enemig)/i,
  );
});

test("cada página exige una horizontal y una vertical públicas y distintas", () => {
  for (const slug of canonicalAnsermasSlugs) {
    const media = ansermasMedia[slug];
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
  assert.match(ansermasCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.match(ansermasCommunityPage.imagePrompt, /capas planas/i);
  assert.match(ansermasCommunityPage.imagePrompt, /sin fotograf[ií]a/i);
  assert.match(ansermasCommunityPage.imagePrompt, /objeto f[ií]sico/i);
});

test("la ruta pública usa Ansermas y conserva un solo perfil U’wa", () => {
  const route = fs.readFileSync(
    new URL("../../src/lib/community-info.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ ansermasCommunityPage \}/);
  assert.match(route, /"ansermas": \{\s+\.\.\.ansermasCommunityPage,/);
  assert.equal((route.match(/"u-wa":\s*\{/g) || []).length, 1);
  assert.equal((route.match(/\.\.\.uwaCommunityPage/g) || []).length, 1);
  assert.doesNotMatch(route, /sangre de la tierra/i);
});
