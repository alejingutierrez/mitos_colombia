import { NextResponse } from "next/server";
import OpenAI from "openai";
import { put } from "@vercel/blob";
import { isPostgres, getSqlClient, getSqliteDbWritable } from "../../../../../lib/db.js";

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
  myth: "Ilustración vertical cinematográfica (9:16) de alta calidad artística para uso editorial. Estilo místico y atmosférico con iluminación dramática. Paleta de colores rica y vibrante inspirada en la naturaleza colombiana. Composición vertical que funciona perfectamente para formato de historia o reel. NO incluir texto, desnudez ni violencia gráfica.",
  community: "Ilustración vertical (9:16) que representa la cultura y tradiciones de una comunidad indígena colombiana. Elementos culturales auténticos, vestimenta tradicional, y conexión con la naturaleza. Estilo artístico respetuoso y educativo. Composición vertical para formato editorial.",
  category: "Ilustración vertical conceptual (9:16) que representa una categoría temática de mitología colombiana. Estilo artístico simbólico y místico. Composición vertical con elementos icónicos y memorables.",
  region: "Paisaje vertical (9:16) que captura la esencia y biodiversidad de una región colombiana. Elementos naturales característicos, flora y fauna endémica. Estilo fotorrealista con toques artísticos. Composición vertical dramática."
};

// Generate vertical image
async function generateVerticalImage(prompt, slug, entityType, isRetry = false) {
  try {
    console.log(`[IMG-VERTICAL-SINGLE] Generating image for ${entityType}:${slug}`);

    const enhancedPrompt = `CONTEXTO CULTURAL: Ilustración vertical (9:16) educativa de mitología colombiana con valor histórico y antropológico.

${prompt}

ESPECIFICACIONES:
- Formato: Vertical 9:16 para Stories/Reels
- Calidad: Alta resolución
- Estilo: Artístico, cinematográfico
- Apropiado para audiencia general`;

    const response = await openai.images.generate({
      model: "gpt-image-1-mini",
      prompt: enhancedPrompt,
      moderation: "low",
      n: 1,
      size: "1024x1536",
      quality: "high",
    });

    const b64Data = response.data?.[0]?.b64_json;

    if (!b64Data) {
      const imageUrl = response.data?.[0]?.url;
      if (imageUrl) {
        const imageResponse = await fetch(imageUrl);
        const arrayBuffer = await imageResponse.arrayBuffer();
        const imageBuffer = Buffer.from(arrayBuffer);

        const filename = `vertical/${entityType}/${slug}-${Date.now()}.png`;
        const blob = await put(filename, imageBuffer, {
          access: 'public',
          contentType: 'image/png',
        });
        return blob.url;
      }
      throw new Error("No image data received");
    }

    const imageBuffer = Buffer.from(b64Data, 'base64');
    const filename = `vertical/${entityType}/${slug}-${Date.now()}.png`;
    const blob = await put(filename, imageBuffer, {
      access: 'public',
      contentType: 'image/png',
    });

    return blob.url;

  } catch (error) {
    console.error("[IMG-VERTICAL-SINGLE] Error:", error);
    if (isSafetyViolation(error) && !isRetry) {
      try {
        console.log("[IMG-VERTICAL-SINGLE] Safety violation detected. Rewriting prompt...");
        const safePrompt = await rewritePromptSafely(prompt);
        return await generateVerticalImage(safePrompt, slug, entityType, true);
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
    const { entityType, entityId, entityName, entitySlug, customPrompt } = body;

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
    const imageUrl = await generateVerticalImage(fullPrompt, entitySlug, entityType);
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
