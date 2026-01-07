import { NextResponse } from "next/server";
import OpenAI from "openai";
import { isPostgres, getSqlClient, getSqliteDb, getSqliteDbWritable } from "../../../../lib/db.js";

export const runtime = "nodejs";
export const maxDuration = 300; // 5 minutes max for image generation

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Basic auth middleware
function checkAuth(request) {
  const authHeader = request.headers.get("authorization");

  console.log("[AUTH] Checking authentication...");
  console.log("[AUTH] Has auth header:", !!authHeader);
  console.log("[AUTH] Expected username:", process.env.ADMIN_USERNAME || "admin");
  console.log("[AUTH] Has password env:", !!process.env.ADMIN_PASSWORD);

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    console.log("[AUTH] Missing or invalid auth header");
    return false;
  }

  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString("utf-8");
  const [username, password] = credentials.split(":");

  console.log("[AUTH] Received username:", username);

  const validUsername = process.env.ADMIN_USERNAME || "admin";
  const validPassword = process.env.ADMIN_PASSWORD || "admin";

  const isValid = username === validUsername && password === validPassword;
  console.log("[AUTH] Auth result:", isValid);

  return isValid;
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

  if (isPg) {
    const db = getSqlClient();
    await db`
      UPDATE myths
      SET image_url = ${imageUrl}, updated_at = NOW()
      WHERE id = ${mythId}
    `;
  } else {
    const db = getSqliteDbWritable();
    const stmt = db.prepare(`
      UPDATE myths
      SET image_url = ?, updated_at = datetime('now')
      WHERE id = ?
    `);
    stmt.run(imageUrl, mythId);
  }
}

// Generate image using OpenAI GPT Image
async function generateImage(prompt) {
  try {
    const response = await openai.images.generate({
      model: "gpt-image-1-mini",
      prompt: prompt,
      n: 1,
      size: "1536x1024", // Landscape format
      quality: "high",
    });

    return response.data[0].url;
  } catch (error) {
    console.error("Error generating image:", error);
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
        console.log(`Generating image for: ${myth.title}`);

        const imageUrl = await generateImage(myth.image_prompt);
        await updateMythImage(myth.id, imageUrl);

        results.push({
          id: myth.id,
          title: myth.title,
          slug: myth.slug,
          imageUrl: imageUrl,
          success: true,
        });

        console.log(`✓ Image generated for: ${myth.title}`);
      } catch (error) {
        console.error(`✗ Failed to generate image for ${myth.title}:`, error);
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
