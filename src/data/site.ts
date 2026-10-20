// Single source of truth for all site copy, links and numbers.
// Edit here — components only render what's defined in this file.
// Rule: only real numbers and real claims. Leave arrays empty rather than invent.

export const contact = {
  name: 'Steve',
  fullName: 'Steevan J',
  role: 'Django SaaS Architect & Backend Engineer',
  email: 'hello@stevedev.live',
  phoneDisplay: '+91 97424 14178',
  phoneHref: 'tel:+919742414178',
  whatsapp: 'https://wa.me/919742414178',
  github: 'https://github.com/steevanj',
  githubHandle: 'steevanj',
  linkedin: 'https://linkedin.com/in/steechinna',
  linkedinHandle: 'steechinna',
  location: 'Bengaluru, India',
  resume: 'https://drive.google.com/file/d/18Phc4dvb8O8mo8kPkrC1vs666T1-Emn8/view?usp=sharing',
  // Swap for your Calendly / Google Calendar booking link when you have one.
  bookingUrl:
    'mailto:hello@stevedev.live?subject=' +
    encodeURIComponent('Discovery call request') +
    '&body=' +
    encodeURIComponent('Hi Steve,\n\nI would like to book a short discovery call.\n\nA few times that work for me (with timezone):\n- \n- \n\nWhat I want to build:\n'),
  responseTime: 'Within 24 hours',
  availability: 'Available for freelance projects',
};

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Packages', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

// Real numbers only.
export const proofStats = [
  { value: '2', label: 'Production platforms live', note: 'WeSalvator · Crescent Academy' },
  { value: '10+', label: 'REST APIs shipped', note: 'Django REST Framework' },
  { value: '25%', label: 'Faster API responses', note: 'via query optimisation' },
  { value: '<24h', label: 'Reply to every enquiry', note: 'Mon – Sat' },
];

export const promises = [
  'Fixed-price quotes',
  'Weekly progress demos',
  'You own 100% of the code',
];

export const painPoints = [
  {
    pain: 'Your app slows down as users grow',
    fix: 'I profile the slow endpoints, remove N+1 queries, add indexes and Redis caching.',
  },
  {
    pain: 'You have an idea, but no backend team',
    fix: 'I take you from a rough spec to a deployed, production-ready MVP.',
  },
  {
    pain: 'Your frontend or mobile team is blocked on APIs',
    fix: 'Clean, versioned, documented DRF APIs your developers can build on immediately.',
  },
  {
    pain: 'Emails, reports and imports freeze the app',
    fix: 'I move slow work to Celery + Redis background jobs so users never wait.',
  },
  {
    pain: 'Your Django codebase feels fragile',
    fix: 'Upgrades, refactors, tests and bug fixes — without breaking what already works.',
  },
  {
    pain: 'You want to sell your software to many clients',
    fix: 'Multi-tenant SaaS architecture with tenant isolation, roles and subscriptions.',
  },
];

export type ServiceIcon = 'web' | 'saas' | 'api' | 'devops' | 'speed' | 'support';

