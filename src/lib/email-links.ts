// Compose links for webmail and the device's default mail app.
const q = (params: Record<string, string | undefined>) =>
  Object.entries(params)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}=${encodeURIComponent(v as string)}`)
    .join('&');

export const gmailLink = (to: string, subject?: string, body?: string) =>
  `https://mail.google.com/mail/?${q({ view: 'cm', fs: '1', to, su: subject, body })}`;

export const outlookLink = (to: string, subject?: string, body?: string) =>
  `https://outlook.live.com/mail/0/deeplink/compose?${q({ to, subject, body })}`;

export const mailtoLink = (to: string, subject?: string, body?: string) => {
  const query = q({ subject, body });
  return `mailto:${to}${query ? `?${query}` : ''}`;
};
