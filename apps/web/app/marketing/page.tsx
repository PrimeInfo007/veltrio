import { AnalyticsChartMock } from "@/ui/marketing/analytics-chart";
import {
  CtaBanner,
  FeatureGrid,
  FeatureSplit,
  HeroGlow,
  Section,
  SectionHeading,
} from "@/ui/marketing/blocks";
import { HeroShortener } from "@/ui/marketing/hero-shortener";
import {
  BreakdownMock,
  CodeBlock,
  CustomDomainsMock,
  DeviceTargetingMock,
  EventsMock,
  FunnelMock,
  LinkBuilderMock,
  QrMock,
  UtmMock,
} from "@/ui/marketing/mockups";
import { PartnerProgramMock } from "@/ui/marketing/partner-mockups";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/marketing/ui/accordion";
import { Badge } from "@/ui/marketing/ui/badge";
import { Button } from "@/ui/marketing/ui/button";
import { constructMetadata } from "@dub/utils";
import {
  BarChart3,
  Blocks,
  CalendarClock,
  ChevronRight,
  Code2,
  Globe2,
  Handshake,
  Link2,
  Lock,
  Split,
} from "lucide-react";
import Link from "next/link";

export const metadata = constructMetadata({
  fullTitle: "Veltrio – Short links that tell you who clicked",
  description:
    "Branded short links, click analytics and partner programs on veltrio.link or your own domain.",
});

const INTEGRATIONS = [
  { name: "Stripe", color: "#635BFF" },
  { name: "Shopify", color: "#5E8E3E" },
  { name: "Zapier", color: "#FF4F00" },
  { name: "Slack", color: "#4A154B" },
  { name: "Segment", color: "#52BD94" },
  { name: "HubSpot", color: "#FF7A59" },
  { name: "Google Ads", color: "#4285F4" },
  { name: "Intercom", color: "#1F8DED" },
  { name: "AppsFlyer", color: "#00C2FF" },
];

const API_SNIPPET = `curl https://api.veltrio.link/links \\
  -H "Authorization: Bearer $VELTRIO_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://northwindgoods.com/autumn",
    "key": "autumn",
    "tagNames": ["instagram"]
  }'`;

const FAQ = [
  {
    q: "Is there a free plan?",
    a: "Yes. Create an account and start on the free plan. You can upgrade from your workspace settings whenever you need more links or analytics history.",
  },
  {
    q: "Can I use my own domain?",
    a: "Yes. Add a domain like go.yourbrand.com in your workspace, point its DNS at Veltrio, and every new link can use it. veltrio.link is always available as a default.",
  },
  {
    q: "What do you track when someone clicks?",
    a: "Each click records the time, country and city, device, browser, operating system and referrer. With conversion tracking switched on you also see the sign-ups and sales that followed.",
  },
  {
    q: "Can I create links from my own app?",
    a: "Yes. Every workspace gets API keys, so you can create, update and read analytics for links from your own code.",
  },
  {
    q: "Can I pay people who promote my product?",
    a: "Yes. Veltrio Partners lets you set commission rules, give each partner a referral link and dashboard, and pay them out in one batch.",
  },
];

