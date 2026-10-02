import { NextResponse } from "next/server";
import { updateTarotCardPrompt } from "../../../../../lib/tarot";

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
    const { cardId, customPrompt } = body;

    if (!cardId) {
      return NextResponse.json(
        { error: "cardId es requerido" },
        { status: 400 }
      );
    }

    const updated = await updateTarotCardPrompt(cardId, customPrompt || "");

    if (!updated) {
      return NextResponse.json(
        { error: "Carta no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Prompt actualizado",
      data: updated,
    });
  } catch (error) {
    console.error("[TAROT] Error updating prompt:", error);
    return NextResponse.json(
      { error: error.message || "Error al guardar el prompt" },
      { status: 500 }
    );
  }
}
