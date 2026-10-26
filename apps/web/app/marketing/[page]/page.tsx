import { HeroGlow } from "@/ui/marketing/blocks";
import { Badge } from "@/ui/marketing/ui/badge";
import { Button } from "@/ui/marketing/ui/button";
import { APP_DOMAIN, constructMetadata } from "@dub/utils";
import { Clock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Pages linked from the nav that haven't been written yet.
// To publish one, create app/marketing/<slug>/page.tsx and remove it here.
const UPCOMING: Record<string, { title: string; description: string }> = {
  docs: {
    title: "Docs",
    description: "Guides and API reference for building with Veltrio.",
  },
  help: {
    title: "Help center",
    description: "Answers to common questions about links, domains and billing.",
  },
  about: {
    title: "About Veltrio",
    description: "Who we are and why we're building Veltrio.",
  },
  careers: {
    title: "Careers",
    description: "Open roles on the Veltrio team.",
  },
  blog: {
    title: "Blog",
    description: "Guides and stories about links, attribution and partnerships.",
  },
  changelog: {
    title: "Changelog",
    description: "Every new feature and improvement we ship.",
  },
  customers: {
    title: "Customers",
    description: "Stories from teams who use Veltrio.",
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(UPCOMING).map((page) => ({ page }));
}

export async function generateMetadata(props: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await props.params;
  const info = UPCOMING[page];
  return constructMetadata({
    fullTitle: info ? `${info.title} – Veltrio` : "Veltrio",
    description: info?.description,
    noIndex: true,
  });
}

export default async function UpcomingPage(props: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await props.params;
  const info = UPCOMING[page];
  if (!info) notFound();

  return (
    <section className="relative flex min-h-[60vh] items-center px-4 py-24 sm:px-10">
      <HeroGlow />
      <div className="relative mx-auto flex max-w-xl flex-col items-center text-center">
        <Badge>
          <Clock className="size-3.5 text-mk-accent" />
          Coming soon
        </Badge>
        <h1 className="mt-5 font-mk-display text-5xl font-extrabold tracking-[-0.045em] text-mk-fg sm:text-6xl">
          {info.title}
        </h1>
        <p className="mt-5 text-lg text-mk-muted-fg">
          {info.description} We&apos;re still writing this page. In the
          meantime, we&apos;re happy to answer questions directly.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button size="lg" asChild>
            <Link href="/contact">Contact us</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={`${APP_DOMAIN}/register`}>Start for free</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
