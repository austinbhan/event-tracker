import { client } from './client';
// When getting a single event, invoke checkError 

export async function getEvents() {
  const response = await client.from('events').select('*');
  console.log(client); // returns client information
  console.log(response); // returns 401 server error
  return response.data;
}
