import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import cn from "@/utils/cn";

export const buttonVariants = cva("h-[50px] flex items-center justify-center gap-2 text-button1", {
  variants: {
    variant: {
      active: "bg-blue-blueblack text-grayscale-100",
      deactive: "bg-grayscale-400 text-grayscale-100",
      subAction: "bg-grayscale-100 text-blue-700 border-grayscale-300 border border-grayscale-300",
    },
    size: {
      default: "w-full py-3 px-2 rounded-full",
      sm: "w-[120px] py-3 px-4 rounded-[12px] text-b2R",
    },
  },
  defaultVariants: {
    variant: "active",
    size: "default",
  },
  compoundVariants: [
    {
      variant: "active",
      size: "sm",
      className: "bg-blue-700 text-grayscale-100",
    },
  ],
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, leftIcon, rightIcon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props}>
        {leftIcon && <span className="flex items-center">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="flex items-center">{rightIcon}</span>}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export default Button;
