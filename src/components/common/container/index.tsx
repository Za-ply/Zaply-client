import React, { forwardRef } from "react";
import { cn } from "@/utils";

const Container = forwardRef<HTMLElement, { children: React.ReactNode; className?: string }>(
  ({ children, className }, ref) => {
    return (
      <main ref={ref} className={cn("px-5 w-full", className)}>
        {children}
      </main>
    );
  }
);

Container.displayName = "Container";

export default Container;
