import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-navy">
      <div className="gold-divider" />
      <div className="py-20 md:py-28 container-astra text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-cream mb-6">
          Begin the journey
        </h2>
        <p className="text-cream/70 text-lg mx-auto mb-10 max-w-xl">
          All enrollments begin with Free Discovery Sessions. Register here to attend them.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link to="/registration" className="block">
            <Button variant="gold" size="lg" className="w-full sm:w-auto">Register for Discovery Sessions</Button>
          </Link>
          <Link to="/programs" className="block">
            <Button variant="outline-gold" size="lg" className="w-full sm:w-auto">Explore the programs</Button>
          </Link>
        </div>
        <p className="text-cream/70 text-sm mx-auto text-center">
          Discovery Session participation is required prior to enrollment.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
