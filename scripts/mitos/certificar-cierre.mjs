#!/usr/bin/env node

/**
 * Congela y certifica el corpus visual muisca que existe en el filesystem.
 *
 * Produce dos artefactos aditivos:
 *   - JSON de cierre con alcance, conteos, faltantes aceptados y publicación.
 *   - SHA256SUMS de todas las imágenes, manifiestos y recibos de producción.
 *
 * No genera, reemplaza, publica ni elimina imágenes.
 *
 *   node scripts/mitos/certificar-cierre.mjs \
 *     --accepted-final \
 *     --publication-id cierre-muisca-2026-08-26
 */

import { createHash } from "node:crypto";
import { createReadStream, existsSync, readFileSync, readdirSync } from "node:fs";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { extname, join, relative, resolve } from "node:path";
import { execFileSync } from "node:child_process";

import sharp from "sharp";

const REPO_ROOT = resolve(new URL("../../", import.meta.url).pathname);
const COMMUNITY_ROOT = join(REPO_ROOT, "content/videos/muiscas");
const PLAN_PATH = join(REPO_ROOT, "content/mitos-visuales/muiscas.json");

function parseArgs(argv) {
  const args = { acceptedFinal: false, date: "2026-08-26" };
  for (let i = 2; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--accepted-final") args.acceptedFinal = true;
    else if (token === "--date") args.date = argv[++i];
    else if (token === "--publication-id") args.publicationId = argv[++i];
    else if (token === "--output-dir") args.outputDir = argv[++i];
    else throw new Error(`Argumento no reconocido: ${token}`);
  }
  return args;
}

async function walk(dir) {
  if (!existsSync(dir)) return [];
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await walk(path));
    else if (entry.isFile()) out.push(path);
  }
  return out;
}

async function sha256(path) {
  const hash = createHash("sha256");
  await new Promise((resolvePromise, reject) => {
    const stream = createReadStream(path);
    stream.on("data", (chunk) => hash.update(chunk));
    stream.on("error", reject);
    stream.on("end", resolvePromise);
  });
  return hash.digest("hex");
}

async function mapLimit(items, limit, fn) {
  const results = new Array(items.length);
  let cursor = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await fn(items[index], index);
    }
  });
  await Promise.all(workers);
  return results;
}

function git(command) {
  return execFileSync("git", command, { cwd: REPO_ROOT, encoding: "utf8" }).trim();
}

function expectedVideo(plan, slug, myth) {
  const keyframeDir = join(
    COMMUNITY_ROOT,
    "videos",
    myth.carpeta_video || slug,
    "keyframes"
  );
  const required = [];
  const reused = [];
  for (const [block, value] of Object.entries(myth.video?.bloques || {})) {
    for (const side of ["a", "b"]) {
      const scene = value[side];
      if (!scene) continue;
      const tag = `${block}${side}`;
      if (scene.reusa) reused.push({ tag, ref: scene.reusa });
      else required.push({
        tag,
      });
    }
  }
  return { keyframeDir, required, reused };
}

function physicalKeyframePair(dir, tag) {
  if (!existsSync(dir)) return null;
  const names = readdirSync(dir);
  const escaped = tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const master = names.find((name) =>
    !name.includes(".crop-9x16.") && new RegExp(`^${escaped}(?:_.+)?\\.jpg$`).test(name)
  );
  if (!master) return null;
  const crop = master.replace(/\.jpg$/, ".crop-9x16.jpg");
  return existsSync(join(dir, crop)) ? { master, crop } : null;
}

function receiptSummary(publicationId) {
  if (!publicationId) return null;
  const dir = join(COMMUNITY_ROOT, "publication-receipts", publicationId);
  if (!existsSync(dir)) return { publication_id: publicationId, dir: relative(REPO_ROOT, dir), receipts: [] };
  const receipts = [];
  for (const name of readdirSync(dir).filter((entry) => entry.endsWith(".json")).sort()) {
    const receipt = JSON.parse(readFileSync(join(dir, name), "utf8"));
    receipts.push({
      slug: receipt.myth?.slug,
      status: receipt.status,
      before: receipt.before,
      after: receipt.after,
      preservation: receipt.preservation,
      revalidation: receipt.revalidation,
      receipt: relative(REPO_ROOT, join(dir, name)),
    });
  }
  receipts.sort((a, b) => a.slug.localeCompare(b.slug));
  return { publication_id: publicationId, dir: relative(REPO_ROOT, dir), receipts };
}

