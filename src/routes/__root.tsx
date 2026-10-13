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
import profileImage from "../assets/title.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
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
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
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
      { title: "Steve Dev — Python & Django Backend Developer" },
      {
        name: "description",
        content:
          "Steve Dev — Backend engineer at www.stevedev.live, building scalable Django APIs, secure multi-tenant systems, and high-performance Python applications.",
      },
      { name: "author", content: "Steve Dev" },
      {
        name: "keywords",
        content:
          "Steve Dev, stevedev.live, Django Developer, Python Backend, REST APIs, DRF, Bengaluru Developer, Backend Engineer, SaaS Architect, API Architect",
      },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#E9EBEB" },
      { property: "og:url", content: "https://www.stevedev.live/" },
      { property: "og:site_name", content: "Steve Dev" },
      { property: "og:title", content: "Steve Dev — Python & Django Backend Developer" },
      { property: "og:description", content: "Discover premium backend engineering at www.stevedev.live — Django APIs, secure auth, and scalable SaaS systems." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: profileImage },
      { property: "og:image:alt", content: "Steve Dev profile portrait" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Steve Dev — Python & Django Backend Developer" },
      { name: "twitter:description", content: "Discover premium backend engineering at www.stevedev.live — Django APIs, secure auth, and scalable SaaS systems." },
      { name: "twitter:image", content: profileImage },
      { name: "twitter:image:alt", content: "Steve Dev profile portrait" },
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
        href: "https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&family=Share+Tech+Mono&display=swap",
      },
      {
        rel: "icon",
        type: "image/png",
        href: profileImage,
      },
      {
        rel: "shortcut icon",
        type: "image/png",
        href: profileImage,
      },
      {
        rel: "apple-touch-icon",
        href: profileImage,
      },
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
    <html lang="en">
      <head>
        <HeadContent />
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
