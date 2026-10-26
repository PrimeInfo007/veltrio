import { APP_DOMAIN, cn } from "@dub/utils";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

// A full-width band inside the framed page; sections stack with a rule between them
export function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "border-t border-mk-border px-4 py-16 sm:px-10 sm:py-24",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  badge,
  badgeIcon: BadgeIcon,
  title,
  description,
  align = "center",
  children,
}: {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start",
      )}
    >
      {badge && (
        <Badge>
          {BadgeIcon && <BadgeIcon className="size-3.5 text-mk-accent" />}
          {badge}
        </Badge>
      )}
      <h2 className="mt-4 max-w-2xl text-balance font-mk-display text-3xl font-bold leading-[1.08] tracking-[-0.035em] text-mk-fg sm:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-pretty text-lg text-mk-muted-fg">
          {description}
        </p>
      )}
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// Grid of small features separated by hairlines, like a spec sheet
export function FeatureGrid({
  features,
  columns = 3,
}: {
  features: Feature[];
  columns?: 2 | 3 | 4;
}) {
  return (
    <div
      className={cn(
        "grid gap-px overflow-hidden rounded-2xl border border-mk-border bg-mk-border",
        "sm:grid-cols-2",
        columns === 3 && "lg:grid-cols-3",
        columns === 4 && "lg:grid-cols-4",
      )}
    >
      {features.map((f) => (
        <div key={f.title} className="bg-white p-6">
          <span className="flex size-9 items-center justify-center rounded-lg bg-mk-accent/10">
            <f.icon className="size-[18px] text-mk-accent" />
          </span>
          <h3 className="mt-4 font-semibold text-mk-fg">{f.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-mk-muted-fg">
            {f.description}
          </p>
        </div>
      ))}
    </div>
  );
}

// Large feature with a visual on one side
export function FeatureSplit({
  title,
  description,
  visual,
  className,
}: {
  title: string;
  description: string;
  visual: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-2xl border border-mk-border bg-white",
        className,
      )}
    >
      <div className="flex min-h-56 items-center justify-center border-b border-mk-border bg-mk-muted/60 p-6">
        {visual}
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-mk-fg">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-mk-muted-fg">
          {description}
        </p>
      </div>
    </div>
  );
}

export function PageHero({
  badge,
  badgeIcon,
  title,
  description,
  children,
}: {
  badge: string;
  badgeIcon: LucideIcon;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
}) {
  const BadgeIcon = badgeIcon;
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-14 sm:px-10 sm:pt-20">
      <HeroGlow />
      <div className="relative flex flex-col items-center text-center">
        <Badge>
          <BadgeIcon className="size-3.5 text-mk-accent" />
          {badge}
        </Badge>
        <h1 className="mt-5 max-w-3xl text-balance font-mk-display text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.045em] text-mk-fg sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-lg text-mk-muted-fg">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button size="lg" asChild>
            <a href={`${APP_DOMAIN}/register`}>Start for free</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={`${APP_DOMAIN}/login`}>Log in</a>
          </Button>
        </div>
      </div>
      {children && <div className="relative mt-14">{children}</div>}
    </section>
  );
}

// Soft color wash behind heroes
export function HeroGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,hsl(var(--mk-accent)/0.16),transparent_70%)]" />
      <div className="absolute left-[8%] top-24 size-72 rounded-full bg-mk-mint/70 blur-3xl" />
      <div className="absolute right-[6%] top-10 size-72 rounded-full bg-[#E4E1FF] blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--mk-border)/0.7)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--mk-border)/0.7)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_420px)]" />
    </div>
  );
}

export function CtaBanner({
  title = "Start sharing links people trust",
  description = "Create a free account in under a minute and make your first link.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-mk-primary px-4 py-20 text-center text-white sm:px-10 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_80%_at_50%_0%,hsl(var(--mk-accent)/0.45),transparent_70%)]"
      />
      <div className="relative mx-auto flex max-w-2xl flex-col items-center">
        <h2 className="text-balance font-mk-display text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
          {title}
        </h2>
        <p className="mt-4 max-w-lg text-pretty text-lg text-white/70">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button size="lg" variant="inverted" asChild>
            <a href={`${APP_DOMAIN}/register`}>Start for free</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/25 bg-transparent text-white hover:bg-white/10"
            asChild
          >
            <a href={`${APP_DOMAIN}/login`}>Log in</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
