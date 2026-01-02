import Layout from "@/components/Layout";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="mb-8">
        <Link href="/" className="text-sky-600 hover:text-sky-700 text-sm font-medium">
          ← Back
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-6 text-slate-900">All Projects</h1>
      <p className="text-lg text-slate-600 mb-10">
        A collection of projects spanning full-stack development, machine learning, cybersecurity, and IoT systems.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.slug} className="p-6 border border-slate-200 rounded-lg bg-white hover:border-slate-300 hover:shadow-md transition-all">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">{p.title}</h2>
            <p className="text-slate-600 mb-4">{p.short}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
              {p.tech.length > 3 && (
                <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                  +{p.tech.length - 3}
                </span>
              )}
            </div>

            <div className="flex gap-3">
              <Link
                href={`/projects/${p.slug}`}
                className="text-sky-600 hover:text-sky-700 font-medium text-sm"
              >
                View Details →
              </Link>
              {p.repoLink && (
                <a
                  href={p.repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-600 hover:text-slate-900 font-medium text-sm"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
