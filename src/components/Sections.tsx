"use client";

import { NeonCard, Chip, StatCard } from "@/components/Neon";

export default function Sections() {
  const projects = [
    {
      title: "Meadowlawn CRM",
      blurb: "Spring Boot + MongoDB + CI/CD (Docker, Jenkins).",
      tags: ["Spring Boot", "MongoDB", "Docker"],
    },
    {
      title: "Horizon Messenger (MERN)",
      blurb: "Realtime chat with WebSockets + JWT auth.",
      tags: ["React", "Node", "MongoDB"],
    },
    {
      title: "Unity Games / AR Safety",
      blurb: "Published games + AR construction safety using DQN.",
      tags: ["Unity", "C#", "RL"],
    },
  ];

  const stats = [
    { label: "Projects", value: 20 },
    { label: "AI Research", value: 1 },
    { label: "Published Games", value: 2 },
    { label: "AWS Certified", value: 1 },
  ];

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <StatCard key={s.label} label={s.label} to={s.value} />
        ))}
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="text-2xl font-semibold tracking-wide text-slate-100">
          Projects
        </h2>
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <NeonCard
              key={p.title}
              className="p-5 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-shadow"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span className="text-xs text-slate-400">Case study →</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{p.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Chip key={t} label={t} />
                ))}
              </div>
            </NeonCard>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="text-2xl font-semibold tracking-wide text-slate-100">
          Experience
        </h2>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {/* AI Research Assistant */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-base font-medium text-slate-200">
                  University of Dayton
                </h3>
                <p className="text-sm text-slate-400">
                  AI Research Assistant · Department of Computer Science
                </p>
              </div>
              <span className="text-xs text-slate-500">May 2025 – Present</span>
            </div>

            <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-slate-300">
              <li>
                Trained and evaluated CNN and Vision Transformer models on
                FaceForensics++ and DFDC datasets, improving classification
                accuracy by <strong>15%</strong>.
              </li>
              <li>
                Built preprocessing, feature extraction, and evaluation pipelines
                in PyTorch to enable reproducible machine learning experimentation.
              </li>
              <li>
                Analyzed spatial and temporal artifacts (motion inconsistencies,
                compression effects) to improve robustness of CNN-based detectors.
              </li>
              <li>
                Designed experimental frameworks and conducted survey-based
                analysis with faculty mentor to support publication-ready machine
                learning research.
              </li>
            </ul>
          </div>

          {/* Meadowlawn */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-base font-medium text-slate-200">
                  Meadowlawn Condominiums
                </h3>
                <p className="text-sm text-slate-400">
                  Software Development Engineer Intern · Cleveland, OH (Hybrid)
                </p>
              </div>
              <span className="text-xs text-slate-500">Aug 2023 – May 2024</span>
            </div>

            <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-slate-300">
              <li>
                Designed and deployed a production-grade maintenance CRM serving
                real users, built with Spring Boot, Java, JavaScript, AJAX, and
                HTML.
              </li>
              <li>
                Implemented secure authentication using Google SSO, Spring
                Security, and OAuth 2.0; designed RESTful APIs backed by MongoDB
                for CRUD workflows.
              </li>
              <li>
                Containerized and deployed the application using Docker and
                Jenkins CI/CD, enabling automated builds and reliable cloud
                deployment on Heroku.
              </li>
            </ul>
          </div>

          {/* Lavner @ CMU */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-base font-medium text-slate-200">
                  Lavner Education @ Carnegie Mellon University
                </h3>
                <p className="text-sm text-slate-400">
                  Software Development Engineer Intern · Pittsburgh, PA
                </p>
              </div>
              <span className="text-xs text-slate-500">May 2023 – Aug 2023</span>
            </div>

            <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-slate-300">
              <li>
                Developed reporting features using C#, .NET MVC, XML, and Power BI
                to support data-driven operational insights.
              </li>
              <li>
                Supported automated reporting for after-test results and attendance
                summaries.
              </li>
              <li>
                Collaborated on UI/workflow improvements contributing to reduced
                support requests.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="text-2xl font-semibold tracking-wide text-slate-100">
          Skills
        </h2>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <NeonCard className="p-4">
            <h3 className="font-semibold">Languages</h3>
            <p className="mt-1 text-sm text-slate-300">
              Python, Java, C#, SQL, R, JavaScript
            </p>
          </NeonCard>
          <NeonCard className="p-4">
            <h3 className="font-semibold">Frameworks</h3>
            <p className="mt-1 text-sm text-slate-300">
              Spring Boot, React, Flask, .NET MVC, Unity
            </p>
          </NeonCard>
          <NeonCard className="p-4">
            <h3 className="font-semibold">Cloud & DevOps</h3>
            <p className="mt-1 text-sm text-slate-300">
              AWS (CCP), Docker, Jenkins, Heroku, Azure
            </p>
          </NeonCard>
          <NeonCard className="p-4">
            <h3 className="font-semibold">Data & ML</h3>
            <p className="mt-1 text-sm text-slate-300">
              PyTorch, OpenCV, Tableau, MATLAB
            </p>
          </NeonCard>
          <NeonCard className="p-4">
            <h3 className="font-semibold">Databases</h3>
            <p className="mt-1 text-sm text-slate-300">
              MongoDB, PostgreSQL, SQL Server
            </p>
          </NeonCard>
          <NeonCard className="p-4">
            <h3 className="font-semibold">Other</h3>
            <p className="mt-1 text-sm text-slate-300">
              OAuth/SSO, REST APIs, SDLC (Scrum)
            </p>
          </NeonCard>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-14">
        <NeonCard className="p-6">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl font-semibold">Get in touch</h2>
              <p className="mt-2 text-slate-300">
                Want to collaborate or have a question? Drop a message.
              </p>
              <p className="mt-3 text-sm text-slate-400">
                Or email me directly:{" "}
                <a
                  className="text-pink-300 hover:underline"
                  href="mailto:akankshary5@gmail.com"
                >
                  akankshary5@gmail.com
                </a>
              </p>
            </div>

            <form
              className="grid gap-3"
              onSubmit={(e) => {
                e.preventDefault();

                const form = e.currentTarget;
                const name = (form.elements.namedItem("name") as HTMLInputElement)
                  .value;
                const email = (
                  form.elements.namedItem("email") as HTMLInputElement
                ).value;
                const message = (
                  form.elements.namedItem("message") as HTMLTextAreaElement
                ).value;

                const subject = encodeURIComponent(
                  `Portfolio contact from ${name || "Someone"}`
                );

                const body = encodeURIComponent(
                  `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
                );

                window.location.href = `mailto:akankshary5@gmail.com?subject=${subject}&body=${body}`;
              }}
            >
              <input
                name="name"
                aria-label="Name"
                placeholder="Name"
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-400/40"
              />
              <input
                name="email"
                aria-label="Email"
                type="email"
                placeholder="Email"
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-400/40"
              />
              <textarea
                name="message"
                aria-label="Message"
                placeholder="Message"
                rows={4}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-400/40"
              />
              <button
                type="submit"
                className="mt-1 px-5 py-2 rounded-xl bg-pink-500/20 border border-pink-300/40 text-pink-100 hover:bg-pink-500/30 transition"
              >
                Send Email
              </button>
            </form>
          </div>
        </NeonCard>
      </section>


      <footer className="py-10 text-center text-xs text-slate-400">
        <div className="font-mono">{"> akanksha.contact()"}</div>
      </footer>
    </>
  );
}
