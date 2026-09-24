import fs from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import sharp from "sharp";

export const identifier = (value) => typeof value === "string" && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
export const digest = (bytes) => createHash("sha256").update(bytes).digest("hex");
export const readJson = async (file) => JSON.parse(await fs.readFile(file, "utf8"));

export async function optionalJson(file) {
  try { return await readJson(file); }
  catch (error) { if (error.code === "ENOENT") return null; throw error; }
}

export async function mapLimit(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;
  const workers = await Promise.allSettled(Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (next < items.length) { const i = next++; results[i] = await fn(items[i], i); }
  }));
  const failed = workers.find((worker) => worker.status === "rejected");
  if (failed) throw failed.reason;
  return results;
}

export async function communitySlugs(community, root = process.cwd()) {
  if (!identifier(community)) throw new Error("Comunidad inválida.");
  const files = await fs.readdir(path.join(root, "docs/videos", community, "actas"));
  return files.filter((file) => /^acta-[a-z0-9-]+\.json$/.test(file))
    .map((file) => file.slice(5, -5)).sort();
}

function sceneDescription(item, key) {
  const prompt = item.escena || item.scene || item.prompt || "";
  const scene = prompt.split(/Escena:\s*/i).at(-1).split(/\n\s*(?:Paleta|Evitar SIEMPRE):/i)[0];
  return scene.trim().replace(/^-\s*/, "") || key.replace(/[_-]/g, " ");
}

// Only paths resolved from this myth's manifests enter the catalog. No global
// filename search: bochica and el-tequendama must never become aliases.
export async function loadStoryCatalog({ community, slug, root = process.cwd() }) {
  if (!identifier(community) || !identifier(slug)) throw new Error("Mito o comunidad inválidos.");
  const actaPath = `docs/videos/${community}/actas/acta-${slug}.json`;
  const actaBytes = await fs.readFile(path.join(root, actaPath));
  const acta = JSON.parse(actaBytes);
  if ((acta.canon_slug || acta.mito) !== slug || acta.comunidad !== community) {
    throw new Error(`El acta no pertenece a ${community}/${slug}.`);
  }
  const base = `content/videos/${community}`;
  const keyframePath = `${base}/videos/${slug}/keyframes/manifest.json`;
  const triptychPath = `${base}/mitos/${slug}/manifest.json`;
  const biblePath = `${base}/biblia/manifest.json`;
  const overridesPath = `content/instagram/asset-reviews/${community}/${slug}.json`;
  const [keyframes, triptych, bible, overrides] = await Promise.all([
    optionalJson(path.join(root, keyframePath)), optionalJson(path.join(root, triptychPath)),
    optionalJson(path.join(root, biblePath)), optionalJson(path.join(root, overridesPath)),
  ]);
  const guionDirectory = path.join(root, "docs/videos", community, "mvp-guiones");
  const guionFiles = await fs.readdir(guionDirectory).catch((error) => {
    if (error.code === "ENOENT") return []; throw error;
  });
  const latest = guionFiles.filter((name) => new RegExp(`^guion-${slug}-v\\d+\\.json$`).test(name))
    .sort((a, b) => Number(b.match(/-v(\d+)/)[1]) - Number(a.match(/-v(\d+)/)[1]))[0];
  const guionPath = latest ? `docs/videos/${community}/mvp-guiones/${latest}` : null;
  const guion = guionPath ? await readJson(path.join(root, guionPath)) : null;
  const referenced = new Set();
  const requests = [];
  for (const [key, item] of Object.entries(keyframes?.items || {})) {
    if (item.kind && item.kind !== "keyframe") continue;
    requests.push({ key, item, kind: "keyframe", manifest: keyframePath,
      directory: `${base}/videos/${slug}/keyframes`, names: [`${key}.jpg`, `${key}.png`, `${key}.jpeg`] });
    for (const ref of item.refs || []) referenced.add(ref.split("/").at(-1));
  }
  for (const [key, item] of Object.entries(triptych?.items || {})) {
    if (!item.archivo) continue;
    requests.push({ key, item, kind: "triptych", manifest: triptychPath,
      directory: `${base}/mitos/${slug}`, names: [item.archivo,
        ...({ horizontal: ["entrada.jpg"], vertical: ["acto.jpg"], cuadrada: ["huella.jpg"] }[key] || [])] });
    for (const ref of item.refs || []) referenced.add(ref.split("/").at(-1));
  }
  for (const key of [...referenced].sort()) {
    const item = bible?.items?.[key];
    if (!item) continue;
    requests.push({ key, item, kind: "bible", manifest: biblePath,
      directory: `${base}/biblia`, names: [`${key}.jpg`, `${key}.png`, `${key}.jpeg`] });
  }
  const missing = [];
  const unreadable = [];
  const assets = (await mapLimit(requests, 8, async ({ key, item, kind, manifest, directory, names }) => {
    for (const name of names) {
      if (path.basename(name) !== name) throw new Error(`Archivo fuera del manifiesto: ${name}`);
      const file = `${directory}/${name}`;
      try {
        const metadata = await sharp(path.join(root, file)).metadata();
        const id = `${kind}:${key}`;
        const review = overrides?.assets?.[id];
        return { id, kind, file, manifest, width: metadata.width, height: metadata.height,
          description: sceneDescription(item, key), refs: item.refs || [],
          status: review?.status || "unreviewed", review: review?.reason || null };
      } catch (error) {
        if (/unsupported image|corrupt|bad header/i.test(error.message)) {
          unreadable.push(file);
        } else if (!/missing|no such file|ENOENT|Input file is missing/i.test(error.message)) throw error;
      }
    }
    missing.push(`${kind}:${key}`);
    return null;
  })).filter(Boolean).sort((a, b) => a.id.localeCompare(b.id, "es", { numeric: true }));
  return {
    schema: "carousel-catalog-v1", community, slug, title: guion?.titulo || slug.replace(/-/g, " "),
    source: { acta: actaPath, acta_sha256: digest(actaBytes), canon_sha256: acta.canon_sha256 || null, guion: guionPath },
    acta, guion, assets, missing, unreadable,
  };
}

// Check real paths too: an in-tree symlink must not expose an unrelated file.
export async function resolveCatalogAsset(asset, root = process.cwd()) {
  const allowed = await fs.realpath(path.join(root, "content/videos"));
  const resolved = await fs.realpath(path.join(root, asset.file));
  const relative = path.relative(allowed, resolved);
  if (relative.startsWith("..") || path.isAbsolute(relative)) throw new Error("Imagen fuera del catálogo.");
  return resolved;
}
