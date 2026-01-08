import { Pool } from 'pg';

const connectionString = process.env.SUPABASE_DB_URL;
const schema = process.env.SUPABASE_SCHEMA || 'public';

if (!connectionString) {
  throw new Error('SUPABASE_DB_URL is not set');
}

export const pool = new Pool({ connectionString, application_name: 'clothing-store' });

// Ensure all queries run in the configured schema
export const withSchema = (sql: string) => sql.replaceAll(/\b(app|public)\./g, `${schema}.`);
