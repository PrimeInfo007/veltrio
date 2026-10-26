import { withPartnerProfile } from "@/lib/auth/partner";
import { currencyFormatter, formatDate } from "@dub/utils";
import { ImageResponse } from "next/og";
import * as z from "zod/v4";
import { loadGoogleFont } from "../load-google-font";

const WIDTH = 1368;
const HEIGHT = 994;

const BACKGROUND_IMAGES = {
  light: "https://assets.dub.co/misc/partner-earnings-share-light.jpg",
  dark: "https://assets.dub.co/misc/partner-earnings-share-dark.jpg",
};

// the chart has at most about 120 points, so this limit only stops abuse
const MAX_POINTS = 1000;

// the share modal sends the chart values that it already shows, so the image needs no database query.
// A partner can fake these values, which is fine for a share image.
const querySchema = z.object({
  background: z.enum(["light", "dark"]).optional().default("light"),
  // the earnings of each period in cents, comma separated
  earnings: z
    .string()
    // whole numbers only, so an empty value (e.g. "0,") does not become 0
    .regex(/^(-?\d+(,-?\d+)*)?$/, "Earnings must be comma-separated integers.")
    .optional()
    .default("")
    .transform((value) => (value ? value.split(",").map(Number) : []))
    .pipe(z.array(z.number().int()).max(MAX_POINTS)),
  // the start of the first and the last period
  start: z.iso.datetime({ offset: true }).optional(),
  end: z.iso.datetime({ offset: true }).optional(),
});

export const GET = withPartnerProfile(async ({ searchParams }) => {
  const { background, earnings, start, end } = querySchema.parse(searchParams);

  const interSemibold = await loadGoogleFont("Inter:wght@600");

  const total = earnings.reduce((acc, value) => acc + value, 0);

  const startLabel = formatPeriodLabel(start);
  const endLabel = formatPeriodLabel(end);

  const logoColor = background === "dark" ? "#ffffff" : "#000000";

  return new ImageResponse(
    (
      <div
        tw="flex flex-col w-full h-full items-center justify-center"
        style={{ fontFamily: "Inter Semibold" }}
      >
        <img
          src={BACKGROUND_IMAGES[background]}
          tw="absolute inset-0"
          style={{ width: WIDTH, height: HEIGHT, objectFit: "cover" }}
        />

        <div
          tw={`flex flex-col rounded-3xl shadow-2xl overflow-hidden ${
            background === "dark" ? "bg-neutral-900" : "bg-white"
          }`}
          style={{
            width: 1210,
            marginTop: -10,
          }}
        >
          <div tw="flex flex-col p-10">
            <span
              tw={`text-4xl ${
                background === "dark" ? "text-neutral-100" : "text-neutral-800"
              }`}
              style={{ fontFamily: "Inter Semibold" }}
            >
              Earnings
            </span>

            <div tw="flex items-baseline mt-3">
              <span
                tw={`font-medium text-4xl ${
                  background === "dark"
                    ? "text-neutral-200"
                    : "text-neutral-600"
                }`}
                style={{ fontFamily: "Inter Semibold" }}
              >
                {currencyFormatter(total, { maximumFractionDigits: 2 })}
              </span>
            </div>

            <div tw="flex mt-6" style={{ width: 1130, height: 430 }}>
              <Chart data={earnings} background={background} />
            </div>

            <div tw="flex justify-between mt-4">
              <span
                tw={`text-2xl ${
                  background === "dark"
                    ? "text-neutral-400"
                    : "text-neutral-500"
                }`}
              >
                {startLabel}
              </span>
              <span
                tw={`text-2xl ${
                  background === "dark"
                    ? "text-neutral-400"
                    : "text-neutral-500"
                }`}
              >
                {endLabel}
              </span>
            </div>
          </div>
        </div>

        <div tw="flex items-center mt-22">
          <svg
            width="73"
            height="73"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32 0a32 32 0 1 0 0 64a32 32 0 1 0 0-64ZM17 18h8l7 18l7-18h8l-11.5 28h-7Z"
              fill={logoColor}
            />
          </svg>
          <span tw="ml-5 text-[64px] font-bold" style={{ color: logoColor }}>
            veltrio
          </span>
        </div>
      </div>
    ),
    {
      width: WIDTH,
      height: HEIGHT,
      fonts: interSemibold
        ? [
            {
              name: "Inter Semibold",
              data: interSemibold,
              style: "normal",
              weight: 600,
            },
          ]
        : [],
    },
  );
});

// the period start has the partner's offset (e.g. 2026-09-01T00:00:00.000+02:00), so format
// its local date in UTC. Formatting the full time in UTC shows the day before for UTC+ offsets.
function formatPeriodLabel(periodStart?: string) {
  if (!periodStart) return "";

  return formatDate(new Date(periodStart.slice(0, 10)), {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

function Chart({
  data,
  background,
}: {
  data: number[];
  background: "light" | "dark";
}) {
  if (!data || data.length === 0) {
    return null;
  }

  const circleRadius = 10;
  const strokeWidth = 6;
  const strokeHalfWidth = strokeWidth / 2;
  const edgePadding = circleRadius + strokeHalfWidth;

  const width = 1400;
  const height = 600;
  const padding = {
    top: 40,
    right: edgePadding,
    bottom: edgePadding,
    left: edgePadding,
  };

  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const maxEarnings = Math.max(...data, 1);

  const scaleX = (index: number) =>
    padding.left + (chartWidth / (data.length - 1)) * index;

  const scaleY = (value: number) =>
    padding.top + chartHeight - (value / maxEarnings) * chartHeight;

  const isDark = background === "dark";
  const lineColorStart = isDark ? "#A78BFA" : "#7D3AEC";
  const lineColorEnd = isDark ? "#F472B6" : "#DA2778";
  const circleColor = isDark ? "#F472B6" : "#DA2778";
  const areaColorStart = isDark ? "#F472B6" : "#DA2778";
  const areaColorEnd = isDark ? "#DA2778" : "#DA2778";
  const areaOpacityStart = isDark ? 0.25 : 0.15;
  const areaOpacityEnd = isDark ? 0.05 : 0.02;

  if (data.length === 1) {
    const singleX = padding.left + chartWidth / 2;
    const singleY = scaleY(data[0]);
    return (
      <svg
        viewBox={`0 0 ${width} ${height}`}
        style={{ width: "100%", height: "100%" }}
      >
        <circle cx={singleX} cy={singleY} r={circleRadius} fill={circleColor} />
      </svg>
    );
  }

  const linePath = data
    .map((value, index) => {
      const x = scaleX(index);
      const y = scaleY(value);
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  const areaPath = `${linePath} L ${scaleX(data.length - 1)} ${padding.top + chartHeight} L ${padding.left} ${padding.top + chartHeight} Z`;

  const lastX = scaleX(data.length - 1);
  const lastY = scaleY(data[data.length - 1]);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      style={{ width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={lineColorStart} />
          <stop offset="100%" stopColor={lineColorEnd} />
        </linearGradient>
        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="0%"
            stopColor={areaColorStart}
            stopOpacity={areaOpacityStart}
          />
          <stop
            offset="100%"
            stopColor={areaColorEnd}
            stopOpacity={areaOpacityEnd}
          />
        </linearGradient>
      </defs>

      <path d={areaPath} fill="url(#areaGradient)" />

      <path
        d={linePath}
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx={lastX} cy={lastY} r={circleRadius} fill={circleColor} />
    </svg>
  );
}
