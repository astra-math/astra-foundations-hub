import Layout from "@/components/Layout";

type FAQItem = {
  type: "p" | "list";
  content: string | string[];
};

const faqs = [
  {
    q: "Is Astra tuition?",
    a: [
      { type: "p", content: "No. Astra is a Math Circle, a structured intellectual environment for developing mathematical thinking. It does not follow school syllabi, provide homework help, or deliver topic-by-topic instruction. Instead, it develops mathematical maturity through deep problems and structured discussion." }
    ]
  },
  {
    q: "Is Astra Olympiad coaching?",
    a: [
      { type: "p", content: "Astra is not a coaching institute. However, its curriculum is structurally aligned with competitive mathematics pathways such as AMC, IOQM, UKMT, Australian Mathematics Competition, AIME, RMO, and BMO. Students who develop genuine mathematical maturity through Astra are naturally well prepared for these examinations." }
    ]
  },
  {
    q: "What happens if a student cannot solve the problem?",
    a: [
      { type: "p", content: "In a Math Circle, not solving a problem immediately is normal and expected." },
      { type: "p", content: "Students are encouraged to explore ideas, test small cases, and discuss different approaches with peers. Many important insights emerge from attempts that do not work the first time." },
      { type: "p", content: "The goal of a session is not simply to reach the answer, but to understand the structure of the problem and the reasoning behind the solution." },
      { type: "p", content: "Over time, students become more comfortable engaging with difficult problems and develop the confidence to persist through uncertainty." }
    ]
  },
  {
    q: "What if my child is shy?",
    a: [
      { type: "p", content: "Structured participation is built into every session." },
      { type: "p", content: "Students are gradually encouraged to articulate their reasoning in a respectful and disciplined environment." },
      { type: "p", content: "Participation expectations are clear from the beginning, but students are given time to build confidence and comfort within the circle." }
    ]
  },
  {
    q: "Is Astra suitable for every student?",
    a: [
      { type: "p", content: "Astra is designed for students who are genuinely curious about mathematics and willing to engage with challenging problems over a sustained period." },
      { type: "p", content: "It requires patience, persistence, and a willingness to struggle." },
      { type: "p", content: "Students looking for quick results or exam-focused drilling may find other programs more suitable." }
    ]
  },
  {
    q: "My child is good at school mathematics but not exceptional. Is Astra still suitable?",
    a: [
      { type: "p", content: "Yes. Astra is designed for students who are curious about mathematics and willing to think patiently about challenging problems. Exceptional speed or prior Olympiad experience is not required. Many students who begin Astra have only encountered school mathematics. What matters more is curiosity, persistence, and openness to exploring unfamiliar ideas. Over time, students who enjoy this style of thinking develop stronger problem-solving ability and deeper mathematical confidence." }
    ]
  },
  {
    q: "How selective is Astra?",
    a: [
      { type: "p", content: "Astra is designed for students who enjoy thinking deeply about mathematics. Not every student who attends the Discovery Session will necessarily be placed into a circle immediately." },
      { type: "p", content: "Placement depends on curiosity, persistence, and readiness for the style of exploration used in Math Circle sessions." },
      { type: "p", content: "Students who need more preparation may be advised to reapply after some time." }
    ]
  },
  {
    q: "How large are the circles?",
    a: [
      { type: "p", content: "Each Astra Circle is intentionally small." },
      { type: "p", content: "Circles typically include 10 to 12 students, allowing for meaningful discussion, individual attention, and active participation." },
      { type: "p", content: "This format ensures that every student has the opportunity to explore ideas, present reasoning, and engage deeply with the problems." }
    ]
  },
  {
    q: "How are students placed?",
    a: [
      { type: "p", content: "All students begin with a Discovery Session." },
      { type: "p", content: "Based on session participation and a brief follow-up assessment, students are placed into the appropriate circle. Placement reflects structural readiness rather than grade level alone." }
    ]
  },
  {
    q: "Is progression automatic?",
    a: [
      { type: "p", content: "No. Progression through the circles, Foundations, Explorers, Olympiad, and Advanced, depends on demonstrated structural readiness rather than age or time spent." },
      { type: "p", content: "Mentors assess readiness based on sustained performance, mathematical reasoning, and engagement quality." }
    ]
  },
  {
    q: "What is the Advanced Circle?",
    a: [
      { type: "p", content: "The Advanced Circle is an invitation-only program for students who have demonstrated sustained structural maturity through the Olympiad Circle." },
      { type: "p", content: "It is aligned with RMO, INMO, AIME, US(J)MO, BMO1 and BMO2 qualification stages. The circle is intentionally small, selective, and performance tracked." }
    ]
  },
  {
    q: "How does Astra support exam readiness?",
    a: [
      { type: "p", content: "Core Math Circle training builds the structural understanding that competitions test." },
      { type: "p", content: "In addition, Astra offers short-term Exam Readiness Bootcamps for IOQM, AMC 8, and AMC 10/12. These supplement the foundational training with exam-specific practice and strategy." }
    ]
  },
  {
    q: "What are bootcamps?",
    a: [
      { type: "p", content: "Bootcamps are short-term focused modules designed to refine exam-specific skills." },
      { type: "p", content: "They are available for IOQM, AMC 8, and AMC 10/12. Bootcamps supplement the core Math Circle training. They do not replace it." }
    ]
  },
  {
    q: "Will this help school mathematics?",
    a: [
      { type: "p", content: "Astra develops deep mathematical thinking, which naturally strengthens a student's ability to handle school mathematics with greater clarity and confidence." },
      { type: "p", content: "However, Astra does not teach school syllabi or prepare students directly for school examinations." }
    ]
  },
  {
    q: "How much time should students expect to spend outside sessions?",
    a: [
      { type: "p", content: "Students are encouraged to spend time thinking about problems between sessions." },
      { type: "p", content: "Some problems may take several days of reflection before insight emerges. This slow thinking is an important part of mathematical development." },
      { type: "p", content: "However, Astra does not assign routine homework or worksheets. The focus is on depth of thought rather than volume of practice." }
    ]
  },
  {
    q: "Why does Astra require a Discovery Session before enrollment?",
    a: [
      { type: "p", content: "The session allows students and parents to experience the Math Circle format before committing to a longer program. It also helps mentors understand how a student approaches unfamiliar problems." },
      { type: "p", content: "This ensures that students are placed in the circle where they will learn most effectively." }
    ]
  },
  {
    q: "Who designs the problems used in Astra sessions?",
    a: [
      { type: "p", content: "Problems used in Astra sessions are carefully selected and curated by the academic team. They draw from classical mathematical sources, Olympiad problem traditions, and original adaptations designed specifically for Math Circle discussion." },
      { type: "p", content: "Each problem is chosen for its ability to reveal important mathematical ideas through exploration and discussion rather than routine techniques." }
    ]
  }
];

const FAQ = () => {
  return (
    <Layout>
      <section className="bg-navy section-padding pt-24 md:pt-32">
        <div className="container-astra">
          <h1 className="font-heading text-3xl md:text-4xl text-cream font-semibold mb-6">
            Frequently asked questions
          </h1>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="light-section bg-cream section-padding">
        <div className="container-astra max-w-4xl">
          <div className="space-y-12">
            {faqs.map((faq, i) => (
              <div key={faq.q}>
                <h2 className="font-heading text-xl text-foreground font-semibold mb-4">
                  {i + 1}. {faq.q}
                </h2>
                <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                  {faq.a.map((item, idx) => {
                    if (item.type === "p") {
                      return <p key={idx}>{item.content as string}</p>;
                    } else if (item.type === "list") {
                      return (
                        <ul key={idx} className="space-y-2 py-1 pl-2 text-base">
                          {(item.content as unknown as string[]).map((liItem, liIdx) => (
                            <li key={liIdx} className="flex items-start gap-3">
                              <span className="text-gold mt-1.5 text-xs">●</span>
                              <span>{liItem}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
