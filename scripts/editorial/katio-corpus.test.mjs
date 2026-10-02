import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

import {
  katioCommunityPage,
  katioCommunitySeo,
} from "../../editorial/katio/community.mjs";
import { katioMedia } from "../../editorial/katio/media.mjs";
import {
  addedKatioSlugs,
  canonicalKatioSlugs,
  katioReviewedSlugs,
} from "../../editorial/katio/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

async function loadModules() {
  const directory = path.resolve("editorial", "katio", "myths");
  const files = (await fs.readdir(directory))
    .filter((name) => name.endsWith(".mjs"))
    .sort();
  const modules = [];
  for (const file of files) {
    const { default: dossier } = await import(
      pathToFileURL(path.join(directory, file)).href
    );
    modules.push({ file, dossier });
  }
  return modules;
}

test("los 21 expedientes revisados cumplen estructura, rangos y fuentes", async () => {
  const modules = await loadModules();
  assert.equal(modules.length, 21);
  assert.deepEqual(
    modules.map(({ dossier }) => dossier.slug).sort(),
    katioReviewedSlugs,
  );

  for (const { file, dossier } of modules) {
    // Un mito puede declarar `relatoCorto` cuando la fuente es tan breve que
    // llegar al mínimo exigiría inventar: la razón queda escrita en el módulo.
    const minimoMito = dossier.relatoCorto ? 70 : 300;
    assert.ok(
      words(dossier.mito) >= minimoMito && words(dossier.mito) <= 650,
      `${file}: ${words(dossier.mito)} palabras de relato`,
    );
    assert.ok(
      words(dossier.historia) >= 220 && words(dossier.historia) <= 600,
      `${file}: historia`,
    );
    assert.ok(
      words(dossier.versiones) >= 170 && words(dossier.versiones) <= 550,
      `${file}: versiones`,
    );
    assert.ok(
      words(dossier.similitudes) >= 150 &&
        words(dossier.similitudes) <= 450,
      `${file}: similitudes`,
    );
    assert.ok(
      words(dossier.leccion) >= 8 && words(dossier.leccion) <= 22,
      `${file}: lección`,
    );
    assert.equal(dossier.tags.length, 4, `${file}: etiquetas`);
    assert.equal(dossier.focus_keywords.length, 5, `${file}: palabras clave`);
    const sources = [...dossier.keySources, ...dossier.sources];
    assert.ok(sources.length >= 5, `${file}: fuentes`);
    assert.equal(
      new Set(sources.map(({ url }) => url)).size,
      sources.length,
      `${file}: fuentes distintas`,
    );
    assert.equal(
      dossier.content,
      [
        ["Mito", dossier.mito],
        ["Historia", dossier.historia],
        ["Versiones", dossier.versiones],
        ["Lección", dossier.leccion],
        ["Similitudes", dossier.similitudes],
      ]
        .map(([heading, body]) => `${heading}\n${body}`)
        .join("\n\n"),
      `${file}: contenido compuesto`,
    );
    assert.match(
      dossier.researchNotes,
      /MEDIACIÓN|FUENTE COMUNITARIA|FUENTE PRINCIPAL|FUENTE:/i,
      `${file}: procedencia`,
    );
  }
});

test("cada expediente tiene horizontal y vertical públicas y distintas", async () => {
  const modules = await loadModules();
  assert.deepEqual(Object.keys(katioMedia).sort(), katioReviewedSlugs);
  for (const { file, dossier } of modules) {
    const media = katioMedia[dossier.slug];
    assert.ok(media, `${file}: inventario visual`);
    assert.match(media.horizontal, /^https:\/\//, `${file}: horizontal`);
    assert.match(media.vertical, /^https:\/\//, `${file}: vertical`);
    assert.notEqual(media.horizontal, media.vertical, `${file}: dos URLs`);
    assert.doesNotMatch(media.horizontal, /PENDING_/);
    assert.doesNotMatch(media.vertical, /PENDING_/);
  }
});

test("todos los prompts editoriales fijan ilustración full paper cut", async () => {
  const modules = await loadModules();
  for (const { file, dossier } of modules) {
    for (const [orientation, prompt] of [
      ["horizontal", dossier.image_prompt_horizontal],
      ["vertical", dossier.image_prompt_vertical],
    ]) {
      assert.match(prompt, /full paper cut/i, `${file}: ${orientation}`);
      assert.match(prompt, /paper quilling/i, `${file}: ${orientation}`);
      assert.match(
        prompt,
        /sin fotograf[ií]a|no fotograf[ií]a/i,
        `${file}: ${orientation}`,
      );
      assert.match(
        prompt,
        /maqueta|maquette/i,
        `${file}: ${orientation} descarta maqueta`,
      );
    }
  }
});

test("Baha es la única incorporación y cuenta con su pareja visual", () => {
  assert.deepEqual(addedKatioSlugs, ["baha"]);
  assert.ok(canonicalKatioSlugs.includes("baha"));
  assert.match(katioMedia.baha.horizontal, /\/mitos\/baha-/);
  assert.match(katioMedia.baha.vertical, /\/vertical\/myth\/baha-/);
  assert.notEqual(katioMedia.baha.horizontal, katioMedia.baha.vertical);
});

test("la landing comunica el universo y sus fronteras editoriales", () => {
  assert.match(katioCommunityPage.longDescription, /diecinueve páginas/i);
  assert.match(katioCommunityPage.longDescription, /Dobaida Cueva/i);
  assert.match(katioCommunityPage.longDescription, /Surranabe/i);
  assert.match(katioCommunityPage.longDescription, /Baha/i);
  assert.match(katioCommunityPage.imagePrompt, /full paper cut/i);
  assert.equal(katioCommunitySeo.canonical_path, "/comunidades/katios");
  assert.ok(katioCommunitySeo.meta_title.length <= 60);
  assert.ok(katioCommunitySeo.meta_description.length <= 165);
});
