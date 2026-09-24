import { verifyPhotoText } from "./story-photo-contrast.mjs";
import fs from "node:fs/promises";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import sharp from "sharp";
import { chromium } from "playwright";
import { compileStory } from "./story-compiler.mjs";
import { digest, mapLimit, readJson, resolveCatalogAsset } from "./story-catalog.mjs";

const run = promisify(execFile);
export async function prepareStoryEdition(story, catalog, { root = process.cwd() } = {}) {
  const composition = await compileStory(story, catalog, { root });
  const parent = path.join(root, "content/instagram/editions", story.community, story.slug);
  await fs.mkdir(parent, { recursive: true });
  let directory;
  let edition;
  for (let n = 1; n <= 9999; n++) {
    edition = `prepared-${String(n).padStart(2, "0")}`;
    directory = path.join(parent, edition);
    try { await fs.mkdir(directory); break; }
    catch (error) { if (error.code !== "EEXIST" || n === 9999) throw error; }
  }
  const engineFiles = ["src/app/layout.js", "src/app/globals.css", "src/app/design-system/instagram-story/page.js", "src/components/instagram/StorySlide.js", "src/components/instagram/StoryVariant.js", "src/components/instagram/variants.module.css", "src/lib/instagram-story-variants.js", "src/components/instagram/story.module.css", "src/lib/instagram-story.js", "src/lib/instagram-abstract-motifs.js", "scripts/instagram/lib/story-compiler.mjs", "scripts/instagram/lib/story-renderer.mjs", "scripts/instagram/lib/story-photo-contrast.mjs", "package-lock.json"];
  const engine = Object.fromEntries(await Promise.all(engineFiles.map(async (file) => [file, digest(await fs.readFile(path.join(root, file)))])));
  const write = (file, value) => fs.writeFile(path.join(directory, file), `${JSON.stringify(value, null, 2)}\n`, { flag: "wx" });
  await write("story.json", story);
  await write("composition.json", composition);
  await write("freeze.json", { schema: "carousel-freeze-v1", created_at: new Date().toISOString(), edition,
    story_sha256: composition.story_sha256, composition_sha256: digest(JSON.stringify(composition)),
    source: composition.source, decorations: composition.decorations, assets: composition.assets.map(({ id, file, sha256 }) => ({ id, file, sha256 })), engine });
  return { directory, edition, composition };
}

