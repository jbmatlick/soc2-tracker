const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'soc2.db');

const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL');
db.exec('CREATE TABLE IF NOT EXISTS state(key TEXT PRIMARY KEY, value TEXT)');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/state', (req, res) => {
  const rows = db.prepare('SELECT key, value FROM state').all();
  const result = {};
  for (const row of rows) {
    try { result[row.key] = JSON.parse(row.value); } catch (e) { result[row.key] = row.value; }
  }
  res.json({
    controlState: result['control-state'] || {},
    openGroups: result['open-groups'] || {}
  });
});

app.put('/api/state', (req, res) => {
  const { controlState, openGroups } = req.body;
  const upsert = db.prepare('INSERT INTO state(key, value) VALUES(?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value');
  const tx = db.transaction(() => {
    if (controlState !== undefined) upsert.run('control-state', JSON.stringify(controlState));
    if (openGroups !== undefined) upsert.run('open-groups', JSON.stringify(openGroups));
  });
  tx();
  res.json({ ok: true });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`SOC 2 Tracker running on port ${PORT}`));
