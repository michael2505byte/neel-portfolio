"use client";
import Image from "next/image";
import { useState } from "react";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import { site } from "@/data/siteData";

export default function CertificatesPage() {
  const [modalOpen, setModalOpen] = useState<number | null>(null);
  const certifications = site.certifications || [];

  const certs = [
    { title: "JavaScript & PHP Programming — Udemy", path: "/certificates/js_php_udemy.jpg" },
    { title: "Artificial Intelligence — Udemy", path: "/certificates/ai_udemy.jpg" },
    { title: "Ethical Hacking — Udemy", path: "/certificates/ethical_hacking_udemy.jpg" },
  ];

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3 text-slate-900">Certifications</h1>
        <p className="text-lg text-slate-600">
          Professional development and specialized training certifications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {certs.map((cert, i) => (
          <button
            key={i}
            onClick={() => setModalOpen(i)}
            className="text-left border border-slate-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-56 bg-slate-100 overflow-hidden">
              <Image
                src={cert.path}
                alt={cert.title}
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4">
              <p className="font-medium text-slate-900 text-sm line-clamp-2">{cert.title}</p>
              <p className="text-xs text-sky-600 font-medium mt-2">View Certificate →</p>
            </div>
          </button>
        ))}
      </div>

      {certifications.length > 0 && (
        <section className="bg-slate-50 border border-slate-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">All Certifications</h2>
          <ul className="space-y-3">
            {certifications.map((cert, i) => (
              <li key={i} className="flex gap-3 text-slate-700">
                <span className="text-sky-600 flex-shrink-0 font-bold">✓</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {modalOpen !== null && (
        <Modal
          isOpen={true}
          imageSrc={certs[modalOpen].path}
          title={certs[modalOpen].title}
          onClose={() => setModalOpen(null)}
        />
      )}
    </Layout>
  );
}
