import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import { quimbayaCommunityPage } from "../../editorial/quimbaya/community.mjs";
import { quimbayaMedia } from "../../editorial/quimbaya/media.mjs";
import records from "../../editorial/quimbaya/records.mjs";
import {
  canonicalQuimbayaSlugs,
  quimbayaEditorialDecisions,
} from "../../editorial/quimbaya/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los tres expedientes Quimbaya cumplen la metodología editorial", () => {
  assert.equal(records.length, 3);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalQuimbayaSlugs),
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

test("Batatabatí vuelve al juego documentado y elimina la princesa sintética", () => {
  const record = records.find(({ slug }) => slug === "batatabati");
  assert.equal(
    quimbayaEditorialDecisions.batatabati.action,
    "replace-synthetic-princess",
  );
  assert.equal(record.title, "Batatabatí: «ea, juguemos»");
  assert.match(record.mito, /No había una princesa/i);
  assert.match(record.mito, /dos tambores/i);
  assert.match(record.mito, /hechos de quienes habían vivido antes/i);
  assert.doesNotMatch(
    record.mito,
    /ojos azules|le arrancaron los ojos|lágrimas formaron el río Quindío/i,
  );
});

test("Ipiaré se identifica como leyenda literaria de 1932", () => {
  const record = records.find(({ slug }) => slug === "ipiare-ebachi");
  assert.equal(
    quimbayaEditorialDecisions["ipiare-ebachi"].action,
    "identify-modern-literary-legend",
  );
  assert.match(record.mito, /leyenda literaria publicada en 1932/i);
  assert.match(record.historia, /Gonzalo Uribe Mejía/i);
  assert.match(record.historia, /hija, no nieta/i);
  assert.match(record.versiones, /no se encontró una versión oral independiente/i);
  assert.doesNotMatch(record.mito, /lengua del Sol/i);
});

test("Nabsacadas entra sin demonización ni deificación general", () => {
  const record = records.find(
    ({ slug }) => slug === "nabsacadas-la-estrella-caida",
  );
  assert.equal(
    quimbayaEditorialDecisions["nabsacadas-la-estrella-caida"].action,
    "add-documented-colonial-narrative",
  );
  assert.match(record.mito, /páramo de Tataquí/i);
  assert.match(record.mito, /mediante azotes/i);
  assert.match(record.historia, /ni demonio colonial ni dios panquimbaya/i);
  assert.doesNotMatch(record.content, /Nabsacadas (?:era|es|fue) el dios/i);
});

test("cada página exige una horizontal y una vertical públicas y distintas", () => {
  for (const slug of canonicalQuimbayaSlugs) {
    const media = quimbayaMedia[slug];
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
      assert.match(prompt, /objeto físico/i);
      assert.match(prompt, /maqueta/i);
      assert.match(prompt, /diorama/i);
      assert.match(prompt, /CGI|render 3D/i);
    }
  }
  assert.match(quimbayaCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.match(quimbayaCommunityPage.imagePrompt, /capas planas/i);
  assert.match(quimbayaCommunityPage.imagePrompt, /sin fotografía/i);
  assert.match(quimbayaCommunityPage.imagePrompt, /objeto físico/i);
});

test("la ruta pública usa el perfil Quimbaya revisado", () => {
  const route = fs.readFileSync(
    new URL("../../src/lib/community-info.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ quimbayaCommunityPage \}/);
  assert.match(route, /"quimbaya": \{\s+\.\.\.quimbayaCommunityPage,/);
});
