# AGENTS.md

## Commands
- Dev server: `npm run dev` (http://localhost:3000)
- Build: `npm run build` — Next.js build also type-checks; there is no separate typecheck script
- Lint: `npm run lint` (ESLint 9 flat config, `eslint-config-next`)
- No test framework exists — verification is `npm run build` + manual page checks

## Structure
- Static portfolio site, Next.js 15 App Router + React 19 + Tailwind CSS **v4** (CSS-first config: `src/app/globals.css` starts with `@import "tailwindcss"` — there is no `tailwind.config.js`; custom utility classes like `container-width`, `section-title`, `gradient-text` are defined in `globals.css`)
- All content/projects live in `src/data/projects.ts` (`Project[]`); homepage (`src/app/page.tsx`) and project pages render from this single source
- Project detail pages: `src/app/projects/[slug]/page.tsx` uses `generateStaticParams` from `projects.ts` — adding a project to the data file automatically creates its route
- Path alias `@/*` → `src/*`

## Gotchas
- Content source of truth is `src/data/projects.ts`; project detail routes are auto-generated from its `slug` values (`/projects/bazardor`, `/projects/fitlog`, `/projects/hero-app`) — don't create route files by hand
- Node.js 20.9+ required; package manager is npm (package-lock committed)
