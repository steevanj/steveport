import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Download,
  Code2,
  Database,
  Cpu,
  Server,
  Sparkles,
  Send,
  ExternalLink,
} from "lucide-react";
import heroImg from "@/assets/steevan.png";
import echosphereImg from "@/assets/echosphere.svg";
import animeappImg from "@/assets/animeapp.svg";
import clinicflowImg from "@/assets/clinicflow.svg";
import titanbackendImg from "@/assets/titanbackend.svg";
import { Loader } from "@/components/Loader";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MagneticButton } from "@/components/MagneticButton";
import { Particles } from "@/components/Particles";

export const Route = createFileRoute("/")({ component: Index });

const ROLES = ["Django Developer", "API Architect", "Backend Engineer", "Python Developer", "SaaS Builder"];

function Nav() {
  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Work", "#projects"],
    ["Experience", "#experience"],
    ["Contact", "#contact"],
  ];
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="fixed inset-x-0 top-5 z-50 flex justify-center px-4"
    >
      <nav className="glass flex flex-wrap items-center justify-between gap-3 rounded-full px-4 py-3 shadow-xl shadow-slate-200/20 max-w-5xl w-full">
        <a href="#top" className="flex items-center gap-2 px-3 text-sm font-semibold tracking-wider">
          <span className="h-2 w-2 rounded-full bg-slate-500 shadow-[0_0_10px_2px_rgba(100,116,139,0.55)]" />
          <span className="text-gradient-slate font-display">Steve Dev</span>
        </a>
        <div className="hidden md:flex">
          {links.map(([l, h]) => (
            <a
              key={l}
              href={h}
              className="px-4 py-1.5 text-xs uppercase tracking-widest text-slate-600 transition-colors hover:text-slate-800"
            >
              {l}
            </a>
          ))}
        </div>
        <a
          href="mailto:steevan.dev@gmail.com"
          className="rounded-full bg-gradient-to-br from-slate-300 to-slate-400 px-4 py-2 text-sm font-semibold text-slate-900"
        >
          Hire me
        </a>
      </nav>
    </motion.header>
  );
}

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-flex h-8 overflow-hidden align-middle">
      <motion.span
        key={i}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-gradient-slate font-display text-2xl md:text-3xl font-semibold"
      >
        {ROLES[i]}
      </motion.span>
    </span>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden pt-32 md:pt-28">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-slate-300/20 blur-[120px] animate-float-slow" />
      <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-slate-300/15 blur-[140px] animate-float-slow-2" />
      <Particles count={70} />

      <motion.div style={{ y, opacity }} className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-8 md:px-10">
        {/* Left */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-300/50 bg-slate-200/50 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-slate-700"
          >
            <Sparkles className="h-3 w-3" /> Available for backend roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.9 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
          >
            Hi, I'm <span className="text-gradient-slate">Steve Dev</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-slate-700"
          >
            Backend Engineer crafting scalable APIs, secure systems, and high-performance applications.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05 }}
            className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-500/60"
          >
            www.stevedev.live
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15 }}
            className="mt-10 flex items-center gap-3 text-sm text-slate-600"
          >
            <span className="text-slate-500">I am a</span>
            <RotatingRole />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton asLink="#projects">
              Explore Projects <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton asLink="#contact" variant="ghost">
              Contact Me <Send className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton asLink="https://drive.google.com/file/d/1v_ITwnXLME3-la7msJqnuEpPSBG9Dfvd/view?usp=drive_link" variant="ghost">
              <Download className="h-4 w-4" /> Resume
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-10 flex items-center gap-5 text-slate-600"
          >
            <a href="https://github.com/steevanj" target="_blank" rel="noreferrer" className="transition-colors hover:text-slate-800"><Github className="h-5 w-5" /></a>
            <a href="https://linkedin.com/in/steechinna" target="_blank" rel="noreferrer" className="transition-colors hover:text-slate-800"><Linkedin className="h-5 w-5" /></a>
            <a href="mailto:steevan.dev@gmail.com" className="transition-colors hover:text-slate-800"><Mail className="h-5 w-5" /></a>
            <span className="ml-2 inline-flex items-center gap-1.5 text-xs text-slate-500"><MapPin className="h-3 w-3" /> Bengaluru, IN</span>
          </motion.div>
        </div>

        {/* Right – portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-slate-300/30 via-slate-200/15 to-transparent blur-2xl" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -inset-[2px] rounded-[2.75rem] bg-gradient-to-br from-slate-300/50 via-slate-200/35 to-slate-400/0 opacity-60" />
            <div className="relative overflow-hidden rounded-[3rem] bg-background">
              <img
                src={heroImg}
                alt="Steve Dev — Python & Django Backend Developer"
                className="aspect-[4/5] h-full w-full object-cover"
                style={{
                  filter: "contrast(1.08) saturate(1.05) brightness(0.96)",
                  WebkitMaskImage: "radial-gradient(circle at top right, transparent 18%, black 60%)",
                  maskImage: "radial-gradient(circle at top right, transparent 18%, black 60%)",
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,235,235,0.9),_transparent_42%)] mix-blend-screen" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-100/90 via-transparent to-transparent mix-blend-overlay" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Floating tech chips */}
            <FloatingChip className="-left-6 top-10" delay={0}>Django</FloatingChip>
            <FloatingChip className="-right-8 top-32" delay={1.2}>DRF</FloatingChip>
            <FloatingChip className="-left-10 bottom-24" delay={0.6}>MySQL</FloatingChip>
            <FloatingChip className="-right-6 bottom-10" delay={1.8}>JWT</FloatingChip>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-slate-500"
      >
        scroll
      </motion.div>
    </section>
  );
}

