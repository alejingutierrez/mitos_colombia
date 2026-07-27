import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";
import { canonicalMuiscaSlugs } from "../../editorial/muisca/universe.mjs";

const mythsDir = path.resolve("editorial", "muisca", "myths");
const bachuePath = path.resolve("editorial", "myths", "bachue.mjs");

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los 41 expedientes muiscas son módulos editoriales completos", async () => {
  const files = (await fs.readdir(mythsDir))
    .filter((file) => file.endsWith(".mjs"))
    .sort();
  assert.equal(files.length, 40);
  assert.deepEqual(
    files.map((file) => file.replace(/\.mjs$/, "")).sort(),
    canonicalMuiscaSlugs.filter((slug) => slug !== "bachue").sort()
  );

  const loadedMyths = [];
  for (const file of [...files, bachuePath]) {
    const targetPath = path.isAbsolute(file) ? file : path.join(mythsDir, file);
    const { default: myth } = await import(
      `${pathToFileURL(targetPath).href}?test=1`
    );
    loadedMyths.push(myth);
    const sources = [...myth.keySources, ...myth.sources];
    assert.equal(words(myth.mito) >= 300 && words(myth.mito) <= 650, true, file);
    assert.equal(
      words(myth.historia) >= 220 && words(myth.historia) <= 600,
      true,
      file
    );
    assert.equal(
      words(myth.versiones) >= 170 && words(myth.versiones) <= 550,
      true,
      file
    );
    assert.equal(
      words(myth.similitudes) >= 150 && words(myth.similitudes) <= 450,
      true,
      file
    );
    assert.equal(sources.length >= 5, true, file);
    assert.equal(new Set(sources.map(({ url }) => url)).size, sources.length, file);
    assert.equal(
      new Set(sources.map(({ url }) => new URL(url).hostname)).size >= 3,
      true,
      file
    );
    assert.equal(myth.content, [
      ["Mito", myth.mito],
      ["Historia", myth.historia],
      ["Versiones", myth.versiones],
      ["Lección", myth.leccion],
      ["Similitudes", myth.similitudes],
    ].map(([heading, body]) => `${heading}\n${body}`).join("\n\n"), file);
    assert.equal(myth.category_path, "Andina > Varios > Muiscas", file);
    assert.equal(myth.seo.canonical_path, `/mitos/${myth.slug}`, file);
    assert.equal(myth.seo_title.length <= 60, true, file);
    assert.equal(
      myth.seo_description.length >= 120 &&
        myth.seo_description.length <= 160,
      true,
      file
    );
    assert.equal(myth.excerpt.length <= 180, true, file);
    assert.equal(myth.focus_keywords.length >= 5, true, file);
    assert.equal(Boolean(myth.image_url), true, file);
    assert.equal(new URL(myth.image_url).protocol, "https:", file);
    assert.equal(Number.isFinite(Number(myth.latitude)), true, file);
    assert.equal(Number.isFinite(Number(myth.longitude)), true, file);
    assert.equal(
      Number(myth.latitude) >= 4.4 && Number(myth.latitude) <= 5.8,
      true,
      `${file}: latitud fuera del territorio editorial muisca`
    );
    assert.equal(
      Number(myth.longitude) >= -74.4 && Number(myth.longitude) <= -72.8,
      true,
      `${file}: longitud fuera del territorio editorial muisca`
    );
    assert.equal(Boolean(myth.researchNotes.trim()), true, file);
    assert.match(myth.researchNotes, /GEOGRAF[ÍI]A:/i, file);
    assert.equal(
      /\b(según (?:la|las) fuentes?|en esta versión|los? cronistas?|documentad[oa]s?|hipótesis (?:académica|editorial))\b/i.test(myth.mito),
      false,
      `${file}: el relato contiene metalenguaje editorial`
    );
  }

  for (const field of [
    "meta_title",
    "meta_description",
    "og_title",
    "og_description",
    "canonical_path",
  ]) {
    const values = loadedMyths.map((myth) => myth.seo[field]);
    assert.equal(
      new Set(values).size,
      loadedMyths.length,
      `SEO duplicado en ${field}`
    );
  }
});
