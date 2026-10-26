import { cn } from "@dub/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <svg
      width="112"
      height="24"
      viewBox="0 0 112 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-auto text-black dark:text-white", className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0a12 12 0 1 0 0 24a12 12 0 1 0 0-24ZM6.375 6.75h3l2.625 6.75l2.625-6.75h3l-4.3125 10.5h-2.625Z"
        fill="currentColor"
      />
      <text
        x="30"
        y="18.5"
        fill="currentColor"
        fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
        fontSize="21"
        fontWeight="700"
        letterSpacing="-0.6"
      >
        veltrio
      </text>
    </svg>
  );
}
