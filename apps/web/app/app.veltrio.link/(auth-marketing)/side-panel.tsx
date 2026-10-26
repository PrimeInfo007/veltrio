import { SHORT_DOMAIN } from "@dub/utils";

const POINTS = [
  "Short links on your own domain",
  "Clicks by country, device and referrer",
  "Workspaces and an API for your team",
];

export function SidePanel() {
  return (
    <div className="relative hidden h-full flex-col justify-center overflow-hidden border-l border-black/5 bg-[#101A33] p-10 text-white min-[900px]:flex lg:p-16">
      <p className="max-w-[16ch] text-4xl font-bold leading-[1.05] tracking-[-0.03em] lg:text-5xl">
        Short links that tell you who clicked.
      </p>

      <p className="mt-10 inline-flex w-fit rounded-lg bg-[#DDF6EA] px-4 py-2 text-2xl font-semibold text-[#0B6B4A]">
        <span className="font-medium opacity-75">{SHORT_DOMAIN}/</span>
        launch
      </p>

      <ul className="mt-10 space-y-3 text-lg text-white/75">
        {POINTS.map((point) => (
          <li key={point} className="flex items-center gap-3">
            <span className="size-1.5 rounded-full bg-[#DDF6EA]" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
