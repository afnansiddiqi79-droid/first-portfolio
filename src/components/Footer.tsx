import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-7">
      <div className="container-width flex flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} Afnan Siddiqi. Built with care.</p>
        <Link href="/#home" className="inline-flex items-center gap-1 transition hover:text-cyan-200">Back to top <ArrowUpRight size={14} /></Link>
      </div>
    </footer>
  );
}
