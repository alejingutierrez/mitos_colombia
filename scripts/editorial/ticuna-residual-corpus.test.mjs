import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  assertTicunaResidualEvidenceMatrix,
  ticunaResidualEvidenceMatrix,
} from "../../editorial/ticuna-residual/evidence.mjs";
import { ticunaResidualMedia } from "../../editorial/ticuna-residual/media.mjs";
import records from "../../editorial/ticuna-residual/records.mjs";
import { reviewedTicunaResidualSlugs } from "../../editorial/ticuna-residual/universe.mjs";

const provenancePath = new URL(
  "../../editorial/ticuna-residual/provenance.json",
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

test("los siete expedientes cumplen rangos y estructura metodológica", () => {
  assert.equal(records.length, 7);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(reviewedTicunaResidualSlugs),
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
      /editorial\/ticuna-residual\/evidence\.mjs/,
    );
    assert.match(
      record.researchNotes,
      /editorial\/ticuna-residual\/provenance\.json/,
    );
  }
});

test("declara variantes, recompone fragmentos y corrige identidades", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  assert.doesNotMatch(bySlug.get("origen-del-sol").mito, /corona|guacamayo/i);
  assert.match(bySlug.get("origen-del-sol").versiones, /Dolores Noé/i);
  assert.doesNotMatch(bySlug.get("origen-de-la-luna").mito, /Ayara|Mayari/i);
  assert.match(bySlug.get("origen-de-la-luna").versiones, /Augusto Coello/i);
  assert.match(bySlug.get("origen-del-agua").historia, /ventana del gran ciclo/i);
  assert.doesNotMatch(
    bySlug.get("origen-de-los-vegetales-cultivaldos").mito,
    /Ariana|halo/i,
  );
  assert.match(bySlug.get("origen-del-gavilan").historia, /dos registros/i);
  assert.doesNotMatch(
    bySlug.get("origen-de-los-micos-boquiblancos").mito,
    /montañas|sauce|bambú|Madre Tierra/i,
  );
  assert.equal(bySlug.get("moe-e-ipi").title, "Yoí, Ípi y la mujer del umarí");
  assert.doesNotMatch(bySlug.get("moe-e-ipi").mito, /hermano bueno|el loco/i);
});

test("la matriz cubre las siete rutas y conserva dudas", () => {
  assert.equal(assertTicunaResidualEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(ticunaResidualEvidenceMatrix)),
    new Set(reviewedTicunaResidualSlugs),
  );
  assert.equal(
    ticunaResidualEvidenceMatrix["origen-del-gavilan"][1]
      .evidenceClass,
    "recomposición editorial",
  );
  assert.equal(
    ticunaResidualEvidenceMatrix["origen-de-los-micos-boquiblancos"][2]
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
    assert.equal(provenance.visualQa.finalImages, 14);
    assert.equal(Object.keys(provenance.items).length, 14);
    const urls = new Set();
    for (const record of records) {
      const media = ticunaResidualMedia[record.slug];
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
    assert.equal(urls.size, 14);
  },
);
