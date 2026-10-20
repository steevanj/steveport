import { Cloud, Code2, Database, Lock, Server, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { techStack } from '@/data/site';

const groupIcons: Record<string, LucideIcon> = {
  Backend: Code2,
  Database: Database,
  Security: Lock,
  DevOps: Server,
  Cloud: Cloud,
  Tools: Wrench,
};

export default function TechStack() {
  return (
    <section id="stack" className="border-y border-line bg-white py-24 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div data-reveal>
          <p className="eyebrow">Technology stack</p>
          <h2 className="section-title mt-4">Battle-tested tools for production software.</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            I pick boring, proven technology on purpose. It’s easier to hire for, cheaper to run and it keeps working at 3 a.m.
          </p>
          <div className="mt-8 rounded-2xl bg-ink p-5 font-mono text-[13px] leading-relaxed text-slate-300">
            <p>
              <span className="text-sky-400">$</span> pip install <span className="text-white">django djangorestframework celery redis</span>
            </p>
            <p>
              <span className="text-sky-400">$</span> docker compose up <span className="text-slate-500">-d</span>
            </p>
            <p className="text-emerald-400">✓ api, worker, db, cache — healthy</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {techStack.map((g, i) => {
            const Icon = groupIcons[g.group] ?? Code2;
            return (
              <div
                key={g.group}
                data-reveal
                style={{ ['--reveal-delay' as string]: `${(i % 2) * 90}ms` }}
                className="rounded-2xl border border-line bg-canvas p-5"
              >
                <p className="flex items-center gap-2.5 text-[15px] font-extrabold">
                  <Icon size={18} className="text-accent" />
                  {g.group}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span key={item} className="chip !text-[13px] transition-colors hover:border-accent hover:text-accent">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
