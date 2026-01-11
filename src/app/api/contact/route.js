import { NextResponse } from "next/server";
import { addContactMessage } from "../../../lib/contact";

export const runtime = "nodejs";

function isValidEmail(value) {
  return Boolean(value && String(value).includes("@"));
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nombre, email y mensaje son requeridos." },
        { status: 400 }
      );
    }

    const trimmedName = String(name).trim();
    const trimmedEmail = String(email).trim().toLowerCase();
    const trimmedMessage = String(message).trim();
    const trimmedSubject = subject ? String(subject).trim() : "";

    if (trimmedName.length < 2) {
      return NextResponse.json(
        { error: "El nombre debe tener al menos 2 caracteres." },
        { status: 400 }
      );
    }

    if (!isValidEmail(trimmedEmail)) {
      return NextResponse.json(
        { error: "El email no es válido." },
        { status: 400 }
      );
    }

    if (trimmedMessage.length < 10) {
      return NextResponse.json(
        { error: "El mensaje debe tener al menos 10 caracteres." },
        { status: 400 }
      );
    }

    const safeSubject = trimmedSubject.length ? trimmedSubject : "Sin asunto";
    const result = await addContactMessage({
      name: trimmedName,
      email: trimmedEmail,
      subject: safeSubject,
      message: trimmedMessage,
    });

    return NextResponse.json({
      success: true,
      message: "Gracias por escribirnos. Te responderemos pronto.",
      id: result.id,
    });
  } catch (error) {
    console.error("Error creating contact message:", error);
    return NextResponse.json(
      { error: "No fue posible enviar el mensaje." },
      { status: 500 }
    );
  }
}
