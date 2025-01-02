import type { QueryClientConfig } from '@tanstack/react-query';

export const queryOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 1000 * 60,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
  },
};
