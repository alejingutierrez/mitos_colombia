import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  andinaVariosMixtoResidualEvidenceMatrix,
  assertAndinaVariosMixtoResidualEvidenceMatrix,
} from "../../editorial/andina-varios-mixto-residual/evidence.mjs";
import { andinaVariosMixtoResidualMedia } from "../../editorial/andina-varios-mixto-residual/media.mjs";
import records from "../../editorial/andina-varios-mixto-residual/records.mjs";
import { reviewedAndinaVariosMixtoResidualSlugs } from "../../editorial/andina-varios-mixto-residual/universe.mjs";

const provenancePath = new URL(
  "../../editorial/andina-varios-mixto-residual/provenance.json",
  import.meta.url,
);

function words(value) {
  return String(value || "").trim().split(/\s+/).filter(Boolean).length;
}

function digest(value) {
  return createHash("sha256").update(value).digest("hex");
}

test("los tres expedientes cumplen la metodología editorial", () => {
  assert.equal(records.length, 3);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(reviewedAndinaVariosMixtoResidualSlugs),
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
      /editorial\/andina-varios-mixto-residual\/evidence\.mjs/,
    );
    assert.match(
      record.researchNotes,
      /editorial\/andina-varios-mixto-residual\/provenance\.json/,
    );
  }
});

test("corrige mezclas, invenciones y la falsa tradición panamericana", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));

  const mano = bySlug.get("la-mano-peluda");
  // heredada: reescribir tras el cotejo
  assert.match(mano.historia, /dos filas del Excel, 826 y 842/i);
  // heredada: reescribir tras el cotejo
  assert.match(mano.mito, /dos formas no necesitan convertirse en una sola biografía/i);
  // heredada: reescribir tras el cotejo
  assert.match(mano.mito, /no añade una pistola de ácido[^]+dimensiones celestes/i);
  // heredada: reescribir tras el cotejo
  assert.doesNotMatch(mano.mito, /Álvaro Gartner/i);

  const hojarasquin = bySlug.get("el-hojarasquin-del-monte");
  // heredada: reescribir tras el cotejo
  assert.match(hojarasquin.mito, /puede perder a quien entra[^]+también guiar/i);
  // heredada: reescribir tras el cotejo
  assert.match(hojarasquin.historia, /Joaquín Romero[^]+Ninguna/i);
  // heredada: reescribir tras el cotejo
  assert.match(hojarasquin.mito, /conserva un botánico[^]+diario de 1928/i);
  // heredada: reescribir tras el cotejo
  assert.match(hojarasquin.versiones, /Tío Conejo[^]+homónimo/i);

  const esperanza = bySlug.get("esperanza-en-el-oriente");
  // heredada: reescribir tras el cotejo
  assert.match(esperanza.mito, /no cuenta una historia transmitida por una comunidad/i);
  // heredada: reescribir tras el cotejo
  assert.match(esperanza.historia, /Historias 5\.13 de Tácito, no en los Anales/i);
  // heredada: reescribir tras el cotejo
  assert.match(esperanza.versiones, /observación e interpretación/i);
  // heredada: reescribir tras el cotejo
  assert.match(esperanza.mito, /sin convertirse automáticamente en prueba de contacto/i);
});

test("la matriz cubre las tres rutas y sus límites", () => {
  assert.equal(assertAndinaVariosMixtoResidualEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(andinaVariosMixtoResidualEvidenceMatrix)),
    new Set(reviewedAndinaVariosMixtoResidualSlugs),
  );
  for (const claims of Object.values(andinaVariosMixtoResidualEvidenceMatrix)) {
    assert.ok(
      claims.some(({ evidenceClass }) =>
        [
          "descarte editorial",
          "límite autoral explícito",
          "separación dato inferencia",
        ].includes(evidenceClass),
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
    assert.equal(provenance.visualQa.finalImages, 6);
    assert.equal(Object.keys(provenance.items).length, 6);
    const urls = new Set();
    for (const record of records) {
      const media = andinaVariosMixtoResidualMedia[record.slug];
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
    assert.equal(urls.size, 6);
  },
);
