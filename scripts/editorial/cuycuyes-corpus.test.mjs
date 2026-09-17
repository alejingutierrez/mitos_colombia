import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import { cuycuyesCommunityPage } from "../../editorial/cuycuyes/community.mjs";
import { cuycuyesMedia } from "../../editorial/cuycuyes/media.mjs";
import records from "../../editorial/cuycuyes/records.mjs";
import {
  canonicalCuycuyesSlugs,
  cuycuyesEditorialDecisions,
} from "../../editorial/cuycuyes/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los dos expedientes Cuycuyes cumplen la metodología editorial", () => {
  assert.equal(records.length, 2);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalCuycuyesSlugs),
  );
  for (const record of records) {
    assert.ok(
      words(record.mito) >= 300 && words(record.mito) <= 650,
      `${record.slug}: mito ${words(record.mito)} palabras`,
    );
    assert.ok(
      words(record.historia) >= 220 && words(record.historia) <= 600,
      `${record.slug}: historia ${words(record.historia)} palabras`,
    );
    assert.ok(
      words(record.versiones) >= 170 && words(record.versiones) <= 550,
      `${record.slug}: versiones ${words(record.versiones)} palabras`,
    );
    assert.ok(words(record.leccion) >= 8 && words(record.leccion) <= 22);
    assert.equal((record.leccion.match(/[.!?]+/g) || []).length, 1);
    assert.ok(
      words(record.similitudes) >= 150 && words(record.similitudes) <= 450,
      `${record.slug}: similitudes ${words(record.similitudes)} palabras`,
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

test("corrige Calgari sin inventar la identidad del ser del oratorio", () => {
  const record = records.find(({ slug }) => slug === "el-diablo");
  assert.equal(
    cuycuyesEditorialDecisions["el-diablo"].action,
    "correct-colonial-mistranslation",
  );
  assert.equal(record.title, "El ser de los ojos resplandecientes");
  assert.match(record.mito, /no registra un nombre propio/i);
  assert.match(record.mito, /Calgari o Calgavi aparecen como equivalentes de Dios/i);
  assert.match(record.mito, /Antomiá aparece como equivalente de Diablo/i);
  assert.match(record.historia, /no llama Calgari a esa presencia/i);
  assert.match(record.versiones, /se elimina esa asociación/i);
  assert.doesNotMatch(
    record.content,
    /Calgari (?:era|es|fue) (?:el |un )?(?:demonio|diablo)/i,
  );
  assert.doesNotMatch(record.content, /adoraba(?:n)? al demonio Calgari/i);
});

test("sustituye el Pipintá sintético por las dos variantes documentadas", () => {
  const record = records.find(
    ({ slug }) => slug === "el-tesoro-del-pipinta",
  );
  assert.equal(
    cuycuyesEditorialDecisions["el-tesoro-del-pipinta"].action,
    "replace-synthetic-story",
  );
  assert.match(record.mito, /Martín Blandón/i);
  assert.match(record.mito, /dieciséis figuras de caciques/i);
  assert.match(record.mito, /arrieros/i);
  assert.match(record.mito, /espejismo/i);
  assert.match(record.historia, /narración sintética/i);
  assert.doesNotMatch(
    record.mito,
    /mujer hecha de hojas|dibuj[oó] un círculo de sal|guardián inmundo|desat[oó] plagas/i,
  );
  assert.match(record.historia, /no la llama mito prehispánico intacto/i);
});

test("cada página exige una horizontal y una vertical públicas y distintas", () => {
  for (const slug of canonicalCuycuyesSlugs) {
    const media = cuycuyesMedia[slug];
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
  assert.match(cuycuyesCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.match(cuycuyesCommunityPage.imagePrompt, /capas planas/i);
  assert.match(cuycuyesCommunityPage.imagePrompt, /sin fotografía/i);
  assert.match(cuycuyesCommunityPage.imagePrompt, /objeto físico/i);
});

test("la ruta pública usa el perfil Cuycuyes revisado", () => {
  const route = fs.readFileSync(
    new URL("../../src/lib/community-info.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ cuycuyesCommunityPage \}/);
  assert.match(route, /"cuycuyes": \{\s+\.\.\.cuycuyesCommunityPage,/);
});
