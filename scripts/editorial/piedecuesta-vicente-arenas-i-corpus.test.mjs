import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  assertPiedecuestaVicenteArenasIEvidenceMatrix,
  piedecuestaVicenteArenasIEvidenceMatrix,
} from "../../editorial/piedecuesta-vicente-arenas-i/evidence.mjs";
import { piedecuestaVicenteArenasIMedia } from "../../editorial/piedecuesta-vicente-arenas-i/media.mjs";
import records from "../../editorial/piedecuesta-vicente-arenas-i/records.mjs";
import { reviewedPiedecuestaVicenteArenasISlugs } from "../../editorial/piedecuesta-vicente-arenas-i/universe.mjs";

const provenancePath = new URL(
  "../../editorial/piedecuesta-vicente-arenas-i/provenance.json",
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
    new Set(reviewedPiedecuestaVicenteArenasISlugs),
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
      /editorial\/piedecuesta-vicente-arenas-i\/evidence\.mjs/,
    );
    assert.match(
      record.researchNotes,
      /editorial\/piedecuesta-vicente-arenas-i\/provenance\.json/,
    );
  }
});

test("restaura fuentes, explicaciones y límites sensibles", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  // heredada: reescribir tras el cotejo
  assert.match(
    bySlug.get("la-mula-del-diablo").versiones,
    /no.*prueba de asesinato[\s\S]+metamorfosis real/i,
  );
  // heredada: reescribir tras el cotejo
  assert.match(
    bySlug.get("la-mula-maneada").mito,
    /no ofrece.*una escena inequívoca[\s\S]+se transforme/i,
  );
  // heredada: reescribir tras el cotejo
  assert.match(
    bySlug.get("la-llorona-del-molino").mito,
    /no usa la palabra locura[\s\S]+(?:no|tampoco) adopta etiquetas raciales/i,
  );
  // heredada: reescribir tras el cotejo
  assert.match(
    bySlug.get("la-mechuda").versiones,
    /no contiene cabellera descrita[\s\S]+metamorfosis/i,
  );
  // heredada: reescribir tras el cotejo
  assert.match(
    bySlug.get("el-fantasma-de-el-horizonte").mito,
    /burro cojo cubierto con una manta[\s\S]+explicación diferente/i,
  );
  // heredada: reescribir tras el cotejo
  assert.match(
    bySlug.get("la-puerta-del-perdon").mito,
    /no recomienda[\s\S]+puede causar daño/i,
  );
  // heredada: reescribir tras el cotejo
  assert.match(
    bySlug.get("la-sayona-del-cementerio").versiones,
    /retira.*castigo de infieles/i,
  );
  // heredada: reescribir tras el cotejo
  assert.match(
    bySlug.get("el-pollo-de-las-animas").mito,
    /mecanismo se revela[\s\S]+actuación humana/i,
  );
});

test("la matriz cubre las ocho rutas y sus límites", () => {
  assert.equal(assertPiedecuestaVicenteArenasIEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(piedecuestaVicenteArenasIEvidenceMatrix)),
    new Set(reviewedPiedecuestaVicenteArenasISlugs),
  );
  assert.equal(
    piedecuestaVicenteArenasIEvidenceMatrix["la-mechuda"][2]
      .evidenceClass,
    "límite iconográfico y desfusión",
  );
  assert.equal(
    piedecuestaVicenteArenasIEvidenceMatrix["el-pollo-de-las-animas"][2]
      .evidenceClass,
    "límite ético contemporáneo",
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
      const media = piedecuestaVicenteArenasIMedia[record.slug];
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