export default function LandingPage() {
  return (
    <>
      <section className="relative px-4 pb-20 pt-14 sm:px-10 sm:pt-24">
        <HeroGlow />
        <div className="relative flex flex-col items-center text-center">
          <Link href="/partners" className="group">
            <Badge className="pr-2 transition-colors group-hover:border-mk-accent/40">
              <Handshake className="size-3.5 text-mk-accent" />
              Run your own affiliate program
              <ChevronRight className="size-3.5 text-mk-muted-fg transition-transform group-hover:translate-x-0.5" />
            </Badge>
          </Link>
          <h1 className="mt-6 max-w-3xl text-balance font-mk-display text-[2.75rem] font-extrabold leading-[1] tracking-[-0.05em] text-mk-fg sm:text-7xl">
            Short links that tell you who clicked
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg text-mk-muted-fg">
            Veltrio turns long URLs into clean, branded links, then shows you
            where every click came from and what it turned into.
          </p>
          <div className="mt-10 w-full">
            <HeroShortener />
          </div>
        </div>
      </section>

      <Section id="links">
        <SectionHeading
          badge="Links"
          badgeIcon={Link2}
          title="Short links that look like they came from you"
          description="Create a link in seconds, put it on your own domain, and decide exactly where each visitor ends up."
        />
        <div className="mt-12">
          <LinkBuilderMock />
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <FeatureSplit
            title="Your domain, not ours"
            description="Use veltrio.link or connect go.yourbrand.com. Links on a domain people recognize get clicked more."
            visual={<CustomDomainsMock />}
          />
          <FeatureSplit
            title="QR codes for every link"
            description="Each link comes with a QR code in your colors, ready for packaging, posters and slides."
            visual={<QrMock />}
          />
          <FeatureSplit
            title="UTM tags without the spreadsheet"
            description="Fill in source, medium and campaign once and save it as a template for the whole team."
            visual={<UtmMock />}
          />
          <FeatureSplit
            title="Send each device to the right place"
            description="Open the App Store on iPhone, Google Play on Android, and your website everywhere else."
            visual={<DeviceTargetingMock />}
          />
        </div>
        <div className="mt-6">
          <FeatureGrid
            columns={4}
            features={[
              { icon: Lock, title: "Password protection", description: "Keep links private to people with the password." },
              { icon: CalendarClock, title: "Expiring links", description: "Turn a link off on a date, or send it somewhere new." },
              { icon: Globe2, title: "Geo targeting", description: "Send visitors from each country to a local page." },
              { icon: Split, title: "A/B testing", description: "Split traffic between pages and keep the winner." },
            ]}
          />
        </div>
        <div className="mt-10 flex justify-center">
          <Button variant="outline" asChild>
            <Link href="/links">
              See everything links can do
              <ChevronRight />
            </Link>
          </Button>
        </div>
      </Section>

      <Section id="analytics" className="bg-mk-muted/40">
        <SectionHeading
          badge="Analytics"
          badgeIcon={BarChart3}
          title="Every click, counted and explained"
          description="Watch clicks arrive in real time, then follow them through to the sign-ups and sales they became."
        />
        <div className="mt-12">
          <AnalyticsChartMock />
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <FeatureSplit
            title="Clicks to customers"
            description="Connect Stripe or Shopify and see which links drove revenue, not just traffic."
            visual={<FunnelMock />}
          />
          <FeatureSplit
            title="Where your audience is"
            description="Break clicks down by country, city, device, browser and referrer."
            visual={<BreakdownMock />}
          />
          <FeatureSplit
            title="A live feed of activity"
            description="Every click, sign-up and sale appears as it happens, ready to export."
            visual={<EventsMock />}
          />
        </div>
        <div className="mt-10 flex justify-center">
          <Button variant="outline" asChild>
            <Link href="/analytics">
              Explore analytics
              <ChevronRight />
            </Link>
          </Button>
        </div>
      </Section>

      <Section id="partners">
        <SectionHeading
          badge="Partners"
          badgeIcon={Handshake}
          title="Turn your fans into a sales team"
          description="Give creators and customers their own referral links, reward them for the sales they bring in, and pay everyone in one go."
        >
          <Button asChild>
            <Link href="/partners">
              Learn about partner programs
              <ChevronRight />
            </Link>
          </Button>
        </SectionHeading>
        <div className="mt-12">
          <PartnerProgramMock />
        </div>
      </Section>

      <Section id="integrations" className="bg-mk-muted/40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            align="left"
            badge="Integrations"
            badgeIcon={Blocks}
            title="Works with the tools you already use"
            description="Send link data to your CRM, record sales from your payment provider, and get alerts in Slack."
          />
          <ul className="grid grid-cols-3 gap-3">
            {INTEGRATIONS.map((i) => (
              <li
                key={i.name}
                className="flex flex-col items-center gap-2.5 rounded-xl border border-mk-border bg-white px-2 py-5 text-center shadow-sm"
              >
                <span
                  className="flex size-10 items-center justify-center rounded-xl font-mk-display text-lg font-bold text-white"
                  style={{ background: i.color }}
                  aria-hidden="true"
                >
                  {i.name[0]}
                </span>
                <span className="text-sm font-medium text-mk-fg">{i.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="api">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            align="left"
            badge="API"
            badgeIcon={Code2}
            title="Create links from your own code"
            description="A REST API with keys per workspace. Generate links when a user signs up, an order ships or a post goes live, then read the analytics back."
          />
          <CodeBlock title="Create a link" code={API_SNIPPET} />
        </div>
      </Section>

      <Section id="faq">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            align="left"
            title="Questions people ask"
            description="Something else on your mind? Sign up and ask from inside your workspace."
          />
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
