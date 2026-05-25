# steveportfolio

This portfolio is a TanStack Start SSR app built for the Cloudflare Workers runtime.

## Local development

```bash
npm install
npm run dev
```

## Build output

Running `npm run cf:build` generates:

- `build/client` for static assets
- `build/server` for the Cloudflare Worker bundle

## Cloudflare deployment

This repo is meant to deploy with Wrangler using the generated Worker config in `build/server/wrangler.json`.

```bash
npm run cf:deploy
```

That command will:

1. Build the app with `vite build`
2. Deploy the generated Worker from `build/server`
3. Serve static assets from `build/client`

Set a Cloudflare API token before deploying in non-interactive environments:

```bash
CLOUDFLARE_API_TOKEN=your-token-here
```

## Local Cloudflare preview

To build only:

```bash
npm run cf:build
```

To preview the built Worker locally:

```bash
npm run cf:preview
```

## Notes

- This project is not set up as a Vercel app.
- `wrangler.jsonc` in the repo root is the source config used during build.
- The deployable config is generated at `build/server/wrangler.json` after each build.
- Wrangler logs are written to `build/wrangler.log` by the helper script.
