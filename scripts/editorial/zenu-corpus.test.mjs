import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  zenuCommunityImageUrl,
  zenuCommunityPage,
} from "../../editorial/zenu/community.mjs";
import {
  assertZenuEvidenceMatrix,
  zenuEvidenceMatrix,
} from "../../editorial/zenu/evidence.mjs";
import { zenuMedia } from "../../editorial/zenu/media.mjs";
import records from "../../editorial/zenu/records.mjs";
import {
  canonicalZenuSlugs,
  reviewedZenuWorklistSlugs,
} from "../../editorial/zenu/universe.mjs";

const provenancePath = new URL(
  "../../editorial/zenu/provenance.json",
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

test("los siete expedientes del frente Zenú cumplen la metodología", () => {
  assert.equal(records.length, 7);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(reviewedZenuWorklistSlugs),
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
    assert.ok(sources.length >= 5);
    assert.equal(
      new Set(sources.map(({ url }) => url)).size,
      sources.length,
    );
    assert.ok(sources.every(({ url }) => url.startsWith("https://")));
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
  }
});

test("reemplaza las expansiones sintéticas y conserva todos los enlaces", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  assert.match(
    bySlug.get("la-noche-mas-larga").title,
    /sombrero que ordenó el universo/i,
  );
  assert.doesNotMatch(
    bySlug.get("la-noche-mas-larga").mito,
    /Babilla Antigua|Ceiba Primera/i,
  );
  assert.doesNotMatch(
    bySlug.get("mexion-y-manexca").mito,
    /bastón|grano tenía un nombre/i,
  );
  assert.doesNotMatch(
    bySlug.get("juan-lara-y-la-trenza-del-aire").mito,
    /amuleto|trenza del aire|pinta del remolino/i,
  );
  assert.match(
    bySlug.get("juan-lara-y-la-trenza-del-aire").researchNotes,
    /RECLASIFICACIÓN SIN DESPUBLICAR/i,
  );
});

test("la matriz de evidencia cubre las siete rutas", () => {
  assert.equal(assertZenuEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(zenuEvidenceMatrix)),
    new Set(reviewedZenuWorklistSlugs),
  );
});

test(
  "cada ruta tiene dos imágenes OpenAI propias y aprobadas",
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
      const media = zenuMedia[record.slug];
      assert.equal(media.provenanceStatus, "approved");
      assert.match(media.horizontal, /^https:\/\//);
      assert.match(media.vertical, /^https:\/\//);
      assert.notEqual(media.horizontal, media.vertical);
      assert.ok(!allUrls.has(media.horizontal));
      assert.ok(!allUrls.has(media.vertical));
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
        assert.equal(
          digest(item.generationPrompt),
          item.generationPromptSha256,
        );
        assert.equal(item.url, media[orientation]);
      }
    }
    assert.equal(allUrls.size, 14);
  },
);

test("los prompts exigen paper cut digital plano y escenas distintas", () => {
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
  assert.match(zenuCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.equal(
    zenuCommunityImageUrl,
    zenuMedia["mexion-y-manexca"].horizontal,
  );
});

test("la comunidad pública usa el perfil Zenú revisado", () => {
  const route = fs.readFileSync(
    new URL("../../src/app/comunidades/[slug]/page.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ zenuCommunityPage \}/);
  assert.match(route, /"zenu": \{\s+\.\.\.zenuCommunityPage,/);
  assert.equal(canonicalZenuSlugs.length, 6);
});
