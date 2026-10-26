import { cn } from "@dub/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

// shadcn/ui Badge, themed with the marketing (mk-*) tokens
const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-mk-primary text-mk-primary-fg",
        outline: "border-mk-border bg-white text-mk-fg",
        mint: "border-transparent bg-mk-mint text-mk-mint-fg",
        accent: "border-transparent bg-mk-accent/10 text-mk-accent",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
