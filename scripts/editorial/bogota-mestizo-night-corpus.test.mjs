import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  assertBogotaMestizoNightEvidenceMatrix,
  bogotaMestizoNightEvidenceMatrix,
} from "../../editorial/bogota-mestizo-nocturno/evidence.mjs";
import { bogotaMestizoNightMedia } from "../../editorial/bogota-mestizo-nocturno/media.mjs";
import records from "../../editorial/bogota-mestizo-nocturno/records.mjs";
import { reviewedBogotaMestizoNightSlugs } from "../../editorial/bogota-mestizo-nocturno/universe.mjs";

const provenancePath = new URL(
  "../../editorial/bogota-mestizo-nocturno/provenance.json",
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
    new Set(reviewedBogotaMestizoNightSlugs),
  );
  for (const record of records) {
    assert.ok(
      words(record.mito) >= (record.relatoCorto ? 70 : 300) && words(record.mito) <= 650,
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
    // Piso del bloque mestizo: 8 por ficha reescrita. Las dos bloqueadas por
    // falta de registro consultable siguen en el reparto heredado, con el de 5.
    const piso = record.fuentesAgotadas ? 3 : 8;
    assert.ok(sources.length >= piso, `${record.slug}: ${sources.length} fuentes, piso ${piso}`);
    assert.equal(new Set(sources.map(({ url }) => url)).size, sources.length);
    // `http` se admite sólo cuando el servidor no ofrece `https` —SciELO
    // Colombia— y la fuente lo declara en su límite (spec §8).
    assert.ok(
      sources.every(
        ({ url, summary, limitation }) =>
          summary &&
          limitation &&
          (url.startsWith("https://") ||
            (url.startsWith("http://") && /s[óo]lo publica por http/i.test(limitation))),
      ),
      `${record.slug}: una fuente va sin resumen, sin límite, o en http sin declararlo`,
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
      /editorial\/bogota-mestizo-nocturno\/evidence\.mjs/,
    );
    assert.match(
      record.researchNotes,
      /editorial\/bogota-mestizo-nocturno\/provenance\.json/,
    );
  }
});

// Las aserciones de antes fijaban frases del texto heredado —el hábito blanco,
// don Juan de Guevara como dueño, Guadalupe— que el cotejo con el primario
// retiró. Se comprueba ahora lo que la fuente sostiene; las dos fichas
// bloqueadas conservan su texto y sus aserciones.
test("restaura fuentes y deshace las fusiones heredadas", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  const ficha = (slug) => bySlug.get(slug);
  // El expediente de 1828 y el auto del 3 de noviembre.
  assert.match(ficha("el-hombre-del-farol").mito, /Acevedo|Acebedo/);
  assert.match(ficha("el-hombre-del-farol").historia, /3 de noviembre|tres de noviembre/i);
  // El toro pasa de fecha inestable a placa.
  assert.match(ficha("el-toro-en-el-ascensor").historia, /SW\s?1012[\s\S]*1985|1985[\s\S]*SW\s?1012/);
  // El venado: El Boquerón, la crónica de 1896, y Guadalupe sólo como divulgación.
  assert.match(ficha("el-venado-de-oro").mito, /Boquerón/);
  assert.match(ficha("el-venado-de-oro").historia, /1896/);
  assert.doesNotMatch(ficha("el-venado-de-oro").mito, /Guadalupe/);
  // La carta ficticia lleva firma y fecha, y se cuenta como composición.
  assert.match(ficha("la-bruja-del-tranvia").historia, /Revetés[\s\S]*2004|2004[\s\S]*Revetés/);
  // La mujer de negro se lleva el ramo: sólo caen pétalos. Y es un guion.
  assert.match(ficha("la-monja-de-las-rosas").mito, /pétalos/i);
  assert.doesNotMatch(ficha("la-monja-de-las-rosas").mito, /hábito blanco/i);
  assert.match(ficha("la-monja-de-las-rosas").historia, /guion[\s\S]*Ottinger|Ottinger[\s\S]*guion/i);
  // Guevara sale del relato y queda como atribución del Bogotálogo en versiones.
  assert.match(ficha("la-mula-herrada").historia, /Bayona Posada/);
  assert.doesNotMatch(ficha("la-mula-herrada").mito, /Guevara/);
  assert.match(ficha("la-mula-herrada").versiones, /Guevara/);
  assert.match(ficha("la-monja-vidente-y-el-taxista").versiones, /Tuluá/);
  assert.match(ficha("los-esqueletos-caminantes").historia, /López Orozco/);
});

test("la matriz cubre las ocho rutas y sus límites", () => {
  assert.equal(assertBogotaMestizoNightEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(bogotaMestizoNightEvidenceMatrix)),
    new Set(reviewedBogotaMestizoNightSlugs),
  );
  assert.equal(
    bogotaMestizoNightEvidenceMatrix["la-bruja-del-tranvia"][0]
      .evidenceClass,
    "ficción atribuida y fechada",
  );
  assert.equal(
    bogotaMestizoNightEvidenceMatrix["los-esqueletos-caminantes"][2]
      .evidenceClass,
    "corrección ética institucional",
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
      const media = bogotaMestizoNightMedia[record.slug];
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
