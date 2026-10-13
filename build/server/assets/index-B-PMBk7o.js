import { Q as reactExports, I as jsxRuntimeExports } from "./server-YerVQjFn.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function MatrixRain() {
  const canvasRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン{}[]<>/\\|=+-*&^%$#@!~";
    const columns = Math.floor(canvas.width / 18);
    const drops = Array(columns).fill(1);
    const colors = ["#00ff41", "#00cc33", "#ff2222", "#cc1111"];
    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = '14px "Share Tech Mono", monospace';
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const colorIdx = Math.random() > 0.95 ? 3 : Math.random() > 0.85 ? 2 : 1;
        ctx.fillStyle = colorIdx >= 2 ? colors[colorIdx] + "66" : colors[colorIdx] + "99";
        ctx.fillText(char, i * 18, drops[i] * 18);
        if (drops[i] * 18 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    const interval = setInterval(draw, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "canvas",
    {
      ref: canvasRef,
      className: "fixed inset-0 pointer-events-none",
      style: { opacity: 0.18, zIndex: 0 }
    }
  );
}
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$h = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$h);
const __iconNode$g = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
];
const Briefcase = createLucideIcon("briefcase", __iconNode$g);
const __iconNode$f = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$f);
const __iconNode$e = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$e);
const __iconNode$d = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode$d);
const __iconNode$c = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$c);
const __iconNode$b = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode$b);
const __iconNode$a = [
  ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
];
const GitBranch = createLucideIcon("git-branch", __iconNode$a);
const __iconNode$9 = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
];
const Github = createLucideIcon("github", __iconNode$9);
const __iconNode$8 = [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
];
const GraduationCap = createLucideIcon("graduation-cap", __iconNode$8);
const __iconNode$7 = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$7);
const __iconNode$6 = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode$6);
const __iconNode$5 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
const links = ["About", "Experience", "Projects", "Skills", "Education", "Contact"];
function Navbar() {
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [active, setActive] = reactExports.useState("");
  reactExports.useEffect(() => {
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
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "nav",
    {
      className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      style: {
        background: scrolled ? "rgba(0,0,0,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid #00ff4120" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 20px #00ff4110" : "none"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 py-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
              className: "font-bold text-xl tracking-widest text-glow-green text-[#00ff41] animate-flicker",
              children: "<STEVE.DEV/>"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-8", children: [
            links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => scrollTo(link),
                className: `nav-link text-sm tracking-widest uppercase font-mono-code transition-colors ${active === link ? "text-[#00ff41] active" : "text-gray-400 hover:text-[#00ff41]"}`,
                children: link
              },
              link
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "mailto:steevan.dev@gmail.com",
                className: "clip-corner-sm px-5 py-2 text-sm tracking-widest uppercase font-bold text-black bg-[#00ff41] hover:bg-[#ff2222] transition-colors duration-300 hover:text-white",
                style: { boxShadow: "0 0 15px #00ff4160" },
                children: "Hire Me"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://drive.google.com/file/d/18Phc4dvb8O8mo8kPkrC1vs666T1-Emn8/view?usp=sharing",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "clip-corner-sm px-5 py-2 text-sm tracking-widest uppercase font-bold border border-[#00ff4130] text-[#00ff41] hover:border-[#00ff41] transition-colors duration-300",
                children: "Resume"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setOpen(!open),
              className: "md:hidden text-[#00ff41] p-2",
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 22 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 22 })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "md:hidden border-t border-[#00ff4130] bg-black/95 px-6 py-4 flex flex-col gap-4",
            style: { backdropFilter: "blur(12px)" },
            children: [
              links.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => scrollTo(link),
                  className: "text-left text-sm tracking-widest uppercase font-mono-code text-gray-400 hover:text-[#00ff41] transition-colors py-2 border-b border-[#00ff4110]",
                  children: link
                },
                link
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://drive.google.com/file/d/18Phc4dvb8O8mo8kPkrC1vs666T1-Emn8/view?usp=sharing",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-left text-sm tracking-widest uppercase font-mono-code text-[#00ff41] transition-colors py-2",
                  children: "Resume"
                }
              )
            ]
          }
        )
      ]
    }
  );
}
const TITLES = [
  "Python Backend Developer",
  "Django REST Framework Expert",
  "API Architect",
  "Database Optimizer",
  "Backend Engineer"
];
function Hero() {
  const [titleIdx, setTitleIdx] = reactExports.useState(0);
  const [displayed, setDisplayed] = reactExports.useState("");
  const [typing, setTyping] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const target = TITLES[titleIdx];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2e3);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "about",
      className: "relative min-h-screen flex items-center justify-center bg-grid overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[#00ff41] opacity-50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-[#ff2222] opacity-50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-[#ff2222] opacity-50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[#00ff41] opacity-50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "hero-orb hero-orb-green absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none",
            style: { background: "radial-gradient(circle, #00ff4108 0%, transparent 70%)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "hero-orb hero-orb-red absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none",
            style: { background: "radial-gradient(circle, #ff222208 0%, transparent 70%)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 mb-8 px-4 py-2 border border-[#00ff4130] bg-[#00ff4108] clip-corner-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-[#00ff41] animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-code text-xs text-[#00ff41] tracking-widest", children: "AVAILABLE FOR OPPORTUNITIES" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "h1",
            {
              className: "text-6xl md:text-8xl font-bold tracking-tight mb-2 animate-glitch",
              style: { letterSpacing: "-0.02em" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-glow-white", children: "STEEVAN" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#00ff41] text-glow-green", children: " J" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-code text-lg md:text-2xl text-[#00ff41] text-glow-green animate-blink-cursor", children: displayed }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed mb-10 animate-fade-in", children: [
            "Building ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#00ff41]", children: "reliable" }),
            " and",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#ff2222]", children: "scalable" }),
            " backend services with Django, DRF, Celery & Redis. Focused on clean APIs, query optimization, and secure architecture."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-4 mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://github.com/steevanj",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-2 px-4 py-2 border border-[#00ff4130] hover:border-[#00ff41] text-gray-400 hover:text-[#00ff41] transition-all duration-300 clip-corner-sm text-sm tracking-wide",
                style: { transition: "all 0.3s" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { size: 15 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-code", children: "steevanj" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://linkedin.com/in/steechinna",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-2 px-4 py-2 border border-[#00ff4130] hover:border-[#00ff41] text-gray-400 hover:text-[#00ff41] transition-all duration-300 clip-corner-sm text-sm tracking-wide",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 15 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-code", children: "steechinna" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "mailto:steevan.dev@gmail.com",
                className: "flex items-center gap-2 px-4 py-2 border border-[#ff222230] hover:border-[#ff2222] text-gray-400 hover:text-[#ff2222] transition-all duration-300 clip-corner-sm text-sm tracking-wide",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 15 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-code", children: "steevan.dev@gmail.com" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "tel:09742414178",
                className: "flex items-center gap-2 px-4 py-2 border border-[#ff222230] hover:border-[#ff2222] text-gray-400 hover:text-[#ff2222] transition-all duration-300 clip-corner-sm text-sm tracking-wide",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 15 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-code", children: "09742414178" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-2 text-gray-500 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 15, className: "text-[#00ff41]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-code", children: "Bangalore, IN" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-4 mb-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
                className: "clip-corner px-8 py-3 font-bold tracking-widest uppercase text-sm bg-[#00ff41] text-black hover:bg-[#00cc33] transition-colors duration-300 animate-pulse-glow",
                children: "View Projects"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
                className: "clip-corner px-8 py-3 font-bold tracking-widest uppercase text-sm border-2 border-[#ff2222] text-[#ff2222] hover:bg-[#ff2222] hover:text-white transition-all duration-300",
                style: { boxShadow: "0 0 15px #ff222230" },
                children: "Contact Me"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://drive.google.com/file/d/18Phc4dvb8O8mo8kPkrC1vs666T1-Emn8/view?usp=sharing",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "clip-corner px-8 py-3 font-bold tracking-widest uppercase text-sm border-2 border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-all duration-300 inline-flex items-center gap-2",
                style: { boxShadow: "0 0 15px #00ff4130" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 14 }),
                  "Resume"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4 max-w-lg mx-auto", children: [
            { value: "10+", label: "REST APIs Built" },
            { value: "25%", label: "API Speed Boost" },
            { value: "8+", label: "DB Entities" }
          ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-card text-center p-3 border border-[#00ff4120] bg-[#00ff4105]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-[#00ff41] text-glow-green", children: stat.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-500 font-mono-code mt-1", children: stat.label })
          ] }, stat.label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#00ff41] opacity-60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-code text-xs tracking-widest", children: "SCROLL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 16, className: "animate-bounce" })
        ] })
      ]
    }
  );
}
const experiences = [
  {
    role: "Python Backend Developer",
    company: "WeSalvator",
    period: "07/2026 – Present",
    location: "Bangalore",
    color: "green",
    points: [
      "Developed and maintained Django REST APIs for production workflows.",
      "Optimized ORM queries to improve database performance and resolve N+1 issues.",
      "Integrated Celery and Redis; improved security and error handling."
    ]
  },
  {
    role: "Python Backend Developer Trainee",
    company: "Cloud Institution",
    period: "01/2026 – 06/2026",
    location: "Bangalore",
    color: "red",
    points: [
      "Developed 10+ REST APIs using Django REST Framework.",
      "Designed 8+ database entities using Django ORM and MySQL.",
      "Implemented JWT, RBAC, and query optimization, improving API response times by 25%."
    ]
  }
];
function Experience() {
  const sectionRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "experience", ref: sectionRef, className: "py-24 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mb-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-code text-xs text-[#00ff41] tracking-widest mb-3", children: "// WORK HISTORY" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-white tracking-tight", children: [
        "Professional ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#00ff41] text-glow-green", children: "Experience" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#00ff41] to-transparent" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px",
          style: {
            background: "linear-gradient(to bottom, transparent, #00ff4140, #ff222240, transparent)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-12", children: experiences.map((exp, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `reveal relative flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-start`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 mt-6 z-10",
                style: {
                  background: exp.color === "green" ? "#00ff41" : "#ff2222",
                  boxShadow: exp.color === "green" ? "0 0 12px #00ff41, 0 0 24px #00ff4160" : "0 0 12px #ff2222, 0 0 24px #ff222260"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block w-1/2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `ml-12 md:ml-0 md:w-1/2 border p-6 clip-corner project-card ${exp.color === "green" ? "border-[#00ff4130] hover:border-[#00ff41] bg-[#00ff4105]" : "border-[#ff222230] hover:border-[#ff2222] bg-[#ff22220a]"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between flex-wrap gap-2 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-bold text-lg ${exp.color === "green" ? "text-[#00ff41]" : "text-[#ff2222]"}`, children: exp.role }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 13, className: "text-gray-500" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold text-sm", children: exp.company })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-gray-400 text-xs font-mono-code", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 11 }),
                        exp.period
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-gray-500 text-xs font-mono-code mt-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 11 }),
                        exp.location
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: exp.points.map((pt) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-gray-400 text-sm leading-relaxed", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: exp.color === "green" ? "text-[#00ff41]" : "text-[#ff2222]", children: "▸" }),
                    pt
                  ] }, pt)) })
                ]
              }
            )
          ]
        },
        exp.company
      )) })
    ] })
  ] }) });
}
const projects = [
  {
    name: "WeSalvator",
    subtitle: "Animal Rescue & Welfare Platform",
    period: "09/2026 – Present",
    url: "https://uat.wesalvator.com",
    color: "green",
    tags: ["Django", "DRF", "PostgreSQL", "REST API", "Security"],
    points: [
      "Contributed to developing and improving an animal rescue platform.",
      "Fixed bugs, optimized backend performance, and improved API reliability.",
      "Worked on security enhancements and overall application stability."
    ],
    badge: "LIVE"
  },
  {
    name: "Crescent Academy",
    subtitle: "Education Platform",
    period: "08/2026 – Present",
    url: "https://crescentacademyedu.com",
    color: "red",
    tags: ["Django", "Celery", "Redis", "ORM", "JWT", "MySQL"],
    points: [
      "Built Django APIs, authentication, and core backend workflows.",
      "Optimized ORM queries and resolved N+1 database issues.",
      "Integrated Celery and Redis for asynchronous email processing."
    ],
    badge: "LIVE"
  }
];
function Projects() {
  const sectionRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "projects", ref: sectionRef, className: "py-24 relative bg-grid", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mb-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-code text-xs text-[#ff2222] tracking-widest mb-3", children: "// PORTFOLIO" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-white tracking-tight", children: [
        "Featured ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#ff2222] text-glow-red", children: "Projects" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#ff2222] to-transparent" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8", children: projects.map((project, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `reveal project-card relative clip-corner border p-8 overflow-hidden scan-line ${project.color === "green" ? "border-[#00ff4130] bg-[#00ff4105] hover:border-[#00ff4180]" : "border-[#ff222230] bg-[#ff22220a] hover:border-[#ff222280]"}`,
        style: { transitionDelay: `${i * 150}ms` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -top-8 -right-8 w-32 h-32 rounded-full pointer-events-none",
              style: {
                background: project.color === "green" ? "radial-gradient(circle, #00ff4115 0%, transparent 70%)" : "radial-gradient(circle, #ff222215 0%, transparent 70%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-bold text-2xl ${project.color === "green" ? "text-[#00ff41]" : "text-[#ff2222]"}`, children: project.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `px-2 py-0.5 text-xs font-mono-code font-bold border ${project.color === "green" ? "border-[#00ff41] text-[#00ff41]" : "border-[#ff2222] text-[#ff2222]"}`,
                    children: project.badge
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm font-mono-code", children: project.subtitle })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: project.url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: `p-2 border transition-all duration-300 ${project.color === "green" ? "border-[#00ff4130] text-[#00ff41] hover:bg-[#00ff4120] hover:border-[#00ff41]" : "border-[#ff222230] text-[#ff2222] hover:bg-[#ff222220] hover:border-[#ff2222]"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-gray-500 text-xs font-mono-code mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 12 }),
            project.period
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 mb-6", children: project.points.map((pt) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-gray-400 text-sm leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              GitBranch,
              {
                size: 13,
                className: `mt-0.5 flex-shrink-0 ${project.color === "green" ? "text-[#00ff41]" : "text-[#ff2222]"}`
              }
            ),
            pt
          ] }, pt)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: project.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `px-2 py-1 text-xs font-mono-code border ${project.color === "green" ? "border-[#00ff4120] text-[#00ff4180] bg-[#00ff4108]" : "border-[#ff222220] text-[#ff222280] bg-[#ff222208]"}`,
              children: tag
            },
            tag
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: project.url,
              target: "_blank",
              rel: "noopener noreferrer",
              className: `mt-6 flex items-center justify-center gap-2 py-3 text-sm font-bold tracking-widest uppercase clip-corner-sm transition-all duration-300 ${project.color === "green" ? "bg-[#00ff4115] border border-[#00ff4130] text-[#00ff41] hover:bg-[#00ff41] hover:text-black" : "bg-[#ff222215] border border-[#ff222230] text-[#ff2222] hover:bg-[#ff2222] hover:text-white"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 14 }),
                "Visit Live Site"
              ]
            }
          )
        ]
      },
      project.name
    )) })
  ] }) });
}
const skillGroups = [
  {
    category: "Python Backend Development",
    color: "green",
    skills: [
      { name: "Python", level: 90 },
      { name: "Django", level: 88 },
      { name: "Django REST Framework", level: 85 },
      { name: "REST APIs", level: 87 },
      { name: "JWT / RBAC", level: 82 }
    ]
  },
  {
    category: "Database Management",
    color: "red",
    skills: [
      { name: "MySQL", level: 84 },
      { name: "PostgreSQL", level: 80 },
      { name: "Django ORM", level: 88 },
      { name: "Query Optimization", level: 82 },
      { name: "SQLite", level: 78 }
    ]
  },
  {
    category: "Performance & Tools",
    color: "green",
    skills: [
      { name: "Redis", level: 78 },
      { name: "Celery", level: 75 },
      { name: "Postman", level: 90 },
      { name: "VS Code", level: 92 },
      { name: "Caching", level: 76 }
    ]
  },
  {
    category: "DevOps",
    color: "red",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "Docker", level: 70 },
      { name: "CI/CD", level: 65 }
    ]
  }
];
const techBadges = [
  "Python",
  "Django",
  "DRF",
  "MySQL",
  "PostgreSQL",
  "SQLite",
  "Redis",
  "Celery",
  "JWT",
  "RBAC",
  "Docker",
  "Git",
  "GitHub",
  "CI/CD",
  "REST APIs",
  "ORM",
  "Query Optimization",
  "Postman",
  "VS Code",
  "Debugging",
  "Caching"
];
function SkillBar({ name, level, color, animate }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono-code text-xs text-gray-300 tracking-wide", children: name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-mono-code text-xs ${color === "green" ? "text-[#00ff41]" : "text-[#ff2222]"}`, children: [
        level,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-gray-900 rounded overflow-hidden border border-[#ffffff08]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `h-full rounded transition-all duration-1000 ease-out ${color === "green" ? "bg-gradient-to-r from-[#00ff41] to-[#00cc33]" : "bg-gradient-to-r from-[#ff2222] to-[#cc1111]"}`,
        style: {
          width: animate ? `${level}%` : "0%",
          boxShadow: color === "green" ? "0 0 8px #00ff4160" : "0 0 8px #ff222260",
          transitionDelay: "200ms"
        }
      }
    ) })
  ] });
}
function Skills() {
  const sectionRef = reactExports.useRef(null);
  const [animate, setAnimate] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "skills", ref: sectionRef, className: "py-24 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mb-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-code text-xs text-[#00ff41] tracking-widest mb-3", children: "// TECH STACK" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-white tracking-tight", children: [
        "Skills & ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#00ff41] text-glow-green", children: "Technologies" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#00ff41] to-transparent" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6 mb-14", children: skillGroups.map((group, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `reveal clip-corner border p-6 ${group.color === "green" ? "border-[#00ff4130] bg-[#00ff4105]" : "border-[#ff222230] bg-[#ff22220a]"}`,
        style: { transitionDelay: `${i * 100}ms` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-bold text-sm tracking-widest uppercase mb-5 font-mono-code ${group.color === "green" ? "text-[#00ff41]" : "text-[#ff2222]"}`, children: group.category }),
          group.skills.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            SkillBar,
            {
              name: skill.name,
              level: skill.level,
              color: group.color,
              animate
            },
            skill.name
          ))
        ]
      },
      group.category
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-code text-xs text-gray-500 tracking-widest mb-6", children: "// ALL TECHNOLOGIES" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-3", children: techBadges.map((badge, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "px-3 py-1.5 text-xs font-mono-code border border-[#ffffff10] text-gray-400 hover:border-[#00ff4140] hover:text-[#00ff41] transition-all duration-300 cursor-default",
          style: { animationDelay: `${i * 50}ms` },
          children: badge
        },
        badge
      )) })
    ] })
  ] }) });
}
const education = [
  {
    degree: "B.E. in Information Science & Engineering",
    institution: "The Oxford College of Engineering",
    period: "11/2023 – 07/2026",
    location: "Bangalore",
    score: "7.5 / 10 GPA",
    color: "green",
    icon: GraduationCap
  },
  {
    degree: "Diploma in Computer Science & Engineering",
    institution: "BTL Polytechnic",
    period: "06/2018 – 08/2022",
    location: "Bangalore",
    score: "60%",
    color: "red",
    icon: Award
  }
];
function Education() {
  const sectionRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "education", ref: sectionRef, className: "py-24 relative bg-grid", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mb-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-code text-xs text-[#ff2222] tracking-widest mb-3", children: "// ACADEMIC BACKGROUND" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white tracking-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#ff2222] text-glow-red", children: "Education" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#ff2222] to-transparent" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8", children: education.map((edu, i) => {
      const Icon2 = edu.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `reveal project-card clip-corner border p-8 relative overflow-hidden ${edu.color === "green" ? "border-[#00ff4130] bg-[#00ff4105] hover:border-[#00ff4160]" : "border-[#ff222230] bg-[#ff22220a] hover:border-[#ff222260]"}`,
          style: { transitionDelay: `${i * 200}ms` },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-4 -right-4 opacity-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { size: 100, className: edu.color === "green" ? "text-[#00ff41]" : "text-[#ff2222]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `inline-flex items-center justify-center w-12 h-12 mb-5 clip-corner-sm ${edu.color === "green" ? "bg-[#00ff4115] border border-[#00ff4130]" : "bg-[#ff222215] border border-[#ff222230]"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { size: 20, className: edu.color === "green" ? "text-[#00ff41]" : "text-[#ff2222]" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-white text-lg leading-snug mb-2", children: edu.degree }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-semibold text-sm mb-4 ${edu.color === "green" ? "text-[#00ff41]" : "text-[#ff2222]"}`, children: edu.institution }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-gray-400 text-xs font-mono-code", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 12, className: "text-gray-500" }),
                edu.period
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-gray-400 text-xs font-mono-code", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 12, className: "text-gray-500" }),
                edu.location
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `flex items-center gap-2 text-xs font-bold font-mono-code mt-3 px-3 py-1.5 border w-fit clip-corner-sm ${edu.color === "green" ? "border-[#00ff4130] text-[#00ff41] bg-[#00ff4110]" : "border-[#ff222230] text-[#ff2222] bg-[#ff222210]"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { size: 11 }),
                    edu.score
                  ]
                }
              )
            ] })
          ]
        },
        edu.institution
      );
    }) })
  ] }) });
}
function Contact() {
  const sectionRef = reactExports.useRef(null);
  const [sent, setSent] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({ name: "", email: "", message: "" });
  reactExports.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:steevan.dev@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 4e3);
  };
  const contacts = [
    { icon: Mail, label: "Email", value: "steevan.dev@gmail.com", href: "mailto:steevan.dev@gmail.com", color: "green" },
    { icon: Phone, label: "Phone", value: "09742414178", href: "tel:09742414178", color: "red" },
    { icon: MapPin, label: "Location", value: "Bangalore, India", href: null, color: "green" },
    { icon: Github, label: "GitHub", value: "steevanj", href: "https://github.com/steevanj", color: "red" },
    { icon: Linkedin, label: "LinkedIn", value: "steechinna", href: "https://linkedin.com/in/steechinna", color: "green" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", ref: sectionRef, className: "py-24 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mb-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-code text-xs text-[#00ff41] tracking-widest mb-3", children: "// GET IN TOUCH" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-white tracking-tight", children: [
        "Let's ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#00ff41] text-glow-green", children: "Connect" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#00ff41] to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-gray-400 max-w-xl mx-auto text-sm leading-relaxed", children: "Open to backend developer roles, freelance projects, and collaboration opportunities. Drop a message and I'll get back to you." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-code text-xs text-gray-500 tracking-widest mb-6", children: "// CONTACT CHANNELS" }),
        contacts.map((c, i) => {
          const Icon2 = c.icon;
          const Inner = /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `reveal flex items-center gap-4 p-4 border clip-corner-sm transition-all duration-300 ${c.color === "green" ? "border-[#00ff4120] hover:border-[#00ff4150] hover:bg-[#00ff4108]" : "border-[#ff222220] hover:border-[#ff222250] hover:bg-[#ff222208]"}`,
              style: { transitionDelay: `${i * 80}ms` },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `w-10 h-10 flex items-center justify-center flex-shrink-0 ${c.color === "green" ? "bg-[#00ff4110] border border-[#00ff4130]" : "bg-[#ff222210] border border-[#ff222230]"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { size: 16, className: c.color === "green" ? "text-[#00ff41]" : "text-[#ff2222]" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-code text-xs text-gray-500 mb-0.5", children: c.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-semibold ${c.color === "green" ? "text-white" : "text-white"}`, children: c.value })
                ] })
              ]
            }
          );
          return c.href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: c.href, target: c.href.startsWith("http") ? "_blank" : void 0, rel: "noopener noreferrer", children: Inner }, c.label) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: Inner }, c.label);
        })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal reveal-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "clip-corner border border-[#00ff4130] bg-[#00ff4105] p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-code text-xs text-gray-500 tracking-widest mb-6", children: "// SEND MESSAGE" }),
        sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-4 py-12 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 48, className: "text-[#00ff41] text-glow-green" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-[#00ff41] text-lg", children: "Message Sent!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm", children: "Your email client has been opened." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-mono-code text-xs text-gray-500 mb-1.5 tracking-wide", children: "NAME" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                required: true,
                value: form.name,
                onChange: (e) => setForm({ ...form, name: e.target.value }),
                className: "w-full bg-black border border-[#ffffff10] focus:border-[#00ff4150] text-white text-sm px-4 py-3 outline-none font-mono-code transition-colors placeholder-gray-700",
                placeholder: "Your name",
                style: { clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-mono-code text-xs text-gray-500 mb-1.5 tracking-wide", children: "EMAIL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "email",
                required: true,
                value: form.email,
                onChange: (e) => setForm({ ...form, email: e.target.value }),
                className: "w-full bg-black border border-[#ffffff10] focus:border-[#00ff4150] text-white text-sm px-4 py-3 outline-none font-mono-code transition-colors placeholder-gray-700",
                placeholder: "your@email.com",
                style: { clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-mono-code text-xs text-gray-500 mb-1.5 tracking-wide", children: "MESSAGE" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                required: true,
                rows: 4,
                value: form.message,
                onChange: (e) => setForm({ ...form, message: e.target.value }),
                className: "w-full bg-black border border-[#ffffff10] focus:border-[#00ff4150] text-white text-sm px-4 py-3 outline-none font-mono-code transition-colors resize-none placeholder-gray-700",
                placeholder: "Your message...",
                style: { clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "submit",
              className: "w-full clip-corner py-3 font-bold tracking-widest uppercase text-sm bg-[#00ff41] text-black hover:bg-[#ff2222] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 animate-pulse-glow",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 14 }),
                "Send Message"
              ]
            }
          )
        ] })
      ] }) })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "py-10 border-t border-[#00ff4115] relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#00ff4140] to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-[#00ff41] text-lg tracking-widest text-glow-green", children: "<STEVE.DEV/>" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono-code text-xs text-gray-600 mt-1", children: "Python Backend Developer" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://github.com/steevanj",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "w-9 h-9 flex items-center justify-center border border-[#00ff4130] text-gray-500 hover:text-[#00ff41] hover:border-[#00ff41] transition-all duration-300",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { size: 15 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://linkedin.com/in/steechinna",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "w-9 h-9 flex items-center justify-center border border-[#00ff4130] text-gray-500 hover:text-[#00ff41] hover:border-[#00ff41] transition-all duration-300",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 15 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "mailto:steevan.dev@gmail.com",
            className: "w-9 h-9 flex items-center justify-center border border-[#ff222230] text-gray-500 hover:text-[#ff2222] hover:border-[#ff2222] transition-all duration-300",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 15 })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono-code text-xs text-gray-600 flex items-center gap-1", children: [
        "Built with",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 10, className: "text-[#ff2222] mx-0.5" }),
        "by Steevan J © 2026"
      ] })
    ] }) })
  ] });
}
function App() {
  reactExports.useEffect(() => {
    const updatePointer = (event) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", updatePointer);
    return () => window.removeEventListener("pointermove", updatePointer);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-black text-white relative motion-root", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MatrixRain, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cursor-glow", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 pointer-events-none",
        style: {
          background: "radial-gradient(ellipse at 50% 0%, #00ff4108 0%, transparent 60%)",
          zIndex: 1
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: { zIndex: 2 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Education, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(App, {});
}
export {
  Index as component
};
