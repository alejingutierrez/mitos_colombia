import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { communitySlugs, loadStoryCatalog, mapLimit, readJson, digest, resolveCatalogAsset } from "./lib/story-catalog.mjs";
import { compileStory } from "./lib/story-compiler.mjs";
import { prepareStoryEdition } from "./lib/story-renderer.mjs";
import { planStoryWithBedrock } from "./lib/story-planner.mjs";
import { contrastRatio, STORY_PALETTES, validateStory, layoutForScene, motifForScene, motifSrc } from "../../src/lib/instagram-story.js";
import { STORY_VARIANTS, STORY_TYPES, slideType } from "../../src/lib/instagram-story-variants.js";
import { STORY_TOOL_SCHEMA, STORY_SYSTEM_PROMPT } from "./lib/story-planner.mjs";
import { isLocalStoryRequest } from "../../src/lib/instagram-story-server.js";
import { ABSTRACT_MOTIFS, upgradeStoryMotifs } from "../../src/lib/instagram-abstract-motifs.js";

const catalog = await loadStoryCatalog({ community: "muiscas", slug: "bachue" });
const sourceStory = await readJson("content/instagram/stories/muiscas/bachue.json");
const clone = () => structuredClone(sourceStory);

test("los 50 originales pagados coinciden con sus hashes y el selector", async () => {
  const manifest = await readJson("content/instagram/iconography/abstract-v4/manifest.json");
  assert.equal(manifest.assets.length, 50);
  assert.equal(new Set(manifest.assets.map(asset => asset.sha256)).size, 50);
  assert.deepEqual(new Set(manifest.assets.map(asset => asset.id)), new Set(Object.keys(ABSTRACT_MOTIFS)));
  for (const asset of manifest.assets) {
    assert.equal(motifSrc(asset.id), `/${asset.file.replace(/^public\//, "")}`);
    assert.equal(digest(await fs.readFile(asset.file)), asset.sha256, asset.id);
  }
});

test("actualizar adornos conserva todas las decisiones del borrador sin mutarlo", () => {
  const story = clone();
  story.slides[0].motif = "laguna";
  story.slides[1].motif = null;
  story.slides[2].motif = "abstract-pulso";
  story.slides[0].headline = "Mi titular editado";
  story.slides[0].image_backup = { asset_id: "seleccion-personal" };
  const original = structuredClone(story);
  const migrated = upgradeStoryMotifs(story);
  assert.equal(migrated.slides[0].motif, "abstract-onda");
  assert.equal(migrated.slides[1].motif, null);
  assert.equal(migrated.slides[2].motif, "abstract-pulso");
  migrated.slides[0].motif = "laguna";
  assert.deepEqual(migrated, original);
  assert.deepEqual(story, original);
});

test("el relato conserva los 15 nudos y usa tres familias de imágenes", async () => {
  const composition = await compileStory(clone(), catalog);
  assert.deepEqual(composition.qa.coverage, { covered: 15, omitted: 0, total: 15 });
  assert.equal(composition.assets.length, 7);
  assert.deepEqual(new Set(composition.assets.map((a) => a.kind)), new Set(["bible", "keyframe", "triptych"]));
  assert.equal(composition.slides[7].layout, "slide-1-1");
});

test("ninguna combinación de texto y fondo depende del color de una imagen", () => {
  for (const palette of Object.values(STORY_PALETTES)) for (const key of ["foreground", "secondary", "accent"]) {
    assert.ok(contrastRatio(palette[key], palette.background) >= 4.5, key);
  }
});

test("las familias visuales no dependen del recorte de la imagen", () => {
  const slide = { role: "development", asset_id: "one" };
  assert.equal(layoutForScene(slide, { width: 1600, height: 900 }, 1), "slide-1-1");
  assert.equal(layoutForScene(slide, { width: 1000, height: 1000 }, 2), "slide-2-1");
  assert.equal(layoutForScene({ ...slide, slide_type: "slide-2" }, { width: 900, height: 1600 }, 1), "slide-2-1");
});

test("el contrato exige diez láminas, cierre e invitación separados", () => {
  assert.equal(sourceStory.slides.length, 10);
  assert.equal(STORY_TOOL_SCHEMA.properties.slides.minItems, 10);
  assert.equal(STORY_TOOL_SCHEMA.properties.slides.maxItems, 10);
  assert.match(STORY_SYSTEM_PROMPT, /exactamente 10/);
  for (const length of [8, 9, 11, 12, 14]) {
    const story = clone();
    story.slides = Array.from({length}, (_, i) => structuredClone(sourceStory.slides[i % 10]));
    assert.ok(validateStory(story, catalog).errors.some(e => e.includes("exactamente 10")));
  }
  const story = clone(); [story.slides[8], story.slides[9]] = [story.slides[9], story.slides[8]];
  assert.ok(validateStory(story, catalog).errors.some(e => e.includes("lámina 9")));
});

