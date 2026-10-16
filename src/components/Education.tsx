import { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const education = [
  {
    degree: 'B.E. in Information Science & Engineering',
    institution: 'The Oxford College of Engineering',
    period: '11/2023 – 07/2026',
    location: 'Bangalore',
    score: '7.5 / 10 GPA',
    color: 'green' as const,
    icon: GraduationCap,
  },
  {
    degree: 'Diploma in Computer Science & Engineering',
    institution: 'BTL Polytechnic',
    period: '06/2018 – 08/2022',
    location: 'Bangalore',
    score: '60%',
    color: 'red' as const,
    icon: Award,
  },
];

export default function Education() {
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
    <section id="education" ref={sectionRef} className="py-24 relative bg-grid">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-16 text-center">
          <p className="font-mono-code text-xs text-[#7c3aed] tracking-widest mb-3">// ACADEMIC BACKGROUND</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            <span className="text-[#7c3aed]">Education</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, i) => {
            const Icon = edu.icon;
            return (
              <div
                key={edu.institution}
                className={`reveal project-card clip-corner border p-8 relative overflow-hidden bg-white shadow-sm ${
                  edu.color === 'green'
                    ? 'border-[#2563eb20] hover:border-[#2563eb50]'
                    : 'border-[#7c3aed20] hover:border-[#7c3aed50]'
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Background icon */}
                <div className="absolute -bottom-4 -right-4 opacity-[0.04]">
                  <Icon size={100} className={edu.color === 'green' ? 'text-[#2563eb]' : 'text-[#7c3aed]'} />
                </div>

                <div
                  className={`inline-flex items-center justify-center w-12 h-12 mb-5 clip-corner-sm ${
                    edu.color === 'green' ? 'bg-[#2563eb08] border border-[#2563eb20]' : 'bg-[#7c3aed08] border border-[#7c3aed20]'
                  }`}
                >
                  <Icon size={20} className={edu.color === 'green' ? 'text-[#2563eb]' : 'text-[#7c3aed]'} />
                </div>

                <h3 className="font-bold text-slate-900 text-lg leading-snug mb-2">{edu.degree}</h3>
                <p className={`font-semibold text-sm mb-4 ${edu.color === 'green' ? 'text-[#2563eb]' : 'text-[#7c3aed]'}`}>
                  {edu.institution}
                </p>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-mono-code">
                    <Calendar size={12} className="text-slate-400" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-mono-code">
                    <MapPin size={12} className="text-slate-400" />
                    {edu.location}
                  </div>
                  <div
                    className={`flex items-center gap-2 text-xs font-bold font-mono-code mt-3 px-3 py-1.5 border w-fit clip-corner-sm ${
                      edu.color === 'green'
                        ? 'border-[#2563eb20] text-[#2563eb] bg-[#2563eb08]'
                        : 'border-[#7c3aed20] text-[#7c3aed] bg-[#7c3aed08]'
                    }`}
                  >
                    <Award size={11} />
                    {edu.score}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
