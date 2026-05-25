import { createStartHandler } from '@tanstack/start/server'
import manifest from './.vite/manifest.json'

// Cloudflare Worker entry point
export default {
  fetch: createStartHandler({ manifest })
}
