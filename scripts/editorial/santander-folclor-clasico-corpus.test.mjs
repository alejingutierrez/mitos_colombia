import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  assertSantanderClassicFolkloreEvidenceMatrix,
  santanderClassicFolkloreEvidenceMatrix,
} from "../../editorial/santander-folclor-clasico/evidence.mjs";
import { santanderClassicFolkloreMedia } from "../../editorial/santander-folclor-clasico/media.mjs";
import records from "../../editorial/santander-folclor-clasico/records.mjs";
import { reviewedSantanderClassicFolkloreSlugs } from "../../editorial/santander-folclor-clasico/universe.mjs";

const provenancePath = new URL(
  "../../editorial/santander-folclor-clasico/provenance.json",
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

const REHECHAS = new Set(["la-piedra-del-muerto", "el-trapiche-ardiendo", "lagunas-encantadas", "lo-que-ensenan-las-cuevas", "el-cacique-salomon", "tal-para-cual"]);


test("los seis expedientes cumplen rangos y estructura metodológica", () => {
  assert.equal(records.length, 6);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(reviewedSantanderClassicFolkloreSlugs),
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
    // Era una cuota fija, el reparto en bloque. Tras la ronda del cierre cada
    // ficha rehecha tiene las suyas, con piso de 8; las bloqueadas siguen
    // con el reparto heredado.
    assert.ok(sources.length >= (REHECHAS.has(record.slug) ? 8 : 5), `${record.slug}: ${sources.length} fuentes`);
    assert.equal(new Set(sources.map(({ url }) => url)).size, sources.length);
    assert.ok(
      sources.every(
        ({ url, summary, limitation }) =>
          summary &&
          limitation &&
          // `http` sólo si el servidor no ofrece `https` —SciELO Colombia— y
          // la fuente lo declara en su límite (spec §8).
          (url.startsWith("https://") || (url.startsWith("http://") && /s[óo]lo publica por http/i.test(limitation))),
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
      /editorial\/santander-folclor-clasico\/evidence\.mjs/,
    );
    assert.match(
      record.researchNotes,
      /editorial\/santander-folclor-clasico\/provenance\.json/,
    );
  }
});

// Las aserciones de antes fijaban el texto heredado, que el cotejo con Arias y
// Otero (Villa Posse II) desmintió por omisión: el remate de la Mancarita, la
// doncella de catorce años, el Colmenero en los oficios del Viernes Santo, el
// final «por bobos o por cotudos». Se comprueba ahora lo que la fuente trae.
test("desfusiona ciclos y corrige título, estigma y patrimonio", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  const ficha = (slug) => bySlug.get(slug);
  assert.match(ficha("el-trapiche-ardiendo").mito, /Nazario/);
  assert.match(ficha("el-trapiche-ardiendo").mito, /Mancarita/);
  assert.match(ficha("lagunas-encantadas").mito, /Alto Nogales[\s\S]*catorce|catorce[\s\S]*Alto Nogales/);
  assert.match(ficha("lo-que-ensenan-las-cuevas").mito, /Colmenero/);
  assert.match(ficha("lo-que-ensenan-las-cuevas").mito, /Viernes Santo/);
  assert.match(ficha("lo-que-ensenan-las-cuevas").mito, /Cachal[uú]/);
  assert.match(ficha("el-cacique-salomon").historia, /Otero/);
  assert.match(ficha("el-cacique-salomon").mito, /V[eé]lez/);
  assert.match(ficha("tal-para-cual").mito, /bobo[\s\S]*cotudo|cotudo[\s\S]*bobo/i);
});

test("la matriz cubre seis rutas, autores y límites", () => {
  assert.equal(assertSantanderClassicFolkloreEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(santanderClassicFolkloreEvidenceMatrix)),
    new Set(reviewedSantanderClassicFolkloreSlugs),
  );
  assert.equal(
    santanderClassicFolkloreEvidenceMatrix["el-cacique-salomon"][1]
      .evidenceClass,
    "corrección de identidad y título",
  );
  assert.equal(
    santanderClassicFolkloreEvidenceMatrix["lo-que-ensenan-las-cuevas"][2]
      .evidenceClass,
    "límite patrimonial contemporáneo",
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
    assert.equal(provenance.visualQa.finalImages, 12);
    assert.equal(Object.keys(provenance.items).length, 12);
    const urls = new Set();
    for (const record of records) {
      const media = santanderClassicFolkloreMedia[record.slug];
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
    assert.equal(urls.size, 12);
  },
);
