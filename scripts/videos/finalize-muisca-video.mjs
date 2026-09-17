import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const args = process.argv.slice(2);
const slug = args[args.indexOf("--slug") + 1];
if (!slug || slug.startsWith("--")) {
  console.error("Uso: node scripts/videos/finalize-muisca-video.mjs --slug <mito>");
  process.exit(1);
}

const root = process.cwd();
const mythDir = path.join(root, "content/videos/muiscas/videos", slug);
const planPath = path.join(mythDir, "plan-v1-no-title.json");
const batchPath = path.join(root, "content/videos/muiscas/video-batch-2026-08-31.json");
const plan = JSON.parse(fs.readFileSync(planPath, "utf8"));

if (plan.burn_subtitles !== false || plan.write_srt !== false) {
  throw new Error(`${slug}: el plan no desactiva subtítulos`);
}
for (const block of plan.blocks) {
  if (block.title || block.title_sub || block.subtitle) {
    throw new Error(`${slug}: el bloque ${block.n} contiene texto en pantalla`);
  }
}

function run(command, commandArgs, options = {}) {
  return execFileSync(command, commandArgs, {
    cwd: root,
    encoding: "utf8",
    stdio: options.inherit ? "inherit" : ["ignore", "pipe", "pipe"],
  });
}

function probe(file) {
  const raw = run("ffprobe", [
    "-v", "error",
    "-show_entries", "stream=codec_name,codec_type,width,height,r_frame_rate:format=duration,size",
    "-of", "json",
    file,
  ]);
  const parsed = JSON.parse(raw);
  const video = parsed.streams.find((stream) => stream.codec_type === "video");
  const audio = parsed.streams.find((stream) => stream.codec_type === "audio");
  return {
    codec: video?.codec_name,
    width: video?.width,
    height: video?.height,
    fps: video?.r_frame_rate,
    audio: audio?.codec_name || null,
    duration_s: Number(parsed.format.duration),
    size: Number(parsed.format.size),
  };
}

for (const block of plan.blocks) {
  if (block.type !== "motion") continue;
  const clip = path.resolve(path.dirname(planPath), block.clip);
  const qa = probe(clip);
  if (qa.width !== 1080 || qa.height !== 1920 || qa.duration_s < 4.8 || qa.duration_s > 5.3) {
    throw new Error(`${slug}: clip ${block.n} inválido ${JSON.stringify(qa)}`);
  }
}

run("node", ["scripts/videos/validate-plan.mjs", "--plan", planPath], { inherit: true });

const master = path.join(mythDir, `${slug}-final-v1-no-title.mp4`);
const social = path.join(mythDir, `${slug}-final-v1-no-title-social.mp4`);
const preview = path.join(mythDir, `${slug}-final-v1-no-title-preview.mp4`);
const contact = path.join(mythDir, `${slug}-final-v1-no-title-contact.jpg`);

run("node", ["scripts/videos/assemble-video.mjs", "--plan", planPath, "--out", master], { inherit: true });
run("ffmpeg", [
  "-y", "-i", master,
  "-c:v", "libx264", "-b:v", "8M", "-maxrate", "8M", "-bufsize", "16M",
  "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "192k", "-movflags", "+faststart",
  social,
]);
run("ffmpeg", [
  "-y", "-i", master, "-vf", "scale=720:1280",
  "-c:v", "libx264", "-crf", "28", "-preset", "medium",
  "-c:a", "aac", "-b:a", "128k", "-movflags", "+faststart",
  preview,
]);
run("ffmpeg", [
  "-y", "-i", master,
  "-vf", "fps=1/7,scale=216:-1,tile=6x3",
  "-frames:v", "1", "-update", "1",
  contact,
]);

const qa = {
  master: probe(master),
  social: probe(social),
  preview: probe(preview),
  title: false,
  subtitles: false,
};
if (qa.master.width !== 1080 || qa.master.height !== 1920 || qa.master.audio !== "aac") {
  throw new Error(`${slug}: máster inválido ${JSON.stringify(qa.master)}`);
}
if (qa.social.width !== 1080 || qa.social.height !== 1920 || qa.social.codec !== "h264") {
  throw new Error(`${slug}: social inválido ${JSON.stringify(qa.social)}`);
}
if (qa.preview.width !== 720 || qa.preview.height !== 1280 || qa.preview.size >= 30_000_000) {
  throw new Error(`${slug}: preview inválido ${JSON.stringify(qa.preview)}`);
}

const batch = JSON.parse(fs.readFileSync(batchPath, "utf8"));
const entry = batch.entries.find((item) => item.slug === slug);
if (!entry) throw new Error(`${slug}: no aparece en el manifiesto congelado`);
entry.final = path.relative(root, master);
entry.social = path.relative(root, social);
entry.preview = path.relative(root, preview);
entry.contact = path.relative(root, contact);
entry.qa = qa;
entry.status = "qa_complete";
fs.writeFileSync(batchPath, `${JSON.stringify(batch, null, 2)}\n`);

console.log(JSON.stringify({ slug, status: entry.status, qa }, null, 2));
