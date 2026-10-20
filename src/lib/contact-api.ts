// POST /api/contact — emails project briefs via Cloudflare Email Routing (send_email binding).
// The binding only delivers to the verified destination set in wrangler.jsonc.
import { z } from "zod";

type EmailMessageCtor = typeof import("cloudflare:email").EmailMessage;
type SendEmailBinding = { send(message: InstanceType<EmailMessageCtor>): Promise<void> };

// `cloudflare:email` only exists inside the Workers runtime, so it is loaded lazily —
// a top-level import crashes local dev servers that run this file in plain Node.
async function loadEmailMessage(): Promise<EmailMessageCtor | null> {
  try {
    const mod = await import("cloudflare:email");
    return mod.EmailMessage;
  } catch {
    return null;
  }
}
type Env = { CONTACT_EMAIL?: SendEmailBinding };

const FROM_ADDRESS = "website@stevedev.live";
const FROM_NAME = "stevedev.live";
const TO_ADDRESS = "steevan.dev@gmail.com";

const schema = z.object({
  businessType: z.string().max(100),
  features: z.array(z.string().max(100)).max(20),
  timeline: z.string().max(100),
  budget: z.string().max(100),
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(150).optional().default(""),
  preferred: z.string().max(50),
  description: z.string().trim().min(10).max(5000),
  note: z.string().max(500).optional(),
  // Honeypot: real visitors never see or fill this field.
  website: z.string().max(500).optional(),
});

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });

// Header values must never contain line breaks (header injection).
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

const b64 = (s: string) => {
  const bytes = new TextEncoder().encode(s);
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin);
};

const encodeHeader = (s: string) => `=?UTF-8?B?${b64(oneLine(s))}?=`;

function buildMime(data: z.infer<typeof schema>) {
  const subject = `New project brief: ${data.businessType} — ${data.name}${data.company ? ` (${data.company})` : ""}`;
  const body = [
    `New project brief from stevedev.live`,
    ``,
    `Project type: ${data.businessType}`,
    `Features: ${data.features.length ? data.features.join(", ") : "Not sure yet"}`,
    `Timeline: ${data.timeline}`,
    `Budget: ${data.budget}`,
    ...(data.note ? [``, data.note] : []),
    ``,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company || "—"}`,
    `Preferred contact: ${data.preferred}`,
    ``,
    `About the project:`,
    data.description,
    ``,
    `—`,
    `Just hit Reply to answer ${data.name} directly.`,
  ].join("\r\n");

  const encodedBody = b64(body).replace(/.{1,76}/g, "$&\r\n");

  return [
    `From: ${encodeHeader(FROM_NAME)} <${FROM_ADDRESS}>`,
    `To: <${TO_ADDRESS}>`,
    `Reply-To: ${encodeHeader(data.name)} <${oneLine(data.email)}>`,
    `Subject: ${encodeHeader(subject)}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${crypto.randomUUID()}@stevedev.live>`,
    `MIME-Version: 1.0`,
    `Content-Type: text/plain; charset=UTF-8`,
    `Content-Transfer-Encoding: base64`,
    ``,
    encodedBody,
  ].join("\r\n");
}

export async function handleContact(request: Request, env: Env): Promise<Response> {
  if (request.method !== "POST") return json({ ok: false, error: "Method not allowed" }, 405);

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid request" }, 400);
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) return json({ ok: false, error: "Please check the form and try again." }, 422);

  // Bots that fill the honeypot get a fake success so they don't retry.
  if (parsed.data.website) return json({ ok: true });

  const EmailMessage = await loadEmailMessage();
  if (!env?.CONTACT_EMAIL || !EmailMessage) {
    console.error("Contact email unavailable: send_email binding or cloudflare:email missing (local dev?)");
    return json({ ok: false, error: "Email is not configured" }, 503);
  }

  try {
    const message = new EmailMessage(FROM_ADDRESS, TO_ADDRESS, buildMime(parsed.data));
    await env.CONTACT_EMAIL.send(message);
    return json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return json({ ok: false, error: "Could not send right now" }, 502);
  }
}
