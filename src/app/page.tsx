import Layout from "@/components/Layout";
import Link from "next/link";
import { projects } from "@/data/projects";
import { site } from "@/data/siteData";

export default function Home() {
  const filtered = projects.filter((p) => p.slug !== "animal-welfare-web");
  const sampleProjects = filtered.slice(0, 2);
  const skills = site.skills ?? [];

  return (
    <Layout>
      <section className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-3 text-slate-900">Hi — I’m {site.name}. I build web tools and accessible ML apps.</h2>
          <p className="text-slate-700 mb-6">
            {site.title} at {site.education.college}. I work on projects spanning full-stack, mobile, IoT and ML. Contact:{" "}
            <a className="underline text-sky-600" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>

          <h3 className="text-xl font-semibold mb-3 text-slate-900">Highlights</h3>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="p-4 border rounded-md bg-white">
              <h4 className="font-semibold text-slate-900">Accessible apps</h4>
              <p className="text-slate-600">Built the See For Me app focused on simple UX, OCR and multilingual TTS for visually impaired users.</p>
            </div>

            <div className="p-4 border rounded-md bg-white">
              <h4 className="font-semibold text-slate-900">IoT & Edge</h4>
              <p className="text-slate-600">Prototype IoT system for early forest-fire detection with ESP8266 and sensor fusion.</p>
            </div>

            <div className="p-4 border rounded-md bg-white">
              <h4 className="font-semibold text-slate-900">Full-stack platforms</h4>
              <p className="text-slate-600">Developed a full-stack Animal Welfare platform with pincode-based search and NGO workflows.</p>
            </div>

            <div className="p-4 border rounded-md bg-white">
              <h4 className="font-semibold text-slate-900">Security & ML internships</h4>
              <p className="text-slate-600">Internship experience in Cybersecurity and ML — strong blend of practical dev and research.</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/projects" className="inline-block bg-slate-900 text-white px-4 py-2 rounded">
              See all projects
            </Link>

            <a href={site.resume} className="inline-block border px-4 py-2 rounded" target="_blank" rel="noreferrer">
              Download resume
            </a>

            <Link href="/internships" className="inline-block ml-2 px-4 py-2 rounded border text-sky-600">
              View internships
            </Link>

            <Link href="/certificates" className="inline-block ml-2 px-4 py-2 rounded border text-sky-600">
              View certificates
            </Link>
          </div>
        </div>

        <aside className="p-4 border rounded-md bg-white">
          <h4 className="font-semibold text-slate-900">Quick facts</h4>
          <ul className="text-slate-600 mt-2 space-y-1">
            <li>
              <strong>Education:</strong> {site.education.degree} — {site.education.college}
            </li>
            <li>
              <strong>Internships:</strong> Cladroid Technologies; Labmentix Pvt. Ltd.
            </li>
            <li>
              <strong>Skills:</strong> {skills.slice(0, 6).join(", ")}…
            </li>
            <li>
              <strong>Location:</strong> {site.location}
            </li>
          </ul>

          <div className="mt-4">
            {site.github ? (
              <a href={site.github} target="_blank" rel="noreferrer" className="text-sky-600 underline">
                GitHub
              </a>
            ) : null}
            <span className="mx-2 text-slate-400">·</span>
            {site.linkedin ? (
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="text-sky-600 underline">
                LinkedIn
              </a>
            ) : null}
          </div>
        </aside>
      </section>

      <section className="mt-10">
        <h3 className="text-xl font-semibold mb-4 text-slate-900">Selected work</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {sampleProjects.map((p) => (
            <div key={p.slug} className="p-4 border rounded-md bg-white">
              <h4 className="font-semibold text-slate-900">{p.title}</h4>
              <p className="text-slate-600">{p.short}</p>

              {p.repoLink ? (
                <div className="mt-3">
                  <a href={p.repoLink} target="_blank" rel="noreferrer" className="text-sm inline-block bg-slate-800 text-white px-3 py-1 rounded">
                    View GitHub
                  </a>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
