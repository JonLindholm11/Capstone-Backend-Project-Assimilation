import pg from "pg";

const options = { connectionString: process.env.DATABASE_URL };

// SSL configuration for production (Supabase)
if (process.env.NODE_ENV === "production" || process.env.DATABASE_URL?.includes('supabase')) {
  options.ssl = { rejectUnauthorized: false };
}

const db = new pg.Client(options);
export default db;
