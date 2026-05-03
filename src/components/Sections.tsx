"use client";

import { NeonCard, Chip, StatCard } from "@/components/Neon";

type Experience = {
  role: string;
  org: string;
  location?: string;
  date: string;
  bullets: string[];
};

export default function Sections() {
  /* -------------------------
     DATA
  --------------------------*/

  const stats = [
    { label: "Production Systems", value: 4 },
    { label: "AI Research Projects", value: 2 },
    { label: "Published Games", value: 2 },
    { label: "AWS Certified", value: 1 },
  ];

  const projects = [
    {
      title: "Meadowlawn CRM",
      blurb:
        "Production Spring Boot + MongoDB CRM with Google SSO and CI/CD via Docker & Jenkins (deployed to Heroku).",
      tags: ["Spring Boot", "MongoDB", "Docker", "Jenkins"],
    },
    {
      title: "Deepfake Detection Research",
      blurb:
        "Benchmarked CNNs and Vision Transformers across FaceForensics++, DFDC, Celeb-DF, OpenForensics (↑15% accuracy).",
      tags: ["PyTorch", "CNNs", "ViTs", "Computer Vision"],
    },
    {
      title: "AR Construction Safety (DQN)",
      blurb:
        "Built AR hazard simulations using CNNs + Deep Q-Networks achieving 90%+ hazard detection accuracy.",
      tags: ["AR", "Reinforcement Learning", "DQN"],
    },
    {
      title: "Horizon Messenger (MERN)",
      blurb: "Real-time messaging with WebSockets + JWT authentication.",
      tags: ["React", "Node", "MongoDB"],
    },
    {
      title: "Unity Multiplayer Shooter",
      blurb:
        "Multiplayer game with synchronized gameplay & optimized loops.",
      tags: ["Unity", "C#"],
    },
    {
      title: "Slingshot Bird (Unity)",
      blurb:
        "Physics-based gameplay with trajectory prediction & NUnit-tested logic.",
      tags: ["Unity", "C#", "Game Physics"],
    },
  ];

  const EXPERIENCE: Experience[] = [
    {
      role: "Software Engineer",
      org: "Affirm",
      location: "Remote, USA",
      date: "Jun 2025 – Present",
      bullets: [
        "Developed AI-driven loan approval platform leveraging Claude 3 for predictive scoring, default estimation, and risk assessment.",
        "Implemented Spring Boot microservices via gRPC and Kafka for real-time credit scoring pipelines, improving system reliability by 19%.",
        "Designed RESTful APIs for loan approval forecasts, risk profiles, and fraud alerts — reducing latency by 22%.",
        "Built React/TypeScript/Redux dashboards with AWS Aurora and Kafka streams, improving reporting speed by 17%.",
        "Secured platform with Spring Security, OAuth 2.0, and JWT; maintained SOC 2, PCI DSS, and FFIEC compliance.",
      ],
    },

    {
      role: "AI Research Assistant",
      org: "Department of Computer Science, University of Dayton",
      location: "Dayton, OH",
      date: "June 2024 – May 2025",
      bullets: [
        "Benchmarked CNN and Vision Transformer architectures on FaceForensics++, DFDC, Celeb-DF, and OpenForensics datasets, improving classification accuracy by 15%.",
        "Built reproducible preprocessing and evaluation pipelines in PyTorch for large-scale deepfake detection experiments.",
        "Conducting comparative analysis of state-of-the-art deepfake detection methods; preparing manuscript for publication.",
      ],
    },
    {
      role: "Research Assistant – Augmented Reality Construction Safety",
      org: "Department of Computer Science, University of Dayton",
      location: "Dayton, OH",
      date: "June 2024 – May 2025",
      bullets: [
        "Developed AR safety training simulations enhancing hazard recognition in immersive environments.",
        "Integrated CNNs and Deep Q-Networks (DQN) for AI-driven hazard detection achieving 90%+ accuracy.",
        "Evaluated emerging safety technologies including AR/VR, Computer Vision, IoT, and Predictive Analytics.",
      ],
    },
    {
      role: "Software Development Engineer (Co-op)",
      org: "Meadowlawn Condominiums",
      location: "Cleveland, OH",
      date: "Aug 2023 – May 2024",
      bullets: [
        "Designed and deployed production CRM using Spring Boot, Java, JavaScript, and MongoDB.",
        "Implemented Google SSO authentication and RESTful APIs.",
        "Containerized and deployed the application using Docker and Jenkins CI/CD enabling automated builds and reliable Heroku deployment.",
      ],
    },
    {
      role: "Software Development Engineer Intern",
      org: "Lavner Education @ Carnegie Mellon University",
      location: "Pittsburgh, PA",
      date: "May 2023 – Aug 2023",
      bullets: [
        "Developed reporting tools using C#, .NET MVC, XML, and Power BI; automated attendance workflows.",
        "Implemented #1 requested feature – automated report scheduling for after-test results and end-of-week attendance.",
        "Led UI/workflow decisions resulting in a 20% reduction in support requests.",
        "Wrote automated scripts for weekly full database backups.",
      ],
    },
  ];

  /* -------------------------
     RENDER
  --------------------------*/

  return (
    <>
      {/* STATS */}
      <section className="mx-auto max-w-6xl px-5 pb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <StatCard key={s.label} label={s.label} to={s.value} />
        ))}
      </section>

      {/* EDUCATION */}
      <section id="education" className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-2xl font-semibold tracking-wide text-slate-100">
          Education
        </h2>

        <div className="mt-6">
          <NeonCard className="p-6">
            <h3 className="text-lg font-semibold">
              Bachelor of Computer Science
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              University of Dayton • May 2025
            </p>

            <ul className="mt-4 text-sm text-slate-300 list-disc pl-5 space-y-1">
              <li>Dean’s Honors List</li>
              <li>University of Dayton Global Scholarship</li>
              <li>JP Morgan Chase Hack for Good 2024 Participant</li>
            </ul>

            <div className="mt-6 border-t border-white/10 pt-4">
              <h4 className="text-sm font-semibold text-slate-200">
                Professional Affiliations
              </h4>
              <ul className="mt-2 text-sm text-slate-300 list-disc pl-5 space-y-1">
                <li>Grace Hopper Celebration (VIP Attendee, 2025)</li>
                <li>Society of Women Engineers (Member, 2022 – Present)</li>
              </ul>
            </div>
          </NeonCard>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-2xl font-semibold tracking-wide text-slate-100">
          Projects
        </h2>

        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <NeonCard key={p.title} className="p-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
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

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-2xl font-semibold tracking-wide text-slate-100">
          Experience
        </h2>

        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {EXPERIENCE.map((e) => (
            <NeonCard key={`${e.role}-${e.date}`} className="p-5">
              <h3 className="text-lg font-semibold">{e.role}</h3>
              <p className="mt-1 text-sm text-slate-400">
                {e.org}
                {e.location ? ` • ${e.location}` : ""} • {e.date}
              </p>

              <ul className="mt-3 text-sm text-slate-300 list-disc pl-5 space-y-1">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </NeonCard>
          ))}
        </div>
      </section>
    </>
  );
}