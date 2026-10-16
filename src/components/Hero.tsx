import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown, FileText } from 'lucide-react';

const TITLES = [
  'Python Backend Developer',
  'Django REST Framework Expert',
  'API Architect',
  'Database Optimizer',
  'Backend Engineer',
];

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = TITLES[titleIdx];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setTitleIdx((i) => (i + 1) % TITLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, titleIdx]);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden"
    >
      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[#2563eb] opacity-30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-[#7c3aed] opacity-30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-[#7c3aed] opacity-30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[#2563eb] opacity-30" />

      {/* Glow orbs */}
      <div
        className="hero-orb hero-orb-green absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)' }}
      />
      <div
        className="hero-orb hero-orb-red absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-[#2563eb25] bg-[#2563eb08] clip-corner-sm">
          <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
          <span className="font-mono-code text-xs text-[#2563eb] tracking-widest">
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-6xl md:text-8xl font-bold tracking-tight mb-2 animate-glitch"
          style={{ letterSpacing: '-0.02em' }}
        >
          <span className="text-slate-900 text-glow-white">STEEVAN</span>
          <span className="text-[#2563eb] text-glow-green"> J</span>
        </h1>

        {/* Typing title */}
        <div className="h-10 flex items-center justify-center mb-6">
          <p className="font-mono-code text-lg md:text-2xl text-[#2563eb] animate-blink-cursor">
            {displayed}
          </p>
        </div>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-slate-500 text-base md:text-lg leading-relaxed mb-10 animate-fade-in">
          Building <span className="text-[#2563eb] font-semibold">reliable</span> and{' '}
          <span className="text-[#7c3aed] font-semibold">scalable</span> backend services with Django, DRF,
          Celery & Redis. Focused on clean APIs, query optimization, and secure architecture.
        </p>

        {/* Social links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="https://github.com/steevanj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-[#2563eb20] hover:border-[#2563eb] text-slate-500 hover:text-[#2563eb] transition-all duration-300 clip-corner-sm text-sm tracking-wide"
            style={{ transition: 'all 0.3s' }}
          >
            <Github size={15} />
            <span className="font-mono-code">steevanj</span>
          </a>
          <a
            href="https://linkedin.com/in/steechinna"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-[#2563eb20] hover:border-[#2563eb] text-slate-500 hover:text-[#2563eb] transition-all duration-300 clip-corner-sm text-sm tracking-wide"
          >
            <Linkedin size={15} />
            <span className="font-mono-code">steechinna</span>
          </a>
          <a
            href="mailto:steevan.dev@gmail.com"
            className="flex items-center gap-2 px-4 py-2 border border-[#7c3aed20] hover:border-[#7c3aed] text-slate-500 hover:text-[#7c3aed] transition-all duration-300 clip-corner-sm text-sm tracking-wide"
          >
            <Mail size={15} />
            <span className="font-mono-code">steevan.dev@gmail.com</span>
          </a>
          <a
            href="tel:09742414178"
            className="flex items-center gap-2 px-4 py-2 border border-[#7c3aed20] hover:border-[#7c3aed] text-slate-500 hover:text-[#7c3aed] transition-all duration-300 clip-corner-sm text-sm tracking-wide"
          >
            <Phone size={15} />
            <span className="font-mono-code">09742414178</span>
          </a>
          <div className="flex items-center gap-2 px-4 py-2 text-slate-400 text-sm">
            <MapPin size={15} className="text-[#2563eb]" />
            <span className="font-mono-code">Bangalore, IN</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="clip-corner px-8 py-3 font-bold tracking-widest uppercase text-sm bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-colors duration-300 animate-pulse-glow"
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="clip-corner px-8 py-3 font-bold tracking-widest uppercase text-sm border-2 border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white transition-all duration-300"
            style={{ boxShadow: '0 0 15px rgba(124,58,237,0.2)' }}
          >
            Contact Me
          </button>
          <a
            href="https://drive.google.com/file/d/18Phc4dvb8O8mo8kPkrC1vs666T1-Emn8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="clip-corner px-8 py-3 font-bold tracking-widest uppercase text-sm border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white transition-all duration-300 inline-flex items-center gap-2"
            style={{ boxShadow: '0 0 15px rgba(37,99,235,0.15)' }}
          >
            <FileText size={14} />
            Resume
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { value: '10+', label: 'REST APIs Built' },
            { value: '25%', label: 'API Speed Boost' },
            { value: '8+', label: 'DB Entities' },
          ].map((stat) => (
            <div key={stat.label} className="stat-card text-center p-3 border border-[#2563eb15] bg-white shadow-sm">
              <div className="text-2xl font-bold text-[#2563eb]">{stat.value}</div>
              <div className="text-xs text-slate-400 font-mono-code mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#2563eb] opacity-50">
        <span className="font-mono-code text-xs tracking-widest">SCROLL</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}
