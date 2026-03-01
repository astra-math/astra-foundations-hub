import Layout from "@/components/Layout";

const Programs = () => {
  return (
    <Layout>
      {/* The Astra Pathway */}
      <section className="bg-navy section-padding pt-24 md:pt-32">
        <div className="container-astra">
          <h1 className="font-heading text-4xl md:text-5xl text-cream font-semibold mb-6">
            The Astra pathway
          </h1>
          <p className="text-cream/60 text-base leading-relaxed max-w-2xl mb-4">
            Astra is structured as a multi-year developmental pathway designed to build mathematical maturity over time. Progression depends on structural readiness, not age alone.
          </p>
          <div className="flex flex-wrap gap-3 mt-8 mb-6">
            {["Number Theory", "Algebra", "Geometry", "Combinatorics"].map((d) => (
              <span key={d} className="border border-gold/30 text-cream/70 text-sm px-4 py-2 rounded font-heading">
                {d}
              </span>
            ))}
          </div>
          <p className="text-cream/40 text-sm max-w-2xl mt-4">
            Depth precedes acceleration. Structure precedes performance.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Pathway Diagram */}
      <section className="light-section bg-cream section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-10">
            Development pathway
          </h2>
          <div className="flex flex-col md:flex-row items-stretch gap-0">
            {[
              { name: "Foundations", sub: "Grades 5–7" },
              { name: "Explorers", sub: "Grades 7–9" },
              { name: "Olympiad", sub: "Grades 8–10" },
              { name: "Advanced", sub: "Invitation only" },
            ].map((stage, i) => (
              <div key={stage.name} className="flex items-center">
                <div className="border border-gold/40 bg-card rounded px-6 py-5 min-w-[160px] text-center">
                  <h3 className="font-heading text-foreground font-semibold text-base">{stage.name}</h3>
                  <p className="text-foreground/40 text-xs mt-1">{stage.sub}</p>
                </div>
                {i < 3 && (
                  <span className="text-gold/40 text-xl px-3 hidden md:block">→</span>
                )}
                {i < 3 && (
                  <span className="text-gold/40 text-xl py-2 block md:hidden mx-auto">↓</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-foreground/40 text-sm mt-8 max-w-xl">
            Not all students progress through every stage. Advancement reflects sustained structural maturity.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Circle Details */}
      <section className="bg-navy section-padding">
        <div className="container-astra space-y-16">
          {[
            {
              title: "Foundations Circle",
              grades: "Grades 5–7",
              desc: "Builds structural thinking and early proof habits. AMC 8 alignment.",
            },
            {
              title: "Explorers Circle",
              grades: "Grades 7–9",
              desc: "Structured argument and cross-domain reasoning. AMC 10 and IOQM alignment.",
            },
            {
              title: "Olympiad Circle",
              grades: "Grades 8–10",
              desc: "Formal proof construction and advanced contest problems. AMC 10, AMC 12, and IOQM alignment.",
            },
            {
              title: "Advanced Circle",
              grades: "Invitation only",
              desc: "RMO, AIME, INMO, US(J)MO qualification stages. Small. Selective. Performance-tracked.",
            },
          ].map((c) => (
            <div key={c.title} className="border-l-2 border-gold/30 pl-8">
              <h3 className="font-heading text-2xl text-cream font-semibold mb-1">{c.title}</h3>
              <p className="text-gold/70 text-sm mb-3 font-heading">{c.grades}</p>
              <p className="text-cream/50 text-base leading-relaxed max-w-xl">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-divider" />

      {/* Bootcamps */}
      <section className="light-section bg-cream section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
            Exam readiness bootcamps
          </h2>
          <p className="text-foreground/50 text-sm mb-8">Short-term refinement modules.</p>
          <div className="flex flex-wrap gap-3 mb-6">
            {["IOQM", "AMC 8", "AMC 10 / AMC 12"].map((b) => (
              <span key={b} className="border border-gold/30 text-foreground/60 text-sm px-4 py-2 rounded font-heading">
                {b}
              </span>
            ))}
          </div>
          <p className="text-foreground/40 text-sm">
            Bootcamps supplement structural training.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Format */}
      <section className="bg-navy section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-2xl md:text-3xl text-cream mb-8">Format</h2>
          <ul className="space-y-3 text-cream/50 text-base">
            {[
              "Live online",
              "Small cohorts (8–12 students)",
              "Twice weekly",
              "60–75 minutes per session",
              "Academic year: 48 weeks",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-gold mt-1.5 text-xs">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-cream/30 text-sm mt-8">
            Workshop required prior to enrollment.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