test("cada tipo ofrece cinco versiones que se conservan al exportar", async () => {
  assert.equal(Object.keys(STORY_VARIANTS).length, 25);
  for (const type of Object.keys(STORY_TYPES)) assert.equal(Object.values(STORY_VARIANTS).filter(v => v.kind === type).length, 5);
  for (let version = 1; version <= 5; version++) {
    const story = clone();
    story.slides.forEach((slide, index) => {
      slide.layout = `${slideType(slide, index)}-${version}`;
      if (STORY_VARIANTS[slide.layout].image === false) slide.asset_id = null;
    });
    const result = await compileStory(story, catalog);
    assert.equal(result.slides.length, 10);
    assert.deepEqual(result.slides.map(s=>s.layout), story.slides.map(s=>s.layout));
    assert.deepEqual(result.qa.coverage, { covered:15, omitted:0, total:15 });
  }
});

test("un nudo no puede desaparecer sin un descarte explícito", () => {
  const story = clone();
  story.slides = story.slides.map((s) => ({ ...s, covers: s.covers.map((id) => id === "n13" ? "n12" : id) }));
  assert.ok(validateStory(story, catalog).errors.includes("Nudo sin resolver: n13."));
  story.omissions = [{ id: "n13", reason: "Prueba de descarte declarado." }];
  assert.equal(validateStory(story, catalog).coverage.omitted, 1);
  story.slides[8].covers = ["n13"];
  assert.ok(validateStory(story, catalog).errors.some((e) => e.includes("cubierto y descartado")));
});

test("el acta nueva invalida una selección vieja", () => {
  const story = clone(); story.source.acta_sha256 = "old";
  assert.ok(validateStory(story, catalog).errors.some((e) => e.includes("acta cambió")));
});

test("la antigua cita inventada de Bachué no pasa el nuevo guion", () => {
  const story = clone(); story.slides[8].headline = "«Me está llamando la laguna»";
  assert.ok(validateStory(story, catalog).errors.some((e) => e.includes("cita sin evidencia")));
});

test("se bloquean las semillas inventadas y las imágenes de otro mito", () => {
  const story = clone(); story.slides[5].asset_id = "triptych:vertical";
  assert.ok(validateStory(story, catalog).errors.some((e) => e.includes("imagen descartada")));
  story.slides[5].asset_id = "bochica:travel";
  assert.ok(validateStory(story, catalog).errors.some((e) => e.includes("fuera del catálogo")));
});

test("la imagen no se reutiliza con otro nombre", async () => {
  const c = structuredClone(catalog), story = clone();
  const first = c.assets.find((a) => a.id === story.slides[0].asset_id);
  c.assets.push({ ...first, id: "alias:repeated" });
  story.slides[1].asset_id = "alias:repeated";
  await assert.rejects(compileStory(story, c), /dos nombres/);
});

test("el compositor rechaza exceso de texto sin truncarlo", async () => {
  const story = clone(); story.slides[3].body = "Una oración completa. ".repeat(30);
  const before = JSON.stringify(story);
  await assert.rejects(compileStory(story, catalog), /demasiado largo/);
  assert.equal(JSON.stringify(story), before);
});

test("el clímax y su consecuencia conservan momentos separados", () => {
  const story = clone(); story.slides[7].role = "development";
  assert.ok(validateStory(story, catalog).errors.some((e) => e.includes("consecutivos distintos")));
});

test("el corpus muisca completo entra en el catálogo sin alias entre mitos", async () => {
  const slugs = await communitySlugs("muiscas"); assert.equal(slugs.length, 41);
  const catalogs = await mapLimit(slugs, 4, (slug) => loadStoryCatalog({ community: "muiscas", slug }));
  assert.equal(catalogs.length, 41);
  for (const c of catalogs) {
    assert.ok(c.assets.length, c.slug);
    assert.equal(c.acta.canon_slug || c.acta.mito, c.slug);
    assert.ok(c.assets.filter((a) => a.kind === "keyframe").every((a) => a.file.includes(`/videos/${c.slug}/`)));
  }
  assert.ok(catalogs.every((c) => Array.isArray(c.unreadable) && Array.isArray(c.missing)));
});

