export const SHORT_DOMAIN = "veltrio.link";

export const API_HOSTNAMES = new Set([
  "api.veltrio.link",
  "api-staging.veltrio.link",
  `api.${SHORT_DOMAIN}`,
  "api.localhost:8888",
  "api.localhost",
]);

export const API_DOMAIN =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://api.veltrio.link"
    : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
      ? "https://api-staging.veltrio.link"
      : "http://api.localhost:8888";

export const ADMIN_HOSTNAMES = new Set([
  "admin.veltrio.link",
  "admin-staging.veltrio.link",
  "admin.localhost:8888",
  "admin.localhost",
]);

export const PARTNERS_HOSTNAMES = new Set([
  "partners.veltrio.link",
  "partners-staging.veltrio.link",
  "partners.localhost:8888",
  "partners.localhost",
]);

export const PARTNERS_DOMAIN =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://partners.veltrio.link"
    : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
      ? "https://partners-staging.veltrio.link"
      : "http://partners.localhost:8888";

export const PARTNERS_DOMAIN_WITH_NGROK =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://partners.veltrio.link"
    : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
      ? "https://partners-staging.veltrio.link"
      : process.env.NEXT_PUBLIC_NGROK_URL || "http://partners.localhost:8888";

export const APP_DOMAIN =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://app.veltrio.link"
    : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL || "preview.veltrio.link"}`
      : "http://localhost:8888";

export const APP_DOMAIN_WITH_NGROK =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://app.veltrio.link"
    : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL || "preview.veltrio.link"}`
      : process.env.NEXT_PUBLIC_NGROK_URL || "http://localhost:8888";

export const isAppHostname = (hostname: string) => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
    // pattern of our preview URLs are always "veltrio-<random-string>.veltrio.link"
    return hostname.startsWith("veltrio-") && hostname.endsWith(".veltrio.link");
  }
  return new Set(["app.veltrio.link", "localhost:8888", "localhost"]).has(hostname);
};

export const DUB_LOGO = "https://app.veltrio.link/_static/logo.png";
export const DUB_LOGO_SQUARE = "https://app.veltrio.link/_static/logo-square.png";
export const DUB_QR_LOGO = "https://app.veltrio.link/_static/logo.png";
export const DUB_WORDMARK = "https://app.veltrio.link/_static/wordmark.png";
export const DUB_THUMBNAIL = "https://app.veltrio.link/_static/thumbnail.jpg";

export const DUB_WORKSPACE_ID = "cl7pj5kq4006835rbjlt2ofka";
export const ACME_WORKSPACE_ID = "clrei1gld0002vs9mzn93p8ik";
export const ACME_PROGRAM_ID = "prog_CYCu7IMAapjkRpTnr8F1azjN";
export const DEMO_WORKSPACE_ID = "ws_1M0ZVT8Y8C8J2GXFC125KGYCQ";
export const DEMO_PROGRAM_ID = "prog_1M14W60JQ1ZQY65X6694D45W0";
export const LEGAL_WORKSPACE_ID = "clrflia0j0000vs7sqfhz9c7q";
export const LEGAL_USER_ID = "clqei1lgc0000vsnzi01pbf47";

export const R2_URL = process.env.STORAGE_BASE_URL || "https://dubassets.com";

// Network program (TODO: Update this)
export const NETWORK_WORKSPACE_ID = "ws_1KRHGNRSY2YZQZD96H5S85VX6";
export const NETWORK_PROGRAM_ID = "prog_1KRHH2Y9XZJTJDSCD7B5NXECG";
export const NETWORK_PROGRAM_SLUG = "network";
export const NETWORK_PROGRAM_DEFAULT_GROUP_ID = "grp_1KRHH2YV0GH8AN57T1S9W9CBE";
export const NETWORK_PROGRAM_DEFAULT_SALE_REWARD_ID =
  "rw_1KRHH2YVWP5TVHC30CZE5JVK7";
export const NETWORK_USER_ID = "cl7p1s07k000687rbuhpwqkqa";
