import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <section className="bg-navy section-padding pt-24 md:pt-32">
        <div className="container-astra">
          <h1 className="font-heading text-3xl md:text-4xl text-cream font-semibold mb-6">
            About Astra Math Circle
          </h1>
          <div className="space-y-4 text-cream/70 text-sm md:text-base leading-relaxed max-w-2xl">
            <p>
              Astra is a modern Math Circle built for students who want to think deeply about mathematics, not simply perform well on tests.
            </p>
            <p>
              It provides an environment where students explore challenging problems, discuss ideas openly, and gradually develop the habits of mathematical thinking.
            </p>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="light-section bg-cream section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
            Why Astra was created
          </h2>
          <div className="space-y-4 text-foreground/70 text-sm md:text-base leading-relaxed max-w-2xl">
            <p>
              Most mathematics education in India and around the world is organized around syllabus coverage and exam performance. Students learn to replicate procedures rather than reason independently. As a result, many students can solve familiar problems quickly but struggle when faced with unfamiliar ones.
            </p>
            <p>
              Astra was created to address this gap. Inspired by the Math Circle traditions of Russia, Hungary, and the United States, Astra provides a structured environment where mathematical thinking is developed deliberately and patiently over years.
            </p>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="bg-navy section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-3xl md:text-4xl text-cream mb-12">
            What Astra is, and is not
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mb-8">
            <div>
              <h3 className="font-heading text-2xl text-gold mb-4">Astra is</h3>
              <ul className="space-y-3 text-cream/70 text-sm md:text-base leading-relaxed">
                {[
                  "A Math Circle in the classical tradition",
                  "Mentor-led, small-group, discussion-based",
                  "Organized around depth and mathematical maturity",
                  "A multi-year developmental pathway",
                  "Aligned with competitive mathematics as a benchmark",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold mt-1.5 text-xs">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-2xl text-cream/70 mb-4">Astra is not</h3>
              <ul className="space-y-3 text-cream/70 text-sm md:text-base leading-relaxed">
                {[
                  "A coaching institute",
                  "A tutoring or homework help service",
                  "An exam preparation factory",
                  "A short-term crash course",
                  "A platform that promises ranks or results",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold/50 mt-1.5 text-xs">●</span>
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
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-12">
            Chief Academic Mentor
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start max-w-4xl">
            <div className="w-full md:w-1/3">
              <div className="aspect-[4/5] bg-navy/5 rounded-lg overflow-hidden border border-gold/30 flex items-center justify-center relative">
                <img src="/mentor.jpg.jpeg" alt="Vishnu" className="w-full h-full object-cover relative z-20" />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-gold font-heading text-3xl md:text-3xl mb-4">Vishnu</h3>
              <div className="space-y-4 text-foreground/70 text-sm md:text-base leading-relaxed">
                <p>
                  Vishnu leads curriculum design, pedagogy, and mentor development at Astra Math Circle.
                </p>
                <p>
                  A self-taught mathematician and former Super 30 scholar, he has spent over a decade mentoring students in advanced problem solving and competitive mathematics pathways.
                </p>
                <p>
                  His approach is rooted in structural training rather than exam drilling.
                </p>
                <p>
                  At Astra, academic rigor, disciplined discussion, and long-term development form the core of every circle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="bg-navy section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-3xl md:text-4xl text-cream mb-12">
            A quiet commitment
          </h2>
          <div className="space-y-4 text-cream/70 text-sm md:text-base leading-relaxed max-w-2xl">
            <p>
              Astra does not promise quick results. It does not guarantee ranks. It does not rely on urgency or scarcity to drive enrollment.
            </p>
            <p>
              What it offers instead is a serious, structured, intellectually honest environment where young thinkers can grow patiently, deeply, and with genuine care.
            </p>
            <p>
              That is the commitment behind Astra.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
