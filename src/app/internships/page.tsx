"use client";
import { useState } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import { site } from "@/data/siteData";

export default function InternshipsPage() {
  const [modalOpen, setModalOpen] = useState<number | null>(null);
  const internships = site.internships || [];

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3 text-slate-900">Internships</h1>
        <p className="text-lg text-slate-600">
          Real-world experience in Machine Learning, Cybersecurity, and AI systems.
        </p>
      </div>

      {internships.length === 0 ? (
        <p className="text-slate-600">No internships listed yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internships.map((internship, i) => (
            <div key={i} className="border border-slate-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow">
              {internship.image && (
                <button
                  onClick={() => setModalOpen(i)}
                  className="w-full relative h-48 bg-slate-100 overflow-hidden hover:opacity-90 transition-opacity"
                >
                  <Image
                    src={internship.image}
                    alt={`${internship.company} certificate`}
                    fill
                    className="object-cover"
                  />
                </button>
              )}

              <div className="p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-2">{internship.company}</h2>
                <h3 className="text-sm font-semibold text-sky-600 mb-1">{internship.role}</h3>
                <p className="text-sm text-slate-500 mb-4">{internship.date}</p>

                <ul className="space-y-2 mb-6">
                  {internship.points?.map((point, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-slate-700">
                      <span className="text-sky-600 flex-shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 pt-4 border-t border-slate-200">
                  {internship.website && (
                    <a
                      href={internship.website}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center text-sm font-medium text-sky-600 hover:text-sky-700"
                    >
                      Company Site →
                    </a>
                  )}
                  {internship.image && (
                    <button
                      onClick={() => setModalOpen(i)}
                      className="flex-1 text-center text-sm font-medium text-slate-600 hover:text-slate-900"
                    >
                      Preview
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {modalOpen !== null && internships[modalOpen]?.image && (
        <Modal
          isOpen={true}
          imageSrc={internships[modalOpen].image}
          title={`${internships[modalOpen].company} - ${internships[modalOpen].role}`}
          onClose={() => setModalOpen(null)}
        />
      )}
    </Layout>
  );
}
