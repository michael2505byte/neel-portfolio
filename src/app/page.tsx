import Layout from "@/components/Layout";
import Link from "next/link";
import { projects } from "@/data/projects";
import { site } from "@/data/siteData";

export default function Home() {
  const featuredProjects = projects.slice(0, 2);
  const skills = site.skills ?? [];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="mb-16">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 leading-tight">
              Hi — I'm {site.name}
            </h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              I build web tools and accessible ML applications. Computer Engineering student at{" "}
              <span className="font-semibold">{site.education.college}</span> passionate about full-stack development, machine learning, and cybersecurity.
            </p>
            <p className="text-slate-600 mb-8">
              Let's connect:{" "}
              <a className="font-semibold text-sky-600 hover:text-sky-700" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={site.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors"
              >
                ↓ Download Resume
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border border-slate-300 text-slate-900 px-5 py-3 rounded-lg font-medium hover:border-slate-400 hover:bg-slate-50 transition-colors"
              >
                View Projects
              </Link>
              <Link
                href="/internships"
                className="inline-flex items-center gap-2 border border-slate-300 text-slate-900 px-5 py-3 rounded-lg font-medium hover:border-slate-400 hover:bg-slate-50 transition-colors"
              >
                Internships
              </Link>
            </div>
          </div>

          {/* Quick Info Card */}
          <aside className="md:sticky md:top-24 p-5 border border-slate-200 rounded-lg bg-white shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-4">Quick Facts</h3>
            <ul className="text-sm text-slate-600 space-y-3">
              <li>
                <span className="font-semibold text-slate-900 block">{site.education.degree}</span>
                <span className="text-slate-500">{site.education.college}</span>
              </li>
              <li>
                <span className="font-semibold text-slate-900 block">CGPA</span>
                <span className="text-slate-500">{site.education.cgpa}</span>
              </li>
              <li>
                <span className="font-semibold text-slate-900 block">Internships</span>
                <span className="text-slate-500">3 (ML, Cybersecurity, AI)</span>
              </li>
              <li>
                <span className="font-semibold text-slate-900 block">Location</span>
                <span className="text-slate-500">{site.location}</span>
              </li>
              <li>
                <span className="font-semibold text-slate-900 block mb-1">Top Skills</span>
                <div className="flex flex-wrap gap-1">
                  {skills.slice(0, 6).map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-slate-200 flex gap-3 text-sm">
              {site.github && (
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-600 hover:text-sky-700 font-medium"
                >
                  GitHub
                </a>
              )}
              {site.linkedin && (
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-600 hover:text-sky-700 font-medium"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">What I Do</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 border border-slate-200 rounded-lg bg-white hover:border-slate-300 transition-colors">
            <h3 className="font-semibold text-slate-900 mb-2">🎨 Full-Stack Development</h3>
            <p className="text-slate-600">
              Build modern web applications with React, Next.js, and TypeScript. Strong focus on performance, accessibility, and UX.
            </p>
          </div>

          <div className="p-5 border border-slate-200 rounded-lg bg-white hover:border-slate-300 transition-colors">
            <h3 className="font-semibold text-slate-900 mb-2">🤖 Machine Learning</h3>
            <p className="text-slate-600">
              End-to-end ML pipelines from data preprocessing to model deployment. Experience with Python, TensorFlow, and real-world applications.
            </p>
          </div>

          <div className="p-5 border border-slate-200 rounded-lg bg-white hover:border-slate-300 transition-colors">
            <h3 className="font-semibold text-slate-900 mb-2">🔒 Cybersecurity</h3>
            <p className="text-slate-600">
              Web security assessment, penetration testing, and vulnerability analysis. Strong understanding of OWASP and best practices.
            </p>
          </div>

          <div className="p-5 border border-slate-200 rounded-lg bg-white hover:border-slate-300 transition-colors">
            <h3 className="font-semibold text-slate-900 mb-2">📱 IoT & Edge Computing</h3>
            <p className="text-slate-600">
              Arduino, ESP8266, and sensor integration. Building distributed systems for real-world monitoring and automation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Featured Projects</h2>
          <Link href="/projects" className="text-sky-600 hover:text-sky-700 font-medium text-sm">
            View all →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((p) => (
            <div key={p.slug} className="p-6 border border-slate-200 rounded-lg bg-white hover:border-slate-300 hover:shadow-md transition-all">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-slate-600 mb-4">{p.short}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
                {p.tech.length > 4 && (
                  <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                    +{p.tech.length - 4}
                  </span>
                )}
              </div>
              {p.repoLink && (
                <a
                  href={p.repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium text-sm"
                >
                  GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="p-8 rounded-lg bg-gradient-to-r from-sky-50 to-slate-50 border border-slate-200 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Let's build something great together</h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
          I'm always open to interesting projects, collaboration, and opportunities to work on impactful problems.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors"
        >
          Send me an email
        </a>
      </section>
    </Layout>
  );
}
