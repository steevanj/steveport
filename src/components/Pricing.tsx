import { useMemo, useState } from 'react';
import { ArrowRight, Check, Clock, Handshake, Ruler, Sparkles } from 'lucide-react';
import { estimator, pricingPlans } from '@/data/site';
import type { BriefPrefill } from './brief';

// Estimator ids → wording used by the brief wizard.
const typeToBrief: Record<string, string> = {
  website: 'Business web app',
  webapp: 'Business web app',
  saas: 'SaaS product',
  api: 'API for web / mobile app',
  fix: 'Fix or scale an existing app',
};

const featureToBrief: Record<string, string> = {
  auth: 'User accounts & roles',
  payments: 'Payments & subscriptions',
  integrations: 'Third-party integrations',
  dashboard: 'Admin dashboard',
  jobs: 'Background jobs',
  realtime: 'Real-time features',
  tenancy: 'Multi-tenancy',
  deploy: 'Deployment & DevOps',
};

// Packages (same order as pricingPlans) → brief defaults.
const planToBrief: Omit<BriefPrefill, 'nonce'>[] = [
  {},
  { businessType: 'Business web app' },
  { businessType: 'SaaS product' },
];

export default function Pricing({ onPrefill }: { onPrefill: (p: BriefPrefill) => void }) {
  const [typeId, setTypeId] = useState(estimator.types[1].id);
  const [screens, setScreens] = useState(8);
  const [features, setFeatures] = useState<string[]>(['auth', 'deploy']);

  const result = useMemo(() => {
    const type = estimator.types.find((t) => t.id === typeId) ?? estimator.types[0];
    let days = type.days + Math.max(0, screens - estimator.includedScreens) * estimator.perScreenDays;
    for (const f of estimator.features) {
      if (features.includes(f.id)) days += f.days;
    }
    const size = estimator.sizes.find((s) => days <= s.maxDays) ?? estimator.sizes[estimator.sizes.length - 1];
    const minWeeks = Math.max(1, Math.ceil(days / 5));
    const maxWeeks = Math.max(minWeeks + 1, Math.ceil((days * 1.3) / 5));
    return { type, size, minWeeks, maxWeeks };
  }, [typeId, screens, features]);

  const toggleFeature = (id: string) =>
    setFeatures((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));

  const sendEstimate = () => {
    onPrefill({
      businessType: typeToBrief[typeId],
      features: features.map((f) => featureToBrief[f]).filter(Boolean),
      note: `Scope estimator: ${result.type.label}, ~${screens} pages/screens — ${result.size.label.toLowerCase()}, ~${result.minWeeks}–${result.maxWeeks} weeks.`,
      nonce: Date.now(),
    });
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="border-t border-line bg-white py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="eyebrow">Packages</p>
          <h2 className="section-title mt-4">Flexible pricing that fits your budget.</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            Every project is different, so there are no fixed price tags. We agree the scope together on a free call, and you
            get a clear written quote before any work starts.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <article
              key={plan.name}
              data-reveal
              style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
              className={`relative flex flex-col rounded-3xl p-8 ${
                plan.featured
                  ? 'bg-ink text-white shadow-2xl shadow-accent/25 ring-2 ring-accent lg:-my-4 lg:py-12'
                  : 'card'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-[12px] font-bold text-white">
                  <Sparkles size={13} /> Most popular
                </span>
              )}
              <h3 className="text-2xl font-extrabold tracking-tight">{plan.name}</h3>
              <p className={`mt-2 text-[15px] leading-relaxed ${plan.featured ? 'text-slate-300' : 'text-muted'}`}>
                {plan.description}
              </p>
              <p className={`mt-5 flex items-center gap-1.5 text-[13px] font-semibold ${plan.featured ? 'text-sky-300' : 'text-accent'}`}>
                <Clock size={14} /> Typical timeline: {plan.timeline}
              </p>
              <ul className="mt-7 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[15px]">
                    <Check size={17} strokeWidth={3} className={`mt-0.5 shrink-0 ${plan.featured ? 'text-sky-300' : 'text-live'}`} />
                    <span className={plan.featured ? 'text-slate-100' : 'text-ink-soft'}>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <a
                  href="#contact"
                  onClick={() => onPrefill({ ...planToBrief[i], nonce: Date.now() })}
                  className={`btn w-full ${plan.featured ? 'btn-primary' : 'btn-ghost'}`}
                >
                  {plan.cta} <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div
          className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed border-line bg-canvas px-6 py-5 text-center md:flex-row md:text-left"
          data-reveal
        >
          <p className="flex items-center gap-3 text-[15px] text-ink-soft">
            <Handshake size={20} className="hidden shrink-0 text-accent md:block" />
            <span>
              <span className="font-extrabold text-ink">Tight budget?</span> Tell me what you have — I’ll suggest the scope that
              gets you the most value for it. Monthly support retainers are also available.
            </span>
          </p>
          <a href="#contact" className="shrink-0 text-[15px] font-bold text-accent hover:underline">
            Get a free quote →
          </a>
        </div>

        {/* Scope estimator */}
        <div id="estimate" className="mt-20 overflow-hidden rounded-3xl border border-line bg-canvas" data-reveal>
          <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
            <div className="p-6 md:p-10">
              <p className="flex items-center gap-2 text-[13px] font-bold tracking-[0.14em] text-accent uppercase">
                <Ruler size={16} /> Project scope estimator
              </p>
              <h3 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">How big is your project?</h3>
              <p className="mt-2 text-[15px] text-muted">Answer three questions to see the project size and a rough timeline.</p>

              <fieldset className="mt-8">
                <legend className="text-[14px] font-bold">1. What are you building?</legend>
                <div className="mt-3 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
                  {estimator.types.map((t) => (
                    <button
                      type="button"
                      key={t.id}
                      aria-pressed={typeId === t.id}
                      onClick={() => setTypeId(t.id)}
                      className="option"
                    >
                      <span className="block">{t.label}</span>
                      <span className="mt-0.5 block text-[12px] font-medium text-muted">{t.hint}</span>
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="mt-8">
                <label htmlFor="screens" className="flex items-center justify-between text-[14px] font-bold">
                  <span>2. Roughly how many pages / screens?</span>
                  <span className="rounded-lg bg-white px-2.5 py-1 font-mono text-accent ring-1 ring-line">{screens}</span>
                </label>
                <input
                  id="screens"
                  type="range"
                  min={1}
                  max={40}
                  value={screens}
                  onChange={(e) => setScreens(Number(e.target.value))}
                  className="mt-4 w-full accent-[#2563eb]"
                />
              </div>

              <fieldset className="mt-8">
                <legend className="text-[14px] font-bold">3. Which features do you need?</legend>
                <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {estimator.features.map((f) => {
                    const on = features.includes(f.id);
                    return (
                      <button
                        type="button"
                        key={f.id}
                        role="checkbox"
                        aria-checked={on}
                        onClick={() => toggleFeature(f.id)}
                        className="option flex items-center gap-3 !py-3 text-[14px]"
                      >
                        <span
                          className={`grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 transition-colors ${
                            on ? 'border-accent bg-accent text-white' : 'border-slate-300'
                          }`}
                        >
                          {on && <Check size={13} strokeWidth={3.5} />}
                        </span>
                        {f.label}
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            </div>

            {/* Result */}
            <div className="bg-night-grid flex flex-col justify-between p-6 text-white md:p-10">
              <div className="lg:sticky lg:top-28" aria-live="polite">
                <p className="text-[13px] font-bold tracking-[0.14em] text-sky-300 uppercase">Your project</p>
                <p className="mt-4 text-[clamp(2rem,3vw,2.6rem)] leading-tight font-extrabold tracking-[-0.04em]">
                  {result.size.label}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-300">{result.size.text}</p>
                <p className="mt-5 flex items-center gap-2 text-[16px] font-semibold">
                  <Clock size={17} className="text-sky-300" /> About {result.minWeeks}–{result.maxWeeks} weeks
                </p>

                <ul className="mt-8 space-y-2.5 border-t border-white/10 pt-6 text-[14px] text-slate-300">
                  <li className="flex justify-between gap-4">
                    <span>Project type</span>
                    <span className="font-semibold text-white">{result.type.label}</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>Pages / screens</span>
                    <span className="font-semibold text-white">{screens}</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>Features</span>
                    <span className="font-semibold text-white">{features.length}</span>
                  </li>
                </ul>

                <button type="button" onClick={sendEstimate} className="btn btn-primary mt-8 w-full">
                  Get my free quote <ArrowRight size={16} />
                </button>
                <p className="mt-3 text-center text-[12px] text-slate-400">
                  Free and no obligation. Pricing is agreed together after a short call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
