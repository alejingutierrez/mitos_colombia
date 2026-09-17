import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import { caribeMestizoFinalCatalog } from "../../editorial/caribe-mestizo-final/catalog.mjs";
import {
  assertCaribeMestizoFinalEvidenceMatrix,
  caribeMestizoFinalEvidenceMatrix,
} from "../../editorial/caribe-mestizo-final/evidence.mjs";
import { caribeMestizoFinalMedia } from "../../editorial/caribe-mestizo-final/media.mjs";
import records from "../../editorial/caribe-mestizo-final/records.mjs";
import { reviewedCaribeMestizoFinalSlugs } from "../../editorial/caribe-mestizo-final/universe.mjs";

const provenancePath = new URL("../../editorial/caribe-mestizo-final/provenance.json", import.meta.url);
const words = (value) => String(value || "").trim().split(/\s+/).filter(Boolean).length;
const digest = (value) => createHash("sha256").update(value).digest("hex");

test("los setenta expedientes cumplen la metodología editorial", () => {
  assert.equal(records.length, 70);
  assert.deepEqual(new Set(records.map(({ slug }) => slug)), new Set(reviewedCaribeMestizoFinalSlugs));
  for (const record of records) {
    assert.ok(words(record.mito) >= 300 && words(record.mito) <= 650, `${record.slug}: mito ${words(record.mito)}`);
    assert.ok(words(record.historia) >= 220 && words(record.historia) <= 600, `${record.slug}: historia ${words(record.historia)}`);
    assert.ok(words(record.versiones) >= 170 && words(record.versiones) <= 550, `${record.slug}: versiones ${words(record.versiones)}`);
    assert.ok(words(record.leccion) >= 8 && words(record.leccion) <= 22, `${record.slug}: lección`);
    assert.equal((record.leccion.match(/[.!?]+/g) || []).length, 1);
    assert.ok(words(record.similitudes) >= 80 && words(record.similitudes) <= 450, `${record.slug}: similitudes`);
    assert.ok(record.excerpt.length <= 180);
    assert.ok(record.seo_title.length <= 60);
    assert.ok(record.seo_description.length >= 120 && record.seo_description.length <= 165, `${record.slug}: SEO ${record.seo_description.length}`);
    assert.equal(record.tags.length, 4);
    assert.equal(record.focus_keywords.length, 5);
    const sources = [...record.keySources, ...record.sources];
    assert.equal(sources.length, 8);
    assert.equal(new Set(sources.map(({ url }) => url)).size, 8);
    assert.ok(sources.every(({ url, summary, limitation }) => url.startsWith("https://") && summary && limitation));
    assert.equal(record.content, [
      `Mito\n${record.mito}`,
      `Historia\n${record.historia}`,
      `Versiones\n${record.versiones}`,
      `Lección\n${record.leccion}`,
      `Similitudes\n${record.similitudes}`,
    ].join("\n\n"));
    assert.match(record.researchNotes, /editorial\/caribe-mestizo-final\/evidence\.mjs/);
    assert.match(record.researchNotes, /editorial\/caribe-mestizo-final\/provenance\.json/);
  }
});

test("restaura corpus y hace visible la brecha de trece rutas", () => {
  const counts = Object.fromEntries([...new Set(caribeMestizoFinalCatalog.map(({ group }) => group))].map((group) => [group, caribeMestizoFinalCatalog.filter((entry) => entry.group === group).length]));
  assert.deepEqual(counts, { martinez: 33, zapata: 15, list: 3, unresolved: 13, buenaventura: 1, otero: 3, morgan: 1, francisco: 1 });
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  for (const entry of caribeMestizoFinalCatalog.filter(({ group }) => group === "unresolved")) {
    assert.match(bySlug.get(entry.slug).researchNotes, /BRECHA DOCUMENTAL EXPLÍCITA/i);
    assert.match(bySlug.get(entry.slug).historia, /no apareció|no localizó/i);
  }
  assert.match(bySlug.get("conejo-y-los-hijos-de-tia-tigra").mito, /siete hijos/i);
  assert.match(bySlug.get("tio-conejo-zapatero").historia, /Pacífico/i);
  assert.match(bySlug.get("el-tesoro-de-morgan").historia, /1957/);
  assert.match(bySlug.get("francisco-el-hombre").versiones, /Credo|oración/i);
});

test("la matriz cubre las setenta rutas y explicita límites", () => {
  assert.equal(assertCaribeMestizoFinalEvidenceMatrix(), true);
  assert.deepEqual(new Set(Object.keys(caribeMestizoFinalEvidenceMatrix)), new Set(reviewedCaribeMestizoFinalSlugs));
  for (const claims of Object.values(caribeMestizoFinalEvidenceMatrix)) {
    assert.ok(claims.length >= 5);
    assert.ok(claims.some(({ evidenceClass }) => evidenceClass === "límite documental"));
    assert.ok(claims.some(({ evidenceClass }) => evidenceClass === "descarte editorial"));
  }
});

test("los prompts son full illustration digital paper cut y escenas distintas", () => {
  for (const record of records) {
    assert.notEqual(record.image_prompt_horizontal, record.image_prompt_vertical);
    for (const prompt of [record.image_prompt_horizontal, record.image_prompt_vertical]) {
      assert.match(prompt, /full illustration/i);
      assert.match(prompt, /2D full paper cut/i);
      assert.match(prompt, /paper quilling/i);
      assert.match(prompt, /acabado gr[aá]fico plano/i);
      assert.match(prompt, /sin volumen físico/i);
      assert.match(prompt, /sin fotograf[ií]a/i);
      assert.match(prompt, /fibras reales/i);
      assert.match(prompt, /objeto físico/i);
      assert.match(prompt, /maqueta/i);
      assert.match(prompt, /diorama/i);
      assert.match(prompt, /CGI|render 3D/i);
    }
  }
});

test("cada ficha tendrá dos imágenes OpenAI propias y aprobadas", { skip: !fs.existsSync(provenancePath) }, () => {
  const provenance = JSON.parse(fs.readFileSync(provenancePath, "utf8"));
  assert.equal(provenance.provider, "openai");
  assert.equal(provenance.model, "gpt-image-2");
  assert.equal(provenance.quality, "high");
  assert.equal(provenance.visualQa.status, "approved");
  assert.equal(provenance.visualQa.finalImages, 140);
  assert.equal(Object.keys(provenance.items).length, 140);
  const urls = new Set();
  for (const record of records) {
    const media = caribeMestizoFinalMedia[record.slug];
    assert.equal(media.provenanceStatus, "approved");
    for (const orientation of ["horizontal", "vertical"]) {
      const url = media[orientation];
      assert.match(url, /^https:\/\//);
      assert.ok(!urls.has(url));
      urls.add(url);
      const item = provenance.items[`${record.slug}:${orientation}`];
      const prompt = orientation === "horizontal" ? record.image_prompt_horizontal : record.image_prompt_vertical;
      assert.equal(item.provider, "openai");
      assert.equal(item.model, "gpt-image-2");
      assert.equal(item.quality, "high");
      assert.equal(item.promptSha256, digest(prompt));
      assert.equal(item.imageUrl, url);
      assert.equal(item.visualQa.status, "approved");
    }
  }
});
