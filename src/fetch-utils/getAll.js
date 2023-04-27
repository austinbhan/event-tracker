import { createClient } from '@supabase/supabase.js'; // WORK FROM HERE
export const client = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}

export async function getAll() {
  const response = await client
    .from('Events')
    .select('*');

  return response.body;
}
