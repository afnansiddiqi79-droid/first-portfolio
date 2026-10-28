import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight, Download, Github, Linkedin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[730px] items-center overflow-hidden pt-28 pb-16">
      <div className="pointer-events-none absolute inset-0 grid-glow opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      <div className="container-width relative grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-sm text-cyan-100">
            <Sparkles size={15} className="text-cyan-300" /> Open to learning and building
          </div>
          <p className="eyebrow mb-4">Hello, I&apos;m</p>
          <h1 className="text-5xl font-black leading-[1.02] tracking-[-.06em] sm:text-6xl lg:text-7xl">
            Afnan<br /><span className="gradient-text">Siddiqi.</span>
          </h1>
          <h2 className="mt-6 text-xl font-semibold text-slate-200 sm:text-2xl">Aspiring Full Stack Developer</h2>
          <p className="muted mt-5 max-w-xl text-base leading-8 sm:text-lg">
            I&apos;m learning to build thoughtful, responsive web experiences with modern JavaScript technologies. I enjoy turning ideas into useful interfaces and growing my skills by building real projects.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#projects" className="primary-button">Explore my work <ArrowRight size={17} /></Link>
            <a href="/resume.pdf" download className="secondary-button"><Download size={17} /> Download Resume</a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <a aria-label="GitHub profile" href="https://github.com/afnansiddiqi79-droid" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"><Github size={19} /></a>
            <a aria-label="LinkedIn profile" href="https://www.linkedin.com/in/afnan-siddiqi-68746b418/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"><Linkedin size={19} /></a>
            <a href="mailto:afnansiddiqi79@gmail.com" className="ml-2 text-sm text-slate-400 transition hover:text-cyan-200">afnansiddiqi79@gmail.com</a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[410px]">
          <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-violet-500/20 blur-2xl" />
          <div className="panel relative p-4">
            <div className="flex items-center gap-2 border-b border-white/10 px-2 pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
              <span className="ml-auto font-mono text-xs text-slate-500">developer.tsx</span>
            </div>
            <div className="relative mt-4 flex aspect-[4/4.5] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-950">
              <div className="absolute inset-0 grid-glow opacity-60" />
              <div className="relative h-52 w-52 overflow-hidden rounded-full border border-cyan-200/30 shadow-[0_0_80px_rgba(34,211,238,0.12)] sm:h-60 sm:w-60">
                <Image src="/images/afnan.png" alt="Afnan Siddiqi profile photo" fill priority sizes="(max-width: 640px) 208px, 240px" className="object-cover" />
              </div>
              <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-slate-950/75 px-4 py-3 backdrop-blur">
                <p className="text-xs text-slate-400">Currently focused on</p><p className="mt-1 text-sm font-semibold text-white">Web development</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 px-2 pb-1 pt-4 text-xs text-slate-400">
              <span>JavaScript · React · Next.js</span><span className="text-cyan-200">Building & learning</span>
            </div>
          </div>
          <div className="absolute -right-4 top-20 hidden rounded-2xl border border-white/10 bg-[#10182a] px-4 py-3 shadow-xl sm:block">
            <p className="font-mono text-xs text-cyan-200">{"<HelloWorld />"}</p><p className="mt-1 text-xs text-slate-400">One project at a time</p>
          </div>
        </div>
      </div>
      <a href="#about" aria-label="Scroll to about section" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 animate-bounce text-slate-500 md:block"><ArrowDown size={20} /></a>
    </section>
  );
}
