import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

import { nasaMedia } from "../../editorial/nasa/media.mjs";
import {
  canonicalNasaSlugs,
  excludedFromNasa,
  existingNasaSlugs,
  newNasaSlugs,
} from "../../editorial/nasa/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

async function loadModules() {
  const dir = path.resolve("editorial", "nasa", "myths");
  const files = (await fs.readdir(dir))
    .filter((name) => name.endsWith(".mjs"))
    .sort();
  const modules = [];
  for (const file of files) {
    const { default: dossier } = await import(
      pathToFileURL(path.join(dir, file)).href
    );
    modules.push({ file, dossier });
  }
  return modules;
}

test("el universo Nasa tiene 25 fichas revisadas y Juan Tama nuevo", () => {
  assert.equal(existingNasaSlugs.length, 25);
  assert.deepEqual(newNasaSlugs, ["juan-tama"]);
  assert.equal(canonicalNasaSlugs.length, 26);
  assert.equal(new Set(canonicalNasaSlugs).size, 26);
  assert.equal(canonicalNasaSlugs.includes("el-cacique-cumanday"), false);
  assert.ok(excludedFromNasa["el-cacique-cumanday"]);
});

test("los 26 expedientes cumplen estructura, rangos y fuentes", async () => {
  const modules = await loadModules();
  assert.equal(modules.length, 26);
  assert.deepEqual(
    modules.map(({ dossier }) => dossier.slug).sort(),
    canonicalNasaSlugs,
  );

  for (const { file, dossier } of modules) {
    assert.equal(words(dossier.mito) >= 300, true, `${file}: mito mínimo`);
    assert.equal(words(dossier.mito) <= 650, true, `${file}: mito máximo`);
    assert.equal(
      words(dossier.historia) >= 220,
      true,
      `${file}: historia mínima`,
    );
    assert.equal(
      words(dossier.historia) <= 600,
      true,
      `${file}: historia máxima`,
    );
    assert.equal(
      words(dossier.versiones) >= 170,
      true,
      `${file}: versiones mínima`,
    );
    assert.equal(
      words(dossier.versiones) <= 550,
      true,
      `${file}: versiones máxima`,
    );
    assert.equal(
      words(dossier.similitudes) >= 150,
      true,
      `${file}: similitudes mínima`,
    );
    assert.equal(
      words(dossier.similitudes) <= 450,
      true,
      `${file}: similitudes máxima`,
    );
    assert.equal(words(dossier.leccion) >= 8, true, `${file}: lección mínima`);
    assert.equal(words(dossier.leccion) <= 22, true, `${file}: lección máxima`);
    assert.equal(dossier.tags.length >= 3, true, `${file}: etiquetas`);
    assert.equal(
      dossier.focus_keywords.length >= 5,
      true,
      `${file}: palabras clave`,
    );
    const sources = [...dossier.keySources, ...dossier.sources];
    assert.equal(sources.length >= 5, true, `${file}: fuentes`);
    assert.equal(
      new Set(sources.map(({ url }) => url)).size,
      sources.length,
      `${file}: URLs de fuente únicas`,
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

test("cada mito Nasa tiene pareja visual distinta y Juan Tama dos escenas", async () => {
  const modules = await loadModules();
  for (const { file, dossier } of modules) {
    const media = nasaMedia[dossier.slug];
    assert.ok(media, `${file}: inventario`);
    assert.match(media.horizontal, /^https:\/\//, `${file}: horizontal`);
    assert.match(media.vertical, /^https:\/\//, `${file}: vertical`);
    assert.notEqual(
      media.horizontal,
      media.vertical,
      `${file}: URLs visuales distintas`,
    );
  }

  const juanTama = modules.find(
    ({ dossier }) => dossier.slug === "juan-tama",
  ).dossier;
  assert.notEqual(
    juanTama.image_prompt_horizontal,
    juanTama.image_prompt_vertical,
  );
  assert.match(juanTama.image_prompt_horizontal, /laguna/i);
  assert.match(juanTama.image_prompt_vertical, /camina|cresta|límite/i);
});
