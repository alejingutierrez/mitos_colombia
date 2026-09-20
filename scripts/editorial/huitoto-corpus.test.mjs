import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  huitotoCommunityImageUrl,
  huitotoCommunityPage,
} from "../../editorial/huitoto/community.mjs";
import { huitotoMedia } from "../../editorial/huitoto/media.mjs";
import records from "../../editorial/huitoto/records.mjs";
import { canonicalHuitotoSlugs } from "../../editorial/huitoto/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los veintidós expedientes Huitoto cumplen la metodología editorial", () => {
  assert.equal(records.length, 22);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalHuitotoSlugs),
  );

  for (const record of records) {
    // Un mito puede declarar `relatoCorto` cuando su fuente primaria no da para
    // llegar al mínimo sin repetir: la razón queda escrita en el módulo.
    const minimoMito = record.relatoCorto ? 90 : 300;
    assert.ok(
      words(record.mito) >= minimoMito && words(record.mito) <= 650,
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
    // El mínimo es 5; el número fijo de siete venía de la lista compartida que
    // la reescritura sustituyó por fuentes propias de cada mito.
    const totalSources = record.keySources.length + record.sources.length;
    assert.ok(totalSources >= 5, `${record.slug}: ${totalSources} fuentes`);
    const urls = [...record.keySources, ...record.sources].map(({ url }) => url);
    assert.equal(new Set(urls).size, urls.length, `${record.slug}: URLs repetidas`);
    assert.ok(urls.every((url) => url.startsWith("https://")));
  }
});

test("corrige identidades y declara los límites de atribución", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));

  assert.equal(
    bySlug.get("jirayauma").title,
    "Jirayauma y la Mujer-Jaguar",
  );
  assert.equal(
    bySlug.get("jobiya-jitoma").title,
    "Jitoma y Nokaido, la contienda del Sol y el Tucán",
  );
  assert.equal(
    bySlug.get("el-origen-del-maguare").title,
    "Yiida Buinama y el origen del maguaré",
  );
  assert.match(
    bySlug.get("yarokamena").researchNotes,
    /UNIFICACIÓN DECLARADA/i,
  );
  assert.match(
    bySlug.get("de-como-se-crio-yarocomena").researchNotes,
    /UNIFICACIÓN DECLARADA/i,
  );
  assert.match(
    bySlug.get(
      "peleas-y-aventuras-entre-el-sobrino-conejo-y-el-tio-tigre",
    ).researchNotes,
    /ATRIBUCIÓN NO CONFIRMADA/i,
  );
  assert.match(
    bySlug.get(
      "peleas-y-aventuras-entre-el-sobrino-conejo-y-el-tio-tigre",
    ).versiones,
    /no confirmada/i,
  );
  for (const slug of [
    "creacion-huitotos",
    "unamarai-padre-de-yaje",
    "en-el-principio-fueron-los-yorias-a-la-sombra-de-la-ortiga",
  ]) {
    // Las tres fichas que vienen de la reelaboración de Hugo Niño tienen que
    // decirlo en Versiones, con las palabras que sea: es lo que distingue una
    // reescritura de autor de un registro etnográfico.
    assert.match(
      bySlug.get(slug).versiones,
      /Hugo Ni[ñn]o|reelaboraci[oó]n|reescritura/i,
      slug,
    );
  }
});

test("cada ficha reutiliza una pareja horizontal y vertical distinta", () => {
  const horizontal = new Set();
  const vertical = new Set();

  for (const slug of canonicalHuitotoSlugs) {
    const media = huitotoMedia[slug];
    assert.match(media.horizontal, /^https:\/\//);
    assert.match(media.vertical, /^https:\/\//);
    assert.notEqual(media.horizontal, media.vertical);
    assert.ok(!horizontal.has(media.horizontal), `horizontal repetida: ${slug}`);
    assert.ok(!vertical.has(media.vertical), `vertical repetida: ${slug}`);
    assert.ok(media.reusedFrom);
    horizontal.add(media.horizontal);
    vertical.add(media.vertical);
  }

  assert.equal(horizontal.size, 22);
  assert.equal(vertical.size, 22);
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
      assert.match(prompt, /a página completa/i);
      assert.match(prompt, /sin fotograf[ií]a/i);
      assert.match(prompt, /objeto físico/i);
      assert.match(prompt, /maqueta/i);
      assert.match(prompt, /diorama/i);
      assert.match(prompt, /CGI|render 3D/i);
    }
  }

  assert.match(huitotoCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.match(huitotoCommunityPage.imagePrompt, /capas planas/i);
  assert.match(huitotoCommunityPage.imagePrompt, /sin fotografía/i);
  assert.match(huitotoCommunityPage.imagePrompt, /objeto físico/i);
  assert.equal(
    huitotoCommunityImageUrl,
    huitotoMedia["nofideno-la-madre"].horizontal,
  );
});

test("la ruta pública usa el perfil Huitoto revisado", () => {
  const route = fs.readFileSync(
    new URL("../../src/lib/community-info.js", import.meta.url),
    "utf8",
  );

  assert.match(route, /import \{ huitotoCommunityPage \}/);
  assert.match(route, /"huitotos": \{\s+\.\.\.huitotoCommunityPage,/);
});
