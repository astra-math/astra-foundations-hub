import { MoveRight, MoveDown } from "lucide-react";
import React from "react";
import Layout from "@/components/Layout";

const Programs = () => {
  const stages = [
    { name: "FOUNDATIONS CIRCLE" },
    { name: "EXPLORERS CIRCLE" },
    { name: "OLYMPIAD CIRCLE" },
    { name: "ADVANCED CIRCLE", sub: "Invitation only" },
  ];

  const circles = [
    {
      title: "Foundations Circle",
      grades: "Indicative Grades 5–7",
      body:
        "Students arrive knowing how to follow a method. The work here is learning to question one. Foundations builds the habits that come before competition pressure is relevant: pattern recognition, logical clarity, and the discipline of explaining an idea rather than just producing an answer.",
      readiness:
        "A student ready for Foundations can follow a worked solution but cannot yet initiate one independently.",
      participation:
        "Natural participation point: AMC 8, UKMT Junior Mathematical Challenge, Australian Mathematics Competition.",
    },
    {
      title: "Explorers Circle",
      grades: "Indicative Grades 7–9",
      body:
        "The shift here is from finding the right answer to constructing the right argument. Students work on multi-step problems that require strategy selection, structured case analysis, and recovery from failed approaches. Problems frequently cross more than one area of mathematics.",
      readiness:
        "A student ready for Explorers can explain their reasoning even when it is incomplete.",
      participation:
        "Natural participation point: AMC 8 and early AMC 10 territory, early IOQM, UKMT Junior and Intermediate Mathematical Challenge, AIMO for Australian students.",
    },
    {
      title: "Olympiad Circle",
      grades: "Indicative Grades 8–11",
      body:
        "The shift here is from solving to proving. Students build the mathematical maturity to construct arguments that hold under scrutiny, working across number theory, algebra, combinatorics, and geometry as interconnected rather than separate.",
      readiness:
        "A student ready for this circle has started to feel the difference between a confident answer and a complete one.",
      participation:
        "Natural participation point: AMC 10/12, full IOQM readiness, UKMT Senior Mathematical Challenge, AMO for Australian students.",
    },
    {
      title: "Advanced Circle",
      grades: "By invitation",
      body:
        "For students at this level, the question is no longer access to harder problems. The question is the gap between a strong contest solver and a genuine mathematical thinker. This circle is proof-driven, individually paced, and mentor-led.",
      readiness:
        "Entry is by demonstrated performance at or approaching RMO, AIME, and BMO1 level.",
      participation:
        "The work prepares students for INMO, USAJMO, USAMO, BMO1 and BMO2.",
    },
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
              <span
                key={d}
                className="border border-gold/30 text-cream/70 text-sm px-4 py-2 rounded font-heading"
              >
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

    <div className="max-w-4xl">
      <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-0">
        {stages.map((stage, i) => (
          <React.Fragment key={stage.name}>
            <div
              className="
                border border-gold/40 bg-card rounded
                px-4 py-4
                w-full lg:w-[140px]
                min-h-[85px]
                flex flex-col justify-between
                text-left
                shadow-sm
              "
            >
              <div>
                <p className="text-gold/70 text-xs mb-3">
                  Step {i + 1}
                </p>

                <h3 className="font-heading text-foreground font-semibold text-sm tracking-wider leading-tight">
                  {stage.name}
                </h3>
              </div>

            </div>

            {i < stages.length - 1 && (
              <div className="flex items-center justify-center lg:w-12">
                <MoveRight
                  className="hidden lg:block text-gold/40 w-4 h-4"
                  strokeWidth={1.5}
                />

                <MoveDown
                  className="block lg:hidden text-gold/40 w-4 h-4"
                  strokeWidth={1.5}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <p className="text-foreground/60 text-sm mt-8 max-w-2xl">
        Not all students progress through every stage. Advancement reflects sustained structural maturity.
      </p>
    </div>
  </div>
</section>
      <div className="gold-divider" />

      {/* Circle Details */}
      <section className="bg-navy section-padding">
        <div className="container-astra">
          <div className="space-y-12">
            {circles.map((c) => (
              <div
                key={c.title}
                className="max-w-2xl border-l border-gold/30 pl-5 md:pl-7"
              >
                <h3 className="font-heading text-xl font-semibold text-cream mb-1">
                  {c.title}
                </h3>

                <p className="text-gold text-xs mb-5">{"· " + c.grades}</p>

                <div className="space-y-4">
                  <p className="text-cream/70 text-sm md:text-base leading-relaxed">
                    {c.body}
                  </p>

                  <p className="text-gold/85 text-sm leading-relaxed italic">
                    {c.readiness}
                  </p>

                  <p className="text-cream/55 text-sm leading-relaxed">
                    {c.participation}
                  </p>
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
            {["IOQM", "AMC 8", "AMC 10 / AMC 12"].map((item) => (
              <span
                key={item}
                className="border border-gold/40 text-foreground/80 text-sm px-4 py-2 rounded tracking-wide"
              >
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