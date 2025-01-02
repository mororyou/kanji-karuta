import type { Config } from 'drizzle-kit';
import { defineConfig } from 'drizzle-kit';
import { env } from '~/utils/env';

export default defineConfig({
  schema: './app/db/schema.ts',
  out: './.drizzle',
  dialect: 'turso',
  strict: true,
  dbCredentials: {
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
  },
} satisfies Config);
