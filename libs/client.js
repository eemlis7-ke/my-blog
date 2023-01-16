// libs/client.js
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: '13n28o7r60',
  apiKey: process.env.API_KEY,
});