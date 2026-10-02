import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const batchPath = path.join(root, "content/videos/muiscas/video-batch-2026-08-31.json");
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function clipCount(slug) {
  const clipsDir = path.join(root, "content/videos/muiscas/videos", slug, "clips-v1");
  if (!fs.existsSync(clipsDir)) return 0;
  return fs.readdirSync(clipsDir).filter((name) => /^c\d{2}\.mp4$/.test(name)).length;
}

while (true) {
  const batch = JSON.parse(fs.readFileSync(batchPath, "utf8"));
  const pending = batch.entries.filter((entry) => entry.status !== "qa_complete");
  if (!pending.length) {
    console.log("[watch-finalize] todos los mitos están en qa_complete");
    break;
  }

  for (const entry of pending) {
    const movementPath = path.join(root, "content/videos/muiscas/videos", entry.slug, "movimiento-v1.json");
    if (!fs.existsSync(movementPath)) continue;
    const expected = JSON.parse(fs.readFileSync(movementPath, "utf8")).shots.length;
    const actual = clipCount(entry.slug);
    if (actual !== expected) continue;

    console.log(`[watch-finalize] ${entry.slug}: ${actual}/${expected}; cerrando entregables`);
    const result = spawnSync(
      "node",
      ["scripts/videos/finalize-muisca-video.mjs", "--slug", entry.slug],
      { cwd: root, encoding: "utf8" },
    );
    if (result.stdout) process.stdout.write(result.stdout);
    if (result.stderr) process.stderr.write(result.stderr);
    if (result.status !== 0) {
      console.error(`[watch-finalize] ${entry.slug} falló con código ${result.status}`);
      process.exit(result.status || 1);
    }
  }
  await sleep(30_000);
}
