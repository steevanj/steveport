import { mkdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join, resolve } from "node:path";

const mode = process.argv[2];
const extraArgs = process.argv.slice(3);
const root = process.cwd();
const buildDir = resolve(root, "build");
const xdgDir = join(buildDir, "xdg");
const wranglerLogPath = join(buildDir, "wrangler.log");
const npmCmd = process.platform === "win32" ? "npm.cmd" : "npm";
const wranglerCmd = resolve(
  root,
  "node_modules",
  ".bin",
  process.platform === "win32" ? "wrangler.cmd" : "wrangler",
);

mkdirSync(buildDir, { recursive: true });
mkdirSync(xdgDir, { recursive: true });

const env = {
  ...process.env,
  XDG_CONFIG_HOME: xdgDir,
  WRANGLER_LOG_PATH: wranglerLogPath,
};

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: root,
    env,
    stdio: "inherit",
    shell: true,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

switch (mode) {
  case "build":
    run(npmCmd, ["run", "build"]);
    break;
  case "preview":
    run(npmCmd, ["run", "build"]);
    run(wranglerCmd, ["dev", "--config", "build/server/wrangler.json", ...extraArgs]);
    break;
  case "deploy":
    run(npmCmd, ["run", "build"]);
    run(wranglerCmd, ["deploy", "--config", "build/server/wrangler.json", ...extraArgs]);
    break;
  default:
    console.error('Usage: node scripts/cloudflare-runner.mjs <build|preview|deploy> [args...]');
    process.exit(1);
}
