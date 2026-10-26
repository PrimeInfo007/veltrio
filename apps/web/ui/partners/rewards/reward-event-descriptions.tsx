import {
  CalendarDays,
  CursorRays,
  Icon,
  InvoiceDollar,
  Nodes4,
  UserPlus,
} from "@dub/ui";
import { EventType } from "@prisma/client";

export const REWARD_EVENT_DESCRIPTIONS: Record<
  EventType,
  {
    icon: Icon;
    title: string;
    description: string;
    bestFor: string;
    learnMoreHref: string;
  }
> = {
  sale: {
    icon: InvoiceDollar,
    title: "Sale reward",
    description: "Reward when revenue is generated",
    bestFor: "partners, creators, and long term partnerships",
    learnMoreHref:
      "https://veltrio.link/help/article/partner-rewards#configuring-reward-types",
  },
  lead: {
    icon: UserPlus,
    title: "Lead reward",
    description: "Reward for sign ups or demos",
    bestFor: "B2B, demos, waitlists, or products with longer sales cycles",
    learnMoreHref:
      "https://veltrio.link/help/article/partner-rewards#configuring-reward-types",
  },
  click: {
    icon: CursorRays,
    title: "Click reward",
    description: "Reward for traffic and reach",
    bestFor: "publishers with high DR sites and trusted partners only",
    learnMoreHref:
      "https://veltrio.link/help/article/partner-rewards#configuring-reward-types",
  },
  referral: {
    icon: Nodes4,
    title: "Partner referral reward",
    description: "Reward when partners refer more partners",
    bestFor: "driving partner growth to your program",
    learnMoreHref: "https://veltrio.link/help/article/partner-referrals",
  },
  custom: {
    icon: CalendarDays,
    title: "Custom reward",
    description: "Pay a fixed amount on a regular cadence",
    bestFor: "retainers and scheduled partner payments",
    learnMoreHref:
      "https://veltrio.link/help/article/retainer-rewards",
  },
};
