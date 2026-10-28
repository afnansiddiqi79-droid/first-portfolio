import Link from "next/link";
import { ArrowRight, Code2, Database, Layers3, Mail, MonitorSmartphone, Sparkles } from "lucide-react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const skills = [
  { title: "Frontend", icon: MonitorSmartphone, items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { title: "Backend & data", icon: Database, items: ["Node.js fundamentals", "Express.js", "REST APIs", "MongoDB fundamentals"] },
  { title: "Tools & workflow", icon: Layers3, items: ["Git", "GitHub", "VS Code", "Vercel", "npm"] },
];

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section id="about" className="section-space border-t border-white/5">
        <div className="container-width grid gap-10 md:grid-cols-[.7fr_1.3fr]">
          <div><p className="eyebrow mb-4">A little about me</p><h2 className="section-title">Curious mind.<br /><span className="gradient-text">Builder&apos;s heart.</span></h2></div>
          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-slate-200">I&apos;m Afnan Siddiqi, an aspiring Full Stack Developer on a journey to understand how great web products are designed and built.</p>
            <p className="muted mt-4 leading-8">I started learning web development by exploring the building blocks of the web, then moved into JavaScript, React, and Next.js. I learn best by making projects, investigating bugs, and understanding why each piece of code works—not just copying a solution.</p>
            <p className="muted mt-4 leading-8">I enjoy creating clean interfaces, connecting applications to APIs, and steadily improving my problem-solving skills.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300"><Code2 size={15} className="text-cyan-200" /> Learn by building</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300"><Sparkles size={15} className="text-cyan-200" /> Keep improving</span>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-space bg-white/[.015]">
        <div className="container-width">
          <div className="mb-10 max-w-2xl"><p className="eyebrow mb-4">What I work with</p><h2 className="section-title">Skills & technologies</h2><p className="muted mt-4 leading-7">A snapshot of the technologies I&apos;ve been learning and using in personal projects. Skill depth grows with practice.</p></div>
          <div className="grid gap-5 md:grid-cols-3">
            {skills.map(({ title, icon: Icon, items }) => <div key={title} className="panel p-6">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200"><Icon size={21} /></div>
              <h3 className="text-lg font-bold">{title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-lg border border-white/10 bg-white/[.025] px-3 py-2 text-sm text-slate-300">{item}</span>)}</div>
            </div>)}
          </div>
        </div>
      </section>

      <section id="projects" className="section-space">
        <div className="container-width">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div><p className="eyebrow mb-4">Selected work</p><h2 className="section-title">Projects I&apos;ve built</h2><p className="muted mt-4 max-w-2xl leading-7">Explore the live projects, source code, technology stack, challenges, and possible next steps.</p></div>
            <a href="https://github.com/afnansiddiqi79-droid" target="_blank" rel="noreferrer" className="secondary-button self-start sm:self-auto">More on GitHub <ArrowRight size={16} /></a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
        </div>
      </section>

      <section id="experience" className="section-space">
        <div className="container-width">
          <div className="panel grid gap-5 p-7 sm:grid-cols-[auto_1fr] sm:items-center sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200"><Code2 size={22} /></div>
            <div><p className="eyebrow mb-2">Experience</p><h2 className="text-2xl font-bold">Personal projects & continuous learning</h2><p className="muted mt-3 max-w-3xl leading-7">I&apos;m currently building my skills through hands-on projects. No professional employment or internship is listed because those details have not been provided.</p></div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-space">
        <div className="container-width">
          <div className="relative overflow-hidden rounded-[28px] border border-cyan-200/15 bg-gradient-to-br from-blue-950/80 via-[#10182a] to-cyan-950/50 p-7 sm:p-12">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="relative max-w-2xl">
              <p className="eyebrow mb-4">Get in touch</p><h2 className="section-title">Have an idea?<br />Let&apos;s talk.</h2>
              <p className="muted mt-5 leading-7">I&apos;m always glad to connect with people who enjoy building and learning. Send me an email and let&apos;s start a conversation.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="mailto:afnansiddiqi79@gmail.com" className="primary-button"><Mail size={17} /> afnansiddiqi79@gmail.com</a>
                <a href="https://www.linkedin.com/in/afnan-siddiqi-68746b418/" target="_blank" rel="noreferrer" className="secondary-button">Connect on LinkedIn <ArrowRight size={16} /></a>
              </div>
              <a id="resume" href="/resume.pdf" download className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-200 underline underline-offset-4 hover:text-white">Download my resume (PDF)</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
