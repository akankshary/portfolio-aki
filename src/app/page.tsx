// src/app/page.tsx
"use client";

import React from "react";
import Link from "next/link";

type Project = {
  title: string;
  stack: string;
  bullets: string[];
  live?: string;
  repo?: string;
  tags: string[];
};

type Experience = {
  role: string;
  org: string;
  location?: string;
  date: string;
  bullets: string[];
};

export default function Home() {
  const [filter, setFilter] = React.useState<string>("All");

  const filters = ["All", "AI/ML", "Full-Stack", "Games", "Research"];

  const filteredProjects =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(filter));

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">
            Akanksha (Aki) Yadav
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:opacity-80" href="#projects">Projects</a>
            <a className="hover:opacity-80" href="#experience">Experience</a>
            <a className="hover:opacity-80" href="#skills">Skills</a>
            <a className="hover:opacity-80" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button href="/resume.pdf" external>Download Resume</Button>
            <Button href="#contact" variant="primary">Hire Me</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-4 pt-14 pb-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Software Engineer • AI/ML • Fintech
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight mt-2">
              I build reliable, data-driven products that scale.
            </h1>
            <p className="mt-4 text-slate-600 max-w-prose">
              CS grad (May 2025). Experience across full-stack apps, CI/CD,
              and AI research on deepfake detection. I turn ambiguous problems
              into clean, measurable outcomes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#projects" variant="primary">Explore Projects</Button>
              <Button href={LINKS.github} external>GitHub</Button>
              <Button href={LINKS.linkedin} external>LinkedIn</Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-600">
              <Chip>React • Next.js • TypeScript</Chip>
              <Chip>Spring Boot • Flask • REST</Chip>
              <Chip>MongoDB • PostgreSQL • SQL</Chip>
              <Chip>Docker • Jenkins • Azure</Chip>
              <Chip>PyTorch • OpenCV</Chip>
              <Chip>AWS Cloud Practitioner</Chip>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100 shadow-inner" />
            <div className="absolute -bottom-4 -right-4 bg-white shadow rounded-xl px-4 py-3 border flex items-center gap-2">
              <span className="text-sm">
                Dean’s Honors • JPMorgan “Hack for Good”
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Featured Projects</h2>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={[
                  "px-3 py-1 rounded-full border text-sm",
                  filter === f
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white hover:bg-slate-50",
                ].join(" ")}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {filteredProjects.map((p) => (
            <Card key={p.title}>
              <div className="aspect-video rounded-xl bg-slate-100 mb-4" />
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{p.stack}</p>
              <ul className="mt-3 text-sm text-slate-700 list-disc pl-5 space-y-1">
                {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <div className="mt-4 flex items-center gap-3">
                {p.live && <Button href={p.live} external>Live</Button>}
                {p.repo && <Button href={p.repo} external variant="ghost">Code</Button>}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Experience</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {EXPERIENCE.map((e) => (
            <Card key={e.role}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{e.role}</h3>
                  <p className="text-sm text-slate-600">
                    {e.org} • {e.location ? `${e.location} • ` : ""}{e.date}
                  </p>
                </div>
              </div>
              <ul className="mt-3 text-sm text-slate-700 list-disc pl-5 space-y-1">
                {e.bullets.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills (Keyboard Jump) */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Skills</h2>
        <Card>
          <KeyboardSkills skills={SKILLS} />
        </Card>
        <p className="mt-3 text-xs text-slate-500">
          Tip: Hover or press a letter to jump (e.g., “R” for React, “P” for Python). Fully keyboard-accessible.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-slate-600 mb-5 max-w-prose">
          Open to software/ML roles (FAANG, fintech, AI product). Fastest way to reach me is email or LinkedIn.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href={`mailto:${LINKS.email}`}>Email</Button>
          <Button href={LINKS.linkedin} external variant="ghost">LinkedIn</Button>
          <Button href={LINKS.github} external variant="ghost">GitHub</Button>
          <Button href="/resume.pdf" variant="primary">Download Resume</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 mt-8">
        <div className="max-w-6xl mx-auto px-4 text-sm text-slate-500 flex flex-wrap items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Akanksha Yadav</span>
          <div className="flex items-center gap-4">
            <a className="hover:underline" href={LINKS.github} target="_blank">GitHub</a>
            <a className="hover:underline" href={LINKS.linkedin} target="_blank">LinkedIn</a>
            <a className="hover:underline" href="/resume.pdf" target="_blank">Resume</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* -----------------------------
   Re-usable UI bits (no deps)
------------------------------*/
function Button({
  href,
  children,
  variant = "secondary",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
}) {
  const cls = {
    primary:
      "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800",
    secondary:
      "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50",
    ghost:
      "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-transparent border border-slate-200 hover:bg-slate-50",
  }[variant];

  const props = external
    ? { href, target: "_blank", rel: "noreferrer" }
    : { href };

  return (
    <Link {...props} className={cls}>
      {children}
    </Link>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      {children}
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs">
      {children}
    </span>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-xs">
      {children}
    </span>
  );
}

/* -----------------------------
   Interactive Keyboard Skills
------------------------------*/
function KeyboardSkills({ skills = [] as string[] }) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [pressedKey, setPressedKey] = React.useState<string | null>(null);

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const k = e.key?.toLowerCase();
      if (!k || k.length !== 1) return;
      const idx = skills.findIndex((s) => s.trim().toLowerCase().startsWith(k));
      if (idx !== -1) {
        setActiveIndex(idx);
        setPressedKey(k);
        setTimeout(() => setPressedKey(null), 180);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [skills]);

  return (
    <div>
      <p className="text-sm text-slate-600 mb-4">
        Hover or <span className="font-medium">press any letter</span> — I’ll jump to a matching skill.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {skills.map((s, i) => {
          const isActive = i === activeIndex;
          const startsWithPressed = pressedKey && s.toLowerCase().startsWith(pressedKey);
          return (
            <button
              key={s}
              type="button"
              onMouseEnter={() => setActiveIndex(i)}
              onFocus={() => setActiveIndex(i)}
              onClick={() => setActiveIndex(i)}
              className={[
                "group select-none w-full text-left px-3 py-2 rounded-2xl border bg-white shadow-sm",
                "transition-all duration-150",
                isActive ? "ring-2 ring-slate-400 scale-[1.02]" : "hover:scale-[1.02]",
                startsWithPressed ? "border-slate-900" : "border-slate-200",
              ].join(" ")}
              aria-pressed={isActive}
            >
              <div className="text-sm font-medium text-slate-900 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-5 h-5 text-xs rounded-md border bg-slate-50">
                  {s.charAt(0).toUpperCase()}
                </span>
                {s}
              </div>
              {isActive && (
                <div className="mt-1 text-xs text-slate-500">
                  Press more keys to jump. Use Tab/Shift+Tab to move focus.
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* -----------------------------
   Data (edit these)
------------------------------*/
const LINKS = {
  email: "akankshary5@gmail.com",
  github: "https://github.com/akankshary",
  linkedin: "https://www.linkedin.com/in/akanksharyadav/",
};

const PROJECTS: Project[] = [
  {
    title: "Meadowlawn — Maintenance CRM",
    stack: "Spring Boot • MongoDB • Docker • Jenkins • Heroku",
    bullets: [
      "Reduced resident request delays by 30% with a role-based, real-time CRM.",
      "Google SSO via Spring Security & OAuth to harden auth and simplify logins.",
      "Automated CI/CD (Docker + Jenkins) cut release time from 2h → 20m; deployed to Heroku.",
    ],
    live: "https://ud-cps491-24s-team.github.io/Team06-Meadowlawn-Public/",
    repo: undefined,
    tags: ["Full-Stack"],
  },
  {
    title: "Deepfake Detection Research",
    stack: "PyTorch • CNNs/ViTs • OpenCV",
    bullets: [
      "Trained on FaceForensics++/DFDC; improved deepfake classification reliability by ~15%.",
      "Streamlined preprocessing pipeline for faster, repeatable experiments.",
    ],
    tags: ["AI/ML", "Research"],
  },
  {
    title: "Horizon Messenger",
    stack: "React • Node • Express • MongoDB • WebSockets • JWT",
    bullets: [
      "Real-time chat with public groups and a “lucky draw” feature.",
      "JWT-secured routes; deployed on Heroku.",
    ],
    tags: ["Full-Stack"],
  },
  {
    title: "AR Construction Safety (with Prof. Tam Nguyen)",
    stack: "AR • CNNs • Deep Q-Networks",
    bullets: [
      "Built safety training simulations predicting site hazards with 90%+ accuracy.",
    ],
    tags: ["AI/ML", "Research"],
  },
  {
    title: "Unity Games — Multiplayer Zombie Shooter",
    stack: "Unity • C#",
    bullets: ["Third-person multiplayer shooter; packaged builds and itch.io page."],
    live: "https://akankshaa.itch.io/multiplayer-zombie-shooter",
    tags: ["Games"],
  },
  {
    title: "Unity Games — Slingshot Bird",
    stack: "Unity • C#",
    bullets: ["Angry Birds-style physics gameplay; responsive UI and levels."],
    live: "https://akankshaa.itch.io/slingshot-bird-game",
    tags: ["Games"],
  },
];

const EXPERIENCE: Experience[] = [
  {
    role: "AI Research Assistant",
    org: "Dept. of Computer Science, University of Dayton",
    location: "Dayton, OH",
    date: "May 2025 – Present",
    bullets: [
      "Trained CNNs & ViTs on FaceForensics++/DFDC, improving deepfake classification reliability by ~15%.",
      "Streamlined data preprocessing pipeline to enable faster, repeatable experiments across model architectures.",
    ],
  },
  {
    role: "Full Stack Developer (Intern)",
    org: "Meadowlawn Condominiums",
    location: "Cleveland, OH (Hybrid)",
    date: "Aug 2023 – May 2024",
    bullets: [
      "Built a Spring Boot + MongoDB maintenance CRM that reduced resident request delays by 30%.",
      "Implemented Google SSO with Spring Security & OAuth to harden auth and simplify logins.",
      "Automated CI/CD with Docker & Jenkins to cut release time from 2h to 20m; deployed on Heroku.",
    ],
  },
  {
    role: "Software Developer (Intern)",
    org: "Lavner Education, Carnegie Mellon University",
    location: "Pittsburgh, PA",
    date: "May 2023 – Aug 2023",
    bullets: [
      "Delivered automated reporting using C#, .NET MVC, SQL Server, and Power BI, saving instructors 10+ hrs/week.",
      "Designed optimized SQL schemas, stored procedures, and indexing to improve reporting performance.",
    ],
  },
];

const SKILLS: string[] = [
  "Python", "Java", "TypeScript", "JavaScript", "React", "Next.js", "Flask", "Spring Boot", "SQL",
  "PostgreSQL", "MongoDB", "SQL Server", "Docker", "Jenkins", "Azure", "AWS (CCP)", "Git", "GitHub",
  "PyTorch", "OpenCV", "Unity", "C#", "HTML", "CSS", "REST APIs", "Power BI", "Tableau", "MATLAB", "R",
];
