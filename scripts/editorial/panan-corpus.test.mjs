import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import { pananCommunityPage } from "../../editorial/panan/community.mjs";
import { pananMedia } from "../../editorial/panan/media.mjs";
import records from "../../editorial/panan/records.mjs";
import {
  addedPananSlugs,
  canonicalPananSlugs,
} from "../../editorial/panan/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los dieciséis expedientes cumplen la metodología editorial", () => {
  assert.equal(records.length, 16);
  assert.deepEqual(
    records.map(({ slug }) => slug),
    canonicalPananSlugs,
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
    assert.equal(record.content, [
      `Mito\n${record.mito}`,
      `Historia\n${record.historia}`,
      `Versiones\n${record.versiones}`,
      `Lección\n${record.leccion}`,
      `Similitudes\n${record.similitudes}`,
    ].join("\n\n"));
    assert.equal(record.tags.length, 4);
    assert.equal(record.focus_keywords.length, 5);
    assert.ok(record.keySources.length + record.sources.length >= 5);
    const sourceUrls = [
      ...record.keySources,
      ...record.sources,
    ].map(({ url }) => url);
    assert.equal(new Set(sourceUrls).size, sourceUrls.length);
  }
});

test("cada página tiene horizontal y vertical públicas y distintas", () => {
  for (const slug of canonicalPananSlugs) {
    const media = pananMedia[slug];
    assert.match(media.horizontal, /^https:\/\//);
    assert.match(media.vertical, /^https:\/\//);
    assert.notEqual(media.horizontal, media.vertical);
  }
  for (const slug of addedPananSlugs) {
    const media = pananMedia[slug];
    assert.match(media.horizontal, new RegExp(`/mitos/${slug}-`));
    assert.match(media.vertical, new RegExp(`/vertical/myth/${slug}-`));
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
  assert.match(pananCommunityPage.imagePrompt, /full paper cut/i);
  assert.match(pananCommunityPage.imagePrompt, /capas planas/i);
  assert.match(pananCommunityPage.imagePrompt, /sin fotograf[ií]a/i);
});

test("separa huacas de Waka y añade solamente Guamurran", () => {
  const huacas = records.find(({ slug }) => slug === "la-huacas");
  const waka = records.find(({ slug }) => slug === "la-waka");
  const guamurran = records.find(
    ({ slug }) => slug === "guamurran-madre-de-agua",
  );
  assert.match(huacas.mito, /Guillermo Tatamues/);
  assert.match(huacas.mito, /Luis Ulpiano Tatamues García/);
  assert.match(waka.mito, /lenguaje simbólico/i);
  assert.match(waka.historia, /no contiene una trama autónoma/i);
  assert.match(guamurran.historia, /único apartado.+ausente/s);
  assert.match(
    guamurran.mito,
    /no aparece en la fuente como una mujer sobrenatural/i,
  );
  assert.doesNotMatch(guamurran.mito, /la guardiana dijo|se transformó en mujer/i);
});

test("la landing identifica a Panán como comunidad del pueblo Pastos", () => {
  assert.match(pananCommunityPage.longDescription, /dieciséis núcleos/i);
  assert.match(
    pananCommunityPage.longDescription,
    /comunidad de Panán del pueblo Pastos/i,
  );
  assert.match(pananCommunityPage.longDescription, /Huacas y Waka permanecen separadas/i);
});

test("la ruta pública consume el perfil editorial de Panán", () => {
  const route = fs.readFileSync(
    new URL("../../src/app/comunidades/[slug]/page.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ pananCommunityPage \}/);
  assert.match(route, /"pananes": \{\s+\.\.\.pananCommunityPage,/);
});
