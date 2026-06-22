import { Github, Linkedin, Mail, Phone, Terminal } from "lucide-react";
import { profile, nav } from "@/data/profile";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg-elevated/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-[1.5fr_1fr_1fr] gap-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-sm text-text-primary">
              <Terminal className="h-4 w-4 text-accent" />
              {profile.name}
            </div>
            <p className="mt-3 font-mono text-xs text-accent">
              &quot;{profile.quote}&quot;
            </p>
            <p className="mt-3 text-xs text-text-tertiary max-w-xs leading-relaxed">
              {profile.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-3">
              Navigate
            </h4>
            <ul className="space-y-2">
              {nav.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-3">
              Connect
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" /> {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" /> {profile.phone}
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-text-tertiary">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js,
            TypeScript &amp; Tailwind CSS.
          </p>
          <p className="font-mono text-[11px] text-text-tertiary flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-status" />
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}
