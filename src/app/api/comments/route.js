import { NextResponse } from "next/server";
import { addComment, getComments } from "../../../lib/comments";

export const runtime = "nodejs";

export async function GET(request) {
  try {
    const mythIdParam = request.nextUrl.searchParams.get("mythId");
    if (!mythIdParam) {
      return NextResponse.json(
        { error: "mythId es requerido" },
        { status: 400 }
      );
    }

    const mythId = Number.parseInt(mythIdParam, 10);
    if (!Number.isFinite(mythId)) {
      return NextResponse.json(
        { error: "mythId inválido" },
        { status: 400 }
      );
    }

    const comments = await getComments(mythId);
    const response = NextResponse.json({ comments });
    response.headers.set(
      "Cache-Control",
      "public, s-maxage=300, stale-while-revalidate=300"
    );
    return response;
  } catch (error) {
    console.error("Error getting comments:", error);
    return NextResponse.json(
      { error: "Error al cargar los comentarios" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { mythId, authorName, authorEmail, content } = body;

    // Validations
    if (!mythId || !authorName || !authorEmail || !content) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    if (authorName.trim().length < 2) {
      return NextResponse.json(
        { error: "El nombre debe tener al menos 2 caracteres" },
        { status: 400 }
      );
    }

    if (!authorEmail.includes("@")) {
      return NextResponse.json(
        { error: "El email no es válido" },
        { status: 400 }
      );
    }

    if (content.trim().length < 10) {
      return NextResponse.json(
        { error: "El comentario debe tener al menos 10 caracteres" },
        { status: 400 }
      );
    }

    const result = await addComment({
      mythId: parseInt(mythId),
      authorName: authorName.trim(),
      authorEmail: authorEmail.trim().toLowerCase(),
      content: content.trim(),
    });

    return NextResponse.json({
      success: true,
      message: "Comentario enviado. Será publicado después de ser revisado.",
      id: result.id,
    });

  } catch (error) {
    console.error("Error adding comment:", error);
    return NextResponse.json(
      { error: "Error al guardar el comentario" },
      { status: 500 }
    );
  }
}
