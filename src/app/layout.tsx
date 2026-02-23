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
        <div
          className="pointer-events-none fixed inset-0 -z-10
          bg-[radial-gradient(150%_120%_at_0%_20%,rgba(34,211,238,0.25),transparent),
              radial-gradient(150%_120%_at_100%_25%,rgba(168,85,247,0.25),transparent),
              radial-gradient(200%_150%_at_50%_100%,rgba(59,130,246,0.2),transparent)]"
        />

        {/* Global Nav */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060a17]/70 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a
              href="#home"
              className="font-semibold tracking-tight hover:opacity-90"
            >
              Akanksha (Aki) Yadav
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
              <a className="hover:text-white" href="#education">
                Education
              </a>
              <a className="hover:text-white" href="#projects">
                Projects
              </a>
              <a className="hover:text-white" href="#experience">
                Experience
              </a>
              <a className="hover:text-white" href="#skills">
                Skills
              </a>
              <a className="hover:text-white" href="#leadership">
                Leadership
              </a>
              <a className="hover:text-white" href="#contact">
                Contact
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="mailto:akankshary5@gmail.com?subject=Opportunity%20Inquiry"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white text-[#060a17] hover:opacity-90 text-sm font-medium"
              >
                Hire Me
              </a>
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}