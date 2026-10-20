// Minimal types for the Workers runtime module (avoids pulling in @cloudflare/workers-types).
declare module "cloudflare:email" {
  export class EmailMessage {
    constructor(from: string, to: string, raw: string | ReadableStream);
    readonly from: string;
    readonly to: string;
  }
}
