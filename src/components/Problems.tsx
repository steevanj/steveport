import { ArrowRight, CircleAlert, CircleCheck } from 'lucide-react';
import { painPoints } from '@/data/site';

export default function Problems() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="eyebrow">Sound familiar?</p>
          <h2 className="section-title mt-4">
            Your product deserves a backend that <span className="hl">doesn’t hold it back.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            Most of my clients come to me with one of these problems. Each has a clear, proven fix.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((p, i) => (
            <article
              key={p.pain}
              data-reveal
              style={{ ['--reveal-delay' as string]: `${(i % 3) * 90}ms` }}
              className="card card-hover flex flex-col p-6"
            >
              <p className="flex items-start gap-3 text-[16px] font-bold leading-snug">
                <CircleAlert size={20} className="mt-0.5 shrink-0 text-rose-500" />
                {p.pain}
              </p>
              <div className="my-5 h-px bg-line" />
              <p className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-soft">
                <CircleCheck size={20} className="mt-0.5 shrink-0 text-live" />
                {p.fix}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center" data-reveal>
          <a href="#contact" className="btn btn-dark">
            Tell me what’s slowing you down <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
