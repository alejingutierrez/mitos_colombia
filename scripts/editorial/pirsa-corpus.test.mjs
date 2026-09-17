import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import { pirsaCommunityPage } from "../../editorial/pirsa/community.mjs";
import { pirsaMedia } from "../../editorial/pirsa/media.mjs";
import records from "../../editorial/pirsa/records.mjs";
import {
  canonicalPirsaSlugs,
  pirsaEditorialDecisions,
} from "../../editorial/pirsa/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("el expediente Pirsa cumple la metodología editorial", () => {
  assert.equal(records.length, 1);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalPirsaSlugs),
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
    assert.equal(record.keySources.length + record.sources.length, 9);
    const sourceUrls = [...record.keySources, ...record.sources].map(
      ({ url }) => url,
    );
    assert.equal(new Set(sourceUrls).size, sourceUrls.length);
  }
});

test("corrige el relato colonial sin inventar una cosmología Pirsa", () => {
  const record = records[0];
  assert.equal(
    pirsaEditorialDecisions["el-exorcismo-de-tamaracunga"].action,
    "correct-colonial-conversion-story",
  );
  assert.equal(record.title, "La noche de Tamaracunga");
  assert.match(record.mito, /hermano joven del señor de Pirsa/i);
  assert.match(record.mito, /auras/i);
  assert.match(record.historia, /Orden de Nuestra Señora de la Merced/i);
  assert.match(record.historia, /no lo identifica como cacique/i);
  assert.match(record.historia, /no aparecen en la fuente temprana/i);
  assert.match(record.versiones, /Diablo oficial representa vida, alegría/i);
  assert.doesNotMatch(record.mito, /Sebastián|cuervos|luz celestial/i);
  assert.doesNotMatch(record.content, /franciscano|fraile franciscano/i);
  assert.doesNotMatch(
    record.content,
    /(?:el|los) demonio(?:s)? Pirsa|cosmolog[ií]a Pirsa.*demon/i,
  );
});

test("el mito exige una horizontal y una vertical públicas y distintas", () => {
  const media = pirsaMedia["el-exorcismo-de-tamaracunga"];
  assert.match(media.horizontal, /^https:\/\//);
  assert.match(media.vertical, /^https:\/\//);
  assert.notEqual(media.horizontal, media.vertical);
  assert.doesNotMatch(media.horizontal + media.vertical, /pending\.invalid/);
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
  assert.match(pirsaCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.match(pirsaCommunityPage.imagePrompt, /capas planas/i);
  assert.match(pirsaCommunityPage.imagePrompt, /sin fotografía/i);
  assert.match(pirsaCommunityPage.imagePrompt, /objeto físico/i);
});

test("la ruta pública usa el perfil Pirsa revisado", () => {
  const route = fs.readFileSync(
    new URL("../../src/app/comunidades/[slug]/page.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ pirsaCommunityPage \}/);
  assert.match(route, /"pirsa": \{\s+\.\.\.pirsaCommunityPage,/);
});
