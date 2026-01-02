import { site } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="border-t-2 border-blue-200 py-12 mt-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-slate-700 font-bold mb-3">
          © {new Date().getFullYear()} {site.name}
        </p>
        <a
          href={`mailto:${site.email}`}
          className="text-blue-600 hover:text-blue-700 font-black transition-colors"
        >
          {site.email}
        </a>
        <p className="text-slate-500 font-bold text-sm mt-4">
          Made with 💙 and built with Next.js, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
