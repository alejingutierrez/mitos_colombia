import { readFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { sql } from '../../runtime/postgres.mjs';
const client = await sql.connect();
try {
  await client.query('SELECT pg_advisory_lock(77413001)');
  await client.query('CREATE TABLE IF NOT EXISTS schema_migrations(version TEXT PRIMARY KEY, digest TEXT NOT NULL, applied_at TIMESTAMPTZ NOT NULL DEFAULT NOW())');
  for (const file of (await readdir('runtime/migrations')).filter(f => f.endsWith('.sql')).sort()) {
    const body = await readFile('runtime/migrations/' + file, 'utf8');
    const digest = createHash('sha256').update(body).digest('hex');
    const existing = (await client.query('SELECT digest FROM schema_migrations WHERE version=$1',[file])).rows[0];
    if (existing) { if(existing.digest !== digest) throw new Error('Applied migration changed: '+file); continue; }
    await client.query('BEGIN');
    try {
      await client.query(body);
      await client.query('INSERT INTO schema_migrations(version,digest) VALUES($1,$2)',[file,digest]);
      await client.query('COMMIT');
      console.log('Applied', file, digest);
    } catch (e) { await client.query('ROLLBACK'); throw e; }
  }
} finally { await client.query('SELECT pg_advisory_unlock(77413001)').catch(()=>{}); client.release(); await sql.end(); }
