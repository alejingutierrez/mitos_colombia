import { NextResponse } from "next/server";
import { isPostgres, getSqlClient, getSqliteDbWritable } from "../../../../../lib/db.js";

export const runtime = "nodejs";

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

    const body = await request.json();
    const { entityType, entityId, prompt } = body;

    if (!entityType || !entityId) {
      return NextResponse.json(
        { error: "entityType y entityId son requeridos" },
        { status: 400 }
      );
    }

    const tableName = resolveTable(entityType);
    if (!tableName) {
      return NextResponse.json(
        { error: "Tipo de entidad inválido" },
        { status: 400 }
      );
    }

    if (isPostgres()) {
      const db = getSqlClient();
      let result;

      if (entityType === "myth") {
        result = await db`
          UPDATE myths
          SET image_prompt = ${prompt}, updated_at = NOW()
          WHERE id = ${entityId}
          RETURNING id, title as name, slug, image_prompt
        `;
      } else if (entityType === "community") {
        result = await db`
          UPDATE communities
          SET image_prompt = ${prompt}
          WHERE id = ${entityId}
          RETURNING id, name, slug, image_prompt
        `;
      } else if (entityType === "category") {
        result = await db`
          UPDATE tags
          SET image_prompt = ${prompt}
          WHERE id = ${entityId}
          RETURNING id, name, slug, image_prompt
        `;
      } else if (entityType === "region") {
        result = await db`
          UPDATE regions
          SET image_prompt = ${prompt}
          WHERE id = ${entityId}
          RETURNING id, name, slug, image_prompt
        `;
      }

      if (!result || (result.rows || result).length === 0) {
        return NextResponse.json(
          { error: "Entidad no encontrada" },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Prompt actualizado exitosamente",
        data: (result.rows || result)[0],
      });
    }

    const db = getSqliteDbWritable();
    const updates =
      entityType === "myth"
        ? "image_prompt = ?, updated_at = datetime('now')"
        : "image_prompt = ?";

    const stmt = db.prepare(`
      UPDATE ${tableName}
      SET ${updates}
      WHERE id = ?
    `);

    const info =
      entityType === "myth"
        ? stmt.run(prompt, entityId)
        : stmt.run(prompt, entityId);

    if (info.changes === 0) {
      return NextResponse.json(
        { error: "Entidad no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Prompt actualizado exitosamente",
    });
  } catch (error) {
    console.error("[CURACION] Error updating prompt:", error);
    return NextResponse.json(
      { error: error.message || "No se pudo actualizar el prompt" },
      { status: 500 }
    );
  }
}
