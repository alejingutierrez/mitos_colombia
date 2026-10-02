import "server-only";
import Database from "better-sqlite3";
import { sql } from "../../runtime/postgres.mjs";

const dbPath = process.env.MITOS_DB_PATH || "data/mitos.sqlite";

const postgresUrl = process.env.POSTGRES_URL || process.env.DATABASE_URL;
if (postgresUrl && !process.env.POSTGRES_URL) {
  process.env.POSTGRES_URL = postgresUrl;
}

const usePostgres = Boolean(postgresUrl);
if (process.env.MITOS_RUNTIME === "aws" && !usePostgres) {
  throw new Error("AWS production requires its own Postgres database; SQLite fallback is disabled.");
}
let sqliteDb;
let sqliteDbWritable;

export function isPostgres() {
  return usePostgres;
}

export function isQuotaError(error) {
  const message = String(error?.message || "");
  return (
    message.includes("exceeded the data transfer quota") ||
    message.includes("HTTP status 402") ||
    message.includes("data transfer quota")
  );
}

export function getSqlClient() {
  if (!usePostgres) {
    throw new Error(
      "POSTGRES_URL is not set. Configure a Postgres database or use SQLite."
    );
  }
  return sql;
}

export function getSqliteDb() {
  if (!sqliteDb) {
    try {
      sqliteDb = new Database(dbPath, { readonly: true, fileMustExist: true });
    } catch (error) {
      throw new Error(
        `Database not found at ${dbPath}. Run \"npm run db:import\" first.`
      );
    }
  }
  return sqliteDb;
}

export function getSqliteDbWritable() {
  if (process.env.MITOS_SNAPSHOT_BUILD === "1") throw new Error("Build snapshots are read-only.");
  if (!sqliteDbWritable) {
    try {
      sqliteDbWritable = new Database(dbPath, { fileMustExist: true });
    } catch (error) {
      throw new Error(
        `Database not found at ${dbPath}. Run \"npm run db:import\" first.`
      );
    }
  }
  return sqliteDbWritable;
}
