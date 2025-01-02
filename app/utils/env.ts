import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';
export const env = createEnv({
  clientPrefix: 'PUBLIC_',
  client: {
    PUBLIC_NODE_ENV: z.enum(['development', 'production']),
  },
  runtimeEnv: process.env,
});
