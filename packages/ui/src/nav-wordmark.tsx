"use client";

import { cn } from "@dub/utils";
import * as Popover from "@radix-ui/react-popover";
import { BoxSelect, Home, LayoutGrid, Type } from "lucide-react";
import { useParams } from "next/navigation";
import { MouseEvent, useCallback, useContext, useState } from "react";
import { toast } from "sonner";
import { Button, ButtonProps } from "./button";
import { useCopyToClipboard } from "./hooks";
import { Logo } from "./logo";
import { NavContext } from "./nav";
import { Wordmark } from "./wordmark";

const logoSvg = `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 0a32 32 0 1 0 0 64a32 32 0 1 0 0-64ZM17 18h8l7 18l7-18h8l-11.5 28h-7Z" fill="black"/>
</svg>`;

const wordmarkSvg = `<svg width="112" height="24" viewBox="0 0 112 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 0a12 12 0 1 0 0 24a12 12 0 1 0 0-24ZM6.375 6.75h3l2.625 6.75l2.625-6.75h3l-4.3125 10.5h-2.625Z" fill="black"/>
<text x="30" y="18.5" fill="black" font-family="Inter, system-ui, sans-serif" font-size="21" font-weight="700" letter-spacing="-0.6">veltrio</text>
</svg>`;

/**
 * The Veltrio logo with a custom context menu for copying/navigation,
 * for use in the top site nav
 */
export function NavWordmark({
  variant = "full",
  isInApp,
  className,
}: {
  variant?: "full" | "symbol";
  isInApp?: boolean;
  className?: string;
}) {
  const { domain = "veltrio.link" } = useParams() as { domain: string };

  const { theme } = useContext(NavContext);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleContextMenu = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsPopoverOpen(true);
  }, []);

  const [, copyToClipboard] = useCopyToClipboard();

  function copy(text: string) {
    toast.promise(copyToClipboard(text), {
      success: "Copied to clipboard!",
      error: "Failed to copy to clipboard",
    });
  }

  return (
    <Popover.Root open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <Popover.Anchor asChild>
        <div onContextMenu={handleContextMenu} className="max-w-fit">
          {variant === "full" ? (
            <Wordmark className={className} />
          ) : (
            <Logo
              className={cn(
                "h-8 w-8 transition-all duration-75 active:scale-95",
                className,
              )}
            />
          )}
        </div>
      </Popover.Anchor>
      <Popover.Portal>
        <Popover.Content
          sideOffset={14}
          align="start"
          className={cn(
            "z-50 -mt-1.5",
            !isInApp && "-translate-x-8",
            theme === "dark" && "dark",
          )}
          onClick={(e) => {
            e.stopPropagation();
            setIsPopoverOpen(false);
          }}
        >
          <div className="grid gap-1 rounded-lg border border-neutral-200 bg-white p-2 drop-shadow-sm sm:min-w-[240px] dark:border-white/[0.15] dark:bg-black">
            <ContextMenuButton
              text="Copy Logo as SVG"
              variant="outline"
              onClick={() => copy(logoSvg)}
              icon={<Logo className="h-4 w-4" />}
            />
            <ContextMenuButton
              text="Copy Wordmark as SVG"
              variant="outline"
              onClick={() => copy(wordmarkSvg)}
              icon={<Type strokeWidth={2} className="h-4 w-4" />}
            />
            <ContextMenuButton
              text="Brand Guidelines"
              variant="outline"
              onClick={() => window.open("https://veltrio.link/brand", "_blank")}
              icon={<BoxSelect strokeWidth={2} className="h-4 w-4" />}
            />
            {/* If it's in the app or it's a domain placeholder page (not veltrio.link homepage), show the home button */}
            {isInApp || domain != "veltrio.link" ? (
              <ContextMenuButton
                text="Home Page"
                variant="outline"
                onClick={() =>
                  window.open(
                    `https://veltrio.link${isInApp ? "/home" : ""}`,
                    "_blank",
                  )
                }
                icon={<Home strokeWidth={2} className="h-4 w-4" />}
              />
            ) : (
              <ContextMenuButton
                text="Dashboard"
                variant="outline"
                onClick={() => window.open("https://app.veltrio.link", "_blank")}
                icon={<LayoutGrid strokeWidth={2} className="h-4 w-4" />}
              />
            )}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

function ContextMenuButton({ className, ...rest }: ButtonProps) {
  return (
    <Button
      className={cn(
        "h-9 justify-start px-3 font-medium hover:text-neutral-700 dark:text-white/70 dark:hover:bg-white/[0.15] dark:hover:text-white",
        className,
      )}
      {...rest}
    />
  );
}
