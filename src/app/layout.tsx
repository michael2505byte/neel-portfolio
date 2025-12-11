import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Neel Shah — Portfolio",
  description: "Portfolio site of Neel Shah — projects, resume and contact",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased text-slate-900 bg-slate-50">
        <Header />
        <main className="min-h-[60vh]">
          <div className="max-w-5xl mx-auto px-6 py-10">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
