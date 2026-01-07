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

// Get myths without images
async function getMythsWithoutImages(limit = 10) {
  const isPg = isPostgres();

  if (isPg) {
    const db = getSqlClient();
    const result = await db`
      SELECT id, title, slug, image_prompt
      FROM myths
      WHERE image_url IS NULL AND image_prompt IS NOT NULL
      ORDER BY id
      LIMIT ${limit}
    `;
    return result.rows || result;
  } else {
    const db = getSqliteDb();
    const stmt = db.prepare(`
      SELECT id, title, slug, image_prompt
      FROM myths
      WHERE image_url IS NULL AND image_prompt IS NOT NULL
      ORDER BY id
      LIMIT ?
    `);
    return stmt.all(limit);
  }
}

// Update myth with image URL
async function updateMythImage(mythId, imageUrl) {
  const isPg = isPostgres();

  console.log(`[UPDATE] Attempting to update myth ${mythId} with image URL`);
  console.log(`[UPDATE] Using Postgres: ${isPg}`);
  console.log(`[UPDATE] Image URL length: ${imageUrl?.length}`);

  try {
    if (isPg) {
      const db = getSqlClient();
      const result = await db`
        UPDATE myths
        SET image_url = ${imageUrl}, updated_at = NOW()
        WHERE id = ${mythId}
        RETURNING id, title, image_url
      `;
      console.log(`[UPDATE] Postgres update result:`, result);

      if (!result || result.length === 0) {
        throw new Error(`No myth found with id ${mythId}`);
      }

      return result[0];
    } else {
      const db = getSqliteDbWritable();
      const stmt = db.prepare(`
        UPDATE myths
        SET image_url = ?, updated_at = datetime('now')
        WHERE id = ?
      `);
      const info = stmt.run(imageUrl, mythId);
      console.log(`[UPDATE] SQLite update result:`, info);

      if (info.changes === 0) {
        throw new Error(`No myth found with id ${mythId}`);
      }

      return { id: mythId, changes: info.changes };
    }
  } catch (error) {
    console.error(`[UPDATE] Error updating myth ${mythId}:`, error);
    throw error;
  }
}

// Generate image using OpenAI GPT Image and upload to Vercel Blob
async function generateImage(prompt, mythSlug) {
  try {
    console.log(`[IMG] Generating image with OpenAI for ${mythSlug}...`);

    // Step 1: Generate image with OpenAI
    const response = await openai.images.generate({
      model: "gpt-image-1-mini",
      prompt: prompt,
      n: 1,
      size: "1536x1024", // Landscape format
      quality: "high",
    });

    const temporaryUrl = response.data[0].url;
    console.log(`[IMG] Temporary URL received from OpenAI`);

    // Step 2: Download the image from OpenAI's temporary URL
    console.log(`[IMG] Downloading image from temporary URL...`);
    const imageResponse = await fetch(temporaryUrl);

    if (!imageResponse.ok) {
      throw new Error(`Failed to download image: ${imageResponse.statusText}`);
    }

    // Convert to ArrayBuffer then to Buffer (Node.js compatible)
    const arrayBuffer = await imageResponse.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    console.log(`[IMG] Image downloaded, size: ${buffer.length} bytes`);

    // Step 3: Upload to Vercel Blob Storage
    const filename = `mitos/${mythSlug}-${Date.now()}.png`;
    console.log(`[IMG] Uploading to Vercel Blob as ${filename}...`);

    const blob = await put(filename, buffer, {
      access: 'public',
      contentType: 'image/png',
    });

    console.log(`[IMG] Upload successful! Permanent URL: ${blob.url}`);
    return blob.url;

  } catch (error) {
    console.error("[IMG] Error in generateImage:", error);
    console.error("[IMG] Error stack:", error.stack);
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

    // Get myths without images
    const myths = await getMythsWithoutImages(count);

    if (myths.length === 0) {
      return NextResponse.json({
        success: true,
        message: "No hay mitos sin imágenes",
        generated: [],
      });
    }

    const results = [];

    // Generate images for each myth
    for (const myth of myths) {
      try {
        console.log(`[GEN] Starting generation for myth ${myth.id}: ${myth.title}`);
        console.log(`[GEN] Using prompt: ${myth.image_prompt?.substring(0, 100)}...`);

        const imageUrl = await generateImage(myth.image_prompt, myth.slug);
        console.log(`[GEN] Image generated successfully, URL: ${imageUrl?.substring(0, 50)}...`);

        const updateResult = await updateMythImage(myth.id, imageUrl);
        console.log(`[GEN] Database updated successfully:`, updateResult);

        results.push({
          id: myth.id,
          title: myth.title,
          slug: myth.slug,
          imageUrl: imageUrl,
          success: true,
        });

        console.log(`[GEN] ✓ Complete for: ${myth.title}`);
      } catch (error) {
        console.error(`[GEN] ✗ Failed for ${myth.title}:`, error);
        console.error(`[GEN] Error stack:`, error.stack);
        results.push({
          id: myth.id,
          title: myth.title,
          slug: myth.slug,
          error: error.message,
          success: false,
        });
      }
    }

    const successCount = results.filter(r => r.success).length;

    return NextResponse.json({
      success: true,
      message: `Generadas ${successCount} de ${count} imágenes solicitadas`,
      generated: results,
      total: myths.length,
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

    // Get count of myths without images
    const isPg = isPostgres();
    let count;

    if (isPg) {
      const db = getSqlClient();
      const result = await db`
        SELECT COUNT(*) as count
        FROM myths
        WHERE image_url IS NULL AND image_prompt IS NOT NULL
      `;
      count = parseInt(result.rows?.[0]?.count || result[0]?.count || 0);
    } else {
      const db = getSqliteDb();
      const stmt = db.prepare(`
        SELECT COUNT(*) as count
        FROM myths
        WHERE image_url IS NULL AND image_prompt IS NOT NULL
      `);
      count = stmt.get().count;
    }

    return NextResponse.json({
      mythsWithoutImages: count,
    });

  } catch (error) {
    console.error("Error getting myths count:", error);
    return NextResponse.json(
      { error: error.message || "Failed to get count" },
      { status: 500 }
    );
  }
}
