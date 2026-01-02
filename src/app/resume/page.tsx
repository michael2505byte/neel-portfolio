import Layout from "@/components/Layout";
import Link from "next/link";
import { site } from "@/data/siteData";

export default function ResumePage() {
  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3 text-slate-900">Resume</h1>
        <p className="text-lg text-slate-600">
          Download my full resume or view it below.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-4">
        <a
          href={site.resume}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors"
        >
          ↓ Download PDF
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 border border-slate-300 text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors"
        >
          Get in Touch
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Education</h2>
            <div className="border-l-2 border-sky-600 pl-6">
              <h3 className="text-xl font-semibold text-slate-900">{site.education.degree}</h3>
              <p className="text-slate-600">{site.education.college}</p>
              <p className="text-sm text-slate-500 mt-1">{site.education.year}</p>
              <p className="text-sm font-medium text-slate-600 mt-2">{site.education.cgpa}</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Internship Experience</h2>
            <div className="space-y-8">
              {site.internships.map((internship, i) => (
                <div key={i} className="border-l-2 border-sky-600 pl-6">
                  <h3 className="text-xl font-semibold text-slate-900">{internship.role}</h3>
                  <p className="text-slate-600">{internship.company}</p>
                  <p className="text-sm text-slate-500 mb-3">{internship.date}</p>
                  <ul className="space-y-2">
                    {internship.points?.map((point, idx) => (
                      <li key={idx} className="flex gap-3 text-slate-700">
                        <span className="text-sky-600 flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <span className="font-medium text-slate-900 block">Email</span>
                <a href={`mailto:${site.email}`} className="text-sky-600 hover:text-sky-700">
                  {site.email}
                </a>
              </li>
              <li>
                <span className="font-medium text-slate-900 block">Phone</span>
                <a href={`tel:${site.phone}`} className="text-sky-600 hover:text-sky-700">
                  {site.phone}
                </a>
              </li>
              <li>
                <span className="font-medium text-slate-900 block">Location</span>
                <p>{site.location}</p>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              {site.github && (
                <li>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-600 hover:text-sky-700 font-medium"
                  >
                    GitHub →
                  </a>
                </li>
              )}
              {site.linkedin && (
                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-600 hover:text-sky-700 font-medium"
                  >
                    LinkedIn →
                  </a>
                </li>
              )}
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {(site.skills || []).slice(0, 10).map((skill) => (
                <span
                  key={skill}
                  className="bg-sky-100 text-sky-900 text-xs px-3 py-1 rounded-lg font-medium"
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
