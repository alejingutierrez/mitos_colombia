import pg from 'pg';
import { readFileSync } from 'node:fs';

export function postgresOptions(env = process.env) {
  const connectionString = env.POSTGRES_URL || env.DATABASE_URL;
  if (!connectionString) throw new Error('A Postgres connection is required.');
  const url = new URL(connectionString);
  if (!['postgres:', 'postgresql:'].includes(url.protocol)) throw new Error('Invalid Postgres protocol.');
  const aws = env.MITOS_RUNTIME === 'aws';
  const rds = url.hostname.endsWith('.rds.amazonaws.com');
  if (aws && !rds) throw new Error('AWS runtime requires the dedicated RDS endpoint.');
  const sslMode = url.searchParams.get('sslmode');
  let ssl;
  if (aws || rds) {
    if (!env.PGSSLROOTCERT) throw new Error('RDS CA bundle is required.');
    ssl = { rejectUnauthorized: true, ca: readFileSync(env.PGSSLROOTCERT, 'utf8') };
  } else if (sslMode && sslMode !== 'disable') {
    ssl = { rejectUnauthorized: true };
  }
  for (const key of ['sslmode', 'sslcert', 'sslkey', 'sslrootcert']) url.searchParams.delete(key);
  const max = Number(env.MITOS_PG_POOL_MAX || 5);
  if (!Number.isInteger(max) || max < 1 || max > 20) throw new Error('Pool limit must be between 1 and 20.');
  return { connectionString: url.toString(), ssl, max, idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000, statement_timeout: 15000, application_name: 'mitos-colombia-' + (env.MITOS_PROCESS || 'web') };
}

export function taggedClient(client) {
  const sql = (strings, ...values) => {
    if (!Array.isArray(strings) || !strings.raw) throw new TypeError('Use sql as a template tag, or sql.query(text, values).');
    let text = strings[0];
    for (let i = 0; i < values.length; i++) text += '$' + (i + 1) + strings[i + 1];
    return client.query(text, values);
  };
  sql.query = (...args) => client.query(...args);
  if (client.release) sql.release = () => client.release();
  return sql;
}

let pool;
export function getPool() {
  if (!pool) {
    pool = new pg.Pool(postgresOptions());
    pool.on('error', (error) => console.error('Postgres idle connection error', { code: error.code }));
  }
  return pool;
}
export const sql = taggedClient({ query: (...args) => getPool().query(...args) });
sql.connect = async () => taggedClient(await getPool().connect());
sql.end = async () => { if (pool) { const old = pool; pool = undefined; await old.end(); } };
