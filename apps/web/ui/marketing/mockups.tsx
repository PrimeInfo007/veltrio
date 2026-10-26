import { Logo } from "@dub/ui";
import { cn } from "@dub/utils";
import {
  Apple,
  BadgeCheck,
  Calendar,
  Copy,
  Globe,
  Lock,
  Monitor,
  MousePointerClick,
  QrCode,
  Smartphone,
  Tag,
  UserPlus,
  Wallet,
} from "lucide-react";
import { ReactNode } from "react";
import { Badge } from "./ui/badge";

// Window chrome around product mockups
export function MockWindow({
  children,
  className,
  title,
}: {
  children: ReactNode;
  className?: string;
  title?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-mk-border bg-white shadow-[0_24px_60px_-28px_hsl(var(--mk-fg)/0.35)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-mk-border bg-mk-muted/60 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#FF6159]" />
        <span className="size-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="size-2.5 rounded-full bg-[#28C941]" />
        {title && (
          <span className="ml-2 truncate text-xs font-medium text-mk-muted-fg">
            {title}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-xs font-medium text-mk-muted-fg">{label}</p>
      <div className="mt-1.5 flex h-9 items-center gap-2 rounded-lg border border-mk-border bg-white px-3 text-sm text-mk-fg">
        {children}
      </div>
    </div>
  );
}

// Deterministic QR-looking pattern (decorative)
export function QrGlyph({ className }: { className?: string }) {
  const size = 21;
  const cells: [number, number][] = [];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const inFinder =
        (x < 7 && y < 7) || (x > 13 && y < 7) || (x < 7 && y > 13);
      if (inFinder) continue;
      if ((x * 7 + y * 13 + x * y) % 5 < 2) cells.push([x, y]);
    }
  }
  const finder = (fx: number, fy: number) => (
    <g key={`${fx}-${fy}`}>
      <rect x={fx} y={fy} width={7} height={7} rx={1.5} fill="currentColor" />
      <rect x={fx + 1} y={fy + 1} width={5} height={5} rx={1} fill="#fff" />
      <rect x={fx + 2} y={fy + 2} width={3} height={3} rx={0.6} fill="currentColor" />
    </g>
  );
  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className={cn("text-mk-fg", className)}
      aria-hidden="true"
    >
      {cells.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill="currentColor" />
      ))}
      {finder(0, 0)}
      {finder(14, 0)}
      {finder(0, 14)}
      <rect x={8.5} y={8.5} width={4} height={4} rx={1} fill="#fff" />
      <circle cx={10.5} cy={10.5} r={1.5} fill="currentColor" />
    </svg>
  );
}

