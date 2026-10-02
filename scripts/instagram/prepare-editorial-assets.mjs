import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

function argument(name, fallback = "") {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] : fallback;
}

function extensionFor(format) {
  if (format === "png") return "png";
  if (format === "webp") return "webp";
  return "jpg";
}

function mimeFor(format) {
  if (format === "png") return "image/png";
  if (format === "webp") return "image/webp";
  return "image/jpeg";
}

async function downloadCanonical({ url, outputDirectory, name }) {
  const response = await fetch(url, { signal: AbortSignal.timeout(30_000) });
  if (!response.ok) {
    throw new Error(`No se pudo descargar ${name}: HTTP ${response.status}.`);
  }
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length > 12_000_000) {
    throw new Error(`${name} supera el límite responsable de 12 MB.`);
  }
  const metadata = await sharp(bytes).metadata();
  const format = metadata.format || "jpeg";
  const extension = extensionFor(format);
  const destination = path.join(outputDirectory, `${name}.${extension}`);
  await fs.writeFile(destination, bytes);
  return {
    file: path.relative(path.dirname(outputDirectory), destination),
    mime: mimeFor(format),
    width: metadata.width || null,
    height: metadata.height || null,
    source_url: url,
  };
}

function thirdImagePrompt(payload, references) {
  const myth = payload.myth || {};
  const generated = payload.plan?.generated_image || {};
  const direction = generated.art_direction || {};
  const avoid = Array.isArray(generated.avoid) ? generated.avoid : [];
  return [
    "Use case: illustration-story",
    "Asset type: tercera escena de un carrusel editorial de Instagram 4:5",
    `Primary request: crear una escena nueva y exclusiva para el mito colombiano “${myth.title}”.`,
    `Input images: Image 1 es la referencia vertical canónica de identidad y protagonista; Image 2 es la referencia horizontal canónica de materiales, territorio y paleta. No copiar sus encuadres.`,
    `Narrative moment: ${direction.moment || generated.narrative_gap || "mostrar un momento diferente de las dos escenas canónicas"}`,
    `Subject: ${direction.subject || "los protagonistas documentados por el relato"}`,
    `Action: ${direction.action || generated.brief || "representar la transformación central con claridad"}`,
    `Scene/backdrop: ${direction.setting || `${myth.region || "territorio colombiano"}, integrado al relato`}`,
    "Style/medium: fotografía frontal de una maqueta física artesanal hecha con paper cut, paper relief y paper quilling; capas reales de cartulina, fibras visibles, cortes precisos, pequeños dobleces y sombras naturales de estudio.",
    `Composition/framing: ${direction.framing || "vertical 4:5, escena completa de borde a borde, jerarquía clara y acción legible incluso en pantalla móvil"}`,
    "Lighting/mood: luz lateral suave de estudio, sobria y táctil; profundidad baja de papel, nunca render 3D.",
    "Color palette: conservar la familia cromática, los dorados mate, azules de agua, verdes andinos, ocres minerales y papel de las referencias sin clonarlas.",
    "Materials/textures: papel hecho a mano, cartulina mate, fibras naturales, micro-sombras, bordes cortados y pegante apenas perceptible.",
    `Cultural context: comunidad ${myth.community || "Muisca"}, región ${myth.region || "Andina"}; tratamiento respetuoso, sin anacronismos ni símbolos genéricos inventados.`,
    `Continuity: ${direction.continuity || "mantener la identidad material, territorial y cromática de las dos referencias"}`,
    `Differentiation: ${direction.differentiation || "no reutilizar pose, fondo ni composición de las referencias"}`,
    "Constraints: una sola escena nueva; mantener la identidad visual de ambas referencias; sin texto, letras, números, logos, marcos ni marcas de agua.",
    `Avoid: ${[
      "ilustración digital plana",
      "pintura",
      "CGI",
      "plástico",
      "fantasía genérica",
      "caricatura infantil",
      "rostros hiperrealistas",
      "perspectivas inclinadas",
      "elementos flotantes",
      ...avoid,
    ].join("; ")}`,
    "",
    "Reference files:",
    `- Image 1: ${references.portrait}`,
    `- Image 2: ${references.landscape}`,
  ].join("\n");
}

const planArgument = argument("plan");
const planPath = planArgument ? path.resolve(planArgument) : "";
const thirdPath = argument("third")
  ? path.resolve(argument("third"))
  : "";

if (!planArgument) {
  throw new Error(
    "Uso: node scripts/instagram/prepare-editorial-assets.mjs --plan <plan.json> [--third <imagen>]"
  );
}

const payload = JSON.parse(await fs.readFile(planPath, "utf8"));
const slug = payload.myth?.slug;
if (!/^[a-z0-9-]+$/.test(slug || "")) {
  throw new Error("El plan no contiene un slug válido.");
}

const mythDirectory = path.dirname(planPath);
const sourcesDirectory = path.join(mythDirectory, "sources");
const generatedDirectory = path.join(mythDirectory, "generated");
await Promise.all([
  fs.mkdir(sourcesDirectory, { recursive: true }),
  fs.mkdir(generatedDirectory, { recursive: true }),
]);

const [portrait, landscape] = await Promise.all([
  downloadCanonical({
    url: payload.source_assets?.existing_portrait,
    outputDirectory: sourcesDirectory,
    name: "portrait",
  }),
  downloadCanonical({
    url: payload.source_assets?.existing_landscape,
    outputDirectory: sourcesDirectory,
    name: "landscape",
  }),
]);

const existingMedia = JSON.parse(
  await fs.readFile(path.join(mythDirectory, "media.json"), "utf8").catch(
    () => "{}"
  )
);
const media = {
  schema_version: 1,
  myth: {
    id: payload.myth?.id,
    title: payload.myth?.title,
    slug,
  },
  assets: {
    cover: portrait,
    secondary: landscape,
    ...(existingMedia.assets?.tertiary
      ? { tertiary: existingMedia.assets.tertiary }
      : {}),
  },
};

if (thirdPath) {
  const thirdDestination = path.join(generatedDirectory, "third.png");
  await sharp(thirdPath)
    .rotate()
    .resize(1080, 1350, {
      fit: "cover",
      position: "attention",
      withoutEnlargement: false,
    })
    .png({ compressionLevel: 9 })
    .toFile(thirdDestination);
  const metadata = await sharp(thirdDestination).metadata();
  media.assets.tertiary = {
    file: path.relative(mythDirectory, thirdDestination),
    mime: "image/png",
    width: metadata.width,
    height: metadata.height,
    generated_from_two_references: true,
  };
}

media.web = Object.fromEntries(
  Object.keys(media.assets).map((asset) => [
    asset,
    `/api/instagram/assets/${slug}/${asset}`,
  ])
);

const references = {
  portrait: path.join(mythDirectory, portrait.file),
  landscape: path.join(mythDirectory, landscape.file),
};
const prompt = thirdImagePrompt(payload, references);

await Promise.all([
  fs.writeFile(
    path.join(mythDirectory, "media.json"),
    `${JSON.stringify(media, null, 2)}\n`
  ),
  fs.writeFile(path.join(mythDirectory, "third-image-prompt.md"), `${prompt}\n`),
]);

console.log(
  JSON.stringify(
    {
      status: thirdPath ? "ready" : "references_ready",
      slug,
      media: path.join(mythDirectory, "media.json"),
      prompt: path.join(mythDirectory, "third-image-prompt.md"),
      references,
      third: media.assets.tertiary
        ? path.join(mythDirectory, media.assets.tertiary.file)
        : null,
    },
    null,
    2
  )
);
