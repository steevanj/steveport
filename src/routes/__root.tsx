import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import ogImage from "../assets/og-image.jpg";

const SITE_URL = "https://www.stevedev.live/";
const TITLE = "Hire a Django Developer — Steve | Django SaaS Architect & Backend Engineer";
const DESCRIPTION =
  "Freelance Django developer helping startups and businesses build scalable web apps, REST APIs, multi-tenant SaaS platforms, Redis/Celery systems and production deployments. Free consultation, fixed quotes, replies within 24 hours.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}#person`,
      name: "Steevan J",
      alternateName: "Steve",
      jobTitle: "Django SaaS Architect & Backend Engineer",
      url: SITE_URL,
      email: "mailto:hello@stevedev.live",
      address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
      sameAs: ["https://github.com/steevanj", "https://linkedin.com/in/steechinna"],
      knowsAbout: ["Django", "Django REST Framework", "Python", "PostgreSQL", "Redis", "Celery", "Docker", "SaaS architecture"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}#service`,
      name: "Steve Dev — Django Development",
      url: SITE_URL,
      email: "hello@stevedev.live",
      image: `${SITE_URL.replace(/\/$/, "")}${ogImage}`,
      priceRange: "$$",
      areaServed: "Worldwide",
      founder: { "@id": `${SITE_URL}#person` },
      serviceType: [
        "Django Web Development",
        "SaaS Development",
        "REST API Development",
        "DevOps & Deployment",
        "Performance Optimization",
        "Maintenance & Support",
      ],
    },
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-ink">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-ink">Page not found</h2>
        <p className="mt-2 text-sm text-muted">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-ink">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-canvas px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-slate-50"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "author", content: "Steevan J (Steve)" },
      {
        name: "keywords",
        content:
          "hire Django developer, freelance Django developer India, Django REST API developer, Python backend developer, Django SaaS development, multi-tenant Django, Django Redis expert, Django Celery developer, stevedev.live",
      },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#fafaf9" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Steve Dev" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Steve — Django SaaS Architect & Backend Engineer" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:image:alt", content: "Steve — Django SaaS Architect & Backend Engineer" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.stevedev.live/",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap",
      },
      // Fixed (unhashed) URLs from /public so Google and browsers can always find them.
      { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Lets CSS hide scroll-reveal content only when JS is running */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <HeadContent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
