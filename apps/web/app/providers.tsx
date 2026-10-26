"use client";

import { KeyboardShortcutProvider, TooltipProvider } from "@dub/ui";
import PlausibleProvider from "next-plausible";
import { ReactNode } from "react";
import { Toaster } from "sonner";

export default function RootProviders({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider>
      {/* Analytics is off unless you set NEXT_PUBLIC_PLAUSIBLE_ENABLED=true and PLAUSIBLE_SCRIPT_SRC */}
      <PlausibleProvider
        enabled={process.env.NEXT_PUBLIC_PLAUSIBLE_ENABLED === "true"}
      >
        <KeyboardShortcutProvider>
          <Toaster className="pointer-events-auto" position="bottom-center" />
          {children}
        </KeyboardShortcutProvider>
      </PlausibleProvider>
    </TooltipProvider>
  );
}
