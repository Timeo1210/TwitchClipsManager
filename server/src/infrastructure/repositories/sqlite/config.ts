import Database from "better-sqlite3";
import path from "path";

export const db = new Database(
  path.resolve(process.env.SQLITE_FILEPATH || ""),
  {
    verbose: process.env.NODE_ENV !== "production" ? console.log : undefined,
  }
);

export const sqliteRepository = {
  run: async (): Promise<void> => {
    console.log("Connected to SQLite");
    db.prepare(
      `CREATE TABLE IF NOT EXISTS videos (
      id TEXT PRIMARY KEY,
      state TEXT NOT NULL
    );`
    ).run();

    process.on("exit", () => db.close());
  },
};
