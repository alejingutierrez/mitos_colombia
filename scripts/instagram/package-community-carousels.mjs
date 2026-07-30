import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import sharp from "sharp";

const run = promisify(execFile);

function argument(name, fallback = "") {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] : fallback;
}

function slugify(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

async function readJson(file) {
  return JSON.parse(await fs.readFile(file, "utf8"));
}

async function sha256(file) {
  const bytes = await fs.readFile(file);
  return createHash("sha256").update(bytes).digest("hex");
}

async function listZip(file) {
  const { stdout } = await run("unzip", ["-Z1", file], {
    maxBuffer: 1024 * 1024 * 4,
  });
  return stdout.split(/\r?\n/).filter(Boolean);
}

async function locateThirdImage(mythDirectory) {
  const generatedDirectory = path.join(mythDirectory, "generated");
  const files = await fs.readdir(generatedDirectory);
  const pngs = files.filter((file) => file.endsWith(".png")).sort();
  const preferred = pngs.includes("third.png") ? "third.png" : pngs[0];
  if (!preferred) {
    throw new Error(`Falta la tercera imagen en ${generatedDirectory}.`);
  }
  return path.join(generatedDirectory, preferred);
}

const community = argument("community", "Muiscas");
const edition = argument("edition", "v8");
const artifactRoot = path.resolve(
  argument("root", path.join(process.cwd(), "artifacts", "instagram"))
);
const communitySlug = slugify(community);
const manifestPath = path.join(
  artifactRoot,
  `${communitySlug}-instagram-${edition}-manifest.json`
);
const readmePath = path.join(
  artifactRoot,
  `${communitySlug}-instagram-${edition}-LEEME.md`
);
const masterZipPath = path.join(
  artifactRoot,
  `${communitySlug}-instagram-editorial-${edition}-complete.zip`
);

if (!/^v[0-9]+$/.test(edition)) {
  throw new Error(`Edición inválida: ${edition}.`);
}

const directoryEntries = await fs.readdir(artifactRoot, {
  withFileTypes: true,
});
const posts = [];
const templateIds = new Set();
const templateFamilies = {
  cover: new Set(),
  typographic: new Set(),
  secondary: new Set(),
  tertiary: new Set(),
  map: new Set(),
};

for (const directoryEntry of directoryEntries.sort((left, right) =>
  left.name.localeCompare(right.name)
)) {
  if (!directoryEntry.isDirectory()) continue;
  const slug = directoryEntry.name;
  const mythDirectory = path.join(artifactRoot, slug);
  const compositionPath = path.join(
    mythDirectory,
    `composition-${edition}.json`
  );
  const composition = await readJson(compositionPath).catch(() => null);
  if (
    !composition ||
    String(composition.myth?.community || "").toLocaleLowerCase("es-CO") !==
      community.toLocaleLowerCase("es-CO")
  ) {
    continue;
  }

  const outputDirectory = path.join(
    mythDirectory,
    `editorial-${edition}`
  );
  const renderManifestPath = path.join(outputDirectory, "manifest.json");
  const renderManifest = await readJson(renderManifestPath);
  const zipPath = path.join(
    mythDirectory,
    `${slug}-instagram-editorial-${edition}.zip`
  );
  const thirdImagePath = await locateThirdImage(mythDirectory);
  const sourceDirectory = path.join(mythDirectory, "sources");
  const sourceFiles = (await fs.readdir(sourceDirectory)).filter((file) =>
    /\.(?:avif|jpe?g|png|webp)$/i.test(file)
  );
  const assetSlides = composition.slides.filter(
    (slide) => slide.asset_id && slide.asset_id !== "none"
  );
  const generatedSlides = composition.slides.filter(
    (slide) => slide.asset_id === "generated_third"
  );

  if (sourceFiles.length < 2) {
    throw new Error(`${slug}: se esperaban dos imágenes canónicas locales.`);
  }
  if (assetSlides.length !== 3 || generatedSlides.length !== 1) {
    throw new Error(`${slug}: el contrato de tres imágenes no se cumple.`);
  }
  if (renderManifest.slides.length !== composition.slides.length) {
    throw new Error(`${slug}: manifiesto y composición no coinciden.`);
  }
  if (
    renderManifest.canvas?.width !== 1080 ||
    renderManifest.canvas?.height !== 1350
  ) {
    throw new Error(`${slug}: el lienzo no es 1080x1350.`);
  }

  const expectedSlideFiles = renderManifest.slides.map((slide) => slide.file);
  const renderedSlideFiles = (await fs.readdir(outputDirectory))
    .filter((file) =>
      /^\d{2}-(?:cover|map|secondary|tertiary|typographic)\.png$/.test(file)
    )
    .sort();
  if (
    JSON.stringify(renderedSlideFiles) !==
    JSON.stringify([...expectedSlideFiles].sort())
  ) {
    throw new Error(`${slug}: hay láminas faltantes o heredadas de otro render.`);
  }

  for (const filename of renderedSlideFiles) {
    const metadata = await sharp(path.join(outputDirectory, filename)).metadata();
    if (metadata.width !== 1080 || metadata.height !== 1350) {
      throw new Error(
        `${slug}/${filename}: mide ${metadata.width}x${metadata.height}.`
      );
    }
  }
  const thirdMetadata = await sharp(thirdImagePath).metadata();
  const thirdRatio = thirdMetadata.width / thirdMetadata.height;
  if (
    thirdMetadata.width < 1080 ||
    thirdMetadata.height < 1350 ||
    Math.abs(thirdRatio - 4 / 5) > 0.01
  ) {
    throw new Error(
      `${slug}: la tercera imagen no alcanza 1080x1350 en proporción 4:5 (${thirdMetadata.width}x${thirdMetadata.height}).`
    );
  }

  const expectedZipEntries = [
    ...renderedSlideFiles,
    "caption.txt",
    "alt-text.txt",
    "manifest.json",
    "contact-sheet.png",
  ].sort();
  const zipEntries = (await listZip(zipPath)).sort();
  if (JSON.stringify(zipEntries) !== JSON.stringify(expectedZipEntries)) {
    throw new Error(`${slug}: el ZIP individual no contiene el paquete exacto.`);
  }

  for (const slide of composition.slides) {
    templateIds.add(slide.template_id);
    templateFamilies[slide.template_family]?.add(slide.template_id);
  }
  posts.push({
    slug,
    title: composition.myth?.title,
    sequences: composition.slides.length,
    zip: path.relative(artifactRoot, zipPath),
    zip_bytes: (await fs.stat(zipPath)).size,
    zip_sha256: await sha256(zipPath),
    third_image: path.relative(artifactRoot, thirdImagePath),
    third_image_sha256: await sha256(thirdImagePath),
    templates: composition.slides.map((slide) => slide.template_id),
  });
}

if (!posts.length) {
  throw new Error(`No se encontraron carruseles para ${community}.`);
}

const sequencesByLength = Object.fromEntries(
  [...new Set(posts.map((post) => post.sequences))]
    .sort((left, right) => left - right)
    .map((length) => [
      String(length),
      posts.filter((post) => post.sequences === length).length,
    ])
);
const batchManifest = {
  schema_version: 1,
  generated_at: new Date().toISOString(),
  community,
  edition,
  canvas: { width: 1080, height: 1350, aspect_ratio: "4:5" },
  policy: {
    canonical_images_per_post: 2,
    generated_third_image_required: true,
    unique_templates_inside_post: true,
    publish_zip_contains: [
      "ordered PNG slides",
      "caption.txt",
      "alt-text.txt",
      "manifest.json",
      "contact-sheet.png",
    ],
  },
  totals: {
    posts: posts.length,
    slides: posts.reduce((total, post) => total + post.sequences, 0),
    sequences_by_length: sequencesByLength,
    unique_templates: templateIds.size,
    unique_templates_by_family: Object.fromEntries(
      Object.entries(templateFamilies).map(([family, values]) => [
        family,
        values.size,
      ])
    ),
  },
  posts,
};
await fs.writeFile(
  manifestPath,
  `${JSON.stringify(batchManifest, null, 2)}\n`
);

const readme = `# Carruseles editoriales de Instagram · ${community}

Edición: ${edition}

- ${posts.length} publicaciones listas para publicar.
- ${batchManifest.totals.slides} láminas en formato 4:5, 1080 × 1350 px.
- Cada publicación usa dos imágenes canónicas y una tercera escena nueva.
- Longitud variable: ${Object.entries(sequencesByLength)
  .map(([length, count]) => `${count} carruseles de ${length}`)
  .join(", ")}.
- Cada ZIP individual contiene las láminas ordenadas, caption, texto alternativo, manifiesto y hoja de contacto.

El archivo de manifiesto contiguo contiene el inventario, las plantillas usadas y los SHA-256 necesarios para comprobar la integridad de cada entrega.
`;
await fs.writeFile(readmePath, readme);

await fs.rm(masterZipPath, { force: true });
await run(
  "zip",
  [
    "-j",
    "-q",
    masterZipPath,
    manifestPath,
    readmePath,
    ...posts.map((post) => path.join(artifactRoot, post.zip)),
  ],
  { maxBuffer: 1024 * 1024 * 4 }
);
const masterEntries = await listZip(masterZipPath);
if (masterEntries.length !== posts.length + 2) {
  throw new Error("El ZIP maestro no contiene el inventario completo.");
}

console.log(
  JSON.stringify(
    {
      status: "packaged",
      community,
      edition,
      posts: posts.length,
      slides: batchManifest.totals.slides,
      sequence_lengths: sequencesByLength,
      unique_templates: templateIds.size,
      master_zip: masterZipPath,
      master_zip_bytes: (await fs.stat(masterZipPath)).size,
      master_zip_sha256: await sha256(masterZipPath),
      manifest: manifestPath,
      readme: readmePath,
    },
    null,
    2
  )
);
