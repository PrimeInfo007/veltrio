"use client";

import { Logo } from "@dub/ui";
import { APP_DOMAIN, cn } from "@dub/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GroupsMenu, MarketplaceBar, ProductMenu } from "./mega-menus";
import {
  NavLink,
  PRODUCT_NAV,
  RESOURCES_NAV,
  SOLUTIONS_NAV,
  TOP_LINKS,
} from "./nav-items";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-colors",
        scrolled
          ? "border-b border-mk-border bg-white/95 backdrop-blur-lg"
          : "border-b border-transparent",
      )}
    >
      {/* relative: the mega menu viewport centers on this bar */}
      <div className="relative mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto] items-center px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className="flex w-fit items-center gap-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mk-ring"
          aria-label="Veltrio home"
        >
          <Logo className="size-7 text-mk-fg" />
          <span className="font-mk-display text-xl font-bold tracking-[-0.03em] text-mk-fg">
            veltrio
          </span>
        </Link>

        <NavigationMenu className="static hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Product</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ProductMenu />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <GroupsMenu groups={SOLUTIONS_NAV} />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <GroupsMenu groups={RESOURCES_NAV} footer={<MarketplaceBar />} />
              </NavigationMenuContent>
            </NavigationMenuItem>
            {TOP_LINKS.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={cn(
                      navigationMenuTriggerStyle,
                      "aria-[current=page]:bg-mk-muted",
                    )}
                  >
                    {item.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center justify-end gap-2 lg:flex">
          <Button variant="outline" size="sm" asChild>
            <a href={`${APP_DOMAIN}/login`}>Log in</a>
          </Button>
          <Button size="sm" asChild>
            <a href={`${APP_DOMAIN}/register`}>Sign up</a>
          </Button>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}

function MobileMenu() {
  const sections: { title: string; items: NavLink[] }[] = [
    { title: "Product", items: PRODUCT_NAV },
    ...SOLUTIONS_NAV.map((g) => ({
      title: g.title,
      items: g.items,
    })),
    ...RESOURCES_NAV,
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="justify-self-end lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="!size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="gap-0 p-0">
        <SheetTitle className="border-b border-mk-border px-6 py-5 font-mk-display text-lg font-bold">
          Menu
        </SheetTitle>
        <nav className="flex-1 overflow-y-auto px-4 py-4">
          {sections.map((s) => (
            <div key={s.title} className="mb-4">
              <p className="px-2 text-xs font-medium uppercase tracking-wide text-mk-muted-fg">
                {s.title}
              </p>
              <ul className="mt-1">
                {s.items.map((item) => (
                  <li key={`${s.title}-${item.title}`}>
                    <SheetClose asChild>
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium hover:bg-mk-muted"
                      >
                        <item.icon className="size-4 text-mk-accent" />
                        {item.title}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <ul className="border-t border-mk-border pt-3">
            {TOP_LINKS.map((item) => (
              <li key={item.href}>
                <SheetClose asChild>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium hover:bg-mk-muted"
                  >
                    <item.icon className="size-4 text-mk-accent" />
                    {item.title}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
        <div className="grid grid-cols-2 gap-2 border-t border-mk-border p-4">
          <Button variant="outline" asChild>
            <a href={`${APP_DOMAIN}/login`}>Log in</a>
          </Button>
          <Button asChild>
            <a href={`${APP_DOMAIN}/register`}>Sign up</a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
