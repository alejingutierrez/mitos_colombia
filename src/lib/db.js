import "server-only";
import fs from "fs";
import path from "path";
import Database from "better-sqlite3";
import { sql } from "@vercel/postgres";

const dbPath =
  process.env.MITOS_DB_PATH ||
  path.join(process.cwd(), "data", "mitos.sqlite");

const postgresUrl = process.env.POSTGRES_URL || process.env.DATABASE_URL;
if (postgresUrl && !process.env.POSTGRES_URL) {
  process.env.POSTGRES_URL = postgresUrl;
}

const usePostgres = Boolean(postgresUrl);
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
    if (!fs.existsSync(dbPath)) {
      throw new Error(
        `Database not found at ${dbPath}. Run \"npm run db:import\" first.`
      );
    }
    sqliteDb = new Database(dbPath, { readonly: true, fileMustExist: true });
  }
  return sqliteDb;
}

export function getSqliteDbWritable() {
  if (!sqliteDbWritable) {
    if (!fs.existsSync(dbPath)) {
      throw new Error(
        `Database not found at ${dbPath}. Run \"npm run db:import\" first.`
      );
    }
    sqliteDbWritable = new Database(dbPath, { fileMustExist: true });
  }
  return sqliteDbWritable;
}
