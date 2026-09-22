import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  andinaVariosMestizoResidualEvidenceMatrix,
  assertAndinaVariosMestizoResidualEvidenceMatrix,
} from "../../editorial/andina-varios-mestizo-residual/evidence.mjs";
import { andinaVariosMestizoResidualMedia } from "../../editorial/andina-varios-mestizo-residual/media.mjs";
import records from "../../editorial/andina-varios-mestizo-residual/records.mjs";
import { reviewedAndinaVariosMestizoResidualSlugs } from "../../editorial/andina-varios-mestizo-residual/universe.mjs";

const provenancePath = new URL(
  "../../editorial/andina-varios-mestizo-residual/provenance.json",
  import.meta.url,
);

function words(value) {
  return String(value || "").trim().split(/\s+/).filter(Boolean).length;
}

function digest(value) {
  return createHash("sha256").update(value).digest("hex");
}

test("los cinco expedientes cumplen la metodología editorial", () => {
  assert.equal(records.length, 5);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(reviewedAndinaVariosMestizoResidualSlugs),
  );
  for (const record of records) {
    assert.ok((record.relatoCorto ? words(record.mito) >= 70 : words(record.mito) >= 300) && words(record.mito) <= 650);
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
    assert.ok(sources.length >= (record.fuentesAgotadas ? 3 : 5), `${record.slug}: ${sources.length} fuentes`);
    assert.equal(new Set(sources.map(({ url }) => url)).size, sources.length);
    assert.ok(
      sources.every(
        ({ url, summary, limitation }) =>
          summary && limitation && (url.startsWith("https://") || (url.startsWith("http://") && /s[óo]lo publica por http/i.test(limitation))),
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
      /editorial\/andina-varios-mestizo-residual\/evidence\.mjs/,
    );
    assert.match(
      record.researchNotes,
      /editorial\/andina-varios-mestizo-residual\/provenance\.json/,
    );
  }
});

test("corrige marcos ficticios, fusiones y sujeto narrativo", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));

  const anima = bySlug.get("el-anima-sola");
  assert.match(anima.mito, /abuelita[\s\S]+ánima/);
  assert.match(anima.historia, /Anadelia Galvis[\s\S]+Hernán Aristizábal/);
  assert.match(anima.versiones, /animero de Marquetalia/);

  const colmillona = bySlug.get("la-vieja-colmillona");
  assert.match(colmillona.mito, /fogones/);
  assert.match(colmillona.historia, /hacienda El Oro/);
  assert.match(colmillona.versiones, /mujer hermosa/);

  const nina = bySlug.get("la-nina-de-la-carta");
  assert.match(nina.mito, /1 de noviembre de 1963/i);
  assert.match(nina.historia, /cambiaba la fecha a 1965/i);
  assert.match(nina.versiones, /no hay evidencia suficiente[^]+investigación real/i);

  const barbacoa = bySlug.get("la-barbacoa-del-muerto");
  assert.match(barbacoa.mito, /cuatro hombres sin cabeza/);
  assert.match(barbacoa.mito, /El Calzo[^]+Virgen de Chiquinquirá/i);
  assert.match(barbacoa.versiones, /Guango/);

  const meneses = bySlug.get("los-meneses");
  assert.match(meneses.mito, /cosquillas/);
  assert.match(meneses.mito, /doce a quince años[\s\S]+moneda/);
  assert.match(meneses.versiones, /Van Vliet|monedas/);
});

test("la matriz cubre las cinco rutas y sus límites", () => {
  assert.equal(assertAndinaVariosMestizoResidualEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(andinaVariosMestizoResidualEvidenceMatrix)),
    new Set(reviewedAndinaVariosMestizoResidualSlugs),
  );
  for (const claims of Object.values(andinaVariosMestizoResidualEvidenceMatrix)) {
    assert.ok(
      claims.some(({ evidenceClass }) =>
        [
          "marco literario atribuido",
          "descarte editorial",
          "límite de unificación",
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
    assert.equal(provenance.visualQa.finalImages, 10);
    assert.equal(Object.keys(provenance.items).length, 10);
    const urls = new Set();
    for (const record of records) {
      const media = andinaVariosMestizoResidualMedia[record.slug];
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
    assert.equal(urls.size, 10);
  },
);
