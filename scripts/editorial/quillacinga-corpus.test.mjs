import assert from "node:assert/strict";
import test from "node:test";

import { quillacingaCommunityPage } from "../../editorial/quillacingas/community.mjs";
import { quillacingaMedia } from "../../editorial/quillacingas/media.mjs";
import records from "../../editorial/quillacingas/records.mjs";
import {
  addedQuillacingaSlugs,
  canonicalQuillacingaSlugs,
} from "../../editorial/quillacingas/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los seis expedientes cumplen la metodología editorial", () => {
  assert.equal(records.length, 6);
  assert.deepEqual(
    records.map(({ slug }) => slug),
    canonicalQuillacingaSlugs,
  );
  for (const record of records) {
    assert.ok(words(record.mito) >= 300 && words(record.mito) <= 650);
    assert.ok(words(record.historia) >= 220 && words(record.historia) <= 600);
    assert.ok(
      words(record.versiones) >= 170 && words(record.versiones) <= 550,
    );
    assert.ok(words(record.leccion) >= 8 && words(record.leccion) <= 22);
    assert.equal((record.leccion.match(/[.!?]+/g) || []).length, 1);
    assert.ok(
      words(record.similitudes) >= 150 && words(record.similitudes) <= 450,
    );
    assert.equal(record.content, [
      `Mito\n${record.mito}`,
      `Historia\n${record.historia}`,
      `Versiones\n${record.versiones}`,
      `Lección\n${record.leccion}`,
      `Similitudes\n${record.similitudes}`,
    ].join("\n\n"));
    assert.equal(record.tags.length, 4);
    assert.equal(record.focus_keywords.length, 5);
    assert.ok(record.keySources.length + record.sources.length >= 5);
    const sourceUrls = [
      ...record.keySources,
      ...record.sources,
    ].map(({ url }) => url);
    assert.equal(new Set(sourceUrls).size, sourceUrls.length);
  }
});

test("cada página tiene horizontal y vertical públicas y distintas", () => {
  for (const slug of canonicalQuillacingaSlugs) {
    const media = quillacingaMedia[slug];
    assert.match(media.horizontal, /^https:\/\//);
    assert.match(media.vertical, /^https:\/\//);
    assert.notEqual(media.horizontal, media.vertical);
  }
  for (const slug of addedQuillacingaSlugs) {
    const media = quillacingaMedia[slug];
    assert.match(media.horizontal, new RegExp(`/mitos/${slug}-`));
    assert.match(media.vertical, new RegExp(`/vertical/myth/${slug}-`));
  }
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
  assert.match(quillacingaCommunityPage.imagePrompt, /full paper cut/i);
  assert.match(quillacingaCommunityPage.imagePrompt, /capas planas/i);
  assert.match(quillacingaCommunityPage.imagePrompt, /sin fotograf[ií]a/i);
});

test("las dos URLs heredadas retiran sus adscripciones falsas", () => {
  const cocha = records.find(({ slug }) => slug === "cualanquizan");
  assert.equal(cocha.title, "Creación de La Cocha: el pilche y la laguna");
  // Antes se comprobaba que la Historia explicara de sí misma qué clase de
  // tradición es. Eso era aparato editorial dentro de la página. Ahora se
  // exige el registro: quién narró, dónde y cuándo se publicó.
  assert.match(cocha.historia, /Refugio del Sol/);
  assert.match(cocha.historia, /El Encano/);
  assert.match(cocha.historia, /taita/i);
  assert.match(cocha.historia, /\b20\d\d\b/);
  assert.doesNotMatch(cocha.mito, /Bartolomé/i);

  const inti = records.find(({ slug }) => slug === "el-llamado-de-inti");
  // «El llamado de Inti» es una obra contemporánea con autores conocidos, y la
  // Historia lo dice nombrándolos en vez de calificarla.
  assert.match(inti.historia, /Juanete Comunicaciones/);
  assert.match(inti.historia, /\b2017\b/);
  assert.match(inti.historia, /Guaguas Quilla/);
  assert.match(inti.mito, /Quinde/);
  assert.match(inti.mito, /pincullo/);
  assert.doesNotMatch(inti.mito, /Churo vivo|vena luminosa|iluminar sin humillar/i);
});

test("la landing declara el corpus, la unificación y los reemplazos", () => {
  assert.match(
    quillacingaCommunityPage.longDescription,
    /seis núcleos documentados/i,
  );
  assert.match(quillacingaCommunityPage.longDescription, /se presentan juntas/i);
  assert.match(quillacingaCommunityPage.longDescription, /conserva su dirección/i);
});
