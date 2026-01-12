import { NextResponse } from "next/server";
import OpenAI from "openai";
import { revalidatePath, revalidateTag } from "next/cache";
import {
  getSqlClient,
  getSqliteDb,
  getSqliteDbWritable,
  isPostgres,
} from "../../../../lib/db";
import { ensureTarotSeeded } from "../../../../lib/tarot";

export const runtime = "nodejs";
export const maxDuration = 300;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const MAX_WORDS = 30;
const MAX_PER_REQUEST = 10;
const MAX_PART_WORDS = 12;

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

function sanitizeText(text) {
  return String(text || "").replace(/\s+/g, " ").trim();
}

function countWords(text) {
  if (!text) return 0;
  const words = sanitizeText(text).match(/\S+/g);
  return words ? words.length : 0;
}

function limitWords(text, maxWords) {
  const words = sanitizeText(text).split(/\s+/g);
  if (words.length <= maxWords) {
    return sanitizeText(text);
  }
  return words.slice(0, maxWords).join(" ").trim();
}

function parseJson(raw) {
  if (!raw) return null;
  const cleaned = String(raw)
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
  try {
    return JSON.parse(cleaned);
  } catch (error) {
    console.error("[TAROT-READING] JSON parse error:", error);
    return null;
  }
}

function buildContext(card) {
  return {
    card_name: card.card_name,
    arcana: card.arcana,
    suit: card.suit,
    myth_title: card.myth_title,
    meaning: card.meaning,
    selection_reason: card.selection_reason,
  };
}

function normalizeReading(payload) {
  const upright = limitWords(sanitizeText(payload.upright || ""), MAX_PART_WORDS);
  const reversed = limitWords(
    sanitizeText(payload.reversed || payload.reverse || ""),
    MAX_PART_WORDS
  );
  const reading = sanitizeText(
    `Derecho: ${upright}. Reverso: ${reversed}.`
  );
  if (countWords(reading) <= MAX_WORDS) {
    return reading;
  }
  return limitWords(reading, MAX_WORDS);
}

async function generateReading(card) {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY no está configurada");
  }

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content:
          "Eres un editor de tarot. Devuelve SOLO JSON válido con campos: upright, reversed. " +
          "Reglas: español, máximo 30 palabras en total. Cada campo debe ser una frase corta. " +
          "upright explica el significado al derecho y reversed al revés. Sin texto adicional.",
      },
      {
        role: "user",
        content: JSON.stringify(buildContext(card), null, 2),
      },
    ],
    temperature: 0.4,
    max_tokens: 200,
  });

  const raw = response?.choices?.[0]?.message?.content;
  const parsed = parseJson(raw);
  if (!parsed) {
    throw new Error("OpenAI no devolvió JSON válido");
  }
  return normalizeReading(parsed);
}

async function fetchTarotCounts() {
  if (isPostgres()) {
    const db = getSqlClient();
    const totalResult = await db`SELECT COUNT(*)::int AS total FROM tarot_cards`;
    const pendingResult = await db`
      SELECT COUNT(*)::int AS total
      FROM tarot_cards
      WHERE reading_summary IS NULL OR BTRIM(reading_summary) = ''
    `;
    return {
      total: Number(totalResult.rows?.[0]?.total || 0),
      pending: Number(pendingResult.rows?.[0]?.total || 0),
    };
  }

  const db = getSqliteDb();
  const total = db.prepare("SELECT COUNT(*) AS total FROM tarot_cards").get()
    .total;
  const pending = db
    .prepare(
      "SELECT COUNT(*) AS total FROM tarot_cards WHERE reading_summary IS NULL OR TRIM(reading_summary) = ''"
    )
    .get().total;
  return { total: total || 0, pending: pending || 0 };
}

