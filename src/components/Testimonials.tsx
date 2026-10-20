import { Star } from 'lucide-react';
import { testimonials } from '@/data/site';

// Hidden until real testimonials are added in src/data/site.ts.
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="py-24 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl" data-reveal>
          <p className="eyebrow">Testimonials</p>
          <h2 className="section-title mt-4">What clients say.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} data-reveal className="card flex flex-col p-7">
              <div className="flex gap-1 text-amber-400" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-5 text-[16px] leading-relaxed text-ink-soft">“{t.quote}”</blockquote>
              <figcaption className="mt-auto pt-6">
                <p className="font-bold">{t.name}</p>
                <p className="text-[13px] text-muted">{t.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
