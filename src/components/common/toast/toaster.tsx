"use client";

import { useToast } from "@/utils/useToast";
import {
  Toast,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/common/toast";
import { CircleCheckIcon, ErrorIcon } from "@/components/icons/service";
import cn from "@/utils/cn";

export const Toaster = () => {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, variant = "default", ...props }) {
        const icon =
          variant === "error" ? (
            <ErrorIcon width={20} height={20} stroke="#F83650" />
          ) : variant === "check" ? (
            <CircleCheckIcon width={20} height={20} stroke="#22C7FA" />
          ) : null;

        return (
          <Toast key={id} {...props}>
            <div
              className={`flex items-center w-full gap-2 ${variant === "default" ? "justify-center" : ""}`}>
              <div className="flex gap-2">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription
                    icon={icon}
                    className={cn(
                      "whitespace-pre-line",
                      variant === "default" ? "text-center" : "text-left"
                    )}>
                    {description}
                  </ToastDescription>
                )}
              </div>
              {action}
            </div>
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
};
