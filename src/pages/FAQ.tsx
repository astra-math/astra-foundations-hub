import Layout from "@/components/Layout";

const faqs = [
  {
    q: "Is Astra tuition?",
    a: "No. Astra is a Math Circle — a structured intellectual environment for developing mathematical thinking. It does not follow school syllabi, provide homework help, or deliver topic-by-topic instruction. It builds mathematical maturity through deep problems and structured discussion.",
  },
  {
    q: "Is Astra Olympiad coaching?",
    a: "Astra is not a coaching institute. However, its curriculum is structurally aligned to competitive mathematics pathways including AMC, IOQM, AIME, and RMO. Students who develop genuine mathematical maturity through Astra are well-prepared for these examinations.",
  },
  {
    q: "How does Astra support exam readiness?",
    a: "Core Math Circle training builds the structural understanding that exams test. In addition, Astra offers short-term Exam Readiness Bootcamps for IOQM, AMC 8, and AMC 10/12 that supplement the foundational training with exam-specific practice and strategy.",
  },
  {
    q: "What are bootcamps?",
    a: "Bootcamps are short-term, focused modules designed to refine exam-specific skills. They are available for IOQM, AMC 8, and AMC 10/12. Bootcamps supplement — not replace — the core Math Circle training.",
  },
  {
    q: "What is the Advanced Circle?",
    a: "The Advanced Circle is an invitation-only program for students who have demonstrated sustained structural maturity through the Olympiad Circle. It is aligned to RMO, AIME, INMO, and US(J)MO qualification stages. It is small, selective, and performance-tracked.",
  },
  {
    q: "Is progression automatic?",
    a: "No. Progression through the circles — Foundations, Explorers, Olympiad, Advanced — depends on demonstrated structural readiness, not age or time spent. Mentors assess readiness based on sustained performance, mathematical reasoning, and engagement quality.",
  },
  {
    q: "How are students placed?",
    a: "All students begin with a workshop. Based on workshop participation and a brief follow-up assessment, students are placed into the appropriate circle. Placement reflects structural readiness, not grade level alone.",
  },
  {
    q: "Will this help school mathematics?",
    a: "Astra's training develops deep mathematical thinking, which naturally strengthens a student's ability to handle school-level mathematics with greater clarity and confidence. However, Astra does not teach school syllabi or prepare students for school exams directly.",
  },
  {
    q: "Is Astra suitable for every student?",
    a: "Astra is designed for students who are genuinely curious about mathematics and willing to engage with challenging problems over a sustained period. It requires patience, persistence, and a willingness to struggle. Students looking for quick results or exam-focused drilling may find other programs more suitable.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <section className="bg-navy section-padding pt-24 md:pt-32">
        <div className="container-astra">
          <h1 className="font-heading text-4xl md:text-5xl text-cream font-semibold mb-6">
            Frequently asked questions
          </h1>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="light-section bg-cream section-padding">
        <div className="container-astra max-w-2xl">
          <div className="space-y-12">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h2 className="font-heading text-lg text-foreground font-semibold mb-3">
                  {faq.q}
                </h2>
                <p className="text-foreground/60 text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
