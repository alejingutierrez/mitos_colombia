import { NextResponse } from "next/server";
import OpenAI from "openai";
import { put } from "@vercel/blob";
import { isPostgres, getSqlClient, getSqliteDbWritable } from "../../../../../lib/db.js";
import {
  buildBlobFilename,
  buildCraftImagePrompt,
  buildImageGenerationParams,
  getImageDataBuffer,
  IMAGE_PRESETS,
} from "../../../../../lib/image-generation.js";

export const runtime = "nodejs";
export const maxDuration = 300;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function rewritePromptSafely(originalPrompt) {
  const rewriteResponse = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Eres un experto en reescribir prompts para generación de imágenes. Tu trabajo es tomar un prompt de un mito colombiano y reescribirlo para que sea apropiado y seguro, eliminando cualquier referencia a desnudez, contenido sexual, violencia gráfica o elementos que puedan ser rechazados por sistemas de moderación. Mantén el espíritu cultural y educativo del mito.",
      },
      {
        role: "user",
        content: `Reescribe este prompt de manera segura, apropiada y educativa, manteniendo el contexto cultural pero eliminando cualquier elemento potencialmente problemático:\n\n${originalPrompt}`,
      },
    ],
    temperature: 0.3,
  });

  return rewriteResponse.choices[0].message.content;
}

function isSafetyViolation(error) {
  return (
    error?.message?.includes("safety") ||
    error?.message?.includes("rejected by the safety system") ||
    error?.code === "content_policy_violation"
  );
}

// Basic auth middleware
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

// Prompts base
const BASE_PROMPTS = {
  myth: "Imagen vertical editorial de mito colombiano como fotografia frontal de una pieza fisica de papel artesanal, con geografia, simbolos culturales y escena principal clara. Sin texto, logos, desnudez ni violencia grafica.",
  community: "Imagen vertical editorial sobre una comunidad o territorio colombiano como trabajo real de paper cut y paper relief fotografiado, con elementos culturales respetuosos y naturaleza local. Sin texto.",
  category: "Imagen vertical editorial de categoria tematica de mitologia colombiana como tableau artesanal de papel, simbolico, tactil y culturalmente situado. Sin texto.",
  region: "Imagen vertical editorial de region colombiana como paisaje fisico construido en capas de papel, con biodiversidad, geografia y cultura visual local. Sin texto."
};

// Generate vertical image
async function generateVerticalImage(prompt, slug, entityType, entity = {}, isRetry = false) {
  try {
    console.log(`[IMG-VERTICAL-SINGLE] Generating image for ${entityType}:${slug}`);

    const enhancedPrompt = buildCraftImagePrompt({
      entity: {
        ...entity,
        type: entityType,
        name: entity.name,
        slug,
        prompt,
      },
      orientation: "vertical",
    });

    const response = await openai.images.generate(
      buildImageGenerationParams({ prompt: enhancedPrompt, preset: "vertical" })
    );

    const imageBuffer = getImageDataBuffer(response);
    const filename = buildBlobFilename({ preset: "vertical", slug, entityType });
    const blob = await put(filename, imageBuffer, {
      access: 'public',
      contentType: IMAGE_PRESETS.vertical.contentType,
    });

    return blob.url;

  } catch (error) {
    console.error("[IMG-VERTICAL-SINGLE] Error:", error);
    if (isSafetyViolation(error) && !isRetry) {
      try {
        console.log("[IMG-VERTICAL-SINGLE] Safety violation detected. Rewriting prompt...");
        const safePrompt = await rewritePromptSafely(prompt);
        return await generateVerticalImage(safePrompt, slug, entityType, entity, true);
      } catch (rewriteError) {
        console.error("[IMG-VERTICAL-SINGLE] Safety fallback failed:", rewriteError);
        throw rewriteError;
      }
    }
    throw error;
  }
}

