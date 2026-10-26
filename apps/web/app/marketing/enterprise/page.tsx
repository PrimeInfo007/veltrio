import {
  FeatureGrid,
  HeroGlow,
  Section,
  SectionHeading,
} from "@/ui/marketing/blocks";
import { Badge } from "@/ui/marketing/ui/badge";
import { Button } from "@/ui/marketing/ui/button";
import { constructMetadata } from "@dub/utils";
import {
  Building2,
  FileText,
  Gauge,
  Globe2,
  KeyRound,
  Receipt,
  ScrollText,
  ShieldCheck,
  Users,
} from "lucide-react";
import Link from "next/link";

export const metadata = constructMetadata({
  fullTitle: "Enterprise – Veltrio",
  description:
    "SAML SSO, directory sync, audit logs and custom limits for large teams.",
});

export default function EnterprisePage() {
  return (
    <>
      <section className="relative px-4 pb-20 pt-14 sm:px-10 sm:pt-20">
        <HeroGlow />
        <div className="relative flex flex-col items-center text-center">
          <Badge>
            <Building2 className="size-3.5 text-mk-accent" />
            Enterprise
          </Badge>
          <h1 className="mt-5 max-w-3xl text-balance font-mk-display text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.045em] text-mk-fg sm:text-6xl">
            Veltrio for teams that need more control
          </h1>
          <p className="mt-5 max-w-xl text-lg text-mk-muted-fg">
            Single sign-on, directory sync, audit logs and limits sized to your
            traffic, on a contract that works for your procurement team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="/contact">Talk to us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">See all plans</Link>
            </Button>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          title="Security and admin controls"
          description="Everything your IT and security teams will ask about."
        />
        <div className="mt-12">
          <FeatureGrid
            features={[
              { icon: KeyRound, title: "SAML single sign-on", description: "Sign in through Okta, Azure AD, Google Workspace or any SAML provider." },
              { icon: Users, title: "SCIM directory sync", description: "Add and remove people automatically from your identity provider." },
              { icon: ShieldCheck, title: "Roles and permissions", description: "Decide who can create links, see analytics or manage billing." },
              { icon: ScrollText, title: "Audit logs", description: "Export a record of who changed what, and when." },
              { icon: Gauge, title: "Custom limits", description: "Link, event and API limits sized to your real volume." },
              { icon: Globe2, title: "Hundreds of domains", description: "Run every brand and region on its own short domain." },
              { icon: Receipt, title: "Invoicing", description: "Annual contracts with invoices instead of card payments." },
              { icon: FileText, title: "Security review", description: "We'll work through your security questionnaire with you." },
              { icon: Building2, title: "Multiple workspaces", description: "Separate teams, brands or clients, each with its own settings." },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
