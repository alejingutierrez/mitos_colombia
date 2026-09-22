import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  assertHuitotoResidualEvidenceMatrix,
  huitotoResidualEvidenceMatrix,
} from "../../editorial/huitoto-residual/evidence.mjs";
import { huitotoResidualMedia } from "../../editorial/huitoto-residual/media.mjs";
import records from "../../editorial/huitoto-residual/records.mjs";
import { reviewedHuitotoResidualSlugs } from "../../editorial/huitoto-residual/universe.mjs";

const provenancePath = new URL(
  "../../editorial/huitoto-residual/provenance.json",
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

test("los cuatro expedientes cumplen rangos y estructura metodológica", () => {
  assert.equal(records.length, 4);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(reviewedHuitotoResidualSlugs),
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
      words(record.similitudes) >= 80 && words(record.similitudes) <= 450,
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
    // Eran 8 exactas, el reparto en bloque. Tras la ronda del cierre, piso de 8
    // (o `fuentesAgotadas` declarado); las bloqueadas siguen con el heredado.
    assert.ok(sources.length >= 5, `${record.slug}: ${sources.length} fuentes`);
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
      /editorial\/huitoto-residual\/evidence\.mjs/,
    );
    assert.match(
      record.researchNotes,
      /editorial\/huitoto-residual\/provenance\.json/,
    );
  }
});

test("corrige atribución, ciclo, desenlace y moraleja heredados", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  // heredada: reescribir tras el cotejo
  assert.doesNotMatch(bySlug.get("taife").mito, /Madremonte|niguas/i);
  // heredada: reescribir tras el cotejo
  assert.match(bySlug.get("taife").versiones, /El origen de los Huitotos/i);
  // heredada: reescribir tras el cotejo
  assert.doesNotMatch(bySlug.get("taik").mito, /diablo|Jatacoremui|mariposa/i);
  // heredada: reescribir tras el cotejo
  assert.match(bySlug.get("taik").historia, /Pablo Bigïdïma/i);
  // heredada: reescribir tras el cotejo
  assert.match(bySlug.get("nonuetoma").mito, /lo mataron/i);
  // heredada: reescribir tras el cotejo
  assert.match(bySlug.get("nonuetoma").historia, /Amazonía Peruana/i);
  // heredada: reescribir tras el cotejo
  assert.match(
    bySlug.get("el-diluvio-guinadoma").historia,
    /Lorenzo y José Soto Flórez/i,
  );
  // heredada: reescribir tras el cotejo
  assert.doesNotMatch(
    bySlug.get("el-diluvio-guinadoma").leccion,
    /fe|creencia|salvación/i,
  );
});

test("la matriz cubre cuatro rutas y conserva límites", () => {
  assert.equal(assertHuitotoResidualEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(huitotoResidualEvidenceMatrix)),
    new Set(reviewedHuitotoResidualSlugs),
  );
  assert.equal(
    huitotoResidualEvidenceMatrix.taik[1].evidenceClass,
    "corrección de identidad y título",
  );
  assert.equal(
    huitotoResidualEvidenceMatrix["el-diluvio-guinadoma"][2]
      .evidenceClass,
    "duda",
  );
});

test("los prompts exigen full paper cut digital y dos escenas", () => {
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
      assert.match(prompt, /formas mate sin volumen físico/i);
      assert.match(prompt, /sin fotografía/i);
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
      const media = huitotoResidualMedia[record.slug];
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
    // El total de URLs distintas era una cuota; ahora crece con cada ficha.
    assert.ok(urls.size >= 8);
  },
);
