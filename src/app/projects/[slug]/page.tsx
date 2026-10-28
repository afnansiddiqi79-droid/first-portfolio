import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ExternalLink, Github, Lightbulb, Wrench } from "lucide-react";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project ? `${project.name} | Afnan Siddiqi` : "Project not found" };
}

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen pb-20 pt-32">
      <div className="container-width">
        <Link href="/#projects" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-200"><ArrowLeft size={16} /> Back to all projects</Link>
        <div className={`project-art rounded-[28px] border border-white/10 bg-gradient-to-br ${project.accent} p-7 sm:p-12`}>
          <div className="relative z-10 max-w-3xl py-8 sm:py-12">
            <span className="rounded-full border border-white/15 bg-slate-950/45 px-3 py-1.5 text-xs font-semibold uppercase tracking-[.14em] text-cyan-100">{project.category}</span>
            <h1 className="mt-6 text-4xl font-black tracking-[-.05em] sm:text-6xl">{project.name}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">{project.short}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={project.live} target="_blank" rel="noreferrer" className="primary-button">Live project <ExternalLink size={16} /></a>
              <a href={project.github} target="_blank" rel="noreferrer" className="secondary-button"><Github size={16} /> Source code <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.25fr_.75fr]">
          <div className="space-y-8">
            <section className="panel p-6 sm:p-8">
              <p className="eyebrow mb-3">Overview</p><h2 className="text-2xl font-bold">About the project</h2><p className="muted mt-4 leading-8">{project.description}</p>
            </section>
            <section className="panel p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-300/10 text-amber-200"><Wrench size={20} /></div><div><p className="eyebrow">Development process</p><h2 className="mt-1 text-2xl font-bold">Challenges faced</h2></div></div>
              <p className="muted mb-5 text-sm leading-6">The real problems I ran into while building, and how I worked through them.</p>
              <ul className="space-y-4">{project.challenges.map((challenge) => <li key={challenge} className="flex gap-3 text-sm leading-7 text-slate-300"><CheckCircle2 size={18} className="mt-1 shrink-0 text-cyan-200" />{challenge}</li>)}</ul>
            </section>
            <section className="panel p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-300/10 text-violet-200"><Lightbulb size={20} /></div><div><p className="eyebrow">What&apos;s next</p><h2 className="mt-1 text-2xl font-bold">Future improvements</h2></div></div>
              <ul className="space-y-4">{project.improvements.map((improvement) => <li key={improvement} className="flex gap-3 text-sm leading-7 text-slate-300"><ArrowUpRight size={18} className="mt-1 shrink-0 text-cyan-200" />{improvement}</li>)}</ul>
            </section>
          </div>
          <aside className="space-y-6">
            <section className="panel p-6">
              <p className="eyebrow mb-4">Technology stack</p><h2 className="text-xl font-bold">Built with</h2>
              <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="rounded-lg border border-white/10 bg-white/[.03] px-3 py-2 text-sm text-slate-300">{tech}</span>)}</div>
            </section>
            <section className="panel p-6">
              <p className="eyebrow mb-4">Project links</p>
              <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center justify-between border-b border-white/10 py-4 text-sm text-slate-200 transition hover:text-cyan-200">Live website <ExternalLink size={16} /></a>
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-between py-4 text-sm text-slate-200 transition hover:text-cyan-200">GitHub repository <Github size={16} /></a>
            </section>
            <div className="rounded-2xl border border-cyan-200/15 bg-cyan-300/[.04] p-5"><p className="text-sm font-semibold text-cyan-100">Want the details?</p><p className="muted mt-2 text-sm leading-6">Try the live version, or read the source code on GitHub to see exactly how each feature is built.</p></div>
          </aside>
        </div>
        <div className="mt-10"><Link href="/#projects" className="secondary-button"><ArrowLeft size={16} /> Return to portfolio</Link></div>
      </div>
    </main>
  );
}
