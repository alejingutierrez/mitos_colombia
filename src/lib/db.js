import "server-only";
import fs from "fs";
import path from "path";
import Database from "better-sqlite3";

const dbPath =
  process.env.MITOS_DB_PATH ||
  path.join(process.cwd(), "data", "mitos.sqlite");

let db;

export function getDb() {
  if (!db) {
    if (!fs.existsSync(dbPath)) {
      throw new Error(
        `Database not found at ${dbPath}. Run \"npm run db:import\" first.`
      );
    }
    db = new Database(dbPath, { readonly: true, fileMustExist: true });
  }
  return db;
}
