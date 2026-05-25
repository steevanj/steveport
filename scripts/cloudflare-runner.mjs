import { mkdirSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join, resolve } from "node:path";

const mode = process.argv[2];
const extraArgs = process.argv.slice(3);
const root = process.cwd();
const buildDir = resolve(root, "build");
const xdgDir = join(buildDir, "xdg");
const wranglerLogPath = join(buildDir, "wrangler.log");
const wranglerStateDir = join(buildDir, "wrangler-state");
const generatedWranglerStateDir = join(buildDir, "server", ".wrangler");
const npmCmd = process.platform === "win32" ? "npm.cmd" : "npm";
const wranglerCmd = resolve(
  root,
  "node_modules",
  ".bin",
  process.platform === "win32" ? "wrangler.cmd" : "wrangler",
);

mkdirSync(buildDir, { recursive: true });
mkdirSync(xdgDir, { recursive: true });
mkdirSync(wranglerStateDir, { recursive: true });

const env = {
  ...process.env,
  XDG_CONFIG_HOME: xdgDir,
  WRANGLER_LOG_PATH: wranglerLogPath,
};

function run(command, args) {
  const isWindowsCmd = process.platform === "win32" && command.toLowerCase().endsWith(".cmd");
  const result = spawnSync(command, args, {
    cwd: root,
    env,
    stdio: "inherit",
    shell: isWindowsCmd,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function cleanupGeneratedWranglerState() {
  rmSync(generatedWranglerStateDir, { recursive: true, force: true });
}

switch (mode) {
  case "build":
    cleanupGeneratedWranglerState();
    run(npmCmd, ["run", "build"]);
    break;
  case "preview":
    cleanupGeneratedWranglerState();
    run(npmCmd, ["run", "build"]);
    run(wranglerCmd, [
      "dev",
      "--config",
      "build/server/wrangler.json",
      "--persist-to",
      wranglerStateDir,
      ...extraArgs,
    ]);
    break;
  case "deploy":
    cleanupGeneratedWranglerState();
    run(npmCmd, ["run", "build"]);
    run(wranglerCmd, ["deploy", "--config", "build/server/wrangler.json", ...extraArgs]);
    break;
  default:
    console.error('Usage: node scripts/cloudflare-runner.mjs <build|preview|deploy> [args...]');
    process.exit(1);
}
