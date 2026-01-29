// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akanksha Yadav – Portfolio",
  description: "AI Researcher & Full-Stack Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-[#060a17] text-slate-100 antialiased">
        {/* global sci-fi glow */}
        <div className="pointer-events-none fixed inset-0 -z-10
          bg-[radial-gradient(150%_120%_at_0%_20%,rgba(34,211,238,0.25),transparent),
              radial-gradient(150%_120%_at_100%_25%,rgba(168,85,247,0.25),transparent),
               radial-gradient(200%_150%_at_50%_100%,rgba(59,130,246,0.2),transparent)]" />
        {children}
      </body>
    </html>
  );
}