// Upsert vertical image
async function upsertVerticalImage(entityType, entityId, entityName, entitySlug, imageUrl, basePrompt, customPrompt = null) {
  const isPg = isPostgres();

  if (isPg) {
    const db = getSqlClient();

    const existing = await db`
      SELECT id FROM vertical_images
      WHERE entity_type = ${entityType} AND entity_id = ${entityId}
    `;

    if (existing.length > 0) {
      const result = await db`
        UPDATE vertical_images
        SET
          image_url = ${imageUrl},
          base_prompt = ${basePrompt},
          custom_prompt = ${customPrompt},
          updated_at = NOW()
        WHERE entity_type = ${entityType} AND entity_id = ${entityId}
        RETURNING *
      `;
      return result[0];
    } else {
      const result = await db`
        INSERT INTO vertical_images (
          entity_type, entity_id, entity_name, entity_slug,
          base_prompt, custom_prompt, image_url
        ) VALUES (
          ${entityType}, ${entityId}, ${entityName}, ${entitySlug},
          ${basePrompt}, ${customPrompt}, ${imageUrl}
        )
        RETURNING *
      `;
      return result[0];
    }
  } else {
    const db = getSqliteDbWritable();

    const existing = db.prepare(`
      SELECT id FROM vertical_images
      WHERE entity_type = ? AND entity_id = ?
    `).get(entityType, entityId);

    if (existing) {
      db.prepare(`
        UPDATE vertical_images
        SET
          image_url = ?,
          base_prompt = ?,
          custom_prompt = ?,
          updated_at = datetime('now')
        WHERE entity_type = ? AND entity_id = ?
      `).run(imageUrl, basePrompt, customPrompt, entityType, entityId);
    } else {
      db.prepare(`
        INSERT INTO vertical_images (
          entity_type, entity_id, entity_name, entity_slug,
          base_prompt, custom_prompt, image_url
        ) VALUES (?, ?, ?, ?, ?, ?, ?)
      `).run(entityType, entityId, entityName, entitySlug, basePrompt, customPrompt, imageUrl);
    }

    const result = db.prepare(`
      SELECT * FROM vertical_images
      WHERE entity_type = ? AND entity_id = ?
    `).get(entityType, entityId);

    return result;
  }
}

export async function POST(request) {
  try {
    if (!checkAuth(request)) {
      return NextResponse.json(
        { error: "Unauthorized" },
        {
          status: 401,
          headers: { 'WWW-Authenticate': 'Basic realm="Admin Area"' }
        }
      );
    }

    const body = await request.json();
    const {
      entityType,
      entityId,
      entityName,
      entitySlug,
      customPrompt,
      region,
      community,
      excerpt,
    } = body;

    if (!entityType || !entityId || !entityName || !entitySlug) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log(`[GEN-SINGLE] Starting generation for ${entityType} ${entityId}: ${entityName}`);

    // Build complete prompt
    const basePrompt = BASE_PROMPTS[entityType] || BASE_PROMPTS.myth;
    const fullPrompt = customPrompt
      ? `${basePrompt}\n\n${customPrompt}`
      : basePrompt;

    // Generate image
    const imageUrl = await generateVerticalImage(fullPrompt, entitySlug, entityType, {
      name: entityName,
      region,
      community,
      excerpt,
    });
    console.log(`[GEN-SINGLE] Image generated: ${imageUrl}`);

    // Save to database
    const result = await upsertVerticalImage(
      entityType,
      entityId,
      entityName,
      entitySlug,
      imageUrl,
      basePrompt,
      customPrompt
    );

    console.log(`[GEN-SINGLE] ✓ Complete for ${entityType}: ${entityName}`);

    return NextResponse.json({
      success: true,
      message: "Imagen vertical generada exitosamente",
      data: result
    });

  } catch (error) {
    console.error("Error generating single image:", error);
    return NextResponse.json(
      {
        error: error.message || "Failed to generate image",
        details: error.toString()
      },
      { status: 500 }
    );
  }
}
