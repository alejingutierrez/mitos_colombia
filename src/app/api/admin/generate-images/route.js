import { NextResponse } from "next/server";
import OpenAI from "openai";
import { put } from "@vercel/blob";
import { isPostgres, getSqlClient, getSqliteDb, getSqliteDbWritable } from "../../../../lib/db.js";

export const runtime = "nodejs";
export const maxDuration = 300; // 5 minutes max for image generation

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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

// Get items without images (from all tables)
async function getItemsWithoutImages(limit = 10) {
  const isPg = isPostgres();
  const items = [];

  if (isPg) {
    const db = getSqlClient();

    // Get myths
    const myths = await db`
      SELECT id, title as name, slug, image_prompt, 'myth' as type
      FROM myths
      WHERE image_url IS NULL AND image_prompt IS NOT NULL
      ORDER BY id
      LIMIT ${Math.ceil(limit * 0.7)}
    `;
    items.push(...(myths.rows || myths));

    // Get communities
    const communities = await db`
      SELECT id, name, slug, image_prompt, 'community' as type
      FROM communities
      WHERE image_url IS NULL AND image_prompt IS NOT NULL
      ORDER BY id
      LIMIT ${Math.ceil(limit * 0.15)}
    `;
    items.push(...(communities.rows || communities));

    // Get categories (tags)
    const categories = await db`
      SELECT id, name, slug, image_prompt, 'category' as type
      FROM tags
      WHERE image_url IS NULL AND image_prompt IS NOT NULL
      ORDER BY id
      LIMIT ${Math.ceil(limit * 0.1)}
    `;
    items.push(...(categories.rows || categories));

    // Get regions
    const regions = await db`
      SELECT id, name, slug, image_prompt, 'region' as type
      FROM regions
      WHERE image_url IS NULL AND image_prompt IS NOT NULL
      ORDER BY id
      LIMIT ${Math.ceil(limit * 0.05)}
    `;
    items.push(...(regions.rows || regions));

  } else {
    const db = getSqliteDb();

    // Get myths
    const mythsStmt = db.prepare(`
      SELECT id, title as name, slug, image_prompt, 'myth' as type
      FROM myths
      WHERE image_url IS NULL AND image_prompt IS NOT NULL
      ORDER BY id
      LIMIT ?
    `);
    items.push(...mythsStmt.all(Math.ceil(limit * 0.7)));

    // Get communities
    const communitiesStmt = db.prepare(`
      SELECT id, name, slug, image_prompt, 'community' as type
      FROM communities
      WHERE image_url IS NULL AND image_prompt IS NOT NULL
      ORDER BY id
      LIMIT ?
    `);
    items.push(...communitiesStmt.all(Math.ceil(limit * 0.15)));

    // Get categories
    const categoriesStmt = db.prepare(`
      SELECT id, name, slug, image_prompt, 'category' as type
      FROM tags
      WHERE image_url IS NULL AND image_prompt IS NOT NULL
      ORDER BY id
      LIMIT ?
    `);
    items.push(...categoriesStmt.all(Math.ceil(limit * 0.1)));

    // Get regions
    const regionsStmt = db.prepare(`
      SELECT id, name, slug, image_prompt, 'region' as type
      FROM regions
      WHERE image_url IS NULL AND image_prompt IS NOT NULL
      ORDER BY id
      LIMIT ?
    `);
    items.push(...regionsStmt.all(Math.ceil(limit * 0.05)));
  }

  return items.slice(0, limit);
}

// Legacy function for backwards compatibility
async function getMythsWithoutImages(limit = 10) {
  const items = await getItemsWithoutImages(limit);
  return items.filter(item => item.type === 'myth');
}

