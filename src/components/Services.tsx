import { ArrowUpRight, Boxes, Check, Gauge, Layers, LifeBuoy, Plug, Server } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { services, type ServiceIcon } from '@/data/site';

const icons: Record<ServiceIcon, LucideIcon> = {
  web: Layers,
  saas: Boxes,
  api: Plug,
  devops: Server,
  speed: Gauge,
  support: LifeBuoy,
};

export default function Services() {
  return (
    <section id="services" className="border-t border-line bg-white py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end" data-reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Services</p>
            <h2 className="section-title mt-4">Outcomes, not just code.</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
              You’re not hiring someone who “knows Django”. You’re hiring an engineer who delivers a working, scalable
              product — and stays accountable for it.
            </p>
          </div>
          <a href="#pricing" className="btn btn-ghost shrink-0">
            See pricing <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <article
                key={s.title}
                data-reveal
                style={{ ['--reveal-delay' as string]: `${(i % 3) * 90}ms` }}
                className="card card-hover group relative flex flex-col overflow-hidden p-7"
              >
                <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent/0 blur-2xl transition-colors duration-500 group-hover:bg-accent/15" />
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-soft text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon size={22} />
                </span>
                <h3 className="mt-6 text-xl font-extrabold tracking-tight">{s.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">{s.outcome}</p>
                <ul className="mt-5 space-y-2">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2.5 text-[14px] font-semibold">
                      <Check size={15} strokeWidth={3} className="text-accent" />
                      {d}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-6 text-[13px] text-muted">
                  <span className="font-semibold text-ink-soft">Ideal for:</span> {s.idealFor}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
