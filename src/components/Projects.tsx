import { useEffect, useRef } from 'react';
import { ExternalLink, Calendar, GitBranch } from 'lucide-react';

const projects = [
  {
    name: 'WeSalvator',
    subtitle: 'Animal Rescue & Welfare Platform',
    period: '09/2026 – Present',
    url: 'https://uat.wesalvator.com',
    color: 'green' as const,
    tags: ['Django', 'DRF', 'PostgreSQL', 'REST API', 'Security'],
    points: [
      'Contributed to developing and improving an animal rescue platform.',
      'Fixed bugs, optimized backend performance, and improved API reliability.',
      'Worked on security enhancements and overall application stability.',
    ],
    badge: 'LIVE',
  },
  {
    name: 'Crescent Academy',
    subtitle: 'Education Platform',
    period: '08/2026 – Present',
    url: 'https://crescentacademyedu.com',
    color: 'red' as const,
    tags: ['Django', 'Celery', 'Redis', 'ORM', 'JWT', 'MySQL'],
    points: [
      'Built Django APIs, authentication, and core backend workflows.',
      'Optimized ORM queries and resolved N+1 database issues.',
      'Integrated Celery and Redis for asynchronous email processing.',
    ],
    badge: 'LIVE',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative bg-grid">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-16 text-center">
          <p className="font-mono-code text-xs text-[#ff2222] tracking-widest mb-3">// PORTFOLIO</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Featured <span className="text-[#ff2222] text-glow-red">Projects</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#ff2222] to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className={`reveal project-card relative clip-corner border p-8 overflow-hidden scan-line ${
                project.color === 'green'
                  ? 'border-[#00ff4130] bg-[#00ff4105] hover:border-[#00ff4180]'
                  : 'border-[#ff222230] bg-[#ff22220a] hover:border-[#ff222280]'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Corner glow */}
              <div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full pointer-events-none"
                style={{
                  background: project.color === 'green'
                    ? 'radial-gradient(circle, #00ff4115 0%, transparent 70%)'
                    : 'radial-gradient(circle, #ff222215 0%, transparent 70%)',
                }}
              />

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className={`font-bold text-2xl ${
                      project.color === 'green' ? 'text-[#00ff41]' : 'text-[#ff2222]'
                    }`}>
                      {project.name}
                    </h3>
                    <span
                      className={`px-2 py-0.5 text-xs font-mono-code font-bold border ${
                        project.color === 'green'
                          ? 'border-[#00ff41] text-[#00ff41]'
                          : 'border-[#ff2222] text-[#ff2222]'
                      }`}
                    >
                      {project.badge}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm font-mono-code">{project.subtitle}</p>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 border transition-all duration-300 ${
                    project.color === 'green'
                      ? 'border-[#00ff4130] text-[#00ff41] hover:bg-[#00ff4120] hover:border-[#00ff41]'
                      : 'border-[#ff222230] text-[#ff2222] hover:bg-[#ff222220] hover:border-[#ff2222]'
                  }`}
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Period */}
              <div className="flex items-center gap-2 text-gray-500 text-xs font-mono-code mb-5">
                <Calendar size={12} />
                {project.period}
              </div>

              {/* Points */}
              <ul className="space-y-2 mb-6">
                {project.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
                    <GitBranch
                      size={13}
                      className={`mt-0.5 flex-shrink-0 ${
                        project.color === 'green' ? 'text-[#00ff41]' : 'text-[#ff2222]'
                      }`}
                    />
                    {pt}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-1 text-xs font-mono-code border ${
                      project.color === 'green'
                        ? 'border-[#00ff4120] text-[#00ff4180] bg-[#00ff4108]'
                        : 'border-[#ff222220] text-[#ff222280] bg-[#ff222208]'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Visit button */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 flex items-center justify-center gap-2 py-3 text-sm font-bold tracking-widest uppercase clip-corner-sm transition-all duration-300 ${
                  project.color === 'green'
                    ? 'bg-[#00ff4115] border border-[#00ff4130] text-[#00ff41] hover:bg-[#00ff41] hover:text-black'
                    : 'bg-[#ff222215] border border-[#ff222230] text-[#ff2222] hover:bg-[#ff2222] hover:text-white'
                }`}
              >
                <ExternalLink size={14} />
                Visit Live Site
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
