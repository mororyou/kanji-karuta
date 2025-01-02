import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { env } from '~/utils/env';

const client = createClient({
  url: env.PUBLIC_DATABASE_URL,
  authToken: env.PUBLIC_DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client);
