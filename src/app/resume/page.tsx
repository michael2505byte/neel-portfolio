import Layout from "@/components/Layout";
import Link from "next/link";
import { site } from "@/data/siteData";

export default function ResumePage() {
  return (
    <Layout>
      <div className="mb-12">
        <h1 className="text-5xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
          Resume
        </h1>
        <p className="text-xl text-slate-600 font-bold max-w-2xl">
          My comprehensive professional experience, education, and technical expertise.
        </p>
      </div>

      <div className="mb-12 flex flex-wrap gap-4">
        <a
          href={site.resume}
          target="_blank"
          rel="noreferrer"
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-lg"
        >
          ↓ Download PDF
        </a>
        <Link
          href="/contact"
          className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 text-lg"
        >
          Get in Touch
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <section className="mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
              🎓 Education
            </h2>
            <div className="border-l-4 border-blue-600 pl-8 bg-blue-50 p-6 rounded-r-xl">
              <h3 className="text-2xl font-black text-slate-900">{site.education.degree}</h3>
              <p className="text-lg font-bold text-blue-600 mt-2">{site.education.college}</p>
              <p className="text-blue-600 font-black mt-3 text-lg">{site.education.year}</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
              💼 Internship Experience
            </h2>
            <div className="space-y-8">
              {site.internships.map((internship, i) => (
                <div key={i} className="border-l-4 border-indigo-600 pl-8 bg-indigo-50 p-6 rounded-r-xl hover:shadow-lg hover:-translate-x-2 duration-300">
                  <h3 className="text-2xl font-black text-slate-900">{internship.role}</h3>
                  <p className="text-lg font-bold text-indigo-600 mt-2">{internship.company}</p>
                  <p className="text-slate-600 font-bold text-sm mt-2">📅 {internship.date}</p>
                  <ul className="space-y-3 mt-4">
                    {internship.points?.map((point, idx) => (
                      <li key={idx} className="flex gap-3 text-slate-700 font-medium">
                        <span className="text-indigo-600 flex-shrink-0 font-black text-lg">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <section className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-8">
            <h3 className="text-xl font-black text-blue-600 mb-6 uppercase tracking-widest">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="font-black text-slate-900 block mb-1">📧 Email</span>
                <a href={`mailto:${site.email}`} className="text-blue-600 hover:text-blue-700 font-bold break-all">
                  {site.email}
                </a>
              </li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-2 border-indigo-200 rounded-xl p-8">
            <h3 className="text-xl font-black text-indigo-600 mb-4 uppercase tracking-widest">Links</h3>
            <ul className="space-y-3 text-sm">
              {site.github && (
                <li>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 hover:text-indigo-700 font-black text-lg inline-flex gap-2"
                  >
                    → GitHub
                  </a>
                </li>
              )}
              {site.linkedin && (
                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 hover:text-indigo-700 font-black text-lg inline-flex gap-2"
                  >
                    → LinkedIn
                  </a>
                </li>
              )}
            </ul>
          </section>

          <section className="bg-gradient-to-br from-slate-100 to-slate-50 border-2 border-slate-300 rounded-xl p-8">
            <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-widest">Top Skills</h3>
            <div className="flex flex-wrap gap-2">
              {(site.skills || []).slice(0, 12).map((skill) => (
                <span
                  key={skill}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs px-3 py-2 rounded-lg font-black"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </Layout>
  );
}