// Update item with image URL (universal function for all tables)
async function updateItemImage(id, imageUrl, type) {
  const isPg = isPostgres();
  const tableName = type === 'myth' ? 'myths' :
                    type === 'community' ? 'communities' :
                    type === 'category' ? 'tags' :
                    type === 'region' ? 'regions' : null;

  if (!tableName) {
    throw new Error(`Invalid type: ${type}`);
  }

  console.log(`[UPDATE] Attempting to update ${type} ${id} with image URL`);
  console.log(`[UPDATE] Using Postgres: ${isPg}`);
  console.log(`[UPDATE] Image URL length: ${imageUrl?.length}`);

  try {
    if (isPg) {
      const db = getSqlClient();
      let result;

      if (type === 'myth') {
        result = await db`
          UPDATE myths
          SET image_url = ${imageUrl}, updated_at = NOW()
          WHERE id = ${id}
          RETURNING id, title as name, image_url
        `;
      } else if (type === 'community') {
        result = await db`
          UPDATE communities
          SET image_url = ${imageUrl}
          WHERE id = ${id}
          RETURNING id, name, image_url
        `;
      } else if (type === 'category') {
        result = await db`
          UPDATE tags
          SET image_url = ${imageUrl}
          WHERE id = ${id}
          RETURNING id, name, image_url
        `;
      } else if (type === 'region') {
        result = await db`
          UPDATE regions
          SET image_url = ${imageUrl}
          WHERE id = ${id}
          RETURNING id, name, image_url
        `;
      }

      console.log(`[UPDATE] Postgres update result:`, result);

      if (!result || result.length === 0) {
        throw new Error(`No ${type} found with id ${id}`);
      }

      return result[0];
    } else {
      const db = getSqliteDbWritable();
      let stmt;

      if (type === 'myth') {
        stmt = db.prepare(`
          UPDATE myths
          SET image_url = ?, updated_at = datetime('now')
          WHERE id = ?
        `);
      } else {
        stmt = db.prepare(`
          UPDATE ${tableName}
          SET image_url = ?
          WHERE id = ?
        `);
      }

      const info = stmt.run(imageUrl, id);
      console.log(`[UPDATE] SQLite update result:`, info);

      if (info.changes === 0) {
        throw new Error(`No ${type} found with id ${id}`);
      }

      return { id, changes: info.changes };
    }
  } catch (error) {
    console.error(`[UPDATE] Error updating ${type} ${id}:`, error);
    throw error;
  }
}

// Legacy function for backwards compatibility
async function updateMythImage(mythId, imageUrl) {
  return updateItemImage(mythId, imageUrl, 'myth');
}

// Rewrite prompt using GPT to make it safer
async function rewritePromptSafely(originalPrompt) {
  console.log(`[REWRITE] Using GPT to rewrite prompt safely...`);

  const rewriteResponse = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "Eres un experto en reescribir prompts para generación de imágenes. Tu trabajo es tomar un prompt de un mito indígena colombiano y reescribirlo para que sea apropiado y seguro, eliminando cualquier referencia a desnudez, contenido sexual, violencia gráfica o elementos que puedan ser rechazados por sistemas de moderación. Mantén el espíritu cultural y educativo del mito, pero hazlo completamente apropiado para un contexto museístico/educativo familiar."
      },
      {
        role: "user",
        content: `Reescribe este prompt de manera segura, apropiada y educativa, manteniendo el contexto cultural pero eliminando cualquier elemento potencialmente problemático:\n\n${originalPrompt}`
      }
    ],
    temperature: 0.3,
  });

  const rewrittenPrompt = rewriteResponse.choices[0].message.content;
  console.log(`[REWRITE] Original length: ${originalPrompt.length}, Rewritten length: ${rewrittenPrompt.length}`);
  console.log(`[REWRITE] Rewritten prompt preview: ${rewrittenPrompt.substring(0, 200)}...`);

  return rewrittenPrompt;
}

