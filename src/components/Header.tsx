import Link from "next/link";
import { site } from "@/data/siteData";

export default function Header() {
  return (
    <header className="border-b bg-white/90 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">{site.name}</h1>
          <p className="text-sm text-slate-500">{site.title}</p>
        </div>

        <nav className="space-x-4 text-sm">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <Link href="/projects" className="hover:text-sky-600">Projects</Link>
          <Link href="/internships" className="hover:text-sky-600">Internships</Link>
          <Link href="/certificates" className="hover:text-sky-600">Certificates</Link>
          <Link href="/resume" className="hover:text-sky-600">Resume</Link>
          <Link href="/contact" className="hover:text-sky-600">Contact</Link>
        </nav>
      </div>
    </header>
