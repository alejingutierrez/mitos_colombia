import "server-only";

import {
  createHash,
  randomBytes,
  scrypt as scryptCallback,
  timingSafeEqual,
} from "node:crypto";
import { promisify } from "node:util";
import { cookies } from "next/headers";
import { getSqlClient, getSqliteDbWritable, isPostgres } from "./db";

export const TAROT_SESSION_COOKIE = "mitos_tarot_session";
export const TAROT_SESSION_MAX_AGE = 60 * 60 * 24 * 30;

const scrypt = promisify(scryptCallback);
const rateLimits = new Map();
let initializationPromise;

function rows(result) {
  return result?.rows || result || [];
}

export function normalizeTarotEmail(value) {
  return String(value || "").trim().toLowerCase().slice(0, 160);
}

export function cleanTarotAccountName(value) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, 120);
}

export function validateTarotPassword(value) {
  const password = String(value || "");
  if (password.length < 12 || password.length > 128) {
    return "La contraseña debe tener entre 12 y 128 caracteres.";
  }
  if (!/[A-Za-zÁÉÍÓÚáéíóúÑñ]/.test(password) || !/\d/.test(password)) {
    return "Incluye al menos una letra y un número.";
  }
  return "";
}

export async function hashTarotPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const derived = await scrypt(String(password), salt, 64);
  return `scrypt-v1$${salt}$${Buffer.from(derived).toString("hex")}`;
}

export async function verifyTarotPassword(password, encoded) {
  const [version, salt, expectedHex] = String(encoded || "").split("$");
  if (version !== "scrypt-v1" || !salt || !expectedHex) return false;
  const expected = Buffer.from(expectedHex, "hex");
  if (expected.length !== 64) return false;
  const actual = Buffer.from(await scrypt(String(password), salt, 64));
  return timingSafeEqual(actual, expected);
}

function hashSessionToken(token) {
  return createHash("sha256").update(String(token || "")).digest("hex");
}

function createUserId() {
  return `usr_${randomBytes(18).toString("hex")}`;
}

async function initializePostgres() {
  const db = getSqlClient();
  await db`
    CREATE TABLE IF NOT EXISTS tarot_users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      full_name TEXT NOT NULL,
      password_hash TEXT NOT NULL,
      email_verified_at TIMESTAMPTZ,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
  await db`
    CREATE TABLE IF NOT EXISTS tarot_user_sessions (
      token_hash TEXT PRIMARY KEY,
      user_id TEXT NOT NULL REFERENCES tarot_users(id) ON DELETE CASCADE,
      expires_at TIMESTAMPTZ NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
  await db`CREATE INDEX IF NOT EXISTS idx_tarot_sessions_user ON tarot_user_sessions(user_id)`;
  await db`CREATE INDEX IF NOT EXISTS idx_tarot_sessions_expiry ON tarot_user_sessions(expires_at)`;
}

function initializeSqlite() {
  const db = getSqliteDbWritable();
  db.exec(`
    CREATE TABLE IF NOT EXISTS tarot_users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      full_name TEXT NOT NULL,
      password_hash TEXT NOT NULL,
      email_verified_at TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS tarot_user_sessions (
      token_hash TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      expires_at TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY(user_id) REFERENCES tarot_users(id) ON DELETE CASCADE
    );
    CREATE INDEX IF NOT EXISTS idx_tarot_sessions_user ON tarot_user_sessions(user_id);
    CREATE INDEX IF NOT EXISTS idx_tarot_sessions_expiry ON tarot_user_sessions(expires_at);
  `);
}

export async function ensureTarotAuthTables() {
  if (!initializationPromise) {
    initializationPromise = (
      isPostgres()
        ? initializePostgres()
        : Promise.resolve().then(initializeSqlite)
    ).catch((error) => {
      initializationPromise = undefined;
      throw error;
    });
  }
  return initializationPromise;
}

function publicAccount(user) {
  if (!user) return null;
  return {
    id: user.id,
    email: user.email,
    fullName: user.full_name,
    emailVerified: Boolean(user.email_verified_at),
    createdAt: user.created_at,
  };
}

async function findAccountByEmail(email) {
  await ensureTarotAuthTables();
  if (isPostgres()) {
    const result = await getSqlClient()`
      SELECT id, email, full_name, password_hash, email_verified_at, created_at
      FROM tarot_users WHERE email = ${email} LIMIT 1
    `;
    return rows(result)[0] || null;
  }
  return getSqliteDbWritable()
    .prepare("SELECT id, email, full_name, password_hash, email_verified_at, created_at FROM tarot_users WHERE email = ? LIMIT 1")
    .get(email) || null;
}

export async function createTarotAccount({ email, fullName, password }) {
  const normalizedEmail = normalizeTarotEmail(email);
  const normalizedName = cleanTarotAccountName(fullName);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    return { ok: false, code: "invalid_email", message: "Ingresa un correo electrónico válido." };
  }
  if (normalizedName.length < 3) {
    return { ok: false, code: "invalid_name", message: "Ingresa tu nombre completo." };
  }
  const passwordError = validateTarotPassword(password);
  if (passwordError) return { ok: false, code: "invalid_password", message: passwordError };
  if (await findAccountByEmail(normalizedEmail)) {
    return { ok: false, code: "account_exists", message: "Ya existe una cuenta con este correo." };
  }

  const id = createUserId();
  const passwordHash = await hashTarotPassword(password);
  try {
    if (isPostgres()) {
      const result = await getSqlClient()`
        INSERT INTO tarot_users (id, email, full_name, password_hash)
        VALUES (${id}, ${normalizedEmail}, ${normalizedName}, ${passwordHash})
        RETURNING id, email, full_name, email_verified_at, created_at
      `;
      return { ok: true, account: publicAccount(rows(result)[0]) };
    }
    getSqliteDbWritable()
      .prepare("INSERT INTO tarot_users (id, email, full_name, password_hash) VALUES (?, ?, ?, ?)")
      .run(id, normalizedEmail, normalizedName, passwordHash);
    return { ok: true, account: publicAccount(await findAccountByEmail(normalizedEmail)) };
  } catch (error) {
    if (String(error?.code || "").includes("23505") || /unique/i.test(String(error?.message || ""))) {
      return { ok: false, code: "account_exists", message: "Ya existe una cuenta con este correo." };
    }
    throw error;
  }
}

