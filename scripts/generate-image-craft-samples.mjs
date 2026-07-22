import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { execFile } from "node:child_process";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

import { put } from "@vercel/blob";
import dotenv from "dotenv";
import OpenAI from "openai";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const execFileAsync = promisify(execFile);

dotenv.config({ path: path.join(rootDir, ".env") });

const dbPath = process.env.MITOS_DB_PATH || path.join(rootDir, "data", "mitos.sqlite");
const outputDir = path.join(rootDir, "artifacts", "image-craft-samples");
const model = process.env.IMAGE_GENERATION_MODEL || "gpt-image-2";
const size = process.env.IMAGE_GENERATION_SIZE || "1536x1024";
const quality = process.env.IMAGE_GENERATION_QUALITY || "high";

const sampleIds = [721, 32, 184, 869, 65];

const regionCraft = {
  Andina:
    "Paramo altoandino, laguna sagrada, frailejones, piedra gris humeda, tunjos y geometria muisca sobria.",
  Caribe:
    "Luz de luna sobre caminos de arena, cardones, salinas y tejidos Wayuu insinuados en patrones de papel.",
  Amazonas:
    "Rio profundo, chagras, maloca, hojas grandes, fibras de cumare, canoa y niebla verde de selva humeda.",
  "Orinoquía":
    "Sabana abierta, cerros antiguos, rios espejo, flor de Inirida, palma de moriche y cielo amplio.",
  "Pacífico":
    "Paramo y montana Nasa, rio Paez naciendo entre pantanos, carrizo, niebla fria y vegetacion densa.",
};

const communityCraft = {
  Muiscas:
    "Lenguaje visual muisca: oro mate, piedra, agua ceremonial, textiles geometricos discretos, respeto arqueologico.",
  Wayuu:
    "Lenguaje visual Wayuu: tramas de mochila y manta reinterpretadas como capas de papel, paleta nocturna de arena, indigo y oro.",
  Yukuna:
    "Lenguaje visual Yukuna amazonico: maloca, fibras vegetales, canastos, semillas y rutas de rio, sin exotizar.",
  Orinoquía:
    "Lenguaje visual orinoquense: sabana, agua, flor, roca y viento, con presencia humana sugerida y no literal.",
  Nasa:
    "Lenguaje visual Nasa: montana, agua, bastones y tejido geometrico sobrio, con una mirada de territorio vivo.",
};

