import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { contact, navLinks } from '@/data/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = '';
      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (el && el.getBoundingClientRect().top <= 120) current = link.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-line bg-canvas/85 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-x flex h-[72px] items-center justify-between gap-6" aria-label="Main">
        <a href="#top" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink font-mono text-sm font-bold text-white transition-transform group-hover:-rotate-6">
            S/
          </span>
          <span className="text-[17px] font-extrabold tracking-tight">
            steve<span className="text-accent">.dev</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-[14px] font-semibold transition-colors ${
                active === link.href ? 'bg-white text-ink shadow-sm ring-1 ring-line' : 'text-muted hover:text-ink'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <span className="flex items-center gap-2 text-[13px] font-semibold text-ink-soft">
            <span className="live-dot" />
            Available
          </span>
          <a href="#contact" className="btn btn-primary !px-5 !py-2.5 !text-[14px]">
            Start a project <ArrowRight size={15} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="h-[calc(100dvh-72px)] overflow-y-auto border-t border-line bg-canvas lg:hidden">
          <div className="container-x flex flex-col gap-1 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-2xl font-extrabold tracking-tight"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary mt-6">
              Start a project <ArrowRight size={16} />
            </a>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-3">
              Chat on WhatsApp
            </a>
            <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted">
              <span className="live-dot" /> {contact.availability}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