export function LinkBuilderMock() {
  return (
    <MockWindow title="New link" className="mx-auto w-full max-w-4xl text-left">
      <div className="grid md:grid-cols-[1fr_280px]">
        <div className="space-y-4 p-5 sm:p-6">
          <Field label="Destination URL">
            <Globe className="size-4 text-mk-muted-fg" />
            <span className="truncate">
              https://northwindgoods.com/collections/autumn-drop
            </span>
          </Field>
          <div className="grid gap-4 sm:grid-cols-[150px_1fr]">
            <Field label="Domain">veltrio.link</Field>
            <Field label="Short link">autumn</Field>
          </div>
          <Field label="Tags">
            <Tag className="size-4 text-mk-muted-fg" />
            <Badge variant="accent" className="py-0.5">
              Instagram
            </Badge>
            <Badge variant="mint" className="py-0.5">
              Autumn launch
            </Badge>
          </Field>
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              { icon: Calendar, label: "Expires Nov 30" },
              { icon: Lock, label: "Password" },
              { icon: Smartphone, label: "iOS & Android targeting" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-mk-border px-3 py-1 text-xs font-medium text-mk-fg"
              >
                <Icon className="size-3.5 text-mk-accent" />
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-4 border-t border-mk-border bg-mk-muted/50 p-5 sm:p-6 md:border-l md:border-t-0">
          <div>
            <p className="text-xs font-medium text-mk-muted-fg">QR code</p>
            <div className="mt-1.5 flex justify-center rounded-lg border border-mk-border bg-white p-4">
              <QrGlyph className="size-28" />
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-mk-muted-fg">
              Link preview
            </p>
            <div className="mt-1.5 overflow-hidden rounded-lg border border-mk-border bg-white">
              <div className="h-20 bg-[linear-gradient(135deg,#F7C59F,#E76F51_55%,#2A9D8F)]" />
              <div className="p-2.5">
                <p className="text-xs font-semibold text-mk-fg">
                  The autumn drop is here
                </p>
                <p className="text-[11px] text-mk-muted-fg">
                  northwindgoods.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MockWindow>
  );
}

export function ShortLinkRow({
  domain = "veltrio.link",
  slug,
  destination,
  clicks,
  className,
}: {
  domain?: string;
  slug: string;
  destination: string;
  clicks: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-xl border border-mk-border bg-white p-3 shadow-sm",
        className,
      )}
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-mk-fg">
        <Logo className="size-5 text-white" />
      </span>
      <div className="min-w-0 flex-1 text-left">
        <p className="flex items-center gap-1.5 text-sm font-semibold text-mk-fg">
          <span className="truncate">
            {domain}/{slug}
          </span>
          <Copy className="size-3.5 shrink-0 text-mk-muted-fg" />
        </p>
        <p className="truncate text-xs text-mk-muted-fg">↳ {destination}</p>
      </div>
      <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-mk-muted px-2 py-1 text-xs font-medium text-mk-fg">
        <MousePointerClick className="size-3.5" />
        {clicks}
      </span>
    </div>
  );
}

export function CustomDomainsMock() {
  return (
    <div className="w-full max-w-sm space-y-2.5">
      {[
        { domain: "go.northwind.co", slug: "spring", clicks: "18.2K" },
        { domain: "links.acme.dev", slug: "docs", clicks: "6.4K" },
        { domain: "veltrio.link", slug: "launch", clicks: "2.4K" },
      ].map((d, i) => (
        <div
          key={d.domain}
          className={cn(
            "flex items-center justify-between rounded-xl border border-mk-border bg-white px-3.5 py-2.5 text-sm shadow-sm",
            i === 1 && "translate-x-4",
          )}
        >
          <span className="flex items-center gap-2 font-medium text-mk-fg">
            <Globe className="size-4 text-mk-accent" />
            {d.domain}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-mk-mint-fg">
            <BadgeCheck className="size-3.5" />
            Verified
          </span>
        </div>
      ))}
    </div>
  );
}

export function QrMock() {
  return (
    <div className="flex items-center gap-5">
      <div className="rounded-2xl border border-mk-border bg-white p-4 shadow-sm">
        <QrGlyph className="size-32" />
      </div>
      <div className="space-y-2">
        {["#101A33", "#2F45FF", "#0B6B4A"].map((c) => (
          <span
            key={c}
            className="block size-7 rounded-full border-2 border-white shadow ring-1 ring-mk-border"
            style={{ background: c }}
          />
        ))}
      </div>
    </div>
  );
}

export function UtmMock() {
  return (
    <div className="w-full max-w-sm space-y-2 rounded-xl border border-mk-border bg-white p-4 text-left shadow-sm">
      {[
        ["Source", "instagram"],
        ["Medium", "story"],
        ["Campaign", "autumn_launch"],
        ["Content", "carousel_v2"],
      ].map(([k, v]) => (
        <div
          key={k}
          className="grid grid-cols-[90px_1fr] items-center gap-2 text-sm"
        >
          <span className="text-mk-muted-fg">{k}</span>
          <span className="rounded-md border border-mk-border px-2.5 py-1 font-medium text-mk-fg">
            {v}
          </span>
        </div>
      ))}
    </div>
  );
}

