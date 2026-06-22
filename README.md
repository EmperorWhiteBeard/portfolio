# Mizhab Mujeeb NP — DevOps & Cloud Engineer Portfolio

A production-grade portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion — designed to look and feel like an infrastructure status console rather than a generic developer portfolio.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint     # ESLint check
```

## Project structure

```
src/
  app/
    layout.tsx        # Root layout, fonts, SEO metadata, theme bootstrap script
    page.tsx           # Assembles every section in order
    globals.css        # Design tokens (colors, fonts, motion, console textures)
    robots.ts           # robots.txt route
    sitemap.ts          # sitemap.xml route
  components/
    header.tsx          # Sticky nav with active-section highlighting + theme toggle
    footer.tsx
    button.tsx, badge.tsx, section-heading.tsx   # Shared primitives
    theme-provider.tsx  # Dark/light mode (persisted to localStorage)
    scroll-progress.tsx # Top scroll progress bar
    back-to-top.tsx
    sections/
      hero.tsx                 # Status-panel hero with animated boot sequence
      about.tsx
      tech-stack.tsx           # Categorized skills with proficiency bars
      certifications.tsx
      projects.tsx             # Featured project (expandable) + standard cards
      devops-labs.tsx
      documentation-hub.tsx    # Searchable/filterable doc cards
      architecture-diagrams.tsx # Gallery with zoom modal
      journey.tsx              # Timeline
      github-activity.tsx      # Live GitHub API integration
      contact.tsx
  data/
    profile.ts, skills.ts, certifications.ts, projects.ts, devops.ts
    # All site copy lives here — edit these files to update content
    # without touching component code.
  types/
    index.ts   # Shared TypeScript interfaces for all content models
```

## Things you'll want to plug in

These are intentionally left as placeholders rather than invented, since they're either personal files or require your own accounts:

1. **Resume PDF** — add `public/resume.pdf`. The "Download Resume" button already points at `/resume.pdf`.
2. **Certificate PDFs** — drop files into `public/certificates/` and set `pdfUrl` on each entry in `src/data/certifications.ts`.
3. **Project documentation PDFs** — same pattern via `public/docs/` and the `docUrl` fields in `src/data/projects.ts` and `src/data/devops.ts`.
4. **Architecture diagram images** — the Architecture Diagrams and featured-project sections currently render an icon placeholder where a diagram image would go. Add real exported diagrams (e.g. from draw.io, Excalidraw, or the AWS architecture icon set) to `public/diagrams/` and wire them into `src/components/sections/architecture-diagrams.tsx` and `src/components/sections/projects.tsx`.
5. **Profile photo** — the hero currently leads with the status panel rather than a photo placeholder; add an `<Image>` if you'd like a headshot alongside it.
6. **Contact form backend** — `src/components/sections/contact.tsx` currently simulates a submission. Wire it to a real endpoint (an API route, Formspree, or Resend) to actually deliver messages.
7. **GitHub repo links** — several DevOps Labs and project cards reference repo URLs like `EmperorWhiteBeard/docker-labs`. Update `src/data/devops.ts` and `src/data/projects.ts` once those repos exist, or remove the link if a repo isn't public yet.

## Design notes

- **Palette**: near-black slate surfaces with an AWS-orange accent (`#FF9900`) and a teal status color used for "live/healthy" indicators.
- **Type**: Inter for body/display, JetBrains Mono for labels, data, and the terminal-style boot sequence in the hero (falls back to system fonts if Google Fonts can't be fetched at build time — see `globals.css`).
- **Signature element**: the hero's status panel, styled like a `status.sh` terminal output, sets the tone that this is an engineer's console, not a brochure.
- Dark mode is the default; light mode is available via the toggle in the header and persists across visits.
