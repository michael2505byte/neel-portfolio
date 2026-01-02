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
      <div className="mb-12">
        <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Certifications
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl">
          Professional development and specialized training certifications from industry-leading platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {certs.map((cert, i) => (
          <button
            key={i}
            onClick={() => setModalOpen(i)}
            className="group text-left card bg-white border-2 border-blue-100 rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-2 duration-300"
          >
            <div className="relative w-full h-64 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
              <Image
                src={cert.path}
                alt={cert.title}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                priority={i < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-5">
              <p className="font-bold text-slate-900 text-base line-clamp-2 group-hover:text-blue-600 transition-colors">
                {cert.title}
              </p>
              <p className="text-sm text-blue-600 font-bold mt-3 group-hover:translate-x-1 transition-transform">
                View Certificate ↗
              </p>
            </div>
          </button>
        ))}
      </div>

      {certifications.length > 0 && (
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-10">
          <h2 className="text-3xl font-black text-slate-900 mb-8">All Certifications</h2>
          <ul className="space-y-4">
            {certifications.map((cert, i) => (
              <li key={i} className="flex gap-4 text-slate-700 text-lg">
                <span className="text-blue-600 flex-shrink-0 font-black text-2xl">✓</span>
                <span className="font-medium">{cert}</span>
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
