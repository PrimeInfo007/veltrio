import {
  CtaBanner,
  FeatureGrid,
  FeatureSplit,
  PageHero,
  Section,
  SectionHeading,
} from "@/ui/marketing/blocks";
import {
  CustomDomainsMock,
  DeviceTargetingMock,
  LinkBuilderMock,
  QrMock,
  ShortLinkRow,
  UtmMock,
} from "@/ui/marketing/mockups";
import { constructMetadata } from "@dub/utils";
import {
  CalendarClock,
  EyeOff,
  FileUp,
  FolderTree,
  Globe2,
  Image,
  Link2,
  Lock,
  Split,
  Tags,
  Webhook,
  Zap,
} from "lucide-react";

export const metadata = constructMetadata({
  fullTitle: "Links – Veltrio",
  description:
    "Branded short links with custom domains, QR codes, UTM templates, device targeting and more.",
});

const STEPS = [
  {
    title: "Paste a long link",
    description: "Product pages, campaign URLs, docs – anything with a web address.",
  },
  {
    title: "Choose how it looks",
    description: "Pick a domain and a name like veltrio.link/spring-sale, add tags and UTM parameters.",
  },
  {
    title: "Share it anywhere",
    description: "Copy the link or download the QR code. Clicks show up in your dashboard within seconds.",
  },
];

export default function LinksPage() {
  return (
    <>
      <PageHero
        badge="Links"
        badgeIcon={Link2}
        title="Short links people trust and click"
        description="Clean, branded links on your own domain, with every control you need over where each visitor lands."
      >
        <div className="mx-auto max-w-xl space-y-3">
          <ShortLinkRow
            domain="go.northwind.co"
            slug="spring"
            destination="northwindgoods.com/collections/spring-2027?utm_source=newsletter"
            clicks="18.2K clicks"
          />
          <ShortLinkRow
            slug="launch"
            destination="producthunt.com/posts/northwind-goods"
            clicks="2,417 clicks"
            className="sm:translate-x-8"
          />
        </div>
      </PageHero>

      <Section>
        <SectionHeading
          title="Everything about a link, in one place"
          description="Destination, domain, tags, QR code and social preview, all set from a single screen."
        />
        <div className="mt-12">
          <LinkBuilderMock />
        </div>
      </Section>

      <Section className="bg-mk-muted/40">
        <div className="grid gap-6 md:grid-cols-2">
          <FeatureSplit
            title="Bring your own domain"
            description="Connect as many domains as you need. We check the DNS and issue SSL certificates for you."
            visual={<CustomDomainsMock />}
          />
          <FeatureSplit
            title="QR codes in your colors"
            description="Every link has a QR code with your logo and colors. Scans are tracked just like clicks."
            visual={<QrMock />}
          />
          <FeatureSplit
            title="UTM templates"
            description="Save your campaign parameters once and apply them to any link in two clicks."
            visual={<UtmMock />}
          />
          <FeatureSplit
            title="Device and app targeting"
            description="Send iPhone users to the App Store, Android users to Google Play, and everyone else to your site."
            visual={<DeviceTargetingMock />}
          />
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Control every detail"
          description="The small settings that save you from reprinting a poster or rebuilding a campaign."
        />
        <div className="mt-12">
          <FeatureGrid
            features={[
              { icon: Lock, title: "Password protection", description: "Only people with the password can reach the destination." },
              { icon: CalendarClock, title: "Expiring links", description: "Switch a link off on a date, or send late visitors somewhere new." },
              { icon: Globe2, title: "Geo targeting", description: "Send visitors from each country to the right local page." },
              { icon: Split, title: "A/B testing", description: "Split traffic between destinations and compare results." },
              { icon: Image, title: "Custom link previews", description: "Choose the title, description and image shown on social media." },
              { icon: EyeOff, title: "Link cloaking", description: "Keep your short link in the address bar after the redirect." },
              { icon: Tags, title: "Tags and folders", description: "Organize thousands of links by campaign, team or client." },
              { icon: FileUp, title: "Bulk import", description: "Bring links over from a CSV file or another link shortener." },
              { icon: Webhook, title: "Webhooks", description: "Get notified in your own systems when links are clicked." },
            ]}
          />
        </div>
      </Section>

      <Section className="bg-mk-muted/40">
        <SectionHeading title="From long URL to tracked link in under a minute" />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className="rounded-2xl border border-mk-border bg-white p-6"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-mk-fg font-mk-display font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 font-semibold text-mk-fg">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-mk-muted-fg">
                {s.description}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-8 flex items-center justify-center gap-2 text-sm text-mk-muted-fg">
          <Zap className="size-4 text-mk-accent" />
          Short links redirect instantly, with no landing page in between.
        </p>
      </Section>

      <CtaBanner title="Make your first branded link" />
    </>
  );
}
