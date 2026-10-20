import { useState } from 'react';
import { Check, Copy, Mail } from 'lucide-react';
import { gmailLink, mailtoLink, outlookLink } from '@/lib/email-links';

type Props = {
  to: string;
  subject?: string;
  body?: string;
  dark?: boolean;
};

// "Open in Gmail / Outlook / mail app / copy" — works even when no desktop mail app is set up.
export default function EmailOptions({ to, subject, body, dark = false }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(to);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const base = `inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-bold transition-colors ${
    dark ? 'bg-white/10 text-white hover:bg-white/20' : 'border border-line bg-white text-ink hover:border-accent hover:text-accent'
  }`;

  return (
    <div className="flex flex-wrap gap-2">
      <a href={gmailLink(to, subject, body)} target="_blank" rel="noopener noreferrer" className={base}>
        <GmailIcon /> Gmail
      </a>
      <a href={outlookLink(to, subject, body)} target="_blank" rel="noopener noreferrer" className={base}>
        <OutlookIcon /> Outlook
      </a>
      <a href={mailtoLink(to, subject, body)} className={base}>
        <Mail size={14} /> Mail app
      </a>
      <button type="button" onClick={copy} className={base} aria-label={`Copy ${to}`}>
        {copied ? <Check size={14} className="text-live" /> : <Copy size={14} />}
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
}

function GmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M2 6.5v11A1.5 1.5 0 0 0 3.5 19H6V9.8L2 6.5z" />
      <path fill="#34A853" d="M18 19h2.5a1.5 1.5 0 0 0 1.5-1.5v-11l-4 3.3V19z" />
      <path fill="#FBBC04" d="M18 5.5v4.3l4-3.3V5.4c0-1.3-1.5-2-2.5-1.2L18 5.5z" />
      <path fill="#EA4335" d="M6 9.8V5.5l6 4.6 6-4.6v4.3l-6 4.6-6-4.6z" />
      <path fill="#C5221F" d="M2 5.4v1.1l4 3.3V5.5L4.5 4.2C3.5 3.4 2 4.1 2 5.4z" />
    </svg>
  );
}

function OutlookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="4" width="13" height="16" rx="2" fill="#0F6CBD" />
      <ellipse cx="8.5" cy="12" rx="3" ry="3.6" fill="none" stroke="#fff" strokeWidth="1.8" />
      <path fill="#28A8EA" d="M15 7h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-6V7z" />
      <path fill="#fff" d="m15 9 3.5 2.5L22 9v1.2l-3.5 2.5L15 10.2z" opacity=".9" />
    </svg>
  );
}
