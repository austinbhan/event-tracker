import { client, checkError } from './client';


export async function getEvents() {
  const response = await client.from('events')
    .select('*')
    .order('id', { ascending: false });
  console.log('fetch-utils 8', response);
  return checkError(response);
}
