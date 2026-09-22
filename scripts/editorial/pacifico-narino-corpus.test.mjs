import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  assertPacificoNarinoEvidenceMatrix,
  pacificoNarinoEvidenceMatrix,
} from "../../editorial/pacifico-narino/evidence.mjs";
import { pacificoNarinoMedia } from "../../editorial/pacifico-narino/media.mjs";
import records from "../../editorial/pacifico-narino/records.mjs";
import { reviewedPacificoNarinoSlugs } from "../../editorial/pacifico-narino/universe.mjs";

const provenancePath = new URL(
  "../../editorial/pacifico-narino/provenance.json",
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

test("los siete expedientes cumplen rangos y estructura metodológica", () => {
  assert.equal(records.length, 7);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(reviewedPacificoNarinoSlugs),
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
      /editorial\/pacifico-narino\/evidence\.mjs/,
    );
    assert.match(
      record.researchNotes,
      /editorial\/pacifico-narino\/provenance\.json/,
    );
  }
});

test("retira las fusiones originales y conserva versiones incompatibles", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  // heredada: reescribir tras el cotejo
  assert.match(bySlug.get("chiles-y-cumbal").mito, /Embilpud[\s\S]+Embilquer/);
  // heredada: reescribir tras el cotejo
  assert.doesNotMatch(
    bySlug.get("chiles-y-cumbal").mito,
    /mandato del fogón|pacto de agua y fuego/i,
  );
  // heredada: reescribir tras el cotejo
  assert.doesNotMatch(
    bySlug.get("el-diablo-chivo-de-rumichaca").mito,
    /contrabando|sombra del viajero|pacto de frontera/i,
  );
  // heredada: reescribir tras el cotejo
  assert.match(
    bySlug.get("guagua-rayo").mito,
    /Juan y Telma[\s\S]+Otra memoria de Jenoy/,
  );
  // heredada: reescribir tras el cotejo
  assert.doesNotMatch(
    bySlug.get("guagua-rayo").mito,
    /Guagua Auca|violencia doméstica/i,
  );
  // heredada: reescribir tras el cotejo
  assert.match(
    bySlug.get("la-totuma-de-la-cocha").mito,
    /Pucara[\s\S]+Tamia[\s\S]+Munani[\s\S]+pilche/,
  );
  // heredada: reescribir tras el cotejo
  assert.match(
    bySlug.get("la-totuma-de-la-cocha").mito,
    /No reemplaza las historias directas del Refugio del Sol/,
  );
  // heredada: reescribir tras el cotejo
  assert.match(
    bySlug.get("taita-galeras").mito,
    /Jenoy[\s\S]+Virgen del Rosario/,
  );
  // heredada: reescribir tras el cotejo
  assert.doesNotMatch(
    bySlug.get("taita-galeras").mito,
    /cuatro ojos de agua|Telpis|barniz de Pasto/i,
  );
  // heredada: reescribir tras el cotejo
  assert.match(bySlug.get("el-padre-mera").mito, /milagro/i);
  // heredada: reescribir tras el cotejo
  assert.match(
    bySlug.get("el-padre-mera").mito,
    /marimbas, cununos, bombos y guás/i,
  );
  // heredada: reescribir tras el cotejo
  assert.doesNotMatch(
    bySlug.get("la-sirena-del-arco").mito,
    /Antonio|psicólog|asesinatos industriales/i,
  );
});

test("la matriz cubre cada ruta y distingue evidencia de exclusiones", () => {
  assert.equal(assertPacificoNarinoEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(pacificoNarinoEvidenceMatrix)),
    new Set(reviewedPacificoNarinoSlugs),
  );
  assert.equal(
    pacificoNarinoEvidenceMatrix["el-padre-mera"][1].evidenceClass,
    "memoria de violencia cultural",
  );
  assert.equal(
    pacificoNarinoEvidenceMatrix["la-totuma-de-la-cocha"][1]
      .evidenceClass,
    "frontera de versión",
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
    assert.equal(provenance.visualQa.finalImages, 14);
    assert.equal(Object.keys(provenance.items).length, 14);
    const urls = new Set();
    for (const record of records) {
      const media = pacificoNarinoMedia[record.slug];
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
    assert.equal(urls.size, 14);
  },
);