function normalizePromptText(value) {
  return String(value || "")
    .normalize("NFKC")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function softenUnsafeLanguage(value) {
  return normalizePromptText(value)
    .replace(/\bdeath\b/gi, "mystery")
    .replace(/\bdoomed?\b/gi, "lost to legend")
    .replace(/\bviolence\b/gi, "tension")
    .replace(/\bpunishment\b/gi, "consequence")
    .replace(/\bdagger\b/gi, "ceremonial golden object")
    .replace(/\bdevour(?:s|ed|ing)?\b/gi, "overwhelm")
    .replace(/\bvanish forever\b/gi, "fade into the night legend");
}

function buildCraftPrompt(myth) {
  const regional = regionCraft[myth.region] || regionCraft.Pacífico;
  const community = communityCraft[myth.community] || "";
  const sourcePrompt = softenUnsafeLanguage(myth.image_prompt);

  return `Direccion de arte para una imagen editorial horizontal 16:9 de un mito colombiano.

Tecnica central:
- Fotografia de un trabajo real de papel artesanal, no ilustracion digital plana.
- Paper cut, paper relief y paper quilling hechos a mano: capas fisicas, bordes de papel visibles, fibras, micro-sombras, dobleces finos, cortes precisos y volumen bajo.
- Debe sentirse como una pieza construida manualmente por artistas, fotografiada en estudio con luz suave y controlada.
- Profundidad real por capas de papel, pero sin verse como render 3D, sin plastico, sin glossy CGI, sin animacion, sin figuras flotando en perspectivas raras.
- Composicion frontal, directa, estable, de borde a borde; el encuadre debe llenar toda la imagen, sin margenes blancos, sin mockup, sin marco, sin texto ni logos.

Identidad colombiana:
- Region: ${myth.region}.
- Comunidad / territorio: ${myth.community || "Varios"}.
- Refuerzo visual regional: ${regional}
${community ? `- Refuerzo cultural: ${community}` : ""}
- Paleta editorial: verde selva, azul rio, dorado tierra, ocres minerales y sombras naturales; usar acentos regionales, no una bandera literal.

Mito:
- Titulo: ${myth.title}
- Resumen: ${myth.excerpt}
- Prompt original del catalogo, rearticulado como referencia narrativa: ${sourcePrompt}

Composicion deseada:
- Un solo tableau artesanal, limpio y poderoso, con jerarquia clara de escena principal, paisaje y simbolos.
- Personajes, si aparecen, deben ser respetuosos, estilizados y secundarios a la escena material; evitar retratos genericos o disfraces anacronicos.
- Priorizar simbolos, geografia, objetos, fauna/flora y arquitectura del territorio.
- Iluminacion fotografica lateral suave, sombras de papel naturales, textura tactil, acabado editorial de revista cultural.
- Sin tipografia, sin letras, sin marcas de agua, sin borde decorativo, sin aspecto de cartel infantil.`;
}

function getSampleMyths() {
  return getSampleMythsFromSqliteCli();
}

async function getSampleMythsFromSqliteCli() {
  const idList = sampleIds
    .map((id) => Number.parseInt(id, 10))
    .filter(Number.isFinite)
    .join(", ");
  const query = `
      SELECT
        m.id,
        m.title,
        m.slug,
        m.excerpt,
        m.image_prompt,
        r.name as region,
        COALESCE(c.name, '') as community
      FROM myths m
      JOIN regions r ON r.id = m.region_id
      LEFT JOIN communities c ON c.id = m.community_id
      WHERE m.id IN (${idList})
      `;
  const { stdout } = await execFileAsync("sqlite3", [
    "-json",
    dbPath,
    query,
  ]);
  const rows = JSON.parse(stdout || "[]");

  const byId = new Map(rows.map((row) => [row.id, row]));
  return sampleIds.map((id) => byId.get(id)).filter(Boolean);
}

async function writeLocalImage(buffer, slug) {
  await fs.mkdir(outputDir, { recursive: true });
  const filePath = path.join(outputDir, `${slug}.jpg`);
  const optimized = await sharp(buffer)
    .rotate()
    .resize({
      width: 1536,
      height: 1024,
      fit: "cover",
      position: "attention",
    })
    .jpeg({ quality: 88, mozjpeg: true })
    .toBuffer();

  await fs.writeFile(filePath, optimized);
  return { filePath, buffer: optimized };
}

async function generateImage(openai, myth) {
  const prompt = buildCraftPrompt(myth);
  const response = await openai.images.generate({
    model,
    prompt,
    n: 1,
    size,
    quality,
    output_format: "jpeg",
  });

  const b64Data = response.data?.[0]?.b64_json;
  if (!b64Data) {
    throw new Error(`No b64_json returned for ${myth.slug}`);
  }

  return {
    prompt,
    buffer: Buffer.from(b64Data, "base64"),
  };
}

async function run() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is required");
  }

  const shouldUpload = process.argv.includes("--upload");
  if (shouldUpload && !process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error("BLOB_READ_WRITE_TOKEN is required for --upload");
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const myths = await getSampleMyths();
  const manifest = [];

  for (const myth of myths) {
    console.log(`[sample] generating ${myth.id} ${myth.slug}`);
    const generated = await generateImage(openai, myth);
    const local = await writeLocalImage(generated.buffer, myth.slug);

    let blobUrl = null;
    if (shouldUpload) {
      const filename = `samples/image-craft/${myth.slug}-${Date.now()}.jpg`;
      const blob = await put(filename, local.buffer, {
        access: "public",
        contentType: "image/jpeg",
      });
      blobUrl = blob.url;
    }

    manifest.push({
      id: myth.id,
      title: myth.title,
      slug: myth.slug,
      region: myth.region,
      community: myth.community,
      model,
      size,
      quality,
      local_path: local.filePath,
      blob_url: blobUrl,
      prompt: generated.prompt,
    });
  }

  const manifestPath = path.join(outputDir, "manifest.json");
  await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`[sample] wrote ${manifestPath}`);
  for (const item of manifest) {
    console.log(
      `[sample] ${item.title} | ${item.region}/${item.community} | ${item.local_path}${item.blob_url ? ` | ${item.blob_url}` : ""}`
    );
  }
}

run().catch((error) => {
  console.error("[sample] failed", error);
  process.exitCode = 1;
});
