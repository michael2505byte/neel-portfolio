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
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-3 text-slate-900">Get in Touch</h1>
        <p className="text-lg text-slate-600 mb-8">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Direct Contact</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-slate-600 mb-1">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sky-600 hover:text-sky-700 font-medium break-all"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-600 mb-1">Phone</p>
                <a href={`tel:${site.phone}`} className="text-sky-600 hover:text-sky-700 font-medium">
                  {site.phone}
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-600 mb-1">Location</p>
                <p className="text-slate-700">{site.location}</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Connect Online</h3>
              <div className="flex flex-col gap-3">
                {site.github && (
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium"
                  >
                    GitHub →
                  </a>
                )}
                {site.linkedin && (
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium"
                  >
                    LinkedIn →
                  </a>
                )}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-slate-900 text-white font-medium py-2 rounded-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p
                  className={`text-sm font-medium ${
                    status.includes("✓") ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </section>
        </div>
      </div>
    </Layout>
  );
}
