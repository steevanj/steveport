import { proofStats, techStack } from '@/data/site';

const marqueeItems = techStack.flatMap((g) => g.items);

export default function ProofBar() {
  return (
    <section aria-label="Track record" className="border-y border-line bg-white">
      <div className="container-x grid grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
        {proofStats.map((s, i) => (
          <div
            key={s.label}
            data-reveal
            style={{ ['--reveal-delay' as string]: `${i * 80}ms` }}
            className={`px-2 py-8 md:px-8 md:py-10 ${i < 2 ? 'border-b border-line md:border-b-0' : ''}`}
          >
            <p className="text-4xl font-extrabold tracking-[-0.04em] md:text-5xl">{s.value}</p>
            <p className="mt-2 text-[15px] font-bold">{s.label}</p>
            <p className="mt-0.5 text-[13px] text-muted">{s.note}</p>
          </div>
        ))}
      </div>

      <div className="marquee overflow-hidden border-t border-line py-5" aria-hidden="true">
        <div className="marquee-track gap-10">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-10 font-mono text-[14px] font-medium text-muted">
              {item}
              <span className="h-1 w-1 rounded-full bg-line" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
