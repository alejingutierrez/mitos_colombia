import { NextResponse } from "next/server";
import {
  getContactStats,
  listContactMessages,
  updateContactStatus,
} from "../../../../lib/contact";

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

function parseStatus(value) {
  if (!value || value === "all") return null;
  return value;
}

export async function GET(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const status = parseStatus(request.nextUrl.searchParams.get("status"));
    const limit = request.nextUrl.searchParams.get("limit");
    const offset = request.nextUrl.searchParams.get("offset");

    const [messages, stats] = await Promise.all([
      listContactMessages({ status, limit, offset }),
      getContactStats(),
    ]);

    return NextResponse.json({ messages, stats });
  } catch (error) {
    console.error("Error loading contact messages:", error);
    return NextResponse.json(
      { error: "No se pudieron cargar los mensajes." },
      { status: 500 }
    );
  }
}

export async function PATCH(request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, status } = body || {};

    const parsedId = Number.parseInt(id, 10);
    if (!Number.isFinite(parsedId)) {
      return NextResponse.json(
        { error: "ID inválido." },
        { status: 400 }
      );
    }

    const updated = await updateContactStatus(parsedId, status);
    return NextResponse.json({ success: true, updated });
  } catch (error) {
    console.error("Error updating contact message:", error);
    return NextResponse.json(
      { error: error.message || "No se pudo actualizar el mensaje." },
      { status: 500 }
    );
  }
}