export function DeviceTargetingMock() {
  return (
    <div className="w-full max-w-sm space-y-2.5">
      {[
        { icon: Apple, label: "iOS", to: "apps.apple.com/northwind" },
        { icon: Smartphone, label: "Android", to: "play.google.com/northwind" },
        { icon: Monitor, label: "Everyone else", to: "northwindgoods.com" },
      ].map(({ icon: Icon, label, to }) => (
        <div
          key={label}
          className="flex items-center gap-3 rounded-xl border border-mk-border bg-white px-3.5 py-2.5 text-sm shadow-sm"
        >
          <Icon className="size-4 text-mk-accent" />
          <span className="w-24 shrink-0 font-medium text-mk-fg">{label}</span>
          <span className="truncate text-mk-muted-fg">{to}</span>
        </div>
      ))}
    </div>
  );
}

const COUNTRY_ROWS = [
  { name: "United States", value: 42 },
  { name: "India", value: 21 },
  { name: "United Kingdom", value: 14 },
  { name: "Germany", value: 9 },
];

export function BreakdownMock({
  rows = COUNTRY_ROWS,
  title = "Top countries",
}: {
  rows?: { name: string; value: number }[];
  title?: string;
}) {
  return (
    <div className="w-full max-w-sm rounded-xl border border-mk-border bg-white p-4 text-left shadow-sm">
      <p className="text-sm font-semibold text-mk-fg">{title}</p>
      <ul className="mt-3 space-y-2">
        {rows.map((r) => (
          <li key={r.name} className="relative overflow-hidden rounded-md">
            <span
              className="absolute inset-y-0 left-0 rounded-md bg-mk-accent/10"
              style={{ width: `${r.value * 2}%` }}
            />
            <span className="relative flex justify-between px-2.5 py-1.5 text-sm">
              <span className="text-mk-fg">{r.name}</span>
              <span className="font-medium tabular-nums text-mk-fg">
                {r.value}%
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function EventsMock() {
  const events = [
    { icon: MousePointerClick, label: "Click", who: "Lisbon, Portugal", when: "2s ago" },
    { icon: UserPlus, label: "Sign-up", who: "maya@northwind.co", when: "14s ago" },
    { icon: Wallet, label: "Sale · $129", who: "maya@northwind.co", when: "1m ago" },
    { icon: QrCode, label: "QR scan", who: "Austin, United States", when: "3m ago" },
  ];
  return (
    <div className="w-full max-w-sm space-y-2">
      {events.map(({ icon: Icon, label, who, when }) => (
        <div
          key={label}
          className="flex items-center gap-3 rounded-xl border border-mk-border bg-white px-3.5 py-2.5 text-sm shadow-sm"
        >
          <span className="flex size-7 items-center justify-center rounded-full bg-mk-accent/10">
            <Icon className="size-3.5 text-mk-accent" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-medium text-mk-fg">{label}</span>
            <span className="block truncate text-xs text-mk-muted-fg">
              {who}
            </span>
          </span>
          <span className="text-xs text-mk-muted-fg">{when}</span>
        </div>
      ))}
    </div>
  );
}

export function FunnelMock() {
  const steps = [
    { label: "Clicks", value: "12,840", width: 100 },
    { label: "Sign-ups", value: "1,926", width: 62 },
    { label: "Sales", value: "412", width: 30 },
  ];
  return (
    <div className="w-full max-w-sm space-y-3 text-left">
      {steps.map((s) => (
        <div key={s.label}>
          <div className="flex justify-between text-sm">
            <span className="text-mk-muted-fg">{s.label}</span>
            <span className="font-semibold tabular-nums text-mk-fg">
              {s.value}
            </span>
          </div>
          <div className="mt-1 h-3 rounded-full bg-white ring-1 ring-mk-border">
            <div
              className="h-full rounded-full bg-mk-accent"
              style={{ width: `${s.width}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function CodeBlock({ code, title }: { code: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0D1530] text-left shadow-xl">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <span className="text-xs font-medium text-white/60">{title}</span>
        <span className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
        </span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-[#C9D4FF]">
        <code>{code}</code>
      </pre>
    </div>
  );
}
