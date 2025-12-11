import Layout from "@/components/Layout";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.slug} className="p-4 border rounded">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-slate-600 mb-2">{p.short}</p>
            <div className="text-sm text-slate-500 mb-2">Tech: {p.tech.join(", ")}</div>
            <div className="mt-3 flex gap-3">
              {p.repoLink ? (
                <a href={p.repoLink} target="_blank" rel="noreferrer" className="text-sm bg-slate-800 text-white px-3 py-1 rounded">GitHub</a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
