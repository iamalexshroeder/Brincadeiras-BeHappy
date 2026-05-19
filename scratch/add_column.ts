import 'dotenv/config'
import pg from 'pg'

async function main() {
  const client = new pg.Client({
    connectionString: process.env.DATABASE_URL
  })
  await client.connect()
  console.log("Connected to PostgreSQL")
  
  try {
    await client.query(`ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "role" TEXT;`)
    console.log("Column 'role' added successfully to 'User' table")
  } catch (err: any) {
    console.log("Error running query:", err.message)
  } finally {
    await client.end()
  }
}

main()
