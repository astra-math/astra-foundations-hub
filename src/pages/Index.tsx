import Layout from "@/components/Layout";
import GeometricPattern from "@/components/GeometricPattern";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy relative section-padding pt-24 md:pt-32">
        <GeometricPattern variant="hero" />
        <div className="container-astra relative z-10">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream font-semibold mb-6 leading-tight">
            Astra Math Circle
          </h1>
          <p className="text-gold text-lg md:text-xl font-heading mb-6">
            Where curiosity becomes mastery.
          </p>
          <p className="text-cream/70 text-base md:text-lg leading-relaxed max-w-2xl mb-4">
            A modern Math Circle for ambitious young thinkers.
          </p>
          <p className="text-cream/50 text-base leading-relaxed max-w-2xl mb-10">
            Inspired by global math circle traditions and competitive mathematics pathways, Astra brings together small mentor-led cohorts, problem-first pedagogy, and long-term structural training for motivated students in Grades 5–10.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="gold" size="lg" asChild>
              <Link to="/programs">Explore programs</Link>
            </Button>
            <Button variant="outline-gold" size="lg" asChild>
              <Link to="/workshops">Register for workshop</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Math Circle Approach */}
      <section className="light-section bg-cream section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
            The Math Circle approach
          </h2>
          <div className="space-y-4 text-foreground/70 text-base leading-relaxed max-w-2xl">
            <p>
              A Math Circle is not tuition. It is not syllabus delivery. It is not drill-based coaching.
            </p>
            <p>
              It is a disciplined intellectual environment designed to develop mathematical maturity over years.
            </p>
            <ul className="space-y-3 mt-6 list-none">
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1.5 text-xs">●</span>
                <span>Problems precede methods. Students attempt independently before guidance.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1.5 text-xs">●</span>
                <span>Structure emerges through discussion. Formalization follows insight.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1.5 text-xs">●</span>
                <span>We train thinking first. Performance follows as a consequence.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* What Makes Astra Different */}
      <section className="bg-navy section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-3xl md:text-4xl text-cream mb-12">
            What makes Astra different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Problem-first pedagogy",
                desc: "Students encounter problems before theory. Understanding is earned through struggle, not delivered through instruction.",
              },
              {
                title: "Structural curriculum",
                desc: "Number Theory, Algebra, Geometry, and Combinatorics — organized for depth, not coverage.",
              },
              {
                title: "Small intellectual cohorts",
                desc: "10–12 students per cohort. Every student is seen, challenged, and supported.",
              },
              {
                title: "Long-term development",
                desc: "A multi-year pathway that builds mathematical maturity. Not a crash course.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="border border-gold/20 rounded p-8"
              >
                <h3 className="font-heading text-lg text-cream font-semibold mb-3">
                  {card.title}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* The Three Circles */}
      <section className="light-section bg-cream section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-12">
            The three circles
          </h2>
          <div className="space-y-8">
            {[
              {
                name: "Foundations",
                grades: "Grades 5–7",
                align: "AMC 8 alignment",
              },
              {
                name: "Explorers",
                grades: "Grades 7–9",
                align: "AMC 10, IOQM alignment",
              },
              {
                name: "Olympiad",
                grades: "Grades 8–10",
                align: "AMC 10/12, IOQM, AIME alignment",
              },
            ].map((circle) => (
              <div
                key={circle.name}
                className="border-l-2 border-gold/40 pl-6"
              >
                <h3 className="font-heading text-xl text-foreground font-semibold">
                  {circle.name}
                </h3>
                <p className="text-foreground/50 text-sm mt-1">
                  {circle.grades} · {circle.align}
                </p>
              </div>
            ))}
          </div>
          <p className="text-foreground/40 text-sm mt-10 max-w-2xl">
            Students demonstrating sustained structural maturity may be invited to advanced preparation aligned with RMO and AIME qualification stages.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      {/* From Structure to Exam Readiness */}
      <section className="bg-navy section-padding">
        <div className="container-astra text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-cream mb-14">
            From structure to exam readiness
          </h2>
          <div className="flex flex-col items-center gap-4">
            {["Math Circle training", "Structural maturity", "Exam readiness"].map(
              (step, i) => (
                <div key={step} className="flex flex-col items-center">
                  <span className="font-heading text-cream text-lg">{step}</span>
                  {i < 2 && (
                    <span className="text-gold/50 text-2xl my-2">↓</span>
                  )}
                </div>
              )
            )}
          </div>
          <p className="text-cream/40 text-sm mt-10 max-w-xl mx-auto">
            Core training remains foundational. Exams are a consequence, not the organizing principle.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Workshops */}
      <section className="light-section bg-cream section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
            Workshops
          </h2>
          <p className="text-foreground/60 text-base leading-relaxed max-w-2xl mb-8">
            Workshops allow families to experience the Astra format before committing to a year-long program.
          </p>
          <ul className="space-y-3 mb-10 max-w-xl">
            {[
              "Anchor problems",
              "Independent reasoning",
              "Structured discussion",
              "Mentor-guided formalization",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground/60 text-sm">
                <span className="text-gold mt-1 text-xs">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button variant="gold-on-light" size="lg" asChild>
            <Link to="/workshops">Register for an upcoming workshop</Link>
          </Button>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Workshop Reflections */}
      <section className="bg-navy section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-3xl md:text-4xl text-cream mb-12">
            Workshop reflections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <blockquote className="border-l border-gold/30 pl-6">
              <p className="text-cream/60 text-base italic leading-relaxed mb-4">
                "The workshop changed how my son thinks about math. It wasn't about finding answers — it was about building understanding from the ground up."
              </p>
              <cite className="text-cream/30 text-sm not-italic">— Parent, Foundations workshop</cite>
            </blockquote>
            <blockquote className="border-l border-gold/30 pl-6">
              <p className="text-cream/60 text-base italic leading-relaxed mb-4">
                "For the first time, my daughter was excited about being stuck on a problem. That alone told me this was different."
              </p>
              <cite className="text-cream/30 text-sm not-italic">— Parent, Explorers workshop</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
