import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import { chimilaCommunityPage } from "../../editorial/chimila/community.mjs";
import { chimilaMedia } from "../../editorial/chimila/media.mjs";
import records from "../../editorial/chimila/records.mjs";
import {
  canonicalChimilaSlugs,
  chimilaEditorialDecisions,
} from "../../editorial/chimila/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los veintitrés expedientes Ette cumplen la metodología editorial", () => {
  assert.equal(records.length, 23);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalChimilaSlugs),
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

test("corrige títulos y expansiones sin fuente del corpus heredado", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  assert.equal(bySlug.get("los-canibales").title, "El crimen ocultado");
  assert.equal(
    bySlug.get("la-mala-mujer").title,
    "La llamada «mala mujer»",
  );
  assert.match(
    bySlug.get("primeras-guerras").mito,
    /No puede convertirse.+reconciliación producida por los colonizadores/is,
  );
  assert.match(
    bySlug.get("el-morrocoyo").mito,
    /Ninguna de esas figuras aparece.+Se retiran por completo/is,
  );
  for (const record of records) {
    assert.doesNotMatch(
      record.mito,
      /Campbell|viaje del héroe/i,
    );
  }
  assert.equal(
    chimilaEditorialDecisions["el-morrocoyo"].action,
    "remove-synthetic-second-story",
  );
});

test("distingue los dos relatos contemporáneos del corpus de 1945", () => {
  const yunari = records.find(
    ({ slug }) => slug === "yunari-y-las-cinco-tierras",
  );
  const mazorcas = records.find(
    ({ slug }) => slug === "yaau-numirinta-y-las-dos-mazorcas",
  );
  for (const record of [yunari, mazorcas]) {
    assert.match(record.historia, /no procede del corpus/i);
    assert.match(record.researchNotes, /cosmología Ette contemporánea/i);
  }
  assert.match(yunari.mito, /cuarta tierra[\s\S]+quinta tierra/i);
  assert.match(mazorcas.mito, /dos mazorcas/i);
});

test("cada ficha tiene una horizontal y una vertical distintas", () => {
  for (const slug of canonicalChimilaSlugs) {
    const media = chimilaMedia[slug];
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
      assert.match(prompt, /objeto físico/i);
      assert.match(prompt, /maqueta/i);
      assert.match(prompt, /diorama/i);
      assert.match(prompt, /CGI|render 3D/i);
    }
  }
  assert.match(chimilaCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.match(chimilaCommunityPage.imagePrompt, /capas planas/i);
  assert.match(chimilaCommunityPage.imagePrompt, /sin fotografía/i);
  assert.match(chimilaCommunityPage.imagePrompt, /objeto físico/i);
});

test("la ruta pública usa el perfil Ette Ennaka revisado", () => {
  const route = fs.readFileSync(
    new URL("../../src/lib/community-info.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ chimilaCommunityPage \}/);
  assert.match(route, /"chimila": \{\s+\.\.\.chimilaCommunityPage,/);
});
