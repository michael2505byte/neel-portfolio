import { site } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="border-t py-6 mt-12 text-center text-slate-500 text-sm">
      © {new Date().getFullYear()} {site.name} — <a href={`mailto:${site.email}`} className="underline">{site.email}</a>
    </footer>
  );
}