export async function renderPreparedStory(prepared, { root = process.cwd(), baseUrl = "http://127.0.0.1:3111", channel = "chrome" } = {}) {
  const target = new URL(baseUrl);
  if (!["127.0.0.1", "localhost", "[::1]"].includes(target.hostname) || !["http:", "https:"].includes(target.protocol)) throw new Error("El render solo admite el servidor local.");
  const { composition, edition } = prepared;
  const freeze = await readJson(path.join(prepared.directory, "freeze.json"));
  if (digest(JSON.stringify(composition)) !== freeze.composition_sha256) throw new Error("La composición cambió después del freeze: prepara una edición nueva.");
  for (const [file, hash] of Object.entries(freeze.engine)) {
    if (digest(await fs.readFile(path.join(root, file))) !== hash) throw new Error("El motor cambió después del freeze: prepara una edición nueva.");
  }
  const output = path.join(root, "output/instagram", composition.community, composition.slug, edition);
  await fs.mkdir(output, { recursive: true });
  const pinned = new Map();
  for (const asset of composition.assets) {
    const bytes = await fs.readFile(await resolveCatalogAsset(asset, root));
    if (digest(bytes) !== asset.sha256) throw new Error(`La imagen cambió después del freeze: ${asset.id}`);
    pinned.set(asset.src, { bytes, contentType: asset.file.endsWith(".png") ? "image/png" : "image/jpeg" });
  }
  for (const decoration of composition.decorations || []) {
    const bytes = await fs.readFile(path.join(root, decoration.file));
    if (digest(bytes) !== decoration.sha256) throw new Error(`El adorno cambió después del freeze: ${decoration.id}`);
    pinned.set(decoration.src, { bytes, contentType: "image/png" });
  }
  const browser = await chromium.launch({ channel });
  let rendered;
  try {
    rendered = await mapLimit(composition.slides, 3, async (slide, index) => {
      const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
      const errors = [];
      page.on("pageerror", (error) => errors.push(error.message));
      // The export uses the verified bytes, not a file that might change mid-render.
      await page.route(/\/(?:api\/instagram\/story-assets|motifs\/carousel\/(?:v3|abstract-v4))\//, async (route) => {
        const item = pinned.get(new URL(route.request().url()).pathname);
        if (!item) return route.abort();
        return route.fulfill({ body: item.bytes, contentType: item.contentType });
      });
      try {
        const url = new URL("/design-system/instagram-story", baseUrl);
        url.search = new URLSearchParams({ community: composition.community, myth: composition.slug, edition, slide: String(index + 1) }).toString();
        const response = await page.goto(url.href, { waitUntil: "networkidle", timeout: 90_000 });
        if (!response?.ok()) throw new Error(`HTTP ${response?.status()} al renderizar la lámina ${index + 1}.`);
        const frame = page.locator("[data-story-slide]");
        await frame.waitFor();
        await page.evaluate(async () => {
          await document.fonts.ready;
          await Promise.all([...document.querySelectorAll("[data-story-slide] img")].map((img) => img.decode()));
        });
        const photoContrast = await verifyPhotoText(page, frame);
        errors.push(...photoContrast.filter(c => !c.ok).map(c => `Contraste sobre imagen ${c.minimum}: ${c.text}`));
        const geometry = await frame.evaluate((element) => {
          const area = element.getBoundingClientRect();
          const slots = [...element.querySelectorAll("[data-text-slot], [data-art-slot], [data-decoration-slot]")].map((node) => {
            const rect = node.getBoundingClientRect();
            const panel = node.closest("[data-ink-panel]");
            const panelRect = panel?.getBoundingClientRect();
            const protectedText = panel && getComputedStyle(panel).backgroundColor === getComputedStyle(element).backgroundColor && getComputedStyle(panel).opacity === "1" && rect.left >= panelRect.left && rect.right <= panelRect.right && rect.top >= panelRect.top && rect.bottom <= panelRect.bottom;
            return { text: node.textContent?.slice(0, 80) || "Imagen", art: node.hasAttribute("data-art-slot"), background: node.hasAttribute("data-background-art"), decoration: node.hasAttribute("data-decoration-slot"), protectedText: Boolean(protectedText || node.hasAttribute("data-photo-text")),
              left: rect.left - area.left, top: rect.top - area.top, right: rect.right - area.left, bottom: rect.bottom - area.top,
              width: rect.width, height: rect.height, clipped: node.scrollWidth > node.clientWidth + 1 || node.scrollHeight > node.clientHeight + 1 };
          }).filter((s) => s.width > 0 && s.height > 0);
          const issues = [];
          for (const slot of slots) {
            if (slot.left < -1 || slot.top < -1 || slot.right > area.width + 1 || slot.bottom > area.height + 1 || slot.clipped) issues.push(`Desbordamiento: ${slot.text}`);
          }
          for (let i = 0; i < slots.length; i++) for (let j = i + 1; j < slots.length; j++) {
            const a = slots[i], b = slots[j];
            // Photo overlays are admitted only after the sampled contrast check above.
            // Opaque legacy panels and decoration keep their existing overlap rule.
            if ((a.background && (b.protectedText || b.decoration)) || (b.background && (a.protectedText || a.decoration))) continue;
            if (Math.min(a.right, b.right) - Math.max(a.left, b.left) > 1 && Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) > 1) issues.push(`Cruce: ${a.text} / ${b.text}`);
          }
          const broken = [...element.querySelectorAll("img")].some((img) => !img.complete || !img.naturalWidth);
          if (broken) issues.push("Imagen incompleta.");
          return { width: area.width, height: area.height, issues, slots };
        });
        if (geometry.width !== 1080 || geometry.height !== 1350) errors.push("Dimensiones de lienzo incorrectas.");
        errors.push(...geometry.issues);
        const file = `${String(index + 1).padStart(2, "0")}-${slide.role}.png`;
        await frame.screenshot({ path: path.join(output, file), animations: "disabled" });
        const metadata = await sharp(path.join(output, file)).metadata();
        if (metadata.width !== 1080 || metadata.height !== 1350) throw new Error("PNG con dimensiones incorrectas.");
        return { sequence: index + 1, file, sha256: digest(await fs.readFile(path.join(output, file))), geometry, photoContrast, errors };
      } finally { await page.close(); }
    });
  } finally { await browser.close(); }
  const failures = rendered.filter((item) => item.errors.length);
  if (failures.length) {
    await fs.writeFile(path.join(output, "qa-failures.json"), JSON.stringify(failures, null, 2));
    throw new Error(failures.map((item) => `Lámina ${item.sequence}: ${item.errors.join("; ")}`).join("\n"));
  }
  const thumbWidth = 260, gap = 20, cols = 4, top = 100;
  const sheetWidth = cols * (thumbWidth + gap) + gap;
  const sheetHeight = top + Math.ceil(rendered.length / cols) * 370 + gap;
  const layers = await Promise.all(rendered.map(async (item, index) => ({ input: await sharp(path.join(output, item.file)).resize(thumbWidth, 325).png().toBuffer(), left: gap + (index % cols) * (thumbWidth + gap), top: top + Math.floor(index / cols) * 370 })));
  const xml = (value) => String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" }[c]));
  const labels = rendered.map((item, index) => `<text x="${gap + (index % cols) * (thumbWidth + gap)}" y="${top + Math.floor(index / cols) * 370 + 347}" font-size="12">${String(index + 1).padStart(2, "0")} · ${xml(composition.slides[index].headline)}</text>`).join("");
  const overlay = `<svg xmlns="http://www.w3.org/2000/svg" width="${sheetWidth}" height="${sheetHeight}"><g fill="#173c2f" font-family="Arial"><text x="20" y="43" font-size="30">${xml(composition.title)} · Relato ilustrado</text><text x="20" y="72" font-size="14">${rendered.length} momentos · ${composition.assets.length} imágenes del archivo · Borrador editorial</text>${labels}</g></svg>`;
  await sharp({ create: { width: sheetWidth, height: sheetHeight, channels: 3, background: "#e8ece2" } }).composite([...layers, { input: Buffer.from(overlay), left: 0, top: 0 }]).png().toFile(path.join(output, "contact-sheet.png"));
  await fs.writeFile(path.join(output, "caption.txt"), `${composition.caption}\n`);
  await fs.writeFile(path.join(output, "alt-text.txt"), composition.slides.map((s, i) => `${String(i + 1).padStart(2, "0")} · ${s.alt}`).join("\n\n") + "\n");
  await fs.writeFile(path.join(output, "manifest.json"), JSON.stringify({ schema: "carousel-export-v1", status: "draft", edition, story_sha256: composition.story_sha256, freeze: path.relative(root, path.join(prepared.directory, "freeze.json")), qa: composition.qa, slides: rendered }, null, 2) + "\n");
  const zip = path.join(output, `${composition.slug}-carrusel.zip`);
  await run("zip", ["-q", "-j", zip, ...rendered.map((r) => path.join(output, r.file)), ...["contact-sheet.png", "caption.txt", "alt-text.txt", "manifest.json"].map((file) => path.join(output, file)), path.join(prepared.directory, "story.json"), path.join(prepared.directory, "freeze.json")]);
  return { output, zip, slides: rendered.length, edition };
}
