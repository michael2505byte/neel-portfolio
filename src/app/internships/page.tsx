"use client";
import { useState } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import { site, Internship } from "@/data/siteData";

export default function InternshipsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const internships: Internship[] = site.internships || [];

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Internships</h2>

      {internships.length === 0 ? (
        <p className="text-slate-600">No internships listed.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {internships.map((it, i) => (
              <article key={i} className="border rounded-md p-4 bg-white shadow-sm">
                <div
                  className="relative w-full h-40 mb-3 cursor-pointer overflow-hidden rounded"
                  onClick={() => setOpenIndex(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter") setOpenIndex(i); }}
                >
                  {it.image ? (
                    <Image
                      src={it.image}
                      alt={`${it.company} certificate`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400">
                      No image
                    </div>
                  )}
                </div>

                <div>
                  <div className="font-semibold">{it.company}</div>
                  <div className="text-sm text-slate-600">{it.role} • <span className="text-slate-500">{it.date}</span></div>

                  <div className="mt-3 text-sm text-slate-700 space-y-1">
                    {it.points?.map((p, idx) => (
                      <div key={idx}>• {p}</div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    {it.website ? (
                      <a
                        href={it.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sky-600 underline text-sm"
                      >
                        Company site
                      </a>
                    ) : null}

                    <button
                      onClick={() => setOpenIndex(i)}
                      className="text-sm px-3 py-1 rounded border"
                    >
                      Preview
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {openIndex !== null && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
              onClick={() => setOpenIndex(null)}
            >
              <div
                className="max-w-4xl w-full bg-white rounded overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-[70vh]">
                  <Image
                    src={internships[openIndex].image || ""}
                    alt={`${internships[openIndex].company} certificate`}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 1024px) 100vw, 80vw"
                  />
                </div>

                <div className="p-4 flex justify-between items-center">
                  <div className="font-medium">{internships[openIndex].company} — {internships[openIndex].role}</div>
                  <div>
                    <button onClick={() => setOpenIndex(null)} className="px-3 py-1 rounded border">Close</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </Layout>
