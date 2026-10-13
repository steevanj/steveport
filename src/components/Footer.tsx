import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-[#00ff4115] relative">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#00ff4140] to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-bold text-[#00ff41] text-lg tracking-widest text-glow-green">&lt;STEVE.DEV/&gt;</p>
            <p className="font-mono-code text-xs text-gray-600 mt-1">Python Backend Developer</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/steevanj"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-[#00ff4130] text-gray-500 hover:text-[#00ff41] hover:border-[#00ff41] transition-all duration-300"
            >
              <Github size={15} />
            </a>
            <a
              href="https://linkedin.com/in/steechinna"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-[#00ff4130] text-gray-500 hover:text-[#00ff41] hover:border-[#00ff41] transition-all duration-300"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="mailto:steevan.dev@gmail.com"
              className="w-9 h-9 flex items-center justify-center border border-[#ff222230] text-gray-500 hover:text-[#ff2222] hover:border-[#ff2222] transition-all duration-300"
            >
              <Mail size={15} />
            </a>
          </div>

          <p className="font-mono-code text-xs text-gray-600 flex items-center gap-1">
            Built with
            <Heart size={10} className="text-[#ff2222] mx-0.5" />
            by Steevan J &copy; 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