export async function authenticateTarotAccount({ email, password }) {
  const account = await findAccountByEmail(normalizeTarotEmail(email));
  const valid = account
    ? await verifyTarotPassword(password, account.password_hash)
    : false;
  if (!valid) {
    return { ok: false, code: "invalid_credentials", message: "El correo o la contraseña no coinciden." };
  }
  return { ok: true, account: publicAccount(account) };
}

export async function createTarotSession(userId) {
  await ensureTarotAuthTables();
  const token = randomBytes(32).toString("base64url");
  const tokenHash = hashSessionToken(token);
  const expiresAt = new Date(Date.now() + TAROT_SESSION_MAX_AGE * 1000).toISOString();
  if (isPostgres()) {
    await getSqlClient()`
      INSERT INTO tarot_user_sessions (token_hash, user_id, expires_at)
      VALUES (${tokenHash}, ${userId}, ${expiresAt})
    `;
  } else {
    getSqliteDbWritable()
      .prepare("INSERT INTO tarot_user_sessions (token_hash, user_id, expires_at) VALUES (?, ?, ?)")
      .run(tokenHash, userId, expiresAt);
  }
  return { token, expiresAt };
}

export function setTarotSessionCookie(response, session) {
  response.cookies.set(TAROT_SESSION_COOKIE, session.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: TAROT_SESSION_MAX_AGE,
  });
  return response;
}

export function clearTarotSessionCookie(response) {
  response.cookies.set(TAROT_SESSION_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return response;
}

export async function findTarotAccountBySessionToken(token) {
  const value = String(token || "").trim();
  if (!value) return null;
  await ensureTarotAuthTables();
  const tokenHash = hashSessionToken(value);
  if (isPostgres()) {
    const result = await getSqlClient()`
      SELECT u.id, u.email, u.full_name, u.email_verified_at, u.created_at
      FROM tarot_user_sessions s
      JOIN tarot_users u ON u.id = s.user_id
      WHERE s.token_hash = ${tokenHash} AND s.expires_at > NOW()
      LIMIT 1
    `;
    return publicAccount(rows(result)[0]);
  }
  const user = getSqliteDbWritable()
    .prepare(`
      SELECT u.id, u.email, u.full_name, u.email_verified_at, u.created_at
      FROM tarot_user_sessions s
      JOIN tarot_users u ON u.id = s.user_id
      WHERE s.token_hash = ? AND julianday(s.expires_at) > julianday('now')
      LIMIT 1
    `)
    .get(tokenHash);
  return publicAccount(user);
}

function cookieFromRequest(request) {
  const direct = request?.cookies?.get?.(TAROT_SESSION_COOKIE)?.value;
  if (direct) return direct;
  const cookieHeader = request?.headers?.get?.("cookie") || "";
  const entry = cookieHeader.split(";").map((item) => item.trim()).find((item) => item.startsWith(`${TAROT_SESSION_COOKIE}=`));
  return entry ? decodeURIComponent(entry.slice(TAROT_SESSION_COOKIE.length + 1)) : "";
}

export async function getTarotAccountFromRequest(request) {
  return findTarotAccountBySessionToken(cookieFromRequest(request));
}

export async function getCurrentTarotAccount() {
  const cookieStore = await cookies();
  return findTarotAccountBySessionToken(cookieStore.get(TAROT_SESSION_COOKIE)?.value);
}

export async function revokeTarotSession(token) {
  const value = String(token || "").trim();
  if (!value) return false;
  await ensureTarotAuthTables();
  const tokenHash = hashSessionToken(value);
  if (isPostgres()) {
    const result = await getSqlClient()`DELETE FROM tarot_user_sessions WHERE token_hash = ${tokenHash} RETURNING token_hash`;
    return Boolean(rows(result)[0]);
  }
  return getSqliteDbWritable().prepare("DELETE FROM tarot_user_sessions WHERE token_hash = ?").run(tokenHash).changes === 1;
}

export function isTrustedTarotAuthRequest(request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    const originHost = new URL(origin).host.toLowerCase();
    const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
    const trustedHosts = [
      request.headers.get("host"),
      forwardedHost,
      request.nextUrl?.host,
    ]
      .filter(Boolean)
      .map((value) => String(value).toLowerCase());
    return trustedHosts.includes(originHost);
  } catch {
    return false;
  }
}

export function checkTarotAuthRateLimit(key, { maximum = 8, windowMs = 15 * 60 * 1000 } = {}) {
  const now = Date.now();
  const value = String(key || "anonymous").slice(0, 220);
  const current = rateLimits.get(value);
  if (!current || current.resetAt <= now) {
    rateLimits.set(value, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfter: 0 };
  }
  current.count += 1;
  if (rateLimits.size > 5000) {
    for (const [entryKey, entry] of rateLimits) {
      if (entry.resetAt <= now) rateLimits.delete(entryKey);
    }
  }
  return {
    allowed: current.count <= maximum,
    retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
  };
}

export function tarotAuthRateLimitKey(request, scope, email = "") {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const address = forwarded || request.headers.get("x-real-ip") || "unknown";
  return `${scope}:${address}:${normalizeTarotEmail(email)}`;
}
