import { NextResponse } from "next/server";
import { isPostgres, getSqlClient, getSqliteDbWritable } from "../../../../../lib/db.js";

export const runtime = "nodejs";

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
    const { id, basePrompt, customPrompt } = body;

    if (!id) {
      return NextResponse.json(
        { error: "ID es requerido" },
        { status: 400 }
      );
    }

    const isPg = isPostgres();

    if (isPg) {
      const db = getSqlClient();

      const updates = {};
      if (basePrompt !== undefined) updates.base_prompt = basePrompt;
      if (customPrompt !== undefined) updates.custom_prompt = customPrompt;

      if (Object.keys(updates).length === 0) {
        return NextResponse.json(
          { error: "No hay cambios para actualizar" },
          { status: 400 }
        );
      }

      // Build dynamic update query
      const setClause = Object.keys(updates).map(key => `${key} = $${Object.keys(updates).indexOf(key) + 2}`).join(', ');
      const values = [id, ...Object.values(updates)];

      const result = await db.query(
        `UPDATE vertical_images
         SET ${setClause}, updated_at = NOW()
         WHERE id = $1
         RETURNING *`,
        values
      );

      if (!result.rows || result.rows.length === 0) {
        return NextResponse.json(
          { error: "Imagen vertical no encontrada" },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Prompt actualizado exitosamente",
        data: result.rows[0]
      });

    } else {
      const db = getSqliteDbWritable();

      const updates = [];
      const values = [];

      if (basePrompt !== undefined) {
        updates.push("base_prompt = ?");
        values.push(basePrompt);
      }

      if (customPrompt !== undefined) {
        updates.push("custom_prompt = ?");
        values.push(customPrompt);
      }

      if (updates.length === 0) {
        return NextResponse.json(
          { error: "No hay cambios para actualizar" },
          { status: 400 }
        );
      }

      updates.push("updated_at = datetime('now')");
      values.push(id);

      const stmt = db.prepare(`
        UPDATE vertical_images
        SET ${updates.join(', ')}
        WHERE id = ?
      `);

      const info = stmt.run(...values);

      if (info.changes === 0) {
        return NextResponse.json(
          { error: "Imagen vertical no encontrada" },
          { status: 404 }
        );
      }

      // Get updated record
      const getStmt = db.prepare("SELECT * FROM vertical_images WHERE id = ?");
      const updated = getStmt.get(id);

      return NextResponse.json({
        success: true,
        message: "Prompt actualizado exitosamente",
        data: updated
      });
    }

  } catch (error) {
    console.error("Error updating prompt:", error);
    return NextResponse.json(
      {
        error: error.message || "Failed to update prompt",
        details: error.toString()
      },
      { status: 500 }
    );
  }
}
