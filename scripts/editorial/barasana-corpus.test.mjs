import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  barasanaCommunityImageUrl,
  barasanaCommunityPage,
} from "../../editorial/barasana/community.mjs";
import { barasanaMedia } from "../../editorial/barasana/media.mjs";
import records from "../../editorial/barasana/records.mjs";
import { canonicalBarasanaSlugs } from "../../editorial/barasana/universe.mjs";

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

test("los seis expedientes Barasana cumplen la metodología editorial", () => {
  assert.equal(records.length, 6);
  assert.deepEqual(
    new Set(records.map(({ slug }) => slug)),
    new Set(canonicalBarasanaSlugs),
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
    // Antes: `keySources + sources === 7`. Ese siete era el reparto en bloque
    // escrito como aserción; desde la Fase B del 2026-09-19 cada ficha cita
    // las obras que su reescritura usó, y son distintas entre fichas. Lo que
    // se verifica es la sustancia: mínimo de fuentes, dominios distintos,
    // ninguna URL repetida y todas con resumen, límite y URL https.
    const todas = [...record.keySources, ...record.sources];
    assert.ok(
      todas.length >= 5,
      `${record.slug}: ${todas.length} fuentes, el mínimo son cinco.`,
    );
    assert.equal(record.keySources.length, 3);
    const urls = todas.map(({ url }) => url);
    assert.equal(new Set(urls).size, urls.length);
    assert.ok(
      new Set(urls.map((url) => new URL(url).host)).size >= 3,
      `${record.slug}: menos de tres dominios distintos.`,
    );
    assert.ok(
      todas.every(
        ({ url, title, summary, limitation }) =>
          url.startsWith("https://") && title && summary && limitation,
      ),
      `${record.slug}: hay una fuente sin https, título, resumen o límite.`,
    );
  }
});

test("ninguna pareja de fichas repite el mismo reparto de fuentes", () => {
  const repartos = new Map();
  for (const record of records) {
    const firma = [...record.keySources, ...record.sources]
      .map(({ url }) => url)
      .join("|");
    assert.ok(
      !repartos.has(firma),
      `${record.slug} y ${repartos.get(firma)} citan exactamente lo mismo.`,
    );
    repartos.set(firma, record.slug);
  }
  // La obra de cabecera la firman los propios barasana y tiene que estar en
  // las seis; Torres Laborde 1969 sólo puede aparecer en Luna, que es la
  // única ficha que se la atribuyó, y nunca como fuente clave: su enlace es
  // una ficha de catálogo sin texto.
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  for (const record of records) {
    assert.ok(
      [...record.keySources, ...record.sources].some(({ url }) =>
        url.includes("gaiaamazonas.org"),
      ),
      `${record.slug}: no cita el libro de la ACAIPI.`,
    );
  }
  for (const record of records) {
    const torres = [...record.keySources, ...record.sources].filter(({ url }) =>
      url.includes("repository.icesi.edu.co"),
    );
    assert.equal(torres.length, record.slug === "la-luna" ? 1 : 0);
  }
  assert.ok(
    bySlug
      .get("la-luna")
      .keySources.every(({ url }) => !url.includes("repository.icesi.edu.co")),
    "Torres Laborde no puede ser fuente clave: es una ficha de catálogo.",
  );
  assert.match(
    bySlug
      .get("la-luna")
      .sources.find(({ url }) => url.includes("repository.icesi.edu.co"))
      .limitation,
    /no está corroborada/i,
  );
});

test("corrige Luna e incorpora cinco ciclos documentados", () => {
  const bySlug = new Map(records.map((record) => [record.slug, record]));
  assert.equal(
    bySlug.get("la-luna").title,
    "Muyhu, Méneri-Ya y Warimi",
  );
  assert.equal(
    bySlug.get("sol-luna-dia-y-noche").title,
    "Sol y Luna: día y noche",
  );
  assert.equal(
    bySlug.get("kahe-sawari-kata-yai-y-el-surgimiento-barasano").title,
    "Kahe Sawari y Kata Yai",
  );
  assert.match(
    bySlug.get("el-origen-de-la-gente-de-los-frutales-silvestres")
      .researchNotes,
    /Jaime Giraldo/i,
  );
  assert.match(
    bySlug.get("la-luna").researchNotes,
    /slug histórico/i,
  );
});

test("cada ficha reutiliza una pareja horizontal y vertical distinta", () => {
  const horizontal = new Set();
  const vertical = new Set();
  for (const slug of canonicalBarasanaSlugs) {
    const media = barasanaMedia[slug];
    assert.match(media.horizontal, /^https:\/\//);
    assert.match(media.vertical, /^https:\/\//);
    assert.notEqual(media.horizontal, media.vertical);
    assert.ok(!horizontal.has(media.horizontal), `horizontal repetida: ${slug}`);
    assert.ok(!vertical.has(media.vertical), `vertical repetida: ${slug}`);
    assert.ok(media.reusedFrom);
    horizontal.add(media.horizontal);
    vertical.add(media.vertical);
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
  assert.match(barasanaCommunityPage.imagePrompt, /2D full paper cut/i);
  assert.match(barasanaCommunityPage.imagePrompt, /capas planas/i);
  assert.match(barasanaCommunityPage.imagePrompt, /sin fotografía/i);
  assert.match(barasanaCommunityPage.imagePrompt, /objeto físico/i);
  assert.equal(
    barasanaCommunityImageUrl,
    barasanaMedia["la-luna"].horizontal,
  );
});

test("la ruta pública usa el perfil Barasana revisado", () => {
  const route = fs.readFileSync(
    new URL("../../src/lib/community-info.js", import.meta.url),
    "utf8",
  );
  assert.match(route, /import \{ barasanaCommunityPage \}/);
  assert.match(route, /"barasana": \{\s+\.\.\.barasanaCommunityPage,/);
});
