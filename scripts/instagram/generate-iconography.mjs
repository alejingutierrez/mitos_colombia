import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import {
  CAROUSEL_CORNERS,
  CAROUSEL_DIVIDERS,
  CAROUSEL_FRAMES,
  CAROUSEL_GLYPHS,
  CAROUSEL_ICONOGRAPHY,
  CAROUSEL_ORNAMENTS,
  CAROUSEL_PATTERNS,
  ICONOGRAPHY_STANDARD,
  ICONOGRAPHY_VERSION,
  renderIconSvg,
} from "./lib/iconography-definitions-v2.mjs";

const ROOT = path.join(
  process.cwd(),
  "public",
  "motifs",
  "carousel",
  ICONOGRAPHY_VERSION
);
const SQUARE_SIZES = [256, 512, 1024];
const DIVIDER_SIZES = [
  { width: 1080, height: 160, suffix: "1080x160" },
  { width: 2160, height: 320, suffix: "2160x320" },
];
const FRAME_SIZES = [
  { width: 540, height: 675, suffix: "540x675" },
  { width: 1080, height: 1350, suffix: "1080x1350" },
];

async function writeAsset(asset) {
  const directory = path.join(ROOT, `${asset.kind}s`);
  await fs.mkdir(directory, { recursive: true });
  const svg = renderIconSvg(asset);
  await fs.writeFile(path.join(directory, `${asset.id}.svg`), `${svg}\n`);
  const source = Buffer.from(svg);

  if (asset.kind === "divider") {
    for (const size of DIVIDER_SIZES) {
      await sharp(source)
        .resize(size.width, size.height, { fit: "contain" })
        .png({ compressionLevel: 9 })
        .toFile(path.join(directory, `${asset.id}-${size.suffix}.png`));
    }
    return;
  }

  if (asset.kind === "frame") {
    for (const size of FRAME_SIZES) {
      await sharp(source)
        .resize(size.width, size.height, { fit: "contain" })
        .png({ compressionLevel: 9 })
        .toFile(path.join(directory, `${asset.id}-${size.suffix}.png`));
    }
    return;
  }

  for (const size of SQUARE_SIZES) {
    await sharp(source)
      .resize(size, size, { fit: "contain" })
      .png({ compressionLevel: 9 })
      .toFile(path.join(directory, `${asset.id}-${size}.png`));
  }
}

