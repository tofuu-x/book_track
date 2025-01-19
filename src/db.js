import Database from "better-sqlite3";

const db = new Database('myApp.db'); // Add .db extension for clarity
db.pragma('journal_mode=WAL');

const createTable = db.transaction(() => {
  db.prepare(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    )
  `).run();

  db.prepare(`
    CREATE TABLE IF NOT EXISTS books (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      book_name TEXT NOT NULL,
      completed BOOLEAN DEFAULT 0 NOT NULL,
      user_id INTEGER NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `).run();
});

createTable();

export default db;
