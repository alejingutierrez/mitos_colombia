import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import pg from "pg";
import sharp from "sharp";

const { Client } = pg;
const rowsPerSheet = 4;
const sheetWidth = 1720;
const rowHeight = 700;
const labelHeight = 76;
const horizontalWidth = 1120;
const horizontalHeight = 630;
const verticalWidth = 354;
const verticalHeight = 630;
const verticalLeft = 1160;

function parseArgs(argv) {
  const options = {
    community: "",
    envFile: ".env",
    outputDir: "",
  };

  for (const arg of argv) {
    if (arg.startsWith("--community=")) {
      options.community = arg.slice("--community=".length);
    } else if (arg.startsWith("--env=")) {
      options.envFile = arg.slice("--env=".length);
    } else if (arg.startsWith("--output=")) {
      options.outputDir = arg.slice("--output=".length);
    } else {
      throw new Error(`Argumento no reconocido: ${arg}`);
    }
  }

  if (!options.community) {
    throw new Error("Falta --community=<slug>.");
  }
  if (!options.outputDir) {
    options.outputDir = `tmp/${options.community}-paired-image-audit`;
  }
  return options;
}

function connectionString() {
  return (
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL_UNPOOLED ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL
  );
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function ratioLabel(width, height) {
  if (!width || !height) return "desconocida";
  return `${(width / height).toFixed(3)}:1`;
}

function labelSvg(item) {
  const horizontal = item.horizontal
    ? `${item.horizontal.width}x${item.horizontal.height} (${ratioLabel(item.horizontal.width, item.horizontal.height)})`
    : "horizontal ausente";
  const vertical = item.vertical
    ? `${item.vertical.width}x${item.vertical.height} (${ratioLabel(item.vertical.width, item.vertical.height)})`
    : "vertical ausente";
  const label = `${String(item.index + 1).padStart(2, "0")} - ${item.title}`;

  return Buffer.from(`
    <svg width="${sheetWidth}" height="${labelHeight}">
      <rect width="100%" height="100%" fill="#17211d"/>
      <text x="18" y="31" fill="#f6f1e7" font-family="Arial, sans-serif"
            font-size="22">${escapeXml(label)}</text>
      <text x="18" y="59" fill="#c8d5cf" font-family="Arial, sans-serif"
            font-size="16">${escapeXml(item.slug)} - principal ${escapeXml(horizontal)} - segunda ${escapeXml(vertical)}</text>
    </svg>
  `);
}

async function fetchImage(url, width, height) {
  if (!url) return null;
  const response = await fetch(url, {
    headers: { "user-agent": "MitosColombiaEditorialAudit/1.0" },
  });
  if (!response.ok) {
    throw new Error(`Imagen HTTP ${response.status}: ${url}`);
  }

  const source = Buffer.from(await response.arrayBuffer());
  const metadata = await sharp(source).metadata();
  const rendered = await sharp(source)
    .rotate()
    .resize(width, height, {
      fit: "contain",
      background: "#e8e1d4",
    })
    .jpeg({ quality: 88 })
    .toBuffer();

  return {
    url,
    width: metadata.width,
    height: metadata.height,
    format: metadata.format,
    bytes: source.length,
    rendered,
  };
}

async function loadRows(client, communitySlug) {
  const result = await client.query(
    `SELECT m.id, m.slug, m.title, m.image_url AS horizontal_url,
            vertical.image_url AS vertical_url,
            vertical.vertical_count
     FROM myths m
     JOIN communities c ON c.id = m.community_id
     LEFT JOIN LATERAL (
       SELECT COUNT(*)::int AS vertical_count,
              MAX(vi.image_url) AS image_url
       FROM vertical_images vi
       WHERE vi.entity_type = 'myth' AND vi.entity_id = m.id
     ) vertical ON TRUE
     WHERE c.slug = $1
     ORDER BY m.category_path, m.slug`,
    [communitySlug],
  );
  return result.rows;
}

async function buildSheet(items, outputDir, sheetIndex, communitySlug) {
  const canvas = sharp({
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
    composites.push({ input: labelSvg(item), left: 0, top });
    if (item.horizontal) {
      composites.push({
        input: item.horizontal.rendered,
        left: 0,
        top: top + labelHeight,
      });
    }
    if (item.vertical) {
      composites.push({
        input: item.vertical.rendered,
        left: verticalLeft,
        top: top + labelHeight,
      });
    }
  }

  const file = path.join(
    outputDir,
    `${communitySlug}-pairs-${String(sheetIndex + 1).padStart(2, "0")}.jpg`,
  );
  await canvas.composite(composites).jpeg({ quality: 90 }).toFile(file);
  return file;
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
  dotenv.config({ path: path.resolve(options.envFile), quiet: true });
  const postgresUrl = connectionString();
  if (!postgresUrl) {
    throw new Error(`No se encontró una conexión Postgres en ${options.envFile}.`);
  }

  const client = new Client({
    connectionString: postgresUrl,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();

  const outputDir = path.resolve(options.outputDir);
  await fs.mkdir(outputDir, { recursive: true });
  try {
    const rows = await loadRows(client, options.community);
    const items = [];
    for (let index = 0; index < rows.length; index += 1) {
      const row = rows[index];
      const [horizontal, vertical] = await Promise.all([
        fetchImage(row.horizontal_url, horizontalWidth, horizontalHeight),
        fetchImage(row.vertical_url, verticalWidth, verticalHeight),
      ]);
      items.push({
        index,
        ...row,
        horizontal,
        vertical,
      });
    }

    const sheets = [];
    for (let start = 0; start < items.length; start += rowsPerSheet) {
      sheets.push(
        await buildSheet(
          items.slice(start, start + rowsPerSheet),
          outputDir,
          start / rowsPerSheet,
          options.community,
        ),
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
    await fs.writeFile(
      manifestPath,
      `${JSON.stringify(manifest, null, 2)}\n`,
      "utf8",
    );

    console.log(
      JSON.stringify(
        {
          community: options.community,
          myths: items.length,
          missingHorizontal: items
            .filter(({ horizontal }) => !horizontal)
            .map(({ slug }) => slug),
          missingVertical: items
            .filter(({ vertical, vertical_count: count }) => !vertical || count !== 1)
            .map(({ slug }) => slug),
          sheets,
          manifestPath,
        },
        null,
        2,
      ),
    );
  } finally {
    await client.end();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
