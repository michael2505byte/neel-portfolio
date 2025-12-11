import Layout from "@/components/Layout";
import { projects } from "@/data/projects";

type Props = { params: { slug: string } };

export default function ProjectDetail({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return (
      <Layout>
        <p>Project not found.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
      <div className="text-slate-600 mb-4">{project.short}</div>
      <div className="mb-4"><strong>Technologies:</strong> {project.tech.join(", ")}</div>

      <ul className="list-disc pl-6 space-y-2">
        {project.details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>

      {project.repoLink && (
        <div className="mt-6">
          <a className="inline-block bg-slate-800 text-white px-3 py-1 rounded" href={project.repoLink} target="_blank" rel="noreferrer">View source on GitHub</a>
        </div>
      )}

      <div className="mt-6">
        <a className="underline" href="/resume.pdf" target="_blank" rel="noreferrer">Download my resume</a>
      </div>
    </Layout>
  );
}
