import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-5xl mx-auto px-6 py-10 w-full">
        {children}
      </div>
    </div>
  );
}