export const services: {
  icon: ServiceIcon;
  title: string;
  outcome: string;
  deliverables: string[];
  idealFor: string;
}[] = [
  {
    icon: 'web',
    title: 'Django Web Development',
    outcome: 'Custom Django applications built for performance, security and scalability.',
    deliverables: ['Custom business logic & admin', 'Secure auth & permissions', 'Clean, tested codebase'],
    idealFor: 'Businesses replacing spreadsheets or off-the-shelf tools',
  },
  {
    icon: 'saas',
    title: 'SaaS Development',
    outcome: 'Multi-tenant SaaS architecture with subscriptions, roles and user management.',
    deliverables: ['Tenant isolation', 'Plans, billing & subscriptions', 'Team accounts & RBAC'],
    idealFor: 'Founders launching or scaling a SaaS product',
  },
  {
    icon: 'api',
    title: 'API Development',
    outcome: 'REST APIs with Django REST Framework that frontend and mobile teams love to use.',
    deliverables: ['JWT / token auth', 'Versioned, documented endpoints', 'Third-party integrations'],
    idealFor: 'React, Next.js and mobile app teams',
  },
  {
    icon: 'devops',
    title: 'DevOps & Deployment',
    outcome: 'Docker, Nginx, Gunicorn and CI/CD so every release is boring — in a good way.',
    deliverables: ['Dockerised environments', 'Automated CI/CD pipelines', 'Cloud server setup'],
    idealFor: 'Teams still deploying by hand',
  },
  {
    icon: 'speed',
    title: 'Performance Optimisation',
    outcome: 'Database tuning, Redis caching and query optimisation for faster pages and lower bills.',
    deliverables: ['Query & N+1 audit', 'Redis caching layer', 'Celery background jobs'],
    idealFor: 'Apps that got slower as they grew',
  },
  {
    icon: 'support',
    title: 'Maintenance & Support',
    outcome: 'Bug fixing, Django upgrades and ongoing support so your product stays healthy.',
    deliverables: ['Bug fixes & upgrades', 'Security patches', 'Monthly retainer option'],
    idealFor: 'Live products that need a reliable engineer',
  },
];

export type CaseStudy = {
  name: string;
  category: string;
  role: string;
  liveUrl?: string;
  codeUrl?: string;
  status: string;
  problem: string;
  solution: string;
  results: string[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    name: 'WeSalvator',
    category: 'Animal rescue & welfare platform',
    role: 'Python Backend Developer',
    liveUrl: 'https://uat.wesalvator.com',
    status: 'Live',
    problem:
      'A growing rescue platform needed its backend to stay fast, reliable and secure as more rescues, volunteers and users came online.',
    solution:
      'Optimised Django ORM queries and removed N+1 bottlenecks, fixed production bugs, hardened security and error handling, and moved slow work onto Celery + Redis.',
    results: [
      'More reliable APIs under real production traffic',
      'Faster database-backed endpoints after N+1 fixes',
      'Stronger security and predictable error handling',
    ],
    stack: ['Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis'],
  },
  {
    name: 'Crescent Academy',
    category: 'Education platform',
    role: 'Backend Developer',
    liveUrl: 'https://crescentacademyedu.com',
    status: 'Live',
    problem:
      'The academy needed secure accounts and core learning workflows — and transactional emails were slowing down user requests.',
    solution:
      'Built the Django APIs, JWT authentication and core backend workflows, resolved N+1 query issues, and moved email delivery to asynchronous Celery + Redis tasks.',
    results: [
      'Emails no longer block user requests',
      'Leaner queries on the busiest pages',
      'Secure token-based authentication',
    ],
    stack: ['Django', 'DRF', 'MySQL', 'JWT', 'Celery', 'Redis'],
  },
  {
    name: 'EchoSphere',
    category: 'Voice-based social platform',
    role: 'Solo product build',
    codeUrl: 'https://github.com/steevanj',
    status: 'Product build',
    problem:
      'Live voice rooms need real-time presence and interactions that a plain request/response backend cannot deliver.',
    solution:
      'Django + DRF for authentication and social APIs, WebSockets backed by Redis for real-time rooms, plus a Spotify API integration.',
    results: ['Real-time rooms', 'Authentication & social interactions', 'Third-party API integrations'],
    stack: ['Django', 'DRF', 'Redis', 'WebSockets', 'Spotify API'],
  },
];

// Add real client quotes here when you get them — the section stays hidden while empty.
export const testimonials: { quote: string; name: string; title: string }[] = [];

export const processSteps = [
  {
    title: 'Free discovery call',
    time: '20–30 min',
    text: 'We talk goals, users, scope and constraints. You leave with clarity — even if we don’t end up working together.',
  },
  {
    title: 'Proposal & fixed quote',
    time: 'Within 48 hours',
    text: 'A written scope with milestones, timeline and a clear price. No vague estimates, no surprise invoices.',
  },
  {
    title: 'Build in weekly sprints',
    time: 'Demo every week',
    text: 'You get a staging link and a short progress update every week, so you always know exactly where things stand.',
  },
  {
    title: 'Launch & handover',
    time: 'Production-ready',
    text: 'Deployment, documentation and credentials handed over — plus a post-launch support window for fixes.',
  },
];

