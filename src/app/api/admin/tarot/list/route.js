import { NextResponse } from "next/server";
import { listTarotCards } from "../../../../../lib/tarot";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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

export async function GET(request) {
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

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "24", 10);
    const arcana = searchParams.get("arcana") || "";
    const suit = searchParams.get("suit") || "";
    const status = searchParams.get("status") || "";

    const data = await listTarotCards({
      page,
      limit,
      arcana: arcana || null,
      suit: suit || null,
      status: status || null,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("[TAROT] Error listing cards:", error);
    return NextResponse.json(
      { error: error.message || "Error al cargar cartas" },
      { status: 500 }
    );
  }
}
