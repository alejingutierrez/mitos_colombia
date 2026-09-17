import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  assertOrinoquiaMestizoFinalEvidenceMatrix,
  orinoquiaMestizoFinalEvidenceMatrix,
} from "../../editorial/orinoquia-mestizo-final/evidence.mjs";
import { orinoquiaMestizoFinalMedia } from "../../editorial/orinoquia-mestizo-final/media.mjs";
import records from "../../editorial/orinoquia-mestizo-final/records.mjs";
import { reviewedOrinoquiaMestizoFinalSlugs } from "../../editorial/orinoquia-mestizo-final/universe.mjs";

const provenancePath = new URL(
  "../../editorial/orinoquia-mestizo-final/provenance.json",
  import.meta.url,
);

function words(value) {
  return String(value || "").trim().split(/\s+/).filter(Boolean).length;
}

function digest(value) {
  return createHash("sha256").update(value).digest("hex");
}

test("los diecinueve expedientes cumplen la metodología editorial", () => {
  assert.equal(records.length, 19);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(reviewedOrinoquiaMestizoFinalSlugs),
  );
  for (const record of records) {
    assert.ok(words(record.mito) >= 300 && words(record.mito) <= 650, `${record.slug}: mito ${words(record.mito)}`);
    assert.ok(words(record.historia) >= 220 && words(record.historia) <= 600, `${record.slug}: historia ${words(record.historia)}`);
    assert.ok(words(record.versiones) >= 170 && words(record.versiones) <= 550, `${record.slug}: versiones ${words(record.versiones)}`);
    assert.ok(words(record.leccion) >= 8 && words(record.leccion) <= 22, `${record.slug}: lección ${words(record.leccion)}`);
    assert.equal((record.leccion.match(/[.!?]+/g) || []).length, 1);
    assert.ok(words(record.similitudes) >= 80 && words(record.similitudes) <= 450, `${record.slug}: similitudes ${words(record.similitudes)}`);
    assert.ok(record.excerpt.length <= 180);
    assert.ok(record.seo_title.length <= 60);
    assert.ok(record.seo_description.length >= 120 && record.seo_description.length <= 165, `${record.slug}: SEO ${record.seo_description.length}`);
    assert.equal(record.tags.length, 4);
    assert.equal(record.focus_keywords.length, 5);
    const sources = [...record.keySources, ...record.sources];
    assert.equal(sources.length, 8);
    assert.equal(new Set(sources.map(({ url }) => url)).size, 8);
    assert.ok(sources.every(({ url, summary, limitation }) => url.startsWith("https://") && summary && limitation));
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
    assert.match(record.researchNotes, /editorial\/orinoquia-mestizo-final\/evidence\.mjs/);
    assert.match(record.researchNotes, /editorial\/orinoquia-mestizo-final\/provenance\.json/);
  }
});

test("atribuye los diecisiete cuentos firmados y corrige límites críticos", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  for (const slug of reviewedOrinoquiaMestizoFinalSlugs) {
    const record = bySlug.get(slug);
    if (["el-tesoro-de-caribare", "la-bola-de-fuego"].includes(slug)) continue;
    assert.match(record.researchNotes, /LITERATURA FIRMADA/);
    assert.match(record.mito, /obra firmada|recreación literaria|serie literaria/i);
  }
  assert.match(bySlug.get("amanecer-llanero").researchNotes, /genealogía panindígena/i);
  assert.match(bySlug.get("los-delfines-dorados").researchNotes, /no se atribuyen a pueblos indígenas/i);
  assert.match(bySlug.get("el-brujo-de-la-costa-del-pauto").researchNotes, /No es consejo médico/i);
  assert.match(bySlug.get("leal-hasta-la-muerte").mito, /Calila y Dimna/i);
  assert.equal(bySlug.get("el-llano-cobra-sus-deudas").title, "El Llano cobra sus cuentas: hacienda y ruina");
  assert.match(bySlug.get("los-tres-luceros").researchNotes, /suicidio[\s\S]+no recompensa/i);
  assert.match(bySlug.get("madre-rio-o-mohana").researchNotes, /coerción[\s\S]+contra/i);
  assert.match(bySlug.get("el-domador-de-brujas").researchNotes, /Coerción sexual[\s\S]+pseudomedicina/i);
});

test("corrige Caribabare y preserva Bola de Fuego como variante llanera", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  const treasure = bySlug.get("el-tesoro-de-caribare");
  assert.match(treasure.title, /Caribabare/);
  assert.match(treasure.historia, /hacienda[\s\S]+1767[\s\S]+no prueba/i);
  assert.match(treasure.researchNotes, /forma documentada es Caribabare/i);

  const fire = bySlug.get("la-bola-de-fuego");
  assert.match(fire.mito, /luz errante[\s\S]+Candileja[\s\S]+tres llamas/i);
  assert.match(fire.researchNotes, /David Gamboa[\s\S]+Hato Valbuena[\s\S]+sin fusionarse/i);
  assert.match(fire.versiones, /rezar atrae[\s\S]+sin comprobar eficacia/i);
});

test("la matriz cubre diecinueve rutas y explicita límites", () => {
  assert.equal(assertOrinoquiaMestizoFinalEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(orinoquiaMestizoFinalEvidenceMatrix)),
    new Set(reviewedOrinoquiaMestizoFinalSlugs),
  );
  for (const claims of Object.values(orinoquiaMestizoFinalEvidenceMatrix)) {
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

test(
  "cada ficha tendrá dos imágenes OpenAI propias y aprobadas",
  { skip: !fs.existsSync(provenancePath) },
  () => {
    const provenance = JSON.parse(fs.readFileSync(provenancePath, "utf8"));
    assert.equal(provenance.provider, "openai");
    assert.equal(provenance.model, "gpt-image-2");
    assert.equal(provenance.quality, "high");
    assert.equal(provenance.visualQa.status, "approved");
    assert.equal(provenance.visualQa.finalImages, 38);
    assert.equal(Object.keys(provenance.items).length, 38);
    const urls = new Set();
    for (const record of records) {
      const media = orinoquiaMestizoFinalMedia[record.slug];
      assert.equal(media.provenanceStatus, "approved");
      for (const orientation of ["horizontal", "vertical"]) {
        assert.match(media[orientation], /^https:\/\//);
        assert.ok(!urls.has(media[orientation]));
        urls.add(media[orientation]);
        const item = provenance.items[`${record.slug}:${orientation}`];
        const prompt = orientation === "horizontal" ? record.image_prompt_horizontal : record.image_prompt_vertical;
        assert.equal(item.provider, "openai");
        assert.equal(item.model, "gpt-image-2");
        assert.equal(item.quality, "high");
        assert.equal(item.promptSha256, digest(prompt));
        assert.equal(item.imageUrl, media[orientation]);
        assert.equal(item.visualQa.status, "approved");
      }
    }
  },
);
