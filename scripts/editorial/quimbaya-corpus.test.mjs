import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import { quimbayaCommunityPage } from "../../editorial/quimbaya/community.mjs";
import { quimbayaMedia } from "../../editorial/quimbaya/media.mjs";
import records from "../../editorial/quimbaya/records.mjs";
import {
  canonicalQuimbayaSlugs,
  quimbayaEditorialDecisions,
} from "../../editorial/quimbaya/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los tres expedientes Quimbaya cumplen la metodología editorial", () => {
  assert.equal(records.length, 3);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalQuimbayaSlugs),
  );
  for (const record of records) {
    assert.ok(words(record.mito) >= 300 && words(record.mito) <= 650);
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
    // Antes se exigían exactamente siete fuentes en todas las fichas. Ese
    // número era el reparto en bloque escrito como aserción: todas recibían la
    // misma lista. Lo que hay que sostener es el mínimo, la ausencia de
    // duplicados, que el relato apoye en dominios distintos, que no entre
    // ninguna portada de catálogo y que las fichas no citen todas lo mismo.
    const fuentes = [...record.keySources, ...record.sources];
    assert.ok(fuentes.length >= 5, `${record.slug}: ${fuentes.length} fuentes`);
    const sourceUrls = fuentes.map(({ url }) => url);
    assert.equal(new Set(sourceUrls).size, sourceUrls.length);
    const dominios = new Set(sourceUrls.map((url) => new URL(url).host));
    assert.ok(dominios.size >= 3, `${record.slug}: ${dominios.size} dominios`);
    for (const url of sourceUrls) {
      assert.doesNotMatch(
        url,
        /books\.google\.|openlibrary\.org|worldcat\.org|\.blogspot\.|scribd\.com|academia\.edu|wikipedia\.org/i,
        `${record.slug}: fuente de catálogo ${url}`,
      );
    }
    assert.match(
      record.historia,
      /\b(1[5-9]|20)\d\d\b/,
      `${record.slug}: su Historia no fecha el registro`,
    );
    assert.doesNotMatch(
      record.mito,
      /\b(la fuente|las fuentes|la investigación|esta ficha|la página|según el registro|el cronista)\b/i,
      `${record.slug}: su Relato habla de la investigación`,
    );
  }
  // Dos fichas de un corpus pequeño pueden apoyarse en la misma bibliografía
  // —aquí caben tres crónicas y poco más—, pero no pueden abrir con las mismas
  // tres fuentes clave: eso sería otra vez el reparto en bloque.
  const clave = records.map((r) => r.keySources.map(({ url }) => url).join("|"));
  assert.equal(new Set(clave).size, clave.length, "dos fichas abren con las mismas fuentes clave");
});

test("Batatabatí vuelve al juego documentado y elimina la princesa sintética", () => {
  const record = records.find(({ slug }) => slug === "batatabati");
  assert.equal(
    quimbayaEditorialDecisions.batatabati.action,
    "replace-synthetic-princess",
  );
  assert.equal(record.title, "Batatabatí: «ea, juguemos»");
  // Las aserciones que exigían que el Relato explicara la investigación
  // —«No había una princesa», «leyenda literaria publicada en 1932», «no
  // registra un nombre propio»— eran el aparato editorial escrito como prueba.
  // Ese aparato salió del Relato y vive ahora en Historia, Versiones y el
  // dossier. Lo que se comprueba es lo mismo, dicho donde corresponde.
  assert.doesNotMatch(record.mito, /princesa/i);
  assert.match(record.mito, /batatabati/i);
  assert.match(record.mito, /dos tambores/i);
  assert.match(record.mito, /sucesos pasados de sus mayores/i);
  assert.match(record.historia, /Cieza/);
  assert.doesNotMatch(
    record.mito,
    /ojos azules|le arrancaron los ojos|lágrimas formaron el río Quindío/i,
  );
});

test("Ipiaré se identifica como leyenda literaria de 1932", () => {
  const record = records.find(({ slug }) => slug === "ipiare-ebachi");
  assert.equal(
    quimbayaEditorialDecisions["ipiare-ebachi"].action,
    "identify-modern-literary-legend",
  );
  // Las aserciones que exigían que el Relato explicara la investigación
  // —«No había una princesa», «leyenda literaria publicada en 1932», «no
  // registra un nombre propio»— eran el aparato editorial escrito como prueba.
  // Ese aparato salió del Relato y vive ahora en Historia, Versiones y el
  // dossier. Lo que se comprueba es lo mismo, dicho donde corresponde.
  assert.doesNotMatch(record.mito, /leyenda literaria|1932/i);
  assert.match(record.historia, /Gonzalo Uribe Mejía/i);
  assert.match(record.historia, /\b1932\b/);
  assert.match(record.historia, /Yagarí/);
  assert.match(record.versiones, /\b1932\b/);
  assert.match(record.versiones, /nieta/i);
  assert.doesNotMatch(record.mito, /lengua del Sol/i);
});

test("Nabsacadas entra sin demonización ni deificación general", () => {
  const record = records.find(
    ({ slug }) => slug === "nabsacadas-la-estrella-caida",
  );
  assert.equal(
    quimbayaEditorialDecisions["nabsacadas-la-estrella-caida"].action,
    "add-documented-colonial-narrative",
  );
  // Las aserciones que exigían que el Relato explicara la investigación
  // —«No había una princesa», «leyenda literaria publicada en 1932», «no
  // registra un nombre propio»— eran el aparato editorial escrito como prueba.
  // Ese aparato salió del Relato y vive ahora en Historia, Versiones y el
  // dossier. Lo que se comprueba es lo mismo, dicho donde corresponde.
  assert.match(record.mito, /páramo de Tataquí/i);
  assert.match(record.mito, /azote/i);
  // Los detalles que Pedro Simón sí trae y que la ficha había perdido.
  assert.match(record.mito, /ahuyama/i);
  assert.match(record.mito, /estera/i);
  assert.match(record.mito, /pata de gallo/i);
  assert.match(record.historia, /Simón/);
  assert.match(record.versiones, /Zuluaga/);
  assert.doesNotMatch(record.content, /Nabsacadas (?:era|es|fue) el dios/i);
});

test("cada página exige una horizontal y una vertical públicas y distintas", () => {
  for (const slug of canonicalQuimbayaSlugs) {
    const media = quimbayaMedia[slug];
    assert.match(media.horizontal, /^https:\/\//);
    assert.match(media.vertical, /^https:\/\//);
    assert.notEqual(media.horizontal, media.vertical);
    assert.doesNotMatch(media.horizontal + media.vertical, /pending\.invalid/);
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
  assert.match(quimbayaCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.match(quimbayaCommunityPage.imagePrompt, /capas planas/i);
  assert.match(quimbayaCommunityPage.imagePrompt, /sin fotografía/i);
  assert.match(quimbayaCommunityPage.imagePrompt, /objeto físico/i);
});

test("la ruta pública usa el perfil Quimbaya revisado", () => {
  const route = fs.readFileSync(
    new URL("../../src/lib/community-info.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ quimbayaCommunityPage \}/);
  assert.match(route, /"quimbaya": \{\s+\.\.\.quimbayaCommunityPage,/);
});
