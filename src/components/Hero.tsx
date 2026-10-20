import { ArrowRight, CalendarCheck, Check } from 'lucide-react';
import { contact, promises } from '@/data/site';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[72px]">
      {/* Background art */}
      <div className="bg-dots pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000,transparent)]" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-60 left-[-15%] h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="container-x relative flex flex-col items-center pt-16 pb-24 text-center md:pt-24 lg:pb-32">
        <div className="hero-in chip !py-2 !pr-4" style={{ ['--d' as string]: '0ms' }}>
          <span className="live-dot" />
          <span>
            {contact.availability} <span className="text-muted">· replies within 24h</span>
          </span>
        </div>

        <p className="hero-in mt-7 font-mono text-[13px] font-medium tracking-wide text-muted" style={{ ['--d' as string]: '80ms' }}>
          {contact.name} — {contact.role}
        </p>

        <h1
          className="hero-in mt-4 max-w-5xl text-[clamp(2.5rem,6.5vw,5.2rem)] leading-[1.02] font-extrabold tracking-[-0.045em]"
          style={{ ['--d' as string]: '140ms' }}
        >
          Django developer helping businesses build{' '}
          <span className="text-gradient">scalable web applications.</span>
        </h1>

        <p
          className="hero-in mt-7 max-w-[44rem] text-[17px] leading-relaxed text-ink-soft md:text-[19px]"
          style={{ ['--d' as string]: '220ms' }}
        >
          Backend engineer specialising in <strong className="font-semibold text-ink">Django, DRF, SaaS architecture</strong>,
          multi-tenant systems, API development, Redis, Celery and DevOps. I turn your idea — or your slow, fragile app — into
          a product that’s fast, secure and ready to grow.
        </p>

        <div className="hero-in mt-10 flex flex-wrap items-center justify-center gap-3" style={{ ['--d' as string]: '300ms' }}>
          <a href="#contact" className="btn btn-primary">
            Hire me <ArrowRight size={17} />
          </a>
          <a href="#work" className="btn btn-ghost">
            View projects
          </a>
          <a
            href={contact.bookingUrl}
            className="group inline-flex items-center gap-2 px-3 py-3 text-[15px] font-bold text-ink hover:text-accent"
          >
            <CalendarCheck size={18} className="text-accent" />
            <span className="underline decoration-line decoration-2 underline-offset-4 group-hover:decoration-accent">
              Schedule a free consultation
            </span>
          </a>
        </div>

        <ul className="hero-in mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2" style={{ ['--d' as string]: '380ms' }}>
          {promises.map((p) => (
            <li key={p} className="flex items-center gap-2 text-[14px] font-semibold text-ink-soft">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-live/12 text-live">
                <Check size={13} strokeWidth={3} />
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
