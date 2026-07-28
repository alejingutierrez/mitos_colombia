import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import { umbraCommunityPage } from "../../editorial/umbra/community.mjs";
import { umbraMedia } from "../../editorial/umbra/media.mjs";
import records from "../../editorial/umbra/records.mjs";
import {
  canonicalUmbraSlugs,
  umbraEditorialDecisions,
} from "../../editorial/umbra/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los dos expedientes Umbra cumplen la metodología editorial", () => {
  assert.equal(records.length, 2);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalUmbraSlugs),
  );
  for (const record of records) {
    assert.ok(words(record.mito) >= 300 && words(record.mito) <= 650);
    assert.ok(words(record.historia) >= 220 && words(record.historia) <= 600);
    assert.ok(words(record.versiones) >= 170 && words(record.versiones) <= 550);
    assert.ok(words(record.leccion) >= 8 && words(record.leccion) <= 22);
    assert.equal((record.leccion.match(/[.!?]+/g) || []).length, 1);
    assert.ok(
      words(record.similitudes) >= 150 && words(record.similitudes) <= 450,
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

test("Tasime significa tigre y no se convierte en nombre propio inventado", () => {
  const record = records.find(({ slug }) => slug === "tasime-el-incesto");
  assert.equal(
    umbraEditorialDecisions["tasime-el-incesto"].action,
    "correct-name-and-remove-unsupported-amplification",
  );
  assert.equal(record.title, "Tasime: el tigre y el incesto");
  assert.match(record.mito, /Tasime o tassime no aparece allí como su nombre propio/i);
  assert.match(record.mito, /se transformó en lobo/i);
  assert.match(record.historia, /solo la presenta como pintura negra/i);
  assert.doesNotMatch(
    record.mito,
    /llamado Tasime|el joven Tasime|ritual de beé|petroglifo contaba/i,
  );
});

test("Batero entra como memoria atribuida y no como hecho colonial probado", () => {
  const record = records.find(
    ({ slug }) => slug === "los-jeques-que-desaparecieron-en-batero",
  );
  assert.equal(
    umbraEditorialDecisions[
      "los-jeques-que-desaparecieron-en-batero"
    ].action,
    "add-community-attributed-contemporary-account",
  );
  assert.match(record.mito, /testimonio contemporáneo de Merardo Largo/i);
  assert.match(record.mito, /salieron en secreto hacia La Güaira/i);
  assert.match(record.mito, /No se ha localizado un documento colonial/i);
  assert.doesNotMatch(record.mito, /se comprobó|está demostrado|portal mágico/i);
});

test("cada página tiene horizontal y vertical públicas y distintas", () => {
  for (const slug of canonicalUmbraSlugs) {
    const media = umbraMedia[slug];
    assert.match(media.horizontal, /^https:\/\//);
    assert.match(media.vertical, /^https:\/\//);
    assert.notEqual(media.horizontal, media.vertical);
    assert.doesNotMatch(media.horizontal + media.vertical, /pending\.invalid/);
  }
});

test("la dirección visual es 2D full paper cut, nunca maqueta", () => {
  for (const record of records) {
    for (const prompt of [
      record.image_prompt_horizontal,
      record.image_prompt_vertical,
    ]) {
      assert.match(prompt, /2D full paper cut/i);
      assert.match(prompt, /paper quilling/i);
      assert.match(prompt, /acabado gr[aá]fico plano/i);
      assert.match(prompt, /sin fotograf[ií]a/i);
      assert.match(prompt, /objeto físico/i);
      assert.match(prompt, /maqueta/i);
      assert.match(prompt, /diorama/i);
      assert.match(prompt, /CGI|render 3D/i);
    }
  }
  assert.match(umbraCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.match(umbraCommunityPage.imagePrompt, /capas planas/i);
  assert.match(umbraCommunityPage.imagePrompt, /sin fotografía/i);
  assert.match(umbraCommunityPage.imagePrompt, /objeto físico/i);
});

test("la ruta pública usa el perfil Umbra revisado", () => {
  const route = fs.readFileSync(
    new URL("../../src/app/comunidades/[slug]/page.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ umbraCommunityPage \}/);
  assert.match(route, /"umbra": \{\s+\.\.\.umbraCommunityPage,/);
});