function FloatingChip({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{ delay: 1 + delay, duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className={`glass absolute rounded-full px-4 py-1.5 text-xs font-medium text-slate-700 shadow-lg ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-6 py-28 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-500">
          <span className="h-px w-10 bg-slate-300/50" /> {eyebrow}
        </div>
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title={<>The engineer behind <span className="text-gradient-slate">the systems</span></>}>
      <div className="grid gap-10 md:grid-cols-3">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-2 text-lg leading-relaxed text-slate-700"
        >
          🚀 Backend engineer from Bengaluru building scalable APIs with Python, Django & DRF. I design multi-tenant SaaS systems and auth flows strong enough to make hackers cry 😭🔐. Obsessed with turning slow APIs into lightning-fast responses ⚡ and deleting unnecessary queries like a silent assassin 🎯. I write backend code that's scalable, secure, and surprisingly readable 😌. Basically, I make servers suffer so users don't have to ☕💻
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass space-y-4 rounded-2xl p-6"
        >
          {[
            ["10+", "REST APIs shipped"],
            ["4", "Production projects"],
            ["Multi-tenant", "SaaS architecture"],
            ["Bengaluru", "Available remote / on-site"],
          ].map(([k, v]) => (
            <div key={v} className="flex items-baseline justify-between border-b border-slate-200 pb-3 last:border-0">
              <span className="font-display text-2xl text-gradient-slate">{k}</span>
              <span className="text-sm text-slate-600">{v}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

const SKILL_GROUPS = [
  { icon: Server, name: "Backend", items: ["Python", "Django", "Django REST Framework", "REST APIs", "JWT Auth", "RBAC", "ORM Optimization"] },
  { icon: Database, name: "Databases", items: ["MySQL", "SQLite"] },
  { icon: Code2, name: "Frontend", items: ["HTML", "CSS", "Bootstrap", "JavaScript"] },
  { icon: Cpu, name: "Tools", items: ["Git", "GitHub", "Postman", "Linux", "VS Code"] },
];

function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills & stack">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {SKILL_GROUPS.map((g, i) => (
          <motion.div
            key={g.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition-shadow hover:glow-slate"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-slate-300/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
            <g.icon className="mb-4 h-6 w-6 text-slate-700" />
            <h3 className="font-display mb-4 text-xl font-semibold">{g.name}</h3>
            <ul className="space-y-2">
              {g.items.map((it) => (
                <li key={it} className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="h-1 w-1 rounded-full bg-slate-500" /> {it}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  const bullets = [
    "Built 10+ REST APIs using Django REST Framework",
    "Designed relational database systems and schemas",
    "Implemented JWT authentication and role-based access control",
    "Optimized ORM queries, improving response performance",
    "Worked on real-time, production-grade projects",
    "Tested and documented APIs using Postman",
  ];
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've shipped">
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-slate-500/60 via-slate-300/20 to-transparent md:left-1/2" />
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative ml-12 md:ml-0 md:w-1/2 md:pr-12"
        >
          <div className="absolute -left-12 top-4 h-3 w-3 rounded-full bg-slate-500 shadow-[0_0_18px_4px_rgba(100,116,139,0.22)] md:left-auto md:right-[-7px]" />
          <div className="glass rounded-2xl p-7">
            <div className="mb-1 text-xs uppercase tracking-widest text-slate-500/80">Jan 2026 – Present</div>
            <h3 className="font-display text-2xl font-semibold">Python Full Stack Developer Trainee</h3>
            <p className="mt-1 text-slate-600">Cloud Institution · Bengaluru</p>
            <ul className="mt-5 space-y-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" /> {b}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

const PROJECTS = [
  {
    name: "ClinicFlow Backend",
    image: clinicflowImg,
    blurb: "Scalable multi-tenant clinic management SaaS — tenant isolation, billing, appointments, beds, inventory and complete clinic operations.",
    tech: ["Django", "DRF", "JWT", "MySQL", "Multi-Tenant"],
    github: "https://github.com/steevanj/clinicflow-backend",
    live: null,
  },
  {
    name: "EchoSphere",
    image: echosphereImg,
    blurb: "A modern music platform — authentication, audio systems, scalable backend architecture and clean REST API integrations.",
    tech: ["Python", "Django", "REST APIs", "MySQL"],
    github: "https://github.com/steevanj/EchoSphere_Backend",
    live: "https://www.echosphere.it.com/",
  },
  {
    name: "Anime App",
    image: animeappImg,
    blurb: "Anime information platform on top of the Jikan API with advanced search, filtering, and a responsive interactive UI.",
    tech: ["Django", "Bootstrap", "Jikan API"],
    github: "https://github.com/steevanj/Animeapp",
    live: "https://animeapp-8173.onrender.com/",
  },
  {
    name: "Titan Backend",
    image: titanbackendImg,
    blurb: "Complete backend APIs for a construction & company platform — services, projects, reviews, quotations, blogs, gallery.",
    tech: ["Django REST Framework", "MySQL"],
    github: "https://github.com/steevanj/Titan_backend",
    live: null,
  },
];

function ProjectCard({ p, i }: { p: (typeof PROJECTS)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const move = (e: React.MouseEvent) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -y * 8, ry: x * 8 });
  };
  const reset = () => setTilt({ rx: 0, ry: 0 });
  const reverse = i % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
      className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
    >
      <motion.div
        ref={ref}
        onMouseMove={move}
        onMouseLeave={reset}
        animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        className="relative aspect-[4/3] overflow-hidden rounded-3xl"
      >
        <div className="absolute -inset-[1.5px] rounded-3xl bg-gradient-to-br from-slate-300/60 via-slate-200/30 to-transparent" />
        <div className="relative h-full w-full overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-slate-200 p-0">
          {p.image ? (
            <img src={p.image} alt={`${p.name} screenshot`} className="absolute inset-0 h-full w-full object-cover" />
          ) : null}
          <div className="absolute inset-0 bg-slate-950/10" />
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-slate-300/20 blur-3xl" />
          <div className="relative flex h-full flex-col justify-between p-8">
            <div className="font-mono text-xs text-slate-500/70">0{i + 1} / 0{PROJECTS.length}</div>
            <div>
              <div className="font-display text-4xl font-bold text-slate-900 md:text-5xl">{p.name}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-slate-200/20 bg-slate-200/40 px-3 py-1 text-[11px] text-slate-700">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div>
        <div className="mb-4 text-xs uppercase tracking-[0.3em] text-slate-500/70">Project 0{i + 1}</div>
        <h3 className="font-display text-3xl font-bold md:text-4xl">{p.name}</h3>
        <p className="mt-4 max-w-md text-slate-700">{p.blurb}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {p.live && (
            <MagneticButton asLink={p.live}>
              View Live <ExternalLink className="h-4 w-4" />
            </MagneticButton>
          )}
          <MagneticButton asLink={p.github} variant="ghost">
            GitHub <Github className="h-4 w-4" />
          </MagneticButton>
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title="Projects">
      <div className="space-y-28">
        {PROJECTS.map((p, i) => <ProjectCard key={p.name} p={p} i={i} />)}
      </div>
    </Section>
  );
}

function Education() {
  const items = [
    { title: "Bachelor of Engineering — Information Science & Engineering", org: "The Oxford College of Engineering, Bengaluru", date: "2023 – 2026", score: "CGPA 7.5 / 10" },
    { title: "Diploma — Computer Science & Engineering", org: "BTL Polytechnic, Bengaluru", date: "2018 – 2022", score: "60%" },
  ];
  return (
    <Section id="education" eyebrow="Background" title="Education">
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((e, i) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass relative overflow-hidden rounded-2xl p-7 transition-shadow hover:glow-slate"
          >
            <div className="text-xs uppercase tracking-widest text-slate-500/80">{e.date}</div>
            <h3 className="font-display mt-2 text-xl font-semibold">{e.title}</h3>
            <p className="mt-1 text-slate-600">{e.org}</p>
            <div className="mt-4 inline-block rounded-full border border-slate-200/30 bg-slate-100 px-3 py-1 text-xs text-slate-700">{e.score}</div>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {[
          ["Postman API Fundamentals", "Postman"],
          ["Python Programming", "GeeksforGeeks"],
        ].map(([c, by]) => (
          <div key={c} className="glass flex items-center justify-between rounded-xl p-4">
            <div>
              <div className="text-sm font-medium text-slate-900">{c}</div>
              <div className="text-xs text-slate-500">{by}</div>
            </div>
            <Sparkles className="h-4 w-4 text-slate-700" />
          </div>
        ))}
      </div>
    </Section>
  );
}

function GithubStats() {
  const cards = [
    {
      icon: Github,
      title: "GitHub activity",
      description: "Backend projects, API design, and open-source contributions updated regularly.",
    },
    {
      icon: Code2,
      title: "Top languages",
      description: "Python · Django · JavaScript — the core stack powering your backend systems.",
    },
    {
      icon: Sparkles,
      title: "Consistent delivery",
      description: "Reliable coding cadence with a focus on scalable, production-ready backend work.",
    },
  ];

  return (
    <Section id="github" eyebrow="On GitHub" title="Coding activity">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-6 text-slate-700"
          >
            <card.icon className="mb-4 h-8 w-8 text-slate-800" />
            <h3 className="mb-3 text-xl font-semibold text-slate-900">{card.title}</h3>
            <p className="text-sm leading-6 text-slate-600">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Get in touch" title="Let's build something premium.">
      <div className="max-w-2xl">
        <div>
          <p className="max-w-md text-lg text-slate-700">
            Have a backend system that needs to scale, a product idea that needs an engineer who ships, or a recruiter
            with the right team? Drop a line — I read every message.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <a href="mailto:steevan.dev@gmail.com" className="glass flex items-center gap-3 rounded-xl p-4 transition-colors hover:text-slate-800">
              <Mail className="h-5 w-5 text-slate-700" /> steevan.dev@gmail.com
            </a>
            <a href="tel:+919742414178" className="glass flex items-center gap-3 rounded-xl p-4 transition-colors hover:text-slate-800">
              <Phone className="h-5 w-5 text-slate-700" /> +91 97424 14178
            </a>
            <div className="glass flex items-center gap-3 rounded-xl p-4">
              <MapPin className="h-5 w-5 text-slate-700" /> Bengaluru, Karnataka, India
            </div>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <a href="https://github.com/steevanj" target="_blank" rel="noreferrer" className="glass rounded-full p-3 transition-colors hover:text-slate-800"><Github className="h-5 w-5" /></a>
            <a href="https://linkedin.com/in/steechinna" target="_blank" rel="noreferrer" className="glass rounded-full p-3 transition-colors hover:text-slate-800"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="relative mt-20 border-t border-slate-200 px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
        <div className="font-display text-gradient-slate text-base">Steve Dev</div>
        <div>© {new Date().getFullYear()} · www.stevedev.live · Engineered with Django, Python & premium backend craftsmanship.</div>
        <div className="flex items-center gap-3">
          <a href="https://github.com/steevanj" target="_blank" rel="noreferrer" className="hover:text-slate-800"><Github className="h-4 w-4" /></a>
          <a href="https://linkedin.com/in/steechinna" target="_blank" rel="noreferrer" className="hover:text-slate-800"><Linkedin className="h-4 w-4" /></a>
          <a href="mailto:steevan.dev@gmail.com" className="hover:text-slate-800"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Loader />
      <CursorGlow />
      <ScrollProgress />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <GithubStats />
      <Contact />
      <Footer />
    </main>
  );
}
