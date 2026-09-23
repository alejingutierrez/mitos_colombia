import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  andinaLegacyEditorialResidualEvidenceMatrix,
  assertAndinaLegacyEditorialResidualEvidenceMatrix,
} from "../../editorial/andina-legacy-editorial-residual/evidence.mjs";
import { andinaLegacyEditorialResidualMedia } from "../../editorial/andina-legacy-editorial-residual/media.mjs";
import records from "../../editorial/andina-legacy-editorial-residual/records.mjs";
import { reviewedAndinaLegacyEditorialResidualSlugs } from "../../editorial/andina-legacy-editorial-residual/universe.mjs";

const provenancePath = new URL(
  "../../editorial/andina-legacy-editorial-residual/provenance.json",
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
    new Set(reviewedAndinaLegacyEditorialResidualSlugs),
  );
  for (const record of records) {
    assert.ok(words(record.mito) >= (record.relatoCorto ? 70 : 300) && words(record.mito) <= 650);
    assert.ok(words(record.historia) >= 220 && words(record.historia) <= 600);
    assert.ok(
      words(record.versiones) >= 170 && words(record.versiones) <= 550,
    );
    assert.ok(words(record.leccion) >= 8 && words(record.leccion) <= 22);
    assert.equal((record.leccion.match(/[.!?]+/g) || []).length, 1);
    assert.ok(
      words(record.similitudes) >= 80 && words(record.similitudes) <= 450,
    );
    assert.ok(record.excerpt.length <= 180);
    assert.ok(record.seo_title.length <= 60);
    assert.ok(
      record.seo_description.length >= 120 &&
        record.seo_description.length <= 165,
    );
    assert.equal(record.tags.length, 4);
    assert.equal(record.focus_keywords.length, 5);
    const sources = [...record.keySources, ...record.sources];
    assert.ok(sources.length >= (record.fuentesAgotadas ? 3 : 5), `${record.slug}: ${sources.length} fuentes`);
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
      /editorial\/andina-legacy-editorial-residual\/evidence\.mjs/,
    );
    assert.match(
      record.researchNotes,
      /editorial\/andina-legacy-editorial-residual\/provenance\.json/,
    );
  }
});

test("separa archivo, fábula editorial y resistencia documentada", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  const catalina = bySlug.get("catalina-la-napanga");
  // heredada: reescribir tras el cotejo
  assert.match(catalina.historia, /Valencia Calle[\s\S]+1591/i);
  // heredada: reescribir tras el cotejo
  assert.match(catalina.versiones, /Lorenzo de Paz/i);
  // heredada: reescribir tras el cotejo
  assert.doesNotMatch(catalina.historia, /adulterio comprobado/i);

  const hada = bySlug.get("el-hada-de-los-canaverales");
  // heredada: reescribir tras el cotejo
  assert.match(hada.historia, /fábula contemporánea/i);
  // reescrita 2026-09-22: el texto ya no cuenta el proyecto
  assert.doesNotMatch(hada.historia, /la ficha|se retiran?\b|no hay respaldo|la versión anterior|cantera de/i);
  // reescrita 2026-09-22: el texto ya no cuenta el proyecto
  assert.doesNotMatch(hada.versiones, /la ficha|se retiran?\b|no hay respaldo|la versión anterior|cantera de/i);
  // heredada: reescribir tras el cotejo
  assert.doesNotMatch(hada.historia, /tradición ancestral|leyenda ancestral/i);

  const quinunchu = bySlug.get("el-silbo-de-quinunchu");
  // heredada: reescribir tras el cotejo
  assert.match(quinunchu.mito, /Guacá[\s\S]+Abibe/i);
  // heredada: reescribir tras el cotejo
  assert.match(quinunchu.historia, /Cieza de León/);
  // heredada: reescribir tras el cotejo
  assert.match(
    quinunchu.versiones,
    /Quinunchú/,
  );
  // heredada: reescribir tras el cotejo
  assert.match(
    quinunchu.mito,
    /Quinunchú/,
  );
});

test("la matriz cubre las tres rutas y sus límites", () => {
  assert.equal(assertAndinaLegacyEditorialResidualEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(andinaLegacyEditorialResidualEvidenceMatrix)),
    new Set(reviewedAndinaLegacyEditorialResidualSlugs),
  );
  for (const claims of Object.values(
    andinaLegacyEditorialResidualEvidenceMatrix,
  )) {
    assert.ok(claims.length >= 5);
    assert.ok(
      claims.some(({ evidenceClass }) =>
        [
          "límite documental",
          "ausencia declarada de tradición",
          "descarte editorial",
        ].includes(evidenceClass),
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
      const media = andinaLegacyEditorialResidualMedia[record.slug];
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
