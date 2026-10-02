import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  yaguaCommunityImageUrl,
  yaguaCommunityPage,
} from "../../editorial/yagua/community.mjs";
import {
  assertYaguaEvidenceMatrix,
  yaguaEvidenceMatrix,
} from "../../editorial/yagua/evidence.mjs";
import { yaguaMedia } from "../../editorial/yagua/media.mjs";
import records from "../../editorial/yagua/records.mjs";
import { canonicalYaguaSlugs } from "../../editorial/yagua/universe.mjs";

const provenancePath = new URL(
  "../../editorial/yagua/provenance.json",
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

test("los siete expedientes Yagua cumplen la metodología editorial", () => {
  assert.equal(records.length, 7);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalYaguaSlugs),
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
    assert.ok(
      record.seo_description.length >= 120 &&
        record.seo_description.length <= 165,
    );
    assert.equal(record.tags.length, 4);
    assert.equal(record.focus_keywords.length, 5);
    const sourceCount = record.keySources.length + record.sources.length;
    assert.ok(sourceCount >= 5);
    const urls = [...record.keySources, ...record.sources].map(({ url }) => url);
    assert.equal(new Set(urls).size, sourceCount);
  }
});

test("corrige la ficha sintética y delimita Chimbilaco como relato contemporáneo", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  assert.equal(
    bySlug.get("yagua").title,
    // El título deja de fijar una grafía. «Ndanu» y «Mêna» vienen del material
    // educativo de ACITAM, CODEBA y UNICEF; Chaumeil escribe ndano y mena, y
    // Powlison los llama Hermano Mayor y Placenta. Las tres formas conviven en
    // Versiones, que es donde se discuten, y no en la portada de la ficha.
    "Los mellizos y el árbol del agua",
  );
  assert.doesNotMatch(
    records.map(({ mito }) => mito).join("\n"),
    /Petita|Sairango|Yuané|Asento|pureza racial|caníbales boras/i,
  );
  assert.match(bySlug.get("yagua").researchNotes, /Nawanchi\/Há/i);
  assert.match(bySlug.get("chimbilaco").researchNotes, /contemporáneo/i);
  assert.doesNotMatch(
    bySlug.get("chimbilaco").mito,
    /guardián de todos los ríos|pacto con los árboles|castiga la tala/i,
  );
});

test("la matriz de evidencia cubre los siete expedientes Yagua", () => {
  assert.equal(assertYaguaEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(yaguaEvidenceMatrix)),
    new Set(canonicalYaguaSlugs),
  );
});

test(
  "cada ciclo tiene pareja OpenAI propia y procedencia durable aprobada",
  { skip: !fs.existsSync(provenancePath) },
  () => {
    const provenance = JSON.parse(fs.readFileSync(provenancePath, "utf8"));
    assert.equal(provenance.provider, "openai");
    assert.equal(provenance.model, "gpt-image-2");
    assert.equal(provenance.quality, "high");
    assert.equal(provenance.visualQa.status, "approved");
    assert.equal(provenance.visualQa.finalImages, 14);
    assert.equal(Object.keys(provenance.items).length, 14);

    const allUrls = new Set();
    for (const record of records) {
      const media = yaguaMedia[record.slug];
      assert.equal(media.provenanceStatus, "approved");
      assert.equal(media.provider, "openai");
      assert.equal(media.model, "gpt-image-2");
      assert.match(media.horizontal, /^https:\/\//);
      assert.match(media.vertical, /^https:\/\//);
      assert.notEqual(media.horizontal, media.vertical);
      assert.ok(!allUrls.has(media.horizontal), `${record.slug}: H repetida`);
      assert.ok(!allUrls.has(media.vertical), `${record.slug}: V repetida`);
      allUrls.add(media.horizontal);
      allUrls.add(media.vertical);
      for (const orientation of ["horizontal", "vertical"]) {
        const item = provenance.items[`${record.slug}:${orientation}`];
        const editorialPrompt =
          orientation === "horizontal"
            ? record.image_prompt_horizontal
            : record.image_prompt_vertical;
        assert.equal(item.provider, "openai");
        assert.equal(item.model, "gpt-image-2");
        assert.equal(item.quality, "high");
        assert.equal(item.visualQa, "approved");
        assert.ok(item.visualReviewNote);
        assert.equal(item.editorialPrompt, editorialPrompt);
        assert.equal(digest(editorialPrompt), item.editorialPromptSha256);
        assert.equal(digest(item.generationPrompt), item.generationPromptSha256);
        assert.equal(item.url, media[orientation]);
        assert.equal(
          item.sourceUrls.length,
          record.keySources.length + record.sources.length,
        );
      }
    }
    assert.equal(allUrls.size, 14);
  },
);

test("los prompts exigen paper cut 2D y escenas distintas", () => {
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
      assert.match(prompt, /sin fotograf[ií]a/i);
      assert.match(prompt, /objeto físico/i);
      assert.match(prompt, /maqueta/i);
      assert.match(prompt, /diorama/i);
      assert.match(prompt, /CGI|render 3D/i);
    }
  }
  assert.match(yaguaCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.equal(yaguaCommunityImageUrl, yaguaMedia.yagua.horizontal);
});
