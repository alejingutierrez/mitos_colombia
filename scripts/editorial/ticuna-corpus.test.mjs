import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  ticunaCommunityImageUrl,
  ticunaCommunityPage,
} from "../../editorial/ticuna/community.mjs";
import { ticunaMedia } from "../../editorial/ticuna/media.mjs";
import records from "../../editorial/ticuna/records.mjs";
import { canonicalTicunaSlugs } from "../../editorial/ticuna/universe.mjs";

const provenance = JSON.parse(
  fs.readFileSync(
    new URL("../../editorial/ticuna/provenance.json", import.meta.url),
    "utf8",
  ),
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

test("los seis expedientes Ticuna cumplen la metodología editorial", () => {
  assert.equal(records.length, 6);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalTicunaSlugs),
  );
  for (const record of records) {
    // Un mito puede declarar `relatoCorto` cuando su primario no da para el
    // mínimo sin inventar: la razón queda escrita en el módulo.
    const minimoMito = record.relatoCorto ? 70 : 300;
    assert.ok(
      words(record.mito) >= minimoMito && words(record.mito) <= 650,
      `${record.slug}: ${words(record.mito)} palabras de relato`,
    );
    assert.ok(words(record.historia) >= 220 && words(record.historia) <= 600);
    assert.ok(
      words(record.versiones) >= 170 && words(record.versiones) <= 550,
    );
    assert.ok(words(record.leccion) >= 8 && words(record.leccion) <= 22);
    assert.equal((record.leccion.match(/[.!?]+/g) || []).length, 1);
    assert.ok(
      words(record.similitudes) >= 150 && words(record.similitudes) <= 450,
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
    assert.ok(record.seo_description.length <= 165);
    assert.equal(record.tags.length, 4);
    assert.equal(record.focus_keywords.length, 5);
    // Antes: `keySources + sources === 7`. Ese siete era el reparto en bloque
    // escrito como aserción; desde la Fase B del 2026-09-19 cada ficha cita
    // las obras que su reescritura usó, y son distintas entre fichas. Lo que
    // se verifica es la sustancia: mínimo de fuentes, dominios distintos,
    // ninguna URL repetida y todas con resumen, límite y URL https.
    const todas = [...record.keySources, ...record.sources];
    assert.ok(
      todas.length >= 5,
      `${record.slug}: ${todas.length} fuentes, el mínimo son cinco.`,
    );
    assert.equal(record.keySources.length, 3);
    const urls = todas.map(({ url }) => url);
    assert.equal(new Set(urls).size, urls.length);
    assert.ok(
      new Set(urls.map((url) => new URL(url).host)).size >= 3,
      `${record.slug}: menos de tres dominios distintos.`,
    );
    assert.ok(
      todas.every(
        ({ url, title, summary, limitation }) =>
          url.startsWith("https://") && title && summary && limitation,
      ),
      `${record.slug}: hay una fuente sin https, título, resumen o límite.`,
    );
  }
});

test("ninguna pareja de fichas repite el mismo reparto de fuentes", () => {
  const repartos = new Map();
  for (const record of records) {
    const firma = [...record.keySources, ...record.sources]
      .map(({ url }) => url)
      .join("|");
    assert.ok(
      !repartos.has(firma),
      `${record.slug} y ${repartos.get(firma)} citan exactamente lo mismo.`,
    );
    repartos.set(firma, record.slug);
  }
  // Las fuentes del lado brasileño —Nimuendajú, Torü Duü'ügü, Faulhaber— se
  // citan como vecinas y tienen que decirlo en su límite. Y la página del
  // Museu do Índio, que responde 401, no puede volver a entrar.
  for (const record of records) {
    const todas = [...record.keySources, ...record.sources];
    assert.ok(
      !todas.some(({ url }) => url.includes("gov.br/museudoindio")),
      `${record.slug}: la ficha del Museu do Índio exige autenticación.`,
    );
    for (const fuente of todas) {
      if (
        /ucpress\.edu|acervo\.socioambiental\.org|sedici\.unlp\.edu\.ar/.test(
          fuente.url,
        )
      ) {
        assert.match(
          fuente.limitation,
          /brasil|brasile|vecin/i,
          `${record.slug}: ${fuente.title} no declara la vecindad.`,
        );
      }
    }
  }
});

