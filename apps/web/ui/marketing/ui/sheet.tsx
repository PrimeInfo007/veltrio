"use client";

import { cn } from "@dub/utils";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import * as React from "react";

// shadcn/ui Sheet (right side only), themed with the marketing (mk-*) tokens
const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetTitle = SheetPrimitive.Title;

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <SheetPrimitive.Portal>
    <SheetPrimitive.Overlay className="fixed inset-0 z-50 bg-black/40 data-[state=open]:animate-fade-in" />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-y-0 right-0 z-50 flex h-full w-4/5 max-w-sm flex-col gap-4 border-l border-mk-border bg-white p-6 shadow-lg data-[state=closed]:animate-slide-out-to-right data-[state=open]:animate-slide-in-from-right",
        className,
      )}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-full p-1 text-mk-muted-fg transition-colors hover:bg-mk-muted hover:text-mk-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mk-ring">
        <X className="size-5" />
        <span className="sr-only">Close menu</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPrimitive.Portal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

export { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger };
