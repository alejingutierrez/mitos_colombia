import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import { chimilaCommunityPage } from "../../editorial/chimila/community.mjs";
import { chimilaMedia } from "../../editorial/chimila/media.mjs";
import records from "../../editorial/chimila/records.mjs";
import {
  canonicalChimilaSlugs,
  chimilaEditorialDecisions,
} from "../../editorial/chimila/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

// Fuente primaria de 74 y 90 palabras respectivamente: ver el LEEME de
// `content/editorial/chimila/primarias/`.
const RELATOS_CORTOS = {
  "primeras-guerras": true,
  "el-castigo": true,
};

test("los veintitrés expedientes Ette cumplen la metodología editorial", () => {
  assert.equal(records.length, 23);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalChimilaSlugs),
  );
  for (const record of records) {
    // Dos relatos del corpus de 1945 son tan breves que llegar al mínimo de 300
    // palabras sólo se consigue repitiendo lo mismo con otras palabras. Se
    // publican cortos a propósito, con la razón dicha en su capa de Versiones.
    const minimo = RELATOS_CORTOS[record.slug] ? 90 : 300;
    assert.ok(
      words(record.mito) >= minimo && words(record.mito) <= 650,
      `${record.slug}: ${words(record.mito)} palabras de relato`,
    );
    assert.ok(words(record.historia) >= 220 && words(record.historia) <= 600);
    assert.ok(words(record.versiones) >= 170 && words(record.versiones) <= 550);
    assert.ok(words(record.leccion) >= 8 && words(record.leccion) <= 22);
    assert.equal((record.leccion.match(/[.!?]+/g) || []).length, 1);
    assert.ok(
      words(record.similitudes) >= 150 && words(record.similitudes) <= 450,
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
    assert.ok(record.excerpt.length <= 180);
    assert.ok(record.seo_title.length <= 60);
    assert.ok(record.seo_description.length <= 165);
    assert.equal(record.tags.length, 4);
    assert.equal(record.focus_keywords.length, 5);
    const totalSources = record.keySources.length + record.sources.length;
    assert.ok(
      totalSources >= 5,
      `${record.slug}: ${totalSources} fuentes, mínimo 5`,
    );
    const sourceUrls = [...record.keySources, ...record.sources].map(
      ({ url }) => url,
    );
    assert.equal(new Set(sourceUrls).size, sourceUrls.length);
  }
});

test("corrige títulos y expansiones sin fuente del corpus heredado", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  assert.equal(bySlug.get("los-canibales").title, "El crimen ocultado");
  assert.equal(
    bySlug.get("la-mala-mujer").title,
    "La llamada «mala mujer»",
  );
  // La advertencia sobre la frase final del narrador vive ahora en Versiones:
  // el Relato ya no lleva comentario sobre sí mismo.
  assert.match(
    bySlug.get("primeras-guerras").versiones,
    /amigos desde que llegaron los blancos[\s\S]+no puede leerse como un juicio sobre la conquista/i,
  );
  // La retirada de Wuacha y del abuelo Jacinto, que la ficha heredada daba por
  // parte del mito, se argumenta en Versiones y no dentro del Relato.
  assert.match(
    bySlug.get("el-morrocoyo").versiones,
    /Wuacha[\s\S]+Jacinto[\s\S]+[Ss]e retira/i,
  );
  for (const record of records) {
    assert.doesNotMatch(record.mito, /Wuacha|abuelo Jacinto/i, record.slug);
  }
  for (const record of records) {
    assert.doesNotMatch(
      record.mito,
      /Campbell|viaje del héroe/i,
    );
  }
  assert.equal(
    chimilaEditorialDecisions["el-morrocoyo"].action,
    "remove-synthetic-second-story",
  );
});

test("distingue los dos relatos contemporáneos del corpus de 1945", () => {
  const yunari = records.find(
    ({ slug }) => slug === "yunari-y-las-cinco-tierras",
  );
  const mazorcas = records.find(
    ({ slug }) => slug === "yaau-numirinta-y-las-dos-mazorcas",
  );
  for (const record of [yunari, mazorcas]) {
    // La Historia tiene que decir, con las palabras que sea, que este relato
    // no sale del corpus de 1945: es la distinción editorial que sostiene
    // publicar una cosmogonía viva sin hacerla pasar por un capítulo perdido.
    assert.match(
      record.historia,
      /no (?:procede|viene|sale) del corpus|no est[aá] en el corpus|no pertenece al corpus/i,
      record.slug,
    );
    assert.match(record.researchNotes, /cosmología Ette contemporánea/i);
  }
  // El Relato tiene que llegar hasta el final de la cuenta: la cuarta tierra es
  // la que se habita y la quinta la que espera arriba.
  assert.match(yunari.mito, /\bcuarta\b[\s\S]+\bquinta\b/i, yunari.slug);
  assert.match(mazorcas.mito, /dos mazorcas/i);
});

test("cada ficha tiene una horizontal y una vertical distintas", () => {
  for (const slug of canonicalChimilaSlugs) {
    const media = chimilaMedia[slug];
    assert.match(media.horizontal, /^https:\/\//);
    assert.match(media.vertical, /^https:\/\//);
    assert.notEqual(media.horizontal, media.vertical);
  }
});

test("la dirección visual es ilustración 2D full paper cut, nunca maqueta", () => {
  for (const record of records) {
    for (const prompt of [
      record.image_prompt_horizontal,
      record.image_prompt_vertical,
    ]) {
      assert.match(prompt, /2D full paper cut/i);
      assert.match(prompt, /paper quilling/i);
      assert.match(prompt, /acabado gr[aá]fico plano/i);
      assert.match(prompt, /sin fotograf[ií]a/i);
      assert.match(prompt, /objeto físico/i);
      assert.match(prompt, /maqueta/i);
      assert.match(prompt, /diorama/i);
      assert.match(prompt, /CGI|render 3D/i);
    }
  }
  assert.match(chimilaCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.match(chimilaCommunityPage.imagePrompt, /capas planas/i);
  assert.match(chimilaCommunityPage.imagePrompt, /sin fotografía/i);
  assert.match(chimilaCommunityPage.imagePrompt, /objeto físico/i);
});

test("la ruta pública usa el perfil Ette Ennaka revisado", () => {
  const route = fs.readFileSync(
    new URL("../../src/lib/community-info.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ chimilaCommunityPage \}/);
  assert.match(route, /"chimila": \{\s+\.\.\.chimilaCommunityPage,/);
});
