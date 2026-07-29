import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";
import {
  WAYUU_CATEGORY_PATH,
  canonicalWayuuSlugs,
  existingWayuuSlugs,
  newWayuuSlugs,
} from "../../editorial/wayuu/universe.mjs";
import {
  wayuuMedia,
  wayuuVerticalMedia,
} from "../../editorial/wayuu/media.mjs";

const MYTH_DIR = path.resolve("editorial", "wayuu", "myths");
const provenance = JSON.parse(
  await fs.readFile(
    new URL("../../editorial/wayuu/provenance.json", import.meta.url),
    "utf8",
  ),
);

function digest(value) {
  return createHash("sha256").update(value).digest("hex");
}

function words(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

async function loadCorpus() {
  const entries = [];
  for (const slug of canonicalWayuuSlugs) {
    const modulePath = path.join(MYTH_DIR, `${slug}.mjs`);
    const { default: data } = await import(pathToFileURL(modulePath).href);
    entries.push(data);
  }
  return entries;
}

test("el universo Wayuu queda fijado en 25 revisiones y 2 incorporaciones", () => {
  assert.equal(existingWayuuSlugs.length, 25);
  assert.equal(newWayuuSlugs.length, 2);
  assert.equal(canonicalWayuuSlugs.length, 27);
  assert.equal(new Set(canonicalWayuuSlugs).size, 27);
});

test("los archivos editoriales cubren exactamente el universo canónico", async () => {
  const files = (await fs.readdir(MYTH_DIR))
    .filter((name) => name.endsWith(".mjs"))
    .map((name) => name.replace(/\.mjs$/, ""))
    .sort();
  assert.deepEqual(files, canonicalWayuuSlugs);
});

test("cada mito cumple los cinco campos, límites y contrato editorial", async () => {
  for (const data of await loadCorpus()) {
    assert.equal(data.category_path, WAYUU_CATEGORY_PATH, data.slug);
    assert.equal(words(data.mito) >= 300 && words(data.mito) <= 650, true, data.slug);
    assert.equal(
      words(data.historia) >= 220 && words(data.historia) <= 600,
      true,
      data.slug,
    );
    assert.equal(
      words(data.versiones) >= 170 && words(data.versiones) <= 550,
      true,
      data.slug,
    );
    assert.equal(
      words(data.leccion) >= 8 && words(data.leccion) <= 22,
      true,
      data.slug,
    );
    assert.equal(
      words(data.similitudes) >= 150 && words(data.similitudes) <= 450,
      true,
      data.slug,
    );
    assert.equal(data.leccion.includes("\n"), false, data.slug);
    assert.equal(
      (data.leccion.match(/[.!?…](?=\s|$)/g) || []).length,
      1,
      data.slug,
    );
    assert.equal(data.excerpt.length <= 180, true, data.slug);
    assert.equal(data.seo_title.length <= 60, true, data.slug);
    assert.equal(data.seo_description.length <= 165, true, data.slug);
    assert.equal(data.focus_keywords.length >= 5, true, data.slug);
    assert.equal(new Set(data.tags).size, data.tags.length, data.slug);
    assert.equal(
      data.content,
      [
        ["Mito", data.mito],
        ["Historia", data.historia],
        ["Versiones", data.versiones],
        ["Lección", data.leccion],
        ["Similitudes", data.similitudes],
      ]
        .map(([heading, body]) => `${heading}\n${body}`)
        .join("\n\n"),
      data.slug,
    );
    assert.match(data.researchNotes, /IMAGEN:/i, data.slug);
    assert.match(data.researchNotes, /GEOGRAFÍA:/i, data.slug);
    assert.doesNotMatch(
      `${data.mito}\n${data.historia}`,
      /por ahora no tenemos|actualizaremos más adelante/i,
      data.slug,
    );
  }
});

test("cada dossier publica al menos cinco URLs únicas y tres dominios", async () => {
  for (const data of await loadCorpus()) {
    const sources = [...data.keySources, ...data.sources];
    const urls = sources.map(({ url }) => new URL(url).toString());
    const hosts = new Set(urls.map((url) => new URL(url).hostname));
    assert.equal(sources.length >= 5, true, data.slug);
    assert.equal(new Set(urls).size, urls.length, data.slug);
    assert.equal(hosts.size >= 3, true, data.slug);
    for (const source of sources) {
      assert.ok(source.title, data.slug);
      assert.ok(source.summary, data.slug);
      assert.ok(source.limitation, data.slug);
    }
  }
});

test("los 27 mitos tienen portada horizontal y segunda escena vertical", async () => {
  const corpus = new Map((await loadCorpus()).map((data) => [data.slug, data]));
  assert.deepEqual(Object.keys(wayuuVerticalMedia).sort(), canonicalWayuuSlugs);
  for (const slug of canonicalWayuuSlugs) {
    assert.match(corpus.get(slug).image_url, /^https:\/\//, slug);
    assert.match(wayuuVerticalMedia[slug], /^https:\/\//, slug);
  }
  for (const slug of existingWayuuSlugs) {
    assert.match(
      corpus.get(slug).researchNotes,
      /conserva|preserv|mantiene/i,
      slug,
    );
  }
  for (const slug of newWayuuSlugs) {
    const data = corpus.get(slug);
    assert.notEqual(
      data.image_prompt_horizontal,
      data.image_prompt_vertical,
      slug,
    );
    assert.match(
      data.researchNotes,
      /pareja nueva.*horizontal.*vertical/is,
      slug,
    );
    for (const prompt of [
      data.image_prompt_horizontal,
      data.image_prompt_vertical,
    ]) {
      assert.match(prompt, /digital 2D full paper cut/i, slug);
      assert.match(prompt, /paper quilling/i, slug);
      assert.match(prompt, /acabado gráfico plano/i, slug);
      assert.match(prompt, /nunca fotografía/i, slug);
      assert.match(prompt, /objeto físico/i, slug);
      assert.match(prompt, /maqueta/i, slug);
      assert.match(prompt, /diorama/i, slug);
      assert.match(prompt, /CGI|render 3D/i, slug);
      assert.doesNotMatch(prompt, /StudioPaperMaquette/i, slug);
      assert.doesNotMatch(
        prompt,
        /maqueta física de papel fotografiada/i,
        slug,
      );
    }
  }
});

test("los dos mitos nuevos tienen parejas OpenAI trazables y aprobadas", async () => {
  const corpus = new Map((await loadCorpus()).map((data) => [data.slug, data]));
  assert.equal(provenance.provider, "openai");
  assert.equal(provenance.model, "gpt-image-2");
  assert.equal(provenance.quality, "high");
  assert.equal(provenance.visualQa.status, "approved");
  assert.equal(provenance.visualQa.finalImages, 4);
  assert.equal(provenance.visualQa.generationAttempts, 6);
  assert.equal(provenance.visualQa.rejectedAttempts, 2);
  assert.equal(provenance.visualQa.estimatedOutputCostUsd, 0.99);
  assert.equal(Object.keys(provenance.items).length, 4);

  const urls = new Set();
  for (const slug of newWayuuSlugs) {
    const data = corpus.get(slug);
    const media = {
      horizontal: wayuuMedia[slug][0],
      vertical: wayuuVerticalMedia[slug],
    };
    for (const orientation of ["horizontal", "vertical"]) {
      const key = `${slug}:${orientation}`;
      const item = provenance.items[key];
      const editorialPrompt =
        orientation === "horizontal"
          ? data.image_prompt_horizontal
          : data.image_prompt_vertical;
      const dimensions =
        orientation === "horizontal"
          ? { width: 1536, height: 864 }
          : { width: 864, height: 1536 };
      assert.equal(item.slug, slug);
      assert.equal(item.orientation, orientation);
      assert.equal(item.provider, "openai");
      assert.equal(item.model, "gpt-image-2");
      assert.equal(item.quality, "high");
      assert.equal(item.visualQa, "approved");
      assert.ok(item.visualReviewNote);
      assert.equal(item.editorialPrompt, editorialPrompt);
      assert.equal(digest(item.editorialPrompt), item.editorialPromptSha256);
      assert.equal(digest(item.generationPrompt), item.generationPromptSha256);
      assert.deepEqual(item.outputDimensions, dimensions);
      assert.equal(item.outputFormat, "jpeg");
      assert.equal(item.url, media[orientation]);
      assert.match(item.url, /-wayuu-openai-/);
      assert.equal(item.sourceUrls.length, 7);
      assert.equal(new Set(item.sourceUrls).size, 7);
      assert.equal(item.uploadSha256, item.sha256);
      assert.ok(!urls.has(item.url), `${key}: URL repetida`);
      urls.add(item.url);
    }
  }
  assert.equal(urls.size, 4);
});

test("las correcciones y relaciones editoriales críticas quedan explícitas", async () => {
  const corpus = new Map((await loadCorpus()).map((data) => [data.slug, data]));
  const jirairay = corpus.get("jirairay");
  assert.match(jirairay.title, /canto/i);
  assert.match(`${jirairay.historia}\n${jirairay.researchNotes}`, /no.*independiente|no entidad independiente/is);

  const pushaina = corpus.get("el-indio-pushalna");
  assert.equal(pushaina.title, "El indio Pushaina");
  assert.match(pushaina.researchNotes, /error tipográfico/i);

  const gap = corpus.get("las-wanulus-y-el-valle-de-la-muerte");
  assert.match(`${gap.historia}\n${gap.researchNotes}`, /documentación pendiente/i);

  const cycle = [
    corpus.get("ulepala"),
    corpus.get("el-viaje-del-mas-alla"),
    corpus.get("los-dominios-de-juya"),
  ];
  for (const data of cycle) {
    assert.match(
      `${data.versiones}\n${data.researchNotes}`,
      /Ulépala|El viaje del más allá|episodio focal|ciclo/i,
      data.slug,
    );
  }
});

test("las incorporaciones son narraciones documentadas y no entradas de glosario", async () => {
  const corpus = new Map((await loadCorpus()).map((data) => [data.slug, data]));
  assert.match(
    corpus.get("los-mellizos-transformadores").researchNotes,
    /Nicanor González.*Ramón Paz Ipuana.*José Enrique Finol/is,
  );
  assert.match(
    corpus.get("waleker-el-origen-del-tejido").historia,
    /ausente del corpus/i,
  );
});
