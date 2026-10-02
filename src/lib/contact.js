import { getSqlClient, getSqliteDbWritable, isPostgres } from "./db";

const STATUSES = ["new", "read", "archived"];

function normalizeStatus(value) {
  if (!value) return null;
  const normalized = String(value).toLowerCase().trim();
  return STATUSES.includes(normalized) ? normalized : null;
}

function clampNumber(value, min, max, fallback) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) return fallback;
  return Math.min(Math.max(parsed, min), max);
}

async function ensureContactTable() {
  if (isPostgres()) {
    const sql = getSqlClient();
    await sql.query(`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        subject TEXT,
        message TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'new',
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `);
    await sql.query(
      "CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_messages(status)"
    );
    await sql.query(
      "CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_messages(created_at)"
    );
    return;
  }

  const db = getSqliteDbWritable();
  db.exec(`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT,
      message TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'new',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_messages(status);
    CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_messages(created_at);
  `);
}

export async function addContactMessage({ name, email, subject, message }) {
  await ensureContactTable();

  if (isPostgres()) {
    const sql = getSqlClient();
    const result = await sql.query(
      `INSERT INTO contact_messages (name, email, subject, message, status)
       VALUES ($1, $2, $3, $4, 'new')
       RETURNING id`,
      [name, email, subject, message]
    );
    return result.rows[0];
  }

  const db = getSqliteDbWritable();
  const stmt = db.prepare(
    `INSERT INTO contact_messages (name, email, subject, message, status)
     VALUES (?, ?, ?, ?, 'new')
     RETURNING id`
  );
  return stmt.get(name, email, subject, message);
}

export async function listContactMessages({ status, limit = 50, offset = 0 } = {}) {
  await ensureContactTable();

  const safeStatus = normalizeStatus(status);
  const limitValue = clampNumber(limit, 1, 200, 50);
  const offsetValue = clampNumber(offset, 0, 10000, 0);

  if (isPostgres()) {
    const sql = getSqlClient();
    const values = [];
    const where = [];

    if (safeStatus) {
      values.push(safeStatus);
      where.push(`status = $${values.length}`);
    }

    values.push(limitValue);
    values.push(offsetValue);

    const limitIndex = values.length - 1;
    const offsetIndex = values.length;
    const whereClause = where.length ? `WHERE ${where.join(" AND ")}` : "";

    const result = await sql.query(
      `
      SELECT id, name, email, subject, message, status, created_at
      FROM contact_messages
      ${whereClause}
      ORDER BY created_at DESC
      LIMIT $${limitIndex} OFFSET $${offsetIndex}
      `,
      values
    );
    return result.rows;
  }

  const db = getSqliteDbWritable();
  const whereClause = safeStatus ? "WHERE status = ?" : "";
  const params = safeStatus
    ? [safeStatus, limitValue, offsetValue]
    : [limitValue, offsetValue];

  return db
    .prepare(
      `
      SELECT id, name, email, subject, message, status, created_at
      FROM contact_messages
      ${whereClause}
      ORDER BY created_at DESC
      LIMIT ? OFFSET ?
    `
    )
    .all(...params);
}

export async function getContactStats() {
  await ensureContactTable();

  const totals = {
    total: 0,
    new: 0,
    read: 0,
    archived: 0,
  };

  if (isPostgres()) {
    const sql = getSqlClient();
    const result = await sql.query(
      `SELECT status, COUNT(*)::int AS total
       FROM contact_messages
       GROUP BY status`
    );
    result.rows.forEach((row) => {
      const status = normalizeStatus(row.status);
      if (status) {
        totals[status] = Number(row.total) || 0;
        totals.total += Number(row.total) || 0;
      }
    });
    return totals;
  }

  const db = getSqliteDbWritable();
  const rows = db
    .prepare(
      `SELECT status, COUNT(*) AS total
       FROM contact_messages
       GROUP BY status`
    )
    .all();

  rows.forEach((row) => {
    const status = normalizeStatus(row.status);
    if (status) {
      totals[status] = Number(row.total) || 0;
      totals.total += Number(row.total) || 0;
    }
  });

  return totals;
}

export async function updateContactStatus(id, status) {
  await ensureContactTable();
  const safeStatus = normalizeStatus(status);
  if (!safeStatus) {
    throw new Error("Estado inválido");
  }

  if (isPostgres()) {
    const sql = getSqlClient();
    const result = await sql.query(
      `UPDATE contact_messages
       SET status = $1
       WHERE id = $2
       RETURNING id, status`,
      [safeStatus, id]
    );
    return result.rows[0];
  }

  const db = getSqliteDbWritable();
  const stmt = db.prepare(
    `UPDATE contact_messages
     SET status = ?
     WHERE id = ?`
  );
  const info = stmt.run(safeStatus, id);
  if (info.changes === 0) {
    throw new Error("Mensaje no encontrado");
  }
  return { id, status: safeStatus };
}
