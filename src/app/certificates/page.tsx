"use client";
import Image from "next/image";
import { useState } from "react";
import Layout from "@/components/Layout";

const CERTS = [
  { title: "JavaScript & PHP Programming — Udemy", path: "/certificates/js_php_udemy.jpg" },
  { title: "Artificial Intelligence — Udemy", path: "/certificates/ai_udemy.jpg" },
  { title: "Ethical Hacking — Udemy", path: "/certificates/ethical_hacking_udemy.jpg" }
];

export default function CertificatesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Certificates</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CERTS.map((c, i) => (
          <div key={i} className="border rounded-md p-3 shadow-sm bg-white">
            <div className="relative w-full h-48 cursor-pointer" onClick={() => setOpenIndex(i)}>
              <Image src={c.path} alt={c.title} fill style={{ objectFit: "cover", borderRadius: 8 }} />
            </div>
            <p className="text-sm font-medium text-center mt-2">{c.title}</p>
            <div className="mt-3 text-center">
              <button onClick={() => setOpenIndex(i)} className="text-sky-600 underline text-sm">Preview</button>
            </div>
          </div>
        ))}
      </div>

      {openIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="max-w-3xl w-full p-4">
            <div className="bg-white rounded overflow-hidden">
              <div className="relative w-full h-[70vh]">
                <Image src={CERTS[openIndex].path} alt={CERTS[openIndex].title} fill style={{ objectFit: "contain" }} />
              </div>
              <div className="p-4 flex justify-between items-center">
                <div className="text-sm font-medium">{CERTS[openIndex].title}</div>
                <div>
                  <button onClick={() => setOpenIndex(null)} className="px-3 py-1 rounded border">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
