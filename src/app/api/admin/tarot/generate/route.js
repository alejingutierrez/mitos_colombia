import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import OpenAI, { toFile } from "openai";
import sharp from "sharp";
import { put } from "@vercel/blob";
import { listTarotCardsMissing, updateTarotCardImage } from "../../../../../lib/tarot";

export const runtime = "nodejs";
export const maxDuration = 300;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const OUTPUT_WIDTH = 1024;
const OUTPUT_HEIGHT = 1536;
const JPEG_QUALITY = 82;
const TAROT_TEMPLATE_PATH = path.join(process.cwd(), "public", "tarot.png");
let cachedTemplateFile;
const MAX_PROMPT_LENGTH = 30000;
const MAX_BASE_PROMPT = 6000;
const MAX_IMAGE_PROMPT = 2000;
const MAX_CONTENT_CHARS = 12000;
const MAJOR_ROMAN = [
  "0",
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
  "XIII",
  "XIV",
  "XV",
  "XVI",
  "XVII",
  "XVIII",
  "XIX",
  "XX",
  "XXI",
];

const TAROT_STYLE_PROMPT = `Ilustración de carta de tarot vertical 9:16 inspirada en Rider-Waite, reinterpretada en paper quilling + paper cut.
Usa la plantilla base tarot.png como estructura fija: marco dorado y ornamentos idénticos en toda la serie; no alterar la geometría del marco.
Bordes/lineas del marco en verde selva uniforme (#1f6b45), nunca negros. Mantener el fondo dorado de la plantilla.
Textura de papel en capas visibles, relieve sutil, sombras suaves, acabado artesanal.
Paleta colombiana: verde selva, azul río, dorados tierra y acentos cálidos. Coherencia cromática entre cartas.
Composición centrada con figura principal del mito y símbolos claros del territorio; fondo con paisaje regional sugerido.
La simbología del tarot debe adaptarse al mito, su comunidad y su región; evitar iconografía genérica que no dialogue con el relato.
Alta legibilidad visual, contraste equilibrado, estética editorial elegante.
Tipografía: si es arcano mayor, numeral romano centrado en la banda superior; si es arcano menor, la banda superior va sin numeral. Nombre de la carta centrado en la banda inferior con tamaño, peso y espaciado uniformes; si el nombre es largo, ajustar tracking/interlineado sin cambiar el tamaño.
No incluir texto adicional ni el nombre del mito. Sin logos ni marcas.`;

async function getTarotTemplateFile() {
  if (!fs.existsSync(TAROT_TEMPLATE_PATH)) {
    throw new Error(`Plantilla de tarot no encontrada en ${TAROT_TEMPLATE_PATH}`);
  }
  if (!cachedTemplateFile) {
    const buffer = await fs.promises.readFile(TAROT_TEMPLATE_PATH);
    cachedTemplateFile = await toFile(buffer, "tarot.png", {
      type: "image/png",
    });
  }
  return cachedTemplateFile;
}

function checkAuth(request) {
  const authHeader = request.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return false;
  }

  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString("utf-8");
  const [username, password] = credentials.split(":");

  const validUsername = process.env.ADMIN_USERNAME || "admin";
  const validPassword = process.env.ADMIN_PASSWORD || "admin";

  return username === validUsername && password === validPassword;
}

function clampNumber(value, min, max, fallback) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) return fallback;
  return Math.min(Math.max(parsed, min), max);
}

function normalizePromptText(value) {
  if (!value) return "";
  return String(value).replace(/\s+/g, " ").trim();
}

function truncateText(value, maxLength, mode = "tail") {
  const normalized = normalizePromptText(value);
  if (!normalized || normalized.length <= maxLength) {
    return normalized;
  }
  if (maxLength <= 0) return "";
  if (mode === "middle") {
    const buffer = Math.max(12, Math.floor(maxLength * 0.04));
    const sliceLength = Math.max(1, Math.floor((maxLength - buffer) / 2));
    return `${normalized.slice(0, sliceLength)} ... ${normalized.slice(-sliceLength)}`;
  }
  const clipped = normalized.slice(0, Math.max(1, maxLength - 12));
  return `${clipped}... [recortado]`;
}

