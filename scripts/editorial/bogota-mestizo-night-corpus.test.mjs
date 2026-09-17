import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  assertBogotaMestizoNightEvidenceMatrix,
  bogotaMestizoNightEvidenceMatrix,
} from "../../editorial/bogota-mestizo-nocturno/evidence.mjs";
import { bogotaMestizoNightMedia } from "../../editorial/bogota-mestizo-nocturno/media.mjs";
import records from "../../editorial/bogota-mestizo-nocturno/records.mjs";
import { reviewedBogotaMestizoNightSlugs } from "../../editorial/bogota-mestizo-nocturno/universe.mjs";

const provenancePath = new URL(
  "../../editorial/bogota-mestizo-nocturno/provenance.json",
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

test("los ocho expedientes cumplen rangos y estructura metodológica", () => {
  assert.equal(records.length, 8);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(reviewedBogotaMestizoNightSlugs),
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
      /editorial\/bogota-mestizo-nocturno\/evidence\.mjs/,
    );
    assert.match(
      record.researchNotes,
      /editorial\/bogota-mestizo-nocturno\/provenance\.json/,
    );
  }
});

test("restaura fuentes y deshace las fusiones heredadas", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  assert.match(
    bySlug.get("el-hombre-del-farol").historia,
    /Juan Miguel Acevedo[\s\S]+decreto del 3 de noviembre/i,
  );
  assert.match(
    bySlug.get("el-toro-en-el-ascensor").versiones,
    /Bachué[\s\S]+Torre Colpatria[\s\S]+fotografías destruidas/i,
  );
  assert.match(
    bySlug.get("el-venado-de-oro").versiones,
    /Diego Barreto[\s\S]+Zipa[\s\S]+añadidos sin respaldo/i,
  );
  assert.match(
    bySlug.get("la-bruja-del-tranvia").historia,
    /documentos imaginarios y material de ficción/i,
  );
  assert.match(
    bySlug.get("la-monja-de-las-rosas").versiones,
    /padre, niña, mujer vestida de negro[\s\S]+hábito blanco/i,
  );
  assert.match(
    bySlug.get("la-monja-vidente-y-el-taxista").versiones,
    /Bogotá y Tuluá[\s\S]+lotería[\s\S]+taxista muerto/i,
  );
  assert.match(
    bySlug.get("la-mula-herrada").historia,
    /Álvaro Sánchez[\s\S]+don Juan de Guevara/i,
  );
  assert.match(
    bySlug.get("los-esqueletos-caminantes").versiones,
    /condición de no identificado[\s\S]+derecho/i,
  );
});

test("la matriz cubre las ocho rutas y sus límites", () => {
  assert.equal(assertBogotaMestizoNightEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(bogotaMestizoNightEvidenceMatrix)),
    new Set(reviewedBogotaMestizoNightSlugs),
  );
  assert.equal(
    bogotaMestizoNightEvidenceMatrix["la-bruja-del-tranvia"][0]
      .evidenceClass,
    "ficción atribuida y fechada",
  );
  assert.equal(
    bogotaMestizoNightEvidenceMatrix["los-esqueletos-caminantes"][2]
      .evidenceClass,
    "corrección ética institucional",
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
    assert.equal(provenance.visualQa.finalImages, 16);
    assert.equal(Object.keys(provenance.items).length, 16);
    const urls = new Set();
    for (const record of records) {
      const media = bogotaMestizoNightMedia[record.slug];
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
    assert.equal(urls.size, 16);
  },
);
