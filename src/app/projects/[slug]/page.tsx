import Layout from "@/components/Layout";
import Link from "next/link";
import { projects } from "@/data/projects";

type Props = { params: { slug: string } };

export default function ProjectDetail({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h2 className="text-3xl font-black text-slate-900 mb-6">😕 Project not found</h2>
          <Link href="/projects" className="text-blue-600 hover:text-blue-700 font-black text-lg hover:underline">
            ← Back to projects
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Link href="/projects" className="text-blue-600 hover:text-blue-700 text-lg font-black mb-8 inline-block hover:underline">
        ← Back to projects
      </Link>

      <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
        {project.title}
      </h1>
      <p className="text-2xl text-slate-600 font-bold mb-12 max-w-4xl leading-relaxed">{project.short}</p>

      <div className="grid md:grid-cols-3 gap-10 mb-12">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-black text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
            📋 Project Overview
          </h2>
          <ul className="space-y-5">
            {project.details.map((detail, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-blue-600 font-black flex-shrink-0 text-2xl">✓</span>
                <span className="text-slate-700 leading-relaxed text-lg font-medium">{detail}</span>
              </li>
            ))}
          </ul>

          {project.repoLink && (
            <div className="mt-12">
              <a
                href={project.repoLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-black hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-lg"
              >
                → View on GitHub
              </a>
            </div>
          )}
        </div>

        <aside className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-8 h-fit">
          <h3 className="text-xl font-black text-blue-600 mb-6 uppercase tracking-widest">Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-black"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t-2 border-blue-200">
            <p className="text-blue-600 font-black text-sm uppercase tracking-widest">💡 Built with precision and passion</p>
          </div>
        </aside>
      </div>
    </Layout>
  );
}
