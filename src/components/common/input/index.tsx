import * as React from "react";
import cn from "@/utils/cn";
import { CheckIcon } from "@/components/icons/service";

type CheckItem = {
  label: string;
  isChecked: boolean;
};

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & {
    type?: "text" | "check" | "timer" | "password" | "file";
    timerText?: string;
    checkItems?: CheckItem[];
    inputSize?: "default" | "md" | "sm";
  }
>(
  (
    {
      width,
      inputSize = "default",
      className,
      type = "text",
      placeholder,
      timerText,
      checkItems = [],
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          "relative",
          inputSize === "default" && "w-full",
          inputSize === "md" && "w-[220px]",
          inputSize === "sm" && "w-[161px]",
          width
        )}>
        <div className="relative w-full">
          <input
            type={type === "check" ? "text" : type}
            className={cn(
              "flex h-[50px] w-full px-5 py-[14px] outline-none bg-grayscale-100 border border-grayscale-300 rounded-[12px] text-[14px] font-medium text-grayscale-800 placeholder:text-grayscale-600 placeholder:font-normal placeholder:text-b3R focus:border-grayscale-700",
              className
            )}
            placeholder={placeholder}
            ref={ref}
            {...props}
          />
          {type === "timer" && (
            <div className="absolute -translate-y-1/2 right-5 top-1/2 text-b3M text-redscale-700">
              {timerText}
            </div>
          )}
        </div>

        {(type === "check" || type === "password") && checkItems.length > 0 && (
          <div className="flex flex-wrap items-center gap-4 pl-3 mt-2">
            {checkItems.map((item, index) => (
              <div key={index} className="flex items-center gap-1">
                <CheckIcon className={item.isChecked ? "text-blue-700" : "text-grayscale-500"} />
                <p
                  className={cn(
                    "!text-b4R",
                    item.isChecked ? "text-blue-700" : "text-grayscale-500"
                  )}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
