import { client } from './client';
// When getting a single event, invoke checkError 

export async function getEvents() {
  const { data } = await client.from('events').select('*');
  return data;
}
