import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return <main className="container-width flex min-h-[70vh] flex-col items-start justify-center pt-20"><p className="eyebrow">404 — Not found</p><h1 className="mt-3 text-4xl font-black">This page wandered off.</h1><p className="muted mt-4">The page you are looking for does not exist.</p><Link href="/" className="primary-button mt-7"><ArrowLeft size={16} /> Back home</Link></main>;
}
