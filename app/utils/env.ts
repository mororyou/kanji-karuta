import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  clientPrefix: 'PUBLIC_',
  server: {
    NODE_ENV: z.enum(['development', 'production']),
    DATABASE_URL: z.string(),
    DATABASE_AUTH_TOKEN: z.string(),
  },
  client: {
    PUBLIC_NODE_ENV: z.enum(['development', 'production']),
    PUBLIC_DATABASE_URL: z.string(),
    PUBLIC_DATABASE_AUTH_TOKEN: z.string(),
  },
  runtimeEnv: process.env,
});
