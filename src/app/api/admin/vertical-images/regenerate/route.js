import { NextResponse } from "next/server";
import OpenAI from "openai";
import { put, del } from "@vercel/blob";
import { isPostgres, getSqlClient, getSqliteDb, getSqliteDbWritable } from "../../../../../lib/db.js";
import {
  buildBlobFilename,
  buildCraftImagePrompt,
  buildImageGenerationParams,
  getImageDataBuffer,
  IMAGE_PRESETS,
} from "../../../../../lib/image-generation.js";

export const runtime = "nodejs";
export const maxDuration = 300; // 5 minutes max for image generation

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

// Generate vertical image
async function generateVerticalImage(prompt, slug, entityType, entity = {}, isRetry = false) {
  try {
    console.log(`[REGENERATE] Generating vertical image for ${slug}...`);

    const enhancedPrompt = buildCraftImagePrompt({
      entity: {
        ...entity,
        type: entityType,
        slug,
        prompt,
      },
      orientation: "vertical",
    });

    // Generate image with OpenAI
    const response = await openai.images.generate(
      buildImageGenerationParams({ prompt: enhancedPrompt, preset: "vertical" })
    );

    // Convert base64 to buffer. GPT Image models return b64_json by default.
    const imageBuffer = getImageDataBuffer(response);

    // Upload to Vercel Blob Storage
    const filename = buildBlobFilename({ preset: "vertical", slug, entityType });
    const blob = await put(filename, imageBuffer, {
      access: 'public',
      contentType: IMAGE_PRESETS.vertical.contentType,
    });

    return blob.url;

  } catch (error) {
    console.error("[REGENERATE] Error in generateVerticalImage:", error);
    if (isSafetyViolation(error) && !isRetry) {
      try {
        console.log("[REGENERATE] Safety violation detected. Rewriting prompt...");
        const safePrompt = await rewritePromptSafely(prompt);
        return await generateVerticalImage(safePrompt, slug, entityType, entity, true);
      } catch (rewriteError) {
        console.error("[REGENERATE] Safety fallback failed:", rewriteError);
        throw rewriteError;
      }
    }
    throw error;
  }
}

// Delete old image from Vercel Blob
async function deleteOldImage(imageUrl) {
  if (!imageUrl) return;

  try {
    console.log(`[REGENERATE] Deleting old image: ${imageUrl}`);
    await del(imageUrl);
    console.log(`[REGENERATE] Old image deleted successfully`);
  } catch (error) {
    console.error("[REGENERATE] Error deleting old image:", error);
    // Don't throw - we can continue even if deletion fails
  }
}

// Get vertical image by ID
async function getVerticalImageById(id) {
  const isPg = isPostgres();

  if (isPg) {
    const db = getSqlClient();
    const result = await db`
      SELECT * FROM vertical_images WHERE id = ${id}
    `;
    return result.rows?.[0] || result[0];
  } else {
    const db = getSqliteDb();
    const stmt = db.prepare("SELECT * FROM vertical_images WHERE id = ?");
    return stmt.get(id);
  }
}

// Update vertical image URL
async function updateVerticalImageUrl(id, imageUrl) {
  const isPg = isPostgres();

  if (isPg) {
    const db = getSqlClient();
    const result = await db`
      UPDATE vertical_images
      SET image_url = ${imageUrl}, updated_at = NOW()
      WHERE id = ${id}
      RETURNING *
    `;
    return result.rows?.[0] || result[0];
  } else {
    const db = getSqliteDbWritable();
    const stmt = db.prepare(`
      UPDATE vertical_images
      SET image_url = ?, updated_at = datetime('now')
      WHERE id = ?
    `);
    const info = stmt.run(imageUrl, id);

    if (info.changes === 0) {
      throw new Error("No se encontró la imagen vertical");
    }

    const getStmt = db.prepare("SELECT * FROM vertical_images WHERE id = ?");
    return getStmt.get(id);
  }
}

export async function POST(request) {
  try {
    // Check authentication
    if (!checkAuth(request)) {
      return NextResponse.json(
        { error: "Unauthorized" },
        {
          status: 401,
          headers: {
            'WWW-Authenticate': 'Basic realm="Admin Area"'
          }
        }
      );
    }

    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { error: "ID es requerido" },
        { status: 400 }
      );
    }

    // Get current vertical image record
    const verticalImage = await getVerticalImageById(id);

    if (!verticalImage) {
      return NextResponse.json(
        { error: "Imagen vertical no encontrada" },
        { status: 404 }
      );
    }

    console.log(`[REGENERATE] Starting regeneration for ${verticalImage.entity_type} ${verticalImage.entity_id}: ${verticalImage.entity_name}`);

    // Build complete prompt
    const fullPrompt = verticalImage.custom_prompt
      ? `${verticalImage.base_prompt}\n\n${verticalImage.custom_prompt}`
      : verticalImage.base_prompt;

    // Generate new image
    const newImageUrl = await generateVerticalImage(
      fullPrompt,
      verticalImage.entity_slug,
      verticalImage.entity_type,
      {
        name: verticalImage.entity_name,
      }
    );

    console.log(`[REGENERATE] New image generated: ${newImageUrl}`);

    // Delete old image from blob storage
    if (verticalImage.image_url) {
      await deleteOldImage(verticalImage.image_url);
    }

    // Update database with new image URL
    const updated = await updateVerticalImageUrl(id, newImageUrl);

    console.log(`[REGENERATE] ✓ Regeneration complete`);

    return NextResponse.json({
      success: true,
      message: "Imagen regenerada exitosamente",
      data: updated
    });

  } catch (error) {
    console.error("Error regenerating image:", error);
    return NextResponse.json(
      {
        error: error.message || "Failed to regenerate image",
        details: error.toString()
      },
      { status: 500 }
    );
  }
}
