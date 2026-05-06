import Layout from "@/components/Layout";

const sections = [
  {
    title: "What is a Math Circle",
    content: [
      { type: "p", text: "A Math Circle is not tutoring. It is not coaching. It is not exam preparation." },
      { type: "p", text: "It is a structured intellectual environment where students learn to think mathematically: to question ideas, test conjectures, struggle with problems, and discover structure for themselves." },
      { type: "p", text: "This tradition began in Eastern European mathematical culture in the early 20th century, where research mathematicians worked directly with small groups of curious students. The goal was never examination performance. It was the development of genuine mathematical thinking. The tradition spread through the Soviet Union and Hungary, and later took root at universities across the United States, the UK, and beyond. Many of the most significant mathematicians of the last century were shaped by it." },
      { type: "p", text: "Astra is built on this tradition." }
    ]
  },
  {
    title: "Problem first, theory later",
    content: [
      { type: "p", text: "In most classrooms, theory comes first and problems follow as exercises. At Astra, the sequence is reversed. Students encounter carefully chosen problems before any formal instruction. They wrestle with ideas, develop intuition, and form conjectures. Only then is theory introduced when formalization becomes the natural next step after genuine exploration." }
    ]
  },
  {
    title: "The role of struggle",
    content: [
      { type: "p", text: "Mathematical growth does not happen in comfort. It happens when a student sits with a problem they cannot immediately solve and chooses to persist." },
      { type: "p", text: "At Astra, struggle is not a failure of teaching. It is the teaching. Mentors do not rescue students from difficulty. They create conditions where productive struggle leads to insight." },
      { type: "p", text: "Every breakthrough that follows genuine effort builds a kind of mathematical confidence that no shortcut can replicate." }
    ]
  },
  {
    title: "Structured participation",
    content: [
      { type: "p", text: "Astra sessions are not lectures. They are structured around dialogue, questioning, and collaborative reasoning. Students present their attempts, defend their logic, and examine each other's arguments respectfully and rigorously." },
      { type: "p", text: "The mentor guides the discussion but does not dominate it. This format builds not only mathematical understanding but also the ability to communicate mathematical ideas clearly, a skill essential for competitions, research, and advanced study." }
    ]
  },
  {
    title: "Mathematical maturity",
    content: [
      { type: "p", text: "Mathematical maturity is the ability to think precisely, reason abstractly, construct arguments, and recognize structure across domains. It is not measured by speed or by the number of problems a student can solve." },
      { type: "p", text: "It develops slowly through sustained exposure to deep problems and rigorous discussion. Astra's entire curriculum is organized around this developmental arc." },
      { type: "p", text: "Everything else, exam readiness, competition performance, and confidence, emerges from it." }
    ]
  },
  {
    title: "Long-term training",
    content: [
      { type: "p", text: "Mathematics cannot be mastered in a semester. Astra is designed as a multi-year pathway because mathematical depth requires time." },
      { type: "p", text: "Students revisit ideas across grade levels, encountering them with increasing sophistication. Number theory concepts introduced in Foundations return with greater depth in Explorers. Geometric intuition developed early gradually evolves into formal proof construction." },
      { type: "p", text: "This spiral structure is deliberate and essential." }
    ]
  },
  {
    title: "Exam readiness as a consequence",
    content: [
      { type: "p", text: "Astra does not organize its training around exams. It organizes around mathematical structure." },
      { type: "p", text: "Students who develop genuine mathematical maturity naturally perform well in competitions because competitions, at their best, test exactly the kind of thinking Astra builds. AMC, IOQM, AIME, RMO, UKMT, and BMO serve as natural benchmarks for Astra students, not artificial targets." },
      { type: "p", text: "Exam readiness is a consequence of deep training. It is never the goal." }
    ]
  },
  {
    title: "",
    content: "Astra exists to develop young minds that think deeply, reason precisely, and carry the quiet confidence that comes from genuine understanding.",
  },
];

const Philosophy = () => {
  return (
    <Layout>
      <section className="bg-navy section-padding pt-24 md:pt-32">
        <div className="container-astra">
          <h1 className="font-heading text-3xl md:text-4xl text-cream font-semibold mb-6">
            Philosophy
          </h1>
          <p className="text-cream/70 text-sm md:text-base max-w-2xl">
            The principles that shape how Astra teaches, and why.
          </p>
        </div>
      </section>

      {sections.map((section, i) => (
        <div key={i}>
          <div className="gold-divider" />
          <section className={i % 2 === 0 ? "light-section bg-cream section-padding" : "bg-navy section-padding"}>
            <div className="container-astra">
              {section.title && (
                <h2 className={`font-heading text-2xl md:text-3xl mb-6 ${i % 2 === 0 ? "text-foreground" : "text-cream"}`}>
                  {section.title}
                </h2>
              )}
              {Array.isArray(section.content) ? (
                <div className="space-y-4">
                  {section.content.map((block, idx) => {
                    const isStr = typeof block === "string";
                    const isP = !isStr && block.type === "p";
                    const isLi = !isStr && block.type === "li";

                    if (isStr || isP) {
                      return (
                        <p key={idx} className={`text-base leading-relaxed max-w-2xl ${i % 2 === 0 ? "text-foreground/60" : "text-cream/70"}`}>
                          {isStr ? block : block.text}
                        </p>
                      );
                    }

                    if (isLi) {
                      return (
                        <div key={idx} className={`text-base max-w-2xl space-y-3 ${i % 2 === 0 ? "text-foreground/60" : "text-cream/70"}`}>
                          <div className="flex items-start gap-3">
                            <span className="text-gold mt-1.5 text-xs">●</span>
                            <span className="leading-relaxed">{block.text}</span>
                          </div>
                          {(block as any).sublist && (
                            <ul className="pl-6 space-y-3 mt-3">
                              {(block as any).sublist.map((sub: string, j: number) => (
                                <li key={j} className="flex items-start gap-3">
                                  <span className="text-gold mt-1.5 text-[10px]">○</span>
                                  <span className="leading-relaxed">{sub}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    }

                    return null;
                  })}
                </div>
              ) : (
                <p className={`text-base leading-relaxed max-w-2xl italic ${i % 2 === 0 ? "text-foreground/60" : "text-cream/70"}`}>
                  {section.content}
                </p>
              )}
            </div>
          </section>
        </div>
      ))}
    </Layout>
  );
};

export default Philosophy;
