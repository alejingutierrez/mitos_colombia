import "dotenv/config";
import { list, put } from "@vercel/blob";
import sharp from "sharp";

const args = process.argv.slice(2);

function getArgValue(flag, fallback) {
  const index = args.indexOf(flag);
  if (index === -1 || index === args.length - 1) {
    return fallback;
  }
  return args[index + 1];
}

function getNumberArg(flag, fallback) {
  const value = getArgValue(flag, "");
  if (!value) return fallback;
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function formatBytes(bytes) {
  if (!Number.isFinite(bytes)) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit += 1;
  }
  return `${value.toFixed(value >= 10 || unit === 0 ? 0 : 1)} ${units[unit]}`;
}

const dryRun = args.includes("--dry-run");
const prefix = getArgValue("--prefix", "mitos/");
const maxWidth = getNumberArg("--max-width", 1280);
const maxHeight = getNumberArg("--max-height", 1280);
const minSavings = getNumberArg("--min-savings", 0.15);
const limit = getNumberArg("--limit", Number.POSITIVE_INFINITY);
const concurrency = Math.max(1, Math.floor(getNumberArg("--concurrency", 4)));
const start = Math.max(0, Math.floor(getNumberArg("--start", 0)));

async function listAllBlobs() {
  const blobs = [];
  let cursor;

  while (true) {
    const response = await list({
      prefix,
      cursor,
      limit: 1000,
    });
    blobs.push(...response.blobs);
    if (!response.hasMore || blobs.length >= limit) {
      break;
    }
    cursor = response.cursor;
  }

  return blobs.slice(0, Number.isFinite(limit) ? limit : blobs.length);
}

function resolveFormat(contentType) {
  if (!contentType) return { format: "png", contentType: "image/png" };
  const normalized = contentType.split(";")[0].trim().toLowerCase();
  if (normalized === "image/jpeg" || normalized === "image/jpg") {
    return { format: "jpeg", contentType: "image/jpeg" };
  }
  if (normalized === "image/webp") {
    return { format: "webp", contentType: "image/webp" };
  }
  if (normalized === "image/avif") {
    return { format: "avif", contentType: "image/avif" };
  }
  return { format: "png", contentType: "image/png" };
}

async function optimizeBlob(blob, index, total) {
  if (blob.pathname.startsWith("vertical/")) {
    return { skipped: true };
  }

  const response = await fetch(blob.downloadUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${blob.pathname}: ${response.status}`);
  }

  const contentTypeHeader = response.headers.get("content-type");
  const { format, contentType } = resolveFormat(contentTypeHeader);
  const arrayBuffer = await response.arrayBuffer();
  const inputBuffer = Buffer.from(arrayBuffer);
  const image = sharp(inputBuffer).rotate();
  const metadata = await image.metadata();

  const shouldResize =
    (metadata.width && metadata.width > maxWidth) ||
    (metadata.height && metadata.height > maxHeight);

  const pipeline = shouldResize
    ? image.resize({
        width: metadata.width && metadata.width > maxWidth ? maxWidth : undefined,
        height: metadata.height && metadata.height > maxHeight ? maxHeight : undefined,
        fit: "inside",
        withoutEnlargement: true,
      })
    : image;

  let outputBuffer;
  if (format === "jpeg") {
    outputBuffer = await pipeline.jpeg({ quality: 78, mozjpeg: true }).toBuffer();
  } else if (format === "webp") {
    outputBuffer = await pipeline.webp({ quality: 78 }).toBuffer();
  } else if (format === "avif") {
    outputBuffer = await pipeline.avif({ quality: 60 }).toBuffer();
  } else {
    outputBuffer = await pipeline
      .png({ compressionLevel: 9, adaptiveFiltering: true, quality: 80 })
      .toBuffer();
  }

  const savings = 1 - outputBuffer.length / inputBuffer.length;

  if (savings < minSavings) {
    console.log(
      `[${index + 1}/${total}] Skip ${blob.pathname} (savings ${(savings * 100).toFixed(1)}%)`
    );
    return { skipped: true };
  }

  if (dryRun) {
    console.log(
      `[${index + 1}/${total}] Dry-run ${blob.pathname}: ${formatBytes(
        inputBuffer.length
      )} -> ${formatBytes(outputBuffer.length)} (${(savings * 100).toFixed(1)}%)`
    );
    return { optimized: true, savedBytes: inputBuffer.length - outputBuffer.length };
  }

  await put(blob.pathname, outputBuffer, {
    access: "public",
    contentType,
    addRandomSuffix: false,
    allowOverwrite: true,
  });

  console.log(
    `[${index + 1}/${total}] Updated ${blob.pathname}: ${formatBytes(
      inputBuffer.length
    )} -> ${formatBytes(outputBuffer.length)} (${(savings * 100).toFixed(1)}%)`
  );

  return { optimized: true, savedBytes: inputBuffer.length - outputBuffer.length };
}

async function run() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error("BLOB_READ_WRITE_TOKEN is required.");
    process.exit(1);
  }

  console.log(`Listing blobs with prefix "${prefix}"...`);
  const blobs = await listAllBlobs();
  console.log(`Found ${blobs.length} blobs.`);

  const slicedBlobs = blobs.slice(
    start,
    Number.isFinite(limit) ? start + limit : blobs.length
  );
  if (start > 0 || Number.isFinite(limit)) {
    console.log(`Processing ${slicedBlobs.length} blobs (start ${start}).`);
  }

  let optimizedCount = 0;
  let skippedCount = 0;
  let savedBytes = 0;

  let cursor = 0;
  const workers = Array.from({ length: concurrency }, async () => {
    while (true) {
      const index = cursor;
      if (index >= slicedBlobs.length) break;
      cursor += 1;
      const blob = slicedBlobs[index];
      const absoluteIndex = start + index;

      try {
        const result = await optimizeBlob(blob, absoluteIndex, blobs.length);
        if (result.optimized) {
          optimizedCount += 1;
          savedBytes += result.savedBytes || 0;
        } else {
          skippedCount += 1;
        }
      } catch (error) {
        skippedCount += 1;
        console.error(
          `[${absoluteIndex + 1}/${blobs.length}] Error ${blob.pathname}:`,
          error.message
        );
      }
    }
  });

  await Promise.all(workers);

  console.log("Done.");
  console.log(`Optimized: ${optimizedCount}`);
  console.log(`Skipped: ${skippedCount}`);
  console.log(`Total saved: ${formatBytes(savedBytes)}`);
}

run();
