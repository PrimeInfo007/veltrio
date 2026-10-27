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
  ["apps/web", "next build"],
];

for (const [dir, command] of steps) {
  const cwd = join(root, dir);
  console.log(`\n==> ${dir}: ${command}`);
  execSync(command, {
    cwd,
    stdio: "inherit",
    env: {
      ...process.env,
      PATH: [
        join(cwd, "node_modules", ".bin"),
        join(root, "node_modules", ".bin"),
        process.env.PATH,
      ].join(delimiter),
    },
  });
}
