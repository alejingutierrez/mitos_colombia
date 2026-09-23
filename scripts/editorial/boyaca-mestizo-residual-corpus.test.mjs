import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  boyacaMestizoResidualEvidenceMatrix,
  assertBoyacaMestizoResidualEvidenceMatrix,
} from "../../editorial/boyaca-mestizo-residual/evidence.mjs";
import records from "../../editorial/boyaca-mestizo-residual/records.mjs";

const provenancePath = new URL(
  "../../editorial/boyaca-mestizo-residual/provenance.json",
  import.meta.url,
);

function words(value) {
  return String(value || "").trim().split(/\s+/).filter(Boolean).length;
}

test("el expediente cumple la metodología editorial", () => {
  assert.equal(records.length, 1);
  const [record] = records;
  assert.equal(record.slug, "el-tesoro-de-buzaga");
  assert.ok((record.relatoCorto ? words(record.mito) >= 70 : words(record.mito) >= 300) && words(record.mito) <= 650);
  assert.ok(words(record.historia) >= 220 && words(record.historia) <= 600);
  assert.ok(words(record.versiones) >= 170 && words(record.versiones) <= 550);
  assert.ok(words(record.leccion) >= 8 && words(record.leccion) <= 22);
  assert.equal((record.leccion.match(/[.!?]+/g) || []).length, 1);
  assert.ok(words(record.similitudes) >= 80 && words(record.similitudes) <= 450);
  assert.ok(record.excerpt.length <= 180);
  assert.ok(record.seo_title.length <= 60);
  assert.ok(record.seo_description.length >= 120 && record.seo_description.length <= 165);
  assert.equal(record.tags.length, 4);
  assert.equal(record.focus_keywords.length, 5);
  const sources = [...record.keySources, ...record.sources];
  assert.ok(sources.length >= 5, `${sources.length} fuentes`);
  assert.equal(new Set(sources.map(({ url }) => url)).size, sources.length);
  assert.ok(sources.every(({ url, summary, limitation }) => summary && limitation && (url.startsWith("https://") || (url.startsWith("http://") && /s[óo]lo publica por http/i.test(limitation)))));
  assert.match(record.researchNotes, /boyaca-mestizo-residual\/evidence\.mjs/);
  assert.match(record.researchNotes, /boyaca-mestizo-residual\/provenance\.json/);
});

test("unifica cinco filas y elimina la segunda versión inventada", () => {
  const [record] = records;
  assert.match(record.historia, /Otero D'Costa[\s\S]+Villa Posse/);
  assert.match(record.historia, /Enrique Otero D'Costa/);
  assert.match(record.versiones, /mohán[\s\S]+diablo/);
  assert.match(record.versiones, /Ocampo López/);
  assert.match(record.historia, /valle de Iza/);
});

test("la matriz declara autoría, recepción y límites", () => {
  assert.equal(assertBoyacaMestizoResidualEvidenceMatrix(), true);
  assert.deepEqual(Object.keys(boyacaMestizoResidualEvidenceMatrix), ["el-tesoro-de-buzaga"]);
  const classes = new Set(boyacaMestizoResidualEvidenceMatrix["el-tesoro-de-buzaga"].map(({ evidenceClass }) => evidenceClass));
  assert.ok(classes.has("núcleo literario atribuido"));
  assert.ok(classes.has("límite documental"));
});

test("los prompts son dos escenas de ilustración digital full paper cut", () => {
  const [record] = records;
  assert.notEqual(record.image_prompt_horizontal, record.image_prompt_vertical);
  for (const prompt of [record.image_prompt_horizontal, record.image_prompt_vertical]) {
    assert.match(prompt, /2D full paper cut/i);
    assert.match(prompt, /paper quilling/i);
    assert.match(prompt, /acabado gr[aá]fico plano/i);
    assert.match(prompt, /sin fotograf[ií]a/i);
    assert.match(prompt, /fibras reales/i);
    assert.match(prompt, /objeto físico/i);
    assert.match(prompt, /maqueta/i);
    assert.match(prompt, /diorama/i);
    assert.match(prompt, /CGI|render 3D/i);
  }
});

test("la pareja visual solo cuenta con procedencia aprobada", { skip: !fs.existsSync(provenancePath) }, () => {
  const provenance = JSON.parse(fs.readFileSync(provenancePath, "utf8"));
  assert.equal(provenance.provider, "openai");
  assert.equal(provenance.model, "gpt-image-2");
  assert.equal(provenance.quality, "high");
  assert.equal(provenance.visualQa.status, "approved");
  assert.equal(provenance.visualQa.finalImages, 2);
});
