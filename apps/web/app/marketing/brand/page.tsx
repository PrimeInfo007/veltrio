import { HeroGlow, Section, SectionHeading } from "@/ui/marketing/blocks";
import { Button } from "@/ui/marketing/ui/button";
import { Logo, Wordmark } from "@dub/ui";
import { constructMetadata } from "@dub/utils";
import { Download } from "lucide-react";
import { ReactNode } from "react";

export const metadata = constructMetadata({
  fullTitle: "Brand – Veltrio",
  description: "Download the Veltrio logo and wordmark, and see our colors.",
});

const COLORS = [
  { name: "Ink", hex: "#101A33", text: "text-white" },
  { name: "Ultramarine", hex: "#2F45FF", text: "text-white" },
  { name: "Mint", hex: "#DDF6EA", text: "text-[#0B6B4A]" },
  { name: "Slate", hex: "#5B6478", text: "text-white" },
  { name: "Paper", hex: "#FFFFFF", text: "text-[#101A33]" },
];

function AssetCard({
  title,
  preview,
  downloads,
  dark,
}: {
  title: string;
  preview: ReactNode;
  downloads: { label: string; href: string }[];
  dark?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-mk-border bg-white">
      <div
        className={
          dark
            ? "flex h-48 items-center justify-center bg-mk-fg"
            : "flex h-48 items-center justify-center bg-mk-muted/60"
        }
      >
        {preview}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 p-5">
        <h3 className="font-semibold text-mk-fg">{title}</h3>
        <div className="flex gap-2">
          {downloads.map((d) => (
            <Button key={d.label} variant="outline" size="sm" asChild>
              <a href={d.href} download>
                <Download />
                {d.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BrandPage() {
  return (
    <>
      <section className="relative px-4 pb-16 pt-14 sm:px-10 sm:pt-20">
        <HeroGlow />
        <div className="relative text-center">
          <h1 className="mx-auto max-w-2xl text-balance font-mk-display text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.045em] text-mk-fg sm:text-6xl">
            Veltrio brand assets
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg text-mk-muted-fg">
            Our logo, wordmark and colors, ready to use when you write about or
            integrate with Veltrio.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeading align="left" title="Logo and wordmark" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <AssetCard
            title="Logo"
            preview={<Logo className="size-20 text-mk-fg" />}
            downloads={[
              { label: "SVG", href: "/_static/logo.svg" },
              { label: "PNG", href: "/_static/logo.png" },
            ]}
          />
          <AssetCard
            title="Wordmark"
            preview={<Wordmark className="h-12 text-mk-fg" />}
            downloads={[
              { label: "SVG", href: "/_static/wordmark.svg" },
              { label: "PNG", href: "/_static/wordmark.png" },
            ]}
          />
          <AssetCard
            title="App icon"
            dark
            preview={
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/_static/logo-square.png"
                alt="Veltrio app icon"
                className="size-20 rounded-2xl"
              />
            }
            downloads={[{ label: "PNG", href: "/_static/logo-square.png" }]}
          />
          <AssetCard
            title="Logo on dark"
            dark
            preview={<Logo className="size-20 text-white" />}
            downloads={[{ label: "SVG", href: "/_static/logo.svg" }]}
          />
        </div>
      </Section>

      <Section className="bg-mk-muted/40">
        <SectionHeading align="left" title="Colors" />
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {COLORS.map((c) => (
            <li
              key={c.hex}
              className="overflow-hidden rounded-2xl border border-mk-border bg-white"
            >
              <div
                className={`flex h-28 items-end p-3 text-sm font-semibold ${c.text}`}
                style={{ background: c.hex }}
              >
                {c.name}
              </div>
              <p className="px-3 py-2.5 font-mono text-sm text-mk-muted-fg">
                {c.hex}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-12 grid gap-6 text-sm leading-relaxed text-mk-muted-fg md:grid-cols-2">
          <p>
            <strong className="text-mk-fg">Do</strong> keep clear space around
            the logo, use it in Ink on light backgrounds or white on dark ones,
            and write the name as &ldquo;Veltrio&rdquo;.
          </p>
          <p>
            <strong className="text-mk-fg">Don&apos;t</strong> stretch, recolor
            or add effects to the logo, or use it in a way that suggests a
            partnership we haven&apos;t agreed to.
          </p>
        </div>
      </Section>
    </>
  );
}
