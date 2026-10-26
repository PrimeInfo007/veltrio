import { cn } from "@dub/utils";
import { LOGO_PATH } from "./logo";

export function CompositeLogo({ className }: { className?: string }) {
  return (
    <svg
      width="290"
      height="64"
      viewBox="0 0 290 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-auto text-black dark:text-white", className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={LOGO_PATH}
        fill="currentColor"
      />
      <text
        x="80"
        y="49"
        fill="currentColor"
        fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
        fontSize="56"
        fontWeight="700"
        letterSpacing="-1.6"
      >
        veltrio
      </text>
    </svg>
  );
}
