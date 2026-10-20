import { ArrowUpRight, Github, Target, TrendingUp, Wrench } from 'lucide-react';
import { caseStudies } from '@/data/site';

export default function Work() {
  return (
    <section id="work" className="bg-night-grid relative overflow-hidden py-24 text-white md:py-32">
      <div className="container-x relative">
        <div className="max-w-3xl" data-reveal>
          <p className="eyebrow !text-sky-300">Portfolio & case studies</p>
          <h2 className="section-title mt-4">
            Real platforms. Real users. <span className="text-sky-300">Real results.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-slate-300">
            Not tutorials or clones — backend work running in production. Here’s the problem, what I did, and what changed.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {caseStudies.map((c, i) => (
            <article
              key={c.name}
              data-reveal
              className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-colors duration-300 hover:border-white/20 lg:grid-cols-[0.9fr_1.1fr]"
            >
              {/* Summary column */}
              <div className="flex flex-col border-b border-white/10 p-7 md:p-9 lg:border-r lg:border-b-0">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[13px] text-slate-400">0{i + 1}</span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-[12px] font-semibold">
                    {c.status === 'Live' && <span className="live-dot" />}
                    {c.status}
                  </span>
                </div>
                <h3 className="mt-6 text-3xl font-extrabold tracking-tight md:text-4xl">{c.name}</h3>
                <p className="mt-2 text-[15px] text-slate-300">{c.category}</p>
                <p className="mt-1 font-mono text-[12px] text-slate-400">Role: {c.role}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {c.stack.map((t) => (
                    <span key={t} className="rounded-full bg-white/[0.07] px-3 py-1 font-mono text-[12px] text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-8">
                  {c.liveUrl && (
                    <a href={c.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary !px-5 !py-2.5 !text-[14px]">
                      Live site <ArrowUpRight size={15} />
                    </a>
                  )}
                  {c.codeUrl && (
                    <a href={c.codeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-dark !px-5 !py-2.5 !text-[14px]">
                      <Github size={15} /> GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Story column */}
              <div className="grid gap-7 p-7 md:p-9">
                <div>
                  <p className="flex items-center gap-2 text-[12px] font-bold tracking-[0.14em] text-rose-300 uppercase">
                    <Target size={14} /> The problem
                  </p>
                  <p className="mt-2.5 text-[16px] leading-relaxed text-slate-200">{c.problem}</p>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-[12px] font-bold tracking-[0.14em] text-sky-300 uppercase">
                    <Wrench size={14} /> My solution
                  </p>
                  <p className="mt-2.5 text-[16px] leading-relaxed text-slate-200">{c.solution}</p>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-[12px] font-bold tracking-[0.14em] text-emerald-300 uppercase">
                    <TrendingUp size={14} /> The result
                  </p>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-3">
                    {c.results.map((r) => (
                      <li
                        key={r}
                        className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] p-3 text-[14px] leading-snug font-semibold text-emerald-50"
                      >
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-accent/25 to-violet-600/20 p-8 md:flex-row md:items-center"
          data-reveal
        >
          <div>
            <p className="text-2xl font-extrabold tracking-tight">Your project could be the next case study.</p>
            <p className="mt-1 text-slate-300">Tell me what you’re building — I’ll reply with a plan within 24 hours.</p>
          </div>
          <a href="#contact" className="btn bg-white !text-ink hover:bg-slate-100">
            Start your project <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