async function main() {
  const args = parseArgs(process.argv);
  if (!args.acceptedFinal) {
    throw new Error("Falta --accepted-final; el cierre parcial requiere aceptación explícita");
  }

  const plan = JSON.parse(await readFile(PLAN_PATH, "utf8"));
  const myths = Object.entries(plan.mitos || {});
  const bibleManifestPath = join(COMMUNITY_ROOT, "biblia/manifest.json");
  const bibleManifest = JSON.parse(await readFile(bibleManifestPath, "utf8"));
  const problems = [];
  const mythRows = [];
  let triptychFulfilled = 0;
  let videoRequired = 0;
  let videoFulfilled = 0;
  const videoMissing = [];

  for (const [slug, myth] of myths) {
    const triptychDir = join(COMMUNITY_ROOT, "mitos", myth.carpeta || slug);
    const triptych = {};
    for (const role of ["entrada", "acto", "huella"]) {
      const path = join(triptychDir, `${role}.jpg`);
      const exists = existsSync(path);
      triptych[role] = exists ? relative(REPO_ROOT, path) : null;
      if (exists) triptychFulfilled += 1;
      else problems.push(`falta tríptico ${slug}/${role}`);
    }
    if (!existsSync(join(triptychDir, "manifest.json"))) {
      problems.push(`falta manifiesto de tríptico ${slug}`);
    }

    const video = expectedVideo(plan, slug, myth);
    const missing = [];
    let fulfilled = 0;
    for (const item of video.required) {
      videoRequired += 1;
      if (physicalKeyframePair(video.keyframeDir, item.tag)) {
        fulfilled += 1;
        videoFulfilled += 1;
      } else {
        missing.push(item.tag);
        videoMissing.push({ slug, tag: item.tag });
      }
    }
    mythRows.push({
      slug,
      triptych_folder: relative(REPO_ROOT, triptychDir),
      triptych,
      video: {
        required: video.required.length,
        fulfilled,
        missing,
        reused: video.reused,
        folder: relative(REPO_ROOT, video.keyframeDir),
      },
    });
  }

  const bibleItems = Object.keys(bibleManifest.items || {});
  const bibleMissing = [];
  for (const name of bibleItems) {
    const master = join(COMMUNITY_ROOT, "biblia", `${name}.jpg`);
    const crop = join(COMMUNITY_ROOT, "biblia", `${name}.crop-9x16.jpg`);
    if (!existsSync(master) || !existsSync(crop)) bibleMissing.push(name);
  }
  if (bibleMissing.length) problems.push(`faltan archivos de biblia: ${bibleMissing.join(", ")}`);

  const allFiles = (await walk(COMMUNITY_ROOT))
    .filter((path) => !path.includes(`${join(COMMUNITY_ROOT, "certificacion")}/`))
    .filter((path) => [".jpg", ".jpeg", ".png", ".json"].includes(extname(path).toLowerCase()))
    .sort();
  const imageFiles = allFiles.filter((path) => [".jpg", ".jpeg", ".png"].includes(extname(path).toLowerCase()));
  const invalidImages = [];
  const imageMeta = await mapLimit(imageFiles, 12, async (path) => {
    try {
      const meta = await sharp(path).metadata();
      if (!meta.width || !meta.height) throw new Error("dimensiones ausentes");
      return { path: relative(REPO_ROOT, path), width: meta.width, height: meta.height, bytes: meta.size || null };
    } catch (error) {
      invalidImages.push({ path: relative(REPO_ROOT, path), error: error.message });
      return null;
    }
  });
  if (invalidImages.length) problems.push(`${invalidImages.length} imágenes ilegibles`);

  const checksumRows = await mapLimit(allFiles, 8, async (path) => ({
    path: relative(REPO_ROOT, path),
    hash: await sha256(path),
  }));
  const outputDir = resolve(args.outputDir || join(COMMUNITY_ROOT, "certificacion"));
  await mkdir(outputDir, { recursive: true });
  const basename = `cierre-muisca-${args.date}`;
  const sumsPath = join(outputDir, `${basename}.SHA256SUMS`);
  const reportPath = join(outputDir, `${basename}.json`);
  const sums = checksumRows.map((row) => `${row.hash}  ${row.path}`).join("\n") + "\n";
  await writeFile(sumsPath, sums);
  const sumsHash = createHash("sha256").update(sums).digest("hex");

  const publication = receiptSummary(args.publicationId);
  if (publication) {
    if (publication.receipts.length !== myths.length) {
      problems.push(`publicación con ${publication.receipts.length}/${myths.length} recibos`);
    }
    const badReceipts = publication.receipts.filter((row) => row.status !== "published");
    if (badReceipts.length) problems.push(`${badReceipts.length} recibos no publicados`);
  }

  const declaredBible = myths.reduce((sum, [, myth]) => sum + Object.keys(myth.biblia || {}).length, 0);
  const uniqueRequired = declaredBible + (myths.length * 3) + videoRequired;
  const uniqueFulfilled = declaredBible + triptychFulfilled + videoFulfilled;
  const acceptedMissing = videoRequired - videoFulfilled;
  const report = {
    schema: "mitos-colombia-muisca-visual-closure-v1",
    generated_at: new Date().toISOString(),
    accepted_by_user: true,
    acceptance: "El usuario dio por cumplido el objetivo con el corpus efectivamente producido y aceptó cerrar sin generar las escenas de video restantes.",
    status: problems.length ? "failed" : "certified",
    source: {
      git_head: git(["rev-parse", "HEAD"]),
      git_branch: git(["branch", "--show-current"]),
      worktree_dirty: Boolean(git(["status", "--porcelain"])),
      plan: relative(REPO_ROOT, PLAN_PATH),
    },
    scope: {
      myths_with_written_plan: myths.length,
      bible_declared_in_plan: declaredBible,
      bible_physical_with_inherited: bibleItems.length,
      triptych_required: myths.length * 3,
      triptych_fulfilled: triptychFulfilled,
      video_required: videoRequired,
      video_fulfilled: videoFulfilled,
      video_not_generated_accepted: acceptedMissing,
      unique_required_by_plan: uniqueRequired,
      unique_fulfilled_at_closure: uniqueFulfilled,
    },
    physical_inventory: {
      files_hashed: checksumRows.length,
      image_files: imageFiles.length,
      readable_images: imageMeta.filter(Boolean).length,
      invalid_images: invalidImages,
      checksum_file: relative(REPO_ROOT, sumsPath),
      checksum_file_sha256: sumsHash,
    },
    bible: {
      manifest: relative(REPO_ROOT, bibleManifestPath),
      entries: bibleItems.length,
      missing_master_or_crop: bibleMissing,
    },
    accepted_video_omissions: videoMissing,
    publication,
    myths: mythRows,
    validation_problems: problems,
  };
  await writeFile(reportPath, JSON.stringify(report, null, 2) + "\n");

  console.log(`certificación: ${report.status}`);
  console.log(`mitos: ${myths.length}`);
  console.log(`biblia física: ${bibleItems.length}`);
  console.log(`trípticos: ${triptychFulfilled}/${myths.length * 3}`);
  console.log(`video: ${videoFulfilled}/${videoRequired} · aceptadas sin generar: ${acceptedMissing}`);
  console.log(`imágenes legibles: ${imageMeta.filter(Boolean).length}/${imageFiles.length}`);
  console.log(`checksums: ${relative(REPO_ROOT, sumsPath)} · ${sumsHash}`);
  console.log(`reporte: ${relative(REPO_ROOT, reportPath)}`);
  if (problems.length) {
    console.error(`problemas: ${problems.join("; ")}`);
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
