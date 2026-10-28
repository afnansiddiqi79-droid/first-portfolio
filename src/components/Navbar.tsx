"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#070b16]/85 backdrop-blur-xl">
      <nav className="container-width flex h-[72px] items-center justify-between" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight text-white" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-cyan-300"><Code2 size={19} /></span>
          <span>Afnan<span className="text-cyan-300">.</span></span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => <Link key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-cyan-200">{link.label}</Link>)}
          <Link href="/#contact" className="secondary-button !px-4 !py-2 text-sm">Let&apos;s talk</Link>
        </div>
        <button className="rounded-xl border border-white/10 p-2 text-slate-200 md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {open && <div className="container-width flex flex-col gap-1 border-t border-white/10 pb-4 pt-3 md:hidden">
        {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-cyan-200">{link.label}</Link>)}
      </div>}
    </header>
  );
}
