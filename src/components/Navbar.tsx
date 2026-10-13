import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      for (const link of links) {
        const el = document.getElementById(link.toLowerCase());
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(link);
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(0,0,0,0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid #00ff4120' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px #00ff4110' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-bold text-xl tracking-widest text-glow-green text-[#00ff41] animate-flicker"
        >
          &lt;STEVE.DEV/&gt;
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`nav-link text-sm tracking-widest uppercase font-mono-code transition-colors ${
                active === link ? 'text-[#00ff41] active' : 'text-gray-400 hover:text-[#00ff41]'
              }`}
            >
              {link}
            </button>
          ))}
          <a
            href="mailto:steevan.dev@gmail.com"
            className="clip-corner-sm px-5 py-2 text-sm tracking-widest uppercase font-bold text-black bg-[#00ff41] hover:bg-[#ff2222] transition-colors duration-300 hover:text-white"
            style={{ boxShadow: '0 0 15px #00ff4160' }}
          >
            Hire Me
          </a>
          <a
            href="https://drive.google.com/file/d/18Phc4dvb8O8mo8kPkrC1vs666T1-Emn8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="clip-corner-sm px-5 py-2 text-sm tracking-widest uppercase font-bold border border-[#00ff4130] text-[#00ff41] hover:border-[#00ff41] transition-colors duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#00ff41] p-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t border-[#00ff4130] bg-black/95 px-6 py-4 flex flex-col gap-4"
          style={{ backdropFilter: 'blur(12px)' }}
        >
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left text-sm tracking-widest uppercase font-mono-code text-gray-400 hover:text-[#00ff41] transition-colors py-2 border-b border-[#00ff4110]"
            >
              {link}
            </button>
          ))}
          <a
            href="https://drive.google.com/file/d/18Phc4dvb8O8mo8kPkrC1vs666T1-Emn8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-left text-sm tracking-widest uppercase font-mono-code text-[#00ff41] transition-colors py-2"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
