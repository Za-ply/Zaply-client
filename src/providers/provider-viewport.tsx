"use client";

import useVh from "@/hooks/useVh";
import { ReactNode } from "react";

interface ViewportProviderProps {
  children: ReactNode;
}

const ViewportProvider = ({ children }: ViewportProviderProps) => {
  const vh = useVh();

  return <div style={{ height: `${vh * 100}px` }}>{children}</div>;
};

export default ViewportProvider;
