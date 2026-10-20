import { useEffect, useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { contact } from '@/data/site';

// Sticky bottom bar on small screens once the hero is scrolled past.
export default function MobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contactEl = document.getElementById('contact');
      const inContact = contactEl ? contactEl.getBoundingClientRect().top < window.innerHeight * 0.6 : false;
      setShow(window.scrollY > window.innerHeight * 0.8 && !inContact);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/90 p-3 backdrop-blur-xl transition-transform duration-300 lg:hidden ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!show}
    >
      <div className="flex gap-2.5">
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={show ? 0 : -1}
          className="btn btn-ghost !px-4"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={18} className="text-emerald-600" />
        </a>
        <a href="#contact" tabIndex={show ? 0 : -1} className="btn btn-primary flex-1">
          Start a project <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
