import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  assertTolimaMestizoResidualEvidenceMatrix,
  tolimaMestizoResidualEvidenceMatrix,
} from "../../editorial/tolima-mestizo-residual/evidence.mjs";
import { tolimaMestizoResidualMedia } from "../../editorial/tolima-mestizo-residual/media.mjs";
import records from "../../editorial/tolima-mestizo-residual/records.mjs";
import { reviewedTolimaMestizoResidualSlugs } from "../../editorial/tolima-mestizo-residual/universe.mjs";

const provenancePath = new URL(
  "../../editorial/tolima-mestizo-residual/provenance.json",
  import.meta.url,
);

function words(value) {
  return String(value || "").trim().split(/\s+/).filter(Boolean).length;
}

function digest(value) {
  return createHash("sha256").update(value).digest("hex");
}

test("los cuatro expedientes Tolima cumplen la metodología editorial", () => {
  assert.equal(records.length, 4);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(reviewedTolimaMestizoResidualSlugs),
  );
  for (const record of records) {
    assert.ok(words(record.mito) >= 300 && words(record.mito) <= 650);
    assert.ok(words(record.historia) >= 220 && words(record.historia) <= 600);
    assert.ok(words(record.versiones) >= 170 && words(record.versiones) <= 550);
    assert.ok(words(record.leccion) >= 8 && words(record.leccion) <= 22);
    assert.equal((record.leccion.match(/[.!?]+/g) || []).length, 1);
    assert.ok(words(record.similitudes) >= 80 && words(record.similitudes) <= 450);
    assert.ok(record.excerpt.length <= 180);
    assert.ok(record.seo_title.length <= 60);
    assert.ok(
      record.seo_description.length >= 120 &&
        record.seo_description.length <= 165,
    );
    assert.equal(record.tags.length, 4);
    assert.equal(record.focus_keywords.length, 5);
    const sources = [...record.keySources, ...record.sources];
    assert.ok(sources.length >= 5, `${record.slug}: ${sources.length} fuentes`);
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
      /editorial\/tolima-mestizo-residual\/evidence\.mjs/,
    );
    assert.match(
      record.researchNotes,
      /editorial\/tolima-mestizo-residual\/provenance\.json/,
    );
  }
});

test("diferencia las dos Patasolas y corrige Poira y Sombrerón", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));

  const patasola = bySlug.get("la-patasola");
  assert.match(patasola.mito, /mujer[^]+perra[^]+vaca negra/i);
  assert.match(patasola.mito, /mujer[^]+perra[^]+vaca negra/i);
  assert.match(patasola.mito, /hacha[^]+tusas/i);

  const norMica = bySlug.get("la-patasola-mixto");
  assert.match(norMica.historia, /Ricardo Rocha/i);
  assert.match(norMica.mito, /Ñor Mica[^]+San Juan[^]+oración del monte/i);
  assert.doesNotMatch(norMica.mito, /filas 431 a 435|reúne aquí/i);

  const poira = bySlug.get("el-poira");
  assert.match(poira.mito, /Poira[^]+muchacha/i);
  assert.doesNotMatch(poira.mito, /coerción y peligro sexual/i);
  assert.match(poira.historia, /Devia[^]+Rocha Castilla|Rocha Castilla[^]+Devia/i);

  const sombreron = bySlug.get("el-sombreron");
  assert.match(sombreron.mito, /sombrero negro[^]+pantorrillas/i);
  assert.match(sombreron.mito, /Sombrerón guatemalteco/i);
  assert.match(sombreron.mito, /María[^]+se retira/i);
});

test("la matriz cubre las cuatro rutas y sus límites", () => {
  assert.equal(assertTolimaMestizoResidualEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(tolimaMestizoResidualEvidenceMatrix)),
    new Set(reviewedTolimaMestizoResidualSlugs),
  );
  for (const claims of Object.values(tolimaMestizoResidualEvidenceMatrix)) {
    assert.equal(claims.length, 6);
    assert.ok(
      claims.some(({ evidenceClass }) =>
        [
          "descarte editorial",
          "límite de unificación",
          "desambiguación de personaje",
          "desambiguación internacional",
        ].includes(evidenceClass),
      ),
    );
  }
});

test("los prompts son ilustración digital full paper cut y dos escenas", () => {
  for (const record of records) {
    assert.notEqual(record.image_prompt_horizontal, record.image_prompt_vertical);
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
  "cada ficha tendrá dos imágenes OpenAI propias y aprobadas",
  { skip: !fs.existsSync(provenancePath) },
  () => {
    const provenance = JSON.parse(fs.readFileSync(provenancePath, "utf8"));
    assert.equal(provenance.provider, "openai");
    assert.equal(provenance.model, "gpt-image-2");
    assert.equal(provenance.quality, "high");
    assert.equal(provenance.visualQa.status, "approved");
    assert.equal(provenance.visualQa.finalImages, 8);
    assert.equal(Object.keys(provenance.items).length, 8);
    const urls = new Set();
    for (const record of records) {
      const media = tolimaMestizoResidualMedia[record.slug];
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
      }
    }
    assert.equal(urls.size, 8);
  },
);
