"use client";

import { cn } from "@dub/utils";
import { useId, useState } from "react";
import { MockWindow } from "./mockups";

type Metric = "clicks" | "leads" | "sales";

// Sample data for the marketing mock only
const SERIES: Record<Metric, number[]> = {
  clicks: [42, 55, 48, 70, 66, 82, 74, 96, 88, 110, 104, 131, 120, 146],
  leads: [6, 8, 7, 11, 10, 13, 12, 15, 14, 18, 16, 21, 19, 24],
  sales: [1, 2, 1, 3, 2, 4, 3, 4, 4, 6, 5, 7, 6, 8],
};

const TOTALS: Record<Metric, { label: string; value: string }> = {
  clicks: { label: "Clicks", value: "12,840" },
  leads: { label: "Leads", value: "1,926" },
  sales: { label: "Sales", value: "$48,210" },
};

function buildPath(values: number[], w: number, h: number) {
  const max = Math.max(...values) * 1.15;
  const step = w / (values.length - 1);
  const pts = values.map((v, i) => [i * step, h - (v / max) * h] as const);
  // smooth curve through points
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1];
    const [x1, y1] = pts[i];
    const cx = (x0 + x1) / 2;
    d += ` C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`;
  }
  return { line: d, area: `${d} L ${w} ${h} L 0 ${h} Z` };
}

export function AnalyticsChartMock({ className }: { className?: string }) {
  const [metric, setMetric] = useState<Metric>("clicks");
  const gradientId = useId();
  const W = 640;
  const H = 200;
  const { line, area } = buildPath(SERIES[metric], W, H);

  return (
    <MockWindow
      title="Analytics · Last 14 days"
      className={cn("mx-auto w-full max-w-4xl text-left", className)}
    >
      <div
        role="tablist"
        aria-label="Metric"
        className="grid grid-cols-3 border-b border-mk-border"
      >
        {(Object.keys(TOTALS) as Metric[]).map((m) => (
          <button
            key={m}
            role="tab"
            aria-selected={metric === m}
            onClick={() => setMetric(m)}
            className={cn(
              "relative px-4 py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-mk-ring sm:px-6",
              metric === m ? "bg-white" : "bg-mk-muted/50 hover:bg-mk-muted",
              m !== "clicks" && "border-l border-mk-border",
            )}
          >
            <span className="block text-xs font-medium text-mk-muted-fg">
              {TOTALS[m].label}
            </span>
            <span className="mt-1 block font-mk-display text-xl font-bold tabular-nums tracking-tight text-mk-fg sm:text-2xl">
              {TOTALS[m].value}
            </span>
            {metric === m && (
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-mk-accent" />
            )}
          </button>
        ))}
      </div>
      <div className="p-4 sm:p-6">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-48 w-full sm:h-56"
          preserveAspectRatio="none"
          aria-label={`${TOTALS[metric].label} trending up over the last 14 days`}
          role="img"
        >
          <defs>
            <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--mk-accent))" stopOpacity="0.25" />
              <stop offset="100%" stopColor="hsl(var(--mk-accent))" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0.25, 0.5, 0.75].map((f) => (
            <line
              key={f}
              x1="0"
              x2={W}
              y1={H * f}
              y2={H * f}
              stroke="hsl(var(--mk-border))"
              strokeDasharray="4 6"
            />
          ))}
          <path d={area} fill={`url(#${gradientId})`} />
          <path
            d={line}
            fill="none"
            stroke="hsl(var(--mk-accent))"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </MockWindow>
  );
}