test("corrige las dos fichas heredadas y añade cuatro relatos atribuidos", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  const creation = bySlug.get("creacion");
  assert.equal(creation.title, "Ngutapa y el nacimiento de Yoí e Ípi");
  assert.match(creation.mito, /Ngutapa/);
  assert.match(creation.mito, /Kuãyaré/);
  assert.doesNotMatch(creation.mito, /\bYuche\b/i);
  const eware = bySlug.get("el-combate-del-sueno-y-la-palabra");
  assert.equal(eware.title, "Wone, Eware y la pesca del pueblo Tikuna");
  assert.match(eware.mito, /Wone/);
  assert.match(eware.mito, /Eware/);
  assert.doesNotMatch(eware.mito, /\bMaría\b|pelazón/i);
  assert.equal(
    bySlug.get("origen-del-sol-tikuna").title,
    "El origen del Sol Tikuna",
  );
  assert.equal(
    bySlug.get("origen-de-la-luna-tikuna").title,
    "El origen de la Luna Tikuna",
  );
  assert.equal(
    bySlug.get("origen-del-friaje-tikuna").title,
    "Las grullas y el origen del friaje",
  );
  assert.equal(
    bySlug.get("la-canoa-de-moe").title,
    "La canoa de Moe y la mujer Moru",
  );
});

test("cada mito tiene pareja OpenAI propia y procedencia durable aprobada", () => {
  assert.equal(provenance.provider, "openai");
  assert.equal(provenance.model, "gpt-image-2");
  assert.equal(provenance.quality, "high");
  assert.equal(provenance.visualQa.status, "approved");
  assert.equal(provenance.visualQa.finalImages, 12);
  assert.equal(provenance.visualQa.generationAttempts, 15);
  assert.equal(provenance.visualQa.rejectedAttempts, 3);
  assert.equal(provenance.visualQa.estimatedOutputCostUsd, 2.475);
  assert.equal(Object.keys(provenance.items).length, 12);

  const allUrls = new Set();
  for (const record of records) {
    const media = ticunaMedia[record.slug];
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
      const key = `${record.slug}:${orientation}`;
      const item = provenance.items[key];
      const editorialPrompt =
        orientation === "horizontal"
          ? record.image_prompt_horizontal
          : record.image_prompt_vertical;
      const dimensions =
        orientation === "horizontal"
          ? { width: 1536, height: 864 }
          : { width: 864, height: 1536 };
      assert.equal(item.slug, record.slug);
      assert.equal(item.orientation, orientation);
      assert.equal(item.provider, "openai");
      assert.equal(item.model, "gpt-image-2");
      assert.equal(item.quality, "high");
      assert.equal(item.visualQa, "approved");
      assert.ok(item.visualReviewNote);
      assert.equal(item.editorialPrompt, editorialPrompt);
      assert.equal(digest(item.editorialPrompt), item.editorialPromptSha256);
      assert.equal(digest(item.generationPrompt), item.generationPromptSha256);
      assert.deepEqual(item.outputDimensions, dimensions);
      assert.equal(item.outputFormat, "jpeg");
      assert.equal(item.url, media[orientation]);
      assert.equal(item.sourceUrls.length, 7);
      assert.equal(new Set(item.sourceUrls).size, 7);
      assert.ok(item.attempt >= 1);
    }
  }
  assert.equal(allUrls.size, 12);
});

test("los prompts exigen ilustración full paper cut y escenas distintas", () => {
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
  assert.match(ticunaCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.match(ticunaCommunityPage.imagePrompt, /acabado gráfico plano/i);
  assert.match(ticunaCommunityPage.imagePrompt, /sin fotografía/i);
  assert.equal(ticunaCommunityImageUrl, ticunaMedia.creacion.horizontal);
});

test("la ruta pública usa el perfil Ticuna revisado", () => {
  const route = fs.readFileSync(
    new URL("../../src/lib/community-info.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ ticunaCommunityPage \}/);
  assert.match(route, /"ticuna": \{\s+\.\.\.ticunaCommunityPage,/);
  assert.match(route, /"tikunas": \{\s+\.\.\.ticunaCommunityPage,/);
});
