"use client";

import { APP_DOMAIN } from "@dub/utils";
import { Link2 } from "lucide-react";
import { useState } from "react";
import { ShortLinkRow } from "./mockups";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

// Paste a URL, then carry it through sign-up into the link creator (/new?link=…)
export function HeroShortener() {
  const [url, setUrl] = useState("");

  const next = `/new?link=${encodeURIComponent(url.trim())}`;
  const action = `${APP_DOMAIN}/register?next=${encodeURIComponent(next)}`;

  return (
    <div className="mx-auto w-full max-w-xl">
      <form
        className="flex items-center gap-2 rounded-full border border-mk-border bg-white p-1.5 shadow-[0_12px_40px_-20px_hsl(var(--mk-fg)/0.4)]"
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = url.trim() ? action : `${APP_DOMAIN}/register`;
        }}
      >
        <Link2 className="ml-3 size-4 shrink-0 text-mk-muted-fg" />
        <label htmlFor="hero-url" className="sr-only">
          Long link to shorten
        </label>
        <Input
          id="hero-url"
          type="url"
          inputMode="url"
          placeholder="Paste a long link"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="h-10 border-0 px-1 shadow-none focus-visible:ring-0"
        />
        <Button type="submit" variant="accent" className="shrink-0">
          Shorten link
        </Button>
      </form>
      <p className="mt-3 text-center text-sm text-mk-muted-fg">
        Free account required to save and track links.
      </p>
      <ShortLinkRow
        className="mt-6"
        slug="autumn"
        destination="northwindgoods.com/collections/autumn-drop"
        clicks="2,417 clicks"
      />
    </div>
  );
}
