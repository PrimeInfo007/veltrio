// Builds the web app and the workspace packages it depends on, in order,
// by calling each tool's binary directly. Used instead of `turbo build` on
// hosts (e.g. Hostinger) whose corepack pnpm shim breaks when a build step
// spawns `pnpm` again.
import { execSync } from "node:child_process";
import { delimiter, join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");

const steps = [
  ["packages/utils", "tsup"],
  ["packages/embeds/core", "tsup"],
  ["packages/embeds/react", "tsup"],
  ["packages/ui", "tsup"],
  ["apps/web", "prisma generate --schema=./prisma/schema"],
  // Creates/updates tables to match the schema; fails instead of dropping data
  ["apps/web", "prisma db push --skip-generate --schema=./prisma/schema"],
  // Larger heap than Node's ~4 GB default; type-check/lint skipped (see next.config.js)
  [
    "apps/web",
    "node --max-old-space-size=6144 node_modules/next/dist/bin/next build",
    { LOW_MEMORY_BUILD: "1" },
  ],
];

for (const [dir, command, extraEnv = {}] of steps) {
  const cwd = join(root, dir);
  console.log(`\n==> ${dir}: ${command}`);
  execSync(command, {
    cwd,
    stdio: "inherit",
    env: {
      ...process.env,
      ...extraEnv,
      PATH: [
        join(cwd, "node_modules", ".bin"),
        join(root, "node_modules", ".bin"),
        process.env.PATH,
      ].join(delimiter),
    },
  });
}
