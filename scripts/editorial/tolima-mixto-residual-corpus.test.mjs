import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  assertTolimaMixtoResidualEvidenceMatrix,
  tolimaMixtoResidualEvidenceMatrix,
} from "../../editorial/tolima-mixto-residual/evidence.mjs";
import { tolimaMixtoResidualMedia } from "../../editorial/tolima-mixto-residual/media.mjs";
import records from "../../editorial/tolima-mixto-residual/records.mjs";
import { reviewedTolimaMixtoResidualSlugs } from "../../editorial/tolima-mixto-residual/universe.mjs";

const provenancePath = new URL(
  "../../editorial/tolima-mixto-residual/provenance.json",
  import.meta.url,
);

function words(value) {
  return String(value || "").trim().split(/\s+/).filter(Boolean).length;
}

function digest(value) {
  return createHash("sha256").update(value).digest("hex");
}

test("los once expedientes Tolima Mixto cumplen la metodología editorial", () => {
  assert.equal(records.length, 11);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(reviewedTolimaMixtoResidualSlugs),
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
      /editorial\/tolima-mixto-residual\/evidence\.mjs/,
    );
    assert.match(
      record.researchNotes,
      /editorial\/tolima-mixto-residual\/provenance\.json/,
    );
  }
});

test("corrige fusiones, falsos archivos y atribuciones culturales", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));

  assert.match(bySlug.get("la-madre-agua").mito, /pies[^]+vueltos hacia atrás/i);
  assert.match(bySlug.get("la-candileja").mito, /tres hachones/i);
  assert.doesNotMatch(bySlug.get("la-muelona").mito, /La Maga/i);
  assert.match(bySlug.get("la-muelona").versiones, /La Maga/i);
  assert.match(bySlug.get("el-cazador").mito, /grito[^]+ladrido/i);
  assert.match(bySlug.get("el-tunjo").historia, /separar objeto arqueológico y espanto campesino/i);
  assert.match(bySlug.get("el-guango").mito, /Meta el hombro, compañero/i);
  assert.match(bySlug.get("el-silbador").versiones, /Silbón[^]+parricidio/i);
  assert.match(bySlug.get("brujas-y-duendes").mito, /dos clases de relato/i);
  assert.match(bySlug.get("la-tarasca").historia, /montaje gráfico/i);
  assert.match(bySlug.get("el-chenche").historia, /documento encontrado/i);
  assert.match(bySlug.get("dioses-lares").historia, /analogía clásica externa/i);
});

test("la matriz cubre las once rutas y sus límites", () => {
  assert.equal(assertTolimaMixtoResidualEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(tolimaMixtoResidualEvidenceMatrix)),
    new Set(reviewedTolimaMixtoResidualSlugs),
  );
  for (const claims of Object.values(tolimaMixtoResidualEvidenceMatrix)) {
    assert.equal(claims.length, 6);
    assert.ok(
      claims.some(({ evidenceClass }) =>
        [
          "descarte editorial",
          "límite de unificación",
          "desambiguación de personaje",
          "atribución histórica no corroborada",
          "reclasificación historiográfica",
          "límite de mediación",
        ].includes(evidenceClass),
      ),
    );
  }
});

test("los prompts son ilustración digital full paper cut y dos escenas", () => {
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
    assert.equal(provenance.visualQa.finalImages, 22);
    assert.equal(Object.keys(provenance.items).length, 22);
    const urls = new Set();
    for (const record of records) {
      const media = tolimaMixtoResidualMedia[record.slug];
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
    assert.equal(urls.size, 22);
  },
);
