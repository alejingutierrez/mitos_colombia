import { execFile } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import { setTimeout as delay } from "node:timers/promises";
import sharp from "sharp";

const run = promisify(execFile);

function argument(name, fallback = "") {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] : fallback;
}

const slug = argument("slug");
const requestedEdition = argument("edition", "v9");
const compositionPath = argument(
  "composition",
  slug
    ? path.join(
        process.cwd(),
        "artifacts",
        "instagram",
        slug,
        `composition-${requestedEdition}.json`
      )
    : ""
);
const outputDirectory = argument(
  "output",
  slug
    ? path.join(
        process.cwd(),
        "artifacts",
        "instagram",
        slug,
        `editorial-${requestedEdition}`
      )
    : ""
);
const baseUrl = argument("base-url", "http://localhost:3003");
const edition = argument(
  "edition",
  path.basename(compositionPath).match(/composition-(v[0-9]+)\.json$/)?.[1] ||
    requestedEdition
);

if (!slug || !compositionPath || !outputDirectory) {
  throw new Error(
    "Uso: node scripts/instagram/render-editorial-composition.mjs --slug <slug> [--composition archivo] [--output carpeta] [--base-url url]"
  );
}

const composition = JSON.parse(await fs.readFile(compositionPath, "utf8"));

function escapeXml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
await fs.mkdir(outputDirectory, { recursive: true });
const generatedArtifactPattern =
  /^(?:\d{2}-(?:cover|map|secondary|tertiary|typographic)\.png|caption\.txt|alt-text\.txt|manifest\.json|contact-sheet\.png)$/;
for (const filename of await fs.readdir(outputDirectory)) {
  if (generatedArtifactPattern.test(filename)) {
    await fs.unlink(path.join(outputDirectory, filename));
  }
}
const outputs = [];

async function captureSlide(args, label) {
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      await run("npx", args, {
        cwd: process.cwd(),
        maxBuffer: 1024 * 1024 * 5,
        timeout: 45_000,
        killSignal: "SIGKILL",
      });
      return;
    } catch (error) {
      lastError = error;
      if (attempt < 3) {
        console.warn(
          `${label}: render falló en intento ${attempt}/3; reintentando.`
        );
        await delay(attempt * 750);
      }
    }
  }
  throw lastError;
}

for (const slide of composition.slides) {
  const filename = `${String(slide.sequence).padStart(2, "0")}-${slide.template_family}.png`;
  const destination = path.join(outputDirectory, filename);
  const url = `${baseUrl}/design-system/instagram-library?composition=${encodeURIComponent(
    slug
  )}&edition=${encodeURIComponent(edition)}&slide=${slide.sequence}`;
  await captureSlide(
    [
      "--no-install",
      "playwright",
      "screenshot",
      "--channel",
      "chrome",
      "--viewport-size",
      "1080,1350",
      "--wait-for-selector",
      "[data-instagram-template]",
      "--wait-for-timeout",
      slide.template_family === "map" ? "3000" : "500",
      url,
      destination,
    ],
    filename
  );
  const metadata = await sharp(destination).metadata();
  if (metadata.width !== 1080 || metadata.height !== 1350) {
    throw new Error(
      `${filename} mide ${metadata.width}x${metadata.height}; se esperaba 1080x1350.`
    );
  }
  outputs.push({
    sequence: slide.sequence,
    file: filename,
    template_id: slide.template_id,
    width: metadata.width,
    height: metadata.height,
  });
}

const caption = [
  composition.publishing?.caption || "",
  "",
  ...(composition.publishing?.hashtags || []),
]
  .join("\n")
  .trim();
await fs.writeFile(path.join(outputDirectory, "caption.txt"), `${caption}\n`);
await fs.writeFile(
  path.join(outputDirectory, "alt-text.txt"),
  `${composition.slides
    .filter((slide) => slide.alt_text)
    .map((slide) => `${slide.sequence}. ${slide.alt_text}`)
    .join("\n")}\n`
);
await fs.writeFile(
  path.join(outputDirectory, "manifest.json"),
  `${JSON.stringify(
    {
      schema_version: composition.schema_version,
      myth: composition.myth,
      seed: composition.seed,
      canvas: { width: 1080, height: 1350, aspect_ratio: "4:5" },
      slides: outputs,
    },
    null,
    2
  )}\n`
);

