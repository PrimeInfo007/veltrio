import { AnalyticsChartMock } from "@/ui/marketing/analytics-chart";
import {
  CtaBanner,
  FeatureGrid,
  FeatureSplit,
  PageHero,
  Section,
  SectionHeading,
} from "@/ui/marketing/blocks";
import {
  BreakdownMock,
  EventsMock,
  FunnelMock,
} from "@/ui/marketing/mockups";
import { constructMetadata } from "@dub/utils";
import {
  BarChart3,
  Download,
  Filter,
  Globe2,
  Laptop,
  MousePointerClick,
  QrCode,
  Radio,
  Share2,
  ShoppingCart,
  UserPlus,
  Users,
} from "lucide-react";

export const metadata = constructMetadata({
  fullTitle: "Analytics – Veltrio",
  description:
    "Real-time click analytics with conversion tracking: see where clicks come from and which links drive sign-ups and sales.",
});

const REFERRERS = [
  { name: "instagram.com", value: 38 },
  { name: "Newsletter", value: 24 },
  { name: "google.com", value: 17 },
  { name: "x.com", value: 11 },
];

const DEVICES = [
  { name: "Mobile", value: 64 },
  { name: "Desktop", value: 31 },
  { name: "Tablet", value: 5 },
];

export default function AnalyticsPage() {
  return (
    <>
      <PageHero
        badge="Analytics"
        badgeIcon={BarChart3}
        title="Know what every link is worth"
        description="See where clicks come from in real time, then follow them through to the sign-ups and sales they turned into."
      >
        <AnalyticsChartMock />
      </PageHero>

      <Section>
        <SectionHeading
          title="More than a click counter"
          description="Connect your sign-up flow and payment provider, and Veltrio ties revenue back to the exact link that earned it."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <FeatureSplit
            title="Clicks, leads and sales"
            description="A funnel for every link, campaign and partner, from first click to paid order."
            visual={<FunnelMock />}
          />
          <FeatureSplit
            title="Real-time events"
            description="A live stream of clicks, QR scans, sign-ups and purchases as they happen."
            visual={<EventsMock />}
          />
          <FeatureSplit
            title="Where people find you"
            description="Referrers show which posts, emails and sites actually send traffic."
            visual={<BreakdownMock rows={REFERRERS} title="Top referrers" />}
          />
        </div>
      </Section>

      <Section className="bg-mk-muted/40">
        <div className="grid gap-6 md:grid-cols-2">
          <FeatureSplit
            title="Countries and cities"
            description="Plan launches and ads around where your audience actually lives."
            visual={<BreakdownMock />}
          />
          <FeatureSplit
            title="Devices and browsers"
            description="Check whether people open your links on a phone before you design the page they land on."
            visual={<BreakdownMock rows={DEVICES} title="Devices" />}
          />
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Built to answer real questions"
          description="Filter, compare and share without exporting to a spreadsheet first."
        />
        <div className="mt-12">
          <FeatureGrid
            features={[
              { icon: Filter, title: "Filters on everything", description: "Slice by link, tag, domain, country, device, referrer or UTM value." },
              { icon: ShoppingCart, title: "Revenue attribution", description: "Record sales from Stripe or Shopify and credit the link that drove them." },
              { icon: UserPlus, title: "Lead tracking", description: "Count sign-ups and demo requests that came from each link." },
              { icon: Users, title: "Customer journeys", description: "See every click and purchase a customer made, in order." },
              { icon: QrCode, title: "QR scan tracking", description: "Offline scans are counted alongside online clicks." },
              { icon: Share2, title: "Shareable dashboards", description: "Send a public stats page to a client or teammate." },
              { icon: Download, title: "CSV export", description: "Download any view for your own reporting." },
              { icon: Radio, title: "Real time", description: "New clicks appear in seconds, not the next morning." },
              { icon: Globe2, title: "Bot filtering", description: "Known bots and link-preview crawlers are kept out of your numbers." },
            ]}
          />
        </div>
      </Section>

      <Section className="bg-mk-muted/40">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: MousePointerClick, title: "Every click", description: "Time, location, device, browser, OS and referrer." },
            { icon: Laptop, title: "Every device", description: "Phones, tablets and desktops, broken out separately." },
            { icon: ShoppingCart, title: "Every sale", description: "Order value and customer, tied to the link that earned it." },
          ].map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-mk-border bg-white p-6">
              <Icon className="size-5 text-mk-accent" />
              <h3 className="mt-4 font-semibold text-mk-fg">{title}</h3>
              <p className="mt-1.5 text-sm text-mk-muted-fg">{description}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner title="See who's clicking your links" />
    </>
  );
}
