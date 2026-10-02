import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";
import sharp from "sharp";
import { canonicalMuiscaSlugs } from "../../editorial/muisca/universe.mjs";

const outputDir = path.resolve(
  process.argv[2] || "tmp/muisca-image-audit"
);
const columns = 4;
const rows = 4;
const imageWidth = 440;
const imageHeight = 290;
const labelHeight = 54;
const cellWidth = imageWidth;
const cellHeight = imageHeight + labelHeight;
const sheetSize = columns * rows;

function modulePath(slug) {
  if (slug === "bachue") {
    return path.resolve("editorial", "myths", "bachue.mjs");
  }
  return path.resolve("editorial", "muisca", "myths", `${slug}.mjs`);
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function labelSvg(index, slug) {
  const label = `${String(index + 1).padStart(2, "0")} · ${slug}`;
  return Buffer.from(`
    <svg width="${cellWidth}" height="${labelHeight}">
      <rect width="100%" height="100%" fill="#17211d"/>
      <text x="16" y="34" fill="#f6f1e7" font-family="Arial, sans-serif"
            font-size="19">${escapeXml(label)}</text>
    </svg>
  `);
}

async function loadMyths() {
  const myths = [];
  for (const slug of canonicalMuiscaSlugs) {
    const imported = await import(pathToFileURL(modulePath(slug)).href);
    myths.push(imported.default);
  }
  return myths;
}

async function fetchImage(myth, index) {
  const response = await fetch(myth.image_url, {
    headers: { "user-agent": "MitosColombiaEditorialAudit/1.0" },
  });
  if (!response.ok) {
    throw new Error(
      `${myth.slug}: imagen HTTP ${response.status} (${myth.image_url})`
    );
  }

  const source = Buffer.from(await response.arrayBuffer());
  const metadata = await sharp(source).metadata();
  const rendered = await sharp(source)
    .rotate()
    .resize(imageWidth, imageHeight, {
      fit: "contain",
      background: "#e8e1d4",
    })
    .jpeg({ quality: 88 })
    .toBuffer();

  return {
    index,
    slug: myth.slug,
    title: myth.title,
    url: myth.image_url,
    width: metadata.width,
    height: metadata.height,
    format: metadata.format,
    rendered,
  };
}

async function buildSheet(items, sheetIndex) {
  const canvas = sharp({
    create: {
      width: columns * cellWidth,
      height: rows * cellHeight,
      channels: 3,
      background: "#d8d0c3",
    },
  });
  const composites = [];

  for (let offset = 0; offset < items.length; offset += 1) {
    const item = items[offset];
    const left = (offset % columns) * cellWidth;
    const top = Math.floor(offset / columns) * cellHeight;
    composites.push({ input: item.rendered, left, top });
    composites.push({
      input: labelSvg(item.index, item.slug),
      left,
      top: top + imageHeight,
    });
  }

  const file = path.join(
    outputDir,
    `muisca-images-${String(sheetIndex + 1).padStart(2, "0")}.jpg`
  );
  await canvas.composite(composites).jpeg({ quality: 90 }).toFile(file);
  return file;
}

async function run() {
  await fs.mkdir(outputDir, { recursive: true });
  const myths = await loadMyths();
  const images = await Promise.all(
    myths.map((myth, index) => fetchImage(myth, index))
  );

  const sheets = [];
  for (let start = 0; start < images.length; start += sheetSize) {
    sheets.push(
      await buildSheet(
        images.slice(start, start + sheetSize),
        start / sheetSize
      )
    );
  }

  const manifest = images.map(({ rendered: _rendered, ...item }) => item);
  const manifestPath = path.join(outputDir, "manifest.json");
  await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

  console.log(
    JSON.stringify(
      {
        myths: images.length,
        missing: manifest.filter((item) => !item.width || !item.height),
        sheets,
        manifestPath,
      },
      null,
      2
    )
  );
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
