import Hero from "@/components/Hero";
import Sections from "@/components/Sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Sections />

      {/* Recognition & Leadership */}
      <section
        id="leadership"
        className="relative w-full overflow-hidden scroll-mt-24"
      >
        {/* full-width pink/lilac glow */}
        <div
          className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(80%_60%_at_50%_0%,rgba(236,72,153,0.20),transparent),
              radial-gradient(70%_55%_at_15%_40%,rgba(168,85,247,0.18),transparent),
              radial-gradient(70%_55%_at_85%_40%,rgba(244,114,182,0.16),transparent)]"
        />

        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-100 mb-6">
            Recognition & Leadership
          </h2>

          {/* MOBILE-FIRST: 1 col on phones, 2 cols on md */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* ULead Feature */}
            <div className="rounded-2xl bg-white/5 border border-pink-400/15 p-5">
              <h3 className="text-base font-medium text-slate-200">
                Featured in University of Dayton Magazine — ULead Emerging Leaders
                Program
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Selected to represent the ULead Emerging Leaders Program and featured
                discussing leadership development, inclusion, and community impact.
              </p>
              <a
                href="https://www.mydigitalpublication.com/publication/?i=740113&p=13&view=issueViewer"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm text-pink-300 hover:underline"
              >
                Read article →
              </a>
            </div>

            {/* Outstanding Student Award */}
            <div className="rounded-2xl bg-white/5 border border-pink-400/15 p-5">
              <h3 className="text-base font-medium text-slate-200">
                Outstanding Student Award — University of Dayton (2023)
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Recipient of the 2023 Student Leadership Award for exceptional academic
                achievement, leadership, service, and contributions to building a
                welcoming and inclusive campus community.
              </p>
            </div>

            {/* AWS Certification */}
            <div className="rounded-2xl bg-white/5 border border-pink-400/15 p-5">
              <h3 className="text-base font-medium text-slate-200">
                AWS Certified Cloud Practitioner
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Issued by Amazon Web Services Training and Certification. Demonstrated
                foundational cloud fluency and understanding of core AWS services,
                architectures, and best practices.
              </p>
              <a
                href="https://www.credly.com/badges/18dcd436-d4fa-4df2-9da4-2fb24fabfbee/linked_in"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm text-pink-300 hover:underline"
              >
                View badge →
              </a>
            </div>

            {/* SGA */}
            <div className="rounded-2xl bg-white/5 border border-pink-400/15 p-5">
              <h3 className="text-base font-medium text-slate-200">
                Student Government Association — Senior Senator / Senior Representative
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Served as a senior student representative and worked with campus
                stakeholders to improve student experience and safety initiatives.
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-slate-300">
                <li>
                  Partnered with Public Safety and campus leadership to support
                  safety-focused initiatives and promote a violence-free campus
                  environment.
                </li>
                <li>
                  Advocated for student concerns by collecting feedback, elevating
                  issues through SGA channels, and coordinating follow-ups with
                  relevant departments.
                </li>
                <li>
                  Supported campus programming and student engagement efforts by
                  helping plan, promote, and execute student-facing initiatives.
                </li>
              </ul>
            </div>

            {/* Distance 4 Dreams (full width on md) */}
            <div className="rounded-2xl bg-white/5 border border-pink-400/15 p-5 md:col-span-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                <div>
                  <h3 className="text-base font-medium text-pink-200">
                    Distance 4 Dreams
                  </h3>
                  <p className="text-sm text-slate-400">
                    President & Director of Finance
                  </p>
                </div>
                <span className="text-xs text-slate-500">Aug 2021 – Present</span>
              </div>

              <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-slate-300">
                <li>
                  Successfully raised and donated <strong>$7,000</strong> to A Special
                  Wish Foundation to support a child diagnosed with Cerebral Palsy and
                  Wilms’ Tumor (kidney cancer).
                </li>
                <li>
                  Led planning and execution of a parent’s weekend breakfast
                  fundraiser, raising a record-breaking <strong>$3,000</strong> in a
                  single event.
                </li>
                <li>
                  Coordinated vendors, managed logistics, and led volunteer teams to
                  ensure smooth execution of all fundraising initiatives.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}