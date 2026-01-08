import { Pool } from 'pg';

let _pool: Pool | null = null;

export function getPool(): Pool {
  if (_pool) return _pool;
  const connectionString = process.env.SUPABASE_DB_URL;
  if (!connectionString) {
    throw new Error('SUPABASE_DB_URL is not set');
  }
  _pool = new Pool({ connectionString, application_name: 'clothing-store' });
  return _pool;
}

export const DB_SCHEMA = process.env.SUPABASE_SCHEMA || 'public';
