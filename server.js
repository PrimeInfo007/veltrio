// Production entry file for hosts that start a single Node.js file
// (Hostinger: Settings and redeploy > Entry file = server.js).
// Serves the built Next.js app in apps/web; build it first with `pnpm run build`.
process.env.NODE_ENV = process.env.NODE_ENV || "production";

const { createServer } = require("node:http");
const path = require("node:path");

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
