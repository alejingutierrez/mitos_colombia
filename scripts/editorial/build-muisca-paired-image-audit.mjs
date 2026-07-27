import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import dotenv from "dotenv";
import pg from "pg";
import sharp from "sharp";
import { canonicalMuiscaSlugs } from "../../editorial/muisca/universe.mjs";

const { Client } = pg;
const outputDir = path.resolve(
  process.argv[2] || "tmp/muisca-paired-image-audit"
);
const rowsPerSheet = 4;
const sheetWidth = 1720;
const rowHeight = 700;
const labelHeight = 76;
const horizontalWidth = 1120;
const horizontalHeight = 630;
const verticalWidth = 354;
const verticalHeight = 630;
const horizontalLeft = 0;
const verticalLeft = 1160;

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function labelSvg({ index, slug, title, horizontal, vertical }) {
  const horizontalMeta = horizontal
    ? `${horizontal.width}×${horizontal.height} · ${horizontal.ratio}`
    : "FALTA";
  const verticalMeta = vertical
    ? `${vertical.width}×${vertical.height} · ${vertical.ratio}`
    : "FALTA";
  return Buffer.from(`
    <svg width="${sheetWidth}" height="${labelHeight}">
      <rect width="100%" height="100%" fill="#17211d"/>
      <text x="18" y="30" fill="#f6f1e7" font-family="Arial, sans-serif"
            font-size="20">${String(index + 1).padStart(2, "0")} · ${escapeXml(slug)} · ${escapeXml(title)}</text>
      <text x="18" y="58" fill="#c8d6cd" font-family="Arial, sans-serif"
            font-size="17">Principal 16:9 — ${escapeXml(horizontalMeta)}</text>
      <text x="${verticalLeft}" y="58" fill="#c8d6cd" font-family="Arial, sans-serif"
            font-size="17">Segunda escena 9:16 — ${escapeXml(verticalMeta)}</text>
    </svg>
  `);
}

function ratioLabel(width, height) {
  if (!width || !height) return null;
  const ratio = width / height;
  if (Math.abs(ratio - 16 / 9) < 0.015) return "16:9";
  if (Math.abs(ratio - 9 / 16) < 0.015) return "9:16";
  if (Math.abs(ratio - 3 / 2) < 0.015) return "3:2";
  if (Math.abs(ratio - 2 / 3) < 0.015) return "2:3";
  return ratio.toFixed(3);
}

async function fetchImage(url, width, height) {
  if (!url) return null;
  const response = await fetch(url, {
    headers: { "user-agent": "MitosColombiaEditorialAudit/1.0" },
  });
  if (!response.ok) {
    return { url, error: `HTTP ${response.status}` };
  }
  const source = Buffer.from(await response.arrayBuffer());
  const metadata = await sharp(source).metadata();
  const rendered = await sharp(source)
    .rotate()
    .resize(width, height, {
      fit: "contain",
      background: "#ded7ca",
    })
    .jpeg({ quality: 88 })
    .toBuffer();
  return {
    url,
    width: metadata.width,
    height: metadata.height,
    format: metadata.format,
    ratio: ratioLabel(metadata.width, metadata.height),
    rendered,
  };
}

async function loadRows() {
  dotenv.config({ path: path.resolve(".env"), quiet: true });
  const connectionString =
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL;
  if (!connectionString) throw new Error("No se encontró una conexión Postgres.");

  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  try {
    const result = await client.query(
      `
      SELECT m.id, m.slug, m.title,
             m.image_url AS horizontal_url,
             vi.image_url AS vertical_url
      FROM myths m
      LEFT JOIN vertical_images vi
        ON vi.entity_type = 'myth' AND vi.entity_id = m.id
      WHERE m.slug = ANY($1::text[])
      `,
      [canonicalMuiscaSlugs]
    );
    const bySlug = new Map(result.rows.map((row) => [row.slug, row]));
    return canonicalMuiscaSlugs.map((slug) => bySlug.get(slug) || { slug });
  } finally {
    await client.end();
  }
}

async function buildSheet(items, sheetIndex) {
  const sheet = sharp({
    create: {
      width: sheetWidth,
      height: rowsPerSheet * rowHeight,
      channels: 3,
      background: "#d8d0c3",
    },
  });
  const composites = [];

  for (let offset = 0; offset < items.length; offset += 1) {
    const item = items[offset];
    const top = offset * rowHeight;
    composites.push({
      input: labelSvg(item),
      left: 0,
      top,
    });
    if (item.horizontal?.rendered) {
      composites.push({
        input: item.horizontal.rendered,
        left: horizontalLeft,
        top: top + labelHeight,
      });
    }
    if (item.vertical?.rendered) {
      composites.push({
        input: item.vertical.rendered,
        left: verticalLeft,
        top: top + labelHeight,
      });
    }
  }

  const file = path.join(
    outputDir,
    `muisca-pairs-${String(sheetIndex + 1).padStart(2, "0")}.jpg`
  );
  await sheet.composite(composites).jpeg({ quality: 90 }).toFile(file);
  return file;
}

async function run() {
  await fs.mkdir(outputDir, { recursive: true });
  const rows = await loadRows();
  const items = [];

  for (let index = 0; index < rows.length; index += 1) {
    const row = rows[index];
    const [horizontal, vertical] = await Promise.all([
      fetchImage(row.horizontal_url, horizontalWidth, horizontalHeight),
      fetchImage(row.vertical_url, verticalWidth, verticalHeight),
    ]);
    items.push({
      index,
      id: row.id,
      slug: row.slug,
      title: row.title || row.slug,
      horizontal,
      vertical,
    });
  }

  const sheets = [];
  for (let start = 0; start < items.length; start += rowsPerSheet) {
    sheets.push(
      await buildSheet(
        items.slice(start, start + rowsPerSheet),
        start / rowsPerSheet
      )
    );
  }

  const manifest = items.map((item) => ({
    ...item,
    horizontal: item.horizontal
      ? { ...item.horizontal, rendered: undefined }
      : null,
    vertical: item.vertical ? { ...item.vertical, rendered: undefined } : null,
  }));
  const manifestPath = path.join(outputDir, "manifest.json");
  await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

  console.log(
    JSON.stringify(
      {
        myths: items.length,
        horizontalPresent: items.filter((item) => item.horizontal?.rendered)
          .length,
        verticalPresent: items.filter((item) => item.vertical?.rendered).length,
        horizontalExact: items.filter(
          (item) => item.horizontal?.ratio === "16:9"
        ).length,
        verticalExact: items.filter((item) => item.vertical?.ratio === "9:16")
          .length,
        errors: manifest.flatMap((item) =>
          [
            item.horizontal?.error
              ? { slug: item.slug, orientation: "horizontal", ...item.horizontal }
              : null,
            item.vertical?.error
              ? { slug: item.slug, orientation: "vertical", ...item.vertical }
              : null,
          ].filter(Boolean)
        ),
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
