import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  assertPiedecuestaLegendaryAccountsEvidenceMatrix,
  piedecuestaLegendaryAccountsEvidenceMatrix,
} from "../../editorial/piedecuesta-relatos-legendarios/evidence.mjs";
import { piedecuestaLegendaryAccountsMedia } from "../../editorial/piedecuesta-relatos-legendarios/media.mjs";
import records from "../../editorial/piedecuesta-relatos-legendarios/records.mjs";
import { reviewedPiedecuestaLegendaryAccountsSlugs } from "../../editorial/piedecuesta-relatos-legendarios/universe.mjs";

const provenancePath = new URL(
  "../../editorial/piedecuesta-relatos-legendarios/provenance.json",
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

const REHECHAS = new Set(["un-libertador-piedecuestano"]);

test("los cuatro expedientes cumplen rangos y estructura metodológica", () => {
  assert.equal(records.length, 4);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(reviewedPiedecuestaLegendaryAccountsSlugs),
  );
  for (const record of records) {
    assert.ok(
      words(record.mito) >= 300 && words(record.mito) <= 650,
      `${record.slug}: mito ${words(record.mito)}`,
    );
    assert.ok(
      words(record.historia) >= 220 && words(record.historia) <= 600,
      `${record.slug}: historia ${words(record.historia)}`,
    );
    assert.ok(
      words(record.versiones) >= 170 && words(record.versiones) <= 550,
      `${record.slug}: versiones ${words(record.versiones)}`,
    );
    assert.ok(
      words(record.leccion) >= 8 && words(record.leccion) <= 22,
      `${record.slug}: lección ${words(record.leccion)}`,
    );
    assert.equal((record.leccion.match(/[.!?]+/g) || []).length, 1);
    assert.ok(
      words(record.similitudes) >= 80 &&
        words(record.similitudes) <= 450,
      `${record.slug}: similitudes ${words(record.similitudes)}`,
    );
    assert.ok(record.excerpt.length <= 180);
    assert.ok(record.seo_title.length <= 60);
    assert.ok(
      record.seo_description.length >= 120 &&
        record.seo_description.length <= 165,
      `${record.slug}: SEO ${record.seo_description.length}`,
    );
    assert.equal(record.tags.length, 4);
    assert.equal(record.focus_keywords.length, 5);
    const sources = [...record.keySources, ...record.sources];
    // Era una cuota fija, el reparto en bloque. Tras la ronda del cierre cada
    // ficha rehecha tiene las suyas, con piso de 8; las bloqueadas siguen
    // con el reparto heredado.
    assert.ok(sources.length >= (REHECHAS.has(record.slug) ? 8 : 5), `${record.slug}: ${sources.length} fuentes`);
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
      /editorial\/piedecuesta-relatos-legendarios\/evidence\.mjs/,
    );
    assert.match(
      record.researchNotes,
      /editorial\/piedecuesta-relatos-legendarios\/provenance\.json/,
    );
  }
});

test("corrige género, título, estigma y afirmaciones históricas", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  // heredada: reescribir tras el cotejo
  assert.match(
    bySlug.get("el-cerro-encantado").mito,
    /no adopta ese retrato como descripción histórica/i,
  );
  // heredada: reescribir tras el cotejo
  assert.match(
    bySlug.get("el-quijote-piedecuestano").mito,
    /no reconstruye una religión Guane/i,
  );
  assert.equal(
    bySlug.get("la-vista-del-libertador").title,
    "La Visita del Libertador",
  );
  // heredada: reescribir tras el cotejo
  assert.match(
    bySlug.get("la-vista-del-libertador").versiones,
    /(?:conserva|mantiene) el error heredado la-vista-del-libertador/i,
  );
  // La semblanza se rehizo sobre el discurso de Ortiz McCormick (BHA 709,
  // 1975): Mantilla, la sublevación de la cárcel en julio de 1819. El Relato ya
  // no habla de sí mismo («no es un mito sobrenatural»).
  const libertador = bySlug.get("un-libertador-piedecuestano");
  assert.match(libertador.mito, /Mantilla[\s\S]*1819|1819[\s\S]*Mantilla/);
  assert.match(libertador.historia, /Ortiz McCormick/);
  assert.doesNotMatch(libertador.mito, /no es un mito|cóndores/i);
});

test("la matriz cubre las cuatro rutas y sus límites", () => {
  assert.equal(assertPiedecuestaLegendaryAccountsEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(piedecuestaLegendaryAccountsEvidenceMatrix)),
    new Set(reviewedPiedecuestaLegendaryAccountsSlugs),
  );
  assert.equal(
    piedecuestaLegendaryAccountsEvidenceMatrix[
      "un-libertador-piedecuestano"
    ][1].evidenceClass,
    "reclasificación documental",
  );
});

test("los prompts son ilustración digital full paper cut y dos escenas", () => {
  for (const record of records) {
    assert.notEqual(
      record.image_prompt_horizontal,
      record.image_prompt_vertical,
    );
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
  "cada ficha tiene dos imágenes OpenAI propias y aprobadas",
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
      const media = piedecuestaLegendaryAccountsMedia[record.slug];
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
        assert.equal(
          item.generationPromptSha256,
          digest(item.generationPrompt),
        );
      }
    }
    assert.equal(urls.size, 8);
  },
);
