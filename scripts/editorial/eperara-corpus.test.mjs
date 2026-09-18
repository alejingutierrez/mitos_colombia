import assert from "node:assert/strict";
import test from "node:test";

import { eperaraCommunityPage } from "../../editorial/eperara/community.mjs";
import { eperaraMedia } from "../../editorial/eperara/media.mjs";
import records from "../../editorial/eperara/records.mjs";
import {
  addedEperaraSlugs,
  canonicalEperaraSlugs,
} from "../../editorial/eperara/universe.mjs";

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
    canonicalEperaraSlugs,
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
  for (const slug of canonicalEperaraSlugs) {
    const media = eperaraMedia[slug];
    assert.match(media.horizontal, /^https:\/\//);
    assert.match(media.vertical, /^https:\/\//);
    assert.notEqual(media.horizontal, media.vertical);
  }
  const origin = eperaraMedia[addedEperaraSlugs[0]];
  assert.match(origin.horizontal, /\/mitos\/origen-del-pueblo-eperara-/);
  assert.match(origin.vertical, /\/vertical\/myth\/origen-del-pueblo-eperara-/);
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
  assert.match(eperaraCommunityPage.imagePrompt, /full paper cut/i);
  assert.match(eperaraCommunityPage.imagePrompt, /capas planas/i);
});

test("la antigua Palabra de Mangle queda reemplazada, no reescrita", () => {
  const tree = records.find(
    ({ slug }) => slug === "tachi-akhore-y-la-palabra-de-mangle",
  );
  assert.equal(tree.title, "Pania Pak’uru: el árbol del agua");
  assert.match(tree.historia, /trama inventada/i);
  assert.doesNotMatch(tree.mito, /palabra es como el agua/i);
  assert.doesNotMatch(tree.mito, /joven ambicioso/i);
});

test("la landing declara el corpus, el reemplazo y la incorporación", () => {
  assert.match(
    eperaraCommunityPage.longDescription,
    /dos núcleos documentados/i,
  );
  assert.match(eperaraCommunityPage.longDescription, /conserva su URL/i);
  assert.match(eperaraCommunityPage.longDescription, /página nueva/i);
});
