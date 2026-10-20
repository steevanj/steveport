import { ArrowRight, CalendarCheck } from 'lucide-react';
import { contact } from '@/data/site';

export default function FinalCTA() {
  return (
    <section className="px-4 pb-6 md:px-6">
      <div className="bg-night-grid relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px] px-6 py-20 text-center text-white md:py-28" data-reveal>
        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-violet-600/30 blur-[100px]" />
        <div className="relative mx-auto max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[13px] font-semibold">
            <span className="live-dot" /> {contact.availability}
          </p>
          <h2 className="mt-7 text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.03] font-extrabold tracking-[-0.045em]">
            Have a project in mind? <br className="hidden sm:block" />
            <span className="text-sky-300">Let’s make it real.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-slate-300">
            Whether it’s a new SaaS, an API for your app, or a Django project that needs rescuing — the first conversation is
            free and you’ll leave with a clear next step.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#contact" className="btn btn-primary">
              Start a project <ArrowRight size={16} />
            </a>
            <a href={contact.bookingUrl} className="btn btn-ghost-dark">
              <CalendarCheck size={16} /> Book a free call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
