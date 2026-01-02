import Layout from "@/components/Layout";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="mb-12">
        <Link href="/" className="text-blue-600 hover:text-blue-700 text-lg font-black mb-6 inline-block hover:underline">
          ← Back Home
        </Link>

        <h1 className="text-5xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          All Projects
        </h1>
        <p className="text-xl text-slate-600 font-bold max-w-3xl">
          A collection of projects spanning full-stack development, machine learning, cybersecurity, and IoT systems. Each project represents my passion for building impactful solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div key={p.slug} className="card bg-white border-2 border-blue-100 rounded-xl p-8 hover:shadow-2xl hover:-translate-y-2 duration-300">
            <h2 className="text-2xl font-black text-slate-900 mb-4">{p.title}</h2>
            <p className="text-slate-600 font-bold mb-6 leading-relaxed">{p.short}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {p.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="bg-blue-100 text-blue-700 font-black px-3 py-1 rounded-lg text-sm"
                >
                  {t}
                </span>
              ))}
              {p.tech.length > 4 && (
                <span className="bg-blue-100 text-blue-700 font-black px-3 py-1 rounded-lg text-sm">
                  +{p.tech.length - 4}
                </span>
              )}
            </div>

            <div className="flex gap-4">
              <Link
                href={`/projects/${p.slug}`}
                className="text-blue-600 hover:text-blue-700 font-black text-lg hover:underline transition-colors"
              >
                Learn more →
              </Link>
              {p.repoLink && (
                <a
                  href={p.repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-700 hover:text-slate-900 font-black text-lg hover:underline transition-colors"
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