const contactWidth = 1460;
const contactColumns = 5;
const contactGap = 24;
const contactPadding = 32;
const contactHeader = 118;
const contactThumbWidth = 260;
const contactThumbHeight = 325;
const contactLabelHeight = 58;
const contactRows = Math.ceil(outputs.length / contactColumns);
const contactHeight =
  contactHeader +
  contactPadding +
  contactRows * (contactThumbHeight + contactLabelHeight) +
  (contactRows - 1) * contactGap;
const contactLayers = [];

for (const output of outputs) {
  const index = output.sequence - 1;
  const column = index % contactColumns;
  const row = Math.floor(index / contactColumns);
  const left =
    contactPadding + column * (contactThumbWidth + contactGap);
  const top =
    contactHeader + row * (contactThumbHeight + contactLabelHeight + contactGap);
  const thumbnail = await sharp(path.join(outputDirectory, output.file))
    .resize(contactThumbWidth, contactThumbHeight, { fit: "cover" })
    .png()
    .toBuffer();
  contactLayers.push({ input: thumbnail, left, top });
}

const labelSvg = Buffer.from(`
  <svg width="${contactWidth}" height="${contactHeight}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .eyebrow { font: 700 14px "Noto Sans Display", "Noto Sans", Arial, sans-serif; letter-spacing: 4px; fill: #c5a45d; }
      .title { font: 500 42px "Noto Sans Display", "Noto Sans", Arial, sans-serif; letter-spacing: -1px; fill: #f3edde; }
      .number { font: 700 13px "Noto Sans Display", "Noto Sans", Arial, sans-serif; letter-spacing: 2px; fill: #c5a45d; }
      .name { font: 600 13px "Noto Sans Display", "Noto Sans", Arial, sans-serif; fill: #f3edde; }
    </style>
    <text class="eyebrow" x="${contactPadding}" y="34">CARRUSEL EDITORIAL · ${String(
      escapeXml(composition.seed)
    ).toUpperCase()}</text>
    <text class="title" x="${contactPadding}" y="87">${escapeXml(composition.myth?.title || slug)} · ${
      outputs.length
    } secuencias</text>
    ${outputs
      .map((output, index) => {
        const column = index % contactColumns;
        const row = Math.floor(index / contactColumns);
        const x =
          contactPadding + column * (contactThumbWidth + contactGap);
        const y =
          contactHeader +
          row * (contactThumbHeight + contactLabelHeight + contactGap) +
          contactThumbHeight +
          27;
        const slide = composition.slides[index];
        return `<text class="number" x="${x}" y="${y}">${String(
          output.sequence
        ).padStart(2, "0")}</text><text class="name" x="${x + 36}" y="${y}">${
          escapeXml(slide.template_name)
        }</text>`;
      })
      .join("")}
  </svg>
`);

const contactSheetPath = path.join(outputDirectory, "contact-sheet.png");
await sharp({
  create: {
    width: contactWidth,
    height: contactHeight,
    channels: 4,
    background: "#101716",
  },
})
  .composite([...contactLayers, { input: labelSvg, left: 0, top: 0 }])
  .png()
  .toFile(contactSheetPath);

const zipPath = path.join(
  path.dirname(outputDirectory),
  `${slug}-instagram-editorial-${edition}.zip`
);
await fs.rm(zipPath, { force: true });
await run("zip", [
  "-j",
  "-q",
  zipPath,
  ...outputs.map(({ file }) => path.join(outputDirectory, file)),
  path.join(outputDirectory, "caption.txt"),
  path.join(outputDirectory, "alt-text.txt"),
  path.join(outputDirectory, "manifest.json"),
  contactSheetPath,
]);

console.log(
  JSON.stringify(
    {
      output_directory: outputDirectory,
      zip: zipPath,
      slides: outputs,
    },
    null,
    2
  )
);
