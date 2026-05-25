// The project uses a shared TanStack/Vite setup for plugin, alias, and build config.
// Keep this import and avoid duplicating plugins to prevent conflicts.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  vite: {
    build: {
      outDir: "build",
    },
    environments: {
      client: {
        build: {
          outDir: "build/client",
        },
      },
      server: {
        build: {
          outDir: "build/server",
        },
      },
    },
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
