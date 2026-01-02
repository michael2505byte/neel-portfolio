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
      <div className="mb-12">
        <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Internship Experience
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl">
          Real-world experience in Machine Learning, Cybersecurity, and AI systems from industry leaders.
        </p>
      </div>

      {internships.length === 0 ? (
        <p className="text-lg text-slate-600">No internships listed yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((internship, i) => (
            <div key={i} className="group card bg-white border-2 border-blue-100 rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 duration-300">
              {internship.image && (
                <button
                  onClick={() => setModalOpen(i)}
                  className="w-full relative h-56 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden cursor-pointer"
                >
                  <Image
                    src={internship.image}
                    alt={`${internship.company} certificate`}
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    priority={i < 3}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <button className="bg-white text-blue-600 font-bold px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                      View Certificate
                    </button>
                  </div>
                </button>
              )}

              <div className="p-6">
                <div className="mb-3">
                  <h2 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                    {internship.company}
                  </h2>
                  <h3 className="text-sm font-black text-blue-600 mt-1 uppercase tracking-wide">
                    {internship.role}
                  </h3>
                </div>
                <p className="text-sm font-semibold text-slate-500 mb-4 flex items-center gap-2">
                  <span className="text-lg">📅</span>
                  {internship.date}
                </p>

                <ul className="space-y-3 mb-6">
                  {internship.points?.map((point, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-slate-700">
                      <span className="text-blue-600 flex-shrink-0 font-black">▸</span>
                      <span className="font-medium">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 pt-4 border-t border-blue-100">
                  {internship.image && (
                    <button
                      onClick={() => setModalOpen(i)}
                      className="flex-1 text-center text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-lg"
                    >
                      View Certificate
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
