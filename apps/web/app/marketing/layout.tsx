import { SiteFooter } from "@/ui/marketing/site-footer";
import { SiteHeader } from "@/ui/marketing/site-header";
import { Bricolage_Grotesque } from "next/font/google";
import { ReactNode } from "react";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-mk-display",
  weight: ["500", "600", "700", "800"],
});

// Colors come from the --mk-* variables in styles/globals.css
export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${display.variable} min-h-screen bg-mk-bg font-default text-mk-fg antialiased`}
    >
      <SiteHeader />
      <main className="mx-auto max-w-6xl overflow-hidden border-x border-mk-border">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
