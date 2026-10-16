import { useEffect } from 'react';
import MatrixRain from '@/components/MatrixRain';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  useEffect(() => {
    const updatePointer = (event: PointerEvent) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', updatePointer);
    return () => window.removeEventListener('pointermove', updatePointer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 relative motion-root">
      {/* Animated background */}
      <MatrixRain />

      {/* Pointer-reactive art direction layer */}
      <div className="cursor-glow" aria-hidden="true" />

      {/* Subtle radial gradient overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.05) 0%, transparent 60%)',
          zIndex: 1,
        }}
      />

      {/* Main content */}
      <div className="relative" style={{ zIndex: 2 }}>
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