function textSvg({ width, height, lines }) {
  return Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">${lines
      .map(
        ({ text, x, y, size, color, weight = 400, tracking = 0, anchor = "start" }) =>
          `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="Arial, sans-serif" font-size="${size}" font-weight="${weight}" letter-spacing="${tracking}" fill="${color}">${text}</text>`
      )
      .join("")}</svg>`
  );
}

function previewFile(asset) {
  if (asset.kind === "divider") {
    return path.join(ROOT, "dividers", `${asset.id}-1080x160.png`);
  }
  if (asset.kind === "frame") {
    return path.join(ROOT, "frames", `${asset.id}-540x675.png`);
  }
  return path.join(ROOT, `${asset.kind}s`, `${asset.id}-256.png`);
}

async function buildCatalog() {
  const width = 1800;
  const margin = 60;
  const contentWidth = width - margin * 2;
  const composites = [];
  let cursor = 138;

  composites.push({
    input: textSvg({
      width: contentWidth,
      height: 100,
      lines: [
        {
          text: "ICONOGRAFÍA DE CARRUSELES · SISTEMA 100",
          x: 0,
          y: 38,
          size: 32,
          color: "#172321",
          weight: 700,
          tracking: 6,
        },
        {
          text: "48 SÍMBOLOS · 12 SEPARADORES · 12 ESQUINAS · 8 MARCOS · 12 ORNAMENTOS · 8 TRAMAS",
          x: 0,
          y: 75,
          size: 16,
          color: "#65796f",
          weight: 600,
          tracking: 1.8,
        },
      ],
    }),
    left: margin,
    top: 34,
  });

  function sectionHeader(title, count) {
    composites.push({
      input: textSvg({
        width: contentWidth,
        height: 46,
        lines: [
          {
            text: `${String(count).padStart(2, "0")} · ${title}`,
            x: 0,
            y: 27,
            size: 17,
            color: "#172321",
            weight: 700,
            tracking: 3,
          },
        ],
      }),
      left: margin,
      top: cursor,
    });
    cursor += 54;
  }

  async function squareSection(title, assets, { columns = 6, iconSize = 176, rowHeight = 244 } = {}) {
    sectionHeader(title, assets.length);
    const cellWidth = contentWidth / columns;
    for (const [index, asset] of assets.entries()) {
      const column = index % columns;
      const row = Math.floor(index / columns);
      const left = Math.round(margin + column * cellWidth + (cellWidth - iconSize) / 2);
      const top = cursor + row * rowHeight;
      composites.push({
        input: await sharp(previewFile(asset))
          .resize(iconSize, iconSize, { fit: "contain" })
          .toBuffer(),
        left,
        top,
      });
      composites.push({
        input: textSvg({
          width: Math.round(cellWidth),
          height: 48,
          lines: [
            {
              text: asset.label.toLocaleUpperCase("es-CO"),
              x: cellWidth / 2,
              y: 19,
              size: 13,
              color: "#172321",
              weight: 700,
              tracking: 1,
              anchor: "middle",
            },
            {
              text: asset.group.toLocaleUpperCase("es-CO"),
              x: cellWidth / 2,
              y: 39,
              size: 10,
              color: "#65796f",
              tracking: 1,
              anchor: "middle",
            },
          ],
        }),
        left: Math.round(margin + column * cellWidth),
        top: top + iconSize + 6,
      });
    }
    cursor += Math.ceil(assets.length / columns) * rowHeight + 28;
  }

  await squareSection("SÍMBOLOS SEMÁNTICOS", CAROUSEL_GLYPHS);

  sectionHeader("SEPARADORES", CAROUSEL_DIVIDERS.length);
  for (const [index, asset] of CAROUSEL_DIVIDERS.entries()) {
    const column = index % 2;
    const row = Math.floor(index / 2);
    const left = margin + column * 840;
    const top = cursor + row * 128;
    composites.push({
      input: await sharp(previewFile(asset))
        .resize(760, 112, { fit: "contain" })
        .toBuffer(),
      left,
      top,
    });
    composites.push({
      input: textSvg({
        width: 760,
        height: 24,
        lines: [
          {
            text: asset.label.toLocaleUpperCase("es-CO"),
            x: 380,
            y: 18,
            size: 12,
            color: "#65796f",
            weight: 700,
            tracking: 1.3,
            anchor: "middle",
          },
        ],
      }),
      left,
      top: top + 88,
    });
  }
  cursor += Math.ceil(CAROUSEL_DIVIDERS.length / 2) * 128 + 34;

  await squareSection("ESQUINAS", CAROUSEL_CORNERS, {
    iconSize: 170,
    rowHeight: 232,
  });

  sectionHeader("MARCOS ABIERTOS 4:5", CAROUSEL_FRAMES.length);
  const frameCellWidth = contentWidth / 4;
  for (const [index, asset] of CAROUSEL_FRAMES.entries()) {
    const column = index % 4;
    const row = Math.floor(index / 4);
    const left = Math.round(margin + column * frameCellWidth + (frameCellWidth - 160) / 2);
    const top = cursor + row * 260;
    composites.push({
      input: await sharp(previewFile(asset))
        .resize(160, 200, { fit: "contain" })
        .toBuffer(),
      left,
      top,
    });
    composites.push({
      input: textSvg({
        width: Math.round(frameCellWidth),
        height: 30,
        lines: [
          {
            text: asset.label.toLocaleUpperCase("es-CO"),
            x: frameCellWidth / 2,
            y: 20,
            size: 12,
            color: "#65796f",
            weight: 700,
            tracking: 1.2,
            anchor: "middle",
          },
        ],
      }),
      left: Math.round(margin + column * frameCellWidth),
      top: top + 202,
    });
  }
  cursor += Math.ceil(CAROUSEL_FRAMES.length / 4) * 260 + 34;

  await squareSection("ORNAMENTOS", CAROUSEL_ORNAMENTS, {
    iconSize: 150,
    rowHeight: 216,
  });
  await squareSection("TRAMAS", CAROUSEL_PATTERNS, {
    columns: 4,
    iconSize: 190,
    rowHeight: 252,
  });

  await sharp({
    create: {
      width,
      height: cursor + 50,
      channels: 4,
      background: ICONOGRAPHY_STANDARD.palette.paper,
    },
  })
    .composite(composites)
    .png({ compressionLevel: 9 })
    .toFile(path.join(ROOT, "catalog.png"));
}

await fs.mkdir(ROOT, { recursive: true });
await Promise.all(CAROUSEL_ICONOGRAPHY.map(writeAsset));
await buildCatalog();
await fs.writeFile(
  path.join(ROOT, "manifest.json"),
  `${JSON.stringify(
    {
      version: ICONOGRAPHY_VERSION,
      generated_at: new Date().toISOString(),
      standard: ICONOGRAPHY_STANDARD,
      counts: {
        total: CAROUSEL_ICONOGRAPHY.length,
        glyphs: CAROUSEL_GLYPHS.length,
        dividers: CAROUSEL_DIVIDERS.length,
        corners: CAROUSEL_CORNERS.length,
        frames: CAROUSEL_FRAMES.length,
        ornaments: CAROUSEL_ORNAMENTS.length,
        patterns: CAROUSEL_PATTERNS.length,
      },
      assets: CAROUSEL_ICONOGRAPHY.map(
        ({ id, group, label, kind, width, height }) => ({
          id,
          group,
          label,
          kind,
          role: ICONOGRAPHY_STANDARD.roles[kind],
          master_viewbox: `0 0 ${width} ${height}`,
        })
      ),
    },
    null,
    2
  )}\n`
);

console.log(
  JSON.stringify({
    status: "generated",
    root: ROOT,
    total: CAROUSEL_ICONOGRAPHY.length,
    glyphs: CAROUSEL_GLYPHS.length,
    dividers: CAROUSEL_DIVIDERS.length,
    corners: CAROUSEL_CORNERS.length,
    frames: CAROUSEL_FRAMES.length,
    ornaments: CAROUSEL_ORNAMENTS.length,
    patterns: CAROUSEL_PATTERNS.length,
  })
);
