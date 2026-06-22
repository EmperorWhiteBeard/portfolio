import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top";
import { profile } from "@/data/profile";
import "./globals.css";

const siteUrl = "https://mizhabnp.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — DevOps & Cloud Engineer`,
    template: `%s — ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    "DevOps Engineer",
    "Cloud Engineer",
    "AWS Certified",
    "CI/CD",
    "Terraform",
    "Infrastructure as Code",
    "Docker",
    "Kubernetes",
    "Mizhab Mujeeb NP",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — DevOps & Cloud Engineer`,
    description: profile.tagline,
    siteName: `${profile.name} | Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — DevOps & Cloud Engineer`,
    description: profile.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <ScrollProgress />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
