import React, { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const variants = cva(
  "inline-flex items-center justify-center rounded font-medium text-white rounded-full text-xs sm:text-base",
  {
    variants: {
      variant: {
        default: "bg-primary",
        secondary: "bg-secondary",
      },
      size: {
        default: "p-4",
        sm: "p-2.5",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {}

export default function Button({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(variants({ variant, size, className }))} {...props}>
      {children}
    </button>
  );
}
