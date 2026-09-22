import { createHash } from "node:crypto";
import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  assertCesarMestizoResidualEvidenceMatrix,
  cesarMestizoResidualEvidenceMatrix,
} from "../../editorial/cesar-mestizo-residual/evidence.mjs";
import { cesarMestizoResidualMedia } from "../../editorial/cesar-mestizo-residual/media.mjs";
import records from "../../editorial/cesar-mestizo-residual/records.mjs";
import { reviewedCesarMestizoResidualSlugs } from "../../editorial/cesar-mestizo-residual/universe.mjs";

const provenancePath = new URL(
  "../../editorial/cesar-mestizo-residual/provenance.json",
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

test("los dos expedientes cumplen la metodología editorial", () => {
  assert.equal(records.length, 2);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(reviewedCesarMestizoResidualSlugs),
  );
  for (const record of records) {
    assert.ok(words(record.mito) >= 300 && words(record.mito) <= 650);
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
    // Eran 8 exactas: el reparto en bloque escrito como aserción. Tras la
    // búsqueda por mito se comprueba el piso del bloque mestizo, no una cuota.
    const sources = [...record.keySources, ...record.sources];
    assert.ok(sources.length >= 8, `${record.slug}: ${sources.length} fuentes`);
    assert.equal(new Set(sources.map(({ url }) => url)).size, sources.length);
    assert.ok(
      sources.every(
        ({ url, summary, limitation }) =>
          summary &&
          limitation &&
          (url.startsWith("https://") ||
            (url.startsWith("http://") && /s[óo]lo publica por http/i.test(limitation))),
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
      /editorial\/cesar-mestizo-residual\/evidence\.mjs/,
    );
    assert.match(
      record.researchNotes,
      /editorial\/cesar-mestizo-residual\/provenance\.json/,
    );
  }
});

// Las aserciones de antes fijaban el texto heredado, y el cotejo con la fuente
// desmintió una de ellas: «Quín Vásquez no es una versión de Montúfar» es falso,
// porque Quin Vásquez está dentro de ella, como el brujo y músico que no logra
// salvarlo. Se comprueba ahora lo que la fuente sostiene.
test("deshace la fusión del trinche y limpia la adopción del río", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  const montufar = bySlug.get("la-bruja-del-trinche");
  // El título visible no cambia hasta que el director decida (DECISIONES §A).
  assert.equal(montufar.title, "La Bruja del Trinche");
  // El trinche no está en el relato: sólo en la historia, que dice de dónde sale.
  assert.doesNotMatch(montufar.mito, /trinche/i);
  assert.match(montufar.historia, /trinche/i);
  // Quin Vásquez está dentro de la versión de Montúfar, no fuera.
  assert.match(montufar.mito, /Qu[ií]n Vásquez/);
  assert.doesNotMatch(montufar.versiones, /no es una versión/i);
  // Las correcciones de hecho del cotejo: Rincón Hondo, cama de tijera, mapaná.
  assert.match(montufar.mito, /Rincón Hondo/);
  assert.doesNotMatch(montufar.mito, /Rincón de Oro/);
  assert.match(montufar.mito, /tijera/);
  assert.match(montufar.mito, /mapaná/i);
  assert.match(montufar.similitudes, /Francisco el Hombre/);

  const sirena = bySlug.get("la-sirena-de-hurtado");
  assert.doesNotMatch(sirena.mito, /adopta|pacto|cobra su deseo/i);
  // La fecha de la escultura sigue en disputa, y se dice con sus dos cifras.
  assert.match(sirena.historia, /1998[\s\S]+1994|1994[\s\S]+1998/);
  assert.match(sirena.mito, /Jueves Santo/);
  assert.match(sirena.mito, /Cañaguate/);
  assert.match(sirena.similitudes, /Madre de Agua|Mohana/);
});

test("la matriz cubre las dos rutas y sus límites", () => {
  assert.equal(assertCesarMestizoResidualEvidenceMatrix(), true);
  assert.deepEqual(
    new Set(Object.keys(cesarMestizoResidualEvidenceMatrix)),
    new Set(reviewedCesarMestizoResidualSlugs),
  );
  for (const claims of Object.values(cesarMestizoResidualEvidenceMatrix)) {
    assert.ok(
      claims.some(({ evidenceClass }) => evidenceClass === "límite documental"),
    );
    assert.ok(
      claims.some(({ evidenceClass }) => evidenceClass === "comparación directa"),
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
    assert.equal(provenance.visualQa.finalImages, 4);
    assert.equal(Object.keys(provenance.items).length, 4);
    const urls = new Set();
    for (const record of records) {
      const media = cesarMestizoResidualMedia[record.slug];
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
