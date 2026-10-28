# Afnan Siddiqi — Portfolio

A responsive portfolio starter built with Next.js App Router, TypeScript, Tailwind CSS v4, and Lucide icons.

## Requirements
- Node.js 20.9+ recommended
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Add your photo
Your profile photo is included at `public/images/afnan.png` and is displayed in the homepage hero section.

## Resume
A resume PDF is included at `public/resume.pdf`. The homepage links directly to the downloadable PDF.

## Personal details to fill in
- Update education details in `src/app/page.tsx` when you want to publish them.
- Update hobbies/interests in the About section.
- No phone number is shown because none was supplied.
- No professional experience is claimed.
- Replace any project details/challenges with your own verified experience before publishing.

## Project links currently configured
- BazarDor: https://bazar-dor-web-phi.vercel.app/
- FitLog: https://gym-app-zzpd.vercel.app/
- Hero App: https://hero-app-steel.vercel.app/

## Deploy to Vercel
1. Create a GitHub repository and push this project.
2. Sign in at https://vercel.com and choose **Add New → Project**.
3. Import the GitHub repository.
4. Keep the default Next.js settings and click **Deploy**.
5. Open the generated URL and test navigation, project pages, email link, and mobile layout.

Build locally before deployment:
```bash
npm run build
```

## Routes
- `/` — one-page portfolio with section navigation
- `/projects/bazardor`
- `/projects/fitlog`
- `/projects/hero-app`

Project descriptions and challenge notes are intentionally written as editable starter copy. Review them against your actual work before submitting.


> Note: The Education section is intentionally omitted because it is optional. It can be added later if needed.
