"use client";
import { useState } from "react";
import Layout from "@/components/Layout";
import { site } from "@/data/siteData";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const FORMSPREE = "https://formspree.io/f/YOUR_ID";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("Thanks — I will reply shortly!");
        form.reset();
      } else {
        const j = await res.json();
        setStatus(j?.error || "Oops — there was a problem.");
      }
    } catch (err) {
      setStatus("Network error. Try email.");
    }
  }

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className="text-slate-600 mb-4">Prefer email? <a className="underline" href={`mailto:${site.email}`}>{site.email}</a></p>

      <form onSubmit={handleSubmit} className="max-w-xl grid gap-3">
        <input name="name" placeholder="Your name" required className="p-3 border rounded" />
        <input type="email" name="email" placeholder="Your email" required className="p-3 border rounded" />
        <textarea name="message" rows={6} placeholder="Message" required className="p-3 border rounded" />
        <div className="flex items-center gap-4">
          <button type="submit" className="bg-slate-900 text-white px-4 py-2 rounded">Send message</button>
        </div>
      </form>
    </Layout>
  );
}
