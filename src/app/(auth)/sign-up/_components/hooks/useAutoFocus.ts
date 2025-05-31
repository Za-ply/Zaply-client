"use client";

import { useEffect, RefObject } from "react";

const useAutoFocus = <T extends HTMLElement>(
  value: string | undefined,
  targetLength: number,
  nextInputRef: RefObject<T>
): void => {
  useEffect(() => {
    if (value && value.length === targetLength && nextInputRef.current) {
      nextInputRef.current.focus();
    }
  }, [value, targetLength, nextInputRef]);
};

export default useAutoFocus;
