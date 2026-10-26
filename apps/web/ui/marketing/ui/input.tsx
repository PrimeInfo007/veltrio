import { cn } from "@dub/utils";
import * as React from "react";

// shadcn/ui Input, themed with the marketing (mk-*) tokens
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-full border border-mk-border bg-white px-4 text-sm text-mk-fg placeholder:text-mk-muted-fg focus-visible:border-mk-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mk-ring/30 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
