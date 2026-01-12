import { NextResponse } from "next/server";
import OpenAI from "openai";
import sharp from "sharp";
import { put, del } from "@vercel/blob";
import {
  isPostgres,
  getSqlClient,
  getSqliteDb,
  getSqliteDbWritable,
} from "../../../../../lib/db.js";
import { IMAGE_STYLE_GUIDE } from "../../../../../lib/image-guidelines.js";

export const runtime = "nodejs";
export const maxDuration = 300;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const OUTPUT_WIDTH = 1280;
const OUTPUT_HEIGHT = 720;
const JPEG_QUALITY = 82;

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

function resolveTable(entityType) {
  if (entityType === "myth") return "myths";
  if (entityType === "community") return "communities";
  if (entityType === "category") return "tags";
  if (entityType === "region") return "regions";
  return null;
}

function getFallbackPrompt(entityType, name) {
  if (entityType === "community") {
    return `Ilustración editorial horizontal sobre la comunidad indígena ${name}, con símbolos culturales, paisaje del territorio y una atmósfera respetuosa.`;
  }
  if (entityType === "category") {
    return `Ilustración editorial horizontal sobre la temática mitológica "${name}" en Colombia, con símbolos abstractos, naturaleza y atmósfera ritual.`;
  }
  if (entityType === "region") {
    return `Ilustración editorial horizontal inspirada en la región ${name} de Colombia, con paisajes característicos, ríos y elementos culturales.`;
  }
  return `Ilustración editorial horizontal inspirada en el mito "${name}", con atmósfera narrativa y elementos simbólicos de la tradición colombiana.`;
}

async function rewritePromptSafely(originalPrompt) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Eres experto en reescribir prompts para imágenes culturales. " +
          "Reescribe el prompt para que sea seguro y apropiado, sin violencia gráfica ni contenido sexual. " +
          "Mantén el contexto cultural y editorial. Devuelve solo el prompt reescrito.",
      },
      {
        role: "user",
        content: originalPrompt,
      },
    ],
    temperature: 0.3,
  });

  return response.choices[0].message.content.trim();
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

