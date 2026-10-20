import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProofBar from '@/components/ProofBar';
import Problems from '@/components/Problems';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import TechStack from '@/components/TechStack';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import type { BriefPrefill } from '@/components/brief';
import { useReveal } from '@/hooks/useReveal';

export default function App() {
  const [prefill, setPrefill] = useState<BriefPrefill | null>(null);
  useReveal();

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <a
        href="#contact"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to contact form
      </a>
      <Navbar />
      <main>
        <Hero />
        <ProofBar />
        <Problems />
        <Services />
        <Work />
        <Testimonials />
        <Process />
        <TechStack />
        <About />
        <Pricing onPrefill={setPrefill} />
        <Contact prefill={prefill} />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
