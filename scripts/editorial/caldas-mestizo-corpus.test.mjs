import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  assertCaldasMestizoEvidenceMatrix,
  caldasMestizoEvidenceMatrix,
} from "../../editorial/caldas-mestizo/evidence.mjs";
import { caldasMestizoMedia } from "../../editorial/caldas-mestizo/media.mjs";
import records from "../../editorial/caldas-mestizo/records.mjs";
import { reviewedCaldasMestizoSlugs } from "../../editorial/caldas-mestizo/universe.mjs";

const provenancePath = new URL(
  "../../editorial/caldas-mestizo/provenance.json",
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

test("los nueve expedientes cumplen rangos y estructura metodológica", () => {
  assert.equal(records.length, 9);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(reviewedCaldasMestizoSlugs),
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
      /editorial\/caldas-mestizo\/evidence\.mjs/,
    );
    assert.match(
      record.researchNotes,
      /editorial\/caldas-mestizo\/provenance\.json/,
    );
  }
});

test("corrige fusiones, autorías, nombres y atribuciones heredadas", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  assert.equal(
    bySlug.get("cuento-de-animas").category_path,
    "Andina > Santander > Mestizo",
  );
  // heredada: reescribir tras el cotejo
  assert.match(
    bySlug.get("cuento-de-animas").mito,
    /Laurián[\s\S]+Ñuá Ulogia/,
  );
  // heredada: reescribir tras el cotejo
  assert.match(
    bySlug.get("de-frente-al-sol").mito,
    /1592[\s\S]+Rodrigo/,
  );
  // heredada: reescribir tras el cotejo
  assert.match(
    bySlug.get("el-aserrador").mito,
    /Rafael Toro[\s\S]+Uñón[\s\S]+fiera/,
  );
  // heredada: reescribir tras el cotejo
  assert.match(
    bySlug.get("el-cacique-cumanday").historia,
    /conjetural|conjetura/i,
  );
  // heredada: reescribir tras el cotejo
  assert.match(
    bySlug.get("el-coco").mito,
    /incorpórea[\s\S]+calabazo[\s\S]+Rubén Bayer/,
  );
  // heredada: reescribir tras el cotejo
  assert.match(
    bySlug.get("el-cole-cabuya").mito,
    /Llanogrande[\s\S]+Pasmí[\s\S]+La Loma/,
  );
  // heredada: reescribir tras el cotejo
  assert.doesNotMatch(
    bySlug.get("el-viejo-del-costal").mito,
    /busca redención|se alimenta del miedo/i,
  );
  // heredada: reescribir tras el cotejo
  assert.match(
    bySlug.get("in-illo-tempore").mito,
    /Jerónimo de Vezga[\s\S]+Jorge Robledo[\s\S]+1546/,
  );
  // heredada: reescribir tras el cotejo
  assert.match(
    bySlug.get("las-brujas").versiones,
    /Aspasia[\s\S]+no es una versión de Clementina/,
  );
});

test("la matriz cubre las nueve rutas y sus límites", () => {
  assert.equal(assertCaldasMestizoEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(caldasMestizoEvidenceMatrix)),
    new Set(reviewedCaldasMestizoSlugs),
  );
  assert.equal(
    caldasMestizoEvidenceMatrix["el-cacique-cumanday"][2]
      .evidenceClass,
    "límite de atribución",
  );
  assert.equal(
    caldasMestizoEvidenceMatrix["las-brujas"][1].evidenceClass,
    "desfusión de obras",
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
    assert.equal(provenance.visualQa.finalImages, 18);
    assert.equal(Object.keys(provenance.items).length, 18);
    const urls = new Set();
    for (const record of records) {
      const media = caldasMestizoMedia[record.slug];
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
    assert.equal(urls.size, 18);
  },
);