async function generateImageBuffer(prompt, isRetry = false) {
  try {
    const enhancedPrompt = `CONTEXTO CULTURAL: Ilustración editorial horizontal (16:9) de mitología colombiana con valor educativo y patrimonial. Sin texto ni logos, sin violencia gráfica ni desnudez.\n\n${prompt}\n\n${IMAGE_STYLE_GUIDE}`;

    const response = await openai.images.generate({
      model: "gpt-image-1-mini",
      prompt: enhancedPrompt,
      moderation: "low",
      n: 1,
      size: "1536x1024",
      quality: "high",
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

    throw new Error("No base64 data or URL received from OpenAI");
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

async function getEntityById(entityType, entityId) {
  if (isPostgres()) {
    const db = getSqlClient();
    if (entityType === "myth") {
      const result = await db`
        SELECT id, title as name, slug, image_prompt, image_url
        FROM myths
        WHERE id = ${entityId}
      `;
      return (result.rows || result)[0];
    }
    if (entityType === "community") {
      const result = await db`
        SELECT id, name, slug, image_prompt, image_url
        FROM communities
        WHERE id = ${entityId}
      `;
      return (result.rows || result)[0];
    }
    if (entityType === "category") {
      const result = await db`
        SELECT id, name, slug, image_prompt, image_url
        FROM tags
        WHERE id = ${entityId}
      `;
      return (result.rows || result)[0];
    }
    if (entityType === "region") {
      const result = await db`
        SELECT id, name, slug, image_prompt, image_url
        FROM regions
        WHERE id = ${entityId}
      `;
      return (result.rows || result)[0];
    }
    return null;
  }

  const db = getSqliteDb();
  if (entityType === "myth") {
    return db
      .prepare(
        `SELECT id, title as name, slug, image_prompt, image_url FROM myths WHERE id = ?`
      )
      .get(entityId);
  }
  if (entityType === "community") {
    return db
      .prepare(
        `SELECT id, name, slug, image_prompt, image_url FROM communities WHERE id = ?`
      )
      .get(entityId);
  }
  if (entityType === "category") {
    return db
      .prepare(
        `SELECT id, name, slug, image_prompt, image_url FROM tags WHERE id = ?`
      )
      .get(entityId);
  }
  if (entityType === "region") {
    return db
      .prepare(
        `SELECT id, name, slug, image_prompt, image_url FROM regions WHERE id = ?`
      )
      .get(entityId);
  }
  return null;
}

async function updateEntityImage(entityType, entityId, imageUrl) {
  if (isPostgres()) {
    const db = getSqlClient();
    if (entityType === "myth") {
      const result = await db`
        UPDATE myths
        SET image_url = ${imageUrl}, updated_at = NOW()
        WHERE id = ${entityId}
        RETURNING id, title as name, image_url
      `;
      return (result.rows || result)[0];
    }
    if (entityType === "community") {
      const result = await db`
        UPDATE communities
        SET image_url = ${imageUrl}
        WHERE id = ${entityId}
        RETURNING id, name, image_url
      `;
      return (result.rows || result)[0];
    }
    if (entityType === "category") {
      const result = await db`
        UPDATE tags
        SET image_url = ${imageUrl}
        WHERE id = ${entityId}
        RETURNING id, name, image_url
      `;
      return (result.rows || result)[0];
    }
    if (entityType === "region") {
      const result = await db`
        UPDATE regions
        SET image_url = ${imageUrl}
        WHERE id = ${entityId}
        RETURNING id, name, image_url
      `;
      return (result.rows || result)[0];
    }
    return null;
  }

  const db = getSqliteDbWritable();
  const table = resolveTable(entityType);
  if (!table) {
    return null;
  }

  const updates =
    entityType === "myth"
      ? "image_url = ?, updated_at = datetime('now')"
      : "image_url = ?";
  const stmt = db.prepare(`
    UPDATE ${table}
    SET ${updates}
    WHERE id = ?
  `);
  stmt.run(imageUrl, entityId);
  return { id: entityId, image_url: imageUrl };
}

async function deleteOldImage(imageUrl) {
  if (!imageUrl) return;
  try {
    await del(imageUrl);
  } catch (error) {
    console.error("[CURACION] Error deleting old image:", error);
  }
}

export async function POST(request) {
  try {
    if (!checkAuth(request)) {
      return NextResponse.json(
        { error: "Unauthorized" },
        {
          status: 401,
          headers: {
            "WWW-Authenticate": 'Basic realm="Admin Area"',
          },
        }
      );
    }

    const body = await request.json();
    const { entityType, entityId } = body;

    if (!entityType || !entityId) {
      return NextResponse.json(
        { error: "entityType y entityId son requeridos" },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY no está configurada" },
        { status: 500 }
      );
    }

    const entity = await getEntityById(entityType, entityId);
    if (!entity) {
      return NextResponse.json(
        { error: "Entidad no encontrada" },
        { status: 404 }
      );
    }

    const basePrompt = entity.image_prompt || getFallbackPrompt(entityType, entity.name);

    const rawBuffer = await generateImageBuffer(basePrompt);
    const optimizedBuffer = await optimizeImageBuffer(rawBuffer);

    const filename = `mitos/${entity.slug}-${Date.now()}.jpg`;
    const blob = await put(filename, optimizedBuffer, {
      access: "public",
      contentType: "image/jpeg",
    });

    if (entity.image_url) {
      await deleteOldImage(entity.image_url);
    }

    const updated = await updateEntityImage(entityType, entityId, blob.url);

    return NextResponse.json({
      success: true,
      message: "Imagen regenerada y optimizada",
      data: updated,
    });
  } catch (error) {
    console.error("[CURACION] Error regenerating image:", error);
    return NextResponse.json(
      { error: error.message || "Error al regenerar imagen" },
      { status: 500 }
    );
  }
}
