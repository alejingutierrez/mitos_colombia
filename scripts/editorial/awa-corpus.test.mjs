import assert from "node:assert/strict";
import test from "node:test";

import { awaCommunityPage } from "../../editorial/awa/community.mjs";
import { awaMedia } from "../../editorial/awa/media.mjs";
import records from "../../editorial/awa/records.mjs";
import { canonicalAwaSlugs } from "../../editorial/awa/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los dos expedientes cumplen la metodología editorial", () => {
  assert.equal(records.length, 2);
  assert.deepEqual(
    records.map(({ slug }) => slug),
    canonicalAwaSlugs,
  );
  for (const record of records) {
    assert.ok(words(record.mito) >= 300 && words(record.mito) <= 650);
    assert.ok(words(record.historia) >= 220 && words(record.historia) <= 600);
    assert.ok(
      words(record.versiones) >= 170 && words(record.versiones) <= 550,
    );
    assert.ok(words(record.leccion) >= 8 && words(record.leccion) <= 22);
    assert.ok(
      words(record.similitudes) >= 150 && words(record.similitudes) <= 450,
    );
    assert.equal(record.tags.length, 4);
    assert.equal(record.focus_keywords.length, 5);
    // Antes esta prueba exigía exactamente seis fuentes en las dos fichas. Ese
    // número era el reparto en bloque escrito como aserción: las dos recibían
    // la misma lista. Lo que hay que sostener es el mínimo, que no haya URLs
    // repetidas dentro de una ficha y que cada relato apoye en dominios
    // distintos.
    const fuentes = [...record.keySources, ...record.sources];
    assert.ok(fuentes.length >= 5, `${record.slug}: ${fuentes.length} fuentes`);
    assert.equal(new Set(fuentes.map(({ url }) => url)).size, fuentes.length);
    const dominios = new Set(fuentes.map(({ url }) => new URL(url).host));
    assert.ok(dominios.size >= 3, `${record.slug}: ${dominios.size} dominios`);
    // Ninguna portada de catálogo: responden 200 y no sostienen un relato.
    for (const { url } of fuentes) {
      assert.doesNotMatch(
        url,
        /books\.google\.|openlibrary\.org|worldcat\.org|\.blogspot\.|scribd\.com|academia\.edu|wikipedia\.org/i,
        `${record.slug}: fuente de catálogo ${url}`,
      );
    }
    // Y la ficha tiene que decir quién recogió el relato y cuándo.
    assert.match(record.historia, /\b(19|20)\d\d\b/, `${record.slug}: su historia no fecha el registro`);
  }
  // Los dos repartos no pueden ser el mismo: cada relato tiene su bibliografía.
  const [a, b] = records.map((r) =>
    [...r.keySources, ...r.sources].map(({ url }) => url).sort().join("|"),
  );
  assert.notEqual(a, b, "las dos fichas citan exactamente las mismas obras");
});

test("cada página tiene horizontal y vertical públicas y distintas", () => {
  for (const slug of canonicalAwaSlugs) {
    const media = awaMedia[slug];
    assert.match(media.horizontal, /^https:\/\//);
    assert.match(media.vertical, /^https:\/\//);
    assert.notEqual(media.horizontal, media.vertical);
  }
  const world = awaMedia.guagaja;
  assert.match(world.horizontal, /\/mitos\/guagaja-\d+\.png$/);
  assert.match(world.vertical, /\/vertical\/myth\/guagaja-\d+\.png$/);
});

test("la dirección visual exige ilustración full paper cut 2D", () => {
  for (const record of records) {
    for (const prompt of [
      record.image_prompt_horizontal,
      record.image_prompt_vertical,
    ]) {
      assert.match(prompt, /full paper cut/i);
      assert.match(prompt, /paper quilling/i);
      assert.match(prompt, /sin fotograf[ií]a/i);
      assert.match(prompt, /maqueta/i);
      assert.match(prompt, /diorama/i);
      assert.match(prompt, /CGI|render 3D/i);
    }
  }
  assert.match(awaCommunityPage.imagePrompt, /full paper cut/i);
  assert.match(awaCommunityPage.imagePrompt, /capas planas/i);
});

test("las dos tramas editoriales inventadas quedan sustituidas", () => {
  const origin = records.find(
    ({ slug }) => slug === "barbachas-del-arbol-grande",
  );
  const world = records.find(({ slug }) => slug === "guagaja");
  assert.equal(origin.title, "La Barbacha: origen del Inkal Awá");
  assert.equal(world.title, "El mundo de abajo: los hermanos y el armadillo");
  // Antes se comprobaba que la Historia dijera de sí misma que era «una pieza
  // editorial contemporánea» o que «no había encontrado una fuente primaria».
  // Esas declaraciones ya no van en el texto publicado: la constancia vive en
  // el dossier. Lo que la página sí tiene que hacer es nombrar a quien recogió
  // el relato, con su comunidad y su fecha.
  assert.match(origin.historia, /Arcos/);
  assert.match(origin.historia, /Chimbagal|Barbacoas/);
  assert.match(origin.historia, /\b2014\b/);
  assert.match(world.historia, /Arcos|Sinsajoa|Botero/);
  assert.match(world.historia, /\b(19|20)\d\d\b/);
  // Y el Relato no puede arrastrar lo que ninguna fuente sostenía.
  assert.doesNotMatch(origin.mito, /humedad primordial|guardianes/i);
  assert.doesNotMatch(world.mito, /Nampí|Guagaja/i);
  // El aparato de investigación se queda fuera del Relato, en las dos.
  for (const record of [origin, world]) {
    assert.doesNotMatch(
      record.mito,
      /\b(la fuente|las fuentes|la investigación|esta ficha|la página|el registro etnográfico|según el registro)\b/i,
      `${record.slug}: su Relato habla de la investigación`,
    );
  }
});

test("la landing declara el corpus, los reemplazos y la estrategia visual", () => {
  assert.match(
    awaCommunityPage.longDescription,
    /dos núcleos narrativos/i,
  );
  assert.match(awaCommunityPage.longDescription, /Se conservan sus URLs/i);
  assert.match(awaCommunityPage.longDescription, /se reutilizan/i);
  assert.match(awaCommunityPage.longDescription, /pareja horizontal y vertical nueva/i);
});
