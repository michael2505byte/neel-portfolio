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
      <section className="mb-20 pt-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full">
                <p className="text-sm font-bold text-blue-600">👋 Welcome to my portfolio</p>
              </div>
              <h1 className="text-6xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent leading-tight">
                I'm {site.name}
              </h1>
              <p className="text-2xl font-bold text-slate-700">
                Computer Science Engineer | ML & Security Enthusiast
              </p>
            </div>

            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              Building high-impact solutions in machine learning, cybersecurity, and full-stack development. Currently studying at{" "}
              <span className="font-bold text-blue-600">{site.education.college}</span>.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={site.resume}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-lg"
              >
                ↓ Download Resume
              </a>
              <Link
                href="/projects"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 text-lg"
              >
                View My Work
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="px-8 py-4 border-2 border-slate-300 text-slate-900 font-bold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-lg"
              >
                Let's Talk
              </a>
            </div>

            <div className="flex gap-6 pt-4">
              {site.github && (
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-bold text-lg hover:underline transition-all"
                >
                  GitHub →
                </a>
              )}
              {site.linkedin && (
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-bold text-lg hover:underline transition-all"
                >
                  LinkedIn →
                </a>
              )}
            </div>
          </div>

          {/* Quick Stats Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-10 shadow-xl">
            <div className="space-y-8">
              <div className="border-b border-blue-200 pb-8">
                <p className="text-sm font-black text-blue-600 uppercase tracking-widest mb-3">Education</p>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{site.education.degree}</h3>
                <p className="text-slate-700 font-bold">{site.education.college}</p>
                <p className="text-sm text-blue-600 font-bold mt-2">{site.education.cgpa}</p>
              </div>

              <div className="border-b border-blue-200 pb-8">
                <p className="text-sm font-black text-blue-600 uppercase tracking-widest mb-3">Experience</p>
                <p className="text-3xl font-black text-slate-900">3 Internships</p>
                <p className="text-slate-600 font-bold mt-2">ML, Cybersecurity, AI</p>
              </div>

              <div>
                <p className="text-sm font-black text-blue-600 uppercase tracking-widest mb-3">Top Skills</p>
                <div className="flex flex-wrap gap-2">
                  {skills.slice(0, 6).map((skill) => (
                    <span
                      key={skill}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-3 py-2 rounded-lg text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-black text-slate-900 mb-12">What I Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card bg-white border-2 border-blue-100 rounded-xl p-8 hover:shadow-2xl hover:-translate-y-2 duration-300">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-black text-slate-900 mb-3">Full-Stack Dev</h3>
            <p className="text-slate-600 font-medium">
              React, Next.js, TypeScript. Building modern, performant web applications.
            </p>
          </div>

          <div className="card bg-white border-2 border-indigo-100 rounded-xl p-8 hover:shadow-2xl hover:-translate-y-2 duration-300">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-black text-slate-900 mb-3">Machine Learning</h3>
            <p className="text-slate-600 font-medium">
              Python, TensorFlow. End-to-end ML pipelines and real-world applications.
            </p>
          </div>

          <div className="card bg-white border-2 border-blue-100 rounded-xl p-8 hover:shadow-2xl hover:-translate-y-2 duration-300">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-black text-slate-900 mb-3">Cybersecurity</h3>
            <p className="text-slate-600 font-medium">
              Web security, penetration testing, OWASP best practices.
            </p>
          </div>

          <div className="card bg-white border-2 border-indigo-100 rounded-xl p-8 hover:shadow-2xl hover:-translate-y-2 duration-300">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-black text-slate-900 mb-3">IoT & Hardware</h3>
            <p className="text-slate-600 font-medium">
              Arduino, ESP8266. Building connected systems and edge computing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-black text-slate-900">Featured Work</h2>
            <p className="text-slate-600 font-bold mt-2">Projects that showcase my skills and passion</p>
          </div>
          <Link href="/projects" className="text-blue-600 hover:text-blue-700 font-bold text-lg">
            View all →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((p) => (
            <div
              key={p.slug}
              className="card bg-white border-2 border-blue-100 rounded-xl p-8 hover:shadow-2xl hover:-translate-y-2 duration-300"
            >
              <h3 className="text-2xl font-black text-slate-900 mb-4">{p.title}</h3>
              <p className="text-slate-600 font-bold mb-6 leading-relaxed">{p.short}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-lg text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Link
                  href={`/projects/${p.slug}`}
                  className="font-bold text-blue-600 hover:text-blue-700 transition-colors text-lg"
                >
                  Learn more →
                </Link>
                {p.repoLink && (
                  <a
                    href={p.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-slate-600 hover:text-slate-900 transition-colors text-lg"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Internship & Cert Quick Links */}
      <section className="mb-20">
        <h2 className="text-4xl font-black text-slate-900 mb-12">Credentials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/internships">
            <div className="card bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl p-10 hover:shadow-2xl hover:-translate-y-2 duration-300 cursor-pointer h-full">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">Internships</h3>
              <p className="text-slate-700 font-bold mb-4">3 internships in ML, Security & AI</p>
              <p className="text-blue-600 font-black text-lg">View experience →</p>
            </div>
          </Link>

          <Link href="/certificates">
            <div className="card bg-gradient-to-br from-indigo-50 to-indigo-100 border-2 border-indigo-300 rounded-2xl p-10 hover:shadow-2xl hover:-translate-y-2 duration-300 cursor-pointer h-full">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">Certifications</h3>
              <p className="text-slate-700 font-bold mb-4">Professional development certifications</p>
              <p className="text-indigo-600 font-black text-lg">View certificates →</p>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-16 text-center mb-20">
        <h2 className="text-4xl font-black text-white mb-4">Ready to work together?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-bold">
          I'm always open to interesting projects, collaboration, and opportunities to create something amazing.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={`mailto:${site.email}`}
            className="px-8 py-4 bg-white text-blue-600 font-black rounded-xl hover:bg-blue-50 transition-all duration-300 hover:shadow-xl text-lg"
          >
            Send me an email
          </a>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-white text-white font-black rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg"
          >
            Contact form
          </Link>
        </div>
      </section>
    </Layout>
  );
}
