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
          <p className="font-mono-code text-xs text-[#ff2222] tracking-widest mb-3">// ACADEMIC BACKGROUND</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            <span className="text-[#ff2222] text-glow-red">Education</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#ff2222] to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, i) => {
            const Icon = edu.icon;
            return (
              <div
                key={edu.institution}
                className={`reveal project-card clip-corner border p-8 relative overflow-hidden ${
                  edu.color === 'green'
                    ? 'border-[#00ff4130] bg-[#00ff4105] hover:border-[#00ff4160]'
                    : 'border-[#ff222230] bg-[#ff22220a] hover:border-[#ff222260]'
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Background icon */}
                <div className="absolute -bottom-4 -right-4 opacity-5">
                  <Icon size={100} className={edu.color === 'green' ? 'text-[#00ff41]' : 'text-[#ff2222]'} />
                </div>

                <div
                  className={`inline-flex items-center justify-center w-12 h-12 mb-5 clip-corner-sm ${
                    edu.color === 'green' ? 'bg-[#00ff4115] border border-[#00ff4130]' : 'bg-[#ff222215] border border-[#ff222230]'
                  }`}
                >
                  <Icon size={20} className={edu.color === 'green' ? 'text-[#00ff41]' : 'text-[#ff2222]'} />
                </div>

                <h3 className="font-bold text-white text-lg leading-snug mb-2">{edu.degree}</h3>
                <p className={`font-semibold text-sm mb-4 ${edu.color === 'green' ? 'text-[#00ff41]' : 'text-[#ff2222]'}`}>
                  {edu.institution}
                </p>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-mono-code">
                    <Calendar size={12} className="text-gray-500" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-mono-code">
                    <MapPin size={12} className="text-gray-500" />
                    {edu.location}
                  </div>
                  <div
                    className={`flex items-center gap-2 text-xs font-bold font-mono-code mt-3 px-3 py-1.5 border w-fit clip-corner-sm ${
                      edu.color === 'green'
                        ? 'border-[#00ff4130] text-[#00ff41] bg-[#00ff4110]'
                        : 'border-[#ff222230] text-[#ff2222] bg-[#ff222210]'
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
