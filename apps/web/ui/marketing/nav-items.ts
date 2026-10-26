import {
  BadgeCheck,
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  Code2,
  Handshake,
  LifeBuoy,
  Link2,
  ListChecks,
  LucideIcon,
  Mail,
  Megaphone,
  Mic,
  Newspaper,
  Puzzle,
  Rocket,
  Shapes,
  Users,
  Webhook,
} from "lucide-react";

export type NavLink = {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

export type NavGroup = {
  title: string;
  items: NavLink[];
};

// Product mega menu: large cards (with previews) + a smaller second row
export const PRODUCT_NAV: NavLink[] = [
  {
    title: "Partners",
    href: "/partners",
    description: "Grow revenue with affiliates and referral partners",
    icon: Handshake,
  },
  {
    title: "Analytics",
    href: "/analytics",
    description: "See who clicked, from where, and what they did next",
    icon: BarChart3,
  },
  {
    title: "Links",
    href: "/links",
    description: "Branded short links, QR codes and UTM tags",
    icon: Link2,
  },
];

export const PRODUCT_NAV_SECONDARY: NavLink[] = [
  {
    title: "Integrations",
    href: "/#integrations",
    description: "Connect Veltrio with the tools you already use",
    icon: Puzzle,
  },
  {
    title: "API",
    href: "/#api",
    description: "Create links and read analytics from your own code",
    icon: Code2,
  },
];

export const SOLUTIONS_NAV: NavGroup[] = [
  {
    title: "Use case",
    items: [
      {
        title: "Affiliate management",
        href: "/partners",
        description: "Manage affiliates and automate payouts",
        icon: Users,
      },
      {
        title: "Marketing attribution",
        href: "/analytics",
        description: "Track which campaigns turn into revenue",
        icon: Megaphone,
      },
      {
        title: "For content creators",
        href: "/links",
        description: "Branded links and audience insights",
        icon: Mic,
      },
    ],
  },
  {
    title: "Stage",
    items: [
      {
        title: "Enterprise",
        href: "/enterprise",
        description: "SSO, directory sync and custom limits",
        icon: Building2,
      },
      {
        title: "Startups",
        href: "/pricing",
        description: "Start free and upgrade as you grow",
        icon: Rocket,
      },
    ],
  },
  {
    title: "Developers",
    items: [
      {
        title: "REST API",
        href: "/#api",
        description: "Create and manage links in code",
        icon: Code2,
      },
      {
        title: "Webhooks",
        href: "/links",
        description: "Get notified of clicks, leads and sales",
        icon: Webhook,
      },
      {
        title: "Integrations",
        href: "/#integrations",
        description: "Stripe, Shopify, Zapier, Slack and more",
        icon: Puzzle,
      },
    ],
  },
];

export const RESOURCES_NAV: NavGroup[] = [
  {
    title: "Help and support",
    items: [
      { title: "Docs", href: "/docs", description: "Developer documentation", icon: BookOpen },
      { title: "Help center", href: "/help", description: "Answers to your questions", icon: LifeBuoy },
      { title: "Contact", href: "/contact", description: "Reach out to support or sales", icon: Mail },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "About", href: "/about", description: "Company, values and team", icon: Users },
      { title: "Careers", href: "/careers", description: "Join the team", icon: Briefcase },
      { title: "Veltrio brand", href: "/brand", description: "Logos, wordmark and colors", icon: Shapes },
    ],
  },
  {
    title: "Updates",
    items: [
      { title: "Blog", href: "/blog", description: "Guides and stories", icon: Newspaper },
      { title: "Changelog", href: "/changelog", description: "Releases and updates", icon: ListChecks },
    ],
  },
];

export const TOP_LINKS = [
  { title: "Customers", href: "/customers", icon: BadgeCheck },
  { title: "Pricing", href: "/pricing", icon: Rocket },
];
