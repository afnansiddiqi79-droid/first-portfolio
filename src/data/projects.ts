export type Project = {
  slug: string;
  name: string;
  short: string;
  description: string;
  stack: string[];
  live: string;
  github: string;
  category: string;
  accent: string;
  challenges: string[];
  improvements: string[];
};

export const projects: Project[] = [
  {
    slug: "bazardor",
    name: "BazarDor",
    short: "Daily grocery market prices for Bangladesh, in one glance.",
    description:
      "BazarDor (বাজার দর) is a Bangla web app that tracks daily market prices for 33 essential grocery items — rice, lentils, cooking oil, vegetables, fish, meat, eggs, milk, and spices. Every product page shows today's price alongside yesterday's comparison, and the homepage highlights which items went up and which went down. Prices are broken down by market, with minimum, maximum, and average values so shoppers can see the full picture before they buy.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST API", "Better Auth"],
    live: "https://bazar-dor-web-phi.vercel.app/",
    github: "https://github.com/afnansiddiqi79-droid/Bazar_Dor_web",
    category: "Full-stack learning project",
    accent: "from-emerald-400/20 to-cyan-400/5",
    challenges: [
      "Designing a product schema that captures price, unit (kg/litre/dozen/piece), and the previous price for daily comparisons.",
      "Fetching prices from API endpoints and rendering market-based variations with min, max, and average values.",
      "Building dynamic product routes with the Next.js App Router and keeping navigation simple in a Bangla-first interface.",
      "Configuring Better Auth and preparing the app for Vercel deployment."
    ],
    improvements: [
      "Add price history charts so users can follow trends across days and weeks.",
      "Introduce price-drop alerts for favourite products.",
      "Improve loading and error states when the price API is slow or unavailable.",
      "Add search and category filters as the product list grows."
    ]
  },
  {
    slug: "fitlog",
    name: "FitLog",
    short: "A workout library and daily training plan builder.",
    description:
      "FitLog is a fitness web app that helps users train with intent. It ships with a workout library of 12 exercises — from barbell bench press to kettlebell swings — each with difficulty ratings, equipment requirements, duration, calories, and recommended sets and reps. Users can browse by muscle group (chest, back, legs, arms, core), open detailed exercise pages, and build their own plan on the My Plan page, where saved workouts persist in localStorage.",
    stack: ["React", "JavaScript", "Tailwind CSS", "localStorage"],
    live: "https://gym-app-zzpd.vercel.app/",
    github: "https://github.com/afnansiddiqi79-droid/gym-app",
    category: "Frontend project",
    accent: "from-violet-400/20 to-blue-400/5",
    challenges: [
      "Structuring the exercise library, detail pages, and plan builder as reusable React components.",
      "Persisting the user's saved plan with localStorage and keeping the UI in sync with saved state.",
      "Presenting dense exercise data (ratings, time, calories, difficulty) in a card layout that stays readable on small screens."
    ],
    improvements: [
      "Add progression tracking so users can log weights and reps over time.",
      "Introduce muscle-group filtering and light workout routines for beginners.",
      "Improve accessibility of the plan interactions with proper keyboard support."
    ]
  },
  {
    slug: "hero-app",
    name: "Hero App",
    short: "An app discovery platform with install and uninstall tracking.",
    description:
      "Hero App is an app discovery web application built with Next.js. Users browse a catalogue of trending apps with ratings and download counts, open detail pages, and install or uninstall them with a single click. Installation state is managed globally with React Context, duplicate installs are prevented, and every action is confirmed with toast notifications. The interface is fully responsive and built from a JSON data source that drives the whole catalogue.",
    stack: ["Next.js", "React", "Context API", "Tailwind CSS", "DaisyUI", "React Toastify"],
    live: "https://hero-app-steel.vercel.app/",
    github: "https://github.com/afnansiddiqi79-droid/hero-app",
    category: "React project",
    accent: "from-sky-400/20 to-indigo-400/5",
    challenges: [
      "Managing global installation state with React Context and the useContext hook across multiple routes.",
      "Preventing duplicate installs by checking the installed list before adding, using array methods like some and filter.",
      "Rendering dynamic app detail pages from JSON data and keeping server and client components organised in the Next.js App Router."
    ],
    improvements: [
      "Add app categories and a search box to make the catalogue easier to browse.",
      "Replace JSON data with a real API or database as the catalogue grows.",
      "Add sort options for rating and download count on the trending list."
    ]
  }
];
