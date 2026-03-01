import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Workshops = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy section-padding pt-24 md:pt-32">
        <div className="container-astra">
          <h1 className="font-heading text-4xl md:text-5xl text-cream font-semibold mb-6">
            Experience Astra firsthand
          </h1>
          <p className="text-cream/50 text-base leading-relaxed max-w-2xl">
            Astra workshops are two connected 75-minute live sessions designed to give families an authentic experience of the Math Circle format. Small cohort. Real problems. No lecture.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      {/* What students experience */}
      <section className="light-section bg-cream section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-8">
            What students experience
          </h2>
          <ul className="space-y-4 text-foreground/60 text-base max-w-2xl">
            {[
              "A carefully chosen anchor problem that invites exploration",
              "Independent reasoning time — no hints, no rushing",
              "Structured group discussion guided by a mentor",
              "Mentor-guided formalization of key insights",
              "A window into how mathematical maturity develops over time",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-gold mt-1.5 text-xs">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Who it's for */}
      <section className="bg-navy section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-2xl md:text-3xl text-cream mb-6">
            Who it is for
          </h2>
          <p className="text-cream/50 text-base leading-relaxed max-w-2xl mb-4">
            Workshops are open to students in Grades 5–10 who are curious about mathematics and willing to engage with challenging problems. No prior competition experience is required.
          </p>
          <p className="text-cream/50 text-base leading-relaxed max-w-2xl">
            Parents are welcome to observe and understand the Astra approach before considering enrollment.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Session format */}
      <section className="light-section bg-cream section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-8">
            Session format
          </h2>
          <div className="space-y-6 max-w-xl">
            <div className="border-l-2 border-gold/40 pl-6">
              <h3 className="font-heading text-lg text-foreground font-semibold">Session 1</h3>
              <p className="text-foreground/50 text-sm mt-1">
                75 minutes — Problem introduction, independent work, initial group discussion.
              </p>
            </div>
            <div className="border-l-2 border-gold/40 pl-6">
              <h3 className="font-heading text-lg text-foreground font-semibold">Session 2</h3>
              <p className="text-foreground/50 text-sm mt-1">
                75 minutes — Extended exploration, proof attempts, mentor-led formalization and reflection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Placement */}
      <section className="bg-navy section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-2xl md:text-3xl text-cream mb-6">
            Placement after workshop
          </h2>
          <p className="text-cream/50 text-base leading-relaxed max-w-2xl mb-4">
            Based on workshop participation and a brief follow-up assessment, students are placed into the appropriate Astra circle. Placement reflects structural readiness, not age or grade level alone.
          </p>
          <p className="text-cream/30 text-sm">
            Workshop participation is required prior to enrollment in any Astra program.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Registration Form */}
      <section className="light-section bg-cream section-padding">
        <div className="container-astra max-w-xl">
          <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-8">
            Register for a workshop
          </h2>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-foreground/70 text-sm mb-1.5 font-heading">Student name</label>
              <input
                type="text"
                className="w-full border border-gold/30 bg-card rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-foreground/70 text-sm mb-1.5 font-heading">Grade</label>
              <input
                type="text"
                className="w-full border border-gold/30 bg-card rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-foreground/70 text-sm mb-1.5 font-heading">Parent email</label>
              <input
                type="email"
                className="w-full border border-gold/30 bg-card rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-foreground/70 text-sm mb-1.5 font-heading">City</label>
              <input
                type="text"
                className="w-full border border-gold/30 bg-card rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="block text-foreground/70 text-sm mb-1.5 font-heading">
                What interests your child about mathematics?
              </label>
              <textarea
                rows={3}
                className="w-full border border-gold/30 bg-card rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-gold resize-none"
              />
            </div>
            <Button variant="gold-on-light" size="lg" type="submit" className="w-full">
              Submit registration
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Workshops;
