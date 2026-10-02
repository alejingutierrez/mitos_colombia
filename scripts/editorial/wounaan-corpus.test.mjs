import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

import {
  wounaanCommunityPage,
  wounaanCommunitySeo,
} from "../../editorial/wounaan/community.mjs";
import { wounaanMedia } from "../../editorial/wounaan/media.mjs";
import {
  addedWounaanSlugs,
  canonicalWounaanSlugs,
} from "../../editorial/wounaan/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

async function loadModules() {
  const directory = path.resolve("editorial", "wounaan", "myths");
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

test("los 5 expedientes cumplen estructura, rangos y fuentes", async () => {
  const modules = await loadModules();
  assert.equal(modules.length, 5);
  assert.deepEqual(
    modules.map(({ dossier }) => dossier.slug).sort(),
    canonicalWounaanSlugs,
  );
  for (const { file, dossier } of modules) {
    assert.ok(words(dossier.mito) >= 300 && words(dossier.mito) <= 650);
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
      /FUENTE COMUNITARIA|FUENTE PRINCIPAL/i,
      `${file}: procedencia`,
    );
  }
});

test("cada expediente tiene horizontal y vertical públicas y distintas", () => {
  assert.deepEqual(Object.keys(wounaanMedia).sort(), canonicalWounaanSlugs);
  for (const [slug, media] of Object.entries(wounaanMedia)) {
    assert.match(media.horizontal, /^https:\/\//, `${slug}: horizontal`);
    assert.match(media.vertical, /^https:\/\//, `${slug}: vertical`);
    assert.notEqual(media.horizontal, media.vertical, `${slug}: dos URLs`);
    assert.doesNotMatch(media.horizontal, /PENDING_/);
    assert.doesNotMatch(media.vertical, /PENDING_/);
  }
});

test("todos los prompts fijan ilustración full paper cut y descartan maqueta", async () => {
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
      assert.match(
        prompt,
        /CGI|render 3D/i,
        `${file}: ${orientation} descarta 3D`,
      );
    }
  }
});

test("Madre Ñame es la única incorporación y exige pareja propia", () => {
  assert.deepEqual(addedWounaanSlugs, ["madre-name"]);
  assert.match(wounaanMedia["madre-name"].horizontal, /\/mitos\/madre-name-/);
  assert.match(
    wounaanMedia["madre-name"].vertical,
    /\/vertical\/myth\/madre-name-/,
  );
  assert.notEqual(
    wounaanMedia["madre-name"].horizontal,
    wounaanMedia["madre-name"].vertical,
  );
});

test("la landing explica los cinco expedientes y la unificación", () => {
  assert.match(wounaanCommunityPage.longDescription, /cinco páginas/i);
  assert.match(wounaanCommunityPage.longDescription, /Madre Ñame/i);
  assert.match(wounaanCommunityPage.longDescription, /dos URL heredadas/i);
  assert.match(wounaanCommunityPage.imagePrompt, /full paper cut/i);
  assert.equal(wounaanCommunitySeo.canonical_path, "/comunidades/wounaan");
  assert.ok(wounaanCommunitySeo.meta_title.length <= 60);
  assert.ok(wounaanCommunitySeo.meta_description.length <= 165);
});
