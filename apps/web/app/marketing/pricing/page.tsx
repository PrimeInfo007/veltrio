import { CtaBanner, HeroGlow, Section } from "@/ui/marketing/blocks";
import { PricingPlans } from "@/ui/marketing/pricing-plans";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/marketing/ui/accordion";
import { constructMetadata } from "@dub/utils";

export const metadata = constructMetadata({
  fullTitle: "Pricing – Veltrio",
  description:
    "Start free, then pick the plan that fits how many links and clicks you track.",
});

const FAQ = [
  {
    q: "What counts as a tracked event?",
    a: "Every click, QR scan, lead and sale recorded on your links counts as one event. Your monthly allowance resets at the start of each billing period.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes. Upgrade or downgrade any time from your workspace settings. Upgrades take effect straight away.",
  },
  {
    q: "What happens if I go over my limits?",
    a: "Your links keep redirecting. You'll get a heads-up by email and can upgrade to keep creating links and recording new events.",
  },
  {
    q: "Do you offer custom plans?",
    a: "Yes. If you need higher limits, SSO or custom invoicing, contact us about Enterprise.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="relative px-4 pb-20 pt-14 sm:px-8 sm:pt-20">
        <HeroGlow />
        <div className="relative">
          <h1 className="mx-auto max-w-2xl text-balance text-center font-mk-display text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.045em] text-mk-fg sm:text-6xl">
            Simple pricing that grows with you
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-center text-lg text-mk-muted-fg">
            Start free. Upgrade when you need more links, more history or a
            partner program.
          </p>
          <div className="mt-12">
            <PricingPlans />
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <h2 className="font-mk-display text-3xl font-bold tracking-[-0.035em] text-mk-fg sm:text-[2.5rem]">
            Pricing questions
          </h2>
          <Accordion type="single" collapsible className="border-t border-mk-border">
            {FAQ.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
