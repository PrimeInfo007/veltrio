import { cn } from "@dub/utils";

// Veltrio mark: a solid circle with a "V" knocked out (evenodd)
export const LOGO_PATH =
  "M32 0a32 32 0 1 0 0 64a32 32 0 1 0 0-64ZM17 18h8l7 18l7-18h8l-11.5 28h-7Z";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-10 text-black dark:text-white", className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={LOGO_PATH}
        fill="currentColor"
      />
    </svg>
  );
}
