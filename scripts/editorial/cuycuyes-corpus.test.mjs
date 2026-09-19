import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import { cuycuyesCommunityPage } from "../../editorial/cuycuyes/community.mjs";
import { cuycuyesMedia } from "../../editorial/cuycuyes/media.mjs";
import records from "../../editorial/cuycuyes/records.mjs";
import {
  canonicalCuycuyesSlugs,
  cuycuyesEditorialDecisions,
} from "../../editorial/cuycuyes/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los dos expedientes Cuycuyes cumplen la metodología editorial", () => {
  assert.equal(records.length, 2);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalCuycuyesSlugs),
  );
  for (const record of records) {
    assert.ok(
      words(record.mito) >= 300 && words(record.mito) <= 650,
      `${record.slug}: mito ${words(record.mito)} palabras`,
    );
    assert.ok(
      words(record.historia) >= 220 && words(record.historia) <= 600,
      `${record.slug}: historia ${words(record.historia)} palabras`,
    );
    assert.ok(
      words(record.versiones) >= 170 && words(record.versiones) <= 550,
      `${record.slug}: versiones ${words(record.versiones)} palabras`,
    );
    assert.ok(words(record.leccion) >= 8 && words(record.leccion) <= 22);
    assert.equal((record.leccion.match(/[.!?]+/g) || []).length, 1);
    assert.ok(
      words(record.similitudes) >= 150 && words(record.similitudes) <= 450,
      `${record.slug}: similitudes ${words(record.similitudes)} palabras`,
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

test("corrige Calgari sin inventar la identidad del ser del oratorio", () => {
  const record = records.find(({ slug }) => slug === "el-diablo");
  assert.equal(
    cuycuyesEditorialDecisions["el-diablo"].action,
    "correct-colonial-mistranslation",
  );
  assert.equal(record.title, "El ser de los ojos resplandecientes");
  // Las aserciones que exigían que el Relato explicara la investigación
  // —«No había una princesa», «leyenda literaria publicada en 1932», «no
  // registra un nombre propio»— eran el aparato editorial escrito como prueba.
  // Ese aparato salió del Relato y vive ahora en Historia, Versiones y el
  // dossier. Lo que se comprueba es lo mismo, dicho donde corresponde.
  // Calgari no entra en el Relato: es una equivalencia de vocabulario emberá
  // que Uribe Ángel puso donde no iba. Se discute en Historia y en Versiones.
  assert.doesNotMatch(record.mito, /Calgari|Antomiá/i);
  assert.match(record.historia, /Calgari/);
  assert.match(record.versiones, /Calgari/);
  // Y el Relato trae lo que Cieza sí describe del oratorio de Arma.
  assert.match(record.mito, /incensario/i);
  assert.match(record.mito, /Yayo/);
  assert.match(record.mito, /Paucura/);
  assert.doesNotMatch(
    record.content,
    /Calgari (?:era|es|fue) (?:el |un )?(?:demonio|diablo)/i,
  );
  assert.doesNotMatch(record.content, /adoraba(?:n)? al demonio Calgari/i);
});

test("sustituye el Pipintá sintético por las dos variantes documentadas", () => {
  const record = records.find(
    ({ slug }) => slug === "el-tesoro-del-pipinta",
  );
  assert.equal(
    cuycuyesEditorialDecisions["el-tesoro-del-pipinta"].action,
    "replace-synthetic-story",
  );
  // Martín Blandón es quien recogió la ruta del tesoro, no un personaje del
  // relato: salió del Relato y quedó en Historia, donde va el registro.
  assert.doesNotMatch(record.mito, /Martín Blandón/i);
  assert.match(record.historia, /Martín Blandón/i);
  assert.match(record.mito, /dieciséis caciques/i);
  assert.match(record.mito, /arrieros/i);
  assert.match(record.mito, /Maitamá/);
  assert.match(record.mito, /Pácora/);
  assert.doesNotMatch(
    record.mito,
    /mujer hecha de hojas|dibuj[oó] un círculo de sal|guardián inmundo|desat[oó] plagas/i,
  );
  assert.match(record.historia, /\b1[5-9]\d\d\b|\b20\d\d\b/);
});

test("cada página exige una horizontal y una vertical públicas y distintas", () => {
  for (const slug of canonicalCuycuyesSlugs) {
    const media = cuycuyesMedia[slug];
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
      assert.match(prompt, /objeto f[ií]sico/i);
      assert.match(prompt, /maqueta/i);
      assert.match(prompt, /diorama/i);
      assert.match(prompt, /CGI|render 3D/i);
    }
  }
  assert.match(cuycuyesCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.match(cuycuyesCommunityPage.imagePrompt, /capas planas/i);
  assert.match(cuycuyesCommunityPage.imagePrompt, /sin fotografía/i);
  assert.match(cuycuyesCommunityPage.imagePrompt, /objeto físico/i);
});

test("la ruta pública usa el perfil Cuycuyes revisado", () => {
  const route = fs.readFileSync(
    new URL("../../src/lib/community-info.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ cuycuyesCommunityPage \}/);
  assert.match(route, /"cuycuyes": \{\s+\.\.\.cuycuyesCommunityPage,/);
});
