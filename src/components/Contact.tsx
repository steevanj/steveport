import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Check,
  CircleCheck,
  Clock,
  Copy,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { contact, wizard } from '@/data/site';
import type { BriefPrefill } from './brief';

const STEPS = ['Project', 'Features', 'Timeline', 'Budget', 'Contact'] as const;

type Form = {
  businessType: string;
  features: string[];
  timeline: string;
  budget: string;
  name: string;
  email: string;
  company: string;
  preferred: string;
  description: string;
};

const empty: Form = {
  businessType: '',
  features: [],
  timeline: '',
  budget: '',
  name: '',
  email: '',
  company: '',
  preferred: 'Email',
  description: '',
};

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

function buildBrief(f: Form, note?: string) {
  return [
    'New project brief — stevedev.live',
    '',
    `Project type: ${f.businessType}`,
    `Features: ${f.features.length ? f.features.join(', ') : 'Not sure yet'}`,
    `Timeline: ${f.timeline}`,
    `Budget: ${f.budget}`,
    note ? `\n${note}` : '',
    '',
    `Name: ${f.name}`,
    `Email: ${f.email}`,
    `Company: ${f.company || '—'}`,
    `Preferred contact: ${f.preferred}`,
    '',
    'About the project:',
    f.description,
  ]
    .filter((line, i, arr) => !(line === '' && arr[i - 1] === ''))
    .join('\n');
}