function normalizePromptInput(value) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item)).join("\n\n");
  }
  if (value === null || value === undefined) return "";
  return String(value);
}

function ensurePromptLength(value) {
  const normalized = normalizePromptInput(value);
  if (!normalized) return "";
  if (normalized.length <= MAX_PROMPT_LENGTH) return normalized;
  return truncateText(normalized, MAX_PROMPT_LENGTH);
}

function formatField(label, value, maxLength, mode) {
  const normalized = maxLength
    ? truncateText(value, maxLength, mode)
    : normalizePromptText(value);
  return `${label}: ${normalized || "Sin datos"}`;
}

function buildMythDetails(card) {
  const rawMythTitle =
    card.myth_title === undefined || card.myth_title === null
      ? ""
      : String(card.myth_title);
  const mythTitleValue = rawMythTitle === "" ? "Sin datos" : rawMythTitle;

  return [
    `Mito (exacto BD): ${mythTitleValue}`,
    formatField("Slug mito", card.myth_slug),
    formatField("ID mito", card.myth_id),
    formatField(
      "Región",
      card.myth_region
        ? `${card.myth_region} (${card.myth_region_slug || "sin slug"})`
        : ""
    ),
    formatField(
      "Comunidad",
      card.myth_community
        ? `${card.myth_community} (${card.myth_community_slug || "sin slug"})`
        : ""
    ),
    formatField("Categoría (category_path)", card.myth_category_path),
    formatField("Tags (tags_raw)", card.myth_tags_raw),
    formatField("Tags (tabla)", card.myth_tags_list),
    formatField("Keyword foco", card.myth_focus_keyword),
    formatField("Keywords foco (raw)", card.myth_focus_keywords_raw),
    formatField("Keywords (tabla)", card.myth_keywords_list),
    formatField("SEO title", card.myth_seo_title),
    formatField("SEO description", card.myth_seo_description),
    formatField(
      "Prompt original de imagen del mito",
      card.myth_image_prompt,
      MAX_IMAGE_PROMPT
    ),
    formatField("Imagen actual del mito (URL)", card.myth_image_url),
    formatField("Resumen (excerpt)", card.myth_excerpt),
    formatField(
      "Contenido completo (recortado si es muy largo)",
      card.myth_content,
      MAX_CONTENT_CHARS,
      "middle"
    ),
    formatField("Contenido formateado (flag)", card.myth_content_formatted),
    formatField(
      "Coordenadas",
      card.myth_latitude || card.myth_longitude
        ? `${card.myth_latitude || "sin lat"}, ${card.myth_longitude || "sin lng"}`
        : ""
    ),
    formatField("Region ID", card.myth_region_id),
    formatField("Comunidad ID", card.myth_community_id),
    formatField("Fila de origen", card.myth_source_row),
    formatField("Creado en", card.myth_created_at),
    formatField("Actualizado en", card.myth_updated_at),
  ].join("\n");
}

function assemblePrompt(sections, limit) {
  const divider = "\n\n";
  let output = "";

  sections.forEach((section) => {
    const chunk = String(section || "").trim();
    if (!chunk) return;
    if (!output) {
      output = chunk.slice(0, limit);
      return;
    }
    const candidate = `${output}${divider}${chunk}`;
    if (candidate.length <= limit) {
      output = candidate;
      return;
    }
    const remaining = limit - output.length - divider.length;
    if (remaining > 0) {
      output = `${output}${divider}${truncateText(chunk, remaining)}`;
    }
  });

  return output;
}

function buildTarotPrompt(card) {
  const basePrompt = truncateText(
    card.custom_prompt?.trim() || card.base_prompt || "",
    MAX_BASE_PROMPT
  );
  const mythDetails = buildMythDetails(card);
  const romanNumeral =
    card.arcana === "major"
      ? MAJOR_ROMAN[card.order_index] || ""
      : "";
  const typographicDirective =
    card.arcana === "major"
      ? `Numeral romano superior obligatorio: ${romanNumeral}.`
      : "Sin numeral romano en la banda superior (solo arcanos mayores).";
  const nameDirective = `Nombre exacto en banda inferior: ${card.card_name}.`;

  return [
    TAROT_STYLE_PROMPT,
    "Guía editorial de la carta:",
    basePrompt,
    "Prioridad creativa: mito, comunidad y región; la simbología del tarot se moldea a ese universo cultural.",
    "Información completa del mito para inspirar símbolos, personajes, paisajes y atmósfera:",
    mythDetails,
    "Indicaciones tipográficas específicas:",
    typographicDirective,
    nameDirective,
    "Recuerda: solo debe aparecer el título de la carta, nada más.",
  ];

  return assemblePrompt(sections.filter(Boolean), MAX_PROMPT_LENGTH);
}

