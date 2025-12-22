import Image from "next/image";
import Layout from "@/components/Layout";
import { site } from "@/data/siteData";

export default function ResumePage() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Resume</h2>

      <a href={site.resume} target="_blank" rel="noreferrer" className="underline text-sky-600">Download Resume (PDF)</a>

      <div className="mt-6 border rounded overflow-hidden h-[700px]">
        <iframe src={site.resume} className="w-full h-full" title="Resume" />
      </div>

      <section className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Contact & Education</h3>
        <div className="text-slate-600 mb-4 space-y-2">
          <div><strong>Email:</strong> <a className="underline" href={`mailto:${site.email}`}>{site.email}</a></div>
          <div><strong>Phone:</strong> {site.phone}</div>
          <div><strong>Location:</strong> {site.location}</div>
          <div><strong>Education:</strong> {site.education.degree}, {site.education.college} ({site.education.year}) — {site.education.cgpa}</div>
        </div>

        <h4 className="text-lg font-semibold mt-4 mb-2">Links</h4>
        <div className="flex gap-4 items-center text-sky-600">
          <a href={site.github} target="_blank" rel="noreferrer" className="underline">GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
        </div>
      </section>
    </Layout>
  );
}