// Generate image using OpenAI GPT Image and upload to Vercel Blob
async function generateImage(prompt, mythSlug, isRetry = false) {
  try {
    console.log(`[IMG] Generating image with OpenAI for ${mythSlug}... (Retry: ${isRetry})`);

    // Add cultural context disclaimer to the prompt
    const enhancedPrompt = `CONTEXTO CULTURAL: Esta es una ilustración educativa de un mito indígena colombiano con valor histórico y antropológico, destinada a un archivo cultural público. Representación artística apropiada para contenido educativo y museístico. NO incluir desnudez, contenido sexual ni violencia gráfica.

${prompt}`;

    console.log(`[IMG] Enhanced prompt length: ${enhancedPrompt.length} characters`);

    // Step 1: Generate image with OpenAI
    const response = await openai.images.generate({
      model: "gpt-image-1-mini",
      prompt: enhancedPrompt,
      moderation: "low", // Less restrictive filtering for cultural/educational content
      n: 1,
      size: "1536x1024", // Landscape format
      quality: "high",
    });

    console.log(`[IMG] OpenAI response received`);
    console.log(`[IMG] Response keys:`, Object.keys(response.data?.[0] || {}));

    // Step 2: Extract base64 data (gpt-image-1-mini returns b64_json by default)
    const b64Data = response.data?.[0]?.b64_json;

    if (!b64Data) {
      // Fallback: check if URL is provided instead
      const imageUrl = response.data?.[0]?.url;
      if (imageUrl) {
        console.log(`[IMG] URL received instead of base64, downloading...`);
        const imageResponse = await fetch(imageUrl);
        if (!imageResponse.ok) {
          throw new Error(`Failed to fetch image: ${imageResponse.status}`);
        }
        const arrayBuffer = await imageResponse.arrayBuffer();
        const imageBuffer = Buffer.from(arrayBuffer);
        console.log(`[IMG] Image downloaded, size: ${imageBuffer.length} bytes`);

        const filename = `mitos/${mythSlug}-${Date.now()}.png`;
        console.log(`[IMG] Uploading to Vercel Blob as ${filename}...`);
        const blob = await put(filename, imageBuffer, {
          access: 'public',
          contentType: 'image/png',
        });
        console.log(`[IMG] Upload successful! Permanent URL: ${blob.url}`);
        return blob.url;
      }
      throw new Error("No base64 data or URL received from OpenAI");
    }

    console.log(`[IMG] Base64 data received, length: ${b64Data.length} characters`);

    // Step 3: Convert base64 to buffer
    const imageBuffer = Buffer.from(b64Data, 'base64');
    console.log(`[IMG] Image decoded, size: ${imageBuffer.length} bytes`);

    // Step 4: Upload to Vercel Blob Storage
    const filename = `mitos/${mythSlug}-${Date.now()}.png`;
    console.log(`[IMG] Uploading to Vercel Blob as ${filename}...`);

    const blob = await put(filename, imageBuffer, {
      access: 'public',
      contentType: 'image/png',
    });

    console.log(`[IMG] Upload successful! Permanent URL: ${blob.url}`);
    return blob.url;

  } catch (error) {
    console.error("[IMG] Error in generateImage:", error);
    console.error("[IMG] Error details:", error.message);

    // Check if it's a safety violation error and we haven't retried yet
    const isSafetyViolation = error.message?.includes('safety') ||
                              error.message?.includes('rejected by the safety system') ||
                              error.code === 'content_policy_violation';

    if (isSafetyViolation && !isRetry) {
      console.log("[IMG] ⚠️ Safety violation detected. Attempting fallback with GPT rewrite...");

      try {
        // Use GPT to rewrite the prompt safely
        const safePrompt = await rewritePromptSafely(prompt);

        // Retry with the rewritten prompt
        console.log("[IMG] 🔄 Retrying image generation with rewritten prompt...");
        return await generateImage(safePrompt, mythSlug, true);

      } catch (rewriteError) {
        console.error("[IMG] ❌ Fallback also failed:", rewriteError.message);
        throw new Error(`Safety violation: Original attempt failed, retry with GPT-rewritten prompt also failed. ${rewriteError.message}`);
      }
    }

    if (error.stack) {
      console.error("[IMG] Error stack:", error.stack);
    }
    throw error;
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
    const count = Math.min(Math.max(1, body.count || 1), 50); // Limit between 1 and 50

    // Get items without images (myths, communities, categories, regions)
    const items = await getItemsWithoutImages(count);

    if (items.length === 0) {
      return NextResponse.json({
        success: true,
        message: "No hay elementos sin imágenes",
        generated: [],
      });
    }

    const results = [];

    // Generate images for each item
    for (const item of items) {
      try {
        const typeLabel = item.type === 'myth' ? 'mito' :
                         item.type === 'community' ? 'comunidad' :
                         item.type === 'category' ? 'categoría' :
                         item.type === 'region' ? 'región' : item.type;

        console.log(`[GEN] Starting generation for ${typeLabel} ${item.id}: ${item.name}`);
        console.log(`[GEN] Using prompt: ${item.image_prompt?.substring(0, 100)}...`);

        const imageUrl = await generateImage(item.image_prompt, item.slug);
        console.log(`[GEN] Image generated successfully, URL: ${imageUrl?.substring(0, 50)}...`);

        const updateResult = await updateItemImage(item.id, imageUrl, item.type);
        console.log(`[GEN] Database updated successfully:`, updateResult);

        results.push({
          id: item.id,
          title: item.name,
          slug: item.slug,
          type: item.type,
          typeLabel,
          imageUrl: imageUrl,
          success: true,
        });

        console.log(`[GEN] ✓ Complete for ${typeLabel}: ${item.name}`);
      } catch (error) {
        console.error(`[GEN] ✗ Failed for ${item.name}:`, error);
        console.error(`[GEN] Error stack:`, error.stack);
        results.push({
          id: item.id,
          title: item.name,
          slug: item.slug,
          type: item.type,
          error: error.message,
          success: false,
        });
      }
    }

    const successCount = results.filter(r => r.success).length;
    const typeBreakdown = results.reduce((acc, r) => {
      if (r.success) {
        acc[r.type] = (acc[r.type] || 0) + 1;
      }
      return acc;
    }, {});

    return NextResponse.json({
      success: true,
      message: `Generadas ${successCount} de ${count} imágenes solicitadas`,
      breakdown: typeBreakdown,
      generated: results,
      total: items.length,
    });

  } catch (error) {
    console.error("Error in generate-images API:", error);
    return NextResponse.json(
      {
        error: error.message || "Failed to generate images",
        details: error.toString()
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
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

    // Get count of all items without images
    const isPg = isPostgres();
    let counts;

    if (isPg) {
      const db = getSqlClient();
      const result = await db`
        SELECT
          (SELECT COUNT(*) FROM myths WHERE image_url IS NULL AND image_prompt IS NOT NULL) as myths,
          (SELECT COUNT(*) FROM communities WHERE image_url IS NULL AND image_prompt IS NOT NULL) as communities,
          (SELECT COUNT(*) FROM tags WHERE image_url IS NULL AND image_prompt IS NOT NULL) as categories,
          (SELECT COUNT(*) FROM regions WHERE image_url IS NULL AND image_prompt IS NOT NULL) as regions
      `;
      const row = result.rows?.[0] || result[0];
      counts = {
        myths: parseInt(row.myths || 0),
        communities: parseInt(row.communities || 0),
        categories: parseInt(row.categories || 0),
        regions: parseInt(row.regions || 0),
      };
    } else {
      const db = getSqliteDb();
      const mythsCount = db.prepare('SELECT COUNT(*) as count FROM myths WHERE image_url IS NULL AND image_prompt IS NOT NULL').get().count;
      const communitiesCount = db.prepare('SELECT COUNT(*) as count FROM communities WHERE image_url IS NULL AND image_prompt IS NOT NULL').get().count;
      const categoriesCount = db.prepare('SELECT COUNT(*) as count FROM tags WHERE image_url IS NULL AND image_prompt IS NOT NULL').get().count;
      const regionsCount = db.prepare('SELECT COUNT(*) as count FROM regions WHERE image_url IS NULL AND image_prompt IS NOT NULL').get().count;
      counts = {
        myths: mythsCount,
        communities: communitiesCount,
        categories: categoriesCount,
        regions: regionsCount,
      };
    }

    const total = counts.myths + counts.communities + counts.categories + counts.regions;

    return NextResponse.json({
      mythsWithoutImages: counts.myths, // Keep for backwards compatibility
      total,
      breakdown: counts,
    });

  } catch (error) {
    console.error("Error getting images count:", error);
    return NextResponse.json(
      { error: error.message || "Failed to get count" },
      { status: 500 }
    );
  }
}
