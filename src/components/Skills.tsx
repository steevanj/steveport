import { useEffect, useRef, useState } from 'react';

const skillGroups = [
  {
    category: 'Python Backend Development',
    color: 'green' as const,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Django', level: 88 },
      { name: 'Django REST Framework', level: 85 },
      { name: 'REST APIs', level: 87 },
      { name: 'JWT / RBAC', level: 82 },
    ],
  },
  {
    category: 'Database Management',
    color: 'red' as const,
    skills: [
      { name: 'MySQL', level: 84 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Django ORM', level: 88 },
      { name: 'Query Optimization', level: 82 },
      { name: 'SQLite', level: 78 },
    ],
  },
  {
    category: 'Performance & Tools',
    color: 'green' as const,
    skills: [
      { name: 'Redis', level: 78 },
      { name: 'Celery', level: 75 },
      { name: 'Postman', level: 90 },
      { name: 'VS Code', level: 92 },
      { name: 'Caching', level: 76 },
    ],
  },
  {
    category: 'DevOps',
    color: 'red' as const,
    skills: [
      { name: 'Git / GitHub', level: 88 },
      { name: 'Docker', level: 70 },
      { name: 'CI/CD', level: 65 },
    ],
  },
];

const techBadges = [
  'Python', 'Django', 'DRF', 'MySQL', 'PostgreSQL', 'SQLite',
  'Redis', 'Celery', 'JWT', 'RBAC', 'Docker', 'Git', 'GitHub',
  'CI/CD', 'REST APIs', 'ORM', 'Query Optimization', 'Postman',
  'VS Code', 'Debugging', 'Caching',
];

function SkillBar({ name, level, color, animate }: { name: string; level: number; color: 'green' | 'red'; animate: boolean }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="font-mono-code text-xs text-slate-600 tracking-wide">{name}</span>
        <span className={`font-mono-code text-xs ${color === 'green' ? 'text-[#2563eb]' : 'text-[#7c3aed]'}`}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-slate-100 rounded overflow-hidden border border-slate-200">
        <div
          className={`h-full rounded transition-all duration-1000 ease-out ${
            color === 'green'
              ? 'bg-gradient-to-r from-[#2563eb] to-[#1d4ed8]'
              : 'bg-gradient-to-r from-[#7c3aed] to-[#6d28d9]'
          }`}
          style={{
            width: animate ? `${level}%` : '0%',
            boxShadow: color === 'green' ? '0 0 8px rgba(37,99,235,0.4)' : '0 0 8px rgba(124,58,237,0.4)',
            transitionDelay: '200ms',
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
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
    <section id="skills" ref={sectionRef} className="py-24 relative bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-16 text-center">
          <p className="font-mono-code text-xs text-[#2563eb] tracking-widest mb-3">// TECH STACK</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Skills &amp; <span className="text-[#2563eb]">Technologies</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#2563eb] to-transparent" />
        </div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className={`reveal clip-corner border p-6 bg-white shadow-sm ${
                group.color === 'green'
                  ? 'border-[#2563eb15]'
                  : 'border-[#7c3aed15]'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className={`font-bold text-sm tracking-widest uppercase mb-5 font-mono-code ${
                group.color === 'green' ? 'text-[#2563eb]' : 'text-[#7c3aed]'
              }`}>
                {group.category}
              </h3>
              {group.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={group.color}
                  animate={animate}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Tech badges cloud */}
        <div className="reveal text-center">
          <p className="font-mono-code text-xs text-slate-400 tracking-widest mb-6">// ALL TECHNOLOGIES</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((badge, i) => (
              <span
                key={badge}
                className="px-3 py-1.5 text-xs font-mono-code border border-slate-200 text-slate-500 hover:border-[#2563eb40] hover:text-[#2563eb] transition-all duration-300 cursor-default bg-white"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
