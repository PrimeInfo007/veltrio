import {
  CtaBanner,
  FeatureGrid,
  FeatureSplit,
  PageHero,
  Section,
  SectionHeading,
} from "@/ui/marketing/blocks";
import {
  FraudMock,
  PartnerPortalMock,
  PartnerProgramMock,
  RewardsMock,
} from "@/ui/marketing/partner-mockups";
import { constructMetadata } from "@dub/utils";
import {
  Banknote,
  Code2,
  Gift,
  Handshake,
  Layers,
  LayoutDashboard,
  Mail,
  MessageSquare,
  Store,
  Trophy,
} from "lucide-react";

export const metadata = constructMetadata({
  fullTitle: "Partners – Veltrio",
  description:
    "Launch an affiliate and referral program: referral links, flexible commissions, a partner portal and automatic payouts.",
});

const STEPS = [
  {
    title: "Set up your program",
    description: "Choose what you reward – clicks, sign-ups or sales – and how much each one is worth.",
  },
  {
    title: "Invite partners",
    description: "Send invites or share an application page. Approved partners get a referral link and dashboard.",
  },
  {
    title: "Pay out in one batch",
    description: "Commissions add up automatically. Review them, then pay every partner at once.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        badge="Partners"
        badgeIcon={Handshake}
        title="Turn your fans into a sales team"
        description="Launch an affiliate or referral program in an afternoon. Veltrio tracks every referral, works out commissions and pays your partners."
      >
        <PartnerProgramMock />
      </PageHero>

      <Section>
        <SectionHeading
          title="Everything a partner program needs"
          description="Tracking, rewards, a portal for partners and payouts, built on the same links and analytics you already use."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <FeatureSplit
            title="Rewards your way"
            description="Pay a percentage of sales, a flat fee per sign-up or a little for every click, with limits you choose."
            visual={<RewardsMock />}
          />
          <FeatureSplit
            title="A portal for partners"
            description="Partners get their own login with referral links, stats and earnings, so they stop emailing you for numbers."
            visual={<PartnerPortalMock />}
          />
          <FeatureSplit
            title="Fraud checks built in"
            description="Self-referrals and duplicate accounts are flagged before you pay for them."
            visual={<FraudMock />}
          />
        </div>
      </Section>

      <Section className="bg-mk-muted/40">
        <SectionHeading title="Launch in three steps" />
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
      </Section>

      <Section>
        <SectionHeading
          title="Grow the program, not your workload"
          description="Tools that keep a program with hundreds of partners running smoothly."
        />
        <div className="mt-12">
          <FeatureGrid
            features={[
              { icon: Banknote, title: "Global payouts", description: "Pay partners around the world through Stripe or PayPal." },
              { icon: Layers, title: "Partner groups", description: "Give your best partners higher rates or special discounts." },
              { icon: Trophy, title: "Bounties", description: "Reward one-off tasks like a review, a video or hitting a goal." },
              { icon: Gift, title: "Dual-sided rewards", description: "Give referred customers a discount while partners earn." },
              { icon: MessageSquare, title: "Messaging", description: "Talk to partners in one place instead of scattered email threads." },
              { icon: Mail, title: "Automatic emails", description: "Partners hear about approvals, new sales and payouts without you lifting a finger." },
              { icon: Store, title: "Application page", description: "A branded page where anyone can apply to join your program." },
              { icon: LayoutDashboard, title: "Embedded dashboard", description: "Put a referral dashboard inside your own app for customers." },
              { icon: Code2, title: "API and webhooks", description: "Sync partners, commissions and payouts with your own systems." },
            ]}
          />
        </div>
      </Section>

      <CtaBanner
        title="Start your partner program"
        description="Create a free account, set your first reward and invite your first partner today."
      />
    </>
  );
}
