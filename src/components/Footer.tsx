import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { contact, navLinks, services } from '@/data/site';

export default function Footer() {
  const socials = [
    { label: 'Email', href: `mailto:${contact.email}`, icon: Mail },
    { label: 'WhatsApp', href: contact.whatsapp, icon: MessageCircle },
    { label: 'LinkedIn', href: contact.linkedin, icon: Linkedin },
    { label: 'GitHub', href: contact.github, icon: Github },
  ];

  return (
    <footer className="pt-16 pb-28 lg:pb-10">
      <div className="container-x">
        <div className="grid gap-10 border-b border-line pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink font-mono text-sm font-bold text-white">S/</span>
              <span className="text-[17px] font-extrabold tracking-tight">
                steve<span className="text-accent">.dev</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-muted">
              {contact.role}. Helping startups and businesses build scalable Django products.
            </p>
            <a href={`mailto:${contact.email}`} className="mt-5 inline-block text-[15px] font-bold text-accent hover:underline">
              {contact.email}
            </a>
          </div>

          <div>
            <p className="text-[13px] font-bold tracking-wide text-muted uppercase">Services</p>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              {services.map((s) => (
                <li key={s.title}>
                  <a href="#services" className="text-ink-soft hover:text-accent">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[13px] font-bold tracking-wide text-muted uppercase">Explore</p>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              {[...navLinks, { label: 'Scope estimator', href: '#estimate' }, { label: 'Contact', href: '#contact' }].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-ink-soft hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[13px] font-bold tracking-wide text-muted uppercase">Connect</p>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ink-soft hover:text-accent"
                  >
                    <Icon size={15} /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-8 text-[13px] text-muted md:flex-row">
          <p>
            © {new Date().getFullYear()} {contact.fullName} · stevedev.live
          </p>
          <p>Freelance Django & Python backend developer · {contact.location}</p>
        </div>
      </div>
    </footer>
  );
}
