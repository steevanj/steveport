import { ShieldCheck } from 'lucide-react';
import { guarantees, processSteps } from '@/data/site';

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="eyebrow">How we’ll work together</p>
          <h2 className="section-title mt-4">A clear process. Zero guesswork.</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            Hiring a freelancer shouldn’t feel risky. You’ll always know what’s being built, when it ships and what it costs.
          </p>
        </div>

        <div className="relative mt-16">
        <div className="absolute top-7 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0 lg:block" />
        <ol className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <li
              key={step.title}
              data-reveal
              style={{ ['--reveal-delay' as string]: `${i * 110}ms` }}
              className="relative"
            >
              <span className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-ink font-mono text-lg font-bold text-white shadow-lg shadow-ink/20 lg:mx-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="card mt-5 h-[calc(100%-76px)] p-6 text-center lg:text-left">
                <p className="font-mono text-[12px] font-medium tracking-wide text-accent uppercase">{step.time}</p>
                <h3 className="mt-2 text-lg font-extrabold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        </div>

        <div className="mt-16 grid gap-4 rounded-3xl border border-line bg-white p-6 sm:grid-cols-2 md:p-8 lg:grid-cols-4" data-reveal>
          {guarantees.map((g) => (
            <div key={g.title} className="flex gap-3">
              <ShieldCheck size={22} className="mt-0.5 shrink-0 text-live" />
              <div>
                <p className="font-bold">{g.title}</p>
                <p className="mt-1 text-[14px] leading-relaxed text-muted">{g.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
