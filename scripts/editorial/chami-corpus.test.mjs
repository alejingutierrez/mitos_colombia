import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

import {
  chamiCommunityPage,
  chamiCommunitySeo,
} from "../../editorial/chami/community.mjs";
import { chamiMedia } from "../../editorial/chami/media.mjs";
import {
  canonicalChamiSlugs,
  rioFrioPrimarySlugs,
} from "../../editorial/chami/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

async function loadModules() {
  const directory = path.resolve("editorial", "chami", "myths");
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

test("los 22 expedientes cumplen estructura, rangos y fuentes", async () => {
  const modules = await loadModules();
  assert.equal(modules.length, 22);
  assert.deepEqual(
    modules.map(({ dossier }) => dossier.slug).sort(),
    canonicalChamiSlugs,
  );

  for (const { file, dossier } of modules) {
    assert.ok(dossier, `${file}: exporta expediente`);
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
    assert.ok(words(dossier.leccion) >= 8 && words(dossier.leccion) <= 22);
    assert.ok(dossier.tags.length >= 3);
    assert.ok(dossier.focus_keywords.length >= 5);
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
  }
});

test("cada página conserva dos imágenes y los reemplazos son full paper cut", async () => {
  const modules = await loadModules();
  for (const { file, dossier } of modules) {
    const media = chamiMedia[dossier.slug];
    assert.ok(media, `${file}: inventario visual`);
    assert.match(media.horizontal, /^https:\/\//, `${file}: horizontal`);
    assert.match(media.vertical, /^https:\/\//, `${file}: vertical`);
    assert.notEqual(media.horizontal, media.vertical, `${file}: dos URLs`);
  }
  for (const slug of [
    "horchibari",
    "el-origen-del-agua",
    "los-guardianes-vengadores-de-la-naturaleza",
  ]) {
    const dossier = modules.find((item) => item.dossier.slug === slug).dossier;
    assert.match(dossier.image_prompt_horizontal, /full paper cut/i);
    assert.match(dossier.image_prompt_vertical, /full paper cut/i);
    assert.match(dossier.image_prompt_horizontal, /sin fotograf[ií]a/i);
    assert.match(dossier.image_prompt_vertical, /sin fotograf[ií]a/i);
    assert.notEqual(
      dossier.image_prompt_horizontal,
      dossier.image_prompt_vertical,
    );
  }
});

test("las páginas sintéticas declaran su condición editorial", async () => {
  const modules = await loadModules();
  const bySlug = Object.fromEntries(
    modules.map(({ dossier }) => [dossier.slug, dossier]),
  );
  assert.match(bySlug.jinopotabar.researchNotes, /expediente comparativo/i);
  assert.match(
    bySlug["el-origen-de-los-animales"].researchNotes,
    /ciclo editorial/i,
  );
  assert.match(
    bySlug["las-transformaciones"].researchNotes,
    /índice temático/i,
  );
  assert.equal(rioFrioPrimarySlugs.length, 14);
});

test("la landing presenta procedencias y fronteras culturales", () => {
  assert.match(chamiCommunityPage.longDescription, /veintidós páginas/i);
  assert.match(chamiCommunityPage.longDescription, /Río Frío/i);
  assert.match(chamiCommunityPage.longDescription, /Katío y Dóbida/i);
  assert.equal(chamiCommunitySeo.canonical_path, "/comunidades/chami");
  assert.ok(chamiCommunitySeo.meta_title.length <= 60);
  assert.ok(chamiCommunitySeo.meta_description.length <= 165);
});
