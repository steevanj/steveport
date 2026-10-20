import { Plus } from 'lucide-react';
import { contact, faqs } from '@/data/site';

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-line bg-white py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div data-reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title mt-4">Questions clients usually ask.</h2>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            Something else on your mind? Email{' '}
            <a href={`mailto:${contact.email}`} className="font-bold text-accent hover:underline">
              {contact.email}
            </a>{' '}
            — I reply {contact.responseTime.toLowerCase()}.
          </p>
        </div>

        <div className="divide-y divide-line border-y border-line" data-reveal>
          {faqs.map((f, i) => (
            <details key={f.q} className="faq-item group" open={i === 0}>
              <summary className="flex items-center justify-between gap-6 py-6 text-[17px] font-bold">
                {f.q}
                <span className="faq-icon grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line transition-all duration-300">
                  <Plus size={16} />
                </span>
              </summary>
              <p className="-mt-1 pr-12 pb-6 text-[16px] leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
