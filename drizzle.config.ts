import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  schema: './app/db/schema.ts',
  dialect: 'sqlite',
  out: './.drizzle',
  verbose: true,
  strict: true,
  dbCredentials: {
    url: './app/db/sqlite.db',
  },
});
