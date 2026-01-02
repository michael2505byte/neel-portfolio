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
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Project not found</h2>
          <Link href="/projects" className="text-sky-600 hover:text-sky-700 font-medium">
            ← Back to projects
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Link href="/projects" className="text-sky-600 hover:text-sky-700 text-sm font-medium mb-6 inline-block">
        ← Back to projects
      </Link>

      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">{project.title}</h1>
      <p className="text-xl text-slate-600 mb-8 max-w-3xl">{project.short}</p>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">Project Overview</h2>
          <ul className="space-y-4">
            {project.details.map((detail, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-sky-600 font-bold flex-shrink-0">•</span>
                <span className="text-slate-700 leading-relaxed">{detail}</span>
              </li>
            ))}
          </ul>

          {project.repoLink && (
            <div className="mt-8">
              <a
                href={project.repoLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors"
              >
                View on GitHub →
              </a>
            </div>
          )}
        </div>

        <aside className="p-6 border border-slate-200 rounded-lg bg-slate-50 h-fit">
          <h3 className="font-bold text-slate-900 mb-4">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="bg-sky-100 text-sky-900 px-3 py-1 rounded-lg text-sm font-medium"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <Link href={`/projects/${project.slug}#top`} className="text-slate-500 text-sm">
              Share this project
            </Link>
          </div>
        </aside>
      </div>
    </Layout>
  );
}
