"use client";

import { cn } from "@dub/utils";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import * as React from "react";

// shadcn/ui NavigationMenu, themed with the marketing (mk-*) tokens
const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className,
    )}
    {...props}
  >
    {children}
    {/* Centered under the nearest positioned ancestor (the header bar), for mega menus */}
    <div className="absolute left-1/2 top-full flex -translate-x-1/2 justify-center">
      <NavigationMenuPrimitive.Viewport className="relative mt-1 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top overflow-hidden rounded-2xl border border-mk-border bg-white shadow-[0_24px_60px_-24px_hsl(var(--mk-fg)/0.3)] transition-[width,height] duration-200 data-[state=closed]:animate-scale-out-content data-[state=open]:animate-scale-in-content md:w-[var(--radix-navigation-menu-viewport-width)]" />
    </div>
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("flex flex-1 list-none items-center gap-1", className)}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle =
  "group inline-flex h-9 w-max items-center justify-center rounded-full px-3.5 text-sm font-medium text-mk-fg transition-colors hover:bg-mk-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mk-ring data-[state=open]:bg-mk-muted";

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle, "gap-1", className)}
    {...props}
  >
    {children}
    <ChevronDown
      className="size-3.5 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn("left-0 top-0 w-full md:absolute md:w-auto", className)}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
};
