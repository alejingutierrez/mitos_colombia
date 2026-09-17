import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  boyacaMixtoResidualEvidenceMatrix,
  assertBoyacaMixtoResidualEvidenceMatrix,
} from "../../editorial/boyaca-mixto-residual/evidence.mjs";
import { boyacaMixtoResidualMedia } from "../../editorial/boyaca-mixto-residual/media.mjs";
import records from "../../editorial/boyaca-mixto-residual/records.mjs";
import { reviewedBoyacaMixtoResidualSlugs } from "../../editorial/boyaca-mixto-residual/universe.mjs";

const provenancePath = new URL(
  "../../editorial/boyaca-mixto-residual/provenance.json",
  import.meta.url,
);

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function digest(value) {
  return createHash("sha256").update(value).digest("hex");
}

test("los cuatro expedientes cumplen la metodología editorial", () => {
  assert.equal(records.length, 4);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(reviewedBoyacaMixtoResidualSlugs),
  );
  for (const record of records) {
    assert.ok(words(record.mito) >= 300 && words(record.mito) <= 650);
    assert.ok(words(record.historia) >= 220 && words(record.historia) <= 600);
    assert.ok(words(record.versiones) >= 170 && words(record.versiones) <= 550);
    assert.ok(words(record.leccion) >= 8 && words(record.leccion) <= 22);
    assert.equal((record.leccion.match(/[.!?]+/g) || []).length, 1);
    assert.ok(words(record.similitudes) >= 80 && words(record.similitudes) <= 450);
    assert.ok(record.excerpt.length <= 180);
    assert.ok(record.seo_title.length <= 60);
    assert.ok(
      record.seo_description.length >= 120 &&
        record.seo_description.length <= 165,
    );
    assert.equal(record.tags.length, 4);
    assert.equal(record.focus_keywords.length, 5);
    const sources = [...record.keySources, ...record.sources];
    assert.equal(sources.length, 8);
    assert.equal(new Set(sources.map(({ url }) => url)).size, 8);
    assert.ok(
      sources.every(
        ({ url, summary, limitation }) =>
          url.startsWith("https://") && summary && limitation,
      ),
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
    assert.match(
      record.researchNotes,
      /editorial\/boyaca-mixto-residual\/evidence\.mjs/,
    );
    assert.match(
      record.researchNotes,
      /editorial\/boyaca-mixto-residual\/provenance\.json/,
    );
  }
});

test("restaura atribuciones y separa variantes y capas culturales", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));

  const mensajeros = bySlug.get("los-mensajeros-de-los-dioses");
  assert.match(mensajeros.historia, /nueve filas, 478–486/i);
  assert.match(mensajeros.historia, /Lilia Montaña de Silva Celis/);
  assert.doesNotMatch(mensajeros.similitudes, /Ícaro|Amaterasu/i);

  const cucacuy = bySlug.get("el-cucacuy");
  assert.match(cucacuy.mito, /variantes regionales incompatibles/i);
  assert.match(cucacuy.historia, /Antonio Bustamante[\s\S]+se elimina/i);
  assert.doesNotMatch(cucacuy.mito, /Antonio Bustamante/);

  const sombra = bySlug.get("la-sombra-creadora");
  assert.match(sombra.mito, /pueblo muzo/i);
  assert.doesNotMatch(sombra.mito, /Tales|Cicerón|Anaximandro/i);
  assert.match(sombra.versiones, /figuras de madera/i);

  const furatena = bySlug.get("furatena");
  assert.match(furatena.historia, /cacica Furatena/i);
  assert.match(furatena.versiones, /BOYAPAZ[\s\S]+Ocampo/i);
  assert.match(furatena.versiones, /no se unifican/i);
});

test("la matriz cubre las cuatro rutas y sus límites", () => {
  assert.equal(assertBoyacaMixtoResidualEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(boyacaMixtoResidualEvidenceMatrix)),
    new Set(reviewedBoyacaMixtoResidualSlugs),
  );
  for (const claims of Object.values(boyacaMixtoResidualEvidenceMatrix)) {
    assert.ok(
      claims.some(({ evidenceClass }) =>
        ["límite documental", "límite historiográfico", "descarte editorial"].includes(
          evidenceClass,
        ),
      ),
    );
  }
});

test("los prompts son full ilustración paper cut y dos escenas", () => {
  for (const record of records) {
    assert.notEqual(record.image_prompt_horizontal, record.image_prompt_vertical);
    for (const prompt of [
      record.image_prompt_horizontal,
      record.image_prompt_vertical,
    ]) {
      assert.match(prompt, /2D full paper cut/i);
      assert.match(prompt, /paper quilling/i);
      assert.match(prompt, /acabado gr[aá]fico plano/i);
      assert.match(prompt, /formas mate|sin volumen físico/i);
      assert.match(prompt, /sin fotograf[ií]a/i);
      assert.match(prompt, /fibras reales/i);
      assert.match(prompt, /objeto físico/i);
      assert.match(prompt, /maqueta/i);
      assert.match(prompt, /diorama/i);
      assert.match(prompt, /CGI|render 3D/i);
    }
  }
});

test(
  "cada ficha tendrá dos imágenes OpenAI propias y aprobadas",
  { skip: !fs.existsSync(provenancePath) },
  () => {
    const provenance = JSON.parse(fs.readFileSync(provenancePath, "utf8"));
    assert.equal(provenance.provider, "openai");
    assert.equal(provenance.model, "gpt-image-2");
    assert.equal(provenance.quality, "high");
    assert.equal(provenance.visualQa.status, "approved");
    assert.equal(provenance.visualQa.finalImages, 8);
    assert.equal(Object.keys(provenance.items).length, 8);
    const urls = new Set();
    for (const record of records) {
      const media = boyacaMixtoResidualMedia[record.slug];
      assert.equal(media.provenanceStatus, "approved");
      for (const orientation of ["horizontal", "vertical"]) {
        assert.match(media[orientation], /^https:\/\//);
        assert.ok(!urls.has(media[orientation]));
        urls.add(media[orientation]);
        const item = provenance.items[`${record.slug}:${orientation}`];
        const prompt =
          orientation === "horizontal"
            ? record.image_prompt_horizontal
            : record.image_prompt_vertical;
        assert.equal(item.provider, "openai");
        assert.equal(item.model, "gpt-image-2");
        assert.equal(item.quality, "high");
        assert.equal(item.visualQa, "approved");
        assert.equal(item.editorialPrompt, prompt);
        assert.equal(item.editorialPromptSha256, digest(prompt));
      }
    }
    assert.equal(urls.size, 8);
  },
);
