"use client";
import { useState } from "react";
import Layout from "@/components/Layout";
import { site } from "@/data/siteData";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    // Basic validation
    if (!name || !email || !message) {
      setStatus("All fields are required.");
      setIsLoading(false);
      return;
    }

    try {
      // Send email via form service
      const response = await fetch("https://formspree.io/f/xyzqwert", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (response.ok) {
        setStatus("✓ Thanks for reaching out! I'll get back to you soon.");
        form.reset();
      } else {
        const errorData = await response.json();
        setStatus(errorData?.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Network error. Please try emailing me directly instead.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Layout>
      <div className="max-w-3xl">
        <h1 className="text-5xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
          Get in Touch
        </h1>
        <p className="text-xl text-slate-600 font-bold mb-12 max-w-2xl">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
                📧 Direct Contact
              </h2>
              <div className="space-y-6">
                <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-xl">
                  <p className="text-sm font-black text-blue-600 mb-2 uppercase tracking-widest">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-blue-600 hover:text-blue-700 font-black text-lg break-all hover:underline"
                  >
                    {site.email}
                  </a>
                </div>
                <div className="bg-indigo-50 border-2 border-indigo-200 p-6 rounded-xl">
                  <p className="text-sm font-black text-indigo-600 mb-2 uppercase tracking-widest">Phone</p>
                  <a href={`tel:${site.phone}`} className="text-indigo-600 hover:text-indigo-700 font-black text-lg hover:underline">
                    {site.phone}
                  </a>
                </div>
                <div className="bg-slate-100 border-2 border-slate-300 p-6 rounded-xl">
                  <p className="text-sm font-black text-slate-700 mb-2 uppercase tracking-widest">Location</p>
                  <p className="text-slate-700 font-black text-lg">{site.location}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-6 pb-4 border-b-2 border-blue-200">
                🔗 Connect Online
              </h3>
              <div className="flex flex-col gap-3">
                {site.github && (
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-4 border-2 border-blue-600 text-blue-600 font-black rounded-xl hover:bg-blue-50 transition-all text-lg"
                  >
                    → GitHub
                  </a>
                )}
                {site.linkedin && (
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-4 border-2 border-indigo-600 text-indigo-600 font-black rounded-xl hover:bg-indigo-50 transition-all text-lg"
                  >
                    → LinkedIn
                  </a>
                )}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-8 pb-4 border-b-2 border-blue-200">
              ✉️ Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-black text-slate-900 mb-3 uppercase tracking-widest">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium text-lg"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-black text-slate-900 mb-3 uppercase tracking-widest">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium text-lg"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-black text-slate-900 mb-3 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none font-medium text-lg"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black rounded-xl hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-lg"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <div
                  className={`p-4 rounded-lg font-black text-center text-lg ${
                    status.includes("✓")
                      ? "bg-green-100 border-2 border-green-400 text-green-700"
                      : "bg-red-100 border-2 border-red-400 text-red-700"
                  }`}
                >
                  {status}
                </div>
              )}
            </form>
          </section>
        </div>
      </div>
    </Layout>
  );
}
