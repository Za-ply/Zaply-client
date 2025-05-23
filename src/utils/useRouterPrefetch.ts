"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useRouterPrefetch = ({ path }: { path: Array<string> }) => {
  const router = useRouter();

  useEffect(() => {
    path.forEach(p => {
      router.prefetch(p);
    });
  }, [router, path]);
};

export default useRouterPrefetch;
