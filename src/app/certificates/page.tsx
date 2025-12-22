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
              <Image src={c.path} alt={c.title} fill />
            </div>
            <p className="text-sm font-medium text-center mt-2">{c.title}</p>
            <div className="mt-3 text-center">
              <button onClick={() => setOpenIndex(i)} className="text-sky-600 underline text-sm">Preview</button>
            </div>
          </div>
        ))}
      </div>

      {openIndex !== null && <div>Modal</div>}
    </Layout>
  );
}
