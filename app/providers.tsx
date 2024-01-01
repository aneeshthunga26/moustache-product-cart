"use client";

import { useEffect, useState } from "react";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
  dehydrate,
} from "@tanstack/react-query";
import { getMiniCart } from "./hooks/useCart";
import { CART_QUERY_KEY } from "@/lib/constants";

interface ProvidersProps {
  children: React.ReactNode;
}

//Providers live in their separate client component to enable server components to be passed as children
export default function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  useEffect(() => {
    const prefetchCart = async () => {
      await queryClient.prefetchQuery({
        queryKey: [CART_QUERY_KEY],
        queryFn: getMiniCart,
      });
    };
    prefetchCart().catch((error) => console.log(error));
  }, [queryClient]);

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {children}
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
