import { NextResponse } from "next/server";
import OpenAI from "openai";
import { isPostgres, getSqlClient, getSqliteDb, getSqliteDbWritable } from "../../../../lib/db.js";

export const runtime = "nodejs";
export const maxDuration = 300; // 5 minutes max

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

// Get myths without formatted content
async function getMythsWithoutFormatting(limit = 10) {
  const isPg = isPostgres();

  if (isPg) {
    const db = getSqlClient();
    const result = await db`
      SELECT id, title, slug, content
      FROM myths
      WHERE (content_formatted IS NULL OR content_formatted = FALSE)
      ORDER BY id
      LIMIT ${limit}
    `;
    return result.rows || result;
  } else {
    const db = getSqliteDb();
    const stmt = db.prepare(`
      SELECT id, title, slug, content
      FROM myths
      WHERE (content_formatted IS NULL OR content_formatted = 0)
      ORDER BY id
      LIMIT ?
    `);
    return stmt.all(limit);
  }
}

// Format content using OpenAI
async function formatContentWithAI(content, mythTitle) {
  try {
    console.log(`[FORMAT] Formatting content for: ${mythTitle}`);
    console.log(`[FORMAT] Original content length: ${content.length} characters`);

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `Eres un experto en formato de textos. Tu trabajo es tomar un texto continuo y organizarlo en párrafos legibles, añadiendo saltos de línea (\\n\\n) donde sea apropiado.

REGLAS IMPORTANTES:
1. NO REESCRIBAS el texto, mantén exactamente las mismas palabras
2. NO CAMBIES el contenido, solo organiza en párrafos
3. USA doble salto de línea (\\n\\n) para separar párrafos
4. Identifica cambios de tema, ideas o contexto para crear párrafos
5. Cada párrafo debe tener entre 3-6 oraciones idealmente
6. Mantén la puntuación y ortografía original
7. NO agregues títulos, subtítulos ni formateo adicional
8. Devuelve SOLO el texto organizado en párrafos`
        },
        {
          role: "user",
          content: `Organiza el siguiente texto del mito "${mythTitle}" en párrafos usando saltos de línea dobles (\\n\\n). Mantén exactamente el mismo contenido y palabras, solo organiza en párrafos:\n\n${content}`
        }
      ],
      temperature: 0.1, // Muy baja para evitar creatividad
    });

    const formattedContent = response.choices[0].message.content.trim();
    console.log(`[FORMAT] Formatted content length: ${formattedContent.length} characters`);
    console.log(`[FORMAT] Number of paragraphs: ${formattedContent.split('\\n\\n').length}`);

    return formattedContent;

  } catch (error) {
    console.error("[FORMAT] Error in formatContentWithAI:", error);
    throw error;
  }
}

// Update myth with formatted content
async function updateMythContent(mythId, formattedContent) {
  const isPg = isPostgres();

  console.log(`[UPDATE] Updating myth ${mythId} with formatted content`);
  console.log(`[UPDATE] Using Postgres: ${isPg}`);

  try {
    if (isPg) {
      const db = getSqlClient();
      const result = await db`
        UPDATE myths
        SET content = ${formattedContent},
            content_formatted = TRUE,
            updated_at = NOW()
        WHERE id = ${mythId}
        RETURNING id, title
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
        SET content = ?,
            content_formatted = 1,
            updated_at = datetime('now')
        WHERE id = ?
      `);

      const info = stmt.run(formattedContent, mythId);
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
    const count = Math.min(Math.max(1, body.count || 1), 1); // Force 1 at a time

    // Get myths without formatted content
    const myths = await getMythsWithoutFormatting(count);

    if (myths.length === 0) {
      return NextResponse.json({
        success: true,
        message: "No hay mitos sin formatear",
        formatted: [],
      });
    }

    const results = [];

    // Format content for each myth (only 1 at a time)
    for (const myth of myths) {
      try {
        console.log(`[GEN] Starting formatting for myth ${myth.id}: ${myth.title}`);

        const formattedContent = await formatContentWithAI(myth.content, myth.title);
        console.log(`[GEN] Content formatted successfully`);

        await updateMythContent(myth.id, formattedContent);
        console.log(`[GEN] Database updated successfully`);

        results.push({
          id: myth.id,
          title: myth.title,
          slug: myth.slug,
          originalLength: myth.content.length,
          formattedLength: formattedContent.length,
          paragraphCount: formattedContent.split('\n\n').length,
          success: true,
        });

        console.log(`[GEN] ✓ Complete for myth: ${myth.title}`);
      } catch (error) {
        console.error(`[GEN] ✗ Failed for ${myth.title}:`, error);
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
      message: `Formateados ${successCount} de ${count} mitos`,
      formatted: results,
      total: myths.length,
    });

  } catch (error) {
    console.error("Error in format-content API:", error);
    return NextResponse.json(
      {
        error: error.message || "Failed to format content",
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

    // Get count of myths without formatted content
    const isPg = isPostgres();
    let count;

    if (isPg) {
      const db = getSqlClient();
      const result = await db`
        SELECT COUNT(*) as count
        FROM myths
        WHERE (content_formatted IS NULL OR content_formatted = FALSE)
      `;
      const row = result.rows?.[0] || result[0];
      count = parseInt(row.count || 0);
    } else {
      const db = getSqliteDb();
      const result = db.prepare('SELECT COUNT(*) as count FROM myths WHERE (content_formatted IS NULL OR content_formatted = 0)').get();
      count = result.count;
    }

    return NextResponse.json({
      mythsWithoutFormatting: count,
      total: count,
    });

  } catch (error) {
    console.error("Error getting myths count:", error);
    return NextResponse.json(
      { error: error.message || "Failed to get count" },
      { status: 500 }
    );
  }
}
