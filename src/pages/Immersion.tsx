import Layout from "@/components/Layout";

const Immersion = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy section-padding pt-24 md:pt-32">
        <div className="container-astra">
          <h1 className="font-heading text-3xl md:text-4xl text-cream font-semibold mb-6">
            Mathematical Immersion Program
          </h1>

          <div className="space-y-4 text-cream/70 text-sm md:text-base leading-relaxed max-w-2xl">
            <p>A 4-week, 8-session introduction to deep mathematical thinking.</p>
            <p>
              The Mathematical Immersion Program is the entry pathway into Astra Math Circle.
            </p>
            <p>
              Students experience the Astra way of learning through carefully chosen problems,
              independent thinking, structured discussion, and mentor-led exploration.
            </p>
            <p>
              Students who resonate with the Astra approach may continue into the longer-term Astra
              circles and year-long program.
            </p>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Why This Program Exists */}
      <section className="light-section bg-cream section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
            Why This Program Exists
          </h2>

          <div className="space-y-4 text-foreground/70 text-sm md:text-base leading-relaxed max-w-2xl">
            <p>
              Many students are comfortable with school mathematics, but hesitate when faced with
              unfamiliar problems.
            </p>
            <p>This program helps students make that shift.</p>
            <p>
              Across four weeks, students learn how to stay with a problem, test ideas, explain
              reasoning clearly, and revise their thinking when an approach does not work.
            </p>
            <p>
              The goal is not to cover more mathematics. The goal is to build the habits required
              for serious mathematical learning.
            </p>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Who Should Attend */}
      <section className="bg-navy section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-3xl md:text-4xl text-cream mb-8">
            Who Should Attend
          </h2>

          <div className="space-y-4 text-cream/70 text-sm md:text-base leading-relaxed max-w-2xl">
            <p>
              The program is suitable for students in Grades 5–9 who are curious about mathematics
              and willing to engage with unfamiliar problems.
            </p>
            <p>Prior Olympiad experience is not required.</p>
            <p>
              Students should be open to thinking independently, explaining their ideas, listening
              to peers, and participating in a small-group learning environment.
            </p>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* What Students Experience */}
      <section className="light-section bg-cream section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
            What Students Experience
          </h2>

          <div className="space-y-4 text-foreground/70 text-sm md:text-base leading-relaxed max-w-2xl">
            <p>In each session, students begin with a problem, not a formula.</p>
            <p>
              They attempt independently before any solution is shown, explore possible approaches,
              discuss ideas with peers, and examine why certain methods work or fail.
            </p>
            <p>Mentors guide the discussion through questions rather than direct instruction.</p>
            <p>
              The emphasis is on reasoning, structure, and clarity of thought rather than speed or
              memorisation.
            </p>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* How Students Join */}
      <section className="bg-navy section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-3xl md:text-4xl text-cream mb-8">
            How Students Join
          </h2>

          <div className="space-y-4 text-cream/70 text-sm md:text-base leading-relaxed max-w-2xl">
            <p>Students begin with a Discovery Session before joining an immersion cohort.</p>
            <p>
              The Discovery Session allows students and families to experience the Astra learning
              model through a live mathematical exploration session.
            </p>
            <p>
              It also helps mentors understand the student’s current level of readiness and
              recommend whether the Mathematical Immersion Program is the appropriate next step.
            </p>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Program Structure */}
      <section className="light-section bg-cream section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-12">
            Program Structure
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {[
              ["Duration", "4 weeks"],
              ["Sessions", "8 live sessions"],
              ["Format", "Online, mentor-led"],
              ["Cohort Size", "Small groups"],
              ["Suitable For", "Grades 5–9"],
              ["Entry", "New cohorts planned regularly"],
            ].map(([title, value]) => (
              <div key={title} className="border-l border-gold/30 pl-6">
                <p className="text-foreground text-sm md:text-base mb-2">{title}</p>
                <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Program Outcomes */}
      <section className="bg-navy section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-3xl md:text-4xl text-cream mb-8">
            Program Outcomes
          </h2>

          <div className="space-y-4 text-cream/70 text-sm md:text-base leading-relaxed max-w-2xl">
            <p>By the end of the immersion, students typically develop:</p>

            <ul className="space-y-3 py-2">
              {[
                "Greater confidence in tackling unfamiliar problems",
                "Stronger reasoning and explanation skills",
                "Comfort with mathematical discussion",
                "Better ability to stay with difficult problems",
                "Early exposure to problem-first mathematical thinking",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-gold mt-1.5 text-xs">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Pathway After Immersion */}
      <section className="light-section bg-cream section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
            Pathway After Immersion
          </h2>

          <div className="space-y-4 text-foreground/70 text-sm md:text-base leading-relaxed max-w-2xl">
            <p>
              The Mathematical Immersion Program can be taken as a standalone intellectual
              experience.
            </p>
            <p>
              For students who wish to continue, mentors use participation across the 8 sessions to
              recommend the appropriate Astra Circle.
            </p>
            <p>
              Students may continue into the Foundations Circle, Explorers Circle, or Olympiad
              Circle depending on readiness.
            </p>
            <p>Placement is based on mathematical maturity and readiness, not age alone.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Immersion;