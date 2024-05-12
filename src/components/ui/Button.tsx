import React, { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const variants = cva(
  "inline-flex items-center justify-center rounded font-medium text-white rounded-full",
  {
    variants: {
      variant: {
        default: "bg-primary p-3.5",
      },
      size: {
        default: "",
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
  ...props
}: ButtonProps) {
  return (
    <button className={cn(variants({ variant, size, className }))}>
      Order Again
    </button>
  );
}