export const guarantees = [
  { title: 'You own the code', text: 'Full IP and repository ownership on payment.' },
  { title: 'No black boxes', text: 'Weekly demos and a staging environment you can click through.' },
  { title: 'Production quality', text: 'Readable, documented code that another developer can pick up.' },
  { title: 'Timezone-friendly', text: 'IST-based with overlap for UK/EU mornings and US evenings.' },
];

export const techStack = [
  { group: 'Backend', items: ['Python', 'Django', 'Django REST Framework', 'Celery'] },
  { group: 'Database', items: ['PostgreSQL', 'MySQL', 'Redis', 'SQLite'] },
  { group: 'Security', items: ['JWT', 'RBAC', 'OAuth integrations', 'Secure headers'] },
  { group: 'DevOps', items: ['Docker', 'Nginx', 'Gunicorn', 'Linux', 'Jenkins', 'CI/CD'] },
  { group: 'Cloud', items: ['AWS', 'DigitalOcean', 'Azure'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Gitea', 'Postman'] },
];

export const about = {
  intro: 'Hi, I’m Steve.',
  story: [
    'I’m a Django backend developer who builds multi-tenant SaaS applications, REST APIs, authentication systems, Redis-powered services, payment integrations and deployment pipelines.',
    'I’ve shipped backend work on live platforms used by real people — from an animal-rescue network to an education platform — fixing slow queries, hardening security and moving heavy work into background jobs.',
    'Today I help startups and businesses turn ideas into scalable products: thoughtfully architected, properly deployed and easy to grow.',
  ],
  mission: 'Build software that keeps working when your business takes off.',
  industries: ['Non-profit & animal welfare', 'Education', 'Social & media', 'SaaS startups'],
  timeline: [
    {
      when: '07/2026 – Present',
      title: 'Python Backend Developer',
      where: 'WeSalvator',
      text: 'Production Django REST APIs, ORM optimisation, Celery + Redis integration, security and error handling.',
    },
    {
      when: '01/2026 – 06/2026',
      title: 'Python Backend Developer Trainee',
      where: 'Cloud Institution',
      text: '10+ REST APIs and 8+ database entities; JWT, RBAC and query optimisation that improved API response times by 25%.',
    },
    {
      when: '2023 – 2026',
      title: 'B.E. Information Science & Engineering',
      where: 'The Oxford College of Engineering',
      text: 'Preceded by a Diploma in Computer Science & Engineering (BTL Polytechnic).',
    },
  ],
};

// No public prices — every project is quoted after a free call.
export const pricingPlans = [
  {
    name: 'Starter Project',
    timeline: '1–2 weeks',
    description: 'A focused Django build or a well-defined fix — perfect to get started.',
    features: [
      'Business website or small web app',
      'Django admin for your team',
      'Forms, emails & basic auth',
      'Deployment to your server',
    ],
    cta: 'Start a starter project',
    featured: false,
  },
  {
    name: 'Business Application',
    timeline: '3–6 weeks',
    description: 'A complete web application or API that runs a core part of your business.',
    features: [
      'Everything in Starter',
      'Roles, permissions & dashboards',
      'REST API for web / mobile apps',
      'Payments & third-party integrations',
      'Celery + Redis background jobs',
    ],
    cta: 'Build my application',
    featured: true,
  },
  {
    name: 'SaaS Development',
    timeline: '6+ weeks',
    description: 'A multi-tenant SaaS platform architected to scale from day one.',
    features: [
      'Multi-tenant architecture',
      'Subscriptions & billing',
      'Team accounts & RBAC',
      'CI/CD & production infrastructure',
    ],
    cta: 'Discuss my SaaS',
    featured: false,
  },
];


export const faqs = [
  {
    q: 'Do you work with clients outside India?',
    a: 'Yes. I work remotely with clients anywhere and keep a few hours of overlap with your timezone for calls. All communication is in English, async-friendly, and documented in writing.',
  },
  {
    q: 'How much will my project cost?',
    a: 'It depends on scope, so there are no fixed price tags. After a free call I send a clear written quote — and if it’s above your budget, I’ll suggest what to build first so you still get real value. Small fixes and ongoing support can also be billed hourly or as a monthly retainer.',
  },
  {
    q: 'Can you take over an existing Django project?',
    a: 'Absolutely. I start with a short code and infrastructure review, flag the risky parts, and then fix, upgrade or extend the app without breaking what already works.',
  },
  {
    q: 'Do I own the code?',
    a: 'Yes — 100%. The code lives in your repository and all IP transfers to you on payment. I’m happy to sign an NDA before we discuss details.',
  },
  {
    q: 'Do you build the frontend as well?',
    a: 'My focus is the backend. For UI I use Django templates with HTMX/Alpine.js, or I plug cleanly into your React, Next.js or mobile team through well-documented APIs.',
  },
  {
    q: 'How do payments work?',
    a: 'Usually milestone-based: a deposit to kick off, then payments tied to delivered, demoed milestones. You never pay for work you haven’t seen.',
  },
  {
    q: 'What do you need from me to get started?',
    a: 'Just a rough idea of what you want to build. Fill in the project brief below or book a call — we’ll turn it into a clear scope together.',
  },
];

// ---------- Project scope estimator ----------
// Effort is in working days; the UI turns it into a project size and timeline (no prices shown).

export const estimator = {
  types: [
    { id: 'website', label: 'Business website', hint: 'Marketing site with admin & forms', days: 5 },
    { id: 'webapp', label: 'Web application', hint: 'Dashboards, workflows, users', days: 15 },
    { id: 'saas', label: 'SaaS platform', hint: 'Multi-customer product', days: 30 },
    { id: 'api', label: 'REST API / backend', hint: 'For a web or mobile frontend', days: 10 },
    { id: 'fix', label: 'Fix or speed up an app', hint: 'Existing Django project', days: 4 },
  ],
  // Each page/screen beyond the included ones adds this many days.
  includedScreens: 5,
  perScreenDays: 0.5,
  features: [
    { id: 'auth', label: 'User accounts & roles', days: 2 },
    { id: 'payments', label: 'Payments & subscriptions', days: 3 },
    { id: 'integrations', label: 'Third-party API integrations', days: 2 },
    { id: 'dashboard', label: 'Admin dashboard & reports', days: 3 },
    { id: 'jobs', label: 'Background jobs (Celery + Redis)', days: 2 },
    { id: 'realtime', label: 'Real-time features (WebSockets)', days: 4 },
    { id: 'tenancy', label: 'Multi-tenancy', days: 8 },
    { id: 'deploy', label: 'Deployment & CI/CD', days: 2 },
  ],
  sizes: [
    { maxDays: 10, label: 'Small project', text: 'A focused build — a great way to start working together.' },
    { maxDays: 25, label: 'Medium project', text: 'A solid application delivered in a few weekly milestones.' },
    { maxDays: 45, label: 'Large project', text: 'A substantial product, planned and shipped in phases.' },
    { maxDays: Infinity, label: 'Complex platform', text: 'Best scoped together on a call, then built milestone by milestone.' },
  ],
};

// ---------- Project brief wizard ----------

export const wizard = {
  businessTypes: [
    'Startup MVP',
    'SaaS product',
    'Business web app',
    'API for web / mobile app',
    'Fix or scale an existing app',
    'Something else',
  ],
  features: [
    'User accounts & roles',
    'Payments & subscriptions',
    'REST API',
    'Admin dashboard',
    'Background jobs',
    'Real-time features',
    'Multi-tenancy',
    'Third-party integrations',
    'Deployment & DevOps',
    'Performance fixes',
  ],
  timelines: ['ASAP (under 2 weeks)', 'Within a month', '1–3 months', 'Flexible'],
  budgets: ['Under $500', '$500 – $1,500', '$1,500 – $5,000', '$5,000+', 'Not sure yet'],
};
