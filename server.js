// Production entry file for hosts that start a single Node.js file.
// Prefers the self-contained standalone build (much smaller to deploy);
// falls back to serving apps/web with the full node_modules.
// Build first with `pnpm run build`.
const { existsSync } = require("node:fs");
const path = require("node:path");

const standaloneEntry = path.join(
  __dirname,
  "apps/web/.next/standalone/server.js",
);

if (existsSync(standaloneEntry)) {
  require(standaloneEntry);
} else {
  process.env.NODE_ENV = process.env.NODE_ENV || "production";

  const { createServer } = require("node:http");
  const dir = path.join(__dirname, "apps", "web");
  const next = require(require.resolve("next", { paths: [dir] }));

  // PORT may be a number or, behind some process managers, a socket path
  const rawPort = process.env.PORT || "3000";
  const port = /^\d+$/.test(rawPort) ? Number(rawPort) : rawPort;

  const app = next({ dev: false, dir });
  const handle = app.getRequestHandler();

  app
    .prepare()
    .then(() => {
      createServer((req, res) => handle(req, res)).listen(port, () => {
        console.log(`> Veltrio ready on ${port}`);
      });
    })
    .catch((err) => {
      console.error("Failed to start Next.js server", err);
      process.exit(1);
    });
}
