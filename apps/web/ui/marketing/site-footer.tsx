import { Logo } from "@dub/ui";
import { APP_DOMAIN } from "@dub/utils";
import Link from "next/link";
import {
  PRODUCT_NAV,
  PRODUCT_NAV_SECONDARY,
  RESOURCES_NAV,
  SOLUTIONS_NAV,
  TOP_LINKS,
} from "./nav-items";

const COLUMNS: { title: string; links: { title: string; href: string }[] }[] = [
  { title: "Product", links: [...PRODUCT_NAV, ...PRODUCT_NAV_SECONDARY, ...TOP_LINKS] },
  { title: "Solutions", links: SOLUTIONS_NAV.flatMap((g) => g.items).filter((l, i, all) => all.findIndex((x) => x.title === l.title) === i) },
  { title: "Resources", links: [...RESOURCES_NAV[0].items, ...RESOURCES_NAV[2].items] },
  { title: "Company", links: RESOURCES_NAV[1].items },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-mk-border bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div>
          <Link href="/" className="flex w-fit items-center gap-2">
            <Logo className="size-7 text-mk-fg" />
            <span className="font-mk-display text-xl font-bold tracking-[-0.03em]">
              veltrio
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-mk-muted-fg">
            Short links, click analytics and partner programs on veltrio.link
            or your own domain.
          </p>
          <div className="mt-5 flex gap-4 text-sm">
            <a
              href={`${APP_DOMAIN}/login`}
              className="font-medium text-mk-fg hover:text-mk-accent"
            >
              Log in
            </a>
            <a
              href={`${APP_DOMAIN}/register`}
              className="font-medium text-mk-fg hover:text-mk-accent"
            >
              Sign up
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:contents">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h2 className="text-sm font-semibold text-mk-fg">{col.title}</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.title}>
                    <Link
                      href={l.href}
                      className="text-mk-muted-fg transition-colors hover:text-mk-fg"
                    >
                      {l.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-mk-border">
        <p className="mx-auto max-w-6xl px-4 py-6 text-sm text-mk-muted-fg sm:px-6">
          © {new Date().getFullYear()} Veltrio
        </p>
      </div>
    </footer>
  );
}
