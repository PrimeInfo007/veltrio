// Public marketing pages, served from app/marketing. These keys are in
// RESERVED_SLUGS, so they can never collide with a short link.
const MARKETING_PATHS = new Set(
  [
    "",
    "links",
    "analytics",
    "partners",
    "pricing",
    "enterprise",
    "contact",
    "brand",
    // "coming soon" pages, see app/marketing/[page]/page.tsx
    "docs",
    "help",
    "about",
    "careers",
    "blog",
    "changelog",
    "customers",
  ].map((p) => `/${p}`),
);

export const isMarketingPath = (path: string) => MARKETING_PATHS.has(path);

export const marketingRewritePath = (path: string) =>
  path === "/" ? "/marketing" : `/marketing${path}`;
