import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="panel group overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan-200/25">
      <Link href={`/projects/${project.slug}`} aria-label={`View details for ${project.name}`} className={`project-art flex items-end bg-gradient-to-br ${project.accent} p-6`}>
        <div className="relative z-10">
          <span className="rounded-full border border-white/15 bg-slate-950/45 px-3 py-1 text-xs text-cyan-100">PROJECT 0{index + 1}</span>
          <p className="mt-3 text-2xl font-extrabold tracking-tight text-white">{project.name}</p>
        </div>
        <ArrowUpRight className="absolute right-5 top-5 z-10 text-cyan-100 transition group-hover:-translate-y-1 group-hover:translate-x-1" size={23} />
      </Link>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[.12em] text-cyan-200">{project.category}</p>
        <p className="muted mt-3 min-h-[52px] text-sm leading-6">{project.short}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => <span key={tech} className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1 text-xs text-slate-300">{tech}</span>)}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
          <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-cyan-200">View details <ArrowUpRight size={16} /></Link>
          <div className="flex gap-3">
            <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.name} live website`} className="text-slate-400 hover:text-cyan-200"><ExternalLink size={17} /></a>
            <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub repository`} className="text-slate-400 hover:text-cyan-200"><Github size={17} /></a>
          </div>
        </div>
      </div>
    </article>
  );
}
