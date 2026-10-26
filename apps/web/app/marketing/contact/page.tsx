import { HeroGlow } from "@/ui/marketing/blocks";
import { APP_DOMAIN, constructMetadata } from "@dub/utils";
import { Building2, ChevronRight, LifeBuoy, Mail } from "lucide-react";

export const metadata = constructMetadata({
  fullTitle: "Contact – Veltrio",
  description: "Get help with your account or talk to us about Enterprise.",
});

const OPTIONS = [
  {
    icon: LifeBuoy,
    title: "Get help with your account",
    description:
      "Signed in? Open the help menu in your dashboard and we'll pick it up with your workspace details attached.",
    cta: "Go to dashboard",
    href: APP_DOMAIN,
  },
  {
    icon: Mail,
    title: "Email support",
    description:
      "Questions about links, domains, billing or anything else.",
    cta: "support@veltrio.link",
    href: "mailto:support@veltrio.link",
  },
  {
    icon: Building2,
    title: "Talk to sales",
    description:
      "Need higher limits, SSO or custom invoicing? Tell us about your team and what you're planning.",
    cta: "hello@veltrio.link",
    href: "mailto:hello@veltrio.link?subject=Veltrio%20Enterprise",
  },
];

export default function ContactPage() {
  return (
    <section className="relative px-4 pb-24 pt-14 sm:px-10 sm:pt-20">
      <HeroGlow />
      <div className="relative">
        <h1 className="mx-auto max-w-2xl text-balance text-center font-mk-display text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.045em] text-mk-fg sm:text-6xl">
          How can we help?
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-center text-lg text-mk-muted-fg">
          Pick the option that fits and you&apos;ll reach the right person.
        </p>
        <ul className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-3">
          {OPTIONS.map(({ icon: Icon, title, description, cta, href }) => (
            <li key={title}>
              <a
                href={href}
                className="group flex h-full flex-col rounded-2xl border border-mk-border bg-white p-6 transition-colors hover:border-mk-fg/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mk-ring"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-mk-accent/10">
                  <Icon className="size-5 text-mk-accent" />
                </span>
                <h2 className="mt-5 font-semibold text-mk-fg">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-mk-muted-fg">
                  {description}
                </p>
                <span className="mt-6 flex items-center gap-1 text-sm font-semibold text-mk-accent">
                  {cta}
                  <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
