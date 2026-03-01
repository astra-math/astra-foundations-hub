import Layout from "@/components/Layout";

const sections = [
  {
    title: "What is a Math Circle",
    content:
      "A Math Circle is not a tutoring service. It is not a coaching class. It is not exam preparation. A Math Circle is a structured, long-term intellectual environment where students learn to think mathematically — to question, conjecture, struggle, prove, and understand. The tradition originates from Eastern European mathematical culture and has been adopted by leading institutions worldwide. Astra is built on this tradition.",
  },
  {
    title: "Problem first, theory later",
    content:
      "In a conventional classroom, theory is delivered first and problems follow as exercises. At Astra, this sequence is reversed. Students encounter carefully chosen problems before any formal instruction. They wrestle with ideas, develop intuition, and form conjectures. Theory is introduced only when students have earned the need for it — when formalization becomes the natural next step after genuine exploration.",
  },
  {
    title: "The role of struggle",
    content:
      "Mathematical growth does not happen in comfort. It happens when a student sits with a problem they cannot immediately solve — and persists. At Astra, struggle is not a failure of teaching. It is the teaching. Mentors do not rescue students from difficulty. They create conditions where productive struggle leads to insight. Every breakthrough that follows genuine effort builds a kind of mathematical confidence that no shortcut can replicate.",
  },
  {
    title: "Structured participation",
    content:
      "Astra sessions are not lectures. They are structured around dialogue, questioning, and collaborative reasoning. Students present their attempts, defend their logic, and critique each other's arguments — respectfully and rigorously. The mentor guides but does not dominate. This format builds not just mathematical knowledge but the ability to communicate mathematically — a skill essential for competitions, research, and advanced study.",
  },
  {
    title: "Mathematical maturity",
    content:
      "Mathematical maturity is the ability to think precisely, reason abstractly, construct arguments, and recognize structure across domains. It is not measured by speed or by how many problems a student can solve. It develops slowly, over years, through sustained exposure to deep problems and rigorous discussion. Astra's entire curriculum is organized around this developmental arc. Everything else — exam readiness, competition performance, confidence — follows from it.",
  },
  {
    title: "Long-term training",
    content:
      "Mathematics cannot be mastered in a semester. Astra is designed as a multi-year pathway because mathematical depth requires time. Students revisit ideas across grade levels, encountering them with increasing sophistication. Number theory concepts seen in Foundations reappear with new depth in Explorers. Geometric intuition built early matures into formal proof construction later. This spiral structure is deliberate and essential.",
  },
  {
    title: "Exam readiness as a consequence",
    content:
      "Astra does not organize its training around exams. It organizes around mathematical structure. But students who develop genuine mathematical maturity perform well in competitions — because competitions, at their best, test exactly the kind of thinking Astra builds. AMC, IOQM, AIME, RMO — these are natural benchmarks for Astra students, not artificial targets. Exam readiness is a consequence of deep training. It is never the goal.",
  },
  {
    title: "In one sentence",
    content:
      "Astra exists to develop young mathematicians who think deeply, reason precisely, and carry a quiet confidence born from genuine understanding.",
  },
];

const Philosophy = () => {
  return (
    <Layout>
      <section className="bg-navy section-padding pt-24 md:pt-32">
        <div className="container-astra">
          <h1 className="font-heading text-4xl md:text-5xl text-cream font-semibold mb-6">
            Philosophy
          </h1>
          <p className="text-cream/50 text-base max-w-2xl">
            The principles that shape how Astra teaches, and why.
          </p>
        </div>
      </section>

      {sections.map((section, i) => (
        <div key={section.title}>
          <div className="gold-divider" />
          <section className={i % 2 === 0 ? "light-section bg-cream section-padding" : "bg-navy section-padding"}>
            <div className="container-astra">
              <h2 className={`font-heading text-2xl md:text-3xl mb-6 ${i % 2 === 0 ? "text-foreground" : "text-cream"}`}>
                {section.title}
              </h2>
              <p className={`text-base leading-relaxed max-w-2xl ${i % 2 === 0 ? "text-foreground/60" : "text-cream/50"}`}>
                {section.content}
              </p>
            </div>
          </section>
        </div>
      ))}
    </Layout>
  );
};

export default Philosophy;
