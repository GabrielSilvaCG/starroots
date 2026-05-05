import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

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

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { "http-equiv": "Content-Security-Policy", content: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.gpteng.co; style-src 'self' 'unsafe-inline' https://cdn.gpteng.co https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https://*;" },
      { "http-equiv": "X-Content-Type-Options", content: "nosniff" },
      { "http-equiv": "X-Frame-Options", content: "DENY" },
      { "http-equiv": "Referrer-Policy", content: "strict-origin-when-cross-origin" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Starroots" },
      { name: "description", content: "Starroots Demo showcases a sustainable rebranding of Starbucks with a modern, professional website." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Starroots" },
      { property: "og:description", content: "Starroots Demo showcases a sustainable rebranding of Starbucks with a modern, professional website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Starroots" },
      { name: "twitter:description", content: "Starroots Demo showcases a sustainable rebranding of Starbucks with a modern, professional website." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/10f86c88-d246-4a9f-a1b2-9894bdd2ce1b/id-preview-3713067d--d369ada1-b430-4ab8-8cfc-facb3769200e.lovable.app-1776535774831.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/10f86c88-d246-4a9f-a1b2-9894bdd2ce1b/id-preview-3713067d--d369ada1-b430-4ab8-8cfc-facb3769200e.lovable.app-1776535774831.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://cdn.gpteng.co", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
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
  return <Outlet />;
}
