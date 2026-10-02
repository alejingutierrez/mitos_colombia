import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

import { emberaMedia } from "../../editorial/embera/media.mjs";
import { canonicalEmberaSlugs } from "../../editorial/embera/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

async function loadModules() {
  const directory = path.resolve("editorial", "embera", "myths");
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

test("el expediente Emberá genérico conserva solo Los Burumia", async () => {
  const modules = await loadModules();
  assert.deepEqual(canonicalEmberaSlugs, ["los-burumias-y-carautas"]);
  assert.deepEqual(
    modules.map(({ dossier }) => dossier.slug),
    canonicalEmberaSlugs,
  );
});

test("Los Burumia cumple estructura, extensión y fuentes distintas", async () => {
  const [{ file, dossier }] = await loadModules();
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
  assert.equal(words(dossier.leccion) >= 8, true);
  assert.equal(words(dossier.leccion) <= 22, true);
  assert.equal(dossier.focus_keywords.length >= 5, true);
  assert.equal(dossier.tags.length >= 3, true);

  const sources = [...dossier.keySources, ...dossier.sources];
  assert.equal(sources.length >= 5, true);
  assert.equal(new Set(sources.map(({ url }) => url)).size, sources.length);

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
  );
});

test("el Relato no conserva la fusión inventada con fuego, Karaví o Carautas", async () => {
  const [{ dossier }] = await loadModules();
  assert.doesNotMatch(dossier.mito, /Karav[ií]|Carauta|incendio|oro/i);
  assert.match(dossier.mito, /Usagar[aá]/);
  assert.match(dossier.mito, /Bojay[aá]/);
  assert.match(dossier.mito, /murci[eé]lago/);
});

test("la pareja aprobada conserva escenas distintas en full paper cut", async () => {
  const [{ dossier }] = await loadModules();
  const media = emberaMedia[dossier.slug];
  assert.equal(media.horizontalStatus, "approved");
  assert.equal(media.verticalStatus, "approved");
  assert.match(dossier.image_prompt_horizontal, /full paper cut/i);
  assert.match(dossier.image_prompt_vertical, /full paper cut/i);
  assert.notEqual(
    dossier.image_prompt_horizontal,
    dossier.image_prompt_vertical,
  );
  assert.doesNotMatch(
    `${dossier.image_prompt_horizontal} ${dossier.image_prompt_vertical}`,
    /fotografiada de frente|maqueta f[ií]sica|pieza f[ií]sica/i,
  );
});
