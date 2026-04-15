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
          <h1 className="font-heading text-4xl md:text-5xl text-cream font-semibold mb-6 leading-tight">
            Astra Math Circle
          </h1>
          <p className="text-gold text-lg md:text-xl font-sans mb-6">
            Where curiosity becomes mastery.
          </p>
          <p className="text-cream/70 text-base md:text-lg leading-relaxed max-w-2xl mb-4">
            A modern Math Circle for ambitious young thinkers.
          </p>
          <p className="text-cream/70 text-base leading-relaxed max-w-2xl mb-10">
            Inspired by global math circle traditions and competitive mathematics pathways, Astra brings together small mentor-led cohorts, problem-first pedagogy, and long-term structural training for motivated students in Grades 5–10.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="gold" size="lg" asChild>
              <Link to="/programs">Explore programs</Link>
            </Button>
            <Button variant="outline-gold" size="lg" asChild>
              <Link to="/registration">Register for Discovery Sessions</Link>
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
          <div className="space-y-4 text-foreground/70 text-base leading-relaxed max-w-3xl">
            <div className="space-y-4 max-w-2xl">
              <p>
                Math Circles began in Eastern Europe in the early 20th century, where mathematicians gathered small groups of curious students to explore problems the way research mathematics works: without a predetermined answer, without shortcuts, and without the pressure of performance. That tradition produced some of the finest mathematical minds of the last century. It is the same tradition Astra is built on.
              </p>
              <p>
                A Math Circle is not tuition, syllabus delivery, or drill-based coaching. It is a disciplined intellectual environment designed to develop mathematical maturity over years, focused on three core pillars:
              </p>
            </div>

            <ul className="space-y-4 list-none max-w-2xl">
              {[
                "Problems precede methods. Students attempt independently before guidance.",
                "Structure emerges through discussion. Formalization follows insight.",
                "We train thinking first. Performance follows as a consequence.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-gold mt-1.5 text-xs">●</span>
                  <span className="text-foreground/70">{item}</span>
                </li>
              ))}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {[
              {
                title: "Problem-first pedagogy",
                description: "Students encounter problems before methods. Insight precedes formalization.",
              },
              {
                title: "Structural curriculum",
                description: "Number Theory, Algebra, Geometry, Combinatorics — built for depth across domains.",
              },
              {
                title: "Small intellectual cohorts",
                description: "10–12 students per cohort. Every voice matters in structured discussion.",
              },
              {
                title: "Long-term development",
                description: "A multi-year pathway building mathematical maturity progressively.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="border border-gold/20 rounded-lg p-8 flex flex-col h-full text-left bg-white/[0.02]"
              >
                <h3 className="font-heading text-lg text-cream font-semibold mb-4">
                  {card.title}
                </h3>
                <p className="text-cream/70 text-sm leading-relaxed flex-grow">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* The Circles */}
      <section className="light-section bg-cream section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            The Circles
          </h2>
          <p className="text-foreground/70 text-base md:text-lg mb-12 max-w-2xl leading-relaxed">
            Four circles, placed by readiness, not grade. Every student undergoes an interactive discovery session before joining.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {[
              {
                name: "Foundations Circle",
                grades: "Grades 5–7",
                description: "Builds the habit of thinking before being shown. Pattern recognition, logical clarity, and early reasoning discipline.",
                benchmark: "Benchmark: AMC 8, UKMT Junior."
              },
              {
                name: "Explorers Circle",
                grades: "Grades 7–9",
                description: "From single-step answers to multi-step reasoning. Strategy selection, casework discipline, and learning to re-enter a problem after failure.",
                benchmark: "Benchmark: AMC 10, IOQM, UKMT Intermediate."
              },
              {
                name: "Olympiad Circle",
                grades: "Grades 8–10",
                description: "From solving problems to constructing arguments. Number theory, algebra, combinatorics, geometry, and early proof writing.",
                benchmark: "Benchmark: AMC 10/12, IOQM, UKMT Senior."
              },
              {
                name: "Advanced Circle",
                grades: "Invitation only",
                description: "For students already performing at national competition level. Proof-driven, individually paced, mentor-led.",
                benchmark: "RMO, AIME, INMO, BMO1/BMO2, US(J)MO."
              },
            ].map((circle) => (
              <div
                key={circle.name}
                className="border border-gold/20 bg-white rounded-lg p-6 flex flex-col h-full shadow-sm"
              >
                <div className="mb-4">
                  <h3 className="font-heading text-xl text-foreground font-semibold leading-tight">
                    {circle.name}
                  </h3>
                  <p className="text-gold text-sm mt-1">{"· " + circle.grades}</p>
                </div>
                <div className="flex flex-col flex-grow">
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    {circle.description}
                  </p>
                  <p className="text-foreground/90 text-xs mt-auto pt-2 border-t border-gold/10">
                    {circle.benchmark}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
          <p className="text-cream/70 text-sm mt-10 max-w-xl mx-auto">
            Core training remains foundational. Exams are a consequence, not the organizing principle.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Discovery Sessions */}
      <section className="light-section bg-cream section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
            Discovery Sessions
          </h2>
          <div className="space-y-4 text-foreground/70 text-base leading-relaxed max-w-2xl mb-8">
            <p>
              Free Discovery Sessions are the entry point into Astra. Enrollment into any program follows from attending one.
            </p>
            <p>
              Each session is a complete mathematical experience: an anchor problem, independent reasoning, structured discussion, and mentor-guided formalization. No preparation required. No prior exposure to olympiad mathematics assumed.
            </p>
            <p className="text-gold">
              Attendance is free of cost.
            </p>
          </div>


          <Button variant="gold-on-light" size="lg" asChild>
            <Link to="/registration">Register for Discovery Sessions</Link>
          </Button>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Workshop Reflections */}
      <section className="bg-navy section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-3xl md:text-4xl text-cream mb-12">
            Discovery Session reflections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <blockquote className="border-l border-gold/30 pl-6 flex flex-col justify-between">
              <p className="text-cream/70 text-base italic leading-relaxed mb-4">
                "I really enjoyed the math Discovery Session. The topic was interesting and made me think in new ways. The activities were fun, and I liked trying different ways to solve the problems. It didn't feel like a regular class, and I had a great time learning something new."
              </p>
              <cite className="text-cream text-sm not-italic mt-auto block">— Anushka, G6 student, Inventure Academy, Bangalore</cite>
            </blockquote>
            <blockquote className="border-l border-gold/30 pl-6 flex flex-col justify-between">
              <p className="text-cream/70 text-base italic leading-relaxed mb-4">
                "The Discovery Session opened up a completely new way of thinking about mathematics for my child."
              </p>
              <cite className="text-cream text-sm not-italic mt-auto block">— Ketaki, Mother of a G5 student, Phoenix Greens, Hyderabad</cite>
            </blockquote>
            <blockquote className="border-l border-gold/30 pl-6 flex flex-col justify-between">
              <p className="text-cream/70 text-base italic leading-relaxed mb-4">
                "As a parent, I feel these are the right classes for her. They can help her become better at maths and overcome the challenges she previously faced."
              </p>
              <cite className="text-cream text-sm not-italic mt-auto block">— Sudhanshu, Father of a G7 student, The Knowledge Habitat, Gurugram</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
