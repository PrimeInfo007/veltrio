"use client";

import { Logo } from "@dub/ui";
import { APP_DOMAIN, cn } from "@dub/utils";
import { ChevronRight, MousePointerClick, Store } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import {
  NavGroup,
  NavLink,
  PRODUCT_NAV,
  PRODUCT_NAV_SECONDARY,
} from "./nav-items";
import { NavigationMenuLink } from "./ui/navigation-menu";

// Accent per product, used for the card icon and preview tint
const PRODUCT_TINT: Record<string, { icon: string; wash: string }> = {
  "/partners": { icon: "bg-[#7C5CFF]", wash: "from-[#7C5CFF]/[0.07]" },
  "/analytics": { icon: "bg-[#12B886]", wash: "from-[#12B886]/[0.08]" },
  "/links": { icon: "bg-[#2F45FF]", wash: "from-[#2F45FF]/[0.07]" },
};

function MenuLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className={cn(
          "group block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mk-ring",
          className,
        )}
      >
        {children}
      </Link>
    </NavigationMenuLink>
  );
}

/* ---------- Product ---------- */

function PartnersPreview() {
  const people = [
    { n: "Maya Chen", i: "MC", c: "#7C5CFF", r: "$4.8K", p: "$960" },
    { n: "Leo Hart", i: "LH", c: "#0B6B4A", r: "$3.2K", p: "$648" },
    { n: "Ana Souza", i: "AS", c: "#C2410C", r: "$19.2K", p: "$3.8K" },
    { n: "Sam Okafor", i: "SO", c: "#2F45FF", r: "$11K", p: "$2.2K" },
  ];
  return (
    <div className="grid grid-cols-2 gap-2">
      {people.map((p) => (
        <div
          key={p.n}
          className="flex items-center gap-2 rounded-lg border border-mk-border bg-white p-2 shadow-sm"
        >
          <span
            className="flex size-8 shrink-0 items-center justify-center rounded-md text-[10px] font-semibold text-white"
            style={{ background: p.c }}
          >
            {p.i}
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[11px] font-semibold text-mk-fg">
              {p.n}
            </span>
            <span className="block text-[10px] tabular-nums text-mk-muted-fg">
              {p.r} · paid {p.p}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

function AnalyticsPreview() {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 280 90"
        className="absolute -top-16 right-0 h-24 w-full"
        aria-hidden="true"
      >
        <path
          d="M0 85 C 40 80, 60 70, 90 62 S 140 40, 170 48 S 220 20, 280 2"
          fill="none"
          stroke="#12B886"
          strokeWidth="2.5"
        />
        <circle cx="170" cy="48" r="3.5" fill="#12B886" />
      </svg>
      <div className="relative rounded-lg border border-mk-border bg-white p-3 shadow-sm">
        <p className="flex items-center gap-1.5 rounded-md bg-mk-muted px-2 py-1 text-[11px] font-medium text-mk-fg">
          <Logo className="size-3 text-mk-fg" />
          veltrio.link/try
        </p>
        <dl className="mt-2 space-y-1 text-[11px]">
          {[
            ["Clicks", "12.5K", "bg-[#2F45FF]"],
            ["Leads", "8.2K", "bg-[#7C5CFF]"],
            ["Sales", "$12K", "bg-[#12B886]"],
          ].map(([k, v, c]) => (
            <div key={k} className="flex items-center justify-between">
              <dt className="flex items-center gap-1.5 text-mk-muted-fg">
                <span className={cn("size-2 rounded-sm", c)} />
                {k}
              </dt>
              <dd className="font-medium tabular-nums text-mk-fg">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

function LinksPreview() {
  return (
    <div className="space-y-2">
      {[
        { s: "veltrio.link/launch", d: "northwindgoods.com", c: "151.8K" },
        { s: "go.acme.dev/docs", d: "acme.dev/docs/start", c: "100K" },
      ].map((l) => (
        <div
          key={l.s}
          className="flex items-center gap-2 rounded-lg border border-mk-border bg-white p-2 shadow-sm"
        >
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-mk-fg">
            <Logo className="size-3.5 text-white" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[11px] font-semibold text-mk-fg">
              {l.s}
            </span>
            <span className="block truncate text-[10px] text-mk-muted-fg">
              ↳ {l.d}
            </span>
          </span>
          <span className="flex items-center gap-1 rounded border border-mk-border px-1.5 py-0.5 text-[10px] text-mk-fg">
            <MousePointerClick className="size-3" />
            {l.c}
          </span>
        </div>
      ))}
    </div>
  );
}

const PREVIEWS: Record<string, () => ReactNode> = {
  "/partners": PartnersPreview,
  "/analytics": AnalyticsPreview,
  "/links": LinksPreview,
};

export function ProductMenu() {
  return (
    <div className="w-[min(1000px,calc(100vw-2rem))] p-3">
      <ul className="grid grid-cols-3 gap-3">
        {PRODUCT_NAV.map((item) => {
          const tint = PRODUCT_TINT[item.href];
          const Preview = PREVIEWS[item.href];
          return (
            <li key={item.href}>
              <MenuLink
                href={item.href}
                className={cn(
                  "flex h-[300px] flex-col overflow-hidden border border-mk-border bg-gradient-to-b to-white transition-colors hover:border-mk-fg/20",
                  tint.wash,
                )}
              >
                <div className="p-5">
                  <span
                    className={cn(
                      "flex size-7 items-center justify-center rounded-md text-white",
                      tint.icon,
                    )}
                  >
                    <item.icon className="size-4" />
                  </span>
                  <p className="mt-4 font-semibold text-mk-fg">
                    Veltrio {item.title}
                  </p>
                  <p className="mt-1 text-sm text-mk-muted-fg">
                    {item.description}
                  </p>
                </div>
                <div className="mt-auto px-4 pb-4 transition-transform duration-300 group-hover:-translate-y-1">
                  <Preview />
                </div>
              </MenuLink>
            </li>
          );
        })}
      </ul>
      <ul className="mt-3 grid grid-cols-2 gap-3">
        {PRODUCT_NAV_SECONDARY.map((item) => (
          <li key={item.href}>
            <MenuLink
              href={item.href}
              className="flex items-center justify-between gap-4 overflow-hidden border border-mk-border p-5 transition-colors hover:border-mk-fg/20"
            >
              <span>
                <span className="block font-semibold text-mk-fg">
                  Veltrio {item.title}
                </span>
                <span className="mt-1 block text-sm text-mk-muted-fg">
                  {item.description}
                </span>
              </span>
              {item.title === "API" ? (
                <code className="hidden shrink-0 rounded-lg border border-mk-border bg-mk-muted px-3 py-2 font-mono text-[11px] leading-relaxed text-mk-fg xl:block">
                  POST /links
                  <br />
                  <span className="text-mk-muted-fg">{`{ "url": "…" }`}</span>
                </code>
              ) : (
                <span className="hidden shrink-0 gap-1.5 xl:flex">
                  {[
                    ["S", "#635BFF"],
                    ["S", "#5E8E3E"],
                    ["Z", "#FF4F00"],
                    ["S", "#4A154B"],
                  ].map(([l, c], i) => (
                    <span
                      key={i}
                      className="flex size-9 items-center justify-center rounded-lg font-mk-display text-sm font-bold text-white"
                      style={{ background: c }}
                      aria-hidden="true"
                    >
                      {l}
                    </span>
                  ))}
                </span>
              )}
            </MenuLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Solutions & Resources ---------- */

function GroupColumn({ group }: { group: NavGroup }) {
  return (
    <div className="p-5">
      <p className="px-2 text-xs font-medium uppercase tracking-wide text-mk-muted-fg">
        {group.title}
      </p>
      <ul className="mt-3 space-y-1">
        {group.items.map((item) => (
          <li key={item.title}>
            <IconRow item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function IconRow({ item }: { item: NavLink }) {
  return (
    <MenuLink
      href={item.href}
      className="flex items-start gap-3 p-2 transition-colors hover:bg-mk-muted"
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-mk-border bg-white text-mk-fg shadow-sm transition-colors group-hover:text-mk-accent">
        <item.icon className="size-4" />
      </span>
      <span>
        <span className="block text-sm font-semibold text-mk-fg">
          {item.title}
        </span>
        <span className="block text-[13px] text-mk-muted-fg">
          {item.description}
        </span>
      </span>
    </MenuLink>
  );
}

export function GroupsMenu({
  groups,
  footer,
}: {
  groups: NavGroup[];
  footer?: ReactNode;
}) {
  return (
    <div className="w-[min(1000px,calc(100vw-2rem))]">
      <div className="grid grid-cols-3 divide-x divide-mk-border">
        {groups.map((g) => (
          <GroupColumn key={g.title} group={g} />
        ))}
      </div>
      {footer}
    </div>
  );
}

export function MarketplaceBar() {
  return (
    <NavigationMenuLink asChild>
      <a
        href={`${APP_DOMAIN}/marketplace`}
        className="group flex items-center justify-between gap-6 border-t border-mk-border bg-mk-muted/60 px-7 py-4 transition-colors hover:bg-mk-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-mk-ring"
      >
        <span>
          <span className="flex items-center gap-2 text-sm font-semibold text-mk-fg">
            Program marketplace
            <span className="rounded-full bg-mk-accent/10 px-2 py-0.5 text-[11px] font-semibold text-mk-accent">
              New
            </span>
          </span>
          <span className="mt-0.5 flex items-center gap-1 text-[13px] text-mk-muted-fg">
            Find affiliate programs to join
            <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </span>
        <span className="flex -space-x-2" aria-hidden="true">
          {["#7C5CFF", "#12B886", "#2F45FF", "#C2410C", "#101A33"].map((c) => (
            <span
              key={c}
              className="flex size-9 items-center justify-center rounded-full border-2 border-white"
              style={{ background: c }}
            >
              <Store className="size-4 text-white" />
            </span>
          ))}
        </span>
      </a>
    </NavigationMenuLink>
  );
}
