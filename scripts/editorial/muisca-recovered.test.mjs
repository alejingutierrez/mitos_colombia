import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

const mythsDir = path.resolve("editorial", "muisca", "myths");

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los 25 expedientes recuperados son módulos editoriales completos", async () => {
  const files = (await fs.readdir(mythsDir))
    .filter((file) => file.endsWith(".mjs"))
    .sort();
  assert.equal(files.length, 25);

  for (const file of files) {
    const { default: myth } = await import(
      `${pathToFileURL(path.join(mythsDir, file)).href}?test=1`
    );
    const sources = [...myth.keySources, ...myth.sources];
    assert.equal(words(myth.mito) >= 300 && words(myth.mito) <= 650, true, file);
    assert.equal(words(myth.historia) >= 220, true, file);
    assert.equal(words(myth.versiones) >= 170, true, file);
    assert.equal(words(myth.similitudes) >= 150, true, file);
    assert.equal(sources.length >= 5, true, file);
    assert.equal(new Set(sources.map(({ url }) => url)).size, sources.length, file);
    assert.equal(myth.seo.canonical_path, `/mitos/${myth.slug}`, file);
    assert.equal(Boolean(myth.image_url), true, file);
    assert.equal(Boolean(myth.researchNotes.trim()), true, file);
  }
});

