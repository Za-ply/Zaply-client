"use client";

import { useState, useEffect } from "react";

export function useDelayedSkeleton(isLoading: boolean) {
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setShowSkeleton(true);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setShowSkeleton(false);
    }
  }, [isLoading]);

  return { showSkeleton };
}
