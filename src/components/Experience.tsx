import { useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Python Backend Developer',
    company: 'WeSalvator',
    period: '07/2026 – Present',
    location: 'Bangalore',
    color: 'green' as const,
    points: [
      'Developed and maintained Django REST APIs for production workflows.',
      'Optimized ORM queries to improve database performance and resolve N+1 issues.',
      'Integrated Celery and Redis; improved security and error handling.',
    ],
  },
  {
    role: 'Python Backend Developer Trainee',
    company: 'Cloud Institution',
    period: '01/2026 – 06/2026',
    location: 'Bangalore',
    color: 'red' as const,
    points: [
      'Developed 10+ REST APIs using Django REST Framework.',
      'Designed 8+ database entities using Django ORM and MySQL.',
      'Implemented JWT, RBAC, and query optimization, improving API response times by 25%.',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150);
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
    <section id="experience" ref={sectionRef} className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-16 text-center">
          <p className="font-mono-code text-xs text-[#00ff41] tracking-widest mb-3">// WORK HISTORY</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Professional <span className="text-[#00ff41] text-glow-green">Experience</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#00ff41] to-transparent" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px"
            style={{
              background: 'linear-gradient(to bottom, transparent, #00ff4140, #ff222240, transparent)',
            }}
          />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`reveal relative flex flex-col ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-start`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 mt-6 z-10"
                  style={{
                    background: exp.color === 'green' ? '#00ff41' : '#ff2222',
                    boxShadow: exp.color === 'green'
                      ? '0 0 12px #00ff41, 0 0 24px #00ff4160'
                      : '0 0 12px #ff2222, 0 0 24px #ff222260',
                  }}
                />

                {/* Spacer for md */}
                <div className="hidden md:block w-1/2" />

                {/* Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 border p-6 clip-corner project-card ${
                    exp.color === 'green'
                      ? 'border-[#00ff4130] hover:border-[#00ff41] bg-[#00ff4105]'
                      : 'border-[#ff222230] hover:border-[#ff2222] bg-[#ff22220a]'
                  }`}
                >
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
                    <div>
                      <h3 className={`font-bold text-lg ${
                        exp.color === 'green' ? 'text-[#00ff41]' : 'text-[#ff2222]'
                      }`}>
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={13} className="text-gray-500" />
                        <span className="text-white font-semibold text-sm">{exp.company}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-gray-400 text-xs font-mono-code">
                        <Calendar size={11} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 text-xs font-mono-code mt-1">
                        <MapPin size={11} />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
                        <span className={exp.color === 'green' ? 'text-[#00ff41]' : 'text-[#ff2222]'}>
                          ▸
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
