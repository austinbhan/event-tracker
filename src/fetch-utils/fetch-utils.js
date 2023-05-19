import { client, checkError } from './client';

export async function getEvents() {
  const response = await client.from('vegetables').select('*');
  console.log(response);
  return await checkError(response);
}
