import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  santanderMixtoResidualEvidenceMatrix,
  assertSantanderMixtoResidualEvidenceMatrix,
} from "../../editorial/santander-mixto-residual/evidence.mjs";
import { santanderMixtoResidualMedia } from "../../editorial/santander-mixto-residual/media.mjs";
import records from "../../editorial/santander-mixto-residual/records.mjs";
import { reviewedSantanderMixtoResidualSlugs } from "../../editorial/santander-mixto-residual/universe.mjs";

const provenancePath = new URL(
  "../../editorial/santander-mixto-residual/provenance.json",
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

test("los dos expedientes cumplen la metodología editorial", () => {
  assert.equal(records.length, 2);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(reviewedSantanderMixtoResidualSlugs),
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
      words(record.similitudes) >= 80 && words(record.similitudes) <= 450,
    );
    assert.ok(record.excerpt.length <= 180);
    assert.ok(record.seo_title.length <= 60);
    assert.ok(
      record.seo_description.length >= 120 &&
        record.seo_description.length <= 165,
    );
    assert.equal(record.tags.length, 4);
    assert.equal(record.focus_keywords.length, 5);
    const sources = [...record.keySources, ...record.sources];
    // Eran 8 exactas; ahora el piso de 8.
    assert.ok(sources.length >= 8, `${record.slug}: ${sources.length} fuentes`);
    assert.equal(new Set(sources.map(({ url }) => url)).size, sources.length);
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
      /editorial\/santander-mixto-residual\/evidence\.mjs/,
    );
    assert.match(
      record.researchNotes,
      /editorial\/santander-mixto-residual\/provenance\.json/,
    );
  }
});

test("corrige Talabalí y las capas del Ermitaño", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  const talabali = bySlug.get("talabad");
  assert.match(talabali.title, /^Talabalí/);
  // Talabalí sale de «Leyendas» (1936), no de «Cronicón solariego» (1922), y
  // recupera la bisagra que se había borrado: el consejo de Beltrán de
  // Luzuriaga y el primer golpe que rompe la rodela.
  assert.match(talabali.historia, /1936/);
  assert.doesNotMatch(talabali.historia, /Cronicón solariego[^.]*fuente/i);
  assert.match(talabali.mito, /Luzuriaga/);
  assert.match(talabali.mito, /rodela/);
  assert.doesNotMatch(talabali.similitudes, /Orfeo|Amaterasu/i);

  const ermitano = bySlug.get("el-ermitano-iracundo");
  // heredada: reescribir tras el cotejo
  assert.match(ermitano.mito, /Mago de Oz[\s\S]+banda/i);
  // heredada: reescribir tras el cotejo
  assert.match(ermitano.versiones, /no aparece como topónimo/i);
  // heredada: reescribir tras el cotejo
  assert.doesNotMatch(ermitano.mito, /Cuevas de Oz/);
  // heredada: reescribir tras el cotejo
  assert.match(
    ermitano.mito,
    /no presenta al Ermitaño como maestro ni como guía de autoconocimiento/i,
  );
});

test("la matriz cubre las dos rutas y sus descartes", () => {
  assert.equal(assertSantanderMixtoResidualEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(santanderMixtoResidualEvidenceMatrix)),
    new Set(reviewedSantanderMixtoResidualSlugs),
  );
  for (const claims of Object.values(santanderMixtoResidualEvidenceMatrix)) {
    assert.ok(
      claims.some(({ evidenceClass }) =>
        ["límite documental", "descarte editorial"].includes(evidenceClass),
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
    assert.equal(provenance.visualQa.finalImages, 4);
    assert.equal(Object.keys(provenance.items).length, 4);
    const urls = new Set();
    for (const record of records) {
      const media = santanderMixtoResidualMedia[record.slug];
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
    assert.equal(urls.size, 4);
  },
);
