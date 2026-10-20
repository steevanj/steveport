import { FileText, Github, Linkedin, MapPin, Quote } from 'lucide-react';
import { about, contact } from '@/data/site';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div data-reveal>
          <p className="eyebrow">About me</p>
          <h2 className="section-title mt-4">{about.intro}</h2>
          <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink-soft">
            {about.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <figure className="mt-8 flex gap-4 rounded-2xl border-l-4 border-accent bg-accent-soft p-5">
            <Quote size={22} className="shrink-0 text-accent" />
            <blockquote className="text-[17px] font-bold leading-snug text-ink">
              <span className="block text-[12px] font-semibold tracking-[0.14em] text-accent uppercase">My mission</span>
              <span className="mt-1 block">{about.mission}</span>
            </blockquote>
          </figure>

          <div className="mt-8">
            <p className="text-[13px] font-bold tracking-wide text-muted uppercase">Industries I’ve worked with</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {about.industries.map((ind) => (
                <span key={ind} className="chip">
                  {ind}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-5 !py-2.5 !text-[14px]">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-5 !py-2.5 !text-[14px]">
              <Github size={16} /> GitHub
            </a>
            <a href={contact.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !px-5 !py-2.5 !text-[14px]">
              <FileText size={16} /> Résumé
            </a>
          </div>
        </div>

        <div data-reveal style={{ ['--reveal-delay' as string]: '120ms' }}>
          <div className="card overflow-hidden">
            <div className="border-b border-line p-6">
              <div>
                <p className="text-lg font-extrabold tracking-tight">{contact.fullName}</p>
                <p className="text-[14px] text-muted">{contact.role}</p>
                <p className="mt-1 flex items-center gap-1 text-[13px] text-muted">
                  <MapPin size={13} /> {contact.location}
                </p>
              </div>
            </div>

            <div className="relative p-6">
            <div className="absolute top-8 bottom-8 left-[31px] w-px bg-line" />
            <ol className="relative">
              {about.timeline.map((t, i) => (
                <li key={t.title} className={`relative flex gap-5 ${i > 0 ? 'mt-7' : ''}`}>
                  <span
                    className={`relative z-10 mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-[3px] border-white ring-1 ${
                      i === 0 ? 'bg-live ring-live' : 'bg-slate-300 ring-line'
                    }`}
                  />
                  <div>
                    <p className="font-mono text-[12px] text-muted">{t.when}</p>
                    <p className="mt-1 font-extrabold">{t.title}</p>
                    <p className="text-[14px] font-semibold text-accent">{t.where}</p>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">{t.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