async function rewritePromptSafely(originalPrompt) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Reescribe el prompt para una imagen editorial de tarot, evitando violencia gráfica y contenido sexual. Mantén el estilo paper quilling/cut y Rider-Waite, priorizando símbolos del mito, la comunidad y la región. Usa la plantilla tarot.png como marco fijo con fondo dorado y bordes verde selva uniformes (#1f6b45). Conserva el numeral romano superior solo en arcanos mayores y el nombre inferior con tamaño uniforme. Devuelve solo el prompt reescrito.",
      },
      {
        role: "user",
        content: originalPrompt,
      },
    ],
    temperature: 0.3,
  });

  return ensurePromptLength(response.choices[0].message.content.trim());
}

async function generateImageBuffer(prompt, isRetry = false) {
  try {
    const safePrompt = ensurePromptLength(prompt);
    const templateFile = await getTarotTemplateFile();
    const response = await openai.images.edit({
      model: "gpt-image-1-mini",
      image: templateFile,
      prompt: safePrompt,
      n: 1,
      size: "1024x1536",
      quality: "high",
      output_format: "png",
    });

    const b64Data = response.data?.[0]?.b64_json;
    if (b64Data) {
      return Buffer.from(b64Data, "base64");
    }

    const imageUrl = response.data?.[0]?.url;
    if (imageUrl) {
      const imageResponse = await fetch(imageUrl);
      if (!imageResponse.ok) {
        throw new Error(`Failed to fetch image: ${imageResponse.status}`);
      }
      const arrayBuffer = await imageResponse.arrayBuffer();
      return Buffer.from(arrayBuffer);
    }

    throw new Error("No image data received from OpenAI");
  } catch (error) {
    const isSafetyViolation =
      error.message?.includes("safety") ||
      error.message?.includes("rejected by the safety system") ||
      error.code === "content_policy_violation";

    if (isSafetyViolation && !isRetry) {
      const safePrompt = await rewritePromptSafely(prompt);
      return generateImageBuffer(safePrompt, true);
    }

    throw error;
  }
}

async function optimizeImageBuffer(buffer) {
  return sharp(buffer)
    .rotate()
    .resize({
      width: OUTPUT_WIDTH,
      height: OUTPUT_HEIGHT,
      fit: "cover",
      position: "entropy",
    })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toBuffer();
}

export async function POST(request) {
  try {
    if (!checkAuth(request)) {
      return NextResponse.json(
        { error: "Unauthorized" },
        {
          status: 401,
          headers: { "WWW-Authenticate": 'Basic realm="Admin Area"' },
        }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY no está configurada" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const count = clampNumber(body?.count, 1, 10, 5);

    const pendingCards = await listTarotCardsMissing(count);

    if (!pendingCards.length) {
      return NextResponse.json({
        generated: [],
        message: "No hay cartas pendientes",
      });
    }

    const generated = [];

    for (const card of pendingCards) {
      const prompt = buildTarotPrompt(card);
      const rawBuffer = await generateImageBuffer(prompt);
      const optimizedBuffer = await optimizeImageBuffer(rawBuffer);

      const filename = `tarot/cards/${card.slug}-${Date.now()}.jpg`;
      const blob = await put(filename, optimizedBuffer, {
        access: "public",
        contentType: "image/jpeg",
      });

      await updateTarotCardImage(card.id, blob.url);

      generated.push({
        id: card.id,
        card_name: card.card_name,
        image_url: blob.url,
      });
    }

    return NextResponse.json({
      generated,
      message: `Generadas ${generated.length} cartas`,
    });
  } catch (error) {
    console.error("[TAROT] Error generating cards:", error);
    return NextResponse.json(
      { error: error.message || "Error al generar cartas" },
      { status: 500 }
    );
  }
}
