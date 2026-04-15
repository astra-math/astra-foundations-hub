import { MoveRight, MoveDown } from "lucide-react";
import React from "react";
import Layout from "@/components/Layout";

const Programs = () => {
  const stages = [
    { name: "FOUNDATIONS", sub: "Grades 5–7" },
    { name: "EXPLORERS", sub: "Grades 7–9" },
    { name: "OLYMPIAD", sub: "Grades 8–10" },
    { name: "ADVANCED", sub: "Invitation only" },
  ];

  return (
    <Layout>
      {/* The Astra Pathway */}
      <section className="bg-navy section-padding pt-24 md:pt-32">
        <div className="container-astra">
          <h1 className="font-heading text-3xl md:text-4xl text-cream font-semibold mb-6">
            The Astra pathway
          </h1>
          <p className="text-cream/70 text-sm md:text-base leading-relaxed max-w-2xl mb-4">
            Astra is structured as a multi-year developmental pathway designed to build mathematical maturity over time.
          </p>
          <p className="text-cream/70 text-sm md:text-base leading-relaxed max-w-2xl mb-4">
            Progression depends on structural readiness, not age alone.
          </p>
          <div className="flex flex-wrap gap-3 mt-8 mb-6">
            {["Number Theory", "Algebra", "Geometry", "Combinatorics"].map((d) => (
              <span key={d} className="border border-gold/30 text-cream/70 text-sm px-4 py-2 rounded font-heading">
                {d}
              </span>
            ))}
          </div>
          <p className="text-cream/70 text-sm max-w-2xl mt-4">
            Depth precedes acceleration. Structure precedes performance.
          </p>
        </div>
      </section>

      <div className="gold-divider" />
      {/* Pathway Diagram */}
      <section className="light-section bg-cream section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-10">
            Development pathway
          </h2>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between">
            {stages.map((stage, i) => (
              <React.Fragment key={stage.name}>
                <div className="flex flex-col items-center lg:flex-1 w-full lg:w-auto">
                  <div className="border border-gold/40 bg-card rounded px-3 py-4 w-full max-w-[220px] lg:max-w-[165px] text-center flex flex-col justify-center min-h-[85px] shadow-sm">
                    <h3 className="font-heading text-foreground font-semibold text-sm md:text-base tracking-wider leading-tight">{stage.name}</h3>
                    <p className="text-foreground/40 text-[10px] md:text-[11px] mt-1.5">{stage.sub}</p>
                  </div>
                </div>
                {i < stages.length - 1 && (
                  <div className="flex items-center justify-center flex-shrink-0 w-full lg:w-8 xl:w-12 h-10 lg:h-auto my-2 lg:my-0">
                    <MoveRight className="hidden lg:block text-gold/40 w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                    <MoveDown className="block lg:hidden text-gold/40 w-6 h-6" strokeWidth={1.5} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="text-foreground/60 text-sm mt-10 w-full text-center lg:text-left">
            Not all students progress through every stage. Advancement reflects sustained structural maturity.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Circle Details */}
      <section className="bg-navy section-padding">
        <div className="container-astra">
          <div className="space-y-16">
            {[
              {
                title: "Foundations Circle",
                grades: "Grades 5–7",
                points: [
                  "Most students arrive knowing how to follow a method. Foundations teaches them to question one.",
                  "The focus is on structural habits before competition pressure arrives: pattern recognition, logical clarity, and the discipline of explaining an idea rather than just producing an answer. Students learn to sit with unfamiliar problems without reaching for a formula.",
                  "Working benchmarks: AMC 8 and UKMT Junior participation. Students working at this level are building the preparation required for these competitions, not chasing scores.",
                  "Readiness signal for Explorers: AMC 8 Honor Roll or UKMT Junior Gold are strong indicators. The underlying question is whether a student is ready for the preparation that Explorers demands, not whether they have cleared a specific threshold."
                ],
              },
              {
                title: "Explorers Circle",
                grades: "Grades 7–9",
                points: [
                  "The central shift here is from getting the right answer to constructing the right argument.",
                  "Students work on multi-step problems requiring strategy selection, structured casework, and the ability to re-enter a problem after failure. Cross-domain problems appear regularly. Students begin comparing methods, not just applying them. Working benchmarks: AMC 10, UKMT Intermediate, and IOQM participation. Students at this level are building the preparation and mathematical stamina these competitions reward.",
                  "Readiness signal for Olympiad: UKMT Intermediate Gold, IMOK qualification, or consistent strong AMC 10 performance. JMO qualification is a strong signal where applicable. These are indicators of preparedness for the next level of demand, not strict entry criteria."
                ],
              },
              {
                title: "Olympiad Circle",
                grades: "Grades 8–10",
                points: [
                  "The transition from solving problems to constructing arguments.",
                  "Students work across number theory, algebra, combinatorics, and geometry, developing proof-writing ability and the mathematical maturity that separates strong solvers from students who can explain why a solution works.",
                  "Working benchmarks: AMC 10/12, UKMT Intermediate or Senior depending on age, and IOQM. Students at this level are working toward the preparation these competitions require at a meaningful performance level.",
                  "Readiness signal for Advanced: Scores approaching the AIME qualification threshold or IOQM performance approaching RMO cutoff. The signal is proximity and trajectory, not qualification itself."
                ],
              },
              {
                title: "Advanced Circle",
                grades: "By invitation",
                points: [
                  "For students already performing at national competition level, the question is no longer exposure to harder problems. It is the gap between a strong contest solver and a genuine mathematical thinker: what separates students who qualify for RMO and AIME from those who can perform meaningfully within INMO and USAJMO.",
                  "This circle is proof-driven, individually paced, and mentor-led. The work is aligned with RMO, AIME, INMO, BMO1/BMO2, and US(J)MO preparation and qualification."
                ],
              },
            ].map((c) => (
              <div key={c.title} className="max-w-4xl border-l border-gold/30 pl-8">
                <h3 className="font-heading text-xl font-semibold text-cream mb-1">
                  {c.title}
                </h3>
                <p className="text-gold text-xs mb-6">{"· " + c.grades}</p>
                <div className="space-y-4">
                  {c.points.map((point, idx) => (
                    <p key={idx} className="text-cream/70 text-base leading-relaxed">
                      {point}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Bootcamps */}
      <section className="light-section bg-cream section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Exam readiness bootcamps
          </h2>
          <p className="text-foreground/70 text-base leading-relaxed max-w-3xl mb-8">
            Short, focused modules designed to sharpen specific skills ahead of competitions.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            {[
              "IOQM",
              "AMC 8",
              "AMC 10 / AMC 12",
            ].map((item) => (
              <span key={item} className="border border-gold/40 text-foreground/80 text-sm px-4 py-2 rounded tracking-wide">
                {item}
              </span>
            ))}
          </div>

          <div className="text-foreground/80 text-base leading-relaxed">
            <p>Bootcamps supplement structural training, not replace it.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
