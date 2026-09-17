import assert from "node:assert/strict";
import test from "node:test";

import { awaCommunityPage } from "../../editorial/awa/community.mjs";
import { awaMedia } from "../../editorial/awa/media.mjs";
import records from "../../editorial/awa/records.mjs";
import { canonicalAwaSlugs } from "../../editorial/awa/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los dos expedientes cumplen la metodología editorial", () => {
  assert.equal(records.length, 2);
  assert.deepEqual(
    records.map(({ slug }) => slug),
    canonicalAwaSlugs,
  );
  for (const record of records) {
    assert.ok(words(record.mito) >= 300 && words(record.mito) <= 650);
    assert.ok(words(record.historia) >= 220 && words(record.historia) <= 600);
    assert.ok(
      words(record.versiones) >= 170 && words(record.versiones) <= 550,
    );
    assert.ok(words(record.leccion) >= 8 && words(record.leccion) <= 22);
    assert.ok(
      words(record.similitudes) >= 150 && words(record.similitudes) <= 450,
    );
    assert.equal(record.tags.length, 4);
    assert.equal(record.focus_keywords.length, 5);
    assert.equal(record.keySources.length + record.sources.length, 6);
    assert.equal(
      new Set([...record.keySources, ...record.sources].map(({ url }) => url))
        .size,
      6,
    );
  }
});

test("cada página tiene horizontal y vertical públicas y distintas", () => {
  for (const slug of canonicalAwaSlugs) {
    const media = awaMedia[slug];
    assert.match(media.horizontal, /^https:\/\//);
    assert.match(media.vertical, /^https:\/\//);
    assert.notEqual(media.horizontal, media.vertical);
  }
  const world = awaMedia.guagaja;
  assert.match(world.horizontal, /\/mitos\/guagaja-\d+\.png$/);
  assert.match(world.vertical, /\/vertical\/myth\/guagaja-\d+\.png$/);
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
      assert.match(prompt, /maqueta/i);
      assert.match(prompt, /diorama/i);
      assert.match(prompt, /CGI|render 3D/i);
    }
  }
  assert.match(awaCommunityPage.imagePrompt, /full paper cut/i);
  assert.match(awaCommunityPage.imagePrompt, /capas planas/i);
});

test("las dos tramas editoriales inventadas quedan sustituidas", () => {
  const origin = records.find(
    ({ slug }) => slug === "barbachas-del-arbol-grande",
  );
  const world = records.find(({ slug }) => slug === "guagaja");
  assert.equal(origin.title, "La Barbacha: origen del Inkal Awá");
  assert.match(origin.historia, /pieza editorial contemporánea/i);
  assert.doesNotMatch(origin.mito, /humedad primordial|guardianes/i);
  assert.equal(
    world.title,
    "El mundo de abajo: los hermanos y el armadillo",
  );
  assert.match(world.historia, /no había encontrado una fuente primaria/i);
  assert.doesNotMatch(world.mito, /Nampí|serpiente|Guagaja/i);
});

test("la landing declara el corpus, los reemplazos y la estrategia visual", () => {
  assert.match(
    awaCommunityPage.longDescription,
    /dos núcleos narrativos/i,
  );
  assert.match(awaCommunityPage.longDescription, /Se conservan sus URLs/i);
  assert.match(awaCommunityPage.longDescription, /se reutilizan/i);
  assert.match(awaCommunityPage.longDescription, /pareja horizontal y vertical nueva/i);
});
