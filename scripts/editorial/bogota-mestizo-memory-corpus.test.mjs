import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  assertBogotaMestizoMemoryEvidenceMatrix,
  bogotaMestizoMemoryEvidenceMatrix,
} from "../../editorial/bogota-mestizo-memoria/evidence.mjs";
import { bogotaMestizoMemoryMedia } from "../../editorial/bogota-mestizo-memoria/media.mjs";
import records from "../../editorial/bogota-mestizo-memoria/records.mjs";
import { reviewedBogotaMestizoMemorySlugs } from "../../editorial/bogota-mestizo-memoria/universe.mjs";

const provenancePath = new URL(
  "../../editorial/bogota-mestizo-memoria/provenance.json",
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
    new Set(reviewedBogotaMestizoMemorySlugs),
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
    // Piso del bloque mestizo: 8 por ficha, no una cuota fija.
    const piso = 8;
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
      /editorial\/bogota-mestizo-memoria\/evidence\.mjs/,
    );
    assert.match(
      record.researchNotes,
      /editorial\/bogota-mestizo-memoria\/provenance\.json/,
    );
  }
});

// Las aserciones de antes fijaban frases del texto heredado —«ninguna ficha
// deduce una condición clínica», «1584 … 1775 … 1960»—, y la reescritura sobre
// el primario las desmintió: el Mono no es de 1775 ni está en el Museo
// Colonial. Se comprueba ahora lo que el cotejo estableció, ficha por ficha.
test("corrige diagnósticos, fusiones, cronología y territorio heredados", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  const ficha = (slug) => bySlug.get(slug);
  // El Mono: el oidor de los 1580 y el Museo Nacional de las tres fuentes de época.
  assert.match(ficha("el-mono-de-la-pila").historia, /Pérez de Salazar/);
  assert.match(ficha("el-mono-de-la-pila").historia, /Museo Nacional/);
  // El Puente del Común: la inscripción de 1792, Esquiaqui y Chía, no Bogotá.
  assert.equal(ficha("el-diablo-del-puente-del-comun").category_path, "Andina > Varios > Mestizo");
  assert.match(ficha("el-diablo-del-puente-del-comun").historia, /1792/);
  assert.match(ficha("el-diablo-del-puente-del-comun").historia, /Chía[\s\S]+Esquiaqui|Esquiaqui[\s\S]+Chía/);
  // La Calle del Fantasma es un pacto con informante nombrada y 665 piedras.
  assert.match(ficha("los-fantasmas-de-la-candelaria").historia, /Carmen Domínguez/);
  assert.match(ficha("los-fantasmas-de-la-candelaria").mito, /665|seiscientas sesenta y cinco/i);
  // La crónica de 1924 y el nombre que ella misma da.
  assert.match(ficha("la-loca-margarita").historia, /1924[\s\S]+Mogollón|Mogollón[\s\S]+1924/);
  // La cadena libro → ficha distrital → televisión se declara como una sola mano.
  assert.match(ficha("el-loco-arias").historia, /Asdrúbal López Orozco/);
  assert.match(ficha("el-loco-arias").historia, /Canal Capital/);
  // El abogado se condenó por indicios: la culpa no se da por resuelta.
  assert.match(ficha("el-enigmatico-abogado").historia, /indicios/i);
  // El tranvía celestial es desenlace añadido, no del registro.
  assert.match(ficha("el-bobo-del-tranvia").versiones, /tranvía celestial/i);
  assert.match(ficha("la-leyenda-del-santuario-de-monserrate").historia, /1656/);
});

test("la matriz cubre las ocho rutas y sus límites", () => {
  assert.equal(assertBogotaMestizoMemoryEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(bogotaMestizoMemoryEvidenceMatrix)),
    new Set(reviewedBogotaMestizoMemorySlugs),
  );
  assert.equal(
    bogotaMestizoMemoryEvidenceMatrix["la-loca-margarita"][2]
      .evidenceClass,
    "biografía tardía en disputa",
  );
  assert.equal(
    bogotaMestizoMemoryEvidenceMatrix[
      "el-diablo-del-puente-del-comun"
    ][2].evidenceClass,
    "corrección territorial oficial",
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
      const media = bogotaMestizoMemoryMedia[record.slug];
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
