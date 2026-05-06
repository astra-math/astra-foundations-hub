import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Workshops = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy section-padding pt-24 md:pt-32">
        <div className="container-astra">
          <h1 className="font-heading text-3xl md:text-4xl text-cream font-semibold mb-6">
            Experience Astra firsthand
          </h1>
          <div className="space-y-4 text-cream/70 text-sm md:text-base leading-relaxed max-w-2xl mb-8">
            <p>
              Astra Discovery Sessions consist of two connected 75-minute live sessions designed to give students and parents an authentic experience of the Math Circle format.
            </p>
            <p>
              Small cohort. Real problems. No lectures.
            </p>
          </div>
          <Button variant="gold" size="lg" asChild>
            <Link to="/registration">Register for Discovery Sessions</Link>
          </Button>
        </div>
      </section>

      <div className="gold-divider" />

      {/* What students experience */}
      <section className="light-section bg-cream section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
            What students experience
          </h2>
          <ul className="space-y-3 text-foreground/70 text-sm md:text-base leading-relaxed max-w-2xl mb-8">
            {[
              "A carefully chosen anchor problem that invites exploration",
              "Time to think independently before any solution is shown",
              "Structured discussion where students explain and examine ideas together",
              "Mentor guidance that helps formalize the key mathematical insight",
              "A glimpse into how mathematical maturity develops over time",
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

      {/* Who it is for */}
      <section className="bg-navy section-padding">
        <div className="container-astra">
          <h2 className="font-heading text-3xl md:text-4xl text-cream mb-12">
            Who it is for
          </h2>
          <div className="space-y-4 text-cream/70 text-sm md:text-base leading-relaxed max-w-2xl">
            <p>
              Discovery Sessions are open to students in Grades 5–9 who are curious about mathematics and willing to engage with challenging problems. No prior competition experience is required.
            </p>
            <p>
              Parents are welcome to observe the session and understand the Astra approach before considering enrollment.
            </p>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Registration Form */}
      <section className="light-section bg-cream section-padding text-center">
        <div className="container-astra max-w-xl flex flex-col items-center">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
            Register for Discovery Sessions
          </h2>
          <p className="text-foreground/70 text-sm md:text-base mb-8 max-w-md">
            Click below to open the registration form and secure your spot in an upcoming cohort.
          </p>
          <Button variant="gold-on-light" size="lg" asChild>
            <Link to="/registration">Register Now</Link>
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
              <p className="text-cream/70 text-sm md:text-base italic leading-relaxed mb-4">
                "I really enjoyed the math discovery sessions. The topic was interesting and made me think in new ways. The activities were fun, and I liked trying different ways to solve the problems. It didn't feel like a regular class, and I had a great time learning something new."
              </p>
              <cite className="text-cream text-xs md:text-sm not-italic mt-auto block">— Anushka, Grade 6 student, <br/> Inventure Academy, Bangalore</cite>
            </blockquote>
            <blockquote className="border-l border-gold/30 pl-6 flex flex-col justify-between">
              <p className="text-cream/70 text-sm md:text-base italic leading-relaxed mb-4">
                "The sessions opened up a completely new way of thinking about mathematics for my child."
              </p>
              <cite className="text-cream text-xs md:text-sm not-italic mt-auto block">— Ketaki, Mother of a Grade 5 student, Phoenix Greens, Hyderabad</cite>
            </blockquote>
            <blockquote className="border-l border-gold/30 pl-6 flex flex-col justify-between">
              <p className="text-cream/70 text-sm md:text-base italic leading-relaxed mb-4">
                "As a parent, I feel these are the right classes for her. They can help her become better at maths and overcome the challenges she previously faced."
              </p>
              <cite className="text-cream text-xs md:text-sm not-italic mt-auto block">— Sudhanshu, Father of a Grade 7 student, The Knowledge Habitat, Gurugram</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Workshops;
