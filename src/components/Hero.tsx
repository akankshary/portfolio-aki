"use client";

import { useTypewriter } from "@/components/Hooks";

export default function Hero() {
  const typed = useTypewriter(
    "Software Engineer + AI Researcher | Deepfake Detection • Full-Stack Systems • CI/CD",
    26
  );

  return (
    <section className="relative w-full overflow-hidden">
      {/* FULL-WIDTH BARBIE GLOW BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 -z-20
        bg-[radial-gradient(90%_70%_at_50%_-10%,rgba(236,72,153,0.33),transparent),
            radial-gradient(70%_60%_at_15%_25%,rgba(244,63,94,0.18),transparent),
            radial-gradient(70%_60%_at_85%_25%,rgba(168,85,247,0.22),transparent),
            radial-gradient(60%_50%_at_60%_80%,rgba(236,72,153,0.14),transparent)]"
      />

      {/* subtle sparkle/noise overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] mix-blend-screen bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_30%,white,transparent_35%),radial-gradient(circle_at_30%_85%,white,transparent_35%),radial-gradient(circle_at_70%_75%,white,transparent_40%)]" />

      {/* CONTENT CONTAINER */}
      <div className="mx-auto max-w-6xl px-5 pt-12 sm:pt-16 pb-10 sm:pb-12 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-slate-100">
            Akanksha{" "}
            <span className="inline-flex items-baseline gap-2 whitespace-nowrap">
              <span className="bg-gradient-to-r from-pink-300 via-rose-200 to-violet-300 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(236,72,153,0.35)]">
                “Aki”
              </span>
              <span>Yadav</span>
            </span>
          </h1>

          <p className="mt-3 sm:mt-4 text-base sm:text-xl text-pink-200 font-mono">
            {typed}
          </p>

          {/* EMAIL */}
          <p className="mt-2 text-sm text-slate-300">
            <a
              href="mailto:akankshary5@gmail.com"
              className="text-pink-300 hover:underline break-all"
            >
              akankshary5@gmail.com
            </a>
          </p>

          {/* DESCRIPTION */}
          <p className="mt-4 max-w-prose text-sm sm:text-base text-slate-300">
            I build ML evaluation pipelines and production-grade web apps—deepfake
            detection with CNNs/ViTs, real-time systems, and reliable CI/CD.
            Recently improved model classification accuracy by{" "}
            <span className="text-slate-100 font-semibold">15%</span>.
          </p>

          {/* PRIMARY LINKS */}
          <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
            <a
              href="https://linkedin.com/in/akanksharyadav"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto text-center px-5 py-3 rounded-xl bg-sky-500/15 border border-sky-400/30 text-sky-200 hover:bg-sky-500/25 transition"
            >
              LinkedIn
            </a>

            {/* AI RESEARCH SLIDES */}
            <a
              href="https://docs.google.com/presentation/d/1vf-7ICKIrSUvgiz9_gawTD8R9VTRKMDWWTVLOMAxPR0/view"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto text-center px-5 py-3 rounded-xl bg-violet-500/20 border border-violet-400/40 text-violet-100 hover:bg-violet-500/30 transition"
            >
              AI Research Slides
            </a>

            <a
              href="#leadership"
              className="w-full sm:w-auto text-center px-5 py-3 rounded-xl bg-pink-500/20 border border-pink-300/40 text-pink-100 hover:bg-pink-500/30 transition shadow-[0_0_22px_rgba(236,72,153,0.12)]"
            >
              Leadership
            </a>

            <a
              href="mailto:akankshary5@gmail.com"
              className="w-full sm:w-auto text-center px-5 py-3 rounded-xl bg-white/5 border border-white/15 text-slate-200 hover:bg-white/10 transition"
            >
              Contact
            </a>
          </div>

          {/* FEATURED PROJECTS */}
          <div className="mt-6">
            <p className="text-sm text-slate-400 mb-2">Featured Projects</p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 text-sm">
              <a
                href="https://akankshaa.itch.io/multiplayer-zombie-shooter"
                target="_blank"
                rel="noreferrer"
                className="text-pink-200 hover:underline"
              >
                🎮 Multiplayer Zombie Shooter (Unity)
              </a>

              <a
                href="https://akankshaa.itch.io/slingshot-bird-game"
                target="_blank"
                rel="noreferrer"
                className="text-pink-200 hover:underline"
              >
                🐦 Slingshot Bird Game (Unity)
              </a>
            </div>
          </div>

          {/* SKILL CHIPS */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-300">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              PyTorch • ViTs • CNNs
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Spring Boot • React • MongoDB
            </span>
            <span className="px-3 py-1 rounded-full bg-pink-500/12 border border-pink-400/20 text-pink-100">
              Docker • Jenkins • AWS (CCP)
            </span>
          </div>
        </div>

        {/* RIGHT: PORTRAIT */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 sm:w-72 md:w-80 aspect-square rounded-full overflow-hidden ring-1 ring-white/10 shadow-xl">
            <div
              className="absolute -inset-14 rounded-full
                         bg-[conic-gradient(from_0deg,rgba(236,72,153,0.55),rgba(168,85,247,0.45),rgba(236,72,153,0.55))]
                         blur-3xl -z-10"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_40%)]" />
            <img
              src="/aki.png"
              alt="Akanksha Yadav"
              className="w-full h-full object-cover object-[50%_10%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