async function fetchPendingTarotCards(limit = 10, force = false) {
  if (isPostgres()) {
    const db = getSqlClient();
    if (force) {
      const result = await db`
        SELECT id, card_name, arcana, suit, myth_title, meaning, selection_reason, reading_summary
        FROM tarot_cards
        ORDER BY order_index ASC, id ASC
        LIMIT ${limit}
      `;
      return result.rows || result;
    }
    const result = await db`
      SELECT id, card_name, arcana, suit, myth_title, meaning, selection_reason, reading_summary
      FROM tarot_cards
      WHERE reading_summary IS NULL OR BTRIM(reading_summary) = ''
      ORDER BY order_index ASC, id ASC
      LIMIT ${limit}
    `;
    return result.rows || result;
  }

  const db = getSqliteDb();
  if (force) {
    return db
      .prepare(
        `SELECT id, card_name, arcana, suit, myth_title, meaning, selection_reason, reading_summary
         FROM tarot_cards
         ORDER BY order_index ASC, id ASC
         LIMIT ?`
      )
      .all(limit);
  }
  return db
    .prepare(
      `SELECT id, card_name, arcana, suit, myth_title, meaning, selection_reason, reading_summary
       FROM tarot_cards
       WHERE reading_summary IS NULL OR TRIM(reading_summary) = ''
       ORDER BY order_index ASC, id ASC
       LIMIT ?`
    )
    .all(limit);
}

async function updateTarotReading(cardId, readingSummary) {
  if (isPostgres()) {
    const db = getSqlClient();
    const result = await db`
      UPDATE tarot_cards
      SET reading_summary = ${readingSummary}, updated_at = NOW()
      WHERE id = ${cardId}
      RETURNING id, slug, reading_summary
    `;
    return result.rows?.[0] || result[0];
  }

  const db = getSqliteDbWritable();
  const stmt = db.prepare(
    `UPDATE tarot_cards
     SET reading_summary = ?, updated_at = datetime('now')
     WHERE id = ?`
  );
  const info = stmt.run(readingSummary, cardId);
  if (info.changes === 0) return null;
  return { id: cardId, reading_summary: readingSummary };
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

    await ensureTarotSeeded();
    const counts = await fetchTarotCounts();
    const sample = await fetchPendingTarotCards(12);

    return NextResponse.json({
      total: counts.pending,
      eligible: counts.total,
      max_words: MAX_WORDS,
      sample: sample.map((card) => ({
        id: card.id,
        card_name: card.card_name,
        arcana: card.arcana,
        suit: card.suit,
        myth_title: card.myth_title,
      })),
    });
  } catch (error) {
    console.error("[TAROT-READING] GET error:", error);
    return NextResponse.json(
      { error: error.message || "Error loading tarot descriptions" },
      { status: 500 }
    );
  }
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

    await ensureTarotSeeded();

    const body = await request.json();
    const count = Math.min(Math.max(1, body.count || 1), MAX_PER_REQUEST);
    const force = Boolean(body.force);
    const cards = await fetchPendingTarotCards(count, force);

    if (!cards.length) {
      return NextResponse.json({
        success: true,
        message: "No hay cartas pendientes",
        updated: [],
      });
    }

    const updated = [];

    for (const card of cards) {
      try {
        const reading = await generateReading(card);
        await updateTarotReading(card.id, reading);
        updated.push({
          id: card.id,
          card_name: card.card_name,
          myth_title: card.myth_title,
          reading_summary: reading,
          word_count: countWords(reading),
          success: true,
        });
      } catch (error) {
        console.error("[TAROT-READING] Error:", error);
        updated.push({
          id: card.id,
          card_name: card.card_name,
          myth_title: card.myth_title,
          error: error.message || "Error desconocido",
          success: false,
        });
      }
    }

    revalidateTag("tarot-cards");
    revalidatePath("/tarot");

    return NextResponse.json({
      success: true,
      message: `Actualizadas ${updated.filter((item) => item.success).length} cartas`,
      updated,
    });
  } catch (error) {
    console.error("[TAROT-READING] POST error:", error);
    return NextResponse.json(
      { error: error.message || "Error updating tarot descriptions" },
      { status: 500 }
    );
  }
}
