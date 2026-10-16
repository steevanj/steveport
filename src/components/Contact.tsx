import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:steevan.dev@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const contacts = [
    { icon: Mail, label: 'Email', value: 'steevan.dev@gmail.com', href: 'mailto:steevan.dev@gmail.com', color: 'green' as const },
    { icon: Phone, label: 'Phone', value: '09742414178', href: 'tel:09742414178', color: 'red' as const },
    { icon: MapPin, label: 'Location', value: 'Bangalore, India', href: null, color: 'green' as const },
    { icon: Github, label: 'GitHub', value: 'steevanj', href: 'https://github.com/steevanj', color: 'red' as const },
    { icon: Linkedin, label: 'LinkedIn', value: 'steechinna', href: 'https://linkedin.com/in/steechinna', color: 'green' as const },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-16 text-center">
          <p className="font-mono-code text-xs text-[#2563eb] tracking-widest mb-3">// GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Let's <span className="text-[#2563eb]">Connect</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#2563eb] to-transparent" />
          <p className="mt-6 text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            Open to backend developer roles, freelance projects, and collaboration opportunities.
            Drop a message and I'll get back to you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="space-y-4">
            <p className="font-mono-code text-xs text-slate-400 tracking-widest mb-6">// CONTACT CHANNELS</p>
            {contacts.map((c, i) => {
              const Icon = c.icon;
              const Inner = (
                <div
                  className={`reveal flex items-center gap-4 p-4 border clip-corner-sm transition-all duration-300 bg-white ${
                    c.color === 'green'
                      ? 'border-[#2563eb15] hover:border-[#2563eb40] hover:bg-[#2563eb05]'
                      : 'border-[#7c3aed15] hover:border-[#7c3aed40] hover:bg-[#7c3aed05]'
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div
                    className={`w-10 h-10 flex items-center justify-center flex-shrink-0 ${
                      c.color === 'green'
                        ? 'bg-[#2563eb08] border border-[#2563eb20]'
                        : 'bg-[#7c3aed08] border border-[#7c3aed20]'
                    }`}
                  >
                    <Icon size={16} className={c.color === 'green' ? 'text-[#2563eb]' : 'text-[#7c3aed]'} />
                  </div>
                  <div>
                    <p className="font-mono-code text-xs text-slate-400 mb-0.5">{c.label}</p>
                    <p className="text-sm font-semibold text-slate-700">
                      {c.value}
                    </p>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {Inner}
                </a>
              ) : (
                <div key={c.label}>{Inner}</div>
              );
            })}
          </div>

          {/* Contact form */}
          <div className="reveal reveal-right">
            <div className="clip-corner border border-[#2563eb15] bg-white shadow-sm p-8">
              <p className="font-mono-code text-xs text-slate-400 tracking-widest mb-6">// SEND MESSAGE</p>

              {sent ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <CheckCircle size={48} className="text-[#2563eb]" />
                  <p className="font-bold text-[#2563eb] text-lg">Message Sent!</p>
                  <p className="text-slate-500 text-sm">Your email client has been opened.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-mono-code text-xs text-slate-500 mb-1.5 tracking-wide">NAME</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#f8fafc] border border-slate-200 focus:border-[#2563eb60] text-slate-800 text-sm px-4 py-3 outline-none font-mono-code transition-colors placeholder-slate-400"
                      placeholder="Your name"
                      style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
                    />
                  </div>
                  <div>
                    <label className="block font-mono-code text-xs text-slate-500 mb-1.5 tracking-wide">EMAIL</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#f8fafc] border border-slate-200 focus:border-[#2563eb60] text-slate-800 text-sm px-4 py-3 outline-none font-mono-code transition-colors placeholder-slate-400"
                      placeholder="your@email.com"
                      style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
                    />
                  </div>
                  <div>
                    <label className="block font-mono-code text-xs text-slate-500 mb-1.5 tracking-wide">MESSAGE</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-[#f8fafc] border border-slate-200 focus:border-[#2563eb60] text-slate-800 text-sm px-4 py-3 outline-none font-mono-code transition-colors resize-none placeholder-slate-400"
                      placeholder="Your message..."
                      style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full clip-corner py-3 font-bold tracking-widest uppercase text-sm bg-[#2563eb] text-white hover:bg-[#7c3aed] transition-all duration-300 flex items-center justify-center gap-2 animate-pulse-glow"
                  >
                    <Send size={14} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
