require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 1,
  connectionTimeoutMillis: 10000,
});

async function main() {
  try {
    const client = await pool.connect();
    console.log('✅ Conexão com o banco OK!');
    
    const result = await client.query('SELECT COUNT(*) as total FROM "Brincadeira" WHERE published_at IS NOT NULL');
    console.log('Brincadeiras publicadas:', result.rows[0].total);

    const feedQuery = await client.query(`
      SELECT b.id, b.title, u.email, u.name 
      FROM "Brincadeira" b 
      JOIN "User" u ON b.user_id = u.id 
      WHERE b.published_at IS NOT NULL 
        AND u.email != 'equipe@behappy.com'
      ORDER BY b.published_at DESC 
      LIMIT 10
    `);
    console.log('Feed de usuarios (sem equipe):', feedQuery.rows.length);
    feedQuery.rows.forEach(r => console.log(' -', r.title, '|', r.email));
    
    client.release();
  } catch (error) {
    console.error('❌ ERRO:', error.message);
  } finally {
    await pool.end();
  }
}

main();
