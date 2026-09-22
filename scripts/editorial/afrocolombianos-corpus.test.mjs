import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  afrocolombianCommunityImageUrl,
  afrocolombianCommunityPage,
} from "../../editorial/afrocolombianos/community.mjs";
import {
  afrocolombianEvidenceMatrix,
  assertAfrocolombianEvidenceMatrix,
} from "../../editorial/afrocolombianos/evidence.mjs";
import { afrocolombianMedia } from "../../editorial/afrocolombianos/media.mjs";
import records from "../../editorial/afrocolombianos/records.mjs";
import { canonicalAfrocolombianSlugs } from "../../editorial/afrocolombianos/universe.mjs";

const provenancePath = new URL(
  "../../editorial/afrocolombianos/provenance.json",
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

test("los seis expedientes Afrocolombianos cumplen la metodología", () => {
  assert.equal(records.length, 6);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalAfrocolombianSlugs),
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
    // Se exige https salvo cuando la propia fuente declara por qué no puede:
    // SciELO Colombia sirve el artículo de Anansi sólo por http y su versión
    // cifrada no responde. Es preferible el enlace que funciona, dicho.
    for (const { url, limitation } of sources) {
      if (url.startsWith("https://")) continue;
      assert.match(
        String(limitation || ""),
        /s[óo]lo (publica )?por http/i,
        `${record.slug}: ${url} no es https y no declara por qué`,
      );
    }
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

test("reemplaza expansiones heredadas y preserva variantes separadas", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  assert.doesNotMatch(
    bySlug.get("tulavieja-tunda").mito,
    /Adriano|Lemos|Mecana|Tulavieja/i,
  );
  assert.doesNotMatch(
    bySlug.get("kijimba-de-las-animas").mito,
    /amuleto|llave|gota del Atrato|San Pacho/i,
  );
  assert.doesNotMatch(
    bySlug.get("la-sierpe-de-bete").mito,
    /fiebre|mentira|arrullo|promesa|curó/i,
  );
  assert.doesNotMatch(
    bySlug.get("el-riviel-del-rosario").mito,
    /rosario|castigo religioso|anciano/i,
  );
  assert.match(
    bySlug.get("como-aparecio-la-muerte-en-el-choco").mito,
    /En Tutunendo[\s\S]+En Munguidó/,
  );
});

test("la matriz distingue núcleos, variantes, memoria y dudas", () => {
  assert.equal(assertAfrocolombianEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(afrocolombianEvidenceMatrix)),
    new Set(canonicalAfrocolombianSlugs),
  );
  assert.deepEqual(
    afrocolombianEvidenceMatrix["la-sierpe-de-bete"][0].sourceKeys,
    ["chocoTourismSierpe"],
  );
  assert.equal(
    afrocolombianEvidenceMatrix["el-riviel-del-rosario"][0]
      .evidenceClass,
    "memoria contemporánea",
  );
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
    assert.equal(provenance.visualQa.finalImages, 12);
    assert.equal(Object.keys(provenance.items).length, 12);
    const allUrls = new Set();
    for (const record of records) {
      const media = afrocolombianMedia[record.slug];
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
    assert.equal(allUrls.size, 12);
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
  assert.match(afrocolombianCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.equal(
    afrocolombianCommunityImageUrl,
    afrocolombianMedia.anansi.horizontal,
  );
});

test("la comunidad pública evita el SEO indígena genérico", () => {
  const route = fs.readFileSync(
    new URL("../../src/lib/community-info.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ afrocolombianCommunityPage \}/);
  assert.match(
    route,
    /"afrocolombianos": \{\s+\.\.\.afrocolombianCommunityPage,/,
  );
  const page = fs.readFileSync(
    new URL("../../src/app/comunidades/[slug]/page.js", import.meta.url),
    "utf8",
  );
  assert.match(page, /communityInfo\.searchTerms \|\|/);
  assert.ok(
    afrocolombianCommunityPage.searchTerms.includes(
      "comunidades negras",
    ),
  );
});
