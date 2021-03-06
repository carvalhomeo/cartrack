import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 15000,
      refetchIntervalInBackground: true,
      refetchOnWindowFocus: false,
    },
  },
});