test("rechaza rutas ajenas al taller", async () => {
  await assert.rejects(loadStoryCatalog({ community: "../muiscas", slug: "bachue" }), /inválid/);
  await assert.rejects(resolveCatalogAsset({ file: "package.json" }), /fuera del catálogo/);
});

test("la exportación local acepta Host normalizado y rechaza un origen externo", () => {
  assert.equal(isLocalStoryRequest(new Request("http://localhost:3111/api/instagram/story-export", {
    headers: { host: "127.0.0.1:3111", origin: "http://127.0.0.1:3111" },
  })), true);
  assert.equal(isLocalStoryRequest(new Request("http://localhost:3111/api/instagram/story-export", {
    headers: { host: "127.0.0.1:3111", origin: "https://example.com" },
  })), false);
});

test("el proveedor recibe todas las escenas pertinentes y repara su guion", async () => {
  let requests = 0;
  const client = { send: async (command) => {
    requests++;
    const payload = JSON.parse(command.input.messages[0].content[0].text);
    assert.equal(payload.acta.nudos.length, 15);
    assert.ok(payload.assets.length > 50);
    assert.ok(!payload.assets.some((a) => a.id === "triptych:vertical"));
    const story = clone();
    if (requests === 1) story.slides[4].headline = story.slides[3].headline;
    else assert.ok(payload.repair.some((e) => e.includes("repetido")));
    return { output: { message: { content: [{ toolUse: { name: "story_plan", input: story } }] } }, usage: { inputTokens: 1, outputTokens: 1 } };
  } };
  const result = await planStoryWithBedrock(catalog, { client, env: { INSTAGRAM_BEDROCK_MODEL_ID: "test" } });
  assert.equal(requests, 2); assert.equal(result.qa.ok, true);
});

test("cada preparación nueva preserva el freeze anterior", async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "mitos-story-test-"));
  try {
    const files = [...new Set(sourceStory.slides.map(motifForScene).filter(Boolean).map((id) => `public${motifSrc(id)}`)), ...new Set(sourceStory.slides.map((s) => catalog.assets.find((a) => a.id === s.asset_id)?.file).filter(Boolean)),
      "src/app/layout.js", "src/app/globals.css", "src/app/design-system/instagram-story/page.js", "src/components/instagram/StorySlide.js", "src/components/instagram/StoryVariant.js", "src/components/instagram/variants.module.css", "src/lib/instagram-story-variants.js", "src/components/instagram/story.module.css", "src/lib/instagram-story.js", "src/lib/instagram-abstract-motifs.js", "scripts/instagram/lib/story-compiler.mjs", "scripts/instagram/lib/story-renderer.mjs", "scripts/instagram/lib/story-photo-contrast.mjs", "package-lock.json"];
    for (const file of files) { await fs.mkdir(path.dirname(path.join(root, file)), { recursive: true }); await fs.copyFile(file, path.join(root, file)); }
    const a = await prepareStoryEdition(clone(), catalog, { root });
    const hash = digest(await fs.readFile(path.join(a.directory, "freeze.json")));
    const b = await prepareStoryEdition(clone(), catalog, { root });
    assert.equal(a.edition, "prepared-01"); assert.equal(b.edition, "prepared-02");
    assert.equal(digest(await fs.readFile(path.join(a.directory, "freeze.json"))), hash);
  } finally { await fs.rm(root, { recursive: true, force: true }); }
});

test("la portada tipográfica es válida y no necesita una fotografía", async () => {
  const story = clone(); Object.assign(story.slides[0], { asset_id: null, layout: "cover-type" });
  const result = await compileStory(story, catalog);
  assert.equal(result.slides[0].layout, "cover-type"); assert.equal(result.qa.imageCount, 6);
});

test("la elección de plantilla y encuadre llega intacta a la exportación", async () => {
  const story = clone(); Object.assign(story.slides[1], { layout: "immersive", focal: [28, 65], motif: "div-agua" });
  const result = await compileStory(story, catalog);
  assert.equal(result.slides[1].layout, "immersive"); assert.deepEqual(result.slides[1].focal, [28, 65]);
  assert.ok(result.decorations.every((m) => m.sha256.length === 64));
  assert.ok(result.decorations.some((m) => m.id === "div-agua"));
});

test("rechaza adornos ajenos, encuadres inválidos y plantillas sin imagen", () => {
  const story = clone(); Object.assign(story.slides[8], { motif: "../../private", layout: "immersive", focal: [-1, 110] });
  const result = validateStory(story, catalog);
  assert.ok(result.errors.some((e) => e.includes("adorno")));
  assert.ok(result.errors.some((e) => e.includes("encuadre")));
  assert.ok(result.errors.some((e) => e.includes("composición")));
});