export default function Contact({ prefill }: { prefill: BriefPrefill | null }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Form>(empty);
  const [note, setNote] = useState<string | undefined>();
  const [touched, setTouched] = useState(false);
  const [sent, setSent] = useState<null | 'email' | 'whatsapp'>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!prefill) return;
    setForm((f) => ({
      ...f,
      businessType: prefill.businessType ?? f.businessType,
      features: prefill.features ?? f.features,
      timeline: prefill.timeline ?? f.timeline,
      budget: prefill.budget ?? f.budget,
    }));
    setNote(prefill.note);
    setSent(null);
    setStep(0);
  }, [prefill]);

  const set = <K extends keyof Form>(key: K, value: Form[K]) => setForm((f) => ({ ...f, [key]: value }));

  const stepValid = [
    !!form.businessType,
    true,
    !!form.timeline,
    !!form.budget,
    form.name.trim().length > 1 && emailOk(form.email) && form.description.trim().length > 9,
  ];

  const next = () => {
    if (!stepValid[step]) {
      setTouched(true);
      return;
    }
    setTouched(false);
    setStep((s) => Math.min(STEPS.length - 1, s + 1));
  };

  const back = () => {
    setTouched(false);
    setStep((s) => Math.max(0, s - 1));
  };

  const send = (channel: 'email' | 'whatsapp') => {
    if (!stepValid[4]) {
      setTouched(true);
      return;
    }
    const brief = buildBrief(form, note);
    if (channel === 'email') {
      const subject = `Project brief: ${form.businessType} — ${form.name}${form.company ? ` (${form.company})` : ''}`;
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(brief)}`;
    } else {
      window.open(`${contact.whatsapp}?text=${encodeURIComponent(brief)}`, '_blank', 'noopener,noreferrer');
    }
    setSent(channel);
  };

  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(buildBrief(form, note));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const reset = () => {
    setForm(empty);
    setNote(undefined);
    setStep(0);
    setSent(null);
    setTouched(false);
  };

  const progress = ((step + 1) / STEPS.length) * 100;
  const showError = touched && !stepValid[step];

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute top-20 left-1/2 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      <div className="container-x relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Left: pitch + channels */}
        <div data-reveal>
          <p className="eyebrow">Start a project</p>
          <h2 className="section-title mt-4">Let’s build something that grows your business.</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            Answer five quick questions and I’ll reply with next steps, a rough plan and honest feedback on your idea —
            <strong className="text-ink"> {contact.responseTime.toLowerCase()}</strong>.
          </p>

          <ol className="mt-8 space-y-4">
            {[
              'I review your brief and reply within 24 hours',
              'We jump on a free 20–30 min discovery call',
              'You get a written scope & fixed quote within 48 hours',
            ].map((t, i) => (
              <li key={t} className="flex items-center gap-3.5 text-[15px] font-semibold">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink font-mono text-[13px] text-white">
                  {i + 1}
                </span>
                {t}
              </li>
            ))}
          </ol>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <a
              href={`mailto:${contact.email}`}
              className="card card-hover flex items-center gap-3 border-accent/30 p-4 sm:col-span-2"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-white">
                <Mail size={18} />
              </span>
              <span className="min-w-0">
                <span className="block text-[12px] font-semibold text-muted">Email me directly</span>
                <span className="block text-[16px] font-extrabold break-all">{contact.email}</span>
              </span>
              <ArrowRight size={18} className="ml-auto shrink-0 text-accent" />
            </a>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="card card-hover flex items-center gap-3 p-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                <MessageCircle size={18} />
              </span>
              <span>
                <span className="block text-[12px] font-semibold text-muted">WhatsApp</span>
                <span className="block text-[14px] font-bold">{contact.phoneDisplay}</span>
              </span>
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="card card-hover flex items-center gap-3 p-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-50 text-sky-700">
                <Linkedin size={18} />
              </span>
              <span>
                <span className="block text-[12px] font-semibold text-muted">LinkedIn</span>
                <span className="block text-[14px] font-bold">{contact.linkedinHandle}</span>
              </span>
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="card card-hover flex items-center gap-3 p-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-ink">
                <Github size={18} />
              </span>
              <span>
                <span className="block text-[12px] font-semibold text-muted">GitHub</span>
                <span className="block text-[14px] font-bold">{contact.githubHandle}</span>
              </span>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-[14px]">
            <span className="flex items-center gap-2 font-semibold text-ink-soft">
              <Clock size={16} className="text-accent" /> Response time: {contact.responseTime}
            </span>
            <a href={contact.bookingUrl} className="flex items-center gap-2 font-bold text-accent hover:underline">
              <CalendarCheck size={16} /> Prefer a call? Book one
            </a>
          </div>
        </div>

        {/* Right: wizard */}
        <div data-reveal style={{ ['--reveal-delay' as string]: '120ms' }}>
          <div className="card overflow-hidden shadow-2xl shadow-ink/10">
            {sent ? (
              <div className="step-in flex flex-col items-center px-6 py-16 text-center md:px-12">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-live/12 text-live">
                  <CircleCheck size={34} />
                </span>
                <h3 className="mt-6 text-2xl font-extrabold tracking-tight">Your brief is ready to go!</h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
                  {sent === 'email'
                    ? 'Your email app should have opened with everything filled in — just hit send.'
                    : 'WhatsApp should have opened with your brief — just hit send.'}{' '}
                  Didn’t open? Copy the brief and send it to <strong className="text-ink">{contact.email}</strong>.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <button type="button" onClick={copyBrief} className="btn btn-ghost">
                    {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? 'Copied!' : 'Copy brief'}
                  </button>
                  <button type="button" onClick={reset} className="btn btn-dark">
                    Start a new brief
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Progress */}
                <div className="border-b border-line p-6 pb-5 md:px-8">
                  <div className="flex items-center justify-between text-[13px] font-semibold">
                    <span className="text-muted">
                      Step {step + 1} of {STEPS.length}
                    </span>
                    <span className="text-accent">{STEPS[step]}</span>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-violet-500 transition-[width] duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  {note && (
                    <p className="mt-4 flex items-start gap-2 rounded-xl bg-accent-soft px-3.5 py-2.5 text-[13px] font-medium text-accent-dark">
                      <Sparkles size={15} className="mt-0.5 shrink-0" />
                      Pre-filled from the scope estimator — review and continue.
                    </p>
                  )}
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (step < STEPS.length - 1) next();
                    else send('email');
                  }}
                  className="p-6 md:p-8"
                  noValidate
                >
                  <div key={step} className="step-in min-h-[300px]">
                    {step === 0 && (
                      <fieldset>
                        <legend className="text-xl font-extrabold tracking-tight">What are you looking to build?</legend>
                        <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                          {wizard.businessTypes.map((t) => (
                            <button
                              type="button"
                              key={t}
                              aria-pressed={form.businessType === t}
                              onClick={() => set('businessType', t)}
                              className="option"
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </fieldset>
                    )}

                    {step === 1 && (
                      <fieldset>
                        <legend className="text-xl font-extrabold tracking-tight">Which features do you need?</legend>
                        <p className="mt-1 text-[14px] text-muted">Pick all that apply — or skip if you’re not sure yet.</p>
                        <div className="mt-5 flex flex-wrap gap-2.5">
                          {wizard.features.map((f) => {
                            const on = form.features.includes(f);
                            return (
                              <button
                                type="button"
                                key={f}
                                role="checkbox"
                                aria-checked={on}
                                onClick={() =>
                                  set('features', on ? form.features.filter((x) => x !== f) : [...form.features, f])
                                }
                                className="option inline-flex items-center gap-2 !rounded-full !px-4 !py-2.5 text-[14px]"
                              >
                                {on && <Check size={14} strokeWidth={3} />}
                                {f}
                              </button>
                            );
                          })}
                        </div>
                      </fieldset>
                    )}

                    {step === 2 && (
                      <fieldset>
                        <legend className="text-xl font-extrabold tracking-tight">When do you need it?</legend>
                        <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                          {wizard.timelines.map((t) => (
                            <button
                              type="button"
                              key={t}
                              aria-pressed={form.timeline === t}
                              onClick={() => set('timeline', t)}
                              className="option"
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </fieldset>
                    )}

                    {step === 3 && (
                      <fieldset>
                        <legend className="text-xl font-extrabold tracking-tight">Do you have a budget in mind?</legend>
                        <p className="mt-1 text-[14px] text-muted">
                          Just a rough range so I can suggest the right scope — pricing is always flexible. “Not sure yet” is perfectly fine.
                        </p>
                        <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                          {wizard.budgets.map((b) => (
                            <button
                              type="button"
                              key={b}
                              aria-pressed={form.budget === b}
                              onClick={() => set('budget', b)}
                              className="option"
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </fieldset>
                    )}

                    {step === 4 && (
                      <div>
                        <h3 className="text-xl font-extrabold tracking-tight">Where should I send my reply?</h3>
                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                          <label className="block">
                            <span className="text-[13px] font-bold">Name *</span>
                            <input
                              className="field mt-1.5"
                              value={form.name}
                              onChange={(e) => set('name', e.target.value)}
                              autoComplete="name"
                              placeholder="Jane Smith"
                              aria-invalid={touched && form.name.trim().length < 2}
                            />
                          </label>
                          <label className="block">
                            <span className="text-[13px] font-bold">Email *</span>
                            <input
                              className="field mt-1.5"
                              type="email"
                              value={form.email}
                              onChange={(e) => set('email', e.target.value)}
                              autoComplete="email"
                              placeholder="jane@company.com"
                              aria-invalid={touched && !emailOk(form.email)}
                            />
                          </label>
                          <label className="block">
                            <span className="text-[13px] font-bold">Company</span>
                            <input
                              className="field mt-1.5"
                              value={form.company}
                              onChange={(e) => set('company', e.target.value)}
                              autoComplete="organization"
                              placeholder="Optional"
                            />
                          </label>
                          <label className="block">
                            <span className="text-[13px] font-bold">Preferred contact</span>
                            <select
                              className="field mt-1.5"
                              value={form.preferred}
                              onChange={(e) => set('preferred', e.target.value)}
                            >
                              <option>Email</option>
                              <option>WhatsApp</option>
                              <option>Video call</option>
                            </select>
                          </label>
                          <label className="block sm:col-span-2">
                            <span className="text-[13px] font-bold">Tell me about the project *</span>
                            <textarea
                              className="field mt-1.5 resize-none"
                              rows={4}
                              value={form.description}
                              onChange={(e) => set('description', e.target.value)}
                              placeholder="What problem are you solving, who are the users, and is there an existing app or design?"
                              aria-invalid={touched && form.description.trim().length < 10}
                            />
                          </label>
                        </div>
                      </div>
                    )}
                  </div>

                  {showError && (
                    <p role="alert" className="mt-4 text-[14px] font-semibold text-rose-600">
                      {step === 4
                        ? 'Please add your name, a valid email and a short project description.'
                        : 'Please choose an option to continue.'}
                    </p>
                  )}

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
                    <button
                      type="button"
                      onClick={back}
                      disabled={step === 0}
                      className="inline-flex items-center gap-1.5 text-[15px] font-bold text-muted transition-colors hover:text-ink disabled:invisible"
                    >
                      <ArrowLeft size={16} /> Back
                    </button>

                    {step < STEPS.length - 1 ? (
                      <button type="submit" className="btn btn-primary">
                        Continue <ArrowRight size={16} />
                      </button>
                    ) : (
                      <div className="flex flex-wrap gap-2.5">
                        <button type="button" onClick={() => send('whatsapp')} className="btn btn-ghost">
                          <MessageCircle size={16} /> Send via WhatsApp
                        </button>
                        <button type="submit" className="btn btn-primary">
                          <Mail size={16} /> Send brief
                        </button>
                      </div>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
          <p className="mt-4 text-center text-[13px] text-muted">
            No spam, no obligation. Your details are only used to reply to you.
          </p>
        </div>
      </div>
    </section>
  );
}
