import { getSqlClient, getSqliteDb, getSqliteDbWritable, isPostgres } from "./db";

// Get approved comments for a myth
function getCommentsSqlite(mythId) {
  const db = getSqliteDb();
  return db
    .prepare(
      `SELECT id, author_name, content, created_at
       FROM comments
       WHERE myth_id = ? AND status = 'approved'
       ORDER BY created_at DESC`
    )
    .all(mythId);
}

async function getCommentsPostgres(mythId) {
  const sql = getSqlClient();
  try {
    const result = await sql.query(
      `SELECT id, author_name, content, created_at
       FROM comments
       WHERE myth_id = $1 AND status = 'approved'
       ORDER BY created_at DESC`,
      [mythId]
    );
    return result.rows;
  } catch (error) {
    console.error("Error getting comments:", error);
    return [];
  }
}

export async function getComments(mythId) {
  try {
    if (isPostgres()) {
      return await getCommentsPostgres(mythId);
    }
    return getCommentsSqlite(mythId);
  } catch (error) {
    console.error("Error in getComments:", error);
    return [];
  }
}

// Add a new comment (pending approval)
function addCommentSqlite({ mythId, authorName, authorEmail, content }) {
  const db = getSqliteDbWritable();
  const stmt = db.prepare(
    `INSERT INTO comments (myth_id, author_name, author_email, content, status)
     VALUES (?, ?, ?, ?, 'pending')
     RETURNING id`
  );
  const result = stmt.get(mythId, authorName, authorEmail, content);
  return result;
}

async function addCommentPostgres({ mythId, authorName, authorEmail, content }) {
  const sql = getSqlClient();
  const result = await sql.query(
    `INSERT INTO comments (myth_id, author_name, author_email, content, status)
     VALUES ($1, $2, $3, $4, 'pending')
     RETURNING id`,
    [mythId, authorName, authorEmail, content]
  );
  return result.rows[0];
}

export async function addComment(data) {
  if (isPostgres()) {
    return addCommentPostgres(data);
  }
  return addCommentSqlite(data);
}
