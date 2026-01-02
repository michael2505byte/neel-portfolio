import Link from "next/link";
import { site } from "@/data/siteData";

export default function Header() {
  return (
    <header className="border-b-2 border-blue-200 bg-white/95 backdrop-blur-sm sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {site.name}
          </h1>
          <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mt-1">{site.title}</p>
        </div>
        <nav className="flex items-center gap-8 text-sm font-bold">
          <Link href="/" className="text-slate-700 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/projects" className="text-slate-700 hover:text-blue-600 transition-colors">
            Projects
          </Link>
          <Link href="/internships" className="text-slate-700 hover:text-blue-600 transition-colors">
            Internships
          </Link>
          <Link href="/certificates" className="text-slate-700 hover:text-blue-600 transition-colors">
            Certificates
          </Link>
          <Link href="/resume" className="text-slate-700 hover:text-blue-600 transition-colors">
            Resume
          </Link>
          <Link href="/contact" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
