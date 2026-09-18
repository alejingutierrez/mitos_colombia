import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  assertVariosMestizoFinalEvidenceMatrix,
  variosMestizoFinalEvidenceMatrix,
} from "../../editorial/varios-mestizo-final/evidence.mjs";
import { variosMestizoFinalMedia } from "../../editorial/varios-mestizo-final/media.mjs";
import records from "../../editorial/varios-mestizo-final/records.mjs";
import { reviewedVariosMestizoFinalSlugs } from "../../editorial/varios-mestizo-final/universe.mjs";

const provenancePath = new URL(
  "../../editorial/varios-mestizo-final/provenance.json",
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

test("los tres expedientes cumplen la metodología editorial", () => {
  assert.equal(records.length, 3);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(reviewedVariosMestizoFinalSlugs),
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
    assert.equal(sources.length, 8);
    assert.equal(new Set(sources.map(({ url }) => url)).size, 8);
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
      /editorial\/varios-mestizo-final\/evidence\.mjs/,
    );
    assert.match(
      record.researchNotes,
      /editorial\/varios-mestizo-final\/provenance\.json/,
    );
  }
});

test("restaura procedencias y retira los tres núcleos inventados", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));

  const viudita = bySlug.get("la-viudita");
  assert.equal(viudita.category_path, "Andina > Nariño > Mestizo");
  assert.match(viudita.mito, /Pasto[\s\S]+cementerio/i);
  assert.match(
    viudita.mito,
    /Clemente Vidal, Clara y Del Castillo[\s\S]+sin respaldo[\s\S]+se retiran/i,
  );
  assert.match(viudita.versiones, /Viuda Alegre[\s\S]+separada/i);

  const judio = bySlug.get("el-judio-errante");
  assert.equal(judio.category_path, "Andina > Boyacá > Mestizo");
  assert.match(judio.mito, /leyenda cristiana de origen antijudío/i);
  assert.match(judio.historia, /Galit Hasan-Rokem/i);
  assert.match(
    judio.mito,
    /inventaba celos hacia María Magdalena[\s\S]+Ninguna[\s\S]+sostiene esas identidades[\s\S]+Se retiran/i,
  );

  const bus = bySlug.get("el-bus-fantasma");
  assert.equal(bus.category_path, "Varios > Varios > Mestizo");
  assert.match(bus.mito, /carretera de montaña[\s\S]+ruta G66/i);
  assert.match(bus.historia, /Marcel Laforet no apareció/i);
  assert.match(
    bus.mito,
    /Marcel Laforet[\s\S]+manuscrito de tinta plateada[\s\S]+Ninguna fuente[\s\S]+los retira/i,
  );
});

test("la matriz cubre tres rutas y hace explícitos sus límites", () => {
  assert.equal(assertVariosMestizoFinalEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(variosMestizoFinalEvidenceMatrix)),
    new Set(reviewedVariosMestizoFinalSlugs),
  );
  for (const claims of Object.values(variosMestizoFinalEvidenceMatrix)) {
    assert.ok(claims.length >= 5);
    assert.ok(
      claims.some(({ evidenceClass }) =>
        ["límite documental", "descarte editorial"].includes(evidenceClass),
      ),
    );
  }
});

test("los prompts son full illustration digital paper cut y dos escenas", () => {
  for (const record of records) {
    assert.notEqual(record.image_prompt_horizontal, record.image_prompt_vertical);
    for (const prompt of [
      record.image_prompt_horizontal,
      record.image_prompt_vertical,
    ]) {
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
    assert.equal(provenance.visualQa.finalImages, 6);
    assert.equal(Object.keys(provenance.items).length, 6);
    const urls = new Set();
    for (const record of records) {
      const media = variosMestizoFinalMedia[record.slug];
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
        assert.equal(item.promptSha256, digest(prompt));
        assert.equal(item.imageUrl, media[orientation]);
        assert.equal(item.visualQa.status, "approved");
      }
    }
  },
);
