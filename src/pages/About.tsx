import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <section className="bg-navy section-padding pt-24 md:pt-32">
        <div className="container-astra">
          <h1 className="font-heading text-4xl md:text-5xl text-cream font-semibold mb-6">
            About Astra Math Circle
          </h1>
          <p className="text-cream/50 text-base leading-relaxed max-w-2xl">
            Astra is a modern Math Circle built for students who want to think deeply about mathematics — not simply perform well on tests.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="light-section bg-cream section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6">
            Why Astra was created
          </h2>
          <p className="text-foreground/60 text-base leading-relaxed max-w-2xl mb-4">
            Most mathematics education in India — and globally — is built around syllabus coverage and exam performance. Students learn to replicate procedures, not to reason independently. The result is a generation of students who can solve familiar problems quickly but cannot navigate unfamiliar territory.
          </p>
          <p className="text-foreground/60 text-base leading-relaxed max-w-2xl">
            Astra was created to address this gap. Drawing from the math circle traditions of Russia, Hungary, and the United States, Astra provides a structured environment where mathematical thinking is developed deliberately and patiently over years.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="bg-navy section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-2xl md:text-3xl text-cream mb-6">
            What Astra is — and is not
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
            <div>
              <h3 className="font-heading text-lg text-gold mb-4">Astra is</h3>
              <ul className="space-y-3 text-cream/50 text-sm">
                {[
                  "A Math Circle in the classical tradition",
                  "Mentor-led, small-group, discussion-based",
                  "Organized around depth and maturity",
                  "A multi-year developmental pathway",
                  "Aligned to competitive mathematics as a benchmark",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold mt-1 text-xs">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-lg text-cream/40 mb-4">Astra is not</h3>
              <ul className="space-y-3 text-cream/30 text-sm">
                {[
                  "A coaching institute",
                  "A tutoring or homework help service",
                  "An exam preparation factory",
                  "A short-term crash course",
                  "A platform promising ranks or results",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-cream/20 mt-1 text-xs">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="light-section bg-cream section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6">
            The institutional vision
          </h2>
          <p className="text-foreground/60 text-base leading-relaxed max-w-2xl mb-4">
            Astra aspires to be India's most respected Math Circle institution — not the largest, not the loudest, but the most structurally serious. Our goal is to build a pipeline of students who are genuinely prepared for Olympiad-level mathematics and, more importantly, for a lifetime of mathematical thinking.
          </p>
          <p className="text-foreground/60 text-base leading-relaxed max-w-2xl">
            We measure success not in enrollment numbers but in the depth of understanding our students develop over years.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="bg-navy section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-2xl md:text-3xl text-cream mb-2">
            Chief Academic Mentor
          </h2>
          <p className="text-gold/70 text-lg font-heading mb-6">Vishnu</p>
          <p className="text-cream/50 text-base leading-relaxed max-w-2xl mb-4">
            Vishnu leads the academic direction of Astra Math Circle. His approach to mathematical education emphasizes structural understanding, patient development, and intellectual honesty. He believes that mathematics is best learned through sustained engagement with deep problems — not through shortcuts or formulaic instruction.
          </p>
          <p className="text-cream/40 text-sm max-w-2xl">
            Under his mentorship, Astra's curriculum and pedagogy reflect the traditions of the world's most respected math circles, adapted thoughtfully for Indian students.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="light-section bg-cream section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6">
            A quiet commitment
          </h2>
          <p className="text-foreground/60 text-base leading-relaxed max-w-2xl">
            Astra does not promise quick results. It does not guarantee ranks. It does not use urgency or scarcity to drive enrollment. What it offers is a serious, structured, intellectually honest environment where young mathematicians can grow — patiently, deeply, and with genuine care. That is our commitment.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
