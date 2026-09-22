import path from "node:path";
import fs from "node:fs/promises";
import { digest, mapLimit, resolveCatalogAsset } from "./story-catalog.mjs";
import { layoutForScene, paletteForScene, validateStory, STORY_PALETTES, contrastRatio, motifForScene, motifSrc } from "../../../src/lib/instagram-story.js";

export async function compileStory(story, catalog, { root = process.cwd() } = {}) {
  const qa = validateStory(story, catalog);
  if (!qa.ok) throw new Error(qa.errors.join("\n"));
  for (const palette of Object.values(STORY_PALETTES)) {
    for (const key of ["foreground", "secondary", "accent"]) {
      if (contrastRatio(palette[key], palette.background) < 4.5) throw new Error(`Contraste insuficiente: ${key}.`);
    }
  }
  const ids = [...new Set(story.slides.map((s) => s.asset_id).filter(Boolean))];
  const hashes = new Set();
  const media = await mapLimit(ids, 4, async (id) => {
    const asset = catalog.assets.find((a) => a.id === id);
    const hash = digest(await fs.readFile(await resolveCatalogAsset(asset, root)));
    if (hashes.has(hash)) throw new Error("La misma imagen aparece con dos nombres distintos.");
    hashes.add(hash);
    return { ...asset, sha256: hash, src: `/api/instagram/story-assets/${story.community}/${story.slug}/${encodeURIComponent(id)}` };
  });
  const decorations = await Promise.all([...new Set(story.slides.map(motifForScene).filter(Boolean))].map(async (id) => {
    const src = motifSrc(id), file = `public${src}`;
    return { id, src, file, sha256: digest(await fs.readFile(path.join(root, file))) };
  }));
  return {
    ...story, decorations, schema: "carousel-composition-v1", story_sha256: digest(JSON.stringify(story)),
    source: catalog.source, qa, review_status: "draft", assets: media,
    slides: story.slides.map((slide, index) => {
      const asset = media.find((a) => a.id === slide.asset_id);
      return { ...slide, sequence: index + 1, layout: layoutForScene(slide, asset, index), palette: slide.palette || paletteForScene(slide), motif: motifForScene(slide) };
    }),
  };
}
