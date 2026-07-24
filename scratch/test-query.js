const { Client } = require('pg');
const client = new Client({
  connectionString: "postgresql://postgres:uUcMVME6OsH903cM@db.jxyyexluztdkjzpomqit.supabase.co:5432/postgres",
  connectionTimeoutMillis: 5000,
});
client.connect()
  .then(() => {
    console.log("Connected to PostgreSQL successfully!");
    return client.query('SELECT COUNT(*) FROM "User"');
  })
  .then(res => {
    console.log("Number of users:", res.rows[0].count);
    return client.query('SELECT id, email, name FROM "User" LIMIT 1');
  })
  .then(res => {
    console.log("First user sample:", res.rows[0]);
    return client.end();
  })
  .catch(err => {
    console.error("Database query failed:", err);
    process.exit(1);
  });
